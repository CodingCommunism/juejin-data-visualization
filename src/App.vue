<template>
  <Container />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Container from './components/container.vue'

export default defineComponent({
  name: 'App',
  components: {
    Container
  }
})
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
