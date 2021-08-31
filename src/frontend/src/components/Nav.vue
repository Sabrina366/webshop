<template>
  <nav class="navbar fixed-top 
  navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="" alt="" width="30" height="24">
    TinyPaws</a>
    <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
        <button  class="btn btn-primary" type="submit" @click.prevent="searchForProducts()">Search</button>
      </form>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Cart</button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sign in</a>
        </li>
      </ul>
    </div>
  </div>
  <CartOffCanvas />
</nav>

</template>

<script>
import CartOffCanvas from './CartOffCanvas.vue'
export default {
  components: {
    CartOffCanvas,

  },
  data(){
    return{
      search: ''
    }
  },
  methods: {
    searchForProducts(){
      this.$store.dispatch('searchForProducts', this.search)
    }
  }
  
}


</script>

<style>

</style>