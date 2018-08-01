<template>
  <div class="recommend">
    <div class="recommend-title">
      热销推荐
    </div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <!-- <div class="item-img-wrapper"> -->
        <img class="item-img" :src="item.imgUrl" alt="">
        <!-- </div> -->
        <div class="item-info">
          <p class="item-info-title">{{item.title}}}</p>
          <p class="item-info-desc">{{item.desc}}</p>
          <button class="item-info-button">detail</button>
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
          title: "北京",
          desc: "【去哪儿专线】天安门+故宫+八达岭鸟巢+耳麦 赠珍宝馆+扇子",
          imgUrl:
            "https://imgs.qunarzz.com/p/tts2/1804/97/382b3bd308aea002.jpg_160x160_a24dc648.jpg"
        },
        {
          id: "02",
          title: "北京",
          desc: "【去哪儿专线】天安门+故宫+八达岭鸟巢+耳麦 赠珍宝馆+扇子",
          imgUrl:
            "https://imgs.qunarzz.com/p/tts2/1804/97/382b3bd308aea002.jpg_160x160_a24dc648.jpg"
        },
        {
          id: "03",
          title: "北京",
          desc: "【去哪儿专线】天安门+故宫+八达岭鸟巢+耳麦 赠珍宝馆+扇子",
          imgUrl:
            "https://imgs.qunarzz.com/p/tts2/1804/97/382b3bd308aea002.jpg_160x160_a24dc648.jpg"
        },
        {
          id: "04",
          title: "北京",
          desc: "【去哪儿专线】天安门+故宫+八达岭鸟巢+耳麦 赠珍宝馆+扇子",
          imgUrl:
            "https://imgs.qunarzz.com/p/tts2/1804/97/382b3bd308aea002.jpg_160x160_a24dc648.jpg"
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
  display: flex;
  height: 1.9rem;
  font-size: 16px;
  overflow: hidden;
  &-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  &-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
    &-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
    }
    &-desc {
      line-height: 0.4rem;
      color: #ccc;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &-button {
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0.2rem;
      border-radius: 0.06rem;
      line-height: 0.04rem;
    }
  }
}
</style>
