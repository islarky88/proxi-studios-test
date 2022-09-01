import { generateToken } from './../../utils/token';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const { username, password } = await useBody(event);

    if (!username || !password)
      throw new Error('username or password is missing');

    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (user) throw new Error('user already exists');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        salt,
      },
    });

    const token = generateToken({
      userId: newUser.id,
      username: newUser.username,
    });

    return {
      message: 'signup success',
      token,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
});
