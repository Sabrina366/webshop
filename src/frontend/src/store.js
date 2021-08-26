import { createStore } from "vuex" 

function updateLocalStorage(cart){
    localStorage.setItem('cart', JSON.stringify(cart))
}

const store = createStore({
    state:{
     urls:{
         springUrl: 'http://127.0.0.1:8080',
     },
        products: [],
     cart: [],

     categories: []
    },
    getters: {
        productQuantity: state => product =>{
            const item = state.cart.find(i => i.id === product.id)

            if(item) return item.quantity
            else return null
        }
    },
    mutations:{
     setProducts(state, products) {
         state.products = products
     },
     setCategories(state, categories) {
        state.categories = categories
    },

     addToCart(state, product){
         let item = state.cart.find(i => i.id === product.id)

         if(item){
             item.quantity++
         }
         else{
            state.cart.push({...product, quantity: 1})
        }

        updateLocalStorage(state.cart)
     },
     
     updateCartLocalStorage(state){
         let cart = localStorage.getItem('cart')

         if(cart){
             state.cart = JSON.parse(cart)
         }
     },

     removeFromCart(state, product){
        const item = state.cart.find(i => i.id === product.id)

        if(item){
            if(item.quantity > 1){
                item.quantity--
            }
            else {
                state.cart = state.cart.filter( i => i.id !== product.id)
            }
        }
        updateLocalStorage(state.cart)

     }
       
    },
 
    actions:{
     async getProducts({ commit, state }) {
         let res = await fetch(state.urls.springUrl + '/api/products')
         let data = await res.json()
         commit('setProducts', data)
     },
        async getCategories({ commit, state }) {
                let res = await fetch(state.urls.springUrl + '/api/categories')
            let data = await res.json()
            console.log(data)
            commit('setCategories', data)
        },
 
         
    },
 })
 
 export default store