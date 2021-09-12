<template>
    <li class="nav-item">
          <a class="nav-link active" @click="getCategory()">{{category.name}}<!-- <router-link :to="'/products/' + category.id">{{category.name}}</router-link> --></a>
    </li>
</template>

<script>
export default {
    props: ['category'],
    methods:{
        getCategory(){
            this.$store.dispatch('getProductsByCategory', this.category.id)
            this.$router.push("/products/" + this.category.id)
        }
        
    }
}

</script>

<style>

</style>