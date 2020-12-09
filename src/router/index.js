import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NewArrivals from '../views/NewArrivals.vue';
import UprightsIndex from '../views/UprightsIndex.vue';
import ElectricsIndex from '../views/ElectricsIndex.vue';
import BowsIndex from '../views/BowsIndex.vue';
import AccessoriesIndex from '../views/UprightsIndex.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new-arrivals',
    name: 'new-arrivals',
    component: NewArrivals
  },
  {
    path: '/uprights',
    name: 'uprights-index',
    component: UprightsIndex
  },
  {
    path: '/electrics',
    name: 'electrics-index',
    component: ElectricsIndex
  },
  {
    path: '/bows',
    name: 'bows-index',
    component: BowsIndex
  },
  {
    path: '/accessories',
    name: 'accessories-index',
    component: AccessoriesIndex
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
