<template>
  <div class="home">
    <h1 style="color: #f72fcb;">{{ message }}</h1>
    <HelloWorld />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HelloWorld from './HelloWorld.vue';

const message = ref('Welcome to Vue 3 Application');
</script> 