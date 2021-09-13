<template>
    <div @click="getCategory" class="menu-item">
      <a>{{ category.name }}</a>
    </div>
</template>

<script>
export default {
    props: ['category'],
    methods:{
        getCategory(){
            this.$store.dispatch('getProductsByCategory', this.category)
            this.$router.push('/products')
        }
    }
}
</script>

<style scoped>

</style>