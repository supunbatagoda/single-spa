const { createApp, h } = window.Vue3;
import App from './App.vue';
import { router } from './router';
import singleSpaVue from 'single-spa-vue';

// Define __VUE_HMR_RUNTIME__ if not defined
if (typeof __VUE_HMR_RUNTIME__ === 'undefined') {
  window.__VUE_HMR_RUNTIME__ = null;
}

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render: () => h(App),
    router
  }
});

const { bootstrap, mount, unmount } = vueLifecycles;

// Export the lifecycle functions to window
window.vue3app = {
  bootstrap,
  mount,
  unmount
}; 