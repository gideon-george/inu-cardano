<template>

 <h2 class="font-bold m-6  text-3xl"> CREATING AN IMPACT</h2>
 
  <div class="flex justify-center mx-20 p-10 text-center">

  <div class="font-semibold text-lg m-6">
  <h3 class="tracking-wider font-bold text-3xl bg-blue-800 shadow-2xl text-blue-200 rounded-3xl  py-4 mb-15" >Mission <span class="text-yellow-300"> 1</span></h3>
  <p class="mt-10">Every holder is given a simple way
to gain exposure in digital assets,<br>
Equal chance for everyone to
earn passive income
inrespective of race or region.</p></div>



  <div class="font-semibold text-lg m-6">
  <h3 class="tracking-wider font-bold text-3xl bg-blue-800 shadow-2xl text-blue-200 rounded-3xl  py-4 mb-15" >Mission <span class="text-yellow-300"> 2 </span></h3>
  <p class="mt-10">Operate a more transparent
community base and
community focus digital assets
that is fully decentralized.</p></div>


<div class="font-semibold text-lg m-6"><h3 class=" font-bold text-3xl bg-blue-800 shadow-2xl text-blue-200 rounded-3xl py-4 mb-15" >Mission <span class="text-yellow-300">3</span></h3>
  <p class="mt-10">Provide lending service to
African nations, <br>
Payment gateway and cashless
payments for shopping online
goods across the globe.</p></div>

  </div>




  <div class="flex rounded-bl-8xl p-10 text-lg bg-gray-900 w-screen  shadow-2xl justify-between">
          <div class="  font-bold text-gray-300 w-1/2 my-20 mx-20">
          <h2 class="font-extrabold text-3xl tracking-wider text-yellow-300 mb-10">Community</h2>
          <p>"To ensure consistency and sustainable management of our token for all"</p> <br>
          <p>Inu cardana is a community driven token, focused in serving others for a greater good. We discuss every
          decision with our community before doing anything (i.e Our current holders will be able to vote on polls in
          relation to new ideas and innovation)</p>
          </div>
          <img class="rounded-full ring-8 w-1/2 mx-10 shadow-2xl" :src="blue" alt="Community"></div>




   <div class="flex mx-20 my-20 text-lg shadow-2xl rounded-3xl  p-6 justify-between">
          <div class="font-bold mr-20 w-1/2 justify-center"> 
          <h2 class="font-extrabold text-3xl tracking-wider text-blue-700 mb-10">Passion</h2>
          <p>Passion will always run in INU CARDANO.</p> <br>
          <p>We believe in what we do and take satisfaction in
              providing an efficient and fully-fledged ecosytem
              surrounding the token. Inu cardano longevity will come
              from our drive and energy in encouraging group efforts
              related to marketing, community management,
              development and more.</p>
          </div>
          <img class="rounded-full mx-10 h-50 w-1/2 shadow-2xl" :src="arrow" alt="Passion"></div>



  <div class="flex rounded-bl rounded-tl-full p-20 text-lg bg-blue-800 shadow-inner w-screen justify-between">
          <div class="font-bold text-blue-100 w-1/2 mr-10 justify-center">
          <h2 class="font-extrabold text-3xl tracking-wider text-yellow-300 mt-20 mb-10">Transparency</h2>
          <p>"To ensure consistency and sustainable management of our token for all"</p> <br>
          <p>Inu cardana is a community driven token, focused in serving others for a greater good. We discuss every
          decision with our community before doing anything (i.e Our current holders will be able to vote on polls in
          relation to new ideas and innovation)</p>
          </div>
          <img class="rounded-full border-4 mx-10 shadow-2xl" :src="trans" alt="Transparency"></div>


</template>

<script>
export default {
name: "Mission",
data(){
  return{
    blue: require('../assets/blue.jpg'),
    arrow: require('../assets/arrow.jpg'),
    trans: require('../assets/trans.jpg')
  }
}
}
</script>


<style>

</style>