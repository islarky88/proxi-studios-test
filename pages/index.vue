<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      <nuxt-link to="/login">LOGIN HERE</nuxt-link>
    </h1>
    <a-table :dataSource="dataSource" :columns="columns">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'published'">
          {{ record[column.key] ? 'yes' : 'no' }}
        </template>
      </template>
    </a-table>
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

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Content',
    dataIndex: 'content',
    key: 'content',
  },
  {
    title: 'Published',
    dataIndex: 'published',
    key: 'published',
  },
  // {
  //   title: 'Created At',
  //   dataIndex: 'createdAt',
  //   key: 'createdAt',
  // },
];

const dataSource = [
  {
    id: 1,
    title: 'Post 1',
    content: 'Post 1 content',
    published: true,
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'Post 1',
    content: 'Post 1 content',
    published: true,
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'Post 1',
    content: 'Post 1 content',
    published: true,
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'Post 1',
    content: 'Post 1 content',
    published: true,
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'Post 1',
    content: 'Post 1 content',
    published: true,
    createdAt: new Date(),
  },
  {
    id: 1,
    title: 'Post 1',
    content: 'Post 1 content',
    published: true,
    createdAt: new Date(),
  },
];

// const result = await $fetch('/api/post/get-posts', {
//   method: 'POST',
//   body: {
//     userId: 1,
//   },
//   headers: {
//     authorization: 'Bearer ' + authStore.token,
//   },
// });

// const posts = result.result;
</script>

<style scoped></style>
