<template>
  <div class="search">
    <span>
      <input class="search-input" placeholder="输入城市名或拼音">
    </span>
  </div>
</template>


<script>
export default {
  name: "CitySearch"
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
.search {
  padding: 0 0.1rem;
  height: 0.72rem;
  background-color: #00bdd4;
}
.search-input {
  box-sizing: border-box;
  height: 0.62rem;
  line-height: 0.62rem;
  width: 100%;
  text-align: center;
  border-radius: 0.06rem;
  color: #666;
  padding: 0 0.1rem;
  // margin:0 auto;
}
</style>
