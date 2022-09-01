export default defineEventHandler(async (event) => {
  try {
    const body = await useBody(event);

    console.log('login body :>> ', body);
    return {
      message: 'login success',
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
});
