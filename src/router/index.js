import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Departures from "../views/Departures";
import Arrivals from "../views/Arrivals";
// import Posts from "../views/Posts";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/departures',
    name: 'Departures',
    component: Departures
  },
  {
    path: '/arrivals',
    name: 'Arrivals',
    component: Arrivals
  },
  // {
  //   path: '/posts',
  //   name: 'Posts',
  //   component: Posts
  // }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
