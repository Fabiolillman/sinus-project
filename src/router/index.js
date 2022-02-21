import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Payment from '../views/Payment.vue'

import ProductPage from '../views/ProductPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {

    path: '/payment',
    name: 'Payment',
    component: Payment

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
