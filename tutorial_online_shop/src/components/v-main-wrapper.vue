<template>
<div class="v-main-wrapper">
  <router-view></router-view>
<!--<p>{{title}}</p>-->
<!--  <v-catalog/>-->
<!--  <v-cart v-if="CART.length"-->
<!--  :cart_data="CART"-->
<!--  />-->
</div>
</template>

<script>
// import vCatalog from './v-catalog'
// import vCart from './v-cart'
import {mapGetters} from "vuex"

export default {
  name: "v-main-wrapper",
  // components:{
  //   vCatalog,
  //   vCart
  // },
  props:{},
  data () {
    return{
      title: "Main Wrapper"
    }
  },
  computed:{
    ...mapGetters([
        'CART'
    ]),
  },
  methods:{},
  watch:{},
  mounted() {
    console.log('Hello I am here')
  }
}
</script>

<style scoped>
.v-main-wrapper{
  /*display: flex;*/
  /*flex-direction: column;*/
  /*justify-content: center;*/
  /*align-items: center;*/
  max-width: 900px;
  margin: 0 auto;
}
</style>