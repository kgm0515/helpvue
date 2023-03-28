---
title: 测试 Markdown 语法
lang: en-US
---

# 快速开始

## 介绍

这里为您介绍常见开发模式下接入组件库的最基本方式。

## 安装

### script 标签引入

```html
<div id="app"></div>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="./node_modules/@helpvue/pvue/dist/index.iife.js"></script>
<link rel="stylesheet" href="./node_modules/@helpvue/pvue/dist/style/index.css" />
<script>
  const app = Vue.createApp({
    template: '<PvueButton>按钮</PvueButton>'
  })
  app.use(Pvue).mount('#app')
</script>
```

### Webpack/Vite 使用

安装：`npm i @helpvue/pvue -S`

全局引入

```ts
import { createApp } from 'vue'
import App from './App.vue'
import Pvue from '@helpvue/pvue'
import '@helpvue/pvue/dist/style/index.css'
createApp(App).use(Pvue).mount('#app')
```

按需引入

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { Button } from '@helpvue/pvue'
import '@helpvue/pvue/dist/style/base.css' // 基础样式
import '@helpvue/pvue/dist/style/theme/button.css'
createApp(App).use(Button).mount('#app')
```
