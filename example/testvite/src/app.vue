<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="getCount">click</button>
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      const count = ref(0)
      const getCount = () => count.value++
      return { count, getCount }
    }
  })
</script>
