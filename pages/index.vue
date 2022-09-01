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
    title: 'esse dolore id',
    content: 'esse commodo ex cupidatat ad sunt sunt minim',
    published: false,
    createdAt: 'Thu Jul 26 1984 18:27:13 GMT+0800 (Philippine Standard Time)',
    updatedAt: 'Sun Aug 04 1996 05:35:30 GMT+0800 (Philippine Standard Time)',
  },
  {
    title: 'tempor exercitation veniam',
    content: 'sint tempor Lorem adipisicing proident ad veniam voluptate',
    published: false,
    createdAt: 'Fri Jun 05 1981 04:31:16 GMT+0800 (Philippine Standard Time)',
    updatedAt: 'Fri Mar 16 1973 10:46:28 GMT+0800 (Philippine Standard Time)',
  },
  {
    title: 'adipisicing cupidatat amet',
    content: 'consectetur tempor aliquip laborum eiusmod id proident deserunt',
    published: true,
    createdAt: 'Wed Feb 24 1982 09:21:08 GMT+0800 (Philippine Standard Time)',
    updatedAt: 'Tue Jul 02 1985 10:16:43 GMT+0800 (Philippine Standard Time)',
  },
  {
    title: 'excepteur et non',
    content: 'id dolor qui duis aliquip ipsum aliqua veniam',
    published: false,
    createdAt: 'Sun Aug 24 1986 06:44:18 GMT+0800 (Philippine Standard Time)',
    updatedAt: 'Sat Aug 01 1987 11:02:42 GMT+0800 (Philippine Standard Time)',
  },
  {
    title: 'voluptate ad aliqua',
    content: 'occaecat occaecat in labore est occaecat reprehenderit qui',
    published: false,
    createdAt: 'Sun Aug 11 1996 03:34:25 GMT+0800 (Philippine Standard Time)',
    updatedAt: 'Thu Feb 24 1977 04:08:45 GMT+0800 (Philippine Standard Time)',
  },
  {
    title: 'laboris nulla ipsum',
    content: 'in cupidatat eu fugiat ad nulla consequat voluptate',
    published: false,
    createdAt: 'Fri Nov 26 1993 19:46:52 GMT+0800 (Philippine Standard Time)',
    updatedAt: 'Fri Apr 11 1975 05:35:44 GMT+0800 (Philippine Standard Time)',
  },
  {
    title: 'excepteur duis non',
    content: 'fugiat excepteur elit ex commodo sunt in reprehenderit',
    published: true,
    createdAt: 'Tue Oct 31 2017 10:40:05 GMT+0800 (Philippine Standard Time)',
    updatedAt: 'Tue Dec 16 2008 12:33:11 GMT+0800 (Philippine Standard Time)',
  },
  {
    title: 'tempor dolore dolore',
    content: 'quis cillum consequat dolore id laborum laborum ut',
    published: false,
    createdAt: 'Tue Jul 06 2021 08:58:36 GMT+0800 (Philippine Standard Time)',
    updatedAt: 'Fri May 13 1983 18:22:57 GMT+0800 (Philippine Standard Time)',
  },
  {
    title: 'pariatur laboris amet',
    content: 'deserunt Lorem fugiat et sunt veniam laborum commodo',
    published: true,
    createdAt: 'Mon Feb 07 2022 13:37:59 GMT+0800 (Philippine Standard Time)',
    updatedAt: 'Sun Dec 04 1983 00:21:57 GMT+0800 (Philippine Standard Time)',
  },
  {
    title: 'consectetur id adipisicing',
    content: 'aute amet anim adipisicing enim aliqua ipsum esse',
    published: false,
    createdAt: 'Tue Jan 11 1977 13:22:36 GMT+0800 (Philippine Standard Time)',
    updatedAt: 'Thu Oct 05 1989 12:56:06 GMT+0800 (Philippine Standard Time)',
  },
  {
    title: 'amet non amet',
    content: 'pariatur cupidatat sunt aliquip tempor ea nostrud exercitation',
    published: true,
    createdAt: 'Sun Dec 13 1998 05:50:32 GMT+0800 (Philippine Standard Time)',
    updatedAt: 'Tue Apr 27 1971 09:00:35 GMT+0800 (Philippine Standard Time)',
  },
  {
    title: 'id sit voluptate',
    content: 'cupidatat nostrud voluptate excepteur proident sit laboris duis',
    published: false,
    createdAt: 'Tue Jul 07 2009 03:33:14 GMT+0800 (Philippine Standard Time)',
    updatedAt: 'Thu Apr 27 2000 17:14:27 GMT+0800 (Philippine Standard Time)',
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
