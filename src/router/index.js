import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Carrito from '../views/Carrito'
import Login from '../views/Login'
import OrderList from '../views/OrderList'
import OrderProductsList from '../views/OrderProductsList'
import store from '../store'

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
    path: '/order-list',
    name: 'Order List',
    beforeEnter: checkAdminRights,
    component: OrderList
  },
  {
    path: '/order-product-list',
    name: 'Order Product List',
    component: OrderProductsList,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function checkAdminRights() {
  console.log("hola")
  console.log(store.getters.getCaca,"caca")
}

export default router
