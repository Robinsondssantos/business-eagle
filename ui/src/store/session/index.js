import api from '../../services/api'

export default {
  state: {
    session: {
      token: null,
      user: {
        id: null,
        name: '',
        email: ''
      }
    }
  },
  mutations: {
    setSession(state, session) {
      state.session = session
    },
    clearSession(state) {
      state.session.token = null
      state.session.user.id = null
      state.session.user.name = ''
      state.session.user.email = ''
    }
  },
  actions: {
     async session({ commit }, payload) {
       try {
         const response = api.post('sessions', payload)
         commit('setSession', response.data)
         console.log('response:', response)
       } catch(err) {
        console.log(err)
       }
    }
  }
}