import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Departures from "../views/Departures";
import Arrivals from "../views/Arrivals";
import store from '../store'
// import Posts from "../views/Posts";

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    path: '/',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '@/views/Register.vue')
  },
  {
    path: '/departures',
    name: 'Departures',
    component: Departures,
    meta: { requiresAuth: true }
  },
  {
    path: '/arrivals',
    name: 'Arrivals',
    component: Arrivals,
    meta: { requiresAuth: true }
  },
  // {
  //   path: '/posts',
  //   name: 'Posts',
  //   component: Posts
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  // Check if the user is logged in

  const isUserLoggedIn = store.getters.isAuthenticated

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isUserLoggedIn) {
      store.dispatch('logOut')
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
