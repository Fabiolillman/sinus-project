<template>
  <div>
      <h1>Single Product Page</h1>
      <button @click="cartShow = !cartShow">X</button>

      <Cart
      v-if="cartShow"
      />
      <Login />
       <!-- <Register /> -->
      </div>
</template>

<script>
import Cart from '../components/Cart.vue'
import Login from '../components/LoginModal.vue'
// import Register from '../components/RegisterModal.vue'
export default {
   components: {
    Cart,
    Login,
    // Register,
  },
  data(){return{
   cartShow:false
  }},

methods:{

}
}
</script>

<style scoped>
button{
    align-self: center;
    border-radius: 10px;
    width: 15rem;
    height: 3.7rem;
    justify-self: end;
    background: #478516;
    color: white;
    font-size: 1.87rem;
}
</style>