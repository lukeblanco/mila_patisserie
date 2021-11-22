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
    path: '/finishBuy',
    name: 'FinishBuy',
    component: FinishBuy
  },
  {
    path: '/admin',
    name: 'Admin',
    beforeEnter: checkAdminRights,
    component: Admin
  },
  {
    path: '/order-list',
    name: 'orderList',
    beforeEnter: checkAdminRights,
    component: OrderList
  },
  {
    path: '/order-product-list',
    name: 'orderProductList',
    beforeEnter: checkAdminRights,
    component: OrderProductsList
  },
  {
    path: '/newUser',
    name: 'NewUser',
    component: NewUser
  },
  {
    path: '/userDashboard',
    name: 'UserDashboard',
    beforeEnter: checkAdminRights,
    component: UserDashboard
  },
  {
    path: '/productDashboard',
    name: 'ProductDashboard',
    beforeEnter: checkAdminRights,
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

function checkAdminRights(to, from, next) {
  console.log(store.getters.getUser,"caca")
  if(!store.getters.getUser?.admin){
   next('/');
  }
  else {
   next();
  }
}

export default router
