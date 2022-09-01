<template>
  <div>
    <a-table :dataSource="dataSource" :columns="columns">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'published'">
          {{ record[column.key] ? 'yes' : 'no' }}
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/auth';
import { usePostsStore } from '@/store/posts';
const authStore = useAuthStore();
const postsStore = usePostsStore();

definePageMeta({
  middleware: ['is-auth'],
});

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
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Updated At',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
  },
];

// fetch only if no data yet. don't want to overload server... XD
if (postsStore.posts.length === 0) {
  const result = await $fetch('/api/post/get-posts', {
    headers: {
      authorization: 'Bearer ' + authStore.token,
    },
  });
  postsStore.posts = result.result;
}

const dataSource = computed(() => postsStore.posts);
</script>

<style scoped></style>
