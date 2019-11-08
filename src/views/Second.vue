<template>
  <div class="Second">
    <div class="Second-content">
      <div class="pig">
        <img src="../assets/pig.jpg" alt />
      </div>
      <div class="Second-pig">
        <img src="../assets/chart.png" alt classs="Second-pig" />
      </div>
    </div>

  </div>
</template>
<style lang="scss" scoped>
.Second {
  .Second-content {
    height: 100%;
    width: 1200px;
    .Second-pig {
      height: 800px;
      margin: 0 auto;
    }
  }
  .bu {
    opacity: 0;
  }

  .slide-fade-enter-active {
  transition: all .3s ease;
  opacity: 1;

}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  opacity: 1;

}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  // transform: translateX(10px);
  // opacity: 1;
}
}
</style>
<script>
export default {
  data() {
    return {
      show:true
    }
  }
}
</script>
