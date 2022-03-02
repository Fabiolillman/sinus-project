<template>
  <div class="modal-fade" v-if="loginShow" @click="$emit('click')">
      <form action="" @submit.prevent="login" @click.stop>
          <!-- @click="modalShow = !modalShow" -->
          <h2>Sign in</h2>
          <label for="email-input">Email</label>
          <input id="email-input" type="text" v-model="email">
          <label for="password-input">Password</label>
          <input id="password-input" type="password" v-model="password">
          <div class="forgot-password-wrap">
              <div class="checkbox-wrap">
              <input id="checkbox" type="checkbox">
              <label for="checkbox">Remember me?</label>
              </div>
              <a href="">Forgot Password?</a>
          </div>
          <button>Login</button>
          <!-- @click="$emit('click')" -->
         
           <a href="#" @click="registerShow=!registerShow">Don't have an account? Register here!</a>
      </form>
       <RegisterModal
       v-if="registerShow" 
       @click="registerShow=!registerShow"
       :registerShow="registerShow"
      />
  </div>
</template>

<script>
import RegisterModal from '../components/RegisterModal.vue'
export default {
    props:['loginShow'],
     components: {
    RegisterModal
  },
data(){return{
    email:'',
    password: '',
    registerShow: false
}},

methods:{
    classadding(){
        while (this.loginShow==false){
            console.log("It's hidden rn")
        }
    },
    async login(){
       await this.$store.dispatch('login',{email:this.email, password:this.password} )
        this.$store.dispatch('checksLogin')
        
    }
}
}

</script>

<style scoped>
.modal-fade{
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.3);
}
form{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 500px;
    padding: 64px;
    display: flex;
    flex-direction: column;
    background: rgb(250 249 248);
}   

h2{
    text-align: center;
    margin: 0 0 2rem 0;
}

label{
    margin: 0.5rem 0 0.5rem 0;
}

input{
    border-top:0.1px solid black;
height: 2.5rem;
outline: none;
}

input:focus{
border: 2px solid rgb(175, 165, 165);
}

.forgot-password-wrap{
    margin: 2rem 0 2rem 0;
display: flex;
flex-direction: row;
justify-content: space-between;
align-content: center;
line-height: 3rem;
}
.forgot-password-wrap a{
    margin-top: 0.5rem;
}

.checkbox-wrap{
    display: flex;
}
input[type=checkbox]{
    background: red;
    margin-right: 0.5rem;
    width: 1rem;
    /* line-height: 2rem; */
    align-self: center;
    /* height: 3rem; */
}
button{
    margin-top: 1rem;
    height: 2.5rem;
      background: black;
    color: white;
}

form>a{
    margin: 1.5rem;
    text-align: center;
}

form a:hover{
    text-decoration: underline;
}

</style>