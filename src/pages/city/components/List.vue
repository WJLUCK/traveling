<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
        </div>
        <div class="title border-topbottom">B</div>
        <div class="item-list">
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
          <div class="item border-bottom">
            阿拉尔
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import BScroll from "better-scroll";
export default {
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  }
};
</script>

<style lang="less" scoped>
* {
  font-size: 16px;
}
.title {
  line-height: 0.54rem;
  background: #eee;
  padding-left: 0.2rem;
  color: #666;
}
.border-topbottom {
  &:before {
    border-color: #ccc;
  }
  &:after {
    border-color: #ccc;
  }
}
.button-list {
  padding: 0.1rem.6rem 0.1rem 0.1rem;
  overflow: hidden;
}
.button-wrapper {
  float: left;
  width: 33.33%;
}
.button {
  margin: 0.1rem;
  text-align: center;
  border: 0.02rem solid #ccc;
  padding: 0.1rem 0;
  border-radius: 0.03rem;
}
.item-list .item {
  line-height: 0.76rem;
  padding-left: 0.2rem;
}
.border-bottom {
  &:before {
    border-color: #ccc;
  }
}
.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

