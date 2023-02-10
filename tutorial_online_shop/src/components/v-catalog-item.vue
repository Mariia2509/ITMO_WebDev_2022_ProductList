<template>
<div class="v-catalog-item">
  <img src="" alt=""/>
  <p class="v-catalog-item_name">{{product_data.name}}</p>
  <p class="v-catalog-item_price">{{product_data.price}}</p>
  <button class="v-catalog-item_add_to_card_btn btn">add to card</button>
</div>
  </template>


<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data:{
      type: Object,
      default(){
        return{}
      }
    }
  },
  data() {
    return {}
  },
  mounted() {
    console.log('Hello I am here')
  }
}
</script>

<style scoped lang="scss">
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0; color: cadetblue;
  padding: 16px;
  margin: 16px;
}
</style>