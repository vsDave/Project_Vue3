import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Todo from '../views/Todo.vue'
import services from '../views/services.vue'
import calculator from '../views/calculator.vue'
import quiz from '../views/quiz.vue'
import piniaTodo from '../views/piniaTodo.vue'

// Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/todo',
    component: Todo,
  },
  {
    path: '/services',
    component: services,
  },
  {
    path: '/calculator',
    component: calculator,
  },
  {
    path: '/quiz',
    component: quiz,
  },
  {
    path: '/piniaTodo',
    component: piniaTodo,
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes,
})
export default router
