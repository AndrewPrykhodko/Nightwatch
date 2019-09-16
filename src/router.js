import Vue from 'vue'
import Router from 'vue-router'

import NProgress from 'nprogress'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // products module routers
    {
      path: '/products',
      name: 'products.index',
      // route level code-splitting
      // which is lazy-loaded when the route is visited.
      component: () => import('./pages/products/index.vue')
    },
    {
      path: '/products/create',
      name: 'products.create',
      component: () => import('./pages/products/create.vue')
    },
    {
      path: '/products/update/:id',
      name: 'products.update',
      component: () => import('./pages/products/update.vue')
    },
    // 404
    {
      path: '/404',
      name: 'not-found',
      component: () => import('./pages/not-found/index.vue'),
      meta: {
        title: '404 Not Found'
      }
    },
    // Redirects
    {
      path: '/',
      redirect: '/products'
    },
    {
      path: '/*',
      redirect: '/404'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// to show progress bar on top of the page when route is changed
router.beforeResolve((to, from, next) => {
  NProgress.start()
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
