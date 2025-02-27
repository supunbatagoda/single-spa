import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';

const routes = [
  {
    path: '/v2',
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: 'about-us',
        component: AboutPage
      }
    ]
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
}); 