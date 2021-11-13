<template>
<nav-bar></nav-bar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/UI/NavBar.vue'
export default {
  components: { NavBar },

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
body {
  background-color: #d0d4d8;
  color: #2d2c30;
}
.app {
  padding: 30px;
}
</style>