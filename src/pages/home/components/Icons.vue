<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    };
  },
  props: {
    list: Array
  },
  computed: {
    //可缓存
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>


<style lang="less" scoped>
// .icons /deep/ .icon-img-content {
//   height: 0;
//   padding-bottom: 50%;
// }
.icons {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 50%;
  // background: yellow;
  .icon {
    width: 25%;
    float: left;
    padding-bottom: 25%;
    overflow: hidden;
    position: relative;
    overflow: hidden;
    height: 0;
    &-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      &-content {
        height: 100%;
        display: block;
        margin: 0 auto;
      }
    }
    &-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      font-size: 0.2rem;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
// 文字...
// overflow: hidden;
// white-space: nowrap;
//text-overflow: ellipsis;
</style>
