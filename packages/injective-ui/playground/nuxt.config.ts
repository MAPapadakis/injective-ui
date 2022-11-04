import { defineNuxtConfig } from 'nuxt/config'
import AppComponents from '..'

export default defineNuxtConfig({
  buildModules: ['@injectivelabs/notifications'],
  modules: [AppComponents, '@vueuse/nuxt', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: './../lib/css/tailwind.css'
  }
})
