<template>
<div class="v-cart-item">
  <img class="v-cart-item_image" :src="require('../assets/images/' + cart_item_data.image)" alt="img"/>
  <div class="v-cart-item_info">
    <p>{{cart_item_data.name}}</p>
    <p>{{cart_item_data.price}}</p>
    <p>{{cart_item_data.article}}</p>
  </div>
  <div class="v-cart-item_quantity"></div>
  <button>delete</button>
</div>
</template>

<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data(){
    return{}
  }
}
</script>


<style scoped lang="scss">
.v-cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.v-cart-item_image {
  max-width: 50px;
}
</style>