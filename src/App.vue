<template>
  <div id="app">
    <!-- <img alt="Creation of Robot" src="./img/international-space-station.jpg"> -->
    <h1>ISS Tracker</h1>
    <router-view/>
    <!-- <img alt="Creation of Robot" src="./img/4K-final-top.jpg"> -->
  </div>
</template>

<script>
export default {
  name: 'app', 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  /* background-image: url("./img/astronomy.jpg");  */
  background-image: url("./img/earth-sky.jpg"); 
 background-size: cover;
}
</style>
