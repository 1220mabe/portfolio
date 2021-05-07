<template>
<div class="about-back">
  <div>
    <div class="about-title-shadow"><h1 class="content-title">Masaru Abe</h1></div>
    <div class="about">
      <div class="me">
        <p class="photo">
          <img class="section-grip__main-image" src="../assets/photo/photo.png" alt="phtoto">
        </p>
        <div class="contact">
          <img class="section-grip__sub-image" src="../assets/icon/mail.png" alt="mail">
          <p>1220mabe@gmail.com</p>
        </div>
        <div class="contact">
        <img class="section-grip__sub-image" src="../assets/icon/twitter.png" alt="phtoto">
        <p>@Mabe_1220</p>
        </div>
        <div class="contact">
        <img class="section-grip__sub-image" src="../assets/icon/github.png" alt="phtoto">
        <p>1220mabe</p>
      </div>
      </div>
      <div class="me">
        <h2><font-awesome-icon icon="pen" class="icon" /> 経歴</h2>
        <h3>●1992年12月 誕生</h3>
        <p class="text">岩手県紫波町で学生まで過ごす。小学校の同級生は9人というのんのんびよりな地域で、ザリガニをとったり、サッカーをして過ごす。<br><br></p>

        <h3>●2011年3月 岩手県立盛岡第一高等学校 卒業</h3>
        <p class="text">ラグビー部に入部し、キャプテンも勤めた。部活に気持ちがのっていたため授業は常に凌ぎに徹した。<br><br></p>

        <h3>●2015年3月 電気通信大学 情報理工学部 情報・通信工学科 卒業</h3>
        <p class="text">専攻は超高層大気物理学で、卒業研究テーマはオーロラ。貧乏性すぎてMicrosoft Officeを嫌い、LaTexとApache OpenOfficeで凌ぐ。<br><br></p>
        <h3>●2017年3月 電気通信大学大学院情報システム学研究科 中退</h3>
        <p class="text">学部生時代と研究室が変わってしまい、モチベーションを保つことができなくなり、就職へ。<br><br></p>
        <h3>●2017年4月 株式会社日立ソリューションズ 入社</h3>
        <p class="text">愛知県で製造業向け製品管理パッケージ導入やCAD製品カスタマイズなどのSI事業を実施。<br><br></p>
        <h3>●2019年10月 アマノ株式会社 入社</h3>
        <p class="text">小・中・大企業向けに人事労務管理パッケージや入退室管理システムを導入<br><br></p>
        <h3>●2020年11月 デジタルハリウッドSTUDIObyLIG上野校 入校</h3>
        <p class="text">コロナ禍により、家にいる時間が長くなり以前から興味のあったWebやデザインを学習。<br><br></p>
        <h2><font-awesome-icon icon="pen" class="icon" /> 資格・免許</h2>
        <p class="text">●普通自動車免許</p>
        <p class="text">●基本情報技術者</p>
        <p class="text">●ウェブデザイン技能検定3級</p>
        <p class="text">●ポケモンカードゲームイベントオーガナイザー</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap');

.about {
  display: inline-flex;
  margin-left: 5%;
  margin-right: 5%;
}
.photo{
  margin-top: 30px;
}

p.photo img {
  border-radius: 10px;
}

.section-grip__sub-image{
  margin-right: 8px;
  width: 43px;
  height: 43px;
}

.contact {
  margin-top: 5px;
  display: flex;
  font-size: 1.0em;
}
.contact p{
  user-select:text;
  -moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
}


.about h2{
  text-decoration: underline solid  #EFE8D7;
}

.about .text{
  font-family: 'M PLUS Rounded 1c', sans-serif;
}


.me {
  text-align: left;
  position: relative;
  margin: 0 20px;
}

.text {
  position: relative;
  font-weight: 300;
}

.sam {
  position: relative;
  text-align: center;
}

.link {
  position: relative;
  display: inline-flex;
  width: 30%;
  justify-content: center;
}

.about-title-shadow .content-title:before {
  position: absolute;
  top: 5.8%;
  left: 5%;
  right: 5%;
  content: "Masaru Abe";
  opacity: 0.3;
  transform: rotateX(180deg);
  animation: zoomIn 3s linear;
  animation-fill-mode: both;
  color: transparent;
  text-shadow: 0px 0px 6px #EFE8D7;
}


.link-icon {
  position: relative;
  margin: 0 10px;
  margin-bottom: 20px;
}

.web-icon {
  position: relative;
  position: relative;
  font-size: 2em;
  background-color: white;
  padding: 0.3em;
  border-radius: 50%;
}

.web-icon:hover {
  color: white;
}

.twitter {
  color: #1DA1F2;
}

.twitter:hover {
  background-color: #1DA1F2;
}

.mail {
  color: #DD5144;
}

.mail:hover {
  background-color: #DD5144;
}

.github {
  color: #171515;
}

.github:hover {
  background-color: #171515;
}


@media screen and (max-width: 1600px) {
  .about-title-shadow .content-title:before {
    top: 5.0%;
  }
}
@media screen and (max-width: 1300px) {
  .about {
    flex-direction: column;
    margin-left: 15%;
  }

  .me {
    margin: 0 auto;
  }
  .section-grip__main-image{
    margin: 0 auto;
    width: 90%;
    height: 90%;
  }

  .contact {
    margin-top: 0px;
    display: inline-flex;
    font-size: 1.0em;
  }
  .section-grip__sub-image{
    margin-top: 10px;
    margin-left: 15px;
    width: 25px;
    height: 25px;
  }

  .about h2{
    font-size: 1.2rem;
  }

  .about h3{
    font-size: 1.0rem;
  }

  .me .text{
    font-size: 0.8rem;
  }

  .about-title-shadow .content-title:before {
    top: 3.9%;
  }

}


@media screen and (max-width: 568px) {

  .section-grip__main-image{
    position: relative;
    margin: 0 auto;
    width: 300px;
    height: 300px;
  }
}

</style>
