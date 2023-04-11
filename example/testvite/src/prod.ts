import { createApp } from 'vue'
import App from './app.vue'
import './assets/css/index.less'
// import { cloneDeep } from 'lodash'
import { cloneDeep } from 'lodash-es'
console.log('环境变量: ', import.meta.env)

createApp(App).mount('#app')

let obj = { name: 'hahah' }

console.log(cloneDeep(obj))
