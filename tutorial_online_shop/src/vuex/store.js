import { createStore } from 'vuex'
// import axios from 'axios'

const fakeProducts = [
  {
    "image": "1.jpg",
    "name": "T-shirt 1",
    "price": 100,
    "article": "T1",
    "available": true
  },
  {
    "image": "2.jpg",
    "name": "T-shirt 2",
    "price": 150,
    "article": "T2",
    "available": true
  },
  {
    "image": "3.jpg",
    "name":"T-shirt 3",
    "price": 200,
    "article": "T3",
    "available": false
  },
  {
    "image": "4.jpg",
    "name": "T-shirt 4",
    "price": 250,
    "article": "T4",
    "available": true
  },
  {
    "image": "5.jpg",
    "name": "T-shirt 5",
    "price": 300,
    "article": "T5",
    "available": false
  },
  {
    "image": "6.jpg",
    "name": "T-shirt 6",
    "price": 350,
    "article": "T6",
    "available": true
  }
]

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
/*
      if (state.cart.length) {
        let isProductExists = false
        state.cart.map(function (item) {
          if (item.article === product.article)
            isProductExists = true
          item.quantity++

        })
        if (!isProductExists) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }
*/
    },
    REMOVE_FROM_CART:(state, index) => {
      state.cart = state.cart.filter(item => item.article !== index)
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      commit('SET_PRODUCTS_TO_STATE', fakeProducts)
/*
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
*/
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product)
    },
    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index)
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
