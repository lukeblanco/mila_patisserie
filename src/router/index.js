import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Carrito from '../views/Carrito'
import Login from '../views/Login'
import FinishBuy from '../views/FinishBuy'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: Carrito
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/finishBuy',
    name: 'FinishBuy',
    component: FinishBuy
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
