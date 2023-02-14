import { createWebHistory, createRouter } from "vue-router";

import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'
import vItem from '../components/v-item'




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path:'/',
        name:'catalog',
        component: vCatalog
        },
        {
            path:'/cart',
            name: 'cart',
            component: vCart

        },
        {
            path:'/item',
            name: 'item',
            component: vItem
        }

    ]
})

export default router;
