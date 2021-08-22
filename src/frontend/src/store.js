import { createStore } from "vuex" 

function updateLocalStorage(cart){
    localStorage.setItem('cart', JSON.stringify(cart))
}

const store = createStore({
    state:{
     urls:{
         springUrl: 'http://127.0.0.1:8080',
     },
        products: [
            {id: 1, title: "knitting", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: 200, img: "src/assets/toy.jpg"},
            {id: 2, title: "knitting", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor sapien, porta cursus eleifend eget, facilisis ac diam. Sed non feugiat ex. Integer mattis risus ac euismod efficitur.", price: 200, img: "src/assets/toy.jpg"},
            {id: 3, title: "knitting", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor sapien, porta cursus eleifend eget, facilisis ac diam.", price: 200, img: "src/assets/toy.jpg"},
            {id: 4, title: "knitting", description: "Integer mattis risus ac euismod efficitur. Vivamus sed ornare mauris. Ut at enim vitae elit blandit viverra vitae in nisi. Vestibulum bibendum nisi lectus, eget ullamcorper mi molestie non.", price: 200, img: "src/assets/toy.jpg"},
            {id: 5, title: "knitting", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor sapien, porta cursus eleifend eget, facilisis ac diam. Sed non feugiat ex. Integer mattis risus ac euismod efficiturNam.", price: 200, img: "src/assets/toy.jpg"},
            {id: 6, title: "knitting", description: "Integer mattis risus ac euismod efficitur. Suspendisse malesuada aliquam egestas. Sed fringilla, nibh nec suscipit suscipit, urna magna lobortis nisi, quis facilisis dui nisi non sem.", price: 200, img: "src/assets/toy.jpg"}
        ],
     cart: [
        /* {id: 1, title: "knitting", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: 200, img: "src/assets/toy.jpg"},
        {id: 2, title: "knitting", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor sapien, porta cursus eleifend eget, facilisis ac diam. Sed non feugiat ex. Integer mattis risus ac euismod efficitur.", price: 200, img: "src/assets/toy.jpg"},
        {id: 3, title: "knitting", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor sapien, porta cursus eleifend eget, facilisis ac diam.", price: 200, img: "src/assets/toy.jpg"}, */
     ],
    },
    getters: {
        productQuantity: state => product =>{
            let item = state.cart.find(i => i.id === product.id)

            if(item) return item.quantity
            else return null
        }
    },
    mutations:{
     setProducts(state, products) {
         state.products = products
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
     
     
       
    },
 
    actions:{
     async getProducts({ commit, state }) {
         let res = await fetch(state.urls.springUrl + '/api/products')
         let data = await res.json()
         commit('setProducts', data)
     },
 
         
    }
 })
 
 export default store