<template>
  <div class="swiper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
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
      }
    };
  },
  props: {
    list: Array
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }
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
