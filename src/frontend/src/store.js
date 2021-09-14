import { createStore } from "vuex" 

function updateLocalStorage(cart){
    localStorage.setItem('cart', JSON.stringify(cart))
}

const store = createStore({
    state:{
     user: {
         loggedIn: false,
     },
     orderhistory: [],
     order: '',
     product: {
         id: '',
         title: '',
         description: '',
         price: '', 
         img: '',
         category:{
             id: '',
             name: ''
         }
     },
    products: [],
    cart: [],
    categories: [],
    selectedCategory: '',
    },
    getters: {
        productQuantity: state => product =>{
            const item = state.cart.find(i => i.id === product.id)

            if(item) return item.quantity
            else return null
        }
    },
    mutations:{
     setProducts(state, products){
         state.products = products
     },
     setProduct(state, product){
        state.product = product
    },
     setCategories(state, categories){
        state.categories = categories
    },
     setUser(state, user){
        state.user = user
     },
     setOrderHistory(state, orders){
        state.ordersHistory = orders
     },
     setOrder(state, order){
        state.order = order
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
     },
     setSelectedCategory(state, category){
        this.state.selectedCategory = category
    }
 
    },

    actions:{
        async getCategories({ commit, state }) {
            let res = await fetch('/rest/categories')
            let data = await res.json()
            console.log(data)
            commit('setCategories', data)
        },         
    async getProductsByCategory({ commit, state }, category) {
        console.log(category.id)
        let res = await fetch('/rest/categories/' + category.id)
        let data = await res.json()
        console.log(data)
        commit('setProducts', data)
        commit('setSelectedCategory', category)
        
    },
    async getProduct({ commit, state }, id) {
        console.log(id)
        let res = await fetch('/rest/products/' + id)
        let data = await res.json()
        console.log(data)
        commit('setProduct', data)
    },
    async login({dispatch}, credentials){
        let res = await fetch('/rest/login', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(credentials)
        })
        let data = await res.json()
        dispatch('getLoggedInUser')
    },
    async getLoggedInUser({commit}){
        let res = await fetch('/rest/login')
        let data = await res.json()
        commit('setUser', data)
    },
    async logout({dispatch}){
        let res = await fetch('/rest/login', {
            method: 'delete'
        })
        
        dispatch('getLoggedInUser')
    },
    async getOrderHistory({commit}){
        console.log('getting orders')
        let res = await fetch('/rest/order')
        let data = await res.json()
        console.log(data)
        commit('setOrderHistory', data)
    },
    async getOrder({commit}, id){
        let res = await fetch('/rest/order/' + id)
        let data = await res.json()
        console.log(data)
        commit('setOrder', data)
    },
    async createOrder({dispatch}, products){
        let res = await fetch('/rest/order', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(products)
        })
        let data = await res.json()
        console.log(data)
        dispatch('getOrder', data.insertId)
        }
    }
 })
 
 export default store