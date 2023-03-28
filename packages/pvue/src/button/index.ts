import type { Plugin } from 'vue'
import { compInstall } from '../index'
import Component from './index.vue'

Component.install = compInstall.bind(Component)

export default Component as typeof Component & Plugin
