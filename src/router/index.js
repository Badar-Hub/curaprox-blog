import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/braces',
    name: 'Braces',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cs5460.vue')
  },
  {
    path: '/implant',
    name: 'Implant',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Implant.vue')
  },
  {
    path: '/clean-teeth',
    name: 'Clean Teeth',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CleanTeeth.vue')
  },
  {
    path: '/sensitive-teeth',
    name: 'Sensitive Teeth',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SensitiveTeeth.vue')
  },
  {
    path: '/gum-care',
    name: 'Gum Care',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GumCare.vue')
  },
  {
    path: '/teeth-whitening',
    name: 'Teeth Whitening',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TeethWhitening.vue')
  },
  {
    path: '/how-often-should-you-replace-your-toothbrush',
    name: 'How Often Should You Replace Your Toothbrush',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/how-often-should-you-replace-your-toothbrush.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
