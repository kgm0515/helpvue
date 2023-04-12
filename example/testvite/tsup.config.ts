import { defineConfig } from 'tsup'

export default defineConfig({
  // 不打包的文件
  external: ['vue', /^vitepress/],
  // 入口文件
  entry: ['./plugins/vite-plugin-vitepress/index.ts', './plugins/vite-plugin-vitepress/theme.ts'],
  // 生成类型文件
  dts: true,
  // 清空组件
  clean: true,
  // 生产文件的类型
  format: ['cjs', 'esm'],
  outDir: '.plugins/',
  sourcemap: false
})
