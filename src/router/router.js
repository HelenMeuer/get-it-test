import Vue from 'vue'
import Router from 'vue-router'

import home from '../pages/home/home'

Vue.use(Router)

const router = new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})

export default router;