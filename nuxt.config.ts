import { repositoryName, apiEndpoint } from "./slicemachine.config.json";

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  app: {
    head: {
      title: "Prismic + Nuxt Minimal Starter",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          charset: "utf-8",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css", "~/assets/css/efectos.css"],

  modules: ["@nuxt/eslint", "@nuxtjs/prismic", "@nuxtjs/tailwindcss", "@nuxt/fonts", "@nuxt/icon"],

  prismic: {
    endpoint: apiEndpoint || repositoryName,
    preview: "/api/preview",
    clientConfig: {
      routes: [
        {
          type: "page",
          uid: "home",
          path: "/",
        },
        {
          type: "page",
          path: "/:uid",
        },
        {
          type: "case_study",
          path: "/case-study/:uid",
        },
      ],
    },
  },

  compatibilityDate: "2026-01-02",
});
