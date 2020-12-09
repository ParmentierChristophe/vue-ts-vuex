import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store';
import LoginRoutes from '../login/login.routes';
import ProfileRoutes from '@/profile/profile.routes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    ...LoginRoutes,
    meta: { public: true }
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { public: false }
  },
  {
    path: '/me',
    ...ProfileRoutes,
    meta: { public: true }
  },
  {
    path: '/about',
    name: 'about',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { public: false }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => !record.meta.public)) {
    // protected route
    if (store.getters['AuthStore/isLoggedIn']) {
      // if logged In, continue
      next();
      return;
    }

    next({
      path: '/login',
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
});

export default router;
