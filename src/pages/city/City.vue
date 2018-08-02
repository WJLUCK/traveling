<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :city="cities"></city-list>
    <city-alphaber :city="cities"></city-alphaber>
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
      cities: {}
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
    }
  }
};
</script>

<style lang="less" scoped>
</style>
