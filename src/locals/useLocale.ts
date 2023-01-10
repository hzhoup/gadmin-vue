import appStore from '@/stores'
import { dateEnUS, dateZhCN } from 'naive-ui'
import { customEnLocale } from './lang/en'
import { customZhLocale } from './lang/zh'

export type LocaleKey = 'zh' | 'en'

export const useLocale = () => {
  const { locale } = appStore.useConfig

  const options = [
    { label: '中文', key: 'zh' },
    { label: 'English', key: 'en' }
  ]

  const getNaiveLocale = computed(() => {
    if (locale === 'zh') {
      return customZhLocale
    } else {
      return customEnLocale
    }
  })

  const getNaiveDateLocale = computed(() => {
    if (locale === 'zh') {
      return dateZhCN
    } else {
      return dateEnUS
    }
  })

  return { options, getNaiveLocale, getNaiveDateLocale }
}
