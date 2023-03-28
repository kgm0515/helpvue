# helpvue

vue 组件库，工具库

文档地址：`https://kgm0515.github.io/helpvue/`

文档链接

- 关于 pnpm 组件库
- 开发 ui 组件库
- 创建项目文档
- 项目文档部署
- 开发 utils 工具库

## 为什么使用 pnpm

- 包安装速度极快
- 磁盘空间利用率高
- monorepo：方便版本管理，天然内置支持当仓库多包, 相互引用方便。

## 开发 ui 组件库

### 初始化，安装依赖

```sh
npm i pnpm -g # 安装pnpm全局依赖
pnpm --help # 帮助文档
pnpm init -y # 项目初始化
# 安装vue/vite
pnpm i typescript vite -D # 安装开发依赖
pnpm i vue # 安装生产依赖
```

### 创建配置文件`./pnpm-workspace.yaml`

```yaml
packages:
  # all packages in subdirs of packages/ and components/
  - 'packages/**'
```

### 创建配置文件`./.prettierrc`

```json
{
  "printWidth": 250,
  "semi": false,
  "arrowParens": "always",
  "singleQuote": true,
  "endOfLine": "auto",
  "vueIndentScriptAndStyle": true,
  "trailingComma": "none"
}
```

### 创建 pc 端组件库`pvue`项目

- 在`packages` 文件夹下执行`npm create vite@latest`
- 设置项目名为`pvue`
- 修改 pacakege.json：`{ "name": "@helpvue/pvue" }`
- 清理项目文件夹下的`src`目录, 留下`vite-env.d.ts`文件。src 目录作为组件的根目录

### 创建组件案例`button`

创建：`src/button/index.ts`

```ts
import type { Plugin, App } from 'vue'
import { compInstall } from '../index'
import Component from './index.vue'
Component.install = (app: App, config: { prefix: 'pvue' }) => compInstall(app, config, Component)
export default Component as typeof Component & Plugin
```

创建：`src/button/index.vue`

```html
<template>
  <button :disabled="disabled" :class="getClass()">
    <span class="pvue-button__content"><slot/></span>
  </button>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'button',
  props: {
    type: {
      type: String as PropType<'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'>,
      default: 'default'
    },
    size: {
      type: String as PropType<'small' | 'middle' | 'large'>,
      default: 'middle'
    },
    disabled: {
      type: Boolean
    },
    text: {
      // 文字按钮
      type: Boolean,
      default: false
    },
    bg: {
      // 文字按钮是否带背景
      type: Boolean,
      default: false
    },
  },
  setup(props) {
    const { type, size, disabled, text, bg } = props
    /** 组装样式 */
    const getClass = () => {
      const tempList = ['pvue-button', `pvue-button--${type}`, `pvue-button--${size}`]
      if (disabled) tempList.push(`pvue-button--disabled`)
      if (text) tempList.push(`pvue-button--text`)
      if (bg) tempList.push(`pvue-button--bg`)
      return tempList.join(' ')
    }
    return {getClass}
  }
})
```

创建：`src/index.ts`

```ts
import type { App } from 'vue'
import * as components from './components'
export * from './components'
// 从外部传入的配置对象
export const appConfig = { prefix: 'pvue' }
/**
 * 创建组件通用的install方法
 * @param app vue实例
 * @param config 配置对象
 * @param comps 某一个组件
 * @returns
 */
export function compInstall(app: App, config: { prefix: 'pvue' }, comps: Component<any, any, any, ComputedOptions, MethodOptions>) {
  Object.assign(appConfig, config || {}) // 修改appConfig的值
  let name = comps.name
  if (!(name && typeof name === 'string')) {
    throw new Error('组件必须有name属性')
  }
  name = name.toLocaleLowerCase()
  // 前缀
  const prefix = config && config.hasOwnProperty('prefix') ? config.prefix : 'pvue'
  const upperPrefix = prefix.slice(0, 1).toUpperCase() + prefix.slice(1)
  // 大写的名字
  const upperName = name
    .split('-')
    .filter((item: string) => !!item)
    .map((str: string) => {
      return str.slice(0, 1).toUpperCase() + str.slice(1)
    })
    .join('')
  const nameList = [`${prefix}-${name}`, `${upperPrefix}${upperName}`]
  nameList.forEach((str) => app.component(str, comps))
  return app
}

export default {
  install(app: App, config: { prefix: 'pvue' }) {
    for (const keyName in components) {
      const Comp = (components as any)[keyName]
      if (Comp.install) app.use(Comp, config)
    }
    return app
  }
}
```

### pvue 组件库打包配置

安装插件：`pnpm i vite-plugin-dts -D`

修改`packages/pvue/vite.config.ts`配置

```ts
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
        // { format: 'umd', dir: './dist', entryFileNames: 'index.umd.js', name: 'Pvue', globals: { vue: 'Vue' } }
        { format: 'es', dir: './dist/es', entryFileNames: '[name].js', preserveModules: true, preserveModulesRoot: 'src' },
        { format: 'cjs', dir: './dist', entryFileNames: 'index.cjs.js', globals: { vue: 'Vue' } },
        { format: 'iife', dir: './dist', entryFileNames: 'index.iife.js', name: 'Pvue', globals: { vue: 'Vue' } }
      ]
    }
  }
})
```

修改`packages/pvue/package.json`

```json
{
  "name": "@helpvue/pvue",
  "private": false,
  "version": "0.0.1",
  "description": "pc端vue组件库",
  "homepage": "https://github.com/kgm0515/help-vue/tree/main/packages/pvue",
  "files": ["dist", "types", "package.json"],
  "main": "./dist/index.cjs.js",
  "module": "./dist/es/index.js",
  "exports": {
    ".": {
      "require": "./dist/index.cjs.js",
      "import": "./dist/es/index.js"
    },
    "./dist/*": "./dist/*"
  },
  "types": "types/index.d.ts",
  "publishConfig": {
    "access": "public"
  },
  "scripts": {
    "build": "gulp clean && npm run build:lib && npm run build:css",
    "build:lib": "vue-tsc --noEmit && vite build",
    "build:css": "gulp compile",
    "publish": "npm publish"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/kgm0515/help-vue.git"
  },
  "keywords": ["@helpvue/pvue", "vue组件库"],
  "author": "kgm0515 <498413945@qq.com>"
}
```

执行打包命令:`npm run build:lib`, 可以发现生成了`dist`打包目录和`types`类型目录

### pvue 样式打包配置

我们所有的样式都定义在`style`文件夹中。

为什么组件和样式分离？有利于样式和组件的单独引用，减少代码体积

安装相关依赖

```sh
pnpm i -D gulp @types/gulp @types/gulp-autoprefixer @types/gulp-clean-css @types/gulp-less @types/less gulp-autoprefixer gulp-clean-css gulp-less less
```

创建文件`./gulpfile.js`

```js
const { src, dest } = require('gulp')
const gulpLess = require('gulp-less')
const autoPrefixer = require('gulp-autoprefixer')
const cleanCss = require('gulp-clean-css')
const fs = require('fs-extra')
// 删除相关文件夹
const clean = async (cb) => {
  fs.removeSync('./dist')
  fs.removeSync('./types')
  cb()
}
// 编译css
function compile() {
  return src('./style/**/*.less').pipe(gulpLess()).pipe(autoPrefixer()).pipe(cleanCss()).pipe(dest('./dist/style'))
}
module.exports = { compile, clean }
```

打包`npm run build:css`

## 创建项目文档

### 创建`packages/doc`目录

```sh
pnpm init # 初始化项目
npm install -D vitepress # 安装依赖
npx vitepress init # Where should VitePress initialize the config? ./docs
```

运行开发环境：`npm run docs:dev`

### 安装组件库

```sh
pnpm i @helpvue/pvue # 安装我们的ui组件库
```

修改`packages/doc/package.json`

```json
{
  "dependencies": {
    "@helpvue/pvue": "workspace:^"
  }
}
```

### 创建配置文件:`packages/doc/docs/.vitepress/theme/index.ts`

```js
import DefaultTheme from 'vitepress/theme'
/** 引入方式一：引入源文件 */
import Pvue from '../../../../pvue/src/index'
import '../../../../pvue/style/index.less'
/** 引入方式一：引入库文件
import Pvue from '@helpvue/pvue'
import '@helpvue/pvue/dist/style/index.css'
* */
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(Pvue)
    // ctx.app.component('VueClickAwayExample', VueClickAwayExample)
  }
}
```

在.md 文件中直接使用

```md
<PvueButton>按钮</PvueButton>
```

## 项目文档部署

### shell 脚本部署组件库文档

在根目录下创建 shell 脚本 ./scripts/deploySite.sh

```sh
#!/usr/bin/env sh
# 发生错误时终止
set -e
# 构建
npm run build
# 进入构建文件夹
cd ./packages/site/dist
# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME
git init
git checkout -b main
git add -A
git commit -m 'deploy'
# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main
# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages
git push -f git@github.com:kgm0515/helpvue.git main:gh-pages
cd -
```

打开 gitbash，执行命令`sh ./scripts/deploySite.sh`

部署完毕，打开浏览器`https://kgm0515.github.io/helpvue/`

### node 脚本部署组件库文档

安装插件: `pnpm i shelljs -w -D`

在根目录下创建 shell 脚本 ./scripts/deploySite.js

```js
const shell = require('shelljs')
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git')
  shell.exit(1)
}
if (shell.exec('npm run build').code !== 0) {
  shell.echo('Error: npm run build 打包失败')
  shell.exit(1)
} else {
  shell.echo('Success: npm run build 打包成功...')
}
shell.cd('packages/doc/public')
// 报错：仓库可能已经被初始化了
if (shell.exec('git init').code !== 0) {
  shell.echo('Error: git init 执行失败')
}
// 报错：当前分支已经在main分支
if (shell.exec('git checkout -b main').code !== 0) {
  shell.echo('Error: git checkout -b main 执行失败')
}
if (shell.exec('git add -A').code !== 0) {
  shell.echo('Error: git add -A 执行失败')
  shell.exit(1)
}
if (shell.exec('git commit -m "deploy"').code !== 0) {
  shell.echo('Error: git commit -m "deploy"  执行失败')
  shell.exit(1)
}
if (shell.exec('git push -f git@github.com:kgm0515/helpvue.git main:gh-pages').code !== 0) {
  shell.echo('Error: git push -f git@github.com:kgm0515/helpvue.git main:gh-pages 执行失败')
  shell.exit(1)
}
shell.cd('-')
```

修改./package.json

```json
{
  "scripts": {
    "dev:doc": "cd ./packages/doc && pnpm docs:dev",
    "build": "npm run build:pvue && npm run build:doc",
    "build:pvue": "cd ./packages/pvue && pnpm i && pnpm build",
    "build:doc": "cd ./packages/doc && pnpm i && pnpm docs:build",
    "publish": "npm run publish:ui && npm run publish:cli",
    "publish:pvue": "cd ./packages/pvue && pnpm publish",
    "deploy:doc": "node ./scripts/deploySite.js"
  }
}
```

命令行运行 `npm run deploy:doc`

部署完毕，打开浏览器`https://kgm0515.github.io/helpvue/`

## 开发 utils 工具库

模块格式说明

- amd – 异步模块定义，用于像 RequireJS 这样的模块加载器
- cjs – CommonJS，适用于 Node 和 Browserify/Webpack
- es – 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 script type="module" 标签引入
- iife – 一个自动执行的功能，适合作为 script 标签。（如果要为应用程序创建一个捆绑包，您可能想要使用它，因为它会使文件大小变小。）
- umd – 通用模块定义，以 amd，cjs 和 iife 为一体
- system - SystemJS 加载器格式

### 初始化

创建目录: `./packages/utils`

初始化工具库： `pnpm init`

修改项目名: `./packages/utils/package.json`

```json
{
  "name": "@helpvue/utils"
}
```

### 安装插件

```sh
# 全局安装rollup
## 指定配置文件 ：yarn rollup --config rollup.config.js
npm install --global rollup

# @rollup/plugin-commonjs :  将commonJS代码转译成 esmodule的代码
# @rollup/plugin-node-resolve : 让rollup可以找到node环境的其他依赖
# 在 rollup.config.js 中配置该插件
## import resolve from '@rollup/plugin-node-resolve';
## import commonjs from '@rollup/plugin-commonjs';
## export default { plugins: [resolve(), commonjs()] }; // resolve：让rollup可以找到node环境node_modules的其他依赖, commonjs:  将commonJS代码转译成 esmodule的代码
npm i @rollup/plugin-commonjs @rollup/plugin-node-resolve -D

# @rollup/plugin-terser 对生成的代码进行打包
# 在 rollup.config.js 中配置该插件
## import terser from '@rollup/plugin-terser';
## export default { plugins: [terser()] };
## export default { plugins: [terser({maxWorkers: 4})] }; // 调用4个线程打包
npm install @rollup/plugin-terser -D

# npm-run-all : 同时运行多个脚本
# 参考文档 : https://juejin.cn/post/6854573216363446286
# 这个包提供三个命令，分别是 npm-run-all run-s run-p，其中后两个都是 npm-run-all 带参数的简写，分别对应串行和并行。
# 顺序执行 : $ npm-run-all clean lint build  依次执行三个任务，注意如果某个脚本退出时返回值为空值，那么后续脚本默认是不会执行的，你可以使用参数 --continue-on-error 来规避这种行为。
# 并行执行 : $ npm-run-all --parallel lint build 同时执行这两个任务，需要注意如果脚本退出时返回空值，所有其它子进程都会被 SIGTERM 信号中断，同样可以用 --continue-on-error 参数禁用行为
# 混合执行 : $ npm-run-all clean lint --parallel watch:html watch:js 这段命令首先按顺序执行 clean lint 两个脚本，然后同时执行 watch:html 和 watch:js 的任务。
# Glob-like 名称匹配
## $ npm-run-all --parallel watch:* 👆 不匹配分隔符，同时运行 watch:html watch:js 但不运行 watch:js:index
## $ npm-run-all --parallel watch:** 👆 匹配分隔符，所有以 watch: 开头的脚本都会被运行。
# 附带运行参数
## $ npm-run-all build "start-server -- --port {1}" -- 8080 在脚本名称后使用双引号包裹来提供参数，甚至还支持用占位符，延迟到运行命令时再提供参数。
## 上例是占位符的工作方式，实际使用时可以这样编写 package.json：{ "scripts": { "start": "npm-run-all build \"start-server -- --port {1}\" --" } }
## 运行命令时只需：npm run start 8080
## 指定序号的单个参数 ：{1}, {2}, ...
# Node API
## const runAll = require("npm-run-all");
## runAll(["clean", "lint", "build:*"], {parallel: false}).then(() => console.log("done!")).catch(err =>  console.log("failed!"))
## runAll(["build:* -- --watch"], {parallel: true}).then(() => console.log("done!")).catch(err =>  console.log("failed!"))
# npm i npm-run-all -S

# serve 帮助您提供静态站点、单页应用程序或仅静态文件（无论是在设备上还是在本地网络上）。它还为列出目录内容提供了一个简洁的界面：
## package.json：{ "scripts": { "start": "serve public" } } 在public文件夹启动一个静态服务
# npm i serve -D

# tslib : 这是一个TypeScript的运行库，包含所有TypeScript助手函数. 这个库主要由TypeScript中的--importHelpers标志使用。当使用--importHelpers时，在以下发出的文件中使用__extends和__assign等助手函数的模块：

# @rollup/plugin-typescript ： Rollup和Typescript之间的无缝集成。
# 在 rollup.config.js 中配置该插件
## import typescript from '@rollup/plugin-typescript';
## export default {input: './main.ts',plugins: [typescript(/*{ plugin options }*/)]}
## export default {input: './main.ts',plugins: [typescript({exclude: "node_modules/**",typescript: require("typescript"),})]}
npm install @rollup/plugin-typescript typescript tslib -D

# @rollup/plugin-json 用来引入json文件
# 在 rollup.config.js 中配置该插件
## import json from "@rollup/plugin-json";
## plugins: [json()]
# 在代码中使用
## import { version } from "../package.json";
## export const getVersion = () => version;
npm install @rollup/plugin-json -D

# npm i @rollup/plugin-typescript -D
npm i @rollup/plugin-typescript -D

# rollup-plugin-clear 清空文件夹
npm i rollup-plugin-clear -D

# typedoc : 文档生成
# 案例: https://zhuanlan.zhihu.com/p/577159570
# 官方文档: https://typedoc.org/guides/options/
# 官方文档: https://tsdoc.org/
# 在modules/index.ts中编写文档注释
## /** 当前函数库版本 */
## export const version: string = "1.0.0";
# 在package.json中添加生成文档的命令 : {"doc": "npx typedoc src/main.ts"}
## 运行npm run doc命令生成文档，文档将生成在docs目录，可以通过gitpage展示文档。
npm install typedoc -g
```

### 支持 typescript

初始化生成 tsconfig.json: `tsc --init`

修改 tsconfig.json

```json
/**
  编译报错:  Plugin typescript: @rollup/plugin-typescript TS2732: Cannot find module '../package.json'.
  Consider using '--resolveJsonModule' to import module with '.json' extension.
*/
"resolveJsonModule": true,
/* Specify what module code is generated. */
"module": "esnext" ,
/* Generate .d.ts files from TypeScript and JavaScript files in your project. */
"declaration": true,
/* Specify the output directory for generated declaration files. */
"declarationDir": "./type",
/* Specify the root folder within your source files. */
"rootDir": "./src" ,
/* Specify how TypeScript looks up a file from a given module specifier. */
"moduleResolution": "node",
```

### rollup.config.js

```js

```
