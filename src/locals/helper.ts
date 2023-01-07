import { LocaleMessages, VueMessageType } from 'vue-i18n'

export const setHtmlLang = (locale: string) => document.querySelector('html')?.setAttribute('lang', locale)

type LangModel = {
  default: any
}

export const setupLangs = async () => {
  const ret: Record<string, LocaleMessages<VueMessageType>> = {}
  const langs = import.meta.glob('@/locals/lang/*.ts')
  for (const k in langs) {
    if (Object.prototype.hasOwnProperty.call(langs, k)) {
      const lang = (await langs[k]()) as LangModel
      const key = k.replace(/(.*\/)*([^.]+).*/gi, '$2')
      ret[key] = lang.default
    }
  }
  return ret
}
