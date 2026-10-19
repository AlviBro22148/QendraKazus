import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Fully static build: `npm run build` outputs plain files in /dist.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
