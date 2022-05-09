<template>
  <v-container>
    <h1>Threefold Hub</h1>

    <form @submit.prevent="onSendToCosmos()">
      <v-text-field
        label="Amount"
        placeholder="Amount"
        v-model="amount"
      />

      <v-text-field
        label="Destination"
        placeholder="Destination"
        v-model="destination"
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

    <CustomAlert :loading="loading" :result="result" :error="error" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { sendToCosmos } from "@/utils";
import { Config } from "@/utils/config";
import { parseUnits } from "ethers/lib/utils";
import CustomAlert from "@/components/CustomAlert.vue";

@Component({
  name: "CosmosView",
  components: {
    CustomAlert,
  },
})
export default class Cosmos extends Vue {
  loading = false;
  result: any = null;
  error: string | null = null;

  amount = "";
  destination = "";

  get inValid() {
    return this.amount === "" || this.destination === "";
  }

  onSendToCosmos() {
    this.loading = true;
    this.result = null;
    this.error = null;

    try {
      const { amount, destination } = this;
      const config = this.$store.state.config as Config;
      let amountBN = parseUnits(amount, config.tft_decimals);

      sendToCosmos(
        config.tft_token_contract_address,
        config.gravity_contract_address,
        destination,
        amountBN
      )
        .then((res) => {
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
