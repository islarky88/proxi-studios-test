import { useAuthStore } from '@/store/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    // check if authenticated using useAuthStore
    const authStore = useAuthStore();
    if (!authStore.isAuth) throw new Error('Not Logged In');

    const posts = await prisma.post.findMany();

    return {
      message: 'ok',
      result: posts,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
});
