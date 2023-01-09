import { PluginOption } from 'vite'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export const configUnplugins = () => {
  const plugins: PluginOption[] = []

  plugins.push(
    autoImport({
      imports: ['vue', 'pinia', 'vue-router', 'vue-i18n', { 'naive-ui': ['useMessage', 'useOsTheme'] }],
      eslintrc: {
        enabled: false,
        filepath: 'types/.eslintrc-auto-import.json',
        globalsPropValue: true
      },
      dts: 'types/auto-import.d.ts'
    })
  )

  plugins.push(
    components({
      dirs: ['src/components'],
      extensions: ['vue', 'tsx'],
      dts: 'types/components.d.ts',
      resolvers: [NaiveUiResolver()]
    })
  )

  return plugins
}
