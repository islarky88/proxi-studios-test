import { generateToken } from './../../utils/token';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const { username, password } = await useBody(event);

    if (!username || !password)
      throw new Error('username or password is missing');

    // check and find user
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (!user) throw new Error('user does not exist');

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw new Error('invalid password');

    const token = generateToken({ userId: user.id, username: user.username });

    return {
      message: 'login success',
      token,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
});
