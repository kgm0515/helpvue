# this is markdown component

this is test md to vue

::: danger
This is a dangerous warning.
:::

::: details view code

```vue
<template>
  <div>count: {{ count }}</div>
  <button @click="handleAdd">add</button>
</template>
<script setup>
  import { ref } from 'vue'
  const count = ref(1)
  const handleAdd = () => (count.value += 1)
</script>
```

:::

<script setup>
  import {ref} from 'vue'
  const count = ref(1)
  const handleAdd = () => count.value += 1
</script>
<style>
  a{
    color:red;
    fontSize: 15px;
  }
</style>
<div>count: {{ count }}</div>
<button @click="handleAdd">add</button>
