<template>
  <div id="app">
    <!-- <PageHeader/> -->
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link> | 
      <router-link to="/ProductPage">ProductPage</router-link> | 
      <router-link to="/SingleProduct">SingleProduct</router-link> | 
      <router-link to="/Cart">Cart</router-link> | 
      <router-link to="/Checkout">Checkout</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script>

// import PageHeader from "./components/PageHeader.vue"
export default {
 compontents: {
  //  PageHeader,

 },
 data(){return{

 }},
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
a{
  color: black;
}
</style>
