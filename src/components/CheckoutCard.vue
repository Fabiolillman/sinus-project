<template>
      <div class="wrapper">
        <h2 class="title">CHECKOUT</h2>
        <div class="container">
            <form class="checkout-form">
                <div class="email">
                    <label for="email">Email:</label>
                    <input type="email" v-model="email">
                </div>

                <div class="fullname">
                    <label for="name">Name: </label>
                    <input type="text" v-model="name">
                </div>

                <div class="address">
                    <label for="address">Address: </label>
                    <input type="text" v-model="address">
                </div>
                <div class="zipcodestate">
                    <div class="zipcode">
                        <label for="zipcode">Zip code: </label>
                        <input type="text" v-model="zipcode">
                    </div>
                    <div class="state">
                        <label for="state">State: </label>
                        <input type="text" v-model="state">
                    </div>
                </div>

                <div class="phone-number">
                    <label for="phone">Phone: </label>
                    <input type="tel" v-model="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                </div>
            </form>
        </div>

        <div class="payment-method">
            <h3 class="title">PAY WITH:</h3>
            <a href="#">
                <img src="@/assets/visa.png" alt="Visa">
            </a>
            <a href="#">
                <img src="@/assets/mastercard.png" alt="Mastercard">
            </a>
            <a href="#">
                <img src="@/assets/swish.png" alt="Swish">
            </a>
        </div>
      </div>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            name: '',
            address: '',
            zipcode: '',
            state: '',
            phone: ''
        }
    },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&display=swap');
.wrapper{
    display: flex;
    flex-direction: column;
    max-width: 45rem;
    margin: auto;
    padding: 2rem 4rem;
    border-radius: 5px;
    background: #B5A183;

    h2, h3, label, input{
        font-family: 'Raleway', sans-serif;
        font-style: italic;
        color: #221d17;
    }
    h2, h3{
        text-align: center;
    }
    label, input{
        font-size: 18px;
        padding: 8px 16px;
    }
    input:focus{
        outline: none;
    }
}
.title{
    padding: 5px;
}
.checkout-form{
    width: fit-content;
    margin: 0 auto;
    padding-top: 5px;
}
.email,
.fullname,
.address,
.zipcodestate,
.phone-number{
    display: flex;
    position: relative;
    background: #EFEFEF;
    width: 30rem;
    padding: 8px 6px;
    border: 1px solid #000;
}

.email label,
.fullname label,
.address label,
.zipcode label,
.state label,
.phone-number label{
    position: absolute;
}

.email input label,
.fullname input label,
.address input label,
.zipcode input label,
.state input label,
.phone-number input label{
    position: absolute;
}

.email input,
.fullname input{
    background: transparent;
    border: none;
    width: 80rem;
    margin-left: 5rem;
}
.address input{
    background: transparent;
    border: none;
    width: 90rem;
    margin-left: 6rem;
}
.zipcode input{
    background: transparent;
    border: none;
    width: 5rem;
    margin-left: 7rem;
}
.state input{
    background: transparent;
    border: none;
    width: 8rem;
    margin-left: 5rem;
}
.phone-number input{
    background: transparent;
    border: none;
    width: 80rem;
    margin-left: 5rem;
}
.zipcodestate{
    display: flex;
    flex-direction: row;
}
.payment-method{
    padding-top: 50px;
    position: relative;
    margin: auto;
}
.payment-method img{
    width: 6rem;
    height: 5rem;
    padding:  0 1rem;
}
</style>