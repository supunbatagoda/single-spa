import Vue from 'vue';
import App from './App.vue';
import router from './router';
import singleSpaVue from 'single-spa-vue';

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: h => h(App),
    router
  }
});

const { bootstrap, mount, unmount } = vueLifecycles;

// Export the lifecycle functions to window
window.vue2app = {
  bootstrap,
  mount,
  unmount
}; 