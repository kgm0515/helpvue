// pnpm i --shamefully-hoist
import { defineNuxtPlugin } from '#app'
import helpvue from '@helpvue/pvue'
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(helpvue)
})
