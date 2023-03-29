# 快速开始

## 介绍

这里为您介绍常见开发模式下接入工具库的最基本方式。

## 安装

### script 标签引入

```html
<div id="app"></div>
<script src="./node_modules/@helpvue/utils/dist/index.iife.js"></script>
<script>
  // ...
</script>
```

### Webpack/Vite 使用

安装：`npm i @helpvue/utils -S`

全局引入

```ts
import helpUtils from '@helpvue/utils'
console.log(helpUtils)
```
