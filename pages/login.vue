<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">

    <div class="flex justify-center mb-5">
      username: {{ formState.username }}<br />
      password: {{ formState.password }}
    </div>

    <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 8 }" autocomplete="off"
      @finish="onFinish" @finishFailed="onFinishFailed">
      <a-form-item label="Username" name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]">
        <a-input v-model:value="formState.username" />
      </a-form-item>


      <a-form-item label="Password" name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button class="bg-slate-800 text-black" type="primary" html-type="submit">{{ isSignup ? 'Signup' : 'Login' }}
        </a-button>
      </a-form-item>


      <div v-if="isSignup" class="flex justify-center mt-3">
        Already registered? <nuxt-link to="/login" class="ml-3">Login here</nuxt-link>
      </div>

      <div v-if="!isSignup" class="flex justify-center mt-3">
        Are you new? <nuxt-link to="/login?action=signup" class="ml-3">Signup here</nuxt-link>
      </div>



    </a-form>

  </div>
</template>

<script setup lang="ts">
const route = useRoute()


const isSignup = computed(() => route.query?.action === 'signup')

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
    }

    const endpoint = isSignup.value ? '/api/auth/signup' : '/api/auth/login'

    const result = await $fetch(endpoint, { method: 'post', body: payload })
    console.log('result :>> ', result);
  } catch (error) {
    console.log(error);
  }

};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
</script>
