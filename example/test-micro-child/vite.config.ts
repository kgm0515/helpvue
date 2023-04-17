import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vitePluginMicroSub } from './plugins/vite-plugin-micro-sub'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8144
  },
  preview: {
    port: 9099
  },
  plugins: [vue(), vitePluginMicroSub()],
  resolve: {
    alias: {
      '@/*': '/src/*'
    }
  },
  build: {
    minify: false // 不压缩
  }
})
