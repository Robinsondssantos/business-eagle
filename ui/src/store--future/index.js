import { createStore } from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

const state = {
  session: {

  },
  notification: null
}

export default createStore({
  state,
  getters,
  actions,
  mutations
})

// Take a look, follow the example
// https://github.com/vuejs/vuex/tree/4.0/examples/composition/chat/store