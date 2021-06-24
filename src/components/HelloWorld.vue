<template>
  <div class="mx-50 ">
    
<!--Hero======================================================-->
<div class="flex justify-between px-20 ">

 <div class="">
 <!--left-->
  <h2 class=" text-6xl font-bold mt-10 mb-6 ml-10">INU CARDANO</h2>
  <p class="font-bold text-lg mb-3">The First African Decentralized Finance</p>
 </div>

 <!--right-->
  <div class="mr-20 mt-15 max-w-md mx-auto">
   <img class="rounded-full border-4 shadow-2xl py-1  animate-bounce" :src="logo" alt="Inu Cardano Logo"/>


  
  </div>


</div>

<div class="mx-50 shadow-lg font-semibold tracking-wider">
  <!--leftdown-->
  <div class="flex ml-20  animate-pulse">
  <a class="inline-block mr-4 bg-gray-300 w-1/10 text-lg p-5  border-3 text-gray-900 rounded-lg  hover:text-gray-500 transition ease-in duration-150 " href="#">WHITEPAPER</a>
  <a class="inline-block mr-4 bg-gray-300 w-1/10 text-lg p-5 border-3 text-gray-900 rounded-lg  hover:text-gray-500 transition ease-in duration-150" href="#">CONTRACT ADDRESS</a>
  <a class="inline-block mr-4 bg-gray-300 w-1/10 text-lg p-5 border-3 t0ext-gray-900 rounded-lg hover:text-gray-500 transition ease-in duration-150" href="#">BUY ON PANCAKESWAP</a>
    
  </div>
  
  <!--rightdown-->
  <div class="flex p-5 ml-20 w-3/12">
    <img class="inline-block  mr-4 h-12 rounded-lg  " :src="trustwallet" alt="Trust Wallet"/>
  <img class="inline-block mr-4 h-12 rounded-lg" :src="metamask" alt="Trust Wallet"/>
  </div>
  
  </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      logo: require('../assets/main.jpg'),
      trustwallet: require('../assets/trustwallet.png'),
      metamask: require('../assets/metamask.png'),
    
    }
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
