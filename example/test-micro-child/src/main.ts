import { createApp } from 'vue'
import type { App } from 'vue'
import './style.css'
import AppComp from './App.vue'

const init = (container: string | Element) => {
  const app = createApp(AppComp)
  app.mount(container)
  return app
}

if (!import.meta.url.includes('micro')) init('#app')

export default (container: Element) => {
  let app: App<Element>
  return {
    mount() {
      app = init(container)
    },
    unmount() {
      app.unmount()
    },
    get app() {
      return app
    }
  }
}
