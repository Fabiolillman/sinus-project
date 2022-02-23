import Vue from 'vue'
import Vuex from 'vuex'
// import {getProductList} from '@/api'
// import {getLogin} from '@/api'
import * as API from '@/api'

import * as API from  '@/api/index.js'

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
      console.log(response)
    },
    
    async register(context,credentials){
      const response = await API.register(
        credentials.email, 
        credentials.password,
        credentials.name,
        credentials.address,
        credentials.city,
        credentials.street,
        credentials.zip
        )
      console.log(response)
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
  

    async fetchItemFromId(context, itemId) {
      const response = await API.getItemFromId(itemId)
      this.state.currentProduct = response.data.post
    },
    async fetchItemsFromCategory(context, category) {
      const response = await API.getItemsFromCategory(category)
      console.log(response);
    }

  },
  modules: {
  }
})
