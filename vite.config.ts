import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'

// const pwaOptions: Partial<VitePWAOptions> = {
//   mode: 'development',
//   base: '/',
//   includeAssets: ['favicon.svg'],
//   manifest: {
//     name: 'PWA Router',
//     short_name: 'PWA Router',
//     theme_color: '#ffffff',
//     icons: [
//       {
//         src: '/android-chrome-192x192.png',
//         sizes: '192x192',
//         type: 'image/png',
//         purpose: 'any maskable',
//       },
//       {
//         src: '/android-chrome-512x512.png',
//         sizes: '512x512',
//         type: 'image/png',
//         purpose: 'any maskable',
//       },
//     ],
//   },
//   devOptions: {
//     enabled: process.env.SW_DEV === 'true',
//     /* when using generateSW the PWA plugin will switch to classic */
//     type: 'module',
//     navigateFallback: 'index.html',
//   },
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx'],
  },
  server: {
    port: 3000,
  },
})
