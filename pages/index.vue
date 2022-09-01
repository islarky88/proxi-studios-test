<template>
  <div>
    <h4 class="text-3xl font-bold">
      You are not logged in. <nuxt-link to="/login">Login here.</nuxt-link>
    </h4>
  </div>
</template>

<script setup>
// import useAuthStore
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();

console.log(authStore.user);
console.log(authStore.isAuth);
console.log(authStore.test);

console.log('result :>> ', authStore.user);
</script>

<style scoped></style>
