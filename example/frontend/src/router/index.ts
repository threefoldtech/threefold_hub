import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Cosmos from "@/views/CosmosView.vue";
import Eth from "@/views/EthView.vue";
import ListEth from "@/views/ListEth.vue";
import GovView from "@/views/GovView.vue";
import ListGov from "@/views/ListGov.vue";
import GovDetails from "@/views/GovDetails.vue";
import GovDeposit from "@/views/GovDeposit.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Cosmos",
    component: Cosmos,
  },
  {
    path: "/bsc",
    name: "BSC",
    component: Eth,
  },
  {
    path: "/list-bsc",
    component: ListEth,
  },
  {
    path: "/proposal",
    component: GovView,
  },
  {
    path: "/list-proposals",
    component: ListGov,
  },
  {
    path: "/proposal/:id",
    component: GovDetails,
  },
  {
    path: "/proposal/deposit/:id",
    component: GovDeposit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
