<template>
  <div id="app">
    <nav>
      <router-link to="/"><img alt="Vue logo" src="./assets/logo.png"></router-link>
      <router-link to="/foo">Aller à Foo</router-link>
      <router-link to="/bar/1">Aller au 1e Bar</router-link>
      <router-link to="/bar/15">Aller au 15e Bar</router-link>
    </nav>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  height:128px;
  line-height: 128px;
  margin-bottom: 2em;
}
img{
  height: 100%;
}
</style>
