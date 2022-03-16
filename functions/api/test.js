export async function onRequest(context) {
  const { request, env, params, waitUntil, next, data } = context
  return new Response('Hello, world!')
}
