<template>
  <div id="app">
    <!-- <div class="head">
    <div class="left">
      <img src="img/imgs/logo.png" alt="" width="100" height="200">
    </div>-->
    <!-- <Header class="con"></Header> -->

    <!-- <div class="right"><span>登录</span><span>注册</span></div>
    </div>-->
    <Layout></Layout>

    <router-view />
  </div>
</template>

<style lang="scss">
* {
  list-style: none;
  padding: 0;
  margin: 0;
  html {
    height: 100%;

    body {
      display: flex;
      flex-direction: column;
      height: 100%;

      .head {
        display: flex;
        height: 65px;
        line-height: 65px;
        .left,
        .right {
          width: 15%;

          text-align: center;
        }
        .con {
          flex-grow: 1;
        }
      }
    }
  }
}
</style>
<script>
import Layout from "./components/Layout";

// import Header from './components/Header'
export default {
  components: {
    // Header
    Layout
  }
};
</script>
