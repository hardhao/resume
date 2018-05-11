<template>
<div class="bigresume">
  <div class="resume">
      <div class="rebg"></div>
      <h1>EasyHao</h1>
      <div class="top">
          <div class="lef">死神EasyHao</div>
          <div class="rig">超究极死亡台风索</div>
      </div>
      <div class="imgbg">
              <img src="../assets/timg5.jpeg" alt="">
      </div>
      <div class="mid">
          <div class="lianxi">
              <p>联系方式:</p>
              <p>微信：zjh19981122</p>
              <p>电话：1873357573</p>
          </div>
          <div class="rea">
              <p>技能</p>
              <div class="html same">
                  <span>HTML</span>
                  <div>
                      <span></span>
                  </div>
              </div>
              <div class="css same">
                  <span>CSS</span>
                  <div>
                      <span></span>
                  </div>
              </div>
              <div class="js same">
                  <span>JS</span>
                  <div>
                      <span></span>
                  </div>
              </div>

              <div class="vuejs same">
                  <span>Vuejs</span>
                  <div>
                      <span></span>
                  </div>
              </div>
              <div class="npm same">
                  <span>Npm</span>
                  <div>
                      <span></span>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
    name:'Resume'
}
</script>

<style scoped>
.bigresume{
    background-color: #ccc;
    overflow: hidden;
    height:1028px;
    padding-top: 280px;
    background-image: url('../assets/timg11.gif');  
    background-size:80%;
    background-position: 200px -200px;
}
.resume{
    width:768px;
    margin: 0 auto;
    overflow: hidden;
    background-color: rgba(120, 185, 223, 0.979);
    box-shadow: 0px 2px 2px 2px #e9e9e9;
    padding-bottom: 80px;
    box-shadow: 5px 5px 58px 8px rgb(42, 230, 236);
    opacity: .9;
    position: relative;
}
.rebg{
    position: absolute;
    width:384px;
    height: 100%;
    background-color: rgb(241, 218, 5);
    opacity: .5;
    box-shadow: 10px 10px 58px 8px #fff; 
}
h1{
    text-align: center;
    margin-top: 32px;
}
.top{
    margin-top:30px;
    overflow: hidden;
}
.lef,.rig{
    background-color: #000;
    color: #fff;
    float: left;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 12px;
}
.lef{
    margin-left: 272px;
}
.rig{
    margin-left: 50px;
}
.imgbg{
    width: 92px;
    height: 92px;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 40px;
    position: absolute;
    left: 44%;
}
.imgbg>img{
    width: 130px;
    height: 130px;
    margin-left: -20px;
    margin-top: -10px;
}
.mid{
    margin-top:100px;
}
.lianxi{
    float: left;
    margin-top: 50px;
    margin-left: 50px;
}
.lianxi>p{
    font-size: 14px;
    color: rgb(8, 119, 32);
    font-weight: bold;
    margin-top: 10px;
}
.lianxi>p:nth-child(1){
    font-size: 24px;
    color: black;
}
.rea{
    float: right;
    width: 300px;
}
.rea>p{
    width: 159px;
    margin-right: 72px;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}
.rea>.same{
    margin-top: 10px;
    float: left;
}
.same>span{
    width: 40px;
    float: left;
    color: #827B86;
    font-size: 14px;
    font-weight: bold;
}
.same>div{
    float: left;
    width: 213px;
    height: 8px;
    background-color: #ccc;
    margin-left: 20px;
    margin-top: 5px;
    position: relative;
}
.same>div>span{
    position: absolute;
    width:50px;
    height: 8px;
    background-color: #000;
}
.css>div>span{
    width: 70px;
}
.js>div>span{
    width: 20px;
}
.vuejs>div>span{
    width: 10px;
}
.npm>div>span{
    width: 40px;
}
</style>
