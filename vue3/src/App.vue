<template>
  <div class="app">
    <nav>
      <router-link to="/v2">Home</router-link> |
      <router-link to="/v2/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
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
  color: #f72fcb;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-active {
  font-weight: bold;
}
</style> 