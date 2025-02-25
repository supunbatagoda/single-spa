<template>
  <div class="app">
    <h1 style="color: #f72fcb;">{{ message }}</h1>
    <HelloWorld />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

const message = ref('Welcome to Vue 3 Application');
</script>

<style>
.app {
  text-align: center;
  margin-top: 60px;
}
</style> 