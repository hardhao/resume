<template>
  <header>
      <div class="top">
          <img src="../assets/time.jpeg" alt="">
          <p>Zjh 的家</p>
      </div>
      <div class="wel">
          <div class="imgbg">
              <img src="../assets/timg5.jpeg" alt="">
          </div>
          <p>Welcome to My Home</p>
      </div>
  </header>
</template>

<script>
export default {
    name:'Header'
}
</script>

<style scoped>
.top{
    height: 100px;
    background-color: #fff;
}
.top>img{
    width: 40px;
    height: 40px;
    margin-top: 30px;
    margin-left: 30px;
    float: left;
}
.top>p{
    line-height: 100px;
    float: left;
    margin-left: 20px;
    margin-top: -2px;
    font-size: 24px;
    color: rgb(229, 245, 6);
}
.wel{
    height: 378px;
    background-color:rgb(228, 100, 14);
    padding-top: 80px;
}
.imgbg{
    width: 168px;
    height: 168px;
    background-color: #ccc;
    border-radius: 50%;
    overflow: hidden;
}
.imgbg>img{
    width:250px;
    height:250px;
    margin-left: -40px;
    margin-top: -20px
}
.wel>p{
    text-align: center;
    font-size: 30px;
    color: lightgreen;
}
</style>
