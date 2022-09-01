<template>
  <div>
    Dashboard here

    {{ posts }}
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/auth';
const authStore = useAuthStore();
definePageMeta({
  middleware: ['is-auth'],
});

const result = await $fetch('/api/post/get-posts', {
  method: 'POST',
  body: {
    userId: 1,
  },
  headers: {
    authorization: 'Bearer ' + authStore.token,
  },
});

const posts = result.result;
</script>

<style scoped></style>
