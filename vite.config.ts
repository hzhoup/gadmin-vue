import { defineConfig } from 'vite'
import { createVitePlugin } from './build/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: ['VITE_', 'APP_'],
  plugins: createVitePlugin()
})
