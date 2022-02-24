<template>
<div class="homepage">
  <Header/>

  <main>
    <div :style="{backgroundImage:'url(https://s3-eu-west-1.amazonaws.com/press.visitsweden.com/original_images/david-becker-58X3XfxxevU-unsplash-CMSTemplate.jpg)'}" class="hero">
    
    <img src="../assets/sinus-skateboard-northern-lights.png" alt="" class="north-skate">
    <div class="text">
      <h3 class="collection">ENVIRONMENTAL <br> COLLECTION</h3>
      <a href="" class="shopNow">Shop now ></a>
    </div>
    </div>
  </main>
  
  <Footer/>
</div>
</template>

<script>


import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
export default {
  components: {
    Header,
    Footer

  },
  data() {
    
  },
}
</script>

<style>

  

.hero{
  width: 100%;
  height: 700px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
} 

.north-skate{
  width: 200px;
}

.collection{
  color: white;
  font-family: 'Raleway', sans-serif;
  padding-top: 12rem;
  font-size: 70px;
  
}
.shopNow{
  color: white;
  font-family: 'Raleway', sans-serif;
  padding-top: 5rem;
  font-size: 40px;
  margin-left: 8rem;
  text-decoration: underline;
  
}
.text{
  display: flex;
  flex-direction: column;

}
</style>