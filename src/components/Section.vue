<template>
  <section>
      <div class="heng"></div>
      <div class="square"></div>
      <div class="book">
          <div></div>
          <div class="same4"></div>
          <div class="same4 same1"></div>
          <div class="same4 same2"></div>
          <div class="same4 same3"></div>
          <router-link to="/resume"> <span>我的简历</span> </router-link>
      </div>
      <TopRig />
      
  </section>
</template>

<script>
import TopRig from './TopRig'
export default {
    name:'Section',
    components: {
    TopRig
  }
}
</script>

<style>
section{
    margin-top: 100px;
    overflow: hidden;
    background-color: rgb(152, 186, 231);
}
.heng{
    height: 27px;
    background-color:rgb(186, 179, 190);
}
.square{
    width: 187px;
    height: 112px;
    box-sizing: border-box;
    border: 27px solid rgb(186, 179, 190);
    margin-top: -27px;
    float: left;
    margin-left: 241px;
}
.book{
    float: left;
    width:300px;
    height:400px; 
    background:rgb(12, 35, 100);
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
    margin-top: 58px;
    margin-left: -240px;
    position: relative;
}
.book>div:nth-child(1){
    width:5px;
    height: 100%;
    float: left;
    background-color: #fff;
    margin-left: 15px;
}
.same4{
    width: 15px;
    height: 4px;
    background-color: #fff;
    position: absolute;
    top:80px;
}
.same1{
    top:160px;
}
.same2{
    top:240px;
}
.same3{
    top:320px;
}
.book>img{
    width: 250px;
    height: 250px;
    float: left;
    margin-top: 40px;
}
.book>a{
    padding: 30px 10px 30px 10px;
    width: 60px;
    text-decoration: none;
    float: left;
    font-weight: bold;
    margin-left:180px;
    margin-top: 60px;
    font-size: 24px;
    background-color: #fff;
    color: #000;
}
.book>a>span{
    border: 2px solid #000;
    float: left;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
