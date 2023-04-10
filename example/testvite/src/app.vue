<template>
  <TestCssModule />
  <div class="btn-group">
    <Button>default</Button>
    <Button type="info">info</Button>
    <Button type="primary">primary</Button>
    <Button type="success">success</Button>
    <Button type="warning">warning</Button>
    <Button type="danger">danger</Button>
    <Button type="primary">info<LoadSvg svgName="arrow-right" color="#fff" height="12px" width="12px" /></Button>
  </div>
  <div class="btn-group">
    <Button type="info" size="small">small</Button>
    <Button type="info" size="middle">middle</Button>
    <Button type="primary" size="large">large</Button>
    <Button type="warning" size="extra">extra Large</Button>
  </div>
  <div class="btn-group">
    <Button type="primary">rectangle</Button>
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
  <div class="btn-group">
    <Button link>link</Button>
    <Button link type="info">link</Button>
    <Button link type="primary">link</Button>
    <Button link type="success">link</Button>
    <Button link type="warning">link</Button>
    <Button link type="danger">link</Button>
  </div>
  <div class="btn-group">
    <Button disabled>disabled</Button>
    <Button disabled type="info">disabled</Button>
    <Button disabled type="primary">disabled</Button>
    <Button disabled type="success">disabled</Button>
    <Button disabled type="warning">disabled</Button>
    <Button disabled type="danger">disabled</Button>
  </div>
  <ul>
    <li v-for="item in userList" :key="item.id">{{ item.name }}</li>
  </ul>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  import LoadSvg from '@components/common/load-svg/index.vue'
  import TestCssModule from '@components/test-css-module.vue'
  import Button from '@components/common/button/index.vue'
  export default defineComponent({
    components: { LoadSvg, TestCssModule, Button },
    setup() {
      const userList = ref([])
      const fetchUserData = () => {
        fetch('/api/users', {
          method: 'post',
          body: {
            name: 'alice'
          }
        })
          .then(async (response) => {
            const res = await response.json()
            userList.value = res.data
          })
          .catch((err) => {
            console.error(err)
          })
      }

      fetchUserData()
      return { userList }
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
</style>
