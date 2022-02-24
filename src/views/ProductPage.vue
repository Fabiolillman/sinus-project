<template>
<div>
     
  <div class="product-page-main"> 
     <div class="sales">MEGA SALE 30% OFF</div>
      <header>
          
          <div class="link-pathing">    
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
       <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
          </div>
          <div class="line-break"></div>
          <p>Risus ultricies tristique nulla aliquet enim tortor at auctor. Aliquam nulla facilisi cras fermentum odio eu. Sed enim ut sem viverra aliquet eget sit amet tellus. Urna duis convallis convallis tellus id!</p>
      </header>
      <main>
          <div class="top-main">
              <div class="top-text-wrap">
              <h2>Dummy text</h2>
              <p>Showing: _Results_</p>
              </div>
              <select name="" id="">
                  <option value="">Price Acending</option>
                  <option value="">Price Decending</option>
                  <option value="">Size</option>
              </select>
          </div>
          <div class="aside-wrap">
          <aside class="filter-columns">
              <div class="filter-box filter-box-color">
              <h2>Color</h2>
              <a href="">Gray</a>
              <a href="">Red</a>
              <a href="">Green</a>
              <a href="">Blue</a>
              <a href="">Purple</a>
              </div>
                <div class="filter-box filter-box-size">
              <h2>Size</h2>
              <div class="button-wrap">
              <a href="">XL</a>
              <a href="">S</a>
              <a href="">M</a>
              <a href="">L</a>
              <a href="">XL</a>
               <a href="">XXL</a>
               </div>
              </div>
          </aside>
          <aside class="product-list"></aside>
          </div>
      </main>
      <a href="" class="back-to-top">Back to top</a>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
    text-decoration: none;
    padding: 0;
    margin: 0;
}
.product-page-main{
    max-width: 90rem;
    background: #EADFD5;
    margin: auto;
    text-align: center;
}
.sales{
    width: 100%;
    height: 2rem;
    background: #C22323;
    color: WHITE;
    display: flex;
    justify-content: center;
    align-items: center;
}
.line-break{
    width: 90%;
    height: 0.18rem;
    background: #000000;
    margin: auto;
}

header p{
    margin: 2rem;
    font-family: Raleway;
font-style: italic;
font-weight: normal;
}

.top-main{
    margin: auto;
    width: 90%;
    display: flex;
    flex-direction: row;
    /* background: yellow; */
    justify-content: space-between;
}
select{
    width:17rem;
    height: 3rem;
    background: #352D1F;
    color: white;
}
.top-main select{
margin-top: 1rem;

}


.top-text-wrap h2{
  font-size: 2.2rem;
}

.top-text-wrap p{
  font-size: 1.5rem;
}

.aside-wrap{
    padding-top: 2rem;
    margin: auto;
    width: 90%;
    display: flex;
    flex-direction: row;
}

.filter-columns{
    width: 40%;
     max-width: 15rem;
    /* background: #C22323; */
    
}
.product-list{
    height: 400px;
    width:60%;
   
    /* background: yellow; */
}
.top-main{
   margin: auto;
}
.filter-box {
height: 13rem;
border-bottom: 2px solid black;
}

.filter-box h2{
    padding-bottom: 0.8rem;
}

.filter-box-color{
    text-align: start;
    display: flex;
    flex-direction: column;
}

.filter-box-color a{
    font-size: 1.3rem;
    padding: 0.1rem 1rem 0.1rem 1rem;
    text-align: start;
}

a:visited{
    color: black;
}

.filter-box-size {
    text-align: start;
    margin-top: 1.5rem;
    /* background: #352D1F; */
  
}

.button-wrap{
    
    text-align: center;
     padding: 0.1rem 1rem 0.1rem 1rem;
    max-width: 40%;
  display: grid;
   grid-template-columns: 3rem 3rem 3rem;
  grid-template-rows: 1fr 1fr; 
  column-gap: 10px;
  row-gap: 10px;
}

.filter-box-size a{
    border-radius: 10px;
    /* font-siz */
    /* width: 30px; */
    /* height: 30px; */
  
    background: #B5A183;
    padding: 1rem;
    box-sizing: border-box;
}
</style>