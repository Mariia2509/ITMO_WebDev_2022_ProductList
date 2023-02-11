<template>
<div class="v-cart">
  <h1>Cart</h1>
  <v-cart-item
    v-for="item in cart_data"
    :key="item.article"
    :cart_item_data="item"
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
  props: {},
  data() {
    return {}
  },
  mounted() {
    console.log('Hello I am here')
  }
}
</script>

<style scoped>

</style>