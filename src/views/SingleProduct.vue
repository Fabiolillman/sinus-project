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

    <div class="single-product-page-main">
      <div class="sales">MEGA SALE 30% OFF</div>
      <header>
        <a href="">Go back</a>
        <div class="link-pathing">
          <router-link to="/">Sinus</router-link> |
          <router-link to="/">Women</router-link>|
          <router-link to="/">Clothing</router-link> |
          <router-link to="/hoodies">Hoodies</router-link>
        </div>
        <div class="line-break"></div>
      </header>
      <main class="single-product-main">
        <div class="product-image">
          <img v-if="imagePath" :src="imagePath" alt="Product image">
        </div>
        <div class="aside-wrap">
          <aside class="filter-columns">
            <div class="product-main">
              <h2 v-if="product">{{product.category}}</h2>
              <img src="@/assets/ICON-Cart.png" alt="cart">
            </div>
            <div class="star-layout">
            <div v-for="star in 5" :key="star">*</div>
            </div>
            <div class="filter-box filter-box-color">
              <h2>Color</h2>
              <a v-for="color in colors" :key="color" href="">{{color}}</a>
            </div>
            <div class="filter-box filter-box-size">
              <h2>Size</h2>
              <div class="button-wrap">
                <a href="">XL</a>
                <a href="">S</a>
                <a href="">M</a>
                <a href="">L</a>
                <a href="">XL</a>
                <a href="">XXL</a>
              </div>
            </div>
          </aside>
          <aside class="product-list"></aside>
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>

import Footer from '@/components/Footer'

export default {
  components: {
    Footer
  },
  data() { return {
    colors: ["Grey","Blue","Purple","Red","Green"]
  }},
  computed: {
    product() {
      return this.$store.state.currentProduct
    },
    imagePath() {
      if (this.$store.state.currentProduct == null)
        return null

      return require('@/assets/'+this.$store.state.currentProduct.imgFile)
    }
  },
  mounted: 
    function () {
      console.log("mounted")
      this.$store.dispatch('fetchItemFromId', 87)
      this.$store.dispatch('fetchItemsFromCategory', 'hoodie')
    }
};
</script>

<style scoped>
* {
  text-decoration: none;
  padding: 0;
  margin: 0;
}

.single-product-page-main {
  max-width: 90rem;
  background: #eadfd5;
  margin: auto;
  text-align: center;
}

.single-product-main {
  display: grid;
  grid-template-columns: 1fr 1fr; 
  align-items: top;
  justify-content: center;
  align-content: center;
}

.product-image {
  height: 90%;
    width: 60%;
    filter: drop-shadow(0px 0px 32px rgba(0, 0, 0, 0.1));
    background-color: #B5A183;
    margin: 40px;  
}

.sales {
  width: 100%;
  height: 2rem;
  background: #c22323;
  color: WHITE;
  display: flex;
  justify-content: center;
  align-items: center;
}

.line-break {
  width: 90%;
  height: 0.18rem;
  background: #000000;
  margin: auto;
}

header p {
  margin: 2rem;
  font-family: Raleway;
  font-style: italic;
  font-weight: normal;
}

.top-main {
  margin: auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  /* background: yellow; */
  justify-content: space-between;
}

select {
  width: 17rem;
  height: 3rem;
  background: #352d1f;
  color: white;
}

.top-main select {
  margin-top: 1rem;
}

.top-text-wrap h2 {
  font-size: 2.2rem;
}

.top-text-wrap p {
  font-size: 1.5rem;
}

.aside-wrap {
  padding-top: 2rem;
  margin: auto;
  width: 90%;
  display: flex;
  flex-direction: row;
}

.filter-columns {
  width: 40%;
  max-width: 15rem;
}

.product-list {
  height: 400px;
  width: 60%;
}

.top-main {
  margin: auto;
}

.filter-box {
  height: 13rem;
  border-bottom: 2px solid black;
}

.filter-box h2 {
  padding-bottom: 0.8rem;
}

.filter-box-color {
  text-align: start;
  display: flex;
  flex-direction: column;
}

.filter-box-color a {
  font-size: 1.3rem;
  padding: 0.1rem 1rem 0.1rem 1rem;
  text-align: start;
}

a:visited {
  color: black;
}

.filter-box-size {
  text-align: start;
  margin-top: 1.5rem;
}

.button-wrap {
  text-align: center;
  padding: 0.1rem 1rem 0.1rem 1rem;
  max-width: 40%;
  display: grid;
  grid-template-columns: 3rem 3rem 3rem;
  grid-template-rows: 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;
}

.filter-box-size a {
  border-radius: 10px;
  background: #b5a183;
  padding: 1rem;
  box-sizing: border-box;
}

.product-main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 400px;
}

.star-layout {
  display: flex;
  flex-direction: row;
  gap:5px;
  margin: 0 0 50px 0;
}


</style>