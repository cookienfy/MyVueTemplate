import Vue from 'vue'
import Vuex from 'vuex'
import tagsView from './modules/tagsView'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tagsView
  },
  state: {
    count: 0,
    userInfo: {},
    token: ''
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      sessionStorage.token = token
    },
    del_token (state) {
      state.token = ''
      sessionStorage.removeItem('token')
    }
  }
})

