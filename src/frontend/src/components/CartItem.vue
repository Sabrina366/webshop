<template>
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="product.img" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{product.title}}</h5>
        <h6 class="card-text">{{product.price}}kr</h6>
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props: ["product"],

}
</script>

<style>

</style>