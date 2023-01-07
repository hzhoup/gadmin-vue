/// <reference types="vitest" />
import { resolve } from 'path'
import { defineConfig, loadEnv, UserConfig } from 'vite'
import { parseEnv } from './build/parseEnv'
import { createVitePlugin } from './build/plugin'
import { createProxy } from './build/proxy'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const ENV = loadEnv(mode, process.cwd(), ['VITE_', 'APP_'])
  const env = parseEnv(ENV)
  const isBuild = command === 'build'

  const config: UserConfig = {
    envPrefix: ['VITE_', 'APP_'],
    plugins: createVitePlugin(env, isBuild),
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        '@': resolve(__dirname, 'src')
      }
    },
    server: {
      host: true,
      port: env.VITE_PORT,
      cors: true,
      proxy: createProxy(env.VITE_PROXY)
    },
    define: {
      __INTLIFY_PROD_DEVTOOLS__: false
    },
    test: {
      globals: true,
      environment: 'jsdom',
      includeSource: ['src/**/*.{js,ts}'],
      transformMode: {
        web: [/.[tj]sx$/]
      },
      coverage: {
        provider: 'c8'
      }
    }
  }

  if (isBuild) {
    config.define['import.meta.vitest'] = 'undefined'

    config.build = {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes(resolve(__dirname, 'src/store/index.ts'))) {
              return 'vendor'
            }
          }
        }
      }
    }
  }

  return config
})
