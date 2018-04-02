<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-link to="/">Home</router-link>
    <router-link to="/users">Customers</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
@import "../styles/app.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $orange;
  margin-top: 60px;
}
</style>