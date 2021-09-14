<template>
  <div>
      <h4>My TinyPaws</h4>
      <p>Welcome to your page {{user.first_name}}!</p>

      <h5>My Account</h5>
      <p>Personal Information</p>
      <p>My Orders</p>
      <button @click="getOrders">orders</button>
      <div>
          <button @click="logout">
              Logout
          </button>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        getOrders(){
            this.$store.dispatch('getOrderHistory')
        },
        logout(){
            this.$store.dispatch('logout')
            this.$router.push('/')
        }
    },
    computed:{
        user(){
            return this.$store.state.user
        }
    }
}
</script>

<style>

</style>