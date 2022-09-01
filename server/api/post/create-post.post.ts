import { useAuthStore } from '@/store/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    // check if authenticated using useAuthStore
    const authStore = useAuthStore();
    if (!authStore.isAuth) throw new Error('Not Logged In');

    const { title, content, published } = await useBody(event);

    if (!title || !content) throw new Error('title or content is missing');

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        published,
      },
    });

    return {
      message: 'ok',
      result: newPost,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
});
