import Vue from 'vue'
import VueRouter from 'vue-router'
import First from '../views/First.vue'
import Second from '../views/Second.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/first',
    name: 'First',
    component: First
  },
  {
    path: '/second',
    name: 'Second',
    component: Second
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
