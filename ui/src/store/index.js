import { createStore } from 'vuex'
import shared from './shared'
import session from './session'

export default createStore({
  modules: {
    shared,
    session,
  }
})
