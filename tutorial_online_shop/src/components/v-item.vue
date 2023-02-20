<template>
<div class="v-item">
  <router-link :to="{name: 'catalog'}">
    <div class="v-item_link_to_catalogue">Back to Catalog</div>
  </router-link>
      <div class="v-item_description">
    <p>{{item_data.description}}</p>
      </div>
  <img class="v-item_image" :src="require('../assets/images/' + item_data.image)" alt="img"/>
  <div class="v-item_info">
    <p>{{item_data.name}}</p>
    <p>Price:{{item_data.price}}$</p>
    <p>{{item_data.article}}</p>

  </div>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "v-item",
  computed:{
    item_data() {
      return this.PRODUCTS[this.$route.params.id];
    },
    ...mapGetters([
      'PRODUCTS',
    ])
  },
}
</script>

<style scoped lang="scss">
.v-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0 0 8px 0;
  color: cadetblue;
  padding: 24px;
  margin: 24px;
}
.v-item_link_to_catalogue {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 16px;
  border: solid gray;
}
.v-item_image {
  width: 100px;
}
.v-item_info{
  font-weight: bold;
}
.v-item_description {
  text-align: left;
  width: border-box;

}
</style>