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
mounted() {
  this.$store.dispatch('getCategories')
  this.$store.commit('updateCartLocalStorage')
  }
}

</script>

<style>

</style>

