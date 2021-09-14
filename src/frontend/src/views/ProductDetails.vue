<template>
  <div class="container">
    <div>
      <img :src="product.img" alt="">
    </div>
      <p>{{product.title}}</p>
      <p>{{product.description}}</p>
      <p>{{product.price}}</p>
      <div>
        <button type="button" @click="addToCart" >Buy</button>
      </div>
			</div>
</template>

<script>
export default {
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
