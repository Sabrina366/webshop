<template>
  <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Cart</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <CartItem v-for="(p, index) of cart" :key="index" :product="p"/>
    <div class="d-md-block">
        <button type="button" class="btn btn-secondary btn-sm">Remove</button>
        <button type="button" class="btn btn-primary btn-sm">Checkout</button>
    </div>
  </div>
  
</div>
</template>

<script>
import CartItem from './CartItem.vue'
export default {
      components: {
          CartItem 
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