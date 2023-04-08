import { BaseComponent } from '../utils/BaseComponent'
import './style.less'
export default class ShowList extends BaseComponent {
  __config__: Record<string, any>
  props: Record<string, any>
  constructor() {
    super()
    this.defineProps({
      initProps: {
        datalist: null // 列表数据
      }
    })
  }
  handleDeleteSelf() {
    console.log('111111111111')
  }
  // 定义模板
  defineTemplate() {
    const { datalist } = this.props
    let jsxList = ''
    if (Array.isArray(datalist.value)) {
      jsxList = datalist.value.length
        ? datalist.value
            .map((item, index) => {
              return `
            <div class="comp-showlist__item">
              <div class="comp-showlist__title">${item.label}</div>
              <div class="comp-showlist__num">${item.value}</div>
              <div class="comp-showlist__close" onclick="handleDelete(${index},'${item.label}')">Delete</div>
            </div>
          `
            })
            .join('')
        : '<div class="comp-showlist__empty">暂无数据</div>'
    } else {
      jsxList = '<div class="comp-showlist__loading">loading...</div>'
    }
    return `
      <style> p {color: white;} /*这里也可以写样式但是不建议这样写,可以写到单独的.less文件中*/ </style>
      <div class="comp-showlist">${jsxList}</div>
    `
  }
}
