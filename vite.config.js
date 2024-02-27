import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://anton-kuchmasov.github.io/qp-front-end-task/',
  plugins: [react()],
})
