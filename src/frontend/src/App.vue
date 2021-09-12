<template>
<main>
  <Nav/>
  <router-view/>
</main>
</template>

<script>
import Nav from './components/Nav.vue'
export default{
  components: {
  Nav,
  },
  created(){
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getProduct', 7)
  },
  mounted() {
    this.$store.commit('updateCartLocalStorage')
  }
}

</script>

<style>

</style>

