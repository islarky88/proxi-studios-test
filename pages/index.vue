<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      <nuxt-link to="/login">LOGIN HERE</nuxt-link>
    </h1>
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


<style scoped>
</style>
