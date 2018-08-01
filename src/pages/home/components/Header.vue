<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">
        &#xe624;
      </div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <div class="header-right">城市
      <span class="iconfont arrow-item">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
//移动端布局 rem   1rem =html font-size = 50px
.header {
  height: 0.86rem;
  display: flex;
  font-size: 16px;
  background: #00bdd4;
  line-height: 0.86rem;
  color: #fff;
  &-left {
    width: 0.64rem;
    float: left;
  }
  &-right {
    width: 1.24rem;
    float: right;
    text-align: center;
  }
  &-input {
    flex: 1;
    background: #fff;
    border-radius: 0.1rem;
    margin-top: 0.12rem;
    height: 0.64rem;
    margin-left: 0.2rem;
    color: #ccc;
    line-height: 0.64rem;
    padding-left: 0.2rem;
  }
}
.back-icon {
  font-size: 0.4rem;
  text-align: center;
}
.arrow-item {
  font-size: 0.24rem;
  margin-left: -0.1rem;
}
</style>
