<template>
  <div>
    <div class="search">
      <span>
        <input class="search-input" placeholder="输入城市名或拼音" v-model="keyword">
      </span>
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="(item,index) in list" :key="index" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNodata">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import BScroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
  name: "CitySearch",
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  computed: {
    hasNodata() {
      return !this.list.length;
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.city) {
          this.city[i].forEach(value => {
            if (value.name.indexOf(this.keyword) > -1) {
              result.push(value);
            }
          });
          this.list = result;
        }
      }, 100);
    }
  },
  props: {
    city: Object
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city);
      // this.$store.commit("changeCity", city);
      this.$router.push({
        path: "/"
      });
    },
    ...mapMutations(["changeCity"])
  }
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
.search-content {
  position: absolute;
  top: 1.58rem;
  overflow: hidden;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: #eee;
}
.search-item {
  line-height: 0.62rem;
  padding-left: 0.2rem;
  color: #666;
  background: #fff;
}
</style>
