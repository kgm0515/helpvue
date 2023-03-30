import DefaultTheme from 'vitepress/theme'
import './base.css'
import * as Pvue from '@helpvue/pvue'
import '@helpvue/pvue/dist/es/style.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(Pvue)
    // ctx.app.component('VueClickAwayExample', VueClickAwayExample)
  }
}
