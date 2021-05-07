<template>
  <div>
    <!--カーソル-->
    <p id="cursor" v-bind:style="{ opacity: opacityA, top: mouseY + 'px', left: mouseX + 'px' }"></p>
    <!--マウスストーカー-->
    <div id="stalker" v-bind:style="{ opacity: opacityB, transform: 'translate('+posX+'px,'+posY+'px)' }"></div>

    <div id="stalker_2" v-bind:style="{ opacity: opacityB_2, transform: 'translate('+posX_2+'px,'+posY_2+'px)' }"></div>
    <div id="stalker_3" v-bind:style="{ opacity: opacityB_3, transform: 'translate('+posX_3+'px,'+posY_3+'px)' }"></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      mouseX: 0,
      mouseY: 0,
      posX: 0,
      posY: 0,
      posX_2: 0,
      posY_2: 0,
      posX_3: 0,
      posY_3: 0,
      opacityA: 0,
      opacityB: 0.6,
      opacityB_2: 0.4,
      opacityB_3: 0.2,
    }
  },
  methods: {
    getCursorCoordinate: function (event) {
      this.mouseX = event.pageX
      this.mouseY = event.pageY
      if (this.opacityA === 0) {
        this.opacityA = 1
      }
      setTimeout(function () {
        this.posX = `${this.mouseX - 40}`
        this.posY = `${this.mouseY - 14}`
        this.posX_2 = `${this.mouseX + 0}`
        this.posY_2 = `${this.mouseY + 10}`
        this.posX_3 = `${this.mouseX - 22}`
        this.posY_3 = `${this.mouseY - 60}`
        if (this.opacityB === 0) {
          this.opacityB = 1
        }
        if (this.opacityB_2 === 0) {
          this.opacityB_2 = 1
        }
        if (this.opacityB_3 === 0) {
          this.opacityB_3 = 1
        }
      }.bind(this), 100)
    }
  }
}
</script>

<style>
/* body {
  position: relative;
  height: 900px;
  background-color: #dcdcdc;
  cursor: none; bodyに対して設定することでページ全体でデフォルトカーソルを非表示にする
  text-align: center;
}

body a:hover{
cursor: none; aタグホバー時のカーソルも非表示にする
} */

#cursor{
  position: absolute;; /* 最初はページの左上に配置されるようにする */
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px; /* カーソルの焦点を中央に合わせる */
  z-index: 0; /*一番手前に来るように*/
  border-radius: 50%;
  opacity: 0; /*開いた瞬間非表示*/
  transition: transform 0.1s;
}

#stalker{
  position: absolute;
  box-shadow: 1px 0 5px 1px #ffffff;
  width: 3px;
  height: 3px;
  z-index: 1;/*一番手前に来るように*/
  background-color:  #EFE8D7;
  border-radius: 100%;
  opacity: 0; /*開いた瞬間非表示*/
  transition: transform 1.1s;
  pointer-events: none; /*マウス直下に常にstalker要素がくるのでホバー要素が働かなくなる。noneにすることでstalkerを無視する*/
}
#stalker_2{
  position: absolute;
  box-shadow: 1px 0 5px 1px  #ffffff;
  width: 5px;
  height: 5px;
  z-index: 1;/*一番手前に来るように*/
  background-color:  #EFE8D7;
  border-radius: 50%;
  opacity: 0; /*開いた瞬間非表示*/
  transition: transform 0.8s;
  pointer-events: none; /*マウス直下に常にstalker要素がくるのでホバー要素が働かなくなる。noneにすることでstalkerを無視する*/
}
#stalker_3{
  position: absolute;
  box-shadow: 1px 0 5px 1px  #ffffff;
  width: 8px;
  height: 8px;
  z-index: 1;/*一番手前に来るように*/
  background-color:  #EFE8D7;
  border-radius: 50%;
  opacity: 0; /*開いた瞬間非表示*/
  transition: transform 0.5s;
  pointer-events: none; /*マウス直下に常にstalker要素がくるのでホバー要素が働かなくなる。noneにすることでstalkerを無視する*/
}
</style>
