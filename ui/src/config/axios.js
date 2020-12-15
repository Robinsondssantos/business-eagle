export default {
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.BASE_URL    
      : 'http://127.0.0.1:3333',
  timeout: 30 * 1000 // 30 seconds
}