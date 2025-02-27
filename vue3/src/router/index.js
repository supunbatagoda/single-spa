import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';

const router = window.Vue3.VueRouter.createRouter({
  history: window.Vue3.VueRouter.createWebHistory(),
  routes: [
    {
      path: '/v2',
      children: [
        {
          path: '',
          component: HomePage
        },
        {
          path: 'about',
          component: AboutPage
        }
      ]
    }
  ]
});

export { router }; 