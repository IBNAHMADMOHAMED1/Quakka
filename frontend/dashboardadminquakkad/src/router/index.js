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
    component: () => import('../components/Halls/ViewHalls.vue')
  },
  {
    path: '/edit-hall/:hallId',
    name: 'editHall',
    component: () => import('../components/Halls/EditHall.vue')
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import('../kanban.vue')
  },
  {
    path: '/commands',
    name: 'commands',
    component: () => import('@/views/Commands/Commands.vue')
  },
  {
    path: '/create-command',
    name: 'create-command',
    component: () => import('@/views/Commands/CreateCommand.vue')
  },
  {
    path: '/view-command/:commandId',
    name: 'view-command',
    component: () => import('@/views/Commands/ViewCommand.vue')
  },
  {
    path: '/purcahse-orders',
    name: 'purcahse-orders',
    params: {
      ListOfProducts: ['test']
    },
    
    component: () => import('@/views/PurchaseOrders/PurchaseOrders.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/404.vue')
  },
  {
    name: 'listOfProducts',
    path: '/list-of-products',
    component: () => import('@/views/Products/ListOfProducts.vue')
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: () => import('@/views/Blogs/Blogs.vue')
  },
  {
    path: '/create-blog',
    name: 'create-blog',
    component: () => import('@/views/Blogs/CreateBlog.vue')
  },
  {
    path: '/view-blog/:blogId',
    name: 'view-blog',
    component: () => import('@/views/Blogs/ViewBlog.vue')
  },
  {
    path: '/edit-blog/:blogId',
    name: 'edit-blog',
    component: () => import('@/views/Blogs/EditBlog.vue')
  },
  {
    path: '/subscribers',
    name: 'subscribers',
    component: () => import('@/views/Subscribers/Subscribers.vue')
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
