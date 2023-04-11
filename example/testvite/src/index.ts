import { createApp } from 'vue'
import App from './app.vue'
import './assets/css/index.less'
import { forEach } from 'lodash'
// import { forEach } from 'lodash-es'
console.log('环境变量: ', import.meta.env)

createApp(App).mount('#app')

let arr = [1, 2, 3]

forEach(arr, (a, b) => {
  console.log(a, b)
})
