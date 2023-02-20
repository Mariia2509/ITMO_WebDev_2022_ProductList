<template>
 <div id="app-container">
   <div v-if="isLoading" class="spin"></div>
   <v-main-wrapper v-else/>
 </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper'
import {mapActions} from "vuex";

export default {
  name: 'App',
  data: () => ({
    isLoading: true
  }),
  components: {
    vMainWrapper
  },
  methods:{
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
    ]),
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
        .then(() => {
      this.isLoading = false;
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.spin {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  left: 0;
  right: 0;
  margin: 0 auto;

  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid lightgray;
  animation: round 3s linear infinite;
}

@keyframes round {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
