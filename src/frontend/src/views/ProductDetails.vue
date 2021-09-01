<template>
  <div class="container">
		<!-- <div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class=" col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img :src="product.img" /></div>
						</div>
        			</div>
					<div class="details col-md-6">
						<h3 class="product-title">{{product.title}}</h3>
						<p class="product-description">{{product.description}}</p>
						<h4 class="price">price: <span>{{product.price}}kr</span></h4>
						<div class="action">
							<button @click="addToCart()" class= "btn btn-primary" type="button">add to cart</button>
						</div>
					</div>
				</div> -->
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