import { PluginOption } from 'vite'
import unoCss from 'unocss/vite'
import { presetIcons, presetAttributify, presetUno } from 'unocss'

export const configUnoCssPlugin = () => {
  const unoCssPlugin: PluginOption[] = unoCss({
    presets: [presetIcons(), presetAttributify(), presetUno()],
    rules: [],
    shortcuts: {
      'wh-full': 'w-full h-full',
      'flex-center-between': 'flex items-center justify-between',
      'icon-base': 'text-xl cursor-pointer'
    }
  })

  return unoCssPlugin
}
