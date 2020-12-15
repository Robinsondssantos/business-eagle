export default {
  secret: process.env.NODE_ENV === 'production' ? process.env.AUTH_SECRET : 'secret',
  expiresIn: '60m',    
}