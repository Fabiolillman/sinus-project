<template>
    <div class="wrapper">
        <List :products="products">
        <Footer />
    </div>

    

</template>

<script>
import List from "../components/List.vue"
export default {
    components: {
        List
    },
    data(){
        return{}
    },
    created(){
        this.$store.dispatch("fetchItems")
    },
    computed: {
        items(){
            return this.$store.state.products
        }
    },
}
</script>

<style lang="scss" scoped>
    .wrapper{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 5px;
    }
    .itemslist{
        margin: auto;
    }
</style>