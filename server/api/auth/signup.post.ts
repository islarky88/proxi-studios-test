import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const secret = useRuntimeConfig().env?.public?.secret;
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

    // let token;

    const payload = {
      username,
      password: hashedPassword,
      salt,
    };

    const result = await prisma.user.create({
      data: payload,
    });
    console.log('result :>> ', result);

    // try {
    //    token = jwt.sign(
    //      { userId: newUser.id, email: newUser.email },
    //      'secretkeyappearshere',
    //      { expiresIn: '1h' },
    //    );
    // } catch (error) {
    //   console.log(error);
    // }

    return {
      message: 'login success',
      result,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
});
