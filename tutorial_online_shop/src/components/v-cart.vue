<template>
<div class="v-cart">
  <router-link :to="{name: 'catalog'}">
    <div class="v-cart_link_to_catalogue">Back to Catalog</div>
  </router-link>
  <h1>Cart</h1>
  <p v-if="!cart_data.length">There is no products in your cart....</p>
  <v-cart-item
    v-for="item in cart_data"
    :key="item.article"
    :cart_item_data="item"
    :deleteFromCart="deleteFromCart"
  />
<div class="v-cart_total">
  <p class="total_name">Total: </p>
  <p>{{cartTotalCost}}P</p>
</div>

</div>
</template>

<script>

import vCartItem from './v-cart-item'
// import {mapActions} from "vuex";


export default {
  name: "v-cart",
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  // computed: {
  //   cartTotalCost(){
  //     let result = []
  //
  //     for (let item of this.cart_data) {
  //       result.push (item.price * item.quantity);
  //     }
  //       result = result.reduce(function (sum, el) {
  //       return result = sum + el
  //     })
  //
  //     return result;
  //   }
  // },
  methods: {
  //   ...mapActions([
  //       'DELETE_FROM_CART'
// ]),
    deleteFromCart(index){
      console.log(index)
    }
  }
}
</script>

<style scoped>
.v-cart{
  margin-bottom: 100px;
}
.v-cart_link_to_catalogue{
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 16px;
  border: solid gray;
}
.v-cart_total {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 16px;
  display: flex;
  justify-content: center;
  background-color: #78dc78;
}
  .total_name {
    margin-right: 16px;
    color: gray;
  }
</style>