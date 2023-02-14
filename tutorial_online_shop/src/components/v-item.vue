<template>
<div class="v-item">
  <router-link :to="{name: 'catalog'}">
    <div class="v-cart_link_to_catalogue">Back to Catalog</div>
  </router-link>
  </div>
</template>

<script>
export default {
  name: "v-item",
  props: {
    product_data:{
      type: Object,
      default: () => ({})
    }
  },
}
</script>

<style scoped>

</style>