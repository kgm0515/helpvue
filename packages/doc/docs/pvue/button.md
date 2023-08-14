---
title: button按钮
lang: en-US
lastUpdated: false
sidebar: true
aside: true
---

# 介绍

按钮组件，用于触发操作。

<script setup>
  const handleClick = ()=> console.log(12)
</script>

## 按钮类型

<preview path="../demos/ui/button/button-type.vue" title="按钮类型" description="定义了按钮的颜色"></preview>

## 按钮大小

<div class="children-space10">
  <PvueButton type="primary" size="small">small</PvueButton>
  <PvueButton type="primary" size="middle">middle</PvueButton>
  <PvueButton type="primary" size="large">large</PvueButton>
  <PvueButton type="primary" size="extra">extra</PvueButton>
</div>

```vue
<PvueButton type="primary" size="small">small</PvueButton>
<PvueButton type="primary" size="middle">middle</PvueButton>
<PvueButton type="primary" size="large">large</PvueButton>
<PvueButton type="primary" size="extra">extra</PvueButton>
```

## 圆角按钮

<div class="children-space10">
  <PvueButton type="primary" round>round</PvueButton>
  <PvueButton>default</PvueButton>
</div>

```vue
<PvueButton type="primary" round>round</PvueButton>
<PvueButton>default</PvueButton>
```

## 幽灵按钮

<div class="children-space10">
  <PvueButton ghost>ghost</PvueButton>
  <PvueButton ghost type="primary">ghost</PvueButton>
  <PvueButton ghost type="success">ghost</PvueButton>
  <PvueButton ghost type="info">ghost</PvueButton>
  <PvueButton ghost type="warning">ghost</PvueButton>
  <PvueButton ghost type="danger">ghost</PvueButton>
</div>

```vue
<PvueButton ghost>ghost</PvueButton>
<PvueButton ghost type="primary">ghost</PvueButton>
<PvueButton ghost type="success">ghost</PvueButton>
<PvueButton ghost type="info">ghost</PvueButton>
<PvueButton ghost type="warning">ghost</PvueButton>
<PvueButton ghost type="danger">ghost</PvueButton>
```

## 文字按钮

<div class="children-space10">
  <PvueButton link>link</PvueButton>
  <PvueButton link type="primary">link</PvueButton>
  <PvueButton link type="success">link</PvueButton>
  <PvueButton link type="info">link</PvueButton>
  <PvueButton link type="warning">link</PvueButton>
  <PvueButton link type="danger">link</PvueButton>
</div>

```vue
<PvueButton link>link</PvueButton>
<PvueButton link type="primary">link</PvueButton>
<PvueButton link type="success">link</PvueButton>
<PvueButton link type="info">link</PvueButton>
<PvueButton link type="warning">link</PvueButton>
<PvueButton link type="danger">link</PvueButton>
```

## 禁用按钮

<div class="children-space10">
  <PvueButton disabled>disabled</PvueButton>
  <PvueButton disabled type="primary">disabled</PvueButton>
  <PvueButton disabled type="success">disabled</PvueButton>
  <PvueButton disabled type="info">disabled</PvueButton>
  <PvueButton disabled type="warning">disabled</PvueButton>
  <PvueButton disabled type="danger">disabled</PvueButton>
</div>

```vue
<PvueButton disabled>disabled</PvueButton>
<PvueButton disabled type="primary">disabled</PvueButton>
<PvueButton disabled type="success">disabled</PvueButton>
<PvueButton disabled type="info">disabled</PvueButton>
<PvueButton disabled type="warning">disabled</PvueButton>
<PvueButton disabled type="danger">disabled</PvueButton>
```

## API

### 属性

PvueButton props

| 参数     |                             说明                              |    类型 |  默认值 |
| -------- | :-----------------------------------------------------------: | ------: | ------: |
| type     | 类型: `default`,`primary`,`info`,`success`,`warning`,`danger` |  string | default |
| size     |            尺寸: `small`,`middle`,`large` ,`extra`            |  string |  middle |
| round    |                        是否是圆角按钮                         | boolean |   false |
| ghost    |                        是否是幽灵按钮                         | boolean |   false |
| link     |                        是否是文字按钮                         | boolean |   false |
| disabled |                        是否是禁用按钮                         | boolean |   false |

### 事件

PvueButton Events

| 参数  |                               说明                                |         参数 |
| ----- | :---------------------------------------------------------------: | -----------: |
| click | 点击按钮时触发，在 `loading` 或 `disabled` 状态为 `true` 时不触发 | event: Event |

### 插槽

PvueButton Slots

| 插槽名  |   说明   | 参数 |
| ------- | :------: | ---: |
| default | 按钮内容 |    - |

::: info
使用`type`，`plain`，`round`来定义 Button 的样式
:::
