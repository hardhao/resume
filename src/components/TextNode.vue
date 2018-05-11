<template>
<div class="bigtextnode">
  <div class="textnode">
      <div class="top">
          <img src="../assets/time.jpeg" alt="">
          <p><router-link to="/">Zjh的家</router-link>  > 我的笔记</p>
      </div>
      <div class="title">
          <ul>
              <li>Git 技巧</li>
              <li>React 响应式</li>
              <li>React 策略</li>
          </ul>
      </div>
      <div class="node">
          <p>学习使我快乐</p>
          <p>
              Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
              如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。
              如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。
          </p>
      </div>
  </div>
  </div>
</template>

<script>
export default {
    name:'TextNode'
}
</script>

<style scoped>
.bigtextnode{
    background-color: #ccc;
    padding-top: 100px;
}
.textnode{
    width: 1200px;
    background-color: #fff;
    margin: 0 auto;
    overflow: hidden;
    box-shadow: 5px 5px 58px 8px rgb(168, 166, 166);
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
    height: 740px;
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
    background-color: rgb(136, 205, 218);
    padding-top: 20px;
    float: right;
    padding-bottom: 150px;
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
</style>