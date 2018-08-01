<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>


<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      },
      swiperList: [
        {
          id: "01",
          imgUrl:
            "https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/sc_sqdc_20180727.jpg"
        },
        {
          id: "02",
          imgUrl:
            "https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/anquan_20180716.png"
        },
        {
          id: "03",
          imgUrl:
            "https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/dujia_shuqi_banner_20180710.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
//样式穿透
.swiper /deep/ .swiper-pagination-bullet-active {
  background-color: #fff !important;
}
.swiper {
  widows: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 24.5%;
  &-img {
    width: 100%;
  }
}
</style>
