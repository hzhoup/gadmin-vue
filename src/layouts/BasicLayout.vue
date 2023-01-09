<template>
  <n-layout has-sider class="h-screen w-screen">
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

export default defineComponent({
  name: 'BasicLayout',
  components: {
    LayoutHeader,
    LayoutSide,
    LayoutContent
  },
  setup() {
    return {}
  }
})
</script>
