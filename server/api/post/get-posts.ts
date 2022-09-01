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
