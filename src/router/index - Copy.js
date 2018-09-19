import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import Dashboard from '@/views/Dashboard/index'
import Edit from '@/views/EDI/edit'
import Home from '@/views/Home/index'
import EDI from '@/views/EDI/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Dashboard',
      name: 'Dashboard',
      component: Layout,
      children: [
        {
          path: '/Dashboard',
          name: 'Dashboard',
          component: Dashboard
        }
        // {
        //   path: '/EDI',
        //   name: 'EDI',
        //   component: EDI
        // }, {
        //   path: '/EDI/Edit',
        //   name: 'Edit',
        //   component: Edit
        // }, {
        //   path: '/Home',
        //   name: 'Home',
        //   component: Home
        // }
      ]
    },
    {
      path: '/EDI',
      name: 'EDI',
      redirect: '/EDI/index',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'index',
          component: EDI
        }, {
          path: 'Edit',
          name: 'Edit',
          component: Edit
        }
      ]
    },
    {
      path: '/Home',
      name: 'Home',
      redirect: '/Home',
      component: Layout,
      children: [
        {
          path: 'Home',
          name: 'Home',
          component: Home
        }
      ]
    }

  ]
})
