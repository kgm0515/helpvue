<template>
  <div :class="styleObj.btn" @click="getCount">
    <div :class="styleObj.btnTitle">{{ count }}</div>
    <div :class="styleObj.btnText">click</div>
    <LoadSvg svgName="arrow-right" color="#fff" class="arrow-icon" height="12px" width="12px" />
  </div>
  <img :src="imageUrl" alt="" width="20" height="20" />
</template>
<script>
  import { defineComponent, ref } from 'vue'
  import LoadSvg from '@components/common/load-svg/index.vue'
  import styleObj from '@assets/css/style.module.less'
  import imageUrl from '@assets/images/mountain.webp'

  export default defineComponent({
    components: { LoadSvg },
    setup() {
      console.log(styleObj)
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
