<template>
  <div class="hello">
    <p>{{ greeting }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      greeting: 'Hello from Vue 2 Component!'
    };
  }
};
</script>

<style scoped>
.hello {
  color: #42b983;
}
</style> 