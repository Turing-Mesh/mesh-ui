import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import NoRoute from '@/views/NoRoute'
import Signup from '@/views/Signup'
import Login from '@/views/Login'
import InstructorDashboard from '@/views/InstructorDashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/modules/:id',
    name: 'StudentFeedback',
    component: () => import(/* webpackChunkName: "student feedback" */ '../components/StudentFeedback.vue'),
    children: [
      {
        path: '/modules/:id/project/:project_id',
        name: 'Project',
        component: () => import(/* webpackChunkName: "student feedback" */ '../components/Project.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: 'NoRoute',
    component: NoRoute
  },
  {
    path: '/instructor-dashboard',
    name: 'InstructorDashboard',
    component: InstructorDashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
