import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    VitePWA({
      manifest: {
        name: 'Maison Rose Lifestyle',
        short_name: 'Maison Rose',
        icons: [
          {
            src: './maisonroselifesytlelogo.png',
            type: 'image/png'
          }
        ]
      }
    }),
    react()],
})