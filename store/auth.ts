import { defineStore } from 'pinia';

interface AuthInfo {
  id: number;
  token: string;
  username: string;
}

export const useAuthStore = defineStore({
  id: 'auth-store',
  state: () => {
    return {
      user: null as AuthInfo | null,
      token: null as string | null,
    };
  },
  actions: {
    // setUserFromToken(token: string) {
    //   const { userId, username } = jwt.decode(token);
    //   this.user = { id: userId, token: token, username };
    // },
  },
  getters: {
    isAuth: (state) => state.user?.token && state.user?.id,
    test: (state) => 'test getter',
  },
});
