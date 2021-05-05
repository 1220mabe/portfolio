<template>
<div id="app" v-on:mousemove="callChildMethod()">
  <Mausestalker ref="child"></Mausestalker>

  <Header id="header"></Header>

  <div id="top-back">
    <div class="star-box">
      <div class="star"></div>
    </div>
    <div class="star-box_2">
      <div class="star_2"></div>
    </div>
    <div class="star-box_3">
      <div class="star_3"></div>
    </div>
    <kinesis-container class="container">
      <kinesis-element :strength="-50">
        <vue-particles color="#EFE8D7" :particleOpacity="0.5" :particlesNumber="120" shapeType="circle" :particleSize="3" linesColor="#EFE8D7" :lineLinked="false" :hoverEffect="false" :clickEffect="true" clickMode="push" class="particles">
        </vue-particles>
      </kinesis-element>
      <kinesis-element :strength="-25">
        <div class="rotate-hover">
          <div class="rotate-anime_2"><img class="" src="./assets/anime/zgzgcircle.svg" alt="anime"></div>
        </div>
      </kinesis-element>
    </kinesis-container>

  </div>
  <!--   <div class="rotate-anime"><img class="" src="./assets/anime/zgzgcircle.svg" alt="anime"></div>
 -->
  <div class="nav-res">
    <router-link to="/">Top</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/skill">Skill</router-link>
    <router-link to="/work">Work</router-link>
  </div>
  <transition>
    <router-view />
  </transition>
  <Footer id="footer"></Footer>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Mausestalker from './components/Mausestalker.vue'
import 'normalize.css'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Mausestalker,
  },

  methods: {
    callChildMethod() {
      this.$refs.child.getCursorCoordinate(event)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Quicksand&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
  color: #EFE8D7;
  font-style: normal;
  text-align: center;
}

#header {
  position: fixed;
}

#top-back {
  position: fixed;
  height: auto;
  width: 100%;
  background: linear-gradient(135deg, #011A3E, #0A63BB);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}

.particles {
  opacity: 0.2;
  z-index: 1;
  height: 100vh;
  width: auto;

}

.about-back {
  text-align: center;
  position: absolute;
  top: 5%;
  left: 5%;
  right: 5%;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.skill-back {
  text-align: center;
  position: absolute;
  top: 5%;
  left: 5%;
  right: 5%;
  bottom: 1%;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.work-back {
  text-align: center;
  position: absolute;
  top: 5%;
  left: 5%;
  right: 5%;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.nav-icon {
  font-size: 1.5em;
}

.comment {
  margin: 5px 0;
  font-weight: 500;
  color: #EFE8D7;
}

.link-content {
  color: #EFE8D7;
  text-decoration: none;
  min-width: 8%;
  font-size: 10px;
  text-align: center;
}

.top-text {
  color: #EFE8D7;
  font-size: 2.8rem;
}

.icon {
  font-size: 0.8em;
}

.text {
  font-weight: 500;
}


.content-title {
  font-family: vdl-linegr, sans-serif;
  color: #EFE8D7;
}



/* transition設定 */

/* About */
.about-back.v-enter {
  transform: translate(-200px, -100px);
  opacity: 0;
}

.about-back.v-enter-to {
  opacity: 1;
}

.about-back.v-enter-active {
  transition: all 1s 0s ease;
}

.about-back.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}

.about-back.v-leave-to {
  transform: translate(200px, 100px);
  opacity: 0;
}

.about-back.v-leave-active {
  transition: all .5s 0s ease;
}

/* Skill */
.skill-back.v-enter {
  transform: translate(-200px, -100px);
  opacity: 0;
}

.skill-back.v-enter-to {
  opacity: 1;
}

.skill-back.v-enter-active {
  transition: all 1s 0s ease;
}

.skill-back.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}

.skill-back.v-leave-to {
  transform: translate(200px, 100px);
  opacity: 0;
}

.skill-back.v-leave-active {
  transition: all .5s 0s ease;
}

/* Work */
.work-back.v-enter {
  transform: translate(-200px, -100px);
  opacity: 0;
}

.work-back.v-enter-to {
  opacity: 1;
}

.work-back.v-enter-active {
  transition: all 1s 0s ease;
}

.work-back.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}

.work-back.v-leave-to {
  transform: translate(200px, 100px);
  opacity: 0;
}

.work-back.v-leave-active {
  transition: all .5s 0s ease;
}

#app.top-footer {
  display: none;
}

#footer {
  opacity: 0.5;
  position: fixed;
  bottom: 0%;
  right: 1%;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.slide {
  display: none;
  margin-right: 10px;
}


/* Animation */

.rotate-anime {
  z-index: 1;
  user-select: none;
  /* CSS3 */
  -moz-user-select: none;
  /* Firefox */
  -webkit-user-select: none;
  /* Safari、Chromeなど */
  -ms-user-select: none;
  /* IE10かららしい */
  opacity: 0.4;
  position: absolute;
  width: 100px;
  top: 10px;
  right: 5%;
  z-index: 1;
  animation: rotate-anime 20s linear infinite;
}




.rotate-anime_2 {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  position: absolute;
  opacity: 0.3;
  width: 200px;
  right: 100px;
  bottom: 200px;
  animation: rotate-anime 20s linear infinite;

}

.rotate-hover {
  transition-duration: 0.7s;
}

.rotate-hover:hover {
  transform: scale(1.05);
  transition-duration: 0.7s;
}

@keyframes rotate-anime {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(-360deg);
  }
}




/* 流れ星 */

.star-box {
  position: absolute;
  top: 37%;
  left: 34%;
  height: 100px;
  width: 100px;
  transform: rotateZ(45deg);
  repeat: ;
}

.star-box_2 {
  position: absolute;
  top: 49%;
  left: 46%;
  height: 100px;
  width: 100px;
  transform: rotateZ(45deg);
  repeat: ;
}

.star-box_3 {
  position: absolute;
  top: 39%;
  left: 64%;
  height: 100px;
  width: 100px;
  transform: rotateZ(45deg);
  repeat: ;
}

.star {
  height: 0;
  width: 2px;
  background: linear-gradient(transparent, #EFE8D7);
  animation-name: shooting;
  animation-duration: 8s;
  animation-timing-function: linear;
  animation-delay: 4s;
  animation-iteration-count: infinite;
}

.star_2 {
  height: 0;
  width: 2px;
  background: linear-gradient(transparent, #EFE8D7);
  animation-name: shooting;
  animation-duration: 8s;
  animation-timing-function: linear;
  animation-delay: 4.5s;
  animation-iteration-count: infinite;
}

.star_3 {
  height: 0;
  width: 2px;
  background: linear-gradient(transparent, #EFE8D7);
  animation-name: shooting;
  animation-duration: 8s;
  animation-timing-function: linear;
  animation-delay: 5s;
  animation-iteration-count: infinite;
}

@keyframes shooting {
  0% {
    height: 0;
    opacity: 50%;
  }

  6.25% {
    height: 60px;
    opacity: 100%;
  }

  12.5% {
    height: 80px;
    opacity: 0;
  }

  12.51% {
    height: 0;
    opacity: 50%;
  }

  100% {
    height: 0;
    opacity: 50%;
  }
}

@media screen and (max-width: 2300px) {
  #top-back {
    position: fixed;
    height: 100%;
    width: 100%;
    background: linear-gradient(135deg, #011A3E, #0A63BB);
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
  }

  #footer {
    opacity: 0.5;
    position: fixed;
    bottom: 0%;
    right: 1%;
  }
}

@media screen and (max-width: 1300px) {
  .about-back {
    text-align: center;
    position: absolute;
    left: 2%;
    right: 2%;
  }

  .rotate-anime_2 {
    z-index: 0;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    position: absolute;
    opacity: 0.4;
    width: 100px;
    right: 20px;
    bottom: 100px;
    animation: rotate-anime 20s linear infinite;
  }

}

@media screen and (max-width: 768px) {
  .about-back {
    text-align: center;
  }

  /* .top-text {
    font-size: 25px;
  }

  #header {
    display: none;
  }

  .res {
    display: contents;
  }

  .nav-res {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 1;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .content-title {
    margin-bottom: 30px;
  } */
}


@media screen and (max-width: 450px) {
  .about-back {
    text-align: center;
  }

}
</style>
