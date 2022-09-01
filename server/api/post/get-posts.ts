import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const newPost = await prisma.post.create({
      data: {
        title: 'Hello World',
        content: 'This is my first post',
        published: true,
        // random authorId from prisma.auth
      },
    });

    console.log('newPost', newPost);

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
