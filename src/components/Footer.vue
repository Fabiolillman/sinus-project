<template>
<div class="footer-rows">
  <div class="footer-layout">
      <div>
        <h3>Sinus</h3>
        <ul>
            <li>Om oss</li>
            <li>Bli medlem</li>
            <li>Medlemskapsvillkor</li>
            <li>Mina sidor</li>
        </ul>
      </div>
      <div>
        <h3>Information</h3>
        <ul>
            <li>Hållbarhet</li>
            <li>Just nu</li>
            <li>Tjänster & service</li>
            <li>Magasin</li>
        </ul>
      </div>
      <div>
        <h3>Hjälp</h3>
        <ul>
            <li>Kontakt & kundservice</li>
            <li>Köpvillkor</li>
            <li>Presentkort</li>
            <li>Cookies</li>
        </ul>
      </div>
      <div>
        <h3>Följ oss</h3>
        <div class="media-icons-position">
            <img class="media-icon-size" src="../assets/instagram-icon.png" alt="Instagram">
            <img class="media-icon-size" src="../assets/facebook-icon.png" alt="Facebook">
            <img class="media-icon-size" src="../assets/youtube-icon.png" alt="Play">
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
@import url('https://fonts.googleapis.com/css2?family=PT+Mono&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

div {
    font-family: 'Raleway', sans-serif;
    background-color: #C1B0A9;
    text-align: left;
}

div.footer-layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0px 256px;
}

h3 {
    text-transform: uppercase; 
    margin-top: 1rem;
}

li {
    list-style: none;
}

ul {
    padding: 0px;
}

div.media-icons-position {
    display: flex;
    align-items: center;
    gap: 16px;
}

img.media-icon-size {
    width: 32px;   
}

div.copy-right {
    text-align: center;
    padding: 5px;
    font-size: 12px; 
}

</style>