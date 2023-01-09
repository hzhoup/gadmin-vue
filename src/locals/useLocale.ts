import appStore from '@/stores'
import { dateEnUS, dateZhCN } from 'naive-ui'
import { customEnLocale } from './lang/en'
import { customZhLocale } from './lang/zh'

export const useLocale = () => {
  const { locale } = appStore.useConfig

  const getNaiveLocale = () => {
    if (locale === 'zh') {
      return customZhLocale
    } else {
      return customEnLocale
    }
  }

  const getNaiveDateLocale = () => {
    if (locale === 'zh') {
      return dateZhCN
    } else {
      return dateEnUS
    }
  }

  return { getNaiveLocale, getNaiveDateLocale }
}
