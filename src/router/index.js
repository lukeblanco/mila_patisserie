import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Carrito from '../views/Carrito'
import Login from '../views/Login'
import FinishBuy from '../views/FinishBuy'
import Admin from '../views/Admin'
import NewUser from '../views/NewUser'
import ProductDashboard from '../views/ProductDashboard'
import UserDashboard from '../views/UserDashboard'
import NewProd from '../views/NewProduct'

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
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/newUser',
    name: 'NewUser',
    component: NewUser
  },
  {
    path: '/userDashboard',
    name: 'UserDashboard',
    component: UserDashboard
  },
  {
    path: '/productDashboard',
    name: 'ProductDashboard',
    component: ProductDashboard  
  },
  {
    path: '/newProd',
    name: 'NewProd',
    component: NewProd  
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
