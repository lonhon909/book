<template>
  <div class="app">
    <div class="box"></div>
    <img src="@/assets/images/star.png" alt="">
    <div>
      <img :src="url" alt="">
    </div>
    <br>
    <hr>
    <div>
      <img src="@/assets/images/zhishi.png" alt="">
    </div>
    <i class="iconfont">&#xe63b;</i>
    123123131231312312123123213123123213123213132
    <router-view></router-view>
  </div>
</template>

<script>
import IMG3 from 'static/3.jpeg';
const IMG4 = require('static/4.jpeg');

export default {
  name: 'App',
  data() {
    return {
      url: IMG3,
      url2: IMG4
    };
  }
}
</script>

<style lang="less">
.box {
  width: 100px;
  height: 100px;
  background: url('static/2.jpeg');
}
</style>