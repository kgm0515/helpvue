<template>
  <TestCssModule />
  <TestUi />
  <TestFetch />
  <Test />
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import TestCssModule from '@components/test-css-module.vue'
  import TestUi from '@components/test-ui.vue'
  import TestFetch from '@components/test-fetch.vue'
  import Test from '@components/md/test.md'
  export default defineComponent({
    components: { TestCssModule, TestUi, TestFetch, Test },
    setup() {
      return {}
    }
  })
</script>
<style lang="less" scoped>
  body {
    background-color: #f00;
  }
  .btn-group {
    display: flex;
    flex-wrap: wrap;
    :deep(.pvue-button) {
      margin-right: 4px;
      margin-bottom: 5px;
    }
  }
  .userlist {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    .userlist__item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      padding: 5px 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      cursor: pointer;
      &:hover {
        background-color: #fefef9;
      }
      &:last-child {
        border-bottom: none;
      }
      .userlist__img {
        height: 30px;
        width: 30px;
        background-color: #f4f4f4;
      }
      .userlist__name {
        margin-left: 10px;
        margin-right: 20px;
        flex: 1;
      }
      .userlist__time {
        color: #999;
      }
    }
  }
</style>
