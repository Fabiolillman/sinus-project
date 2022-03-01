<template>

    <div class="main-body">
        <PageHeader/>
        <main>
             
            <div class="cart">
                <CartSummary/>
                
                <div class="checkout">
                <h5>Checkout Section</h5>
                
                </div>
             </div>
        
        </main>
        <Footer/>
    </div>
</template>

<script>
import PageHeader from "../components/PageHeader.vue"
import CartSummary from "../components/CartSummary.vue"
import Footer from "../components/Footer.vue"
export default {
    components: {
        PageHeader,
        CartSummary,
        Footer
    },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&display=swap');
.main-body{
    width: 100%;
    height: 100%;
    background: #EADFD5;
    color: #000;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2, h3, label, input{
        font-family: 'Raleway', sans-serif;
        color: #221d17;
    }
}

.cart{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 10rem;
    
}

</style>

<!-- <form action="promo-code-wrapper">
                    <label for="promo-code">Have a promo code?</label>
                    <input type="text" placeholder="" >
                    <button type="submit">APPLY</button>
                </form>
                <p>Subtotal <span>{{product.price * product.amount}}</span> kr</p>
                <p>Delivery <span>{{}}</span></p>
                <p class="big-label">TOTAL <span>{{total}}</span></p>
                <button>CHECK OUT</button> -->