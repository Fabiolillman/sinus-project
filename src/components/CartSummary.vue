<template>
  <div class="cartItems">
  <main>
    <div class="cartsummary">
    <img class="product-image" v-if="product" :src="imagePath" alt="Product image">
    
    <section class="cartinfo">
      <h2 v-if="product">{{ product.category }}</h2>
      <hr />
      <p v-if="product">{{ product.title }}</p>
      <hr />
      <p v-if="product">{{ product.price }}.00 kr</p>
      <hr />
      
      <button @click="addToCart(product)">Add to cart</button>
      <ul>
        <li v-for="cartItem in cart" :key="cartItem.id">
          {{ cartItem.amount }}x {{ cartItem.title }}
          <button class="cartbutton" @click="increase(cartItem)">+</button>
          <button class="cartbutton" @click="decrease(cartItem)">-</button>
        </li>
      </ul>
      <p>{{cart}}</p>
    </section>
    
    </div>
  </main>
  </div>
</template>

<script>
export default {
    computed: {
        product() {
            return this.$store.state.currentProduct
        },
    
        imagePath() {
            return "http://localhost:5000/images/" +
                this.$store.state.currentProduct.imgFile
        },
        colors() {
            return this.$store.state.currentCategoryProducts
        },

        products(){
            return this.$store.state.productsList
        },

        cart(){
          return this.$store.getters.cart
        },

        filteredProducts(){
          return this.$store.getters.getgetProductsByCategory("cap")
        }
    },

    methods: {
        addTocart(product){
            this.$store.dispatch('addToCart', product)
        },

        increase(cartItem){
            this.$store.dispatch('updateCart', {id: cartItem.id, amount: cartItem.amount + 1})
        },

        decrease(cartItem){
            this.$store.dispatch('updateCart', {id: cartItem.id, amount: cartItem.amount - 1})
        }
    }
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&display=swap');
.cartsummary{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.product-image {
  padding: 10px;
  filter: drop-shadow(0px 0px 32px rgba(0, 0, 0, 0.1));
  background-color: #b5a183;
  margin: 40px;
  max-width: 15rem;
  max-height: 25rem;
}

.cartinfo{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2{
  text-transform: uppercase;
  font-size: 40px;
}
p{
  margin-top: 1rem;
  font-family: 'Raleway', sans-serif;
  color: #221d17;
  font-style: bold;
  font-size: 30px;
}

.cartbutton{
  margin: 10px;
  padding: 10px;
}

</style>