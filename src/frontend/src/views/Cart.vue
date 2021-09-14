<template>
  <div >
    <div>
    <CartItem v-for="(p, index) of cart" :key="index" :product="p"/>
    <div >
        <button @click="placeOrder()" type="button" >Checkout</button>
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
          this.$store.dispatch('createOrder()', cart) //skicka med cart, glöm ej skicka med rätt property-namn etc
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