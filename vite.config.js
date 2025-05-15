import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Generate sourcemaps for better debugging
    sourcemap: true,
    // Ensure assets are properly referenced
    assetsDir: 'assets',
    // Output clean URLs
    outDir: 'dist'
  },
  // Ensure base path is set correctly for deployment
  base: '/'
})
