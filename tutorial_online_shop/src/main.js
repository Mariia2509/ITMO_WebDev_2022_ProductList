import Vue, {createApp} from 'vue'
import App from './App.vue'
import store from './vuex/store'
import './assets/styles/styles.scss'


// Vue.config.productionTip = false

createApp(App).mount('#app')
// new Vue
// //     render: h => h(App),
//     store
// }).$mount('#app')