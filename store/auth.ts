import { defineStore } from 'pinia';

interface AuthInfo {
  id: string;
  token: number;
  email: string;
}

export const useAuthStore = defineStore({
  id: 'auth-store',
  state: () => {
    return {
      user: null as AuthInfo | null,
    };
  },
  actions: {},
  getters: {
    isAuth: (state) => state.user?.token && state.user?.id,
    test: (state) => 'test getter',
  },
});
