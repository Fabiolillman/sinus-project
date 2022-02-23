<template>
      <li class="product-card">{{ product.name }}
          <h2>{{product.productName}}</h2>
          <p>{{product.productPrice}}</p>
      </li>
</template>

<script>
export default {
    props: ['product'],
    computed: {
        list(){
            return this.$store.state.list
        }
    }
}
</script>

<style scoped>

</style>