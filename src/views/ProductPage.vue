<template>
<div>
     
  <div class="product-page-main"> 
     <div class="sales">MEGA SALE 30% OFF</div>
      <header>
        <PageHeader />
        <div class="link-pathing">
          <router-link to="/">Sinus</router-link> /
          <router-link to="/about">Women</router-link> /
          <router-link to="/">Clothing</router-link> /
          <router-link to="/about">Products</router-link>
        </div>
        <div class="line-break"></div>
        <p>
          Risus ultricies tristique nulla aliquet enim tortor at auctor. Aliquam
          nulla facilisi cras fermentum odio eu. Sed enim ut sem viverra aliquet
          eget sit amet tellus. Urna duis convallis convallis tellus id!
        </p>
      </header>
      <main>
          <div class="top-main">
              <div class="top-text-wrap">
              <h2>Sinus products</h2>
            <p>Showing: 10 Items</p>
              </div>
              <select name="" id="">
                  <option value="">Price Acending</option>
                  <option value="">Price Decending</option>
                  <option value="">Size</option>
              </select>
          </div>
          <div class="aside-wrap">
          <aside class="filter-columns">
              <div class="filter-box filter-box-color">
              <h2>Color</h2>
              <a href="">Gray</a>
              <a href="">Red</a>
              <a href="">Green</a>
              <a href="">Blue</a>
              <a href="">Purple</a>
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
          <aside v-if="products">
            <div class="products">
              <div class="product-list">
                
                <a v-for="product in products" :key="product.id" href="">
                    <div class="xproduct-card">
                  
                  
                  <router-link :to="'/SingleProduct/' + product.category + '/' + product.id">
                    <div class="image-background">
                      <div class="image-layout">
                      
                        <img class="icon-image-size" src="../assets/ICON-Heart.png" alt="FullHeart">
                      </div>
                      <div class="product-image-layout">
                        <img class="product-image" :src="getProductImage(product.imgFile)" alt="Image">
                      </div>
                    </div>
                    <h3>{{ product.category }}</h3>
                    <div class="price-layout">{{ product.price }}.00 kr</div>
                  </router-link>
                  </div>
                </a>
                <div v-if="products.length % 2 != 0"></div>
                <p @click="previousProducts" class="nav">PREVIOUS</p>
                <p v-if="products.length == 10" @click="nextProducts" class="nav">NEXT</p>
              </div>
            </div>
          </aside>
          <div></div>
        </div>
      </main>
      <!-- <a href="" class="back-to-top">Back to top</a> -->
      <Footer />
    </div> 
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import PageHeader from "../components/PageHeader.vue";
export default {
  components: {
    Footer,
    PageHeader
  },
  computed: {
    products() {
      return this.$store.state.allProducts;
    }
  },
  mounted: function () {
    this.$store.dispatch("fetchProducts", 1);
  },
  methods: {
    nextProducts() {
      this.$store.dispatch("fetchProducts", this.$store.state.currentPage + 1);
    },
    previousProducts() {
      this.$store.dispatch("fetchProducts", this.$store.state.currentPage - 1);
    },
    getImage(productId) {
      return this.$store.getters.productImage(productId);
      // console.log(productId);
      // return 'http://localhost:5000/images/sinus-hoodie-ocean.png'
    },
    getProductImage(imgFile) {

      return "http://localhost:5000/images/"+imgFile
    }
  },
};

</script>

<style scoped>
* {
  text-decoration: none;
  padding: 0;
  margin: 0;
}
h3 {
  text-transform: uppercase;
  font-size: 24px;
}
.product-page-main {
  max-width: 90rem;
  /* width: 100%; */
  background: #eadfd5;
  margin: auto;
  text-align: center;
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
  margin: 2rem 20rem 2rem 20rem;
  font-family: 'Raleway', sans-serif;
  font-style: italic;
  font-weight: normal;
}

.price-layout {
  font-family: 'Raleway', sans-serif;
  font-style: italic;
  font-size: 1.2rem;
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
  font-family: 'Raleway', sans-serif;
}

.top-text-wrap p {
  font-size: 1.5rem;
  font-family: 'Raleway', sans-serif;
  font-style: italic;
}

.aside-wrap {
  padding-top: 2rem;
  margin: auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
}

.filter-columns {
  width: 40%;
  max-width: 15rem;
  /* background: #C22323; */
}
.product-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* background: yellow; */
  /* width: 600px; */
  gap: 40px;
  
}

.product-card {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* border: red solid 2px; */
width: 50%;
/* min-height: 400px; */
/* gap: 10px; */
}

.top-main {
  margin: auto;
}
.filter-box {
height: 13rem;
border-bottom: 2px solid black;
}

.filter-box h2{
    padding-bottom: 0.8rem;
}

.filter-box-color {
  text-align: start;
  display: flex;
  flex-direction: column;
  cursor: copy;
}

.filter-box-color a{
    font-size: 1.3rem;
    padding: 0.1rem 1rem 0.1rem 1rem;
    text-align: start;
}

a:visited{
    color: black;
}

.filter-box-size {
    text-align: start;
    margin-top: 1.5rem;
    /* background: #352D1F; */
  
}

.button-wrap{
    
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
  background: #b5a183;
  padding: 1rem 0;
  box-sizing: border-box;
  border-radius: 10px;
  /* font-siz */
  /* width: 30px; */
  /* height: 30px; */
}

.link-pathing {
  font-family: 'Raleway', sans-serif;
  display: flex;
  justify-content: center;
  gap: 2.2rem;
}

.product-image {
  height: 300px;
}

.product-image-layout {
 display: flex;
  justify-content: center;
}

.image-background{
  display: grid;
  grid-template-columns: 1fr;
  background-color: #b5a183;
  width: 400px;
}
.image-layout {
  display: flex;
  justify-content: right;
  padding: 0.4rem 0.8rem 0rem 0rem;
}

.icon-image-size {
  width: 32px;
}

.next-products {
  padding: 2rem;
  margin: 2rem;
  font-size: 36px;
  display: flex;
  justify-content: right;
  gap: 1rem;
}
.nav {
  width: 100%;
  background-color: cornflowerblue;
  color: white;
  margin: 20px 0;
  border-radius: 10px;
  font-size: 1.4rem;
}
</style>
