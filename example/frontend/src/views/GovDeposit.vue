<template>
  <v-container v-if="proposal">
    <h1>
      Deposit to <small>{{ proposal.content.title }}</small>
    </h1>

    <form @submit.prevent="onDeposit()">
      <v-text-field label="Amount" placeholder="Amount" v-model="amount" />

      <v-btn color="primary" type="submit"> Submit </v-btn>
    </form>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BigNumber } from "ethers";
import { getProposal, deposit } from "@/utils/gov";

@Component({
  name: "GovDeposit",
})
export default class GovDeposit extends Vue {
  proposal: any = null;
  amount = 0;

  created() {
    getProposal(this.$store.state.config.cosmos_rest, this.$route.params.id)
      .then((proposal) => {
        this.proposal = proposal.proposal;
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  onDeposit() {
    deposit(
      this.$store.state.config.tendermint_rpc,
      this.proposal.proposalId,
      BigNumber.from(this.amount),
      this.$store.state.config.proposal_denom
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }
}
</script>
