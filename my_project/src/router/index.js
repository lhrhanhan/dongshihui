import Vue from 'vue'
import Router from 'vue-router'
import bottom from '@/components/index/bottom'
import login from '@/components/login/login'
import reg from '@/components/login/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bottom',
      component: bottom
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: reg
    }
  ]
})
