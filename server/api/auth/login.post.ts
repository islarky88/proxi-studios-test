export default defineEventHandler(async (event) => {
  try {
    const body = await useBody(event);
    const env = useRuntimeConfig();

    console.log('login body :>> ', body);
    console.log('env body :>> ', env);
    return {
      message: 'login success',
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
});
