<template>
  <div >
    <h3>In Cart</h3>
    <div>
      <div>
        <CartItem v-for="(p, index) of cart" :key="index" :product="p"/>
      </div>
    <div>
      <p>Total Price: {{total_price}}</p>
    </div>
    <div >
        <button @click="placeOrder" type="button" >Checkout</button>
    </div>
  </div>
  
</div>
</template>

<script>
import CartItem from '../components/CartItem.vue'
export default {
      components: {
          CartItem 
      },
      methods: {
        placeOrder(){
          let products = this.$store.state.cart
          console.log(products)
          this.$store.dispatch('createOrder', products)
          this.$router.push('/order')
          this.$store.commit('emptyCart')
        }
      },
      computed: {
        cart(){
       return this.$store.state.cart;
    },
    total_price(){
      return this.$store.state.cart.reduce((a,b) => (a + b.price*b.quantity), 0)
    }
    
  }


}
</script>

<style>

</style>