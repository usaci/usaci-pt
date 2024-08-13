// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  app: {
    head: {
      charset: 'utf-8', 
      viewport: 'width=device-width, initial-scale=1.0', 
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bayon&family=Libre+Barcode+39+Text&family=Syne:wght@800&family=Zen+Kaku+Gothic+New:wght@400;700&display=swap" }
      ],

      title: "USACI OFFICIAL WEBSITE", 
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { hid: "description", name: "description", content: "物流とわたしたちは、物流2024年問題が私たち一般消費者の生活に与える影響や、問題解決のために私たちにできることを直感的に楽しく学べるWebサイトです。" },
      ]
    }
  },


  modules: 
  [
    [
      'nuxt-microcms-module',
      {
        serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN, // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
        apiKey: process.env.MICROCMS_API_KEY,
        // target: 'server',
      },
    ],
  ],

  compatibilityDate: '2024-08-12',
})