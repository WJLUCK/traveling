<template>
  <div>
    <ul class="list">
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
    </ul>
  </div>
</template>


<script>
export default {};
</script>

<style lang="less" scoped>
* {
  font-size: 16px;
}
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
}
.item {
  text-align: center;
  line-height: 0.4rem;
  color: #00bdd4;
}
</style>
