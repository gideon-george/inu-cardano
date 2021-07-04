<template>
 <Header/>
  <HelloWorld/>
  <About/>
  <Mission/>
  <Tokenomics/>
  <Footer/>
    

</template>

<script>
import Header from './components/Header.vue'
import HelloWorld from './components/HelloWorld.vue'
import Mission from './components/Mission.vue'
import About from './components/About.vue'
import Tokenomics from './components/Tokenomics.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header, 
    HelloWorld,
    About,
    Mission, 
    Tokenomics,
    Footer
    
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
