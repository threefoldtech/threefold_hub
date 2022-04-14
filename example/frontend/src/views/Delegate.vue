<template>
  <v-container>
    <div>
      <h1>
        Delegate to <small>{{ address }}</small>
      </h1>

      <form @submit.prevent="onDelegate()">
        <v-text-field
          label="Amount"
          placeholder="Amount"
          v-model="amount"
        />

        <v-btn
          color="primary"
          type="submit"
          :disabled="loading"
          :loading="loading"
        >
          Submit
        </v-btn>
      </form>
    </div>

    <CustomAlert :loading="loading" :result="result" :error="error" />

    <v-row justify="center" v-if="loading">
      <v-progress-circular indeterminate color="primary" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BigNumber } from "ethers";
import { delegate } from "@/utils/gov";
import CustomAlert from "@/components/CustomAlert.vue";
import { parseUnits } from "ethers/lib/utils";

@Component({
  name: "GovDeposit",
  components: {
    CustomAlert,
  },
})
export default class GovDeposit extends Vue {
  amount = "0";
  address = "";
  loading = false;
  result: any = null;
  error: string | null = null;

  created() {
    this.loading = false;
    console.log(this.$route.params)
    console.log(123)
    this.address = this.$route.params.address;
  }

  onDelegate() {
    this.loading = true;
    this.result = null;
    this.error = null;

    delegate(
      this.$store.state.config.tendermint_rpc,
      this.$store.state.config.gas_price,
      this.address,
      parseUnits(this.amount, this.$store.state.config.tft_decimals),
      this.$store.state.config.tft_denom
    )
      .then((res) => {
        console.log(res);
        this.result = `Successfully delegated ${this.amount} to validator #${this.address}`;
      })
      .catch((err) => {
        console.log("Error", err);
        this.error = err.message;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
</script>
