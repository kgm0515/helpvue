<template>
  <TestCssModule />
  <div class="btn-group">
    <Button>default</Button>
    <Button type="info">info</Button>
    <Button type="primary">primary</Button>
    <Button type="success">success</Button>
    <Button type="warning">warning</Button>
    <Button type="danger">danger</Button>
  </div>
  <div class="btn-group">
    <Button type="info" size="small">small</Button>
    <Button type="info" size="middle">middle</Button>
    <Button type="primary" size="large">large</Button>
    <Button type="warning" size="extra">extra Large</Button>
  </div>
  <div class="btn-group">
    <Button type="primary">small</Button>
    <Button type="primary" round>round</Button>
  </div>
  <div class="btn-group">
    <Button ghost>default</Button>
    <Button ghost type="info">info</Button>
    <Button ghost type="primary">primary</Button>
    <Button ghost type="success">success</Button>
    <Button ghost type="warning">warning</Button>
    <Button ghost type="danger">danger</Button>
  </div>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  import LoadSvg from '@components/common/load-svg/index.vue'
  import TestCssModule from '@components/test-css-module.vue'
  import Button from '@components/common/button/index.vue'
  export default defineComponent({
    components: { LoadSvg, TestCssModule, Button },
    setup() {
      return {}
    }
  })
</script>
<style lang="less" scoped>
  .btn-group {
    display: flex;
    flex-wrap: wrap;
    :deep(.pvue-btn) {
      margin-right: 4px;
      margin-bottom: 5px;
    }
  }
</style>
