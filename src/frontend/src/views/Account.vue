<template>
  <div calss="account-page">
      <div>
        <h4>My TinyPaws</h4>
        <p>Welcome to your page {{user.first_name}}!</p>
      </div>
      <div>
          <h5>My Account</h5>
          <div>
              <h6>Personal Information</h6>
              <p>{{user.first_name}} {{user.last_name}}</p>
              <p>{{user.email}}</p>
              <p>Adress:</p>
              <p>{{user.address}}</p>
              <p>{{user.city}} {{user.zip}}</p>
              <p>{{user.country}}</p>
          </div>
            <div>
            <strong>My Orders</strong>
            <span>
                <div v-for="(orders, index) in orderHistory" :key="index" >
                    <div>
                        <p>Ordernumber {{orders.id}}</p>
                        <p>Order Date {{orders.timestamp}}</p>
                    </div >
                            <ul>
                                <li class="groupItems" v-for="(item,index) in orders.items" :key="index">
                                    <div>
                                    <p>{{item.title}}</p>
                                    <p>quantity: {{item.quantity}}</p>
                                    <p>price {{item.price*item.quantity}}kr</p>
                                    </div>
                                </li>
                            </ul>
                        </div> 
            </span>
            
        </div>
      </div>
      <div>
          <button @click="logout">
              Logout
          </button>
      </div>
  </div>
</template>

<script>
export default {
    created(){
            this.$store.dispatch('getOrderHistory')
    },
    methods:{
        logout(){
            this.$store.dispatch('logout')
            this.$router.push('/')
        },

    },
    computed:{
        user(){
            return this.$store.state.user
        },
        orderHistory(){
            return this.$store.state.orderHistory
        },
        
    }
}
</script>

<style scoped>
li{
    list-style: none;
}

</style>