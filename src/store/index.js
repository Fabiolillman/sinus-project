import Vue from 'vue'
import Vuex from 'vuex'

import * as API from '../api'




Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentProduct: null,
    currentCategoryProducts: []
  },
  mutations: {
    
  },

  actions: {
    async login(context,credentials){
      const response = await API.login(credentials.email, credentials.password)
      API.savetoken(response.data.token)
      console.log(response.data.token)
      // const checkLogin = response.data.token
      // return checkLogin
    },

    // async checksLogin(){
      // API.savetoken(token)
    // },



    async register(context,credentials){
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
      this.state.currentProduct = response.data.post
    },
    async fetchItemsFromCategory(context, category) {
      const response = await API.getItemsFromCategory(category)
      console.log(response);
    },
    async fetchProducts(context, page) {
      const response = await API.getProducts(page)
      console.log(JSON.stringify(response.data));
      this.state.allProducts = response.data
      this.state.currentPage = page
    }
      // async getProduct(){
    //   const response = await getProductList()
    //   // context.commit('saveStuff', response)
    //   console.log(response.products)
  
    // },
    // async login(context,credentials){
    //   const response = await getLogin(credentials.email, credentials.password)
    //   // context.commit('saveStuff', response)
    //   console.log(response)
  
    // },

    // async register(context,credentials){
    //   const response = await getLogin(credentials.email, credentials.password)
    //   // context.commit('saveStuff', response)
    //   console.log(response)
  },
  modules: {
  }
})
