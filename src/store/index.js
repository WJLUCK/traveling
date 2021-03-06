import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";

Vue.use(Vuex);

// let defaultCity = "北京";
// try {
//   if (localStorage.city) {
//     defaultCity = localStorage.city;
//   }
// } catch (e) {}

export default new Vuex.Store({
  state: state,
  actions: {
    //ctx 上下文 异步操作
    changeCity(ctx, city) {
      ctx.commit("changeCity", city);
    }
  },
  getters: {},
  mutations: mutations
});
