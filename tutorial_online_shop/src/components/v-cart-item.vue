<template>
<div class="v-cart-item">
  <img class="v-cart-item_image" :src="require('../assets/images/' + cart_item_data.image)" alt="img"/>
  <div class="v-cart-item_info">
    <p>{{cart_item_data.name}}</p>
    <p>Price:{{cart_item_data.price}}$</p>
    <p>{{cart_item_data.article}}</p>
  </div>
  <div class="v-cart-item_quantity">
    <p>Q-ty:</p>
      <button class="btn_qty" @click="decreaseItem">-</button>
      {{cart_item_data.quantity}}
      <button class="btn_qty" @click="increaseItem">+</button>
   </div>
  <button class="btn_delete" @click="deleteFromCart">delete</button>
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
  },

  computed:{},
  methods: {
    decreaseItem(){
      this.$emit('decrease')
    },
    increaseItem(){
      this.$emit('increase')
    },
    deleteFromCart() {
      this.$emit('deleteFromCart')
    }
  },
  mounted() {
    // eslint-disable-next-line vue/no-mutating-props
    this.cart_item_data ['quantity']= 1
  }
}
</script>


<style scoped lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0; color: cadetblue;
  padding: 24px;
  margin: 24px;
}
.v-cart-item_image {
  max-width: 50px;
}
.btn_qty {
  cursor: pointer;
}
.btn_delete{
  color: black;
  background-color: #eae7e7;
  border-radius: 4px;
}
</style>