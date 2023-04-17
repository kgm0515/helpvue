import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  // 在开发服务器的配置
  server: {
    port: 8143
  },
  plugins: [vue()]
})
