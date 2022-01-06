import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Departures from "../views/Departures";
import Arrivals from "../views/Arrivals";

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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
