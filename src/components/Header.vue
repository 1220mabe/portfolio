<template>
<div class="header">
  <div class="header-inner">
    <h1 class ="top-h1">
      <router-link to="/" class="title">Masaru Abe Portfolio</router-link>
    </h1>
    <Nav class="nav"></Nav>
  </div>
</div>
</template>

<script>
import Nav from './Nav.vue'

export default {
  components: {
    Nav
  },
}
</script>

<style>

.header {
  margin-left: 1.5%;
  text-align: left;
  text-decoration: none;
  color: #EFE8D7;
  top: 0;
  width: 100%;
  z-index: 1;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.title {
  text-decoration: none;
  color: #EFE8D7;
  padding: 20px 5px;
  margin: unset;
  cursor: pointer;

}
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Quicksand&display=swap');


.nav {
  position: absolute;
}

@media screen and (max-width: 1200px) {

}

@media screen and (max-width: 768px) {
  .top-h1 {
    font-size: 1.3em;
    display: none;
  }

}

@media screen and (max-width: 450px) {

}

</style>
