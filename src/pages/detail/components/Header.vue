<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opcityStyle">
      <router-link to="/" tag="span" class="iconfont back-icon">&#xe624;</router-link>
      景点详情
      <!-- <router-link tag="div" to="/" class="header-abs"> -->
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAbs: true,
      opcityStyle: {
        opcity: 0
      }
    };
  },
  activated() {
    //对全局事件的绑定 会对其他组件也有影响
    window.addEventListener("scroll", this.handleShow);
  },
  deactivated() {
    //页面即将被隐藏 进行解除绑定
    window.removeEventListener("scroll", this.handleShow);
  },
  methods: {
    handleShow() {
      const top = document.documentElement.scrollTop;
      if (top > 40) {
        const opcity = top / 140;
        this.opcityStyle = {
          opcity
        };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  }
};
</script>

<style lang='less' scoped>
.header-abs {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  line-height: 0.8rem;
}
.back-icon {
  color: #fff;
  font-size: 0.4rem;
}
.header-fixed {
  height: 0.86rem;
  line-height: 0.86rem;
  // overflow: hidden;
  text-align: center;
  color: #fff;
  background-color: #00bdd4;
  font-size: 0.32rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
