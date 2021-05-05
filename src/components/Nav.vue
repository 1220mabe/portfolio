<template>
<div>
  <fall-down class ="nav-slide" :right='false' :isOpen="id" :crossIcon="true" :closeOnNavigation="true" :width="250">
    <router-link to="/" @click.native="change" class="nav-ham">Top</router-link>
    <router-link to="/about" @click.native="change" class="nav-ham">About</router-link>
    <router-link to="/skill" @click.native="change" class="nav-ham">Skill</router-link>
    <router-link to="/work" @click.native="change" class="nav-ham">Work</router-link>
  </fall-down>
    <div id="page-wrap"></div>
    <router-link to="/about" class="nav-button nav-about">About</router-link>
    <router-link to="/skill" class="nav-button nav-skill">Skill</router-link>
    <router-link to="/work" class="nav-button nav-work">Work</router-link>
</div>
</template>

<script>
import { FallDown } from 'vue-burger-menu'
export default {
  components: {
    FallDown,
  },

  methods: {
    data: {
        id: 'true'
    },
    change: function () {
      this.id = true;
    }
  }
}
</script>


<style>
ul {
  list-style: none;
}



.nav-button {
  position: relative;
  display: block;
  font-weight: bold;
  font-size: 24px;
  padding: 0.25em 0px 0px 0px;
  text-decoration: none;
  margin-top: 15px;
  outline: none;
  color: #EFE8D7;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.nav-button:before {
  position: absolute;
  content: '';
  width: 100%;
  height: 2px;
  top: 100%;
  left: 0;
  border-radius: 0.5px;
  background: #EFE8D7;
  transition: .25s;
}

.nav-button:hover:before {
  top: -webkit-calc(100% - 3px);
  top: calc(100% - 3px);
  height: 12.5px;
}


.nav-slide {
  display:none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}


/* vue-burger-button CSS */
.bm-burger-button {
      position: fixed;
      width: 42px;
      height: 30px;
      left:28px;
      top: 28px;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: #EFE8D7;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #EFE8D7;
    }

    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      opacity: 0.90;
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background: linear-gradient(135deg, #001630, #012C60);
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }
    .bm-overlay {
      background: #012C60;
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }



@media screen and (max-width: 1200px) {


}

@media screen and (max-width: 768px) {
  .nav-button {
    display: none;
  }
  .nav-slide {
    display:block;
  }


  .nav-ham {
    position: relative;
    display: block;
    font-weight: bold;
    padding: 0.25em 0px 0px 0px;
    text-decoration: none;
    margin-top: 15px;
    outline: none;
    color: #EFE8D7;
  }

  .nav-ham:before {
    position: absolute;
    content: '';
    width: 80px;
    height: 2px;
    top: 100%;
    left: 0;
    border-radius: 0.5px;
    background: #EFE8D7;
    transition: .25s;
  }

  .nav-ham:hover:before {
    top: -webkit-calc(100% - 3px);
    top: calc(100% - 3px);
    height: 14.5px;
  }





}

@media screen and (max-width: 450px) {

}
</style>
