<template>
  <div class="sectiondown">
      <div class="heng heng1"></div>
      <div class="square"></div>
      <div class="book">
          <div></div>
          <div class="same4"></div>
          <div class="same4 same1"></div>
          <div class="same4 same2"></div>
          <div class="same4 same3"></div>
          <router-link to="/textnode"> <span>我的笔记</span> </router-link>
      </div>
      <DownRig />
  </div>
</template>

<script>
import DownRig from './DownRig'
export default {
    name:'SectionDown',
    components: {
    DownRig
  }
}
</script>

<style>
.sectiondown{
    background-color: rgb(253, 59, 11);
    overflow: hidden;
    padding-bottom: 50px;
}
.heng1{
    margin-top: 100px;
}
.book>.biji{
    margin-left:60px;
}
</style>
