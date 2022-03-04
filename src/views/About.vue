<template>
  <div class="about">
   <PageHeader/>

    <div class="textarea">
    <h1>About us:</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum in dolores animi labore, repellat ipsum quod voluptatem voluptatibus. Optio quidem provident consequuntur ullam voluptate vel explicabo molestias ad. Quia, porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit quo, qui facere itaque placeat? Fugit ad molestiae nihil dicta, magnam repudiandae, neque quis tempore cupiditate illum nesciunt. Cum, dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit eveniet impedit? Eum blanditiis numquam deserunt commodi voluptatem rem aperiam nobis itaque rerum sed, adipisci iure similique qui illum. Illo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum in dolores animi labore, repellat ipsum quod voluptatem voluptatibus. Optio quidem provident consequuntur ullam voluptate vel explicabo molestias ad. Quia, porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit quo, qui facere itaque placeat? Fugit ad molestiae nihil dicta, magnam repudiandae, neque quis tempore cupiditate illum nesciunt. Cum, dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit eveniet impedit? Eum blanditiis numquam deserunt commodi voluptatem rem aperiam nobis itaque rerum sed, adipisci iure similique qui illum. Illo.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum in dolores animi labore, repellat ipsum quod voluptatem voluptatibus. Optio quidem provident consequuntur ullam voluptate vel explicabo molestias ad. Quia, porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit quo, qui facere itaque placeat? Fugit ad molestiae nihil dicta, magnam repudiandae, neque quis tempore cupiditate illum nesciunt. Cum, dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit eveniet impedit? Eum blanditiis numquam deserunt commodi voluptatem rem aperiam nobis itaque rerum sed, adipisci iure similique qui illum. Illo.</p>
    <img class="sinus" src="../assets/sinus-logo 1.png" alt="">
  </div>
  </div>
</template>
<script>

import PageHeader from "../components/PageHeader.vue"

export default {
  components:{
    PageHeader
  },
 
data(){return{

}},
 
}
</script>

<style>
.about{
/* display: flex;
flex-direction: column;
align-items: center; */
background-color: #EADFD5;
/* width: 100%;
height: 1200px; */

}
.textarea{
display: flex;
flex-direction: column;
align-items: center;
padding-left: 20rem;
padding-right: 20rem;
padding-top: 5rem;
}
h1{
  font-family: 'Raleway', sans-serif;
  font-size: 35px;
  padding: 1rem;
}
p{
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  line-height: 1.6;
  line-break: strict ;
}

.sinus{
  padding-top: 5rem;
  
}
</style>