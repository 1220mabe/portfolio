<template>
<div class="skill-back">
<div class="skill-title-shadow">
<h1 class="content-title">Skill</h1>
        </div>
        <div>
            <h2>Language</h2>
            <div class="items">
              <div class="item">
                  <img src="../assets/lang/C.svg" alt="logo" class="item-image">
                  <h3>C</h3>
              </div>
              <div class="item">
                  <img src="../assets/lang/C++.svg" alt="logo" class="item-image">
                  <h3>C++</h3>
              </div>
              <div class="item">
                  <img src="../assets/lang/C-sharp.svg" alt="logo" class="item-image">
                  <h3>C#</h3>
              </div>
              <div class="item">
                  <img src="../assets/lang/java.svg" alt="logo" class="item-image">
                  <h3>Java</h3>
              </div>
              <div class="item">
                  <img src="../assets/lang/python.svg" alt="logo" class="item-image">
                  <h3>Python </h3>
              </div>
                <div class="item">
                    <img src="../assets/lang/html-5.svg" alt="logo" class="item-image">
                    <h3>html</h3>
                </div>
                <div class="item">
                    <img src="../assets/lang/css-3.svg" alt="logo" class="item-image">
                    <h3>css</h3>
                </div>
                <div class="item">
                    <img src="../assets/lang/javascript.svg" alt="logo" class="item-image">
                    <h3>JavaScript</h3>
                </div>
            </div>


            <h2>Framework</h2>
            <div class="items">
                <div class="item">
                    <img src="../assets/lang/vue.svg" alt="logo" class="item-image">
                    <h3>Vue.js</h3>
                </div>
                <div class="item">
                    <img src="../assets/lang/chart.png" alt="logo" class="item-image">
                    <h3>Chart.js</h3>
                </div>
            </div>

            <h2>Database</h2>
            <div class="items">
                <div class="item">
                    <img src="../assets/lang/sqlserver.png" alt="logo" class="item-image">
                    <h3>SQL Server</h3>
                </div>
                <div class="item">
                    <img src="../assets/lang/postgresql.svg" alt="logo" class="item-image">
                    <h3>PostgreSQL</h3>
                </div>
                <div class="item">
                    <img src="../assets/lang/oracle.svg" alt="logo" class="item-image">
                    <h3>Oracle</h3>
                </div>
            </div>

            <h2>Design</h2>
            <div class="items">
                <div class="item">
                    <img src="../assets/lang/photoshop.svg" alt="logo" class="item-image">
                    <h3>Photoshop</h3>
                </div>
                <div class="item">
                    <img src="../assets/lang/illustrator.svg" alt="logo" class="item-image">
                    <h3>Illustrator</h3>
                </div>
                <div class="item">
                    <img src="../assets/lang/xd.svg" alt="logo" class="item-image">
                    <h3>Xd</h3>
                </div>
            </div>

            <h2>Other</h2>
            <div class="items">
                <div class="item">
                    <img src="../assets/lang/git.svg" alt="logo" class="item-image">
                    <h3>Git</h3>
                </div>
                <div class="item">
                    <img src="../assets/lang/github.svg" alt="logo" class="item-image">
                    <h3>GitHub</h3>
                </div>
                <div class="item">
                    <img src="../assets/lang/subversion.svg" alt="logo" class="item-image">
                    <h3>Subversion</h3>
                </div>
                <div class="item">
                    <img src="../assets/lang/wordpress.png" alt="logo" class="item-image">
                    <h3>WordPress</h3>
                </div>
            </div>
            <div class="last"></div>
        </div>
  </div>
</template>

<script>

</script>

<style>


.items{
    text-align: center;
    padding-left: 15%;
    padding-right: 15%;
    margin-bottom: 50px;
    font-family: vdl-linegr, Orbitron,sans-serif;
}

.item{
    margin :10px 30px;
    display: inline-block;
    width: 100px;
}

.item-comment{
    width: 100px;
}

.item-image{
    height: 50px;
    width: 50px;
  transition-duration: 0.2s;
}

.last{
  padding-bottom: 40px;
}

.item-image:hover{
  transform: scale(1.2);
  transition-duration: 0.3s;
}

.skill-title-shadow .content-title:before {
  position: absolute;
  top: 4.5%;
  left: 5%;
  right: 5%;
  content: "Skill";
  opacity: 0.3;
  transform: rotateX(180deg);
  animation: zoomIn 3s linear;
  animation-fill-mode: both;
  color: transparent;
  text-shadow: 0px 0px 6px #EFE8D7;
}

.skill-back h3{
  transition-duration: 0.2s;
}
.skill-back h3:hover{
  transform: scale(1.1);
  transition-duration: 0.3s;
}

.skill-back h2{
  margin-top: 40px;
  text-decoration:underline #EFE8D7 ;
  font-weight: 800;
}

.icon{
    margin-top: 30px;
}


@media screen and (max-width: 768px) {
  .items{
      text-align: center;
      padding-left: 8%;
      padding-right: 8%;
      margin-bottom: 20px;
      font-family: vdl-linegr, Orbitron,sans-serif;
  }

  .item{
      margin :8px 13px;
      display: inline-block;
      width: 100px;
  }

  .item-comment{
      width: 100px;
  }

  .item-image{
      height: 40px;
      width: 40px;
  }
  h3{
    font-size: 0.7em;
  }
}

@media screen and (max-width: 525px) {
  .items{
      text-align: center;
      padding-left: 7%;
      padding-right: 7%;
      margin-bottom: 19px;
      font-family: vdl-linegr, Orbitron,sans-serif;
  }

  .item{
      margin :7px 2px;
      display: inline-block;
      width: 100px;
  }

  .item-comment{
      width: 100px;
  }

  .item-image{
      height: 30px;
      width: 30px;
  }
  h3{
    font-size: 0.6em;
  }
}

</style>
