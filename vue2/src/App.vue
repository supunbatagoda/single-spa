<template>
  <div class="app">
    <h1 style="color: #42b983;">{{ message }}</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
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
      message: 'Welcome to Vue 2 Application'
    };
  }
};
</script>

<style>
.app {
  text-align: center;
  margin-top: 60px;
}

nav {
  padding: 20px;
}

nav a {
  color: #42b983;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-active {
  font-weight: bold;
}
</style> 