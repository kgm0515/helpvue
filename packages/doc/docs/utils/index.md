---
title: 简介
lang: en-US
---

# 简介

@helpvue/utils 是一个 Javascript 工具库

## 快速开始

这里为您介绍常见开发模式下接入工具库的最基本方式。

### script 标签引入

```html
<div id="app"></div>
<script src="./node_modules/@helpvue/utils/dist/index.iife.js"></script>
<script>
  console.log('HelpUtils库', HelpUtils)
  /**
  HelpUtils库 
    calc: 
      handleAdd: (...e)=>e.reduce(((e,t)=>e+t),0)
      handleMinus: (e,t)=>e-t
    exam: 
      AUTHOR_NAME: "kuangguangmiao"
      Person: class
      genAnimalInfo: ƒ (e,t)
   */
</script>
```

### Webpack/Vite 使用

安装：`npm i @helpvue/utils -S`

全局引入

```ts
import helpUtils from '@helpvue/utils'
console.log(helpUtils)
```
