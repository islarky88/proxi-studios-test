<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>

    <form class="text-gray-600 body-font">
      <div class="container px-5 py-24">
        <div class="lg:w-3/5 md:w-1/2">
          <h1 class="text-gray-900">
            Subscribe to my newsletter
          </h1>
          <p class="leading-relaxed mt-4">
            I send out a weekly newsletter with tips and tricks for web
            development.
          </p>
        </div>
        <div class=" lg:w-2/6 md:w-1/2 bg-gray-100">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
            Subscribe
          </h2>

          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded" />
          </div>
          <button class="text-white bg-indigo-500">
            Subscribe
          </button>
        </div>
      </div>
    </form>

    <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-2 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" aria-hidden="true">
            <!-- ... -->
          </svg>
        </span>
      </div>
      <h3 class="text-slate-900 dark:text-white mt-5 mb-4 text-base font-bold tracking-tight text-sm">Writes
        Upside-Down</h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer
        space.
      </p>
    </div>

    <div>
      When controlling the flow of text, using the CSS property
      <span class="inline">display: inline</span>
      will cause the text inside the element to wrap normally.

      While using the property <span class="inline-block">display: inline-block</span>
      will wrap the element to prevent the text inside from extending beyond its parent.

      Lastly, using the property <span class="block">display: block</span>
      will put the element on its own line and fill its parent.
    </div>
    <button
      class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 py-6 rounded-md px-6">
      Save changes
    </button>
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
