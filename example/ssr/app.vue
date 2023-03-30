<template>
  <div>
    <pvue-button type="primary" @click="handle">{{ handleAdd(9, 10) }}-{{ count }}</pvue-button>
    <PvueButton type="primary" @click="handle">{{ handleAdd(9, 10) }}-{{ count }}</PvueButton>
    <NuxtWelcome />
  </div>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  import { handleAdd } from '@helpvue/utils'
  export default defineComponent({
    setup() {
      const count = ref(0)
      const handle = () => count.value++
      return {
        handleAdd,
        handle,
        count
      }
    }
  })
</script>

<style>
  @import '@helpvue/pvue/dist/es/style.css';
</style>
