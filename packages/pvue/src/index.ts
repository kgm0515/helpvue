import type { App } from 'vue'
import * as components from './components'
export * from './components'
import { IAppConfig } from './helper'

export default {
  install(app: App, config?: IAppConfig) {
    for (const keyName in components) {
      const Comp = (components as any)[keyName]
      if (Comp.install) app.use(Comp, config)
    }
    return app
  }
}
