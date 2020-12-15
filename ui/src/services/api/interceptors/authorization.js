export default req => {
  const token = localStorage.getItem('business-eagle-token')    
  if (token) {
    req.headers.Authorization = `Bearer ${token}`
  }
  return req
}