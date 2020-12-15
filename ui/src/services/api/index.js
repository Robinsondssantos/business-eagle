import axios from 'axios'
import axiosConfig from '../../config/axios'
import authorizationInterceptor from './interceptors/authorization'
// import { store } from '../../store'
// import router from '../../router'


class Axios {
  constructor() {
    this.axios = axios.create(axiosConfig)
    this.addRequestInterceptors()
    // this.addResponseInterceptors()
  }

  addRequestInterceptors() {
    this.axios.interceptors.request.use(authorizationInterceptor)
  }

  // addResponseInterceptors() {
  //   this.axios.interceptors.response.use(response => response, error => {

  //   })
  // }
}

export default new Axios().axios


