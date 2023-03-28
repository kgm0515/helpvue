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

### 组件前缀

默认前缀为`prev`, 如`button`的使用方式如下

```vue
<!-- 方式1 -->
<PrevButton>按钮</PrevButton>
<!-- 方式2 -->
<prev-button>按钮</prev-button>
```

### 自定义组件前缀

我们可以自定义前缀

```ts
createApp(App).use(Pvue, { prefix: 'p' }).mount('#app')
```

如`button`的使用方式如下

```vue
<!-- 方式1 -->
<PButton>按钮</PButton>
<!-- 方式2 -->
<p-button>按钮</p-button>
```
