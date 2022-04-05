import { loadConfig } from "@/utils/config";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    config: loadConfig(),
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
