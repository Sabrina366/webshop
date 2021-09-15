<template>
<div class="wrapper">
    <nav >
    <ul>
      <li>
        <router-link to="/">
        <img src="" alt="" width="30" height="24">
      </router-link>
      </li>
      <li>
        <form>
        <input v-model="search" type="search" placeholder="Search for a product..." />
        <button type="button">Search</button>
      </form>
      </li>
      <li>
        <router-link v-if="!loggedIn" to="/login">Sign in</router-link>
        <router-link v-if="loggedIn" to="/account">My Account</router-link>
      </li>
      <li>
        <router-link to="/cart">cart</router-link> <!-- lägg til länk till cart -->
      </li>
    </ul>
  <!-- <CartOffCanvas/> -->
</nav>
</div>
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
  methods:{
    
  },
  computed: {
    loggedIn(){
      return this.$store.state.user.loggedIn
    },
  }
  
}

</script>

<style scoped>
i:hover{
  cursor: pointer;
}
a:hover{
  cursor: pointer;
}
router-link{
  text-decoration: none;
  color: white;
}
button{
    margin: 0 2px;
}
button:hover{
    background-color: #e0ecd2
}
.wrapper{
    width: 100%;
    margin: 0 auto;
}
nav li{
    text-align: center;
    text-decoration: none;
    display: block;
    color:whitesmoke;
    display: block;
    padding: 10px;
}
nav ul{
    list-style-type: none;
    padding: 0;
}
ul{
    background-color:lightblue;
}
nav li:hover{
    
}
@media screen and (min-width: 768px){
nav ul{
    display: flex;
    justify-content: flex-start;
    padding-right: 15px;
}
}
</style>