<template>
    <div class="main-body">
        <Header />
        <BackButton />
        <section class="items-cart">
            <img :src="imageFile" :alt="product.title">
            <h2>SHOPPING CART</h2>
            <p class="productTitle">{{ product.title }}</p>
            <button @click="removeItem(product.id)">-</button>
            <button @click="addItem(product.id)">+</button>
            <p>Amount: {{ product.amount }}</p>
            <p>Price: {{ product.price }}</p>
        </section>
        <section class="checkout">
            <form action="promo-code-wrapper">
                <label for="promo-code">Have a promo code?</label>
                <input type="text" placeholder="" >
                <button type="submit">APPLY</button>
            </form>
            <p>Subtotal <span>{{product.price * product.amount}}</span> kr</p>
            <p>Delivery <span>{{}}</span></p>
            <p class="big-label">TOTAL <span>{{total}}</span></p>
            <button>CHECK OUT</button>
        </section>
    </div>
</template>

<script>
import Header from "../components/Header.vue"
import BackButton from "../components/BackButton.vue"
export default {
    components: {
        Header,
        BackButton
    },
    props: {
        prod: Object
    },
    data(){
        return{
            product: {
                id: this.prod.id,
                title: this.prod.title,
                price: this.prod.price,
                shortDesc: this.prod.shortDesc,
                longDesc: this.prod.longDesc,
                imgFile: this.prod.imgFile
            }
        }
    },
    methods: {
        removeItem(id){
            this.$store.dispatch("removeFromCart", id)
        },
        addItem(id){
            this.$store.dispatch("addToCart", id)
        },
    },
    computed: {
        cart(){
            return this.$store.state.cart
        }
    },
}
</script>

<style lang="scss" scoped>
.main-body{
    margin: 30px;
    width: 31rem;
    background: #352D1F;
    color: white;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
}
button{
    align-self: center;
    border-radius: 10px;
    width: 16rem;
    height: 3.7rem;
    justify-self: end;
    background: #478516;
    color: white;
    font-size: 1.87rem;
}
</style>