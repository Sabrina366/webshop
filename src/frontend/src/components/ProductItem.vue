<template>
    <div class="product-item">
        <div class="product-inner">
            <div class="product-image">
                <img :src="product.img" class="image">
            </div>              
            <div class="product-description">
                <p class="product-title">{{product.title}}</p>
                <p>{{product.description}}</p>
                <p>{{product.category}}</p>
                <p class="price">{{product.price}} kr</p>
            </div>
            <a class="btn btn-outline"><router-link :to="'/product/' + product.id">Buy</router-link></a>
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

<style >
.product-item{
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: rgb(46, 46, 46);
    background-color: whitesmoke;
    flex: 1 1 33.333%;
    width:  100%;
    /* padding: 0px; */
}
.product-inner{
    position: relative;
    padding: 5px;
}
.product-image .image{
    width: 100%;
}
.product-description{
    padding: 5px;
    margin: 0px -5px -5px;
}
.price{
    margin-top: 2px;
    font-weight: bold;
} 
.product-title{
    font-weight: bold;
    margin-bottom: 2px;
}
</style>