<template>
    <div class="product-item">
        <div class="product-inner">
            <div class="product-image">
                <img :src="product.img" class="image">
            </div>              
            <div class="product-description">
                <p class="product-title">{{product.title}}</p>
                <p>{{product.description}}</p>
                <p class="price">{{product.price}} kr</p>
            </div>
            <button @click="viewProduct" type="button">Buy</button>
            </div>
        </div>
</template>

<script>
export default {
    props: ["product"],
    methods: {
      viewProduct(){
        this.$store.commit('setProduct', this.product)
        this.$router.push('/product')
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