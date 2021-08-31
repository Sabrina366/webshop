import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue';
import Products from './views/Products.vue'
import Cart from './views/Cart.vue'
import ProductDetails from './views/ProductDetails.vue'

const routes = [
    { path: '/', name: 'Home', component: Home, },

    { path: '/products/:id', name: 'Products', component: Products, },
    
    { path: '/cart', name: 'Cart', component: Cart, },

    ,
    {   path: '/product/:id',
        name: 'ProductDetails',
        component: ProductDetails,},
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router