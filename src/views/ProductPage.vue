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
                          <img class="icon-image-size" src="../assets/ICON-Heart.png" alt="FullHeart" />
                        </div>
                        <div class="product-image-layout">
                          <img class="product-image" :src="getProductImage(product.imgFile)" alt="Image"/>
                        </div>
                      </div>
                      <h3>{{ product.category }}</h3>
                      <div class="price-layout">{{ product.price }}.00 kr</div>
                    </router-link>
                  </div>
                </a>
                <div v-if="products.length % 2 != 0"></div>
                <div class="previous-layout">
                  <p @click="previousProducts" class="nav">&lt;&lt;&lt; PREVIOUS</p>
                </div>
                <div class="next-layout">
                  <p v-if="products.length == 10" @click="nextProducts" class="nav">NEXT >>></p>
                </div>
              </div>
            </div>
          </aside>
          <div></div>
        </div>
      </main>
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
    PageHeader,
  },
  computed: {
    products() {
      return this.$store.state.allProducts;
    },
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
    },
    getProductImage(imgFile) {
      return "http://localhost:5000/images/" + imgFile;
    },
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
  font-family: "Raleway", sans-serif;
}

.product-page-main {
  width: 100%;
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
  margin: 2rem 25rem 2rem 30rem;
  font-family: "Raleway", sans-serif;
  font-style: italic;
  font-weight: normal;
}

.price-layout {
  font-family: "Raleway", sans-serif;
  font-style: italic;
  font-size: 1.2rem;
}

.top-main {
  margin: auto;
  width: 90%;
  display: flex;
  flex-direction: row;
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
  font-family: "Raleway", sans-serif;
}

.top-text-wrap p {
  font-size: 1.5rem;
  font-family: "Raleway", sans-serif;
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
}
.product-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.product-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
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
  cursor: copy;
}

.filter-box-color a {
  font-size: 1.3rem;
  padding: 0.1rem 1rem 0.1rem 1rem;
  text-align: start;
  font-family: "Raleway", sans-serif;
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
  font-family: "Raleway", sans-serif;
}

.filter-box-size a {
  background: #b5a183;
  padding: 1rem 0;
  box-sizing: border-box;
  border-radius: 10px;
}

.link-pathing {
  font-family: "Raleway", sans-serif;
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

.image-background {
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

.next-layout {
  display: flex;
}

.previous-layout {
  display: flex;
  justify-content: flex-end;
}

.next-products {
  padding: 2rem;
  margin: 2rem;
  font-size: 36px;
  display: flex;
  justify-content: right;
  font-weight: bold;
}

.nav {
  width: 45%;
  background-color: lightgray;
  color: black;
  margin: 10px 0;
  padding: 0.4rem;
  border-radius: 30px;
  font-size: 1.1rem;
  font-style: italic;
  font-weight: bold;
}

nav:hover {
  cursor: pointer;
}
</style>
