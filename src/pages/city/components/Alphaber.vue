<template>
  <div>
    <ul class="list">
      <li class="item" v-for="item in letters" :key="item" @click="handleLetter" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" :ref="item">{{item}}</li>
    </ul>
  </div>
</template>


<script>
export default {
  props: {
    city: Object
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.city) {
        letters.push(i);
      }
      return letters;
      // console.log(letters);
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  //初次渲染 传递的数据发生变化 重新渲染的话 update钩子函数执行
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetter(e) {
      //子组件向父组件传递
      this.$emit("change", e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);

        // const startY = this.$refs["A"][0].offsetTop;
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
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
