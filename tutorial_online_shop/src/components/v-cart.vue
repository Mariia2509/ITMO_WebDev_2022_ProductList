<template>
<div class="v-cart">
  <router-link :to="{name: 'catalog'}">
    <div class="v-cart_link_to_catalogue">Back to Catalog</div>
  </router-link>
  <h1>Cart</h1>
  <p v-if="!CART.length">There is no products in your cart....</p>
  <v-cart-item
    v-for="(item, index) in CART"
    :key="item.article"
    :cart_item_data="item"
    @deleteFromCart="deleteFromCart"
    @increase="increase(index)"
    @decrease="decrease(index)"
  />
<div class="v-cart_total">
  <p class="total_name">Total: </p>
  <p>{{cartTotalCost}}$</p>
</div>

</div>
</template>

<script>

import vCartItem from './v-cart-item'
import { mapActions, mapGetters } from 'vuex'


export default {
  name: "v-cart",
  components: {
    vCartItem
  },
/*
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
*/
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['CART']),
    cartTotalCost() {
      let result = 0
      for (let item of this.CART) {
        result += item.price * item.quantity
      }
      return result
    }
  },
  methods: {
    ...mapActions([
        'DELETE_FROM_CART',
        'INCREASE_CART_ITEM',
        'DECREASE_CART_ITEM'
    ]),
    deleteFromCart(index){
      this.DELETE_FROM_CART(index)
    },
    increase (index){
      this.INCREASE_CART_ITEM(index)
    },

    decrease (index){
      this.DECREASE_CART_ITEM(index)
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
