/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite'
import { parseEnv } from './build/parseEnv'
import { createVitePlugin } from './build/plugin'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const ENV = loadEnv(mode, process.cwd(), ['VITE_', 'APP_'])
  const env = parseEnv(ENV)
  const isBuild = command === 'build'
  console.log(ENV, env)

  return {
    envPrefix: ['VITE_', 'APP_'],
    plugins: createVitePlugin(env, isBuild),
    test: {
      globals: true,
      environment: 'jsdom',
      transformMode: {
        web: [/.[tj]sx$/]
      }
    }
  }
})
