export { Ref, effect } from './utils/Reactive'
export { BaseComponent } from './utils/BaseComponent'
import './base.less'
import ShowList from './show-list'

customElements.define('show-list', ShowList)
