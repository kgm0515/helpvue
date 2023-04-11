<template>
  <ul class="userlist">
    <li class="userlist__item" v-for="item in userList" :key="item.id">
      <img class="userlist__img" :src="item.avater" />
      <span class="userlist__name">{{ item.name }}</span>
      <span class="userlist__time">{{ item.time }}</span>
    </li>
  </ul>
</template>
<script>
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    components: {},
    setup() {
      const userList = ref([])
      const userInfo = ref({ name: '匡光淼', age: 12 })
      // post请求
      const fetchUserDataPost = () => {
        return fetch('/api/users', {
          method: 'post',
          body: JSON.stringify(userInfo.value),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }
      // get请求
      const fetchUserDataGet = () => {
        const queryStr = Object.entries(userInfo.value)
          .map((arg) => `${arg[0]}=${decodeURIComponent(arg[1])}`)
          .join('&')
        return fetch(`/api/users?${queryStr}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }
      fetchUserDataGet()
        .then(async (response) => {
          const res = await response.json()
          userList.value = res.data
        })
        .catch((err) => {
          console.error(err)
        })
      return { userList }
    }
  })
</script>
<style lang="less" scoped>
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
