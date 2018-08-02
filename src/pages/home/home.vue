<template>
  <div class="home">
    <home-header :city="city"></home-header>
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
    this.getHomeInfo();
  },
  data() {
    return {
      city: "",
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekList: []
    };
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json").then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      this.city = res.data.city;
      this.swiperList = res.data.swiperList;
      this.iconsList = res.data.iconsList;
      this.recommendList = res.data.recommendList;
      this.weekList = res.data.weekList;
      // console.log(res.data);
    }
  }
};
</script>

<style>
</style>
