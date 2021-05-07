<template>
<div id="main">

  <kinesis-container class="container">
    <kinesis-element :strength="15">
      <transition-group tag="div" class="textbox" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:before-leave="beforeEnter" v-on:leave="leave">
        <div class="text-square" v-for="(datas,index) in textModel" :key="index">
          <h2>{{datas}}</h2>
        </div>
      </transition-group>

    </kinesis-element>
    <kinesis-element :strength="15">
      <transition-group tag="div" class="textbox-mobile" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:before-leave="beforeEnter" v-on:leave="leave">
        <div class="text-square" v-for="(datas,index) in textModel" :key="index">
          <h2>{{datas}}</h2>
        </div>
      </transition-group>
    </kinesis-element>
  </kinesis-container>
</div>
</template>

<script>
export default {
  name: "Transitiongroup",
  data() {
    return {
      show: false,
      text: "Masaru Abe Portfolio",
      textModel: [],
    }
  },
  mounted() {
    this.textModel = this.text.split('')
  },
  computed: {
    textShow() {
      const text = this.show ? 'Remove' : 'Show'
      return text
    }
  },
  methods: {
    beforeEnter(el) {
      let x = (Math.random() - 0.5) * 1600
      let y = (Math.random() - 0.5) * 1600
      let ss = Math.random() + 1
      let rr = (Math.random() - 0.5) * 200

      el.style.opacity = 0
      el.style.transform =
        "translate(" + x + "px," + y + "px)rotate(" + rr + "deg)scale(" + ss + ")"
    },
    enter(el) {
      setTimeout(() => {
        el.style.opacity = 1
        el.style.transform = "translate(0px,20px)"
      }, 0)
    },
    beforeLeave(el) {
      el.style.opacity = 1
      el.style.transform = "translate(0px,20px)"
    },
    leave(el) {
      setTimeout(() => {
        let x = (Math.random() - 0.5) * 400
        let y = (Math.random() - 0.5) * 400
        let ss = Math.random() + 1
        let rr = (Math.random() - 0.5) * 200
        el.style.opacity = 0
        el.style.transform =
          "translate(" + x + "px," + y + "px)rotate(" + rr + "deg)scale(" + ss + ")"
      }, 0)
    },
    gather() {
      // control the gather or scatter
      this.show = !this.show
    }
  },
}
</script>


<style>
.textbox {
  font-family: vdl-linegr,  Orbitron,sans-serif;
  color: #EFE8D7;
  display: grid;
  justify-content: center;
  grid-template-columns: 49px 48px 48px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 25px 30px 35px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.text-square {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s cubic-bezier(0, .08, .05, 1);
  animation: gapping 0.6s ease-in-out;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}

@keyframes gapping {
  from {
    margin: 0px;
  }

  to {
    margin: 4px;
  }
}

.textbox div {
  transition: all 2.5s cubic-bezier(0, .08, .05, 1);
}

#main h2 {
  font-size: 50px;
  color: #EFE8D7;
}

#main .textbox:before {
  font-size: 50px;
  letter-spacing: 10px;
  position: absolute;
  left: -24%;
  width: 150%;
  justify-content: center;
  top: 1.6em;
  content: "Masaru Abe Portfolio";
  opacity: 0.1;
  transform: rotateX(180deg);
  animation: zoomIn 8s linear;
  animation-fill-mode: both;
  color: transparent;
  text-shadow: 0px 0px 6px #EFE8D7;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}



.textbox-mobile {
  display: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}


#main {
  font-family: vdl-linegr,  Orbitron,sans-serif;
  color: #EFE8D7;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateY(-10%) translateX(-50%);
}

#main .top-text:before {
  position: absolute;
  width: 100%;
  top: 1.1em;
  content: "Masaru Abe Portfolio";
  opacity: 0.3;
  transform: rotateX(180deg);
  animation: zoomIn 8s linear;
  animation-fill-mode: both;
  color: transparent;
  text-shadow: 0px 0px 6px #EFE8D7;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

@keyframes zoomIn {
  0% {
    opacity: 0;
  }

  45% {
    opacity: 0;
  }

  100% {
    opacity: 0.3;
  }
}

.vue-typer .custom.char {
  color: #EFE8D7;
}


@media screen and (max-width: 1200px) {

 .textbox{
  display: none;
}

  .textbox-mobile {
    font-family: vdl-linegr,  Orbitron,sans-serif;
    color: #EFE8D7;
    display: grid;
    justify-content: center;
    grid-template-columns: 32px 32px 28px 28px 28px 32px 32px 28px 28px 28px;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .text-square {
    height: 32px;
  }
  .textbox-mobile div {
    transition: all 2.5s cubic-bezier(0, .08, .05, 1);
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  #main h2 {
    font-size: 28px;
    color: #EFE8D7;
  }
}

@media screen and (max-width: 768px) {

  .res {
    display: contents;
  }

}

@media screen and (max-width: 610px) {}
</style>
