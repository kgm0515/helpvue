<script setup lang="ts">
  import { ref } from 'vue'
  import HelloWorld from './components/HelloWorld.vue'
  import LoadMicroApp from './components/LoadMicroApp.vue'
  const visible = ref(false)
  const handChange = () => {
    visible.value = !visible.value
  }
</script>

<template>
  <HelloWorld msg="this is parent app" />
  <button @click="handChange">click-{{ visible }}</button>
  <LoadMicroApp v-if="visible" app-url="http://127.0.0.1:8144" />
</template>

<style scoped></style>
