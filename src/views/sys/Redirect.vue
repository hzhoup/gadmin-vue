<template>
  <span></span>
</template>

<script lang="ts" setup>
const {
  query,
  params: { path }
} = useRoute()
const router = useRouter()

onBeforeMount(() => {
  router.replace({
    path: `/${typeof path === 'string' ? path : path.join('/')}`,
    query: query
  })
})
</script>
