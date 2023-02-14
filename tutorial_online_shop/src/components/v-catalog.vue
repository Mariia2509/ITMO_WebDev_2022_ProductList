<template>
  <div class="v-catalog">
    <router-link :to="{name: 'cart', params:{cart_data: CART}}">
      <div class="v-catalog_link_to_cart">Cart:{{CART.length}}</div>
    </router-link>
    <router-link :to="{name: 'item', params: {product_data: PRODUCTS}}">
      <div class="v-catalog_link_to_item"></div>
    </router-link>
    <h1>Catalog</h1>
    <div class="v-catalog_list">
    <v-catalog-item
    v-for="product in PRODUCTS"
    :key="product.article"
    :product_data="product"
    @addToCart="addToCart"
    />
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import vItem from './v-item'
import {mapActions, mapGetters} from 'vuex'


export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
    vItem
  },
  props: {},
  data() {
    return {

    }
  },
    computed:{
      ...mapGetters([
          'PRODUCTS',
          'CART'
      ])
    },methods:{
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(data){
        this.ADD_TO_CART(data)
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
/*
      this.GET_PRODUCTS_FROM_API().then((response) => {
        if (response.data) {
          console.log('Data arrived!')
        }
      })
*/
    }
  }
</script>

<style scoped lang="scss">
.v-catalog {
  &_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
  }
  &_link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 16px;
    border: solid gray;
  }
}
</style>
