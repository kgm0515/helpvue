import { createApp } from 'vue'
import App from './app.vue'
import './assets/css/base.css'
import mountainUrl from '@assets/images/mountain.webp'

// import * as lodash from 'lodash-es'
console.log('环境变量: ', import.meta.env)

createApp(App).mount('#app')

const img = document.createElement('img')
img.src = mountainUrl
img.width = 200
console.log(mountainUrl, '-------')
document.body.appendChild(img)
