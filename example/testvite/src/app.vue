<template>
  <TestCssModule />
</template>
<script>
  import { defineComponent, ref } from 'vue'
  import LoadSvg from '@components/common/load-svg/index.vue'
  import TestCssModule from '@components/test-css-module.vue'
  export default defineComponent({
    components: { LoadSvg, TestCssModule },
    setup() {
      return {}
    }
  })
</script>
<style lang="less" scoped>
  .obc {
    width: 20px;
    height: 20px;
  }
</style>
