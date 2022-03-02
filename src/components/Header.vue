<template>
  <div class="home">
    
    <header>
      <div class="mainframe">

        <div class="sinuscard">
          <img src="../assets/sinus-logo 1.png" alt="">
        </div>
      
      <div class="icons">
          <img src="../assets/ICON-User.png" alt="">
              <p @click="loginShow = !loginShow" v-if="checkedLoggedIn" >Account</p>
              <img src="../assets/ICON-Pin.png" alt="">
              <p>Find us!</p>
              <img src="../assets/ICON-Info.png" alt="">
              <p>My orders</p>
              <img src="../assets/ICON-Heart.png" alt="">
              <p>Favorites</p>
              <img src="../assets/ICON-_.png" alt="">
              <p>Help</p>
              <img src="../assets/ICON-Cart.png" alt="">
              <p @click="cartShow = !cartShow" >Cart</p>      
      </div>
          <Cart v-if="cartShow"/>
          <Login 
           v-if="loginShow"
           @click="loginShow=!loginShow"
          :loginShow="loginShow"
          />
    </div>
    <div class="categories">
            <a href="">Women</a>
            <a href="">Men</a>
            <a href="">Kids</a>
            <a href="">What's new</a>
            <a href="">Skateboard</a>

            <form class="searchwindow">
                <input class="searchbar" type="text" placeholder="Enter keyword" name="search">
                <button class="search" type="sumbit">    <img class="looking-glass" src="../assets/ICON-Lookingglass.png" alt=""></button>
            </form>
            <p>OVER HERE</p>
             <p>{{currentUserData.email}}</p>
            <p>UNDER HERE</p>
        </div>
        <button @click="calling">HELLO</button>
       
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
                if(this.currentUserToken!==null){
                console.log(this.$store.state.user)
              
              return this.$store.state.user
              
                } else{
              return ""
                }
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