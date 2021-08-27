<template>
    <li class="nav-item">
          <a class="nav-link active" href="#"><router-link :to="'/products/' + category.id">{{category.name}}</router-link></a>
    </li>
</template>

<script>
export default {
    props: ['category']
}

</script>

<style>

</style>