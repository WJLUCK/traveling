<template>
  <div class="recommend">
    <div class="recommend-title">
      周末去哪儿
    </div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-info-title">{{item.title}}}</p>
          <p class="item-info-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendList: [
        {
          id: "01",
          title: "北京清凉避暑胜地",
          desc: "到大自然中享受“天然空调”的清凉",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg"
        },
        {
          id: "02",
          title: "北京必游TOP10",
          desc: "来北京必去的景点非这些地方莫属",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg"
        },
        {
          id: "03",
          title: "学生最爱的博物馆",
          desc: "周末干嘛？北京很多博物馆已经免费开放啦",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg"
        }
      ]
    };
  }
};
</script>


<style lang="less" scoped>
.recommend-title {
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 0.2rem;
  font-size: 16px;
}
.item {
  &-img-wrapper {
    height: 0;
    overflow: hidden;
    padding-bottom: 33.9%;
    > img {
      width: 100%;
    }
  }
  &-info {
    font-size: 16px;
    margin-bottom: 0.1rem;
    margin-top: 0.1rem;
    &-desc {
      color: #ccc;
      margin-top: 0.1rem;
      font-size: 10px;
    }
  }
}
</style>
