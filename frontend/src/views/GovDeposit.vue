<template>
  <v-container>
    <div>
      <h1 v-if="proposal">
        Deposit to <small>{{ proposal.content.title }}</small>
      </h1>

      <v-form v-model="valid" @submit.prevent="onDeposit()">
        <v-text-field
          label="Amount"
          placeholder="Amount"
          type="number"
          v-model="amount"
          :rules="[money]"
        />

        <v-btn
          color="primary"
          type="submit"
          :disabled="loading || !valid"
          :loading="loading"
        >
          Submit
        </v-btn>
      </v-form>
    </div>

    <CustomAlert :loading="loading" :result="result" :error="error" />

    <v-row justify="center" v-if="loading && !proposal">
      <v-progress-circular indeterminate color="primary" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BigNumber } from "ethers";
import { getProposal, deposit } from "@/utils/gov";
import CustomAlert from "@/components/CustomAlert.vue";
import { parseUnits } from "@/utils/money";

@Component({
  name: "GovDeposit",
  components: {
    CustomAlert,
  },
})
export default class GovDeposit extends Vue {
  proposal: any = null;
  amount = "0";

  loading = false;
  result: any = null;
  valid = false;
  error: string | null = null;

  created() {
    this.loading = true;

    getProposal(this.$store.state.config.cosmos_rest, this.$route.params.id)
      .then((proposal) => {
        this.proposal = proposal.proposal;
      })
      .catch((err) => {
        this.error = err.message;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  parseAmount(): BigNumber {
    if (this.amount == "") {
      throw new Error("Amount is required")
    }
    const decimals = this.$store.state.config.tft_decimals || 0;
    const amountBN = parseUnits(this.amount || "0", decimals);
    if (amountBN.lte(0)) {
      throw new Error("Amount must be positive")
    }
    return amountBN
  }
  money() {
    try {
      this.parseAmount()
      return true;
    } catch (err: any) {
      return err.message
    }
  }

  onDeposit() {
    this.loading = true;
    this.result = null;
    this.error = null;

    deposit(
      this.$store.state.config.tendermint_rpc,
      this.$store.state.config.cosmos_rest,
      this.$store.state.config.gas_price,
      this.$store.state.config.chain_id,
      this.proposal.proposal_id,
      this.parseAmount(),
      this.$store.state.config.proposal_denom
    )
      .then((res) => {
        this.result = `Successfully deposited ${this.amount} to proposal #${this.proposal.proposal_id}`;
      })
      .catch((err) => {
        this.error = err.message;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
</script>
