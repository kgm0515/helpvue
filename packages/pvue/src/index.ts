import type { App } from 'vue'
import * as components from './components'
export * from './components'

export default {
  install(app: App, config: any) {
    for (const keyName in components) {
      const Comp = (components as any)[keyName]
      if (Comp.install) app.use(Comp, config)
    }
    return app
  }
}
