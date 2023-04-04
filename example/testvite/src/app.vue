<template>
  <div :class="styleObj.root">
    <h1 :class="styleObj['root-title']">{{ count }}</h1>
    <button @click="getCount">click</button>
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  import styleObj from './assets/css/style.module.less'

  export default defineComponent({
    setup() {
      console.log(styleObj)
      const count = ref(0)
      const getCount = () => count.value++
      return { styleObj, count, getCount }
    }
  })
</script>
<style lang="less" scoped></style>
