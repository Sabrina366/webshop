<template>
  
</template>

<script>
export default {
    name:'Checkout',
    mounted(){
            if(typeof( this.$route.params.id) === "undefined"){
                this.$router.push({name:'Home'})
            }
           
}

}
</script>

<style>

</style>