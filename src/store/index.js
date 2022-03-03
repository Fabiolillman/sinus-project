import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '../api'

Vue.use(Vuex)

const cart = localStorage.getItem("sinus-cart") ? JSON.parse(localStorage.getItem("sinus-cart")) : []

export default new Vuex.Store({
  state: {
    currentProduct: null,
    currentToken:"", 
    currentCategoryProducts: [],    // for Checkout.vue
    cart: cart,
    // cart: [],
    allProducts: [],
    productsList: [],
    products: {}
  },
 
    
  mutations: {
    
    saveProducts(state, products){
      for(let product of products){
        state.productsList.push(product)
        Vue.set(state.products, product.id, product)
      }
    },

    addToCart(state, product){
      const savedToCart = state.cart.find((itemInCart) => itemInCart.id === product.id)
      if(savedToCart){
        savedToCart.amount++
      }else{
        state.cart.push(product)
      }
  },

    saveItemFromId(state, item) {
      state.currentProduct = item
    },

    saveItemsFromCategory(state, items) {
      state.currentCategoryProducts = []
      state.currentCategoryProducts.push(...items)
    },

    saveProductInCart(state, product){
      const inCart = state.cart.find(cartItem => cartItem.id == product.id)
      if(inCart){
        inCart.amount++
      }else{
        state.cart.push({id: product.id, amount: 1})
      }
      alert("Product added to cart!")
      localStorage.setItem("sinus-cart", JSON.stringify(state.cart))
    },

    updateCartItem(state, {id, amount}){
      const inCart = state.cart.find(cartItem => cartItem.id == id)
      inCart.amount = amount
    }
  },

  actions: {
    async login(context, credentials){
      const response = await API.login(credentials.email, credentials.password)
      API.savetoken(response.data.token)
      this.state.currentToken = response.data.token
      console.log(response.data.token)
      // const checkLogin = response.data.token
      // return checkLogin
    },

    // async checksLogin(){
      // API.savetoken(token)
    // },



    async register(context, credentials){
      const response = await API.register(
        credentials.email, 
        credentials.password,
        credentials.name,
        credentials.city,
        credentials.street,
        credentials.zip
        )
      console.log(response)
    },

    async fetchItemFromId(context, itemId) {
      const response = await API.getItemFromId(itemId)
      context.commit('saveItemFromId', response.data.post)
    },

    async fetchItemsFromCategory(context, category) {
      const response = await API.getItemsFromCategory(category)
      context.commit('saveItemsFromCategory', response.data)
    },

    async fetchProducts(context, page) {
      const response = await API.getProducts(page)
      console.log(JSON.stringify(response.data));
      this.state.allProducts = response.data
      this.state.currentPage = page
    },

    addToCart({ commit }, product){
      commit("saveProductInCart", product)
    },

    updateCart({commit}, {id, amount}){
      commit("updateCartItem", {id, amount})
    }
  },

  getters: {
    cart(state){
      return state.cart.map(cartItem => ({
        id: cartItem.id,
        title: state.products[cartItem.id].title,
        imgFile: state.products[cartItem.id].imgFile,
        amount: cartItem.amount
      }))
    },

    getProductsByCategory: state => category => state.productsList.filter(product => product.category == category)
  },
  modules: {
  }
  })

 