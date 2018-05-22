import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Page5 from '@/components/Page5'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/page5',
      name: 'page5',
      component: Page5
    }
  ]
})
