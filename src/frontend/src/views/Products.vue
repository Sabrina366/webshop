<template>
    <article>
        
        <div class="">
            <ProductItem v-for="(p, index) of products" :key="index" :product="p"/>
        </div>
        
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
    
    computed: {
        products(){
            return this.$store.state.products.filter( p => p.category.name === this.selected);
    } 
  }

}
</script>

<style>

</style>