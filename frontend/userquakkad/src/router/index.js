import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/RegisterView.vue')
  },
  {
    path: '/product-details/:id',
    name: 'product-details',
    component: () => import('@/views/product/ProductDetails.vue')
  },
  // page not found
  {
    path: '/:cathAll(.*)',
    name: '404',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/view-cart',
    name: 'view-cart',
    component: () => import('@/views/cart/ViewCart.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
