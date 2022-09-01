import bcrypt from 'bcryptjs';

export default defineEventHandler(async (event) => {
  try {
    const secret = useRuntimeConfig().env?.public?.secret;
    const { username, password } = await useBody(event);

    if (!username || !password)
      throw new Error('username or password is missing');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let token;

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
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
});
