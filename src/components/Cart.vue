<template>
<div>
 
  <div class="main-body" @click="$emit('click')">   
      <h3>CART</h3>
      <p>{{ product.title }}</p>
      <!-- <p>Size: {{ product.size }}</p> -->
      <p>Amount: {{ product.amount }}</p>
      <p>Price: {{ product.price }}</p>
      <p>Sub-total <span>{{product.price * product.amount}}</span> kr</p>
     <button>CHECK OUT</button>
  </div>
  </div>
</template>

<script>
export default {
methods:{
   
}
}
</script>

<style scoped>
.main-body{
    margin: 30px;
    width: 31rem;
    background: #352D1F;
    color: white;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
}
button{
    align-self: center;
    border-radius: 10px;
    width: 16rem;
    height: 3.7rem;
    justify-self: end;
    background: #478516;
    color: white;
    font-size: 1.87rem;
}
</style>