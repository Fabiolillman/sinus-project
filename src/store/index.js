import Vue from 'vue'
import Vuex from 'vuex'
// import {getProductList} from '@/api'
// import {getLogin} from '@/api'
import * as API from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
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
  

  },
  modules: {
  }
})
