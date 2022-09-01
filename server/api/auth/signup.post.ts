export default defineEventHandler(async (event) => {
  try {
    const body = await useBody(event);

    console.log('signup body :>> ', body);
    return {
      message: 'signup success',
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
});
