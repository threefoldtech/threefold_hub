import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Cosmos from "@/views/CosmosView.vue";
import Eth from "@/views/EthView.vue";
import ListEth from "@/views/ListEth.vue";
import TextProposal from "@/views/TextProposal.vue";
import ListGov from "@/views/ListGov.vue";
import ListValidators from "@/views/ListValidators.vue";
import GovDetails from "@/views/GovDetails.vue";
import GovDeposit from "@/views/GovDeposit.vue";
import Delegate from "@/views/Delegate.vue";
import AddProposal from "@/views/AddProposal.vue";
import SoftwareProposal from "@/views/SoftwareProposal.vue";
import { checkKeplr } from "@/utils/checkKeplr";

Vue.use(VueRouter);

function requireKeplr(_: unknown, __: unknown, next: any) {
  checkKeplr()
    .then(() => next())
    .catch(() => next("/list-proposals"));
}

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Cosmos",
    component: Cosmos,
    beforeEnter: requireKeplr,
  },
  {
    path: "/bsc",
    name: "BSC",
    component: Eth,
    beforeEnter: requireKeplr,
  },
  {
    path: "/list-bsc",
    component: ListEth,
    beforeEnter: requireKeplr,
  },
  {
    path: "/validators",
    component: ListValidators,
  },
  {
    path: "/delegate/:address",
    component: Delegate,
  },
  {
    path: "/add-proposal",
    component: AddProposal,
    children: [
      {
        path: "/",
        component: TextProposal,
      },
      {
        path: "/add-proposal/software",
        component: SoftwareProposal,
      },
    ],
    beforeEnter: requireKeplr,
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
