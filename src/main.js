import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vView from 'vue-view-lazy'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';
Vue.use(ElementUI);
Vue.use(vView);

// Vue.use(vView,{
//   error:'../../static/images/loading.png',
//   loading:'../../static/images/loading.gif',
// });

Vue.config.productionTip = false

new Vue({
  router,
  store,
 render: h => h(App)
}).$mount('#app')
