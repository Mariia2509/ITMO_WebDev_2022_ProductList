<template>
<div class="v-main-wrapper">
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>
</template>

<script>
// import {mapGetters} from "vuex"

export default {
  name: "v-main-wrapper",
  props:{},
  data () {
    return{
      title: "Main Wrapper"
    }
  },
  computed:{
    // ...mapGetters([
    //     'CART'
    // ]),
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