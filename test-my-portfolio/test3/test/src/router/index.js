import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})