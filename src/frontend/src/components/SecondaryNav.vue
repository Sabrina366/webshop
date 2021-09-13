<template>
  <nav>
    <div class="menu-item"><a href="#">Cat</a></div>
    <div  class="menu-item"><a href="#">Cat</a>
    </div>
    <div class="menu-item" @mouseenter="isOpen = !isOpen">
      <a href="">Dog</a>
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <Category  v-for="(c, index) of categories" :key="index" :category="c" />
      </div>
    </transition>
  </div>
    <div class="menu-item"><a href="#">Cat</a></div>
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
      isOpen: false
  }
},
computed: {
  categories(){
    return this.$store.state.categories
  }
}

}
</script>
  
<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: darkseagreen;
  padding: 10px;
}
 nav .sub-menu{
  position: absolute;
  background-color:darkseagreen;
  padding: 10px;
  width: max-content;
}
nav .menu-item{
  cursor: pointer;
  padding: 10px;
}
nav .menu-item.active,
nav .menu-item:hover {
  
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>