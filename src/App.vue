<template>
  <div id="app">
    <div class="container">
      <headBar></headBar>
      <router-view></router-view>
      <footerBar></footerBar>
    </div>
  </div>
</template>


<script>
import headBar from "@/components/Header.vue";
import footerBar from "@/components/Footer.vue";

export default {
  components: {
    headBar,
    footerBar,
  },
};
</script>


<style>
/* 引入公共样式 */
@import "./assets/css/base.css";
#app {
  border-top: 2px solid #383838;
  height: 100%;
  box-sizing: border-box;
}
.container {
  box-sizing: border-box;
  min-height: 100%;
  margin: 0 auto;
  padding: 64px 0;
  width: 760px;
  position: relative;
}
</style>
