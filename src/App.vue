<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/ProductPage">ProdctPage</router-link>|
      <router-link to="/SingleProduct">SingleProduct</router-link>
      <router-link to="/Checkout">Checkout</router-link>
      <router-link to="/Cart">Cart</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
