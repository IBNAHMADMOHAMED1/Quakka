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
  {
    path: '/:cathAll(.*)',
    name: '404',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/view-cart',
    name: 'view-cart',
    component: () => import('@/views/cart/ViewCart.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('@/views/cart/Checkout.vue')
  },
  {
    path: '/order-success',
    name: 'order-success',
    component: () => import('@/views/cart/OrderSuccess.vue')
  },
  {
    path: '/cart-list',
    name: 'cart-list',
    component: () => import('@/views/cart/CartList.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/views/shop/Shop.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
