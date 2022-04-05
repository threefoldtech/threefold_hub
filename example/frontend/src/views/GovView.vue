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
        <v-btn
          color="primary"
          type="submit"
          :disabled="loading"
          :loading="loading"
        >
          Submit
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
import { submitProposal } from "@/utils/gov";
import { BigNumber } from "ethers";

@Component({
  name: "GovView",
})
export default class GovView extends Vue {
  loading = false;
  result: any = null;
  error: string | null = null;

  title = "";
  description = "";
  initialDeposit = 0;

  onSubmitProposal() {
    this.loading = true;
    this.result = null;
    this.error = null;

    try {
      const { title, description, initialDeposit } = this;
      submitProposal(
        this.$store.state.config.tendermint_rpc,
        { title, description },
        BigNumber.from(initialDeposit),
        this.$store.state.config.proposal_denom
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
      this.loading = false;
      this.error = err.message;
    }
  }
}
</script>
