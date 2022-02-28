<template>
  <section>
      <BackButton/>
      <img class="logo" src="@/assets/sinus-logo-landscape.svg" alt="Sinus Logo">
      <CheckoutCard />
      <!-- <CheckoutCard :writeInfo="writeInfo"> -->
  </section>
</template>

<script>
import BackButton from "../components/BackButton.vue"
import CheckoutCard from "../components/CheckoutCard.vue"
export default {
    components: {
        BackButton,
        CheckoutCard
    },
    // computed: {
    //     writeInfo(){
    //         const customer = {
    //             email: '',
    //             name: '',
    //             address: '',
    //             zipcode: '',
    //             state: '',
    //             phone: ''
    //         };
    //         if (this.$store.state.user.currentCustomer){
    //             return this.$store.state.user.currentCustomer;
    //         }else{
    //             return customer
    //         }
    //     }
    // },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&display=swap');

section{
    height: 100vh;
    background: #EADFD5;
}
img.logo{
    display: block;
    margin: auto;
    width: 25rem;
    height: 12rem;
}
</style>