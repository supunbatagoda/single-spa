import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import About from './components/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/about',
    component: About
  }
];

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes
}); 