import {createApp} from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from "@/router/router";
import './assets/styles/styles.scss'

// Vue.config.productionTip = false
const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app')

