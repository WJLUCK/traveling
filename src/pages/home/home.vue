<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconsList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekList"></home-weekend>
  </div>
</template>


<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import { mapState } from "vuex";
import axios from "axios";

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  //挂载完成之后
  mounted() {
    this.lastCity = this.city;
    // console.log("mounted");
    this.getHomeInfo();
  },
  data() {
    return {
      // city: "",
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekList: [],
      lastCity: ""
    };
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json?city=" + this.city).then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      // this.city = res.data.city;
      this.swiperList = res.data.swiperList;
      this.iconsList = res.data.iconsList;
      this.recommendList = res.data.recommendList;
      this.weekList = res.data.weekList;
      // console.log(res.data);
    }
  },
  //用keep-alive之后会多出一个activated生命周期函数
  activated() {
    // 当页面重新显示的时候
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
    // console.log("activated");
  }
};
</script>

<style>
</style>
