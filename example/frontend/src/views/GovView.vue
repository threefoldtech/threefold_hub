<template>
  <v-container>
    <h1>Gov</h1>

    <form @submit.prevent="onSubmitProposal()">
      <v-text-field label="Title" placeholder="Title" v-model="title" />

      <v-text-field
        label="Description"
        placeholder="Description"
        v-model="description"
      />
      <v-text-field
        label="Initial Deposit"
        placeholder="Initial Deposit"
        type="number"
        v-model="initialDeposit"
      />

      <v-row justify="center">
        <v-btn color="primary" type="submit"> Submit </v-btn>
      </v-row>
    </form>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { submitProposal } from "@/utils/gov";
import { BigNumber } from "ethers";

@Component({
  name: "GovView",
})
export default class GovView extends Vue {
  title = "";
  description = "";
  initialDeposit = 0;

  onSubmitProposal() {
    const { title, description, initialDeposit } = this;
    submitProposal(
      this.$store.state.config.tendermint_rpc,
      { title, description },
      BigNumber.from(initialDeposit),
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
