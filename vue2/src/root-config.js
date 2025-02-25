import { registerApplication, singleSpaNavigate, start } from 'single-spa';

// Dynamically import SystemJS if needed
if (!window.System) {
    console.log('SystemJS Not Loaded');
}

// Register Vue 2 application
registerApplication({
    name: 'vue2app',
    app: async () => {
        console.log('Loading vue2 app...');
        await window.System.import('./vue2-app.js');
        console.log('Loading vue2 app done...');
        return window.vue2app;
    },
    activeWhen: location => !location.pathname.startsWith('/v2'),
});

// Register Vue 3 application
registerApplication({
    name: 'vue3app',
    app: async () => {
        console.log('Loading vue3 app...');
        await window.System.import('http://localhost:3001/vue3-app.js');
        console.log('Loading vue3 app done...');
        return window.vue3app;
    },
    activeWhen: location => location.pathname.startsWith('/v2'),
});

// Start single-spa
start(); 