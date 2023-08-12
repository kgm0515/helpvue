---
title: 在 Markdown 中使用 vue
lang: en-US
lastUpdated: false
---

# 在 Markdown 中使用 vue

部署案例: https://juejin.cn/post/7129201521295622152

## Templating

Each Markdown file is first compiled into HTML and then passed on as a Vue component to the Vite process pipeline. This means you can use Vue-style interpolation in text:

<div>{{ 1 + 1 }}</div>

## Directives

<div v-for="i in 3">{{ i }}</div>

## Input

::: v-pre
`{{ This will be displayed as-is }}`
:::

## Access to Site & Page Data & Using Components

<script setup>
import { useData } from 'vitepress'
import Button from '../../../pvue/src/button/index.vue'
const { page } = useData()
</script>

<Button>hello</Button>

<pre>{{ page }}</pre>

## 直接写 vue

```vue
<template>
  <div class="nice-div">hello</div>
</template>
<script lang="ts" setup>
  console.log(123)
</script>
<style>
  .nice-div {
    color: red;
  }
</style>
```
