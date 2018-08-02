<template>
  <div class="recommend">
    <div class="recommend-title">
      周末去哪儿
    </div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
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
    return {};
  },
  props: {
    list: Array
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
    padding-bottom: 37.09%;
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
