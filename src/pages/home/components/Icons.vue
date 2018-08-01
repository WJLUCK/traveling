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
      swiperOption: {},
      iconsList: [
        {
          id: "01",
          imgUrl:
            "https://m.tuniucdn.com/fb2/t1/G2/M00/94/A9/Cii-T1hmH2yIURNDAAAJyfc0kUYAAGMPAP_79EAAAnh702_w120_h120_c1_t0.png",
          desc: "全球WiFi"
        },
        {
          id: "02",
          imgUrl:
            "https://m3.tuniucdn.com/fb2/t1/G5/M00/BA/32/Cii-slrQDBuIDwW6AAAHDbmII-4AAFiJQJLm-kAAAcl406_w120_h120_c1_t0.png",
          desc: "一日游"
        },
        {
          id: "03",
          imgUrl:
            "https://m.tuniucdn.com/fb2/t1/G3/M00/32/38/Cii_Llli3baIed2wAAACgMRu23IAADA0wP__WgAAAKY669_w120_h120_c1_t0.png",
          desc: "婚纱旅拍"
        },
        {
          id: "04",
          imgUrl:
            "https://m3.tuniucdn.com/fb2/t1/G4/M00/2B/43/Cii_J1myMKOIa59DAAAEk3iRAL8AAA1twP_-1UAAASr274_w120_h120_c1_t0.png",
          desc: "主题游"
        },
        {
          id: "05",
          imgUrl:
            "https://m.tuniucdn.com/fb2/t1/G1/M00/56/A5/Cii-U1iFo6eIaZs0AAAGZNY4WVMAAHINQP_-V8AAAah882_w120_h120_c1_t0.png",
          desc: "目的地大全"
        },
        {
          id: "06",
          imgUrl:
            "https://m.tuniucdn.com/fb2/t1/G1/M00/84/64/Cii-U1ir_DyIWjOQAAAMzJwlIzUAAHmAQP_8xsAAAzl573_w120_h120_c1_t0.png",
          desc: "蜜月游"
        },
        {
          id: "07",
          imgUrl:
            "https://m.tuniucdn.com/fb2/t1/G1/M00/56/7D/Cii9EViFfe2IVXYOAAAJ0Vcji84AAHIGQP_9XMAAAqN711_w120_h120_c1_t0.png",
          desc: "海岛游"
        },
        {
          id: "08",
          imgUrl:
            "https://m4.tuniucdn.com/fb2/t1/G5/M00/B5/4B/Cii-tFrMg4CINw_XAAAFOVqbjXkAAFafgP_-qYAAAVa328_w120_h120_c1_t0.png",
          desc: "当季热玩"
        },
        {
          id: "09",
          imgUrl:
            "https://m.tuniucdn.com/fb2/t1/G2/M00/F3/1C/Cii-T1iULIKIW6kBAAAFJJmHzD4AAG8NwP_-sIAAAU-443_w120_h120_c1_t0.png",
          desc: "旅游百货"
        },
        {
          id: "10",
          imgUrl:
            "https://m.tuniucdn.com/fb2/t1/G2/M00/97/DA/Cii-TFhvBHiIWtIQAAAD8MUG7VcAAGNiAP_-_QAAAQM018_w120_h120_c1_t0.png",
          desc: "更多"
        }
      ]
    };
  },
  computed: {
    //可缓存
    pages() {
      const pages = [];
      this.iconsList.forEach((item, index) => {
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
