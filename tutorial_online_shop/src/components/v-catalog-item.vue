<template>
<div class="v-catalog-item">
  <img class="v-catalog-item_image" :src="require('../assets/images/' + product_data.image)" alt="img"/>
  <p class="v-catalog-item_name">{{product_data.name}}</p>
  <p class="v-catalog-item_price">Price:{{product_data.price}}$</p>
  <button
      class="v-catalog-item_add_to_card_btn btn"
      @click="addToCart">add to cart
  </button>
</div>
  </template>


<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data:{
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {}
  },
  computed:{},
  methods:{
    addToCart() {
      this.$emit('addToCart', this.product_data)
    }
  },
  mounted() {
    console.log('Hello I am here')
  }
}
</script>

<style scoped lang="scss">
.v-catalog-item {
  box-shadow: 0 0 8px 0;
  color: cadetblue;
  padding: 24px;
  width: 260px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.v-catalog-item_image{
  width: 100px;
  margin: auto 0;
}
</style>