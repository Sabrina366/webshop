import { createStore } from "vuex" 

const store = createStore({
    state:{
     urls:{
         springUrl: 'http://127.0.0.1:8080',
     },
        products: [
            {title: "knitting", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", price: 200, img: "src/assets/embroidery produkt 1.jpg"},
            {title: "knitting", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor sapien, porta cursus eleifend eget, facilisis ac diam. Sed non feugiat ex. Integer mattis risus ac euismod efficitur.", price: 200, img: "src/assets/embroidery produkt 1.jpg"},
            {title: "knitting", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor sapien, porta cursus eleifend eget, facilisis ac diam.", price: 200, img: "src/assets/embroidery produkt 1.jpg"},
            {title: "knitting", description: "Integer mattis risus ac euismod efficitur. Vivamus sed ornare mauris. Ut at enim vitae elit blandit viverra vitae in nisi. Vestibulum bibendum nisi lectus, eget ullamcorper mi molestie non.", price: 200, img: "src/assets/embroidery produkt 1.jpg"},
            {title: "knitting", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor sapien, porta cursus eleifend eget, facilisis ac diam. Sed non feugiat ex. Integer mattis risus ac euismod efficiturNam.", price: 200, img: "src/assets/embroidery produkt 1.jpg"},
            {title: "knitting", description: "Integer mattis risus ac euismod efficitur. Suspendisse malesuada aliquam egestas. Sed fringilla, nibh nec suscipit suscipit, urna magna lobortis nisi, quis facilisis dui nisi non sem.", price: 200, img: "src/assets/embroidery produkt 1.jpg"}
        ],
     
    },
    mutations:{
     setProducts(state, products) {
         state.products = products
     },

       
    },
 
    actions:{
     async getProducts({ commit, state }) {
         let res = await fetch(state.urls.springUrl + '/api/products',{
             method: 'no-cors'
         })
         let data = await res.json()
         commit('setProducts', data)
     },
 
         
    }
 })
 
 export default store