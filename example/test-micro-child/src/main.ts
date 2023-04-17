import { createApp } from 'vue'
import type { App } from 'vue'
import AppComp from './App.vue'
import './style.css'

const init = (container: string | Element) => {
  const app = createApp(AppComp)
  app.mount(container)
  return app
}

if (!import.meta.url.includes('micro')) init('#app')

const microObject = (container: Element) => {
  let app: App<Element>
  return {
    mount() {
      app = init(container)
      if (Object.hasOwn(microObject, 'styleInject')) (microObject as any).styleInject()
    },
    unmount() {
      if (Object.hasOwn(microObject, 'styleDelete')) (microObject as any).styleDelete()
      app.unmount()
    },
    get app() {
      return app
    }
  }
}

export default microObject
