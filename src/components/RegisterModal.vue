<template>
  <div class="main-register" v-if="registerShow" @click="$emit('click')" >
    
      <form action="" @submit.prevent="register" @click.stop>
          <h2>Create account</h2>
          <label for="">Email</label>
          <input type="text" v-model="email">
            <label for="">Password</label>
          <input type="password" v-model="password">
         <label for="">Name</label>
          <input type="text" v-model="name">
           <label for="">City</label>
          <input type="text" v-model="city">
           <label for="">Street</label>
          <input type="text" v-model="street">
           <label for="">Zip</label>
            <input type="text" v-model="zip">
          <button href="#">Register</button>
          <!-- <a href="" v-if="registerShow" @click="registerShow=!registerShow">Back to sign in</a> -->
      </form>
  </div>
</template>

<script>
export default {
   props:['registerShow'],
      data(){return{
        email:'',
        password:'',
        name:'',
        city:'',
        street:'',
        zip:'',

}},
methods:{
    register(){
        this.$store.dispatch('register',{
            email:this.email, 
            password:this.password,
            name:this.name, 
            city:this.city, 
            street:this.street,
            zip:this.zip, 
            } 

            )
    },
},

}
</script>

<style scoped>
/* .modal-fade{
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.3);
} */
form{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
     width: 300px;
    max-width: 300px;
   
    padding: 64px;
    display: flex;
    flex-direction: column;
    background: rgb(250 249 248);
    /* background: red; */
}   

h2{
    text-align: center;
    margin: 0 0 2rem 0;
}

label{
    margin: 0.5rem 0 0.5rem 0;
}

input{
    border-left: 0.1px solid black;
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

form>button{
    margin-top: 3rem;
    text-align: center;
}

form a:hover{
    text-decoration: underline;
}

form>a{
  text-align: center;
  margin-top: 0.5rem;
  text-decoration: underline;
}
</style>