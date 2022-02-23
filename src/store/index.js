import Vue from 'vue'
import Vuex from 'vuex'

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
