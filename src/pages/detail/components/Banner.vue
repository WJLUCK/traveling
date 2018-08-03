<template>
  <div>
    <div class="banner" @click="clickImg">
      <img class="banner-img" src="https://imgs.qunarzz.com/p/tts0/1807/87/235ff1f310b72502.jpg_r_240x160x90_ae28c6bc.jpg" alt="" />
      <div class="banner-info">
        <div class="banner-info-title">不一样的盛夏狂欢—尽在昆明大理丽江香格里拉</div>
        <div class="banner-info-number">8020</div>
      </div>
    </div>
    <common-gallary :img="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary";
export default {
  name: "BannerDetail",
  data() {
    return {
      showGallary: false,
      imgs: [
        "http://img1.qunarzz.com/sight/p0/1412/be/c788f0f3767d2ea037b9b66d2010bfa4.water.jpg_150x150_a980923f.jpg",
        "http://img1.qunarzz.com/sight/p0/201405/27/8211cadd5d9fefeaa044c5b7eefc695d.jpg_150x150_184fbe07.jpg"
      ]
    };
  },
  components: {
    CommonGallary
  },
  methods: {
    clickImg() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  }
};
</script>


<style lang="less" scoped>
* {
  font-size: 16px;
}
.banner {
  position: relative;
  //防止抖动
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  &-img {
    width: 100%;
  }
  &-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    //渐变色变化
    background-image: linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    &-title {
      flex: 1;
      font-size: 0.3rem;
    }
    &-number {
      padding: 0 0.2rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      color: #fff;
    }
  }
}
</style>
