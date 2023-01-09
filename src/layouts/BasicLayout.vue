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
import LayoutHeader from './header/index.vue'
import LayoutSide from './side/index.vue'
import LayoutContent from './content/index.vue'

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
