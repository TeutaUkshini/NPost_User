import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Recipe from '../views/Recipe.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/recipe',
    name: 'Recipe',
    component: Recipe
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
