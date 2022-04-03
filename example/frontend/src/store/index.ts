import { loadConfig } from "@/utils/config";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    config: {},
    configLoaded: false,
  },
  getters: {},
  mutations: {},
  actions: {
    async init({ state }) {
      state.config = await loadConfig();
      state.configLoaded = true;
    },
  },
  modules: {},
});
