---
title: button按钮
lang: en-US
---

# 介绍

按钮组件，用于触发操作。

<script setup>
  const handleClick = ()=> console.log(12)
</script>

## 按钮类型

<div class="children-space10">
  <PvueButton>默认按钮</PvueButton>
  <PvueButton type="primary" @click="handleClick">primary</PvueButton>
  <PvueButton type="success">success</PvueButton>
  <PvueButton type="info">info</PvueButton>
  <PvueButton type="warning">warning</PvueButton>
  <PvueButton type="danger">danger</PvueButton>
</div>

```vue
<PvueButton>默认按钮</PvueButton>
<PvueButton type="primary" @click="handleClick">primary</PvueButton>
<PvueButton type="success">success</PvueButton>
<PvueButton type="info">info</PvueButton>
<PvueButton type="warning">warning</PvueButton>
<PvueButton type="danger">danger</PvueButton>
```

## 文字按钮

<div class="children-space10">
  <PvueButton type="default" :text="true">文字按钮</PvueButton>
  <PvueButton type="warning" :text="true" :bg="true">文字按钮</PvueButton>
</div>

```vue
<PvueButton type="default" :text="true">文字按钮</PvueButton>
<PvueButton type="warning" :text="true" :bg="true">文字按钮</PvueButton>
```

## 禁用状态

<div class="children-space10">
  <PvueButton type="default" disabled>禁用按钮</PvueButton>
  <PvueButton type="danger" disabled>禁用按钮</PvueButton>
</div>

```vue
<PvueButton type="default" disabled>禁用按钮</PvueButton>
<PvueButton type="danger" disabled>禁用按钮</PvueButton>
```

## 按钮大小

<div class="children-space10">
  <PvueButton size="small">small</PvueButton>
  <PvueButton size="middle">middle</PvueButton>
  <PvueButton size="large">large</PvueButton>
</div>

```vue
<PvueButton size="small">禁用按钮</PvueButton>
<PvueButton size="middle">middle</PvueButton>
<PvueButton size="large">large</PvueButton>
```

## API

### 属性

PvueButton props

| 参数     |                             说明                              |    类型 |  默认值 |
| -------- | :-----------------------------------------------------------: | ------: | ------: |
| type     | 类型: `default`,`primary`,`info`,`success`,`warning`,`danger` |  string | default |
| size     |                尺寸: `small`,`middle`,`large`                 |  string |  middle |
| disabled |                          是否可点击                           | boolean |   false |
| text     |                        是否是文字按钮                         | boolean |   false |
| bg       |                     是文字按钮否是有背景                      | boolean |   false |

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
