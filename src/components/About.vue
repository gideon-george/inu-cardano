<template>
 <div class="flex justify-center">
 <div class="w-1/2">
 </div>
  
  <!--leftdown-->
  <div class="flex w-1/2 m-10 justify-center font-semibold tracking-wider  animate-pulse">
  <a class="inline-block text-sm mr-4 hover: bg-gray-500 w-1/10  px-6 py-4  border-3 text-gray-50 rounded-2xl  hover:text-yellow-600 transition ease-in duration-150 " href="#">WHITEPAPER</a>
  <a class="inline-block mr-4 bg-gray-500 w-1/10 text-sm px-6 py-4 border-3 text-gray-50 rounded-2xl  hover:text-yellow-600 transition ease-in duration-150" href="#">CONTRACT ADDRESS</a>
  <a class="inline-block mr-4 bg-gray-500 w-1/10 text-sm px-6 py-4 border-3 text-gray-50 rounded-2xl hover:text-yellow-600 transition ease-in duration-150" href="#">BUY ON PANCAKESWAP</a>
    
  </div>
  </div>

  <div class="flex justify-between bg-blue-800 mt-20 px-40 pl-20 pr-80 py-20 w-screen h-40 bg-transparent items-center">
  <span class="justify-center text-yellow-300 text-6xl font-extrabold">About INU CARDANO </span>
  <img class="rounded-full shadow-2xl animate-spin justify-center " :src="spin" alt="Spinning world"/>
  </div>
  
  <div class="flex justify-center ">
  
  <div class="p-10 mx-10 my-10 w-1/2">
    <img class="rounded-3xl shadow-2xl  " :src="about" alt="About Inu Cardano"/>
  </div>
  
  <div class="font-bold text-2xl mx-10 my-10 text-justify w-1/2 p-10">
  
<p>INU CARDANO is a decentralized deflectionary
crypto currency that runs on the Binance Smart
Chain. An all-in one platform were investors
profit from a finite number of ways which include
staking, lending, burning leading to reduction in
number of tokens in circulating supply but
increase in demand, among others.
</p>
<br/>
<p>It is a community driven token, focused in
serving others for a greater good, it can also be used 
to buy goods online.
  </p>
<br/>
Our goal is to revoluntionize the market with a more
sincere, transparent, accessible and fair globally
financial system with a decentralize crypto wallet in
partnership with Paystack, ChipperCash and KudaBank, our
mechanism allows investors and lenders' to
generate more value to their investment.</div>
  
  </div>
</template>

<script>
export default {
    name: 'About',
    data(){
        return{
          about : require('../assets/about.jpg'),
          spin : require('../assets/yellow_world.png')
        }
    }
}
</script>

<style>

</style>