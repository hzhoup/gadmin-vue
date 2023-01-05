import { defineConfig } from 'vite'
import { createVitePlugin } from './build/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: createVitePlugin()
})
