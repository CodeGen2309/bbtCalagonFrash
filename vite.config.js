import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { VitePWA } from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
  base: './',
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@mocks': fileURLToPath(new URL('./mocks', import.meta.url))
    },
  },

  plugins: [
    vue(),
    svgLoader(),
    // vueDevTools(),

    VitePWA({
      registerType: "autoUpdate",
      injectRegister: 'auto',
      devOptions: { enabled : true },

      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },

      includeAssets: ['fonts/*.ttf','images/*.png','css/*.css'],

      manifest: {
        "short_name": "ЖБК",
        "name": "ЖБК - 1",
        "scope": "/test/",
        "display": "standalone",
        "theme_color": "#333333",
        "background_color": "#000000",
        "orientation": "portrait",

        "icons": [{
          "src": "/test/icons/logo.svg",
          "sizes": "192x192",
          "type": "image/svg+xml"
        }],

        "prefer_related_applications": false
      }
    })
  ],
})
