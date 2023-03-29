/*
 * @Description:
 * @Version: 2.0
 * @Autor: 匡光淼
 * @Date: 2022-08-30 17:37:30
 * @LastEditors: 匡光淼
 * @LastEditTime: 2022-08-30 17:45:51
 */
import { createApp } from 'vue'
import App from './App.vue'
import Pvue from '@helpvue/pvue'

// import { Button } from '@helpvue/pvue'
// import '@helpvue/pvue/dist/style/base.css' // 引入基础样式
// import '@helpvue/pvue/dist/style/theme/button.css' // 引入按钮的样式
import '@helpvue/pvue/dist/style/index.css'

createApp(App).use(Pvue, { prefix: 'pvue' }).mount('#app')
