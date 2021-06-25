<template>
  <div class="mx-50 ">
    
<!--Hero======================================================-->
<div class="flex justify-between px-20 ">

 <div class="">
 <!--left-->
  <h2 class=" text-6xl font-bold mt-4 mb-4 ml-10">INU CARDANO (IC) </h2>
  <p class="font-bold text- text-2xl mb-6">The First African Decentralized Finance</p>
  <h2 class="text-blue-700 mt-20 text-4xl font-black tracking-widest">All in One Ecosystem</h2>

<div class="flex justify-center  mb-2">
  <div class="bg-gray-400  text-gray-700 mb-2 mt-10 mx-2 p-8 w-auto h-auto rounded-2xl border-blue-700 drop-shadow-2xl font-black text-sm"><h6>STAKING, <br/> LENDING</h6></div>
  <div class="bg-gray-400  text-gray-700 mb-2 mt-10 mx-2 p-8 w-auto h-auto rounded-2xl border-blue-700 drop-shadow-2xl  font-black text-sm" ><h6>DEPT MANAGEMENT, <br/> INTEGRATED PAYMENT <br/>GATEWAY</h6></div>
  <div class="bg-gray-400  text-gray-700 mb-2 mt-10 mx-2 p-8 w-auto h-auto rounded-2xl border-blue-700 drop-shadow-2xl font-black text-sm"><h6>ONLINE SHOPPING <br/> SERVICES</h6></div>
</div>

 </div>

 <div>
 
 </div> 

 <!--right-->
  <div class="mr-20 mt-15 max-w-md mx-auto">
   <img class="rounded-full border-4 shadow-2xl py-1  animate-bounce" :src="logo" alt="Inu Cardano Logo"/>


  
  </div>


</div>


  <!--rightdown-->
  
  
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
