// import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import vuePlugins from '@vitejs/plugin-vue'
import postcssPresetEnv from 'postcss-preset-env'
// import { ViteAliases } from 'vite-aliases'// 配置路径别名的插件：
// import { createHtmlPlugin } from 'vite-plugin-html'// 处理html文件的插件：
// import { viteMockServe } from 'vite-plugin-mock' // 处理拦截数据请求：
import { ViteAliases } from './plugins/vite-aliases'
import { createHtmlPlugin } from './plugins/vite-plugin-html'
import { viteMockServe } from './plugins/vite-plugin-mock'
import { checker } from 'vite-plugin-checker'
import viteCompression from 'vite-plugin-compression'

export default defineConfig(({ command, mode }) => {
  return {
    /** 定义全局变量, 通过: import.meta.env.xxx 获取*/
    // 根据当前工作目录中的 `mode` 加载 .env 文件
    // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
    define: Object.entries(loadEnv(mode, 'env', 'VITE_')).reduce((prev, [k, v]) => {
      prev[`import.meta.env.${k}`] = JSON.stringify(v)
      return prev
    }, {}),
    /** 优化选项 */
    optimizeDeps: {
      // exclude: ["lodash-es"], // vite不解析
    },
    /** 相关插件 */
    plugins: [
      vuePlugins(),
      // ts报错提示
      checker({ typescript: true }),
      // 配置路径别名的插件
      ViteAliases(),
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
      }),
      // gzip压缩
      viteCompression(),
      /** vite独有的钩子 */
      {
        config(config, { command }) {
          // 返回部分配置（推荐）
          // 在解析 Vite 配置前调用。钩子接收原始用户配置（命令行选项指定的会与配置文件合并）和一个描述配置环境的变量，包含正在使用的 mode 和 command。
          // 它可以返回一个将被深度合并到现有配置中的部分配置对象，或者直接改变配置（如果默认的合并不能达到预期的结果）。
          return {}
        },
        configureServer(server) {
          // 是用于配置开发服务器的钩子。最常见的用例是在内部 connect 应用程序中添加自定义中间件:
          server.middlewares.use((req, res, next) => {
            // 自定义请求处理...
            next()
          })
        },
        transformIndexHtml(html) {
          // 转换 index.html 的专用钩子。钩子接收当前的 HTML 字符串和转换上下文。上下文在开发期间暴露ViteDevServer实例，在构建期间暴露 Rollup 输出的包。
          return html
        },
        configResolved(options) {
          // 每个配置文件的解析流程完毕后执行的钩子
          // console.log('配置解析完成', options)
        },
        configurePreviewServer(server) {
          // 返回一个钩子，会在其他中间件安装完成后调用
          // 与 configureServer 相同但是作为预览服务器。它提供了一个 connect 服务器实例及其底层的 http server。
          // 与 configureServer 类似，configurePreviewServer 这个钩子也是在其他中间件安装前被调用的。
          // 如果你想要在其他中间件 之后 安装一个插件，你可以从 configurePreviewServer 返回一个函数，它将会在内部中间件被安装之后再调用：
          return () => {
            server.middlewares.use((req, res, next) => {
              // 自定义处理请求 ...
            })
          }
        },
        handleHotUpdate({ server }) {
          // 热更新相关。执行自定义 HMR 更新处理。钩子接收一个带有以下签名的上下文对象：
          // server.ws.send({ type: 'custom', event: 'special-update', data: {} })
          return []
        }
      },
      /** rollup的钩子 */
      // 在开发中，Vite 开发服务器会创建一个插件容器来调用 Rollup 构建钩子，与 Rollup 如出一辙
      {
        /** 以下钩子在服务器启动时被调用 */
        options(rollupOptions) {
          // 配置的是：`build.rollupOptions` 这个对象
          // console.log('rollupOptions', rollupOptions)
        },
        buildStart(fullOptions) {
          // 配置对象完成后调用，作用同`configResolved`
          // 配置的是：build.rollupOptions 这个对象
          // console.log('fullOptions', fullOptions)
        }
      }
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
      minify: ['production'].includes(mode) && command == 'build', // 打包是否压缩
      // 配置rollup的构建策略
      rollupOptions: {
        // 配置多入口
        input: {
          main: path.resolve(__dirname, './index.html')
        },
        // 控制输出
        output: {
          assetFileNames: '[name].[hash:4].[ext]', // 配置静态资源
          // 给公共插件分包
          manualChunks: (id) => {
            if (id.includes('/node_modules/')) return 'vendor'
          }
        }
      }
      // emptyOutDir: true // 打包前清除dist目录
      // assetsDir: 'assets', // 静态资源目录
      // outDir: 'dist', // 输出目录
      // assetsInlineLimit: 409600 // 大图片转成base64，默认4096(4kb)
    }
  }
})
