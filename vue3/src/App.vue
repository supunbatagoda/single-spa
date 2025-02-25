<template>
  <div class="app">
    <h1>{{ message }}</h1>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      message: 'Welcome to Vue 3 Application'
    };
  }
};
</script>

<style>
.app {
  text-align: center;
  margin-top: 60px;
}
</style> 