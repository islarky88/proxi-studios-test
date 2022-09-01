import { useAuthStore } from '@/store/auth';
import { decode } from 'jsonwebtoken';

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  if (!authStore.isAuth) {
    console.log('Not Logged In. Redirect to home page.');
    return navigateTo('/');
  }
});
