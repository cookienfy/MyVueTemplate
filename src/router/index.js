import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import Dashboard from '@/views/Dashboard/index'
import Edit from '@/views/EDI/edit'
import Home from '@/views/Home/index'
import EDI from '@/views/EDI/index'
import Tables from '@/views/Tables/index'
import TablesEdit from '@/views/Tables/edit'
import store from '@/store/index'

Vue.use(Router)

//For when the page refresh reset token to Vuex
if (sessionStorage.getItem('token')) {
  store.commit('setToken', sessionStorage.getItem('token'))
}

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/Dashboard',
      name: 'Dashboard',
      component: Layout,
      meta: {title: 'Dashboard', icon: 'form'},
      children: [
        {
          path: 'Dashboard',
          name: 'Dashboard',
          component: Dashboard,
          meta: {title: 'index', icon: 'form', noCache: false}
        }
      ]
    }, {
      path: '/EDI',
      name: 'EDI',
      redirect: '/EDI/index',
      component: Layout,
      meta: {title: 'EDI', icon: 'form'},
      children: [
        {
          path: 'index',
          name: 'index',
          component: EDI,
          meta: {title: 'Index', icon: 'form', noCache: false}
        }, {
          path: 'Edit',
          name: 'Edit',
          component: Edit,
          meta: {title: 'Edit', icon: 'form', noCache: false}
        }
      ]
    }, {
      path: '/Home',
      name: 'Home',
      redirect: '/Home/index',
      component: Layout,
      meta: {title: 'Home', icon: 'form'},
      children: [
        {
          path: 'index',
          name: 'index',
          component: Home,
          meta: {title: 'Index', icon: 'form', noCache: false}
        }
      ]
    }, {
      path: '/Tables',
      name: 'Tables',
      redirect: '/Tables/index',
      component: Layout,
      meta: {title: 'Table', icon: 'form'},
      children: [
        {
          path: 'index',
          name: 'index',
          component: Tables,
          meta: {title: 'Table01', icon: 'form', noCache: false}
        }, {
          path: 'Edit',
          name: 'TablesEdit',
          component: TablesEdit,
          props: true,
          meta: {title: 'Edit', icon: 'form', noCache: false}
        }
      ]
    }

  ]
})

router.beforeResolve((to, from, next) => {
  const tmpRouteList = to.matched
  const routeList = []
  routeList.push({name: 'Dashboard', path: '/', title: 'Dashboard'})

  for (let r of tmpRouteList) {
    if (r.name === 'Dashboard') {
      continue
    }
    if (r.name === to.name) {
      routeList.push({name: r.name, path: '', title: r.meta.title})
    } else {
      routeList.push({name: r.name, path: r.path, title: r.meta.title})
    }
  }
  to.meta.routeList = routeList
  next()
})


export default router
