<template>
  <div :class="styleObj.root">
    <h1 :class="styleObj['root-title']">{{ count }}</h1>
    <button @click="getCount">click</button>
  </div>
  <LoadSvg svgName="arrow-right" :color="count % 2 === 0 ? '#f00' : 'green'" class="obc" />
</template>
<script>
  import { defineComponent, ref } from 'vue'
  import LoadSvg from '@comp/load-svg/index.vue'
  import styleObj from './assets/css/style.module.less'

  export default defineComponent({
    components: { LoadSvg },
    setup() {
      console.log(styleObj)
      const count = ref(0)
      const getCount = () => count.value++
      return { styleObj, count, getCount }
    }
  })
</script>
<style lang="less" scoped>
  .obc {
    width: 20px;
    height: 20px;
  }
</style>
