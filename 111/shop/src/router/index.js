import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Sort from '../views/Sort.vue'
import My from '../views/My.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/cart',
    name:'cart',
    component:Cart
  },
  {
    path:'/sort',
    name:'sort',
    component:Sort
  },
  {
    path:'/my',
    name:My,
    component:My
  }
  
]

const router = new VueRouter({
  routes
})

export default router;
