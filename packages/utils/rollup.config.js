import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import json from '@rollup/plugin-json'
import rollupTypescript from '@rollup/plugin-typescript'
import typescript from 'typescript'
import clear from 'rollup-plugin-clear'
// 自己写的roll插件-虚拟模块
import virtualModule from './plugins/rollup-plugin-virtual-module.js'

const production = !process.env.ROLLUP_WATCH
const pkg = {
  main: './dist/index.cjs.js',
  module: './dist/index.esm.js',
  browser: './dist/index.umd.js',
  iife: './dist/index.iife.js'
}
export default [
  // browser-friendly UMD build
  {
    input: './src/index.ts',
    output: [
      // { name: "HelpUtils", file: pkg.browser, format: "umd" },
      { name: 'HelpUtils', file: pkg.iife, format: 'iife', sourcemap: false }
    ],
    plugins: [
      clear({ targets: ['dist'] }),
      json(),
      virtualModule(),
      rollupTypescript({
        // include: "src/**/*.ts",
        exclude: 'node_modules/**',
        typescript: typescript
      }),
      resolve(), // so Rollup can find `vue`
      commonjs(), // so Rollup can convert `vue` to an ES module
      production && terser({ maxWorkers: 4 })
    ]
  },
  {
    input: './src/index.ts',
    external: ['vue'], // 指出哪些模块需要被视为外部引入, 'vue'库不打包
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      clear({ targets: ['dist'] }),
      json(),
      virtualModule(),
      rollupTypescript({
        // include: "src/**/*.ts",
        exclude: 'node_modules/**',
        typescript: typescript
      })
    ]
  }
]
