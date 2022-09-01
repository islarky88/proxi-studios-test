<template>
  <div>
    asdasd
  </div>
</template>

<script setup>
// import useAuthStore
import { useAuthStore } from '@/store/auth'

const authStore = useAuthStore()

console.log(authStore.user)
console.log(authStore.isAuth)
console.log(authStore.test)
</script>


<style lang="scss" scoped>
</style>
