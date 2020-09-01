import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'
import About from '../views/AboutPage.vue'
import Login from '@/views/Login'
import Registration  from '@/views/Registration'
import Contact from '@/views/Contact'
import LatestPost from '@/views/Latest'
/*DASHBOARD START**/
import Dashboard from '@/views/admin/Dashboard'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component: Registration
  },
  {
    path:'/contact',
    component:Contact
  },
  {
    path:'/latest-post',
    component:LatestPost
  },
  /*================================
      ADMIN PANNEL ROUTE
  ================================== */
  {
    path:'/dashboard',
    component: Dashboard,
    name:'Dashboard'

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
