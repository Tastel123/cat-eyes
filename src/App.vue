<template>
  <div id="app">
    <v-mine></v-mine>
  </div>
</template>

<script>
import Mine from '@/components/Mine/Mine'
export default {
  name: 'App',
  components: {
    'v-mine': Mine
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
