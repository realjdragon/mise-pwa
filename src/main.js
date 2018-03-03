import Vue from 'vue';
// Vue Router
import VueRouter from 'vue-router';
import { routes } from './routes';
// Vue Material
import VueMaterial from 'vue-material';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VueMaterial);

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
