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
    this.$store.dispatch('getLoggedInUser')
    this.$store.dispatch('getCategories')
  },
  mounted() {
    this.$store.commit('updateCartLocalStorage')
  }
}

</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
} 
#application{
  width: 100vw;
  min-height: 100vh; 
}
</style>

