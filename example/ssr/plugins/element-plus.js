// pnpm i --shamefully-hoist
import { defineNuxtPlugin } from '#app'
import * as helpvue from '@helpvue/pvue'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(helpvue)
})
