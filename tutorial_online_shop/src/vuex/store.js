import { createStore } from 'vuex'
import axios from "axios";

// Create a new store instance.
const store = createStore({
    state () {
        return {
            products:[],
            cart:[]
        }
    },
    actions:{
        GET_PRODUCTS_FROM_API({commit}) {
            return axios( 'http://localhost:3000/products', {
                method:"GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products;
                })
                .catch((error) => {
                    console.log (error)
                    return error;
                })
        }
    },
    getters:{
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }

    },
    mutations: {
        SET_PRODUCTS_TO_STATE:(state, products) => {
            state.products = products;
        }
    }
})

export default store;