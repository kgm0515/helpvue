// import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vuePlugins from '@vitejs/plugin-vue'
import postcssPresetEnv from 'postcss-preset-env'
// import { ViteAliases } from 'vite-aliases'// 配置路径别名的插件：
// import { createHtmlPlugin } from 'vite-plugin-html'// 处理html文件的插件：
// import { viteMockServe } from 'vite-plugin-mock' // 处理拦截数据请求：
import { ViteAliases } from './plugins/vite-aliases'
import { createHtmlPlugin } from './plugins/vite-plugin-html'
import { viteMockServe } from './plugins/vite-plugin-mock'

export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const defineObject = {}
  Object.entries(loadEnv(mode, 'env', 'VITE_')).forEach(([k, v]) => (defineObject[`import.meta.env.${k}`] = JSON.stringify(v)))
  return {
    /** 定义全局变量, 通过: import.meta.env.xxx 获取*/
    define: defineObject,
    /** 优化选项 */
    optimizeDeps: {
      // exclude: ["lodash-es"], // vite不解析
    },
    /** 相关插件 */
    plugins: [
      // 配置路径别名的插件
      ViteAliases(),
      // 支持import语法
      vuePlugins(),
      // 处理html文件
      createHtmlPlugin({
        inject: {
          data: {
            title: '这是网站标题',
            description: 'Where the GPU for the Web work happens! Contribute to gpuweb/gpuweb development by creating an account on GitHub.'
          }
        }
      }),
      // 模拟数据
      viteMockServe({
        mockPath: 'mock', // 接口文件夹目录名
        localEnabled: command === 'serve' // 只在开发环境下面才启用
      })
    ],
    /** css相关配置 */
    css: {
      /** css模块化相关配置,这个配置最终会传给postcss */
      modules: {
        // scopeBehaviour: 'local', // 是否开启模块化的标志（）
        // generateScopedName: '[name]_[local][hash:5]', // 生成模块化类名的规则(也可以配置成函数)
        // hashPrefix: 'fix', // 生成hash字符串的前缀
        // globalModulePaths:[], // 不参与模块化的路径
        localsConvention: 'camelCase' // style.module中把aaa-bbb转化为aaaBbb的驼峰写法
      },
      /** css预处理器的全局参数 */
      preprocessorOptions: {
        // 整个对象会最终给到less的执行参数（全局参数）中：https://lesscss.org/usage/#less-options
        less: {
          // 可以做数学计算：将{padding: 20px / 2} 转化为 {padding: 10px}
          math: 'always',
          // 配置全局变量：在css中可以使用 { color: @mainColor;}
          globalVars: {
            mainColor: '#fff'
          }
        }
      },
      devSourcemap: true, // 开启css的文件索引
      /** postcss预设插件 */
      postcss: {
        plugins: [
          postcssPresetEnv({
            // importFrom: path.resolve(__dirname, './src/assets/css/var.css') // 需要记住某些全局变量(已经失效)
          })
        ]
      }
    },
    /** 配置路径别名 */
    // resolve: {
    //   alias: {
    //     '@': path.resolve(__dirname, './'),
    //     '@src': path.resolve(__dirname, './src'),
    //     '@assets': path.resolve(__dirname, './src/assets'),
    //     '@components': path.resolve(__dirname, './src/components')
    //   }
    // },
    /** 打包配置 */
    build: {
      // 配置rollup的构建策略
      rollupOptions: {
        // 控制输出
        output: {
          assetFileNames: '[name].[hash:4].[ext]' // 配置静态资源
        }
      }
      // emptyOutDir: true // 打包前清除dist目录
      // assetsDir: 'assets', // 静态资源目录
      // outDir: 'dist', // 输出目录
      // assetsInlineLimit: 409600 // 大图片转成base64，默认4096(4kb)
    }
  }
})
