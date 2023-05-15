export default defineNuxtConfig({
  modules: [
    '@invictus.codes/nuxt-vuetify'
  ],
  vuetify: {
    vuetifyOptions:{
      theme: {
        defaultTheme: 'dark'
      }
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,

      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true,
    }
  }
})
