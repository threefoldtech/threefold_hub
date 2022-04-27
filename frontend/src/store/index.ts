import { checkKeplr } from "@/utils/checkKeplr";
import { Config, loadConfig } from "@/utils/config";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export enum Actions {
  CHECK_KEPLR = "CHECK_KEPLR",
}

export enum Keplr {
  LOADING = "loading",
  ERROR = "error",
  LOADED = "loaded",
}

interface IState {
  config: Config;
  keplr: Keplr;
}

export default new Vuex.Store<IState>({
  state: {
    config: loadConfig(),
    keplr: Keplr.LOADING,
  },
  getters: {},
  mutations: {},
  actions: {
    [Actions.CHECK_KEPLR]({ state }) {
      checkKeplr()
        .then(() => {
          state.keplr = Keplr.LOADED;
        })
        .catch(() => {
          state.keplr = Keplr.ERROR;
        });
    },
  },
  modules: {},
});
