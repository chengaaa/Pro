import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import First from './views/First.vue'
import Second from './views/Second.vue'
import Third from './views/Third.vue'
import Fourth from './views/Fourth.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {path:'/First', component:First },
    {path:'/Second', component:Second },
    {path:'/Third', component:Third },
    {path:'/Fourth', component:Fourth },
    {path:'/Home', component:Home },
 
      
      


    {
      path: '/Home',
      name: 'home',
      component: Home
    },
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

