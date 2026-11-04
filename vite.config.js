import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages serve o site em /Apresentacao-Pessoal/; Vercel e local usam /
  base: process.env.GITHUB_ACTIONS ? '/Apresentacao-Pessoal/' : '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
