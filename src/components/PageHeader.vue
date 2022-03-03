<template>
  <div class="home">
    
    <header>
      <div class="mainframe">

        <div class="sinuscard">
          
          <img src="../assets/sinus-logo 1.png" alt="">
        </div>
      
      <div class="icons">
          <form action="/" v-if="!checkedLoggedIn">
              <input type=hidden > 
              <input type=submit value="Sign Out" class="sign-out-btn">
              </form>
          <img src="../assets/ICON-User.png" alt="">
 
              <p @click="loginShow = !loginShow" v-if="checkedLoggedIn">Account</p>
              <p v-if="!checkedLoggedIn" class="username">{{currentUserData.name}}</p>
            
              
              
              <img src="../assets/ICON-Pin.png" alt="">
              <p>Find us!</p>
              <img src="../assets/ICON-Info.png" alt="">
              <p>My orders</p>
              <img src="../assets/ICON-Heart.png" alt="">
              <p>Favorites</p>
              <img src="../assets/ICON-_.png" alt="">
              <p>Help</p>
              <img src="../assets/ICON-Cart.png" alt="">
              <router-link to="/Cart">Cart</router-link>      
      </div>
          <Cart v-if="cartShow"/>
          <Login 
           v-if="loginShow"
           @click="loginShow=!loginShow"
          :loginShow="loginShow"
          />
    </div>
    <div class="categories">
            <router-link to="/">Home</router-link>
            <router-link to="/ProductPage">Our products</router-link>
            <router-link to="/ProductPage">What's new</router-link>
            <router-link to="/about">About us</router-link>

            <form class="searchwindow">
                <input class="searchbar" type="text" placeholder="Enter keyword" name="search">
                <button class="search" type="sumbit">    <img class="looking-glass" src="../assets/ICON-Lookingglass.png" alt=""></button>
            </form>
         
        </div>
        <!-- <button @click="calling">HELLO</button> -->
       
    </header>

  </div>
</template>

<script>
// @ is an alias to /src
import Cart from '../views/Cart.vue'
import Login from '../components/LoginModal.vue'
// import Register from '../components/RegisterModal.vue'

export default {
  components: {

    Login, 
    Cart,
    // Register
 
  },


  data(){return{
    loginShow:false,
    cartShow:false
  }},

  computed:{
                checkedLoggedIn(){   
                  console.log("this is " + this.$store.state.loggedUser)
                  return this.$store.state.loggedUser     
            }, 
              currentUserData(){      
              return this.$store.state.user       
            }, 
  },

  methods:{
  checkedLoggedIns(){   
                  console.log("Button click " + this.$store.state.loggedUser)
            }, 
            signOut(){   
              this.$store.state.loggedUser = true 
              this.$store.state.user={} 
            }, 
  }
 


  
}
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
}
/* template{
  background-color: #B5A183;
  height: 100%;
  width: 100%;
} */
body{
    background-color: #EADFD5;
}

header{
    width: 100%;
    height: 12rem;
    background-color: #C1B0A9;
    display: flex;
    flex-direction: column;

}

.mainframe{
   width: 100%;

    display: flex;
    flex-direction: row;
    
}

.sign-out-btn{
  border-radius: 5px;
  width: 4rem;
  height: 2rem;
  margin-right:1rem;
  background: rgba(99, 65, 65, 0);
  border: 2px solid black;
}



.sign-out-btn:hover{
  box-shadow: 0px 0px 6px 0px #000000;
  transition: 0.3s;
  cursor: pointer;
}
.icons p:hover{
transition: 0.3s;
text-decoration: underline;
cursor: pointer;
}

.icons p.username{
  cursor: default;
  text-decoration: none;
}

.icons{
    margin: 1rem;
   width: 70%;
   height: 30px; 
   display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-items: stretch;
    justify-content: flex-end;
    margin-left: 5rem;
}
p{
    font-size: 20px;
    margin: 5px 2rem 0 10px;
    font-family: 'Raleway', sans-serif;
}
.sinuscard{
    padding-top: 1rem;
    margin-left: 1rem;
}
.categories{
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    justify-items: stretch;
    margin-left: 20%;
    align-items: center;
}

a{
    font-family: 'Raleway', sans-serif, bold;
    font-size: 20px;
    margin-left: 2rem;
    text-decoration: none;
    color: black;
}
a:visited{
  text-decoration: none;
}
.searchwindow{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 30rem;
}
.searchbar{
    width: 100%;
    height: 40px;
    background-color: #352D1F;
    border: none;
    border-radius: 5px;
    font-family: 'Raleway', sans-serif, bold;
    font-size: 20px;
    color: #FFFFFF;
}

.looking-glass{
  height: 40px;
}
.search{
    width: 100%px;
    height: 100%;
    background-color: #B5A183;
    border: none;
    border-radius: 5px;
    margin-left: 5px;

}

/* .hero{
  width: 100%;
  height: 700px;
  background-repeat: no-repeat;
    background-attachment: fixed;
  background-position: center;
  background-size: 100% 100%;
} */
</style>