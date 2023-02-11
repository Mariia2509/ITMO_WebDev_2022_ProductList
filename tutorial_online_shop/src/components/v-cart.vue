<template>
<div class="v-cart">
  <h1>Cart</h1>
  <v-cart-item
    v-for="(item, index) in cart_data"
    :key="item.article"
    :cart_item_data="item"
    :deleteFromCart="deleteFromCart.index"
  />


</div>
</template>

<script>

import vCartItem from './v-cart-item'

export default {
  name: "v-cart",
  components:{
    vCartItem
  },
  props: {
    cart_data:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data() {
    return {}
  },
  computed:{},
  methods:{
    deleteFromCart(index){
      console.log(index)
    }
  },
}
</script>

<style scoped>

</style>