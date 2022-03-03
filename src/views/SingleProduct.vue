<template>
  <div class="single-product-page-main">
    <div class="sales">MEGA SALE 30% OFF</div>
    <header>
      <PageHeader />
      <div>
        <p class="nav" @click="previousProduct">
          <router-link to="/ProductPage"
            >&lt;&lt;&lt; PREVIOUS PAGE</router-link
          >
        </p>
      </div>
      <div class="link-pathing">
        <router-link to="/">Sinus</router-link> /
        <router-link to="/">Women</router-link> /
        <router-link to="/">Clothing</router-link> /
        <router-link to="/hoodies">Products</router-link>
      </div>
      <div class="line-break"></div>
    </header>
    <main class="single-product-main">
      <div class="product-image">
        <img v-if="product" :src="imagePath" alt="Product image" />
      </div>
      <div class="aside-wrap">
        <aside class="filter-columns">
          <div class="product-main" v-if="product">
            <h2>{{ product.category }}</h2>
            <img class="image-style" @click="addToCart(product)" src="@/assets/ICON-Cart.png" alt="Cart"/>
          </div>
          <div class="short-desc" v-if="product"> {{ product.shortDesc }}
          </div>
          <div class="price-layout" v-if="product"> {{ product.price }}.00 kr
          </div>
          <div class="star-layout">
            <div v-for="star in 5" :key="star">
              <img class="star-style" src="@/assets/full-star.png" alt="Star" />
            </div>
          </div>
          <div class="filter-box filter-box-color">
            <h2>Description</h2>
            <div class="long-desc" v-if="product">
              {{ product.longDesc }}
            </div>
          </div>
          <div v-if="product" class="filter-box filter-box-color">
            <h2>Color</h2>
            <a @click="changeCategoryColor(color.id)" v-for="color in colors" :key="color.id">
              {{ color.title }}</a>
            <!-- <router-link
              v-for="color in colorsx"
              :key="color.id" :to="'/SingleProduct/'+color.id">
              {{ color.title }}
            </router-link> -->
          </div>
          <div class="filter-box filter-box-size">
            <h2>Size</h2>
            <div class="button-wrap">
              <a href="">XS</a>
              <a href="">S</a>
              <a href="">M</a>
              <a href="">L</a>
              <a href="">XL</a>
              <a href="">XXL</a>
            </div>
          </div>
        </aside>
      </div>
    </main>
    <Footer />
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
  data() {
    return {};
  },
  props: ["category"],
  computed: {
    product() {
      return this.$store.state.currentProduct;
    },
    imagePath() {
      return (
        "http://localhost:5000/images/" +
        this.$store.state.currentProduct.imgFile
      );
    },
    colors() {
      return this.$store.state.currentCategoryProducts;
    },
  },
  methods: {
    changeCategoryColor(itemId) {
      let item = this.$store.state.currentCategoryProducts.find(
        (item) => item.id == itemId
      );
      this.$store.state.currentProduct = item;
    },
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
    previousProduct() {
      this.$store.dispatch("fetchProducts", this.$store.state.currentPage + -1);
    },
  },

  mounted: function () {
    this.$store.dispatch("fetchItemFromId", this.$route.params.productId);
    this.$store.dispatch("fetchItemsFromCategory", this.$route.params.category);
  },
};
</script>

<style scoped>
* {
  text-decoration: none;
  padding: 0;
  margin: 0;
}

.single-product-page-main {
  width: 100%;
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
  padding: 10px;
  filter: drop-shadow(0px 0px 32px rgba(0, 0, 0, 0.1));
  background-color: #b5a183;
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
  padding-top: 3rem;
  /* margin: auto; */
  width: 90%;
  display: flex;
  flex-direction: row;
}

.filter-columns {
  width: 60%;
  max-width: 15rem;
  font-family: "Raleway", sans-serif;
}

.product-list {
  height: 400px;
  width: 40%;
}

.top-main {
  margin: auto;
}

.filter-box:hover {
  cursor: pointer;
}

.filter-box h2 {
  padding-bottom: 0.8rem;
  font-family: "Raleway", sans-serif;
}

.filter-box-color {
  font-family: "Raleway", sans-serif;
  text-align: start;
  display: flex;
  flex-direction: column;
}

.long-desc {
  display: flex;
  font-size: 1.1rem;
  margin: 0 0 20px 0;
}

.filter-box-color a {
  font-size: 1.3rem;
  padding: 0rem 1rem 0rem 1rem;
  text-align: start;
}

a:visited {
  color: black;
}

.filter-box-size {
  text-align: start;
  margin-top: 1.5rem;
}

.star-style {
  height: 0.8rem;
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

.short-desc {
  display: flex;
  font-family: "Raleway", sans-serif;
  font-size: 1.2rem;
}

.filter-box-size a {
  border-radius: 10px;
  background: #b5a183;
  padding: 1rem 0;
  box-sizing: border-box;
}

.link-pathing {
  font-family: "Raleway", sans-serif;
  display: flex;
  justify-content: center;
  gap: 2.2rem;
}

.product-main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 25rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-family: "Raleway", sans-serif;
}

.star-layout {
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  margin: 0 0 30px 0;
}

.price-layout {
  display: flex;
  margin: 10px 0 10px 0;
  font-size: 1.6rem;
  font-family: "Raleway", sans-serif;
  font-style: italic;
}

.image-style {
  height: 32px;
  cursor: copy;
  display: flex;
}

.nav {
  width: 15%;
  background-color: lightgray;
  color: white;
  margin: 20px 40px;
  padding: 0.6rem;
  border-radius: 80px 30px 30px 80px;
  font-size: 1.1rem;
  font-weight: bold;
}
</style>
