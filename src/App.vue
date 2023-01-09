<template>
  <n-config-provider
    :theme="naiveTheme"
    :theme-overrides="naiveTheme === null ? lightThemeOverrides : darkThemeOverrides"
    :locale="getNaiveLocale()"
    :date-locale="getNaiveDateLocale()"
  >
    <RouterView />
    <n-global-style />
  </n-config-provider>
</template>

<script setup lang="ts">
import { GlobalThemeOverrides } from 'naive-ui'
import appStore from './stores'
import { useLocale } from '@/locals/useLocale'

const { theme, naiveTheme } = storeToRefs(appStore.useConfig)
const { initThemForOs } = appStore.useConfig

const { getNaiveLocale, getNaiveDateLocale } = useLocale()

onBeforeMount(() => {
  if (!theme.value) initThemForOs()
})

const lightThemeOverrides: GlobalThemeOverrides = {}
const darkThemeOverrides: GlobalThemeOverrides = {}
</script>
