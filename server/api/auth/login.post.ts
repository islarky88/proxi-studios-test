import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const secret = useRuntimeConfig().env?.public?.secret || 'randomsecret';
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

    console.log('user :>> ', user);

    // check password
    const hashedPassword = await bcrypt.hash(password, user.salt);

    // user.password =     const hashedPassword = await bcrypt.hash(password, salt);

    const isPasswordValid = await bcrypt.compare(password, user.password);

    console.log('isPasswordValid :>> ', isPasswordValid);

    if (!isPasswordValid) throw new Error('invalid password');

    // create token
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      secret,
      { expiresIn: '1h' },
    );
    console.log('token :>> ', token);

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
