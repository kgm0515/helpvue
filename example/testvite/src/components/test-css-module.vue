<template>
  <div :class="styleObj.module" @click="getCount">
    <img :src="imageUrl" alt="" width="20" height="20" :style="{ marginRight: '10px' }" />
    <div :class="styleObj.moduleTitle">{{ count }}</div>
    <div :class="styleObj.moduleText">click</div>
    <LoadSvg svgName="arrow-right" color="#fff" class="arrow-icon" height="12px" width="12px" />
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  import LoadSvg from '@components/common/load-svg/index.vue'
  import styleObj from '@assets/css/style.module.less'
  import imageUrl from '@assets/images/mountain.webp'

  export default defineComponent({
    components: { LoadSvg },
    setup() {
      // console.log(styleObj)
      const count = ref(0)
      const getCount = () => count.value++
      return { styleObj, count, getCount, imageUrl }
    }
  })
</script>
<style lang="less" scoped>
  .arrow-icon {
    width: 20px;
    height: 20px;
  }
</style>
