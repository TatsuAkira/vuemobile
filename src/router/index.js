import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Find from '../views/Find.vue'
import User from '../views/User.vue'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/find',
        name: 'Find',
        component: Find
      },
      {
        path: '/cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: '/user',
        name: 'User',
        component: User
      },
      {
        path: '/home',
        name: 'Home',
        component: Home
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'now',
  linkExactActiveClass: 'now'
})

export default router
