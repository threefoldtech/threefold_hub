import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Cosmos from "@/views/CosmosView.vue";
import Eth from "@/views/EthView.vue";
import ListEth from "@/views/ListEth.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Cosmos",
    component: Cosmos,
  },
  {
    path: "/eth",
    name: "Eth",
    component: Eth,
  },
  {
    path: "/list-eth",
    component: ListEth,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
