<template>
    <div class="main-body">
        <PageHeader/> 
            <div class="cart">
                <CartSummary />
                <div class="checkout">
                    <form class="promocode" @submit.prevent="promoCodeSubmit">
                        <label for="promo-code">Have a promo code?</label>
                        <input type="text" placeholder="Promo Code">
                        <button type="submit">APPLY</button>
                    </form>
                    <p class="subtotal">Subtotal: <span>{{ subTotalPrice }}</span> kr</p>
                    <p class="subtotal">Delivery: <span>FREE</span></p>
                    <p class="total">TOTAL <span>{{ total }}</span> kr</p>
                    <button class="big-button" @click="$router.push('checkout')">CHECK OUT</button>
                    
                    <!-- <div class="promocode">
                        <p>Have a promo code?</p>
                        <input type="text"> <button>Apply</button>
                    </div> -->
                    <!-- <div class="subtotal">
                        <p :model="subtotal" >Subtotal: </p>
                        <p>Delivery: FREE</p>
                    </div>

                    <div :model="total" class="total">
                        <p>TOTAL: </p>
                    </div>
                     <button class="big-button" @click="checkout">CHECKOUT</button> -->
                </div>
             </div>
        
        <!-- <Footer/> -->
    </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue"
import CartSummary from "../components/CartSummary.vue"
// import Footer from "../components/Footer.vue"
export default {
    components: {
        PageHeader,
        CartSummary,
        // Footer
    },
    computed: {
        subTotalPrice(){
          return this.$store.getters.subTotalPrice
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&display=swap');
.main-body{
    width: 100%;
    height: 100%;
    background: #EADFD5;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;

}
    h5, h2, h3, label, p, input{
        font-family: 'Raleway', sans-serif;
        color: #221d17;
    }

    h5{
        font-size: 30px;
    }

.cart{
    height: 35rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-left: 10rem;
    
}
.checkout{
    width: 15rem;
    height: 25rem;
    background-color: #B5A183;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 2rem;

}
.promocode, .subtotal, .total{
    margin-left: 25px;
}

.big-button{
    background: #478516;
    padding: 1rem 2rem;
    color: #fff;
    border: 1px solid #478516;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 10rem;
    height: 3rem;
    margin-bottom: 20px;
    margin-left: 40px;
    
}
</style>

