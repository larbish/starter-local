// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxthq/studio', '@nuxt/icon'],

  routeRules: {
    '/': { prerender: true }
  },

  studio: {
    enabled: true,
    gitInfo: {
      name: 'starter-local',
      owner: 'larbish',
      url: 'https://balek.io'
    }
  },

  hooks: {
    'components:extend': (components) => {
      const iconComponent = components.find(c => { console.log(c); c.pascalName === 'icon'})
      if (iconComponent) {
        iconComponent.global = true
      }
    },
  },

  compatibilityDate: '2024-09-16'
})