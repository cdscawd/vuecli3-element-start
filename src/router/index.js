
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import(/*webpackChunkName: 'Index'*/ '@/view/Index/Index.vue') 
    }, {    
      path: '/home',
      name: 'Home',
      component: () => import(/*webpackChunkName: 'Home'*/ '@/view/Home/Home.vue') 
    }, {    
      path: '/login',
      name: 'Login',
      component: () => import(/*webpackChunkName: 'Login'*/ '@/view/Login/Login.vue') 
    }
  ]
})