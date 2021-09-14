<template>
<div>
  <p>{{product.title}}</p>
  <p>quantity: {{product.quantity}}</p>
  <p>{{product.price*product.quantity}}kr</p>
</div>
</template>

<script>
export default {
 props: ['product']
}
</script>

<style>

</style>