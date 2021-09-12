<template>
<nav class="navbar navbar-light sticky-top shadow-sm justify-content-center" style="background-color: #e3f2fd;">
      <ul class="nav ">
        <Category v-for="(c, index) of categories" :key="index" :category="c"/>
      </ul>
</nav>
</template>

<script>
import Category from './Category.vue'
export default {
  components:{
    Category
  },
  data (){
    return{
      
    }
  },
  
    computed: {
      categories(){
        return this.$store.state.categories;
      }
    }

}
</script>
  
<style>

</style>