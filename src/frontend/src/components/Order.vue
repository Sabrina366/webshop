<template>
    <div>
        <h4>Order Reciept</h4>'
    <div>
        <p>Ordernumber: {{order.id}}</p>
        <p>Order date: {{order.timestamp}}</p>
    </div>
    <div>
        <Product v-for="(p, index) of order.products" :key="index" :product="p"/>
    </div>
    <div>
        <p>Total Price: {{total_price}}kr</p>
    </div>
    </div>
</template>

<script>
import Product from '../components/Product.vue'
export default {
    components:{
        Product
    },
    computed: {
        order(){
            console.log(this.$store.state.order)
            return this.$store.state.order
        },
            total_price(){
      return this.$store.state.order.products.reduce((a,b) => (a + b.price*b.quantity), 0)
    }
    }

}
</script>

<style>

</style>