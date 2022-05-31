import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../components/auth/Login.vue'
import forgotpassword from '../components/auth/ForgotPassword.vue'

const routes = [
  {
    path: '/dashboard',
    name: 'HomeView',
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
    component: login
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: forgotpassword
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/AccountView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/create-product',
    name: 'create-product',
    component: () => import('../views/Products/CreateProduct.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/Products/Products.vue')
  },
  {
    path: '/view-product/:productId',
    name: 'viewProduct',
    component: () => import('../components/Products/ViewProduct.vue')
  },
  {
    path: '/edit-product/:productId',
    name: 'editProduct',
    component: () => import('../components/Products/EditProduct.vue')
  },
  {
    path: '/create-hall',
    name: 'create-hall',
    component: () => import('../views/Halls/CreateHall.vue')
  },
  {
    path: '/halls',
    name: 'halls',
    component: () => import('../views/Halls/Halls.vue')
  },
  {
    path: '/view-hall/:hallId',
    name: 'viewHall',
    component: () => import('../components/Halls/ViewHall.vue')
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
