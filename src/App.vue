<template>
 
  <HelloWorld msg="INU CARDANO TOKEN"/>
  <h1> The First African Decentralized Finance. </h1>
  <h3> Website under construction... </h3>
  <p id="ready"> To be ready in less then 48hours from now...</p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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

#ready{
  margin-top: 50px;
}
</style>
