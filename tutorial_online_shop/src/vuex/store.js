import { createStore } from 'vuex'
import axios from 'axios'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      products: [],
      cart: []
    }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    SET_CART: (state, product) => {
      const foundItem = state.cart.find(item => item.article === product.article)
      if (foundItem) {
        foundItem.quantity++
      } else {
        state.cart.push({
          ...product,
          quantity: 1
        })
      }
    },
    INCREASE_CART_ITEM: (state, index) => {
      state.cart[index].quantity++
    },

    DECREASE_CART_ITEM: (state, index) => {
      if (state.cart[index].quantity >1){
        state.cart[index].quantity--
      }

    },


    DELETE_FROM_CART:(state, index) => {
      state.cart = state.cart.filter(item => item.article !== index)
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET'
      })
          .then((products) => {
            commit('SET_PRODUCTS_TO_STATE', products.data)
            return products
          })
          .catch((error) => {
            console.log(error)
            return error
          })

    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product)
    },
    DELETE_FROM_CART({commit}, index) {
      commit('DELETE_FROM_CART', index)
    },
    INCREASE_CART_ITEM({commit}, index){
      commit('INCREASE_CART_ITEM', index)
    },

    DECREASE_CART_ITEM({commit}, index){
      commit('DECREASE_CART_ITEM', index)
    }
  },

  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    }

  }

})

export default store
