import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import list from '@/components/list'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/list',
      name: 'list',
      component: list,
      meta:{
      	requiresAuth:true
      }
    },
    {
    	path:'/login',
    	name:'login',
    	component:login
    }
  ]
})


router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem('usertoken');
  if(to.meta.requiresAuth){
    if(token){
      return next();
    }
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }else{
    next();
  }
});

export default router;