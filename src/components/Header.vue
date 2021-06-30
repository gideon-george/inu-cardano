<template>
  <div class="bg-gray-900 text-gray-200 px-20 py-6 flex justify-between items-center mb-10 min-h-25">
      
      
      <img class=" h-12 rounded-full" :src="navimage" alt="Nav Logo"/>

 
      <a class="inline-block py-10 font-semibold text-gray-300 text-xl hover:text-yellow-500 transition ease-in duration-150" href="#">About INU CARDANO</a>
      <a class="inline-block py-10 font-semibold text-gray-300 text-xl hover:text-yellow-500 transition ease-in duration-150" href="#">Mission</a>
      <a class="inline-block py-10 font-semibold text-gray-300 text-xl hover:text-yellow-500 transition ease-in duration-150" href="#">How to Buy</a>
      <a class="inline-block py-10 font-semibold text-gray-300 text-xl hover:text-yellow-500 transition ease-in duration-150" href="#">Roadmap</a>
      <a class="inline-block py-10 font-semibold text-gray-300 text-xl hover:text-yellow-500 transition ease-in duration-150" href="#">Tokenomics</a>
      <a class="inline-block py-10 font-semibold text-gray-300 text-xl hover:text-yellow-500 transition ease-in duration-150" href="#">DISCLAIMER</a>
      
      
      
      
      
      </div> 
       
</template>

<script>
export default {
    name: 'header',
    data(){
        return{
            navimage :require('../assets/logo.png'),
        }
    }

}
</script>

<style>

</style>