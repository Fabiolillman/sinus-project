<template>
<div class="footer-rows">
  <div class="footer-layout">
      <div>
        <h3>Sinus</h3>
        <ul>
            <li> <a href="">Om oss</a></li>
            <li> <a href="">Bli medlem</a></li>
            <li> <a href="">Medlemskapsvillkor</a></li>
            <li> <a href="">Mina sidor</a></li>
        </ul>
      </div>
      <div>
        <h3>Information</h3>
        <ul>
            <li> <a href="">Hållbarhet</a></li>
            <li> <a href="">Just nu</a></li>
            <li> <a href="">Tjänster & service</a></li>
            <li> <a href="">Magasin</a></li>
        </ul>
      </div>
      <div>
        <h3>Hjälp</h3>
        <ul>
            <li> <a href="">Kontakt & kundservice</a></li>
            <li> <a href="">Köpvillkor</a></li>
            <li> <a href="">Presentkort</a></li>
            <li> <a href="">Cookies</a></li>
        </ul>
      </div>
      <div>
        <h3>Följ oss</h3>
        <div class="media-icons-position">
            <a href="https://www.instagram.com" target="_blank">
                <img class="media-icon-size" src="../assets/instagram-icon.png" alt="Instagram"></a>
            <a href="https://www.facebook.com" target="_blank">
                <img class="media-icon-size" src="../assets/facebook-icon.png" alt="Facebook"></a>
            <a href="https://www.youtube.com" target="_blank">
                <img class="media-icon-size" src="../assets/youtube-icon.png" alt="Play"></a>
        </div>
      </div>
  </div>
  <div class="copy-right">
      <p>Copyright <span>&#169;</span> 2022 Sinus</p>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
div {
    font-family: 'Raleway', sans-serif;
    background-color: #C1B0A9;
    text-align: left;
}

.footer-layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 10px 0px 10px 140px;
}

h3 {
    text-transform: uppercase; 
    margin-top: 1rem;
}

li {
    list-style: none;
}

ul:hover {
    padding: 0px;
    cursor: pointer;
}

.media-icons-position {
    display: flex;
    align-items: center;
    gap: 16px;
}

img.media-icon-size {
    width: 32px;   
}

.copy-right {
    text-align: center;
    padding: 2px ;
    font-size: 16px;
}

</style>