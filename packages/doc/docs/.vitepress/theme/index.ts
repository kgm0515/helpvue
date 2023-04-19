import DefaultTheme from 'vitepress/theme'
import './base.css'
import * as Pvue from '@helpvue/pvue'
import '@helpvue/pvue/dist/index.css'
// 支持代码块写法
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(Pvue)
    // ctx.app.component('VueClickAwayExample', VueClickAwayExample)
    ctx.app.component('demo-preview', AntDesignContainer)
  }
}
