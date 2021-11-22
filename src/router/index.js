import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Carrito from '../views/Carrito'
import Login from '../views/Login'
import FinishBuy from '../views/FinishBuy'
import Admin from '../views/Admin'
import NewUser from '../views/NewUser'
import NewProd from '../views/NewProduct'
import OrderProductsList from '../views/OrderProductsList.vue'
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
    path: '/order-product-list',
    name: 'orderProductList',
    beforeEnter: checkAdminRights,
    component: OrderProductsList
  },
  {
    path: '/newUser',
    name: 'NewUser',
    beforeEnter: checkAdminRights,
    component: NewUser
  },
  {
    path: '/newProd',
    name: 'NewProd',
    beforeEnter: checkAdminRights,
    component: NewProd  
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function checkAdminRights(to, from, next) {
  console.log(store.getters.getUser,"user")
  if(!store.getters.getUser?.admin){
   next('/');
  }
  else {
   next();
  }
}

export default router
