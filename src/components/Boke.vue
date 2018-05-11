<template>
<div class="bigboke">
  <div class="boke">
      <div class="top">
          <img src="../assets/time.jpeg" alt="">
          <p><router-link to="/">Zjh的家</router-link> > 我的博客</p>
      </div>
      <div class="wel">
          <div class="imgbg">
              <img src="../assets/timg5.jpeg" alt="">
          </div>
          <p>easyhao的博客</p>
      </div>
      <ul>
          <router-link to="/textnode">
            <li> 
                <span><img src="../assets/timg7.jpeg" alt=""></span> 学会创建仓库
            </li>
            <li> 
                <span><img src="../assets/timg7.jpeg" alt=""></span> 学会创建仓库
            </li>
            <li> 
                <span><img src="../assets/timg7.jpeg" alt=""></span> 学会创建仓库
            </li>
            <li> 
                <span><img src="../assets/timg7.jpeg" alt=""></span> 学会创建仓库
            </li>

            <li> 
                <span><img src="../assets/timg7.jpeg" alt=""></span> 学会创建仓库
            </li>
          </router-link>
      </ul>
      <div class="down">
          <p>Zjh的超级网络</p>
      </div>
  </div>
  </div>
</template>

<script>
export default {
    name:'Boke'
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
.wel{
    height: 378px;
    background-color:rgb(155, 180, 226);
    opacity: .8;
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
    color: rgb(39, 14, 105);
}
ul{
    margin-left: 277px;
    margin-top: 100px;
    width: 100%;
    overflow: hidden;
}
li{
    list-style: none;
    width: 658px;
    line-height: 82px;
    float: left;
    box-shadow: 5px 6px 18px 0px rgba(131, 141, 224, 0.5) ;
    border-radius: 7px ;
    margin-top: 20px;
    font-size:18px;
    transition: all .5s;
    cursor: pointer;
    margin-bottom: 20px;
    color: #000;
    background-color: #fff;
}
li:hover{
    box-shadow: 10px 12px 18px 0px rgba(131, 141, 224, 0.5) ;
}
li>span>img{
    float: left;
    width: 30px;
    height: 30px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top:25px;
}
.bigboke{
    /* background-color: #ccc; */
    padding-top: 100px;
    background-image: url('../assets/timg12.gif');
    background-size: cover;
}
.boke{
    width: 1200px;
    background-color: rgb(155, 240, 247);
    box-shadow: 5px 5px 58px 8px rgb(226, 231, 235);
    /* opacity: .97;    */
    
}
.down{
    background-color: rgb(112, 199, 187);   
    height: 173px;
    padding-top: 80px;
    margin-top: 100px;
}
.down>p{
    text-align: center;
    font-size: 16px;
    color: rgb(83, 86, 221);
    font-weight: bold;
}
</style>