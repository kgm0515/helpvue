<script setup lang="ts">
  import TestCss from './TestCss.vue'
  import { ref } from 'vue'

  defineProps<{ msg: string }>()

  const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
  <TestCss v-if="count % 2" />
</template>

<style lang="less" scoped>
  .card {
    padding: 20px;
    background-color: grey;
    mix-blend-mode: hard-light;
  }
</style>
