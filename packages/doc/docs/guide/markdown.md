---
title: 测试 Markdown 语法
lang: en-US
aside: true
lastUpdated: false
---

# 测试 Markdown 语法

这里 markdown 的语法使用

## markdown 常用解析头

```
// 首页专用
layout: home
page: true
lang: en-US
title: 前端学习文档
// 没有左侧菜单栏
sidebar: false
// 没有右侧定位
aside: false
// 没有广告
ads: false
// 没有底部github链接
editLink: false
// 没有赞助商
sponsors: false
// 没有上次更新
lastUpdated: false
// 好像没用
footer: false
```

## GitHub-Style Tables

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

## Emoji

:tada: :100:

## Table of Contents

[[toc]]

## Custom Containers

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## Custom Title

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::

## Syntax Highlighting in Code Blocks

```js
export default {
  name: 'MyComponent'
  // ...
}
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
</ul>
```

## Line Highlighting in Code Blocks

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```

## Code Groups

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::
