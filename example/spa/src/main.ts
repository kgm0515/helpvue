import { createApp } from 'vue'
import App from './App.vue'
import * as Pvue from '@helpvue/pvue'
import '@helpvue/pvue/dist/style/es/style.css'
// import { Button } from '@helpvue/pvue'
// import '@helpvue/pvue/dist/style/base.css' // 引入基础样式
// import '@helpvue/pvue/dist/style/theme/button.css' // 引入按钮的样式

createApp(App).use(Pvue, { prefix: 'pvue' }).mount('#app')
