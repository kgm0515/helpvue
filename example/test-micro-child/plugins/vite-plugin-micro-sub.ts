import path from 'path'
import { transformWithEsbuild, normalizePath } from 'vite'
import type { PluginOption } from 'vite'

const imagesRE = new RegExp(`\\.(png|webp|jpg|gif|jpeg|tiff|svg|bmp)($|\\?)`)

export interface PluginOptions {
  styleAppendTo: string
}

export const vitePluginMicroSub = (
  pluginOptions: PluginOptions = {
    styleAppendTo: 'parentNode'
  }
): PluginOption => {
  return {
    name: 'vite-plugins-micro',
    config() {
      return {
        build: {
          // es2020 支持 import.meta 语法
          target: 'es2020',
          // 打包为一个 CSS 文件，通过 main.js 自行插入，不自动插入到 header 中
          cssCodeSplit: true,
          rollupOptions: {
            // external: ['vue'], // 指出哪些模块需要被视为外部引入, 'vue'库不打包
            // 用于控制 Rollup 尝试确保入口块与基础入口模块具有相同的导出
            preserveEntrySignatures: 'allow-extension',
            // input: normalizePath(path.resolve(process.cwd(), './src/main.ts'))
            // 配置多入口
            input: {
              main: normalizePath(path.resolve(process.cwd(), './index.html'))
            }
          }
        }
      }
    },
    transform(code: string, id: string) {
      // 静态资源处理成绝对路径
      if (imagesRE.test(id)) {
        return code.replace(/(export\s+default)\s+(.+)/, `$1 new URL($2, import.meta['url']).href`)
      }
    },
    async generateBundle(options, bundle) {
      let entry: string = ''
      const cssChunks: string[] = []
      for (const cn of Object.keys(bundle)) {
        if (cn.includes('main') && cn.endsWith('.js')) {
          entry = cn
        }
        if (cn.endsWith('.css')) {
          cssChunks.push(`./${cn}`)
        }
      }
      if (entry) {
        const cssChunksStr = JSON.stringify(cssChunks)
        // 修正 css 插入的位置
        const result = await transformWithEsbuild(
          `
          import defineApp from './${entry}?micro';
          function createLink(href) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            link.id = href;
            return link;
          }
          const styles = ${cssChunksStr}.map(css => createLink(new URL(css, import.meta['url'])));
          defineApp.styleInject = (parentNode) => {
            styles.forEach((link) => {
              if (!document.getElementById(link.id)) {
                ${pluginOptions.styleAppendTo}.append(link);
              }
            });
          };
          defineApp.styleDelete = (parentNode) => {
            styles.forEach((link) => {
              if (document.getElementById(link.id)) {
                ${pluginOptions.styleAppendTo}.removeChild(link);
              }
            });
          };
          export default defineApp;
        `,
          'main.js',
          { minify: false }
        )
        // 导出微量体积入口文件，配合 hash 和主应用时间戳缓存处理
        this.emitFile({ fileName: 'main.js', type: 'asset', source: result.code })
      }
    }
  }
}

export default vitePluginMicroSub
