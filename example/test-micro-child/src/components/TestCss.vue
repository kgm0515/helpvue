<script setup lang="ts">
  import svgUrl from '../assets/vite.svg'
</script>

<template>
  <div class="test-css">test-css</div>
  <img :src="svgUrl" width="30" />
</template>

<style scoped>
  .test-css {
    color: red;
    font-size: 18px;
  }
</style>
