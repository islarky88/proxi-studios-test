<template>
  <div
    class="relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"
  >
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 8 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember"
          >Remember me</a-checkbox
        >
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button
          :disabled="isLoading"
          class="bg-slate-800 text-black"
          type="primary"
          html-type="submit"
        >
          {{ isSignup ? 'Signup' : 'Login' }}
        </a-button>
      </a-form-item>

      <div v-if="isSignup" class="flex justify-center mt-3">
        Already registered?
        <nuxt-link to="/login" class="ml-3">Login here</nuxt-link>
      </div>

      <div v-if="!isSignup" class="flex justify-center mt-3">
        Are you new?
        <nuxt-link to="/login?action=signup" class="ml-3"
          >Signup here</nuxt-link
        >
      </div>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { notification } from 'ant-design-vue';
import { useAuthStore } from '@/store/auth';

const route = useRoute();
const authStore = useAuthStore();

const isSignup = computed(() => route.query?.action === 'signup');
const isLoading = ref(false);

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});

const onFinish = async () => {
  try {
    const payload = {
      username: formState.username,
      password: formState.password,
    };

    isLoading.value = true;
    const endpoint = isSignup.value ? '/api/auth/signup' : '/api/auth/login';
    const result = await $fetch(endpoint, { method: 'post', body: payload });

    // check for errors and stop when any is found
    if (result.error) throw new Error(result.error);

    if (!result.token) throw new Error("Token doesn't exist");

    // save token to local storage and pinia store
    localStorage.setItem('token', result.token);
    authStore.token = result.token;

    const router = useRouter();
    router.push({ path: '/dashboard' });

    // register or login successful
    notification['success']({
      message: `Successfully ${isSignup.value ? 'registered' : 'logged in'}`,
    });
  } catch (error) {
    console.log(error);
    notification['error']({
      message: error.message,
    });
    isLoading.value = false;
  }
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
</script>
