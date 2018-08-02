<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-icon">
        &#xe624;
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="less" scoped>
.header {
  height: 0.86rem;
  line-height: 0.86rem;
  overflow: hidden;
  text-align: center;
  color: #fff;
  background-color: #00bdd4;
  font-size: 0.32rem;
  position: relative;
}
.back-icon {
  position: absolute;
  width: 0.64rem;
  font-size: 0.4rem;
  text-align: center;
  top: 0;
  left: 0;
  color: #fff;
}
</style>
