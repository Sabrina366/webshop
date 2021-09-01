<template>
    <article>
        <h3>category</h3>
        <div class="container">
            <div class="row">
                <div class="">
                    <ProductItem v-for="(p, index) of products" :key="index" :product="p" />
                </div>
            </div>
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