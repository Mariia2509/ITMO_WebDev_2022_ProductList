<template>
  <div class="v-item">
    <router-link :to="{name: 'catalog'}">
      <div class="v-item_link_to_catalogue">Back to Catalog</div>
    </router-link>
    <div class="v-item_title">{{ item_data.name }}</div>
    <div class="v-item_content">
      <div class="v-item_description">
        <p>{{ item_data.description }}</p>
      </div>
      <img class="v-item_image" :src="require('../assets/images/' + item_data.image)" alt="img"/>
      <div class="v-item_info">
        <p>Price:{{ item_data.price }}$</p>
        <p>{{ item_data.article }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'v-item',
  computed: {
    item_data() {
      return this.PRODUCTS[this.$route.params.id]
    },
    ...mapGetters([
      'PRODUCTS'
    ])
  }
}
</script>

<style scoped lang="scss">
.v-item {
  box-shadow: 0 0 8px 0;
  color: cadetblue;
  margin-top: 30px;
}
.v-item_title {
  padding: 20px;
}
.v-item_content {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 60px 60px;
  gap: 60px;
}
.v-item_link_to_catalogue {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 16px;
  border: solid gray;
}
.v-item_image {
  width: 300px;
}
.v-item_info {
}
.v-item_title {
  font-weight: bold;
  font-size: 40px;
  white-space: nowrap;
}
.v-item_description {
  text-align: justify;
  display: flex;
  width: 300px;
}
</style>