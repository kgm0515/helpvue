import { createApp } from 'vue'
import App from './app.vue'
import './assets/css/index.less'
// import * as lodash from 'lodash-es'
console.log('环境变量: ', import.meta.env)

createApp(App).mount('#app')