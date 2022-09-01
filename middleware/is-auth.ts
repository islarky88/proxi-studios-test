import { useAuthStore } from '@/store/auth';
import { decode } from 'jsonwebtoken';

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  // console.log('authStore :>> ', authStore);
  // console.log('decode :>> ', decode);
  // console.log('is auth to :>> ', to);

  if (!authStore.isAuth) {
    console.log('Not Logged In. Redirect to home page.');
    return navigateTo('/');
  }
});
