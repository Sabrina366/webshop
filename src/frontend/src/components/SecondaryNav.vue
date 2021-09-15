<template>
  <nav>
    <div class="menu-item"><a href="#">Small Pets</a></div>
    <div class="menu-item" @click.prevent="isCatOpen = !isCatOpen">
      <a href="">Cat</a>
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isCatOpen">
        <Category  v-for="(c, index) of cat" :key="index" :category="c" />
      </div>
    </transition>
  </div>
    <div class="menu-item" @click.prevent="isDogOpen = !isDogOpen">
      <a href="">Dog</a>
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isDogOpen">
        <Category  v-for="(d, index) of dog" :key="index" :category="d" />
      </div>
    </transition>
  </div>
    <div class="menu-item"><a href="#">Horse</a></div>
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
      isDogOpen: false,
      isCatOpen: false
  }
},
computed: {
  dog(){
    return this.$store.state.categories.filter(cat =>
        cat.name.includes("Dog"))
  },
  cat(){
    return this.$store.state.categories.filter(cat =>
        cat.name.includes("Cat"))
  }
}

}
</script>
  
<style scoped>
nav {
  font-family: 'DM Serif Display', serif;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color:lightblue;
  padding: 10px;
}
 nav .sub-menu{
  position: absolute;
  background-color: lightblue;
  padding: 5px;
  width: max-content;
  color: white;
}
nav .menu-item{
  cursor: pointer;
  padding: 5px;
}
nav .menu-item.active,
nav .menu-item:hover {
  
}
nav .menu-item a {
  color: inherit;
  text-decoration: none;
  color: white;
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