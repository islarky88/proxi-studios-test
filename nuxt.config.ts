import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  css: ['assets/css/tailwind.css'],
  plugins: ['@/plugins/ant-design-vue'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
});
