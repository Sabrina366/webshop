<template>
    <article calss="home">
       <h3 >{{selectedCategory.name}}</h3>
        <section class="product">
            <ProductItem v-for="(p, index) of products" :key="index" :product="p"/>
        </section>
    </article>
</template>

<script>
import ProductItem from '../components/ProductItem.vue';
export default {
    components: {
        ProductItem,
    },
    computed: {
        products(){
            return this.$store.state.products;
        },
        selectedCategory(){
            return this.$store.state.selectedCategory
        }
    } 
  }
</script>

<style scoped>
.home{
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: whitesmoke;
    overflow: hidden;
}
h3{
    padding: 15px;
    margin: auto;
}
.product{
    display: flex;
    max-width: 1200px;
    padding: 25px;
    margin: 0px auto;
    flex-wrap: wrap;
}
</style>