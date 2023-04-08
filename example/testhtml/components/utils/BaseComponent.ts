// https://github.com/mdn/web-components-examples
export class BaseComponent extends HTMLElement {
  __config__: Record<string, any>
  __conponent__: boolean
  props: Record<string, any>
  constructor() {
    super()
  }

  /**
   * 定义props
   * @param config
   */
  defineProps(config = { initProps: {} }) {
    this.__conponent__ = true
    this.__config__ = config
    this.props = { ...config.initProps }
    let that = this
    window.addEventListener('load', function () {
      Object.keys(that.props).forEach((key) => {
        console.log(window[that.getAttribute(key) || ''])
        console.dir(that)
        that.props[key] = window[that.getAttribute(key) || ''] || that.props[key]
      })
      that.render()
    })
  }

  /**
   * 定义模板
   * @returns
   */
  defineTemplate() {
    return ``
  }

  /**
   * 渲染组件
   */
  render() {
    ;(window as any).__curContext__ = this
    const template = this.defineTemplate.bind(this)()
    this.innerHTML = typeof template === 'string' ? template : ''
    ;(window as any).__curContext__ = null
  }
}
