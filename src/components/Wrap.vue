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
    box-shadow:0px 10px 10px 0px rgb(240, 38, 38);
  }
  .big{
    width: 100%;
    height: 800%;
    background-image: url('../assets/timg6.jpeg');
    display: flex;
  }
</style>
