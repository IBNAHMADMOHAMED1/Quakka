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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
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
    component: () => import(/* webpackChunkName: "account" */ '../views/AccountView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router