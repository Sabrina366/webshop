<template>
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row">
    <div class="col-md-4">
      <img :src="product.img" style="height: 80px; width: 100px;" >
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{product.title}}</h5>
        <h6 class="card-text">{{product.price}}kr</h6>
        <p v-if="product_count" class="card-text">qty: {{product_count}}</p>
        <button class="btn " @click="removeFromCart()"><i class="fas fa-trash-alt"></i></button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props: ["product"],
    methods:{
      removeFromCart(){
        return this.$store.commit('removeFromCart',this.product)
      }
    },
    computed:{
      product_count(){
        return this.$store.getters.productQuantity(this.product)
      }
    }

}
</script>

<style>

</style>