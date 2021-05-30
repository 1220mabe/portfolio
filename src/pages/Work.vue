<template>
<div class="work-back">
  <div class="work-title-shadow">
    <h1 class="content-title">Work</h1>
  </div>
  <ul class="works">
    <li class="card">
      <a href="https://masaru-abe.com/" target="_blank" class="card-img-a">
        <img class="card-img" src="../assets/work/portfolio.png" alt="">
      </a>
      <div class="card-content">
        <h1 class="card-title jp">ポートフォリオサイト</h1>
        <p class="card-text">This portfolio site</p>
        <div class="items">
          <div class="item">

            <img src="../assets/lang/html-5.svg" alt="logo" class="item-image">

          </div>
          <div class="item">
            <img src="../assets/lang/css-3.svg" alt="logo" class="item-image">
          </div>
          <div class="item">
            <img src="../assets/lang/javascript.svg" alt="logo" class="item-image">
          </div>
          <div class="item">
            <img src="../assets/lang/vue.svg" alt="logo" class="item-image">
          </div>
        </div>
        <br>

        <a href="https://masaru-abe.com/" class="card-link" target="_blank">Website</a>

        <a href="https://github.com/1220mabe/portfolio" class="card-link github-link" target="_blank">Github</a>
      </div>
    </li>

    <li class="card">
      <a href="https://teamqno.work/" target="_blank">
        <img class="card-img" src="../assets/work/teamqno.png" alt="">
      </a>
      <div class="card-content">
        <h1 class="card-title jp">Magic the Gathering<br>ファンサイト</h1>
        <p class="card-text">Magic the Gathering fan site</p>
        <div class="items">
          <div class="item">
            <img src="../assets/lang/python.svg" alt="logo" class="item-image">
          </div>
          <div class="item">
            <img src="../assets/lang/chart.png" alt="logo" class="item-image">
          </div>
          <div class="item">
            <img src="../assets/lang/wordpress.png" alt="logo" class="item-image">
          </div>
          <div class="item">
            <img src="../assets/lang/illustrator.svg" alt="logo" class="item-image">
          </div>
        </div>
        <br>
        <a href="https://teamqno.work/" class="card-link" target="_blank">Website</a>
        <a href="https://github.com/1220mabe/TeamQno" class="card-link github-link" target="_blank">Github</a>
      </div>
    </li>
  </ul>
  <div class="last"></div>
</div>
</template>

<script>
</script>


<style>
.works {
  display: inline-flex;
  list-style-type: none;
  padding-left: 0;
  text-align: center;
  padding-left: 15%;
  padding-right: 15%;
}

.works .items {
  text-align: center;
  padding-left: 0%;
  padding-right: 0%;
  margin-bottom: 5px;
  font-family: vdl-linegr, Orbitron, sans-serif;
}

.works .item {
  margin: 0px 0px;
  display: inline-block;
  width: 60px;
}

.works .item-comment {
  width: 100px;
}

.works .item-image {
  height: 40px;
  width: 40px;

}

.jp {
  font-weight: 100;
  font-family: 'M PLUS Rounded 1c', sans-serif;
}

.card-lang {
  font-weight: 500;
}

.card {
  display: inline-block;
  margin: 30px 60px;
  width: 350px;
  color: #EFE8D7;

}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  transition-duration: 0.4s;
  display: block;
  -webkit-filter: grayscale(1);
  filter: gray;
  filter: grayscale(1);
}

.card-content {
  padding: 20px;
}

.card-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #EFE8D7;
}

.card-text {
  color: #EFE8D7;
  font-size: 14px;
  line-height: 1.5;
}

.card-link {
  border: 2px solid #00aaff;
  background-color: #00aaff;
  text-decoration: none;
  color: #EFE8D7;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: 0.4s;
  font-weight: bold;
}

.card-link:hover {
  background-color: #00aaff;
  color: #EFE8D7;
  opacity: 0.3;
}


.github-link {
  border-color: #171515;
  background-color: #171515;
  color: #EFE8D7;
}

.github-link:hover {
  opacity: 0.3;
  background-color: #171515;
}

.work-title-shadow .content-title:before {
  position: absolute;
  top: 9.1%;
  left: 5%;
  right: 5%;
  content: "Work";
  opacity: 0.3;
  transform: rotateX(180deg);
  animation: zoomIn 3s linear;
  animation-fill-mode: both;
  color: transparent;
  text-shadow: 0px 0px 6px #EFE8D7;
}


.card-img:hover {
  -webkit-filter: grayscale(0);
  filter: none;
  filter: grayscale(0);
  transform: scale(1.05);
  transition-duration: 0.4s;
  overflow: hidden;
}

@media screen and (max-width: 1300px) {
  .works {
    display: inline-block;
    padding-left: 1%;
    padding-right: 1%;
  }

  .works .items {
    text-align: center;
    padding-left: 0%;
    padding-right: 0%;
    margin-bottom: 5px;
    font-family: vdl-linegr, Orbitron, sans-serif;
  }

  .works .item {
    margin: 0px 0px;
    display: inline-block;
    width: 60px;
  }

  .works .item-comment {
    width: 100px;
  }

  .works .item-image {
    height: 40px;
    width: 40px;
  }

  .card-link {
    border: 2px solid #00aaff;
    background-color: #00aaff;
    text-decoration: none;
    color: white;
    margin: 0 10px;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
  }

  .github-link {
    background-color: #171515;
    border-color: #171515;
  }



}

@media screen and (max-width: 1065px) {
  .work-title-shadow .content-title:before {
    top: 5.3%;
  }

}

@media screen and (max-width: 768px) {
  .work-title-shadow .content-title:before {
    top: 5.3%;
  }

}

@media screen and (max-width: 550px) {
  .card {
    width: 280px;
    margin: 30px 0;
  }


}
</style>
