// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import store from './store/index'
// import ajax from './api/ajax.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = axios
// ajax(Vue, axios)

axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.state.token

axios.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers.common['Authorization'] = 'Bearer ' + store.state.token
  }

  return config
}, error => {
  return Promise.reject(error)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})

