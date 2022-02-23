<template>
<div>
 
  <div class="main-body" @click="$emit('click')">   
      <!-- <h2>testing</h2> -->
     <button>Checkout</button>
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