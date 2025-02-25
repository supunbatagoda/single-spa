<template>
  <div :class="styles.hello2">
    <p>{{ greeting }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import styles from './HelloWorld.module.css';

const greeting = ref('Hello from Vue 3 Component!');
</script>