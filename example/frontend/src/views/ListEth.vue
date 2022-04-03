<template>
  <v-container>
    <h1>Eth List</h1>
    <v-tabs v-model="tab">
      <v-tab v-for="t in tabs" :key="t.symbol">
        {{ t.label }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="t in tabs" :key="t.symbol">
        <v-data-table :headers="t.headers" :items="list[t.symbol]">
          <template v-slot:[`item.actions`]="{ item }">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  fab
                  small
                  dark
                  color="red"
                  v-bind="attrs"
                  v-on="on"
                  @click="onCancelSendToEth(item.id)"
                >
                  <v-icon> mdi-delete </v-icon>
                </v-btn>
              </template>

              <span> Cancel SendToEth Transaction </span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script lang="ts">
import { GravityV1QueryPendingSendToEthResponse } from "@/rest/cosmos";
import { Component, Vue } from "vue-property-decorator";
import { pendingSendToEth, cancelSendToEth } from "../utils";

@Component({
  name: "ListEth",
})
export default class ListEth extends Vue {
  readonly tabs: {
    label: string;
    symbol: keyof GravityV1QueryPendingSendToEthResponse;
    headers: { text: string; value: string }[];
  }[] = [
    {
      label: "Batched",
      symbol: "transfersInBatches",
      headers: [
        { text: "ID", value: "id" },
        { text: "Destination", value: "destAddress" },
        { text: "Amount", value: "erc20Token.amount" },
      ],
    },
    {
      label: "Unbatched",
      symbol: "unbatchedTransfers",
      headers: [
        { text: "ID", value: "id" },
        { text: "Destination", value: "destAddress" },
        { text: "Amount", value: "erc20Token.amount" },
        { text: "Actions", value: "actions" },
      ],
    },
  ];

  list: GravityV1QueryPendingSendToEthResponse = {};
  tab: string | null = null;

  created() {
    pendingSendToEth(this.$store.state.config.cosmos_rest)
      // Promise.resolve({
      //   transfersInBatches: [
      //     {
      //       id: "4",
      //       sender: "tf1cy8z8dhcmzrf497klt47nvgrcxfnwv9evm4ymw",
      //       destAddress: "0xD6DBC796aC81DC34bDe3864f1F2c8f40742D85Dc",
      //       erc20Token: {
      //         contract: "0x8BaBbB98678facC7342735486C851ABD7A0d17Ca",
      //         amount: "400000000000000",
      //       },
      //       erc20Fee: {
      //         contract: "0x8BaBbB98678facC7342735486C851ABD7A0d17Ca",
      //         amount: "100000000000000",
      //       },
      //     },
      //   ],
      //   unbatchedTransfers: [
      //     {
      //       id: "5",
      //       sender: "tf1cy8z8dhcmzrf497klt47nvgrcxfnwv9evm4ymw",
      //       destAddress: "0xD6DBC796aC81DC34bDe3864f1F2c8f40742D85Dc",
      //       erc20Token: {
      //         contract: "0x8BaBbB98678facC7342735486C851ABD7A0d17Ca",
      //         amount: "400000000000000",
      //       },
      //       erc20Fee: {
      //         contract: "0x8BaBbB98678facC7342735486C851ABD7A0d17Ca",
      //         amount: "100000000000000",
      //       },
      //     },
      //   ],
      // })
      .then((res) => {
        this.list = res;
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  onCancelSendToEth(txId: string) {
    const cancel = confirm(
      `Are you sure you want to cancel transaction(${txId})?`
    );

    if (!cancel) return;

    cancelSendToEth(this.$store.state.config.tendermint_rpc, txId)
      .then((res) => {
        console.log("Canceled", res);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }
}
</script>
