import { verifyToken } from './../../utils/token';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    // get token from event
    const auth = event.req.headers?.authorization;

    if (!auth) throw new Error('Not Logged In');

    const token = auth.split(' ')[1];

    const decoded = verifyToken(token);

    if (!decoded.userId || !decoded.username) throw new Error('Not Logged In');

    let posts = await prisma.post.findMany();

    // create test data if no posts found. should be REMOVED after testing
    if (posts.length === 0) {
      const newPosts = Array(26)
        .fill(0)
        .map((_, index) => {
          return {
            title: `Post ${index}`,
            content: `Content ${index}`,
            published: Math.random() > 0.5,
            createdAt: new Date(),
            updatedAt: new Date(),
          };
        });

      await prisma.post.createMany({
        data: newPosts,
      });

      return {
        message: 'ok',
        result: newPosts,
      };
    }

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
