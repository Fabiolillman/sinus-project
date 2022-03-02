<template>
  <div class="cartItems">
  <main>
    <div class="cartsummary">     
    <img class="product-image" v-if="product" :src="imagePath" alt="Product image">
    
    <section class="cartinfo">
    <h2 v-if="product">{{product.category}}</h2>
    <p v-if="product">{{product.title}}</p>
    <p v-if="product">{{product.price}}.00 kr</p>

    </section>
    
    </div>
  </main>
  </div>
</template>

<script>
export default {
    props: ['product, category'],
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
    },
    methods: {
        addTocart(product){
            this.$store.dispatch('addToCart', product)
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
</style>