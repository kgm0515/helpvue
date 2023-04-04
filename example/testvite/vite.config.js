import { defineConfig, loadEnv } from 'vite'
import vuePlugins from '@vitejs/plugin-vue'

export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const defineObject = {}
  Object.entries(loadEnv(mode, 'env', 'VITE_')).forEach(([k, v]) => (defineObject[`import.meta.env.${k}`] = JSON.stringify(v)))
  return {
    // vite 配置
    define: defineObject,
    optimizeDeps: {
      // exclude: ["lodash-es"], // vite不解析
    },
    plugins: [vuePlugins()]
  }
})
