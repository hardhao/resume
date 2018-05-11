<template>
  <footer>
      <p>Stay Hungry Stay Foolish</p>
      <div class="down">
          <p>Zjh的超级网络</p>
      </div>
  </footer>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style>
footer>p{
    font-size: 60px;
    text-align: center;
    color: rgb(248, 31, 2);
    margin-top: 100px;
    font-weight: bold;
}
.down{
    background-color: rgb(240, 124, 70);   
    height: 173px;
    padding-top: 80px;
    margin-top: 100px;
}
.down>p{
    text-align: center;
    font-size: 16px;
    color: rgb(252, 65, 8);
    font-weight: bold;
}
</style>
