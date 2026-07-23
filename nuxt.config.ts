// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  ssr: true,
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'ZevZev — The open-source platform for digital employees',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'ZevZev is the open-source platform for digital employees. Build, train, deploy, and operate AI employees with Employee as Code.'
        },
        { name: 'theme-color', content: '#0a0a0b' },
        { property: 'og:title', content: 'ZevZev — The open-source platform for digital employees' },
        {
          property: 'og:description',
          content: 'Build, train, deploy, and operate AI employees. Employee as Code for the AI workforce era.'
        },
        { property: 'og:type', content: 'website' }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  }
})
