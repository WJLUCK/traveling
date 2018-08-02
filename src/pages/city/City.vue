<template>
  <div class="city">
    <city-header></city-header>
    <city-search :city="cities"></city-search>
    <city-list :city="cities" :letter="letter"></city-list>
    <city-alphaber :city="cities" @change="handleLetterChange"></city-alphaber>
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphaber from "./components/Alphaber";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphaber
  },
  data() {
    return {
      cities: {},
      letter: ""
    };
  },
  mounted() {
    this.getCityInfo();
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.handleCity);
    },
    handleCity(res) {
      this.cities = res.data;
    },
    handleLetterChange(letter) {
      this.letter = letter;
      // console.log(letter);
    }
  }
};
</script>

<style lang="less" scoped>
</style>
