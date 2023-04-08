import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  build: {
    lib: { entry: './components/index.ts' },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      output: [
        // { format: 'umd', dir: './dist', entryFileNames: 'index.umd.js', name: 'HelpPvue', globals: { vue: 'Vue' } },
        // { format: 'es', dir: './dist/es', entryFileNames: '[name].js', preserveModules: true, preserveModulesRoot: 'src' },
        // { format: 'cjs', dir: './dist', entryFileNames: 'index.cjs.js', globals: { vue: 'Vue' } },
        { format: 'iife', dir: './.comps', entryFileNames: 'index.iife.js', name: 'Comps', globals: { vue: 'Vue' } }
      ]
    }
  }
})
