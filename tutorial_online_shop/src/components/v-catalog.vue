<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <v-catalog-item
    v-for="product in products"
    :key="product.article"
    :product_data="product"
    />
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'


export default {
  name: "v-catalog",
  components: {
    vCatalogItem
  },
  props: {},
  data() {
    return {
      products: [
        {
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          name: "T-shirt 1",
          price: 100,
          article: "T1",
          available: true
        },
        {
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          name: "T-shirt 2",
          price: 150,
          article: "T2",
          available: true
        },
        {
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          name: "T-shirt 3",
          price: 200,
          article: "T3",
          available: true
        },
        {
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          name: "T-shirt 4",
          price: 250,
          article: "T4",
          available: true
        },
        {
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          name: "T-shirt 5",
          price: 300,
          article: "T5",
          available: true
        },
        {
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          name: "T-shirt 6",
          price: 350,
          article: "T6",
          available: true
        },
      ],
      mounted() {
        console.log('Hello I am here')
      }
    }
  }}
</script>

<style scoped lang="scss">
.v-catalog {
  &_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>