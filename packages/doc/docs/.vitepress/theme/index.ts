import DefaultTheme from 'vitepress/theme'
import './base.css'
/** 引入方式一：引入源文件 */
import Pvue from '../../../../pvue/src/index'
import '../../../../pvue/style/index.less'
/** 引入方式一：引入库文件
import Pvue from '@helpvue/pvue'
import '@helpvue/pvue/dist/style/index.css'
* */
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(Pvue)
    // ctx.app.component('VueClickAwayExample', VueClickAwayExample)
  }
}
