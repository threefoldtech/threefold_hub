<template>
  <v-container>
    <h1>Eth</h1>

    <form @submit.prevent="onSendToEth()">
      <v-text-field label="Amount" placeholder="Amount" v-model="amount" />
      <v-text-field
        label="Destination"
        placeholder="Destination"
        v-model="destination"
      />

      <v-text-field
        label="BridgeFees"
        placeholder="Bridge fees"
        v-model="fees"
        :disabled="true"
      />

      <v-text-field
        label="TotalAmount"
        placeholder="Total amount"
        v-model="total_amount"
        :disabled="true"
      />

      <v-row justify="center">
        <v-btn
          color="primary"
          x-large
          type="submit"
          :disabled="inValid || loading"
          :loading="loading"
        >
          Send
        </v-btn>
      </v-row>
    </form>

    <v-alert
      class="mt-10"
      :type="error ? 'error' : 'success '"
      border="left"
      outlined
      v-if="!loading && (result || error)"
    >
      {{ result || error }}
    </v-alert>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { sendToEth } from "@/utils";
import { Config } from "@/utils/config";
import { formatUnits, parseUnits } from "ethers/lib/utils";
import { BigNumber } from "ethers";

@Component({
  name: "EthView",
})
export default class Eth extends Vue {
  loading = false;
  result: any = null;
  error: string | null = null;

  amount = "";
  destination = "";

  get fees() {
    const bridge_fees =
      this.$store.state.config.bridge_fees || BigNumber.from(0);
    const decimals = this.$store.state.config.tft_decimals || 0;
    return formatUnits(bridge_fees, decimals);
  }

  get total_amount() {
    let bridge_fees = this.$store.state.config.bridge_fees || BigNumber.from(0);
    const decimals = this.$store.state.config.tft_decimals || 0;
    let amountBN = parseUnits(this.amount || "0", decimals);
    return formatUnits(bridge_fees.add(amountBN), decimals);
  }

  get inValid() {
    return this.amount === "" || this.destination === "";
  }

  onSendToEth() {
    this.loading = true;
    this.result = null;
    this.error = null;

    try {
      const { destination, amount } = this;
      const config = this.$store.state.config as Config;
      let amountBN = parseUnits(amount, config.tft_decimals);
      sendToEth(
        config.tendermint_rpc,
        destination,
        amountBN,
        config.bridge_fees,
        config.tft_denom
      )
        .then((res) => {
          // console.log(res);
          this.result = "Transaction submitted succefully!";
        })
        .catch((err) => {
          console.log("Error", err);
          this.error = err.message;
        })
        .finally(() => {
          this.loading = false;
        });
    } catch (err: any) {
      this.error = err.message;
      this.loading = false;
    }
  }
}
</script>
