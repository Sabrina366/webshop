import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue';
import Products from './views/Products.vue'
import Cart from './views/Cart.vue'
import ProductDetails from './views/ProductDetails.vue'
import Login from './views/Login.vue'
import Account from './views/Account.vue'
import Order from './components/Order.vue'


const routes = [
    { path: '/', name: 'Home', component: Home },

    { path: '/products', name: 'Products', component: Products },
    
    { path: '/cart', name: 'Cart', component: Cart },

    {   path: '/product', name: 'ProductDetails', component: ProductDetails },
    
    { path: '/login', name: 'Login', component: Login },

    { path: '/account', name: 'Account', component: Account },

    { path: '/order', name: 'Order', component: Order}
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router