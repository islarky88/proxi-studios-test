<template>
  <div>The content of my report is here</div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['is-auth'],
});
</script>

<style scoped></style>
