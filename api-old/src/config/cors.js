export default {
  origin: 
    process.env.NODE_ENV === 'production'
      ? process.env.CORS_BASE_URL
      : 'http://localhost:8080'
}