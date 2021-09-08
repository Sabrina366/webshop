<template>
  <div class="container">
      <p>{{product.title}}</p>
      <p>{{product.price}}</p>
			</div>
</template>

<script>
export default {
     created() {
        this.$store.dispatch('getProduct', this.$route.params.id)
    },
    computed: {
        product(){
            return this.$store.state.product
        }
    },
    methods: {
      addToCart(){
        this.$store.commit('addToCart', this.product)
      }
    }
}
</script>
    
<style>


</style>