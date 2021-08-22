<template>
  <div class="card m-3" style="width: 18rem;">
  <img :src="product.img" class="card-img-top" alt="...">
  <div class="card-body">
    <h6 class="card-title">{{product.title}}</h6>
    <p class="card-text">{{ product.description.substring(0, 60) }}</p>
    <h6 class="card-text">{{product.price}}kr</h6>
    <button @click="addToCart()" class="btn btn-primary">Buy</button>
  </div>
</div>
</template>

<script>
export default {
    props: ["product"],
    methods: {
      addToCart(){
        this.$store.commit('addToCart', this.product)
      }
    }

    
}
</script>

<style>

</style>