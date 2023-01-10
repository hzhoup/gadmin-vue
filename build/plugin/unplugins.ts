import autoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import icons from 'unplugin-icons/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import components from 'unplugin-vue-components/vite'
import { PluginOption } from 'vite'

export const configUnplugins = () => {
  const plugins: PluginOption[] = []

  plugins.push(
    autoImport({
      imports: [
        'vue',
        'pinia',
        'vue-router',
        'vue-i18n',
        { 'naive-ui': ['createDiscreteApi', 'useMessage', 'useLoadingBar', 'useOsTheme'] }
      ],
      eslintrc: {
        enabled: true,
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
      resolvers: [NaiveUiResolver(), IconsResolver()]
    })
  )

  plugins.push(
    icons({
      compiler: 'vue3',
      jsx: 'react',
      autoInstall: true
    })
  )

  return plugins
}
