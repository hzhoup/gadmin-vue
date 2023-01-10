<template>
  <n-space item-style="display: flex;align-items: center;">
    <n-icon hover:cursor-pointer :size="24" @click="refresh">
      <IMdiRefresh />
    </n-icon>
  </n-space>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const refresh = () => {
  router.replace({ path: '/redirect' + route.path })
}
</script>
