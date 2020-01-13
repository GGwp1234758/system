import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ 'components/common/NavBar-side'),

  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
