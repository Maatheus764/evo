import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['evoriseai.com.br']
  },
  preview: {
    host: true,
    allowedHosts: ['evoriseai.com.br']
  }
})
