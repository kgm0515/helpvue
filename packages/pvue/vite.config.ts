import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(), dts({ entryRoot: 'src', outputDir: 'types' })],
  build: {
    lib: { entry: './src/index.ts' },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: [
        { format: 'umd', dir: './dist', entryFileNames: 'index.umd.js', name: 'HelpPvue', globals: { vue: 'Vue' } },
        { format: 'es', dir: './dist/es', entryFileNames: '[name].js', preserveModules: true, preserveModulesRoot: 'src' },
        { format: 'cjs', dir: './dist', entryFileNames: 'index.cjs.js', globals: { vue: 'Vue' } },
        { format: 'iife', dir: './dist', entryFileNames: 'index.iife.js', name: 'HelpPvue', globals: { vue: 'Vue' } }
      ]
    }
  }
})
