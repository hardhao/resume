<template>
<div class="big">
  <div class="wrap">
    <Header />
    <Section />
    <SectionDown />
    <Footer />
  </div>
</div>
</template>

<script>
import Header from './Header.vue'
import Section from './Section.vue'
import SectionDown from './SectionDown.vue'
import Footer from './Footer.vue'
export default {
  name: 'Wrap',
  components: {
    Header,
    Section,
    SectionDown,
    Footer
  }
}
</script>


<style scoped>
  .wrap{
    width: 1200px;
    margin-top: 100px;
    background-color: #fff;
    box-shadow: 5px 5px 58px 8px rgb(212, 202, 199);
    opacity: .95;
  }
  .big{
    width: 100%;
    height: 800%;
    background-image: url('../assets/timg10.gif');
    background-size:120%;
    background-position: -180px 0;
    display: flex;
  }
</style>
