<template>
  <div>
      <form action="" @submit.prevent="register">
         
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
          <button>Register</button>
      </form>
  </div>
</template>

<script>
export default {
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

<style>

</style>