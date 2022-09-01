<template>
  <div>
    <h1>You are now logged in.</h1>
    <h3>accessing /pages/user/index.vue</h3>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['is-auth'],
});
</script>

<style scoped></style>
