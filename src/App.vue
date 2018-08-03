<template>
  <div id="app">
    <!-- 路由加载一次之后 放到内存之中 不需要重新渲染 从内存中拿数据 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html {
  font-size: 50px;
}
</style>
