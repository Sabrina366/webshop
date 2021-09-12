<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="" alt="" width="30" height="24"><router-link to="/">
      TinyPaws
    </router-link>
    </a>
    <form class="d-flex">
        <input v-model="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-sm btn-outline-primary" type="button">Search</button>
      </form>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <button class="btn btn-sm btn-outline-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Cart</button>
  </div>
  <CartOffCanvas/>
</nav>
<SecondaryNav/>

</template>

<script>
import CartOffCanvas from './CartOffCanvas.vue'
import SecondaryNav from './SecondaryNav.vue'
export default {
  components: {
    CartOffCanvas,
    SecondaryNav
  },
  data(){
    return{
      search: ''
    }
  }
  
}

</script>

<style>

</style>