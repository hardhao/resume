<template>
<div class="bigmypic">
  <div class="mypic">
      <div class="top">
          <img src="../assets/time.jpeg" alt="">
          <p><router-link to="/">Zjh的家</router-link> > 我的相册</p>
      </div>
      <div class="title">
          <ul>
              <li>游戏</li>
              <li>生活</li>
              <li>学习</li>
          </ul>
      </div>
      <div class="node">
          <p>干就完事了</p>
          <div v-masonry transition-duration="0.3s" item-selector=".item" class="grid">
          <div class="grid-sizer"></div>
          <div v-masonry-tile :key="index" class="item" v-for="(item, index) in blocks">
                <img :src="`/timg${item.id}.jpeg`">
          </div>
          </div>
          <!-- <img src="../assets/timg14.jpeg" alt="">
          <img src="../assets/timg11.jpeg" alt="">
          <img src="../assets/timg12.jpeg" alt="">
          <img src="../assets/timg13.jpeg" alt="">
          <img src="../assets/timg15.jpeg" alt="">
          <img src="../assets/timg16.jpeg" alt="">
          <img src="../assets/timg17.jpeg" alt="">
          <img src="../assets/timg18.jpeg" alt="">
          <img src="../assets/timg19.jpeg" alt=""> -->
      </div>
  </div>
  
  </div>
</template>

<script>
export default {
    name:'MyPic',
    data:() => ({
        blocks:[
            {
                id:'14',
            },
            {
                id:'11',
            },
            {
                id:'12',
            },
            {
                id:'13',
            },
            {
                id:'15',
            },
            {
                id:'16',
            },
            {
                id:'17',
            },
            {
                id:'18',
            },
            {
                id:'19',
            },
        ]
    })
}
</script>

<style scoped>
.bigmypic{
    background-color: #ccc;
    padding-top: 100px;
    overflow: hidden;
    background-image: url('../assets/timg9.gif');
    background-size:cover;
    background-position: 150px 100px;
    }
.mypic{
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 5px 5px 58px 8px rgb(168, 166, 166);
    opacity: .8;
}
.top{
    height: 100px;
    background-color: #fff;
    margin-bottom: 20px;
}
.top>img{
    width: 40px;
    height: 40px;
    margin-top: 30px;
    margin-left: 30px;
    float: left;
}
.top>p,.top>p>a{
    line-height: 100px;
    float: left;
    margin-left: 20px;
    margin-top: -2px;
    font-size: 24px;
    color: rgb(229, 245, 6);
}
.top>p>a{
    text-decoration: none;
    margin-left: -10px;
    float: left;
    margin-top: 0;
    margin-right: 10px;
}
.title{
    background: rgb(87, 109, 170);
    width: 390px;
    height:985px;
    float: left;
}
ul{
    margin-top: 50px;
    margin-left: 40px;
}
li{
    list-style: none;
    font-size: 18px;
    margin-top: 30px;
    color: rgb(204, 190, 190);
    cursor: pointer;
}
li:hover{
    color: #fff;
}
.node{
    width: 810px;
    /* height: 740px; */
    background-color: rgb(136, 205, 218);
    padding-top: 20px;
    float: right;
    padding-bottom:50px;
    padding-left: 40px;
    padding-right:40px;
}
.node>p:nth-child(1){
    width: 700px;
    border-radius: 10px;
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    background-color:cyan;
    text-align: center;
    line-height: 60px;
    margin-top: 30px;
}
.node>p:nth-child(2){
    font-size: 18px;
    background-color: #fff;
    padding: 20px 100px 20px 100px;
    line-height: 40px;
    margin-top: 80px;
}
.grid {
    width: 700px;
   height: 1000px;
   background: #ddd;
 }
 
 .grid:after {
   content: '';
   display: block;
   clear: both;
 }
 
 .grid-sizer,
 .item {
   width: 33.333%;
 }
 
 .item {
   float: left;
 }
 
 .item img {
   display: block;
   max-width: 100%;
 }
</style>