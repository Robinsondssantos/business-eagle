export default {
  state: {
    notification: null
  },
  mutations: {
    setNotification(state, notification) {
      state.notification = notification
    },
    clearNotification(state) {
      state.notification = null
    }
  },
  actions: {
    clearNotification({ commit }) {
      commit('clearNotification')
    }
  }
}