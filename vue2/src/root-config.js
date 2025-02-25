import { registerApplication, start } from 'single-spa';

// Register Vue 2 application
registerApplication({
  name: 'vue2',
  app: () => System.import('http://localhost:3000/vue2-app.js'),
  activeWhen: (location) => location.pathname === '/' || !location.pathname.startsWith('/v2')
});

// Register Vue 3 application
registerApplication({
  name: 'vue3',
  app: () => System.import('http://localhost:3001/vue3-app.js'),
  activeWhen: (location) => location.pathname.startsWith('/v2')
});

// Start single-spa
start(); 