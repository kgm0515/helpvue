# helpvue

vue 组件库，工具库

## 为什么使用 pnpm

- 包安装速度极快
- 磁盘空间利用率高
- monorepo：方便版本管理，天然内置支持当仓库多包, 相互引用方便。

## 初始化

安装依赖

```sh
npm i pnpm -g # 安装pnpm全局依赖
pnpm --help # 帮助文档
pnpm init -y # 项目初始化
# 安装vue/vite
pnpm i typescript vite -D # 安装开发依赖
pnpm i vue # 安装生产依赖
```

创建配置文件`./pnpm-workspace.yaml`

```yaml
packages:
  # all packages in subdirs of packages/ and components/
  - 'packages/**'
```

创建配置文件`./.prettierrc`

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

## 创建 pc 端组件库项目

相关词语：typescript、 sass、setup、组件和样式分离

### 创建 pc 端组件库`pvue`项目

- 在`packages` 文件夹下执行`npm create vite@latest`
- 设置项目名为`pvue`
- 修改 pacakege.json：`{ "name": "@helpvue/pvue" }`
- 清理项目文件夹下的`src`目录, 留下`vite-env.d.ts`文件。src 目录作为组件的根目录

### 创建组件案例`button`

创建：`src/button/index.ts`

```ts
import type { App, Plugin } from 'vue'
import Button from './index.vue'
Button.install = (app: App) => {
  app.component(Button.name, Button)
  return app
}
export default Button as typeof Button & Plugin
```

创建：`src/button/index.vue`

```html
<template>
    <button :disabled="disabled" :class="getClass()">
      <span class="nice-button__content"><slot/></span>
    </button>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'PvueButton',
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
export default {
  install(app: App, config: any) {
    for (const keyName in components) {
      const Comp = (components as any)[keyName]
      if (Comp.install) app.use(Comp, config)
    }
    return app
  }
}
```

### pvue 组件库打包

安装插件：`pnpm i vite-plugin-dts -D`

修改`packages/pvue/vite.config.ts`配置

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(), dts({ entryRoot: 'src', outputDir: 'types' })],
  build: {
    lib: { entry: './src/index.ts', name: 'pvue', fileName: 'pvue' },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      // 打包模式，在es模块、commonjs、浏览器中使用
      output: [
        { format: 'es', dir: './dist/es', entryFileNames: '[name].js', preserveModules: true, preserveModulesRoot: 'src' },
        { format: 'cjs', dir: './dist', entryFileNames: 'index.cjs.js', globals: { vue: 'Vue' } },
        { format: 'iife', dir: './dist', entryFileNames: 'index.iife.js', name: 'pvue', globals: { vue: 'Vue' } }
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

### pvue 样式打包

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

## vitepress 创建文档项目

创建`packages/doc`目录

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
git push -f git@github.com:kgm0515/nicevue.git main:gh-pages
cd -
```

打开 gitbash，执行命令`sh ./scripts/deploySite.sh`

部署完毕，打开浏览器`https://kgm0515.github.io/nicevue/`

### node 脚本部署组件库文档

安装插件: `pnpm i shelljs -w -D`

在根目录下创建 shell 脚本 ./scripts/deploySite.js

```js
const shell = require('shelljs')
// const path = require('path')
// const fs = require('fs')

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git')
  shell.exit(1)
}
// if (!fs.existsSync(path.join(__dirname, '../', 'packages/doc/dist'))) {
if (shell.exec('npm run build').code !== 0) {
  shell.echo('Error: npm run build 打包失败')
  shell.exit(1)
} else {
  shell.echo('Success: npm run build 打包成功...')
}
// }

shell.cd('packages/doc/dist')

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
if (shell.exec('git push -f git@github.com:kgm0515/nicevue.git main:gh-pages').code !== 0) {
  shell.echo('Error: git push -f git@github.com:kgm0515/nicevue.git main:gh-pages 执行失败')
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
    "build:doc": "cd ./packages/doc && pnpm i && docs:build",
    "publish": "npm run publish:ui && npm run publish:cli",
    "publish:pvue": "cd ./packages/pvue && pnpm publish",
    "deploy:doc": "node ./scripts/deploySite.js"
  }
}
```

命令行运行 `npm run deploy:doc`

部署完毕，打开浏览器`https://kgm0515.github.io/nicevue/`
