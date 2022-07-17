<template>
  <v-container>
    <h1>Send to Threefold Hub</h1>

    <v-form v-model="valid" @submit.prevent="onSendToCosmos()">
      <v-text-field label="Amount" type="number" placeholder="Amount" v-model="amount" :rules="[money]" />

      <v-text-field
        label="Destination"
        placeholder="Destination"
        v-model="destination"
        :rules="[bech32Address]"
      />

      <v-row justify="center">
        <v-btn
          color="primary"
          x-large
          type="submit"
          :disabled="loading || !valid"
          :loading="loading"
        >
          Send
        </v-btn>
      </v-row>
    </v-form>

    <CustomAlert :loading="loading" :result="result" :error="error" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { sendToCosmos } from "@/utils";
import { Config } from "@/utils/config";
import { parseUnits } from "@/utils/money";
import CustomAlert from "@/components/CustomAlert.vue";
import { bech32 } from "bech32";
import { BigNumber } from "ethers";

@Component({
  name: "CosmosView",
  components: {
    CustomAlert,
  },
})
export default class Cosmos extends Vue {
  loading = false;
  result: any = null;
  valid = false;
  error: string | null = null;

  amount = "";
  destination = "";

  parseAmount(): BigNumber {
    if (this.amount == "") {
      throw new Error("Amount is required")
    }
    const decimals = this.$store.state.config.tft_decimals || 0;
    const amountBN = parseUnits(this.amount || "0", decimals);
    if (amountBN.lte(0)) {
      throw new Error("Amount must be a positive number")
    }
    return amountBN
  }

  money() {
    try {
      this.parseAmount()
      return true
    } catch (err: any) {
      return err.message
    }
  }
  
  bech32Address(address: string) {
    if (this.amount == "") {
      throw new Error("Address is required")
    }
    try {
      const { prefix } = bech32.decode(address);
      return prefix === "tf" ? true : "Address must have tf prefix";
    } catch {
      return "Not a valid Threefold Hub address ";
    }
  }

  onSendToCosmos() {
    this.loading = true;
    this.result = null;
    this.error = null;

    try {
      const { destination } = this;
      const config = this.$store.state.config as Config;
      let amount = this.parseAmount()

      sendToCosmos(
        config.tft_token_contract_address,
        config.gravity_contract_address,
        destination,
        amount
      )
        .then((res) => {
          this.result = "Transaction submitted succefully!";
        })
        .catch((err) => {
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
