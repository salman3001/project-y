
// import { ModuleOptions } from '@invictus.codes/nuxt-vuetify'
import { setAbsoluteSqliteDatabaseUrlForPrisma } from './prisma/utils'

// declare module '@nuxt/schema' {
//   export interface NuxtConfig {
//     vuetify: {
//       vuetifyOptions?:ModuleOptions['vuetifyOptions'],
//       moduleOptions:ModuleOptions['moduleOptions']
//     };
//   }
// }

setAbsoluteSqliteDatabaseUrlForPrisma()

export default defineNuxtConfig({
  runtimeConfig: {
    version: '0.0.1'
  },
  css: [
    '~/assets/css/main.css',
  ],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@huntersofbook/naive-ui-nuxt', '@vueuse/nuxt', "nuxt-icon"],
  extends: ['@sidebase/core'],
  typescript: {
    shim: false
  }
})
