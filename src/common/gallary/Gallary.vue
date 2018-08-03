<template>
  <div class="container" @click="handleGallary">
    <div class="container-wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in img" :key="index">
          <img class="swiper-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallary",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        observer: true,
        observeParents: true
      }
    };
  },
  props: {
    img: {
      type: Array,
      default: []
    }
  },
  methods: {
    handleGallary() {
      this.$emit("close");
    }
  }
};
</script>


<style lang="less" scoped>
.container /deep/ .swiper-container {
  overflow: inherit;
}
.container {
  position: fixed;
  display: flex;
  //垂直居中
  flex-direction: column;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  z-index: 99;
  &-wrapper {
    width: 100%;
    height: 0;
    // overflow: hidden;
    padding-bottom: 100%;
    background-color: #fff;
  }
}
.swiper-img {
  width: 100%;
}
.swiper-pagination {
  bottom: -1rem;
  color: #fff;
}
</style>
