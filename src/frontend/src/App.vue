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

<style >

*{
  margin:0;
  padding: 0;
}
#app{

  box-sizing: border-box;
  text-align: center;
}
</style>

