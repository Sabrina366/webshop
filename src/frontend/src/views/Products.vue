<template>
    <article>
        <h3>category</h3>
            <ProductItem v-for="(p, index) of products" :key="index" :product="p"/>
    </article>
</template>

<script>
import ProductItem from '../components/ProductItem.vue';
export default {
    data(){
        return{
            selected: ''
        }
    },
    components: {
        ProductItem,
    },
    /*   
    beforeUpdate(){
        this.$store.dispatch('getProductsByCategory', this.$route.params.id)
    }, */
    methods:{

    },
    computed: {
        products(){
            return this.$store.state.products;
        }
    } 
  }
</script>

<style>

</style>