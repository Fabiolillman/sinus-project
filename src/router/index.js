import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Payment from '../views/Payment.vue'
import Checkout from '../views/Checkout.vue'

import ProductPage from '../views/ProductPage.vue'
import SingleProduct from '../views/SingleProduct.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/SingleProduct',
    name: 'SingleProduct',
    component: SingleProduct
  },

  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/ProductPage',
    name: 'ProductPage',
    component: ProductPage

  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
