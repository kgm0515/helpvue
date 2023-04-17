<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue'
  const props = defineProps<{ appUrl: string }>()
  const microRef = ref<Element | null>(null)
  let microApp: null | Record<string, any> = null // ?:App<Element>

  onMounted(() => {
    try {
      import(/* @vite-ignore */ `${props.appUrl}/src/main.ts?t=${Date.now()}&micro`).then((res) => {
        // import(/* @vite-ignore */ `http://127.0.0.1:8080/main.js`).then((res) => {
        const result = res.default
        microApp = result(microRef.value)
        microApp?.mount()
      })
    } catch (error) {
      console.log(error)
    }
  })

  onUnmounted(() => {
    microApp?.unmount()
  })
</script>

<template>
  <div class="micro-app-wrap" ref="microRef"></div>
</template>
