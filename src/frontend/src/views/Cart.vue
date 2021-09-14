<template>
  <div >
    <h3>In Cart</h3>
    <div>
    <CartItem v-for="(p, index) of cart" :key="index" :product="p"/>
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
        }
      },
      computed: {
        cart(){
       return this.$store.state.cart;
    },
    
  }


}
</script>

<style>

</style>