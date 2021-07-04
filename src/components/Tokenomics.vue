<template>
<h2 class="text-3xl text-center font-bold m-10">TOKENOMICS</h2>
  <div class="flex m-20 shadow-2xl rounded-3xl justify-between">
  <div class="w-8/12">
     <img class="mr-10 h-auto rounded-l-3xl" :src="tokenize" alt="Tokenomics">  
  </div>
  
  
  <div class="mx-10 w-4/12 bg-yellow-100 text-blue-800 shadow-2xl">


<table class="text-justify font-bold text-xl table-fixed">
  <thead>
    <tr>
      <th class="w-1/2 ..."></th>
      <th class="w-1/4 ..."></th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-blue-200 mt-0">
      <td class="  py-3 px-6">Name </td>
      <td class="  py-3 px-6">INU&nbsp;CARDANO</td>
      
    </tr>
    <tr >
      <td class="  py-3 px-6">Symbol</td>
      <td class="  py-3 px-6">IC</td>
     
    </tr>
    <tr class="bg-blue-200">
      <td class="  py-3 px-6">Platform</td>
      <td >Binance&nbsp;Smart&nbsp;Chain&nbsp;<br> (BSC)</td>
    
    </tr>

     <tr class="my-20 mx-10">
      <td class="  py-3 px-6">Total&nbsp;Supply</td>
      <td class="  py-3 px-6">10&nbsp;Million&nbsp;IC</td>
    
    </tr>

     <tr class="bg-blue-200">
      <td class="  py-3 px-6">Exchange</td>
      <td class="  py-3 px-6">Pancakeswap</td>
    
    </tr>

    <tr class="my-20 mx-10">
      <td class="  py-3 px-6">Protocol</td>
      <td class="  py-3 px-6">Bep-20</td>
    
    </tr>

  </tbody>
</table>

</div>
  </div>
  
</template>

<script>
export default {
    name: 'Tokenomics',
    data(){
        return{
                tokenize: require('../assets/tokenimage.jpg'),
        }
    }

}
</script>

<style>

</style>