export default {
  port: process.env.NODE_ENV === 'production' ? process.env.SERVER_PORT : 3333    
}