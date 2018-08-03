<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCity" :key="item" @click.stop="handleCityClick(item)">
            <div class="button">{{item}}</div>
          </div>
        </div>
      </div>
      <!-- 对象的遍历 用key值 -->
      <div class="area" v-for="(item,key) of city" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="inner in item" :key="inner.id" @click.stop="handleCityClick(inner.name)">
            {{inner.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState, mapMutations } from "vuex";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      hotCity: ["北京", "上海", "杭州", "丽江", "三亚"]
    };
  },
  mounted() {
    //better-scroll默认它会阻止touch事件。所以在配置中需要加上click: true
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    });
  },
  props: {
    city: Object,
    letter: String
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  },
  methods: {
    handleCityClick(city) {
      // this.$store.dispatch("changeCity", city);
      // alert(city);
      // this.$store.commit("changeCity", city);
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  },
  computed: {
    ...mapState({
      currentCity: "city"
    })
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

