<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ListLocations msg="Liste des lieux de tournages"/>
  </div>
</template>

<script>
import ListLocations from './components/ListLocations.vue'

export default {
  name: 'App',
  components: {
    ListLocations
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
