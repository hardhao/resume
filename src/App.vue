<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Wrap from './components/Wrap.vue'

export default {
  name: 'app',
  components: {
    Wrap
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  margin: 0 auto;
}
</style>
