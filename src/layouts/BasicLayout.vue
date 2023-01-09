<template>
  <n-layout has-sider class="h-full w-full">
    <LayoutSide />
    <n-layout>
      <LayoutHeader />
      <LayoutContent />
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutHeader from './Header/index.vue'
import LayoutSide from './Side/index.vue'
import LayoutContent from './Content/index.vue'
import appStore from '@/stores'

export default defineComponent({
  name: 'BasicLayout',
  components: {
    LayoutHeader,
    LayoutSide,
    LayoutContent
  },
  setup() {
    const handleScreenResize = () => {
      const width = document.body.clientWidth
      if (width <= 640) {
        appStore.useConfig.changeDeviceType('mobile')
      } else if (width <= 1007 && width > 640) {
        appStore.useConfig.changeDeviceType('pad')
      } else {
        appStore.useConfig.changeDeviceType('pc')
      }
    }
    onMounted(() => {
      handleScreenResize()
      window.addEventListener('resize', handleScreenResize)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleScreenResize)
    })
    return {}
  }
})
</script>
