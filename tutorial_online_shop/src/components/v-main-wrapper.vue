<template>
<div class="v-main-wrapper">
<p>{{title}}</p>
  <v-catalog/>
  <v-card/>
</div>
</template>

<script>
import vCatalog from './v-catalog'
import vCard from './v-card'

export default {
  name: "v-main-wrapper",
  components:{
    vCatalog,
    vCard
  },
  props:{},
  data () {
    return{
      title: "Main Wrapper"
    }
  },
  computed:{},
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