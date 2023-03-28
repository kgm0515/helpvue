import type { Plugin, App } from 'vue'
import { compInstall } from '../index'
import Component from './index.vue'

Component.install = (app: App, config: { prefix: 'pvue' }) => compInstall(app, config, Component)

export default Component as typeof Component & Plugin
