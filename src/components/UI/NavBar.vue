<template>
  <div class="navBox">
    <button class="navElem" @click="$router.push('/')"><b>Main</b></button>
    <button class="navElem" @click="$router.push('/list')"><b>Create posts</b></button>
    <button class="navElem" @click="$router.push('/about')"><b>Description</b></button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'nav-bar'
}
</script>

<style>
.navBox {
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #2d2c30;
}
.navElem {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  color: #e5eaee;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  transition: 0.3s;
}

.navElem:hover {
  background-color: rgba(255, 255, 255, 0.25);
}
</style>