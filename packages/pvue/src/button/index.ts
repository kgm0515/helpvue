import type { Plugin, App } from 'vue'
import { compInstall, IAppConfig } from '../index'
import Component from './index.vue'

Component.install = (app: App, config?: IAppConfig) => compInstall(app, config || {}, Component)

export default Component as typeof Component & Plugin
