import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'



Vue.use(Router)

export default new Router({
  routes: [
    {path:'/First', component: () => import("./views/First") },
    {path:'/Second', component: () => import('./views/Second') },
    {path:'/Third', component: () => import('./views/Third')},
    {path:'/Fourth', component: () => import('./views/Fourth')},
    {path:'/Home', component: () => import('./views/Home') },
    {
      path: '/',
      name: 'home',
      redirect: "/Home",
      component: Home
    }
   
  ]
})




// export default new Router({
//   routes: [
//     { path: '/list/:id', component:List },
//     { path: '/detail/:id', component:Detail },
//     { path: '/payment', component:Payment },
//     {
//       path: '*',
//       name: 'home',
//       component: Home
//     },
   
//   ]
// })

