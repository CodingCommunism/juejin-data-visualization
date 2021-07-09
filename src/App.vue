<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <WordCloud /> -->
  <Container />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WordCloud from './components/word-cloud.vue'
import Container from './components/container.vue'

export default defineComponent({
  name: 'App',
  components: {
    WordCloud,
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
