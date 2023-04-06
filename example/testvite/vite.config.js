import { defineConfig, loadEnv } from 'vite'
import vuePlugins from '@vitejs/plugin-vue'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'
import postcssPresetEnv from 'postcss-preset-env'
import path from 'path'

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
      // 支持import语法
      vuePlugins(),
      dynamicImportVars({ include: '/**/*.svg' })
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
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
        '@src': path.resolve(__dirname, './src'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@comp': path.resolve(__dirname, './src/components')
      }
    }
  }
})
