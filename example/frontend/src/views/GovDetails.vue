<template>
  <v-container v-if="proposal">
    <v-row class="mb-2" justify="space-between" align="center">
      <h1>{{ proposal.content.title }} #{{ proposal.proposalId }}</h1>
      <v-btn
        v-if="proposal.status === 'PROPOSAL_STATUS_DEPOSIT_PERIOD'"
        color="primary"
        @click="$router.push('/gov/deposit/' + proposal.proposalId)"
      >
        Deposit
      </v-btn>
    </v-row>
    <p v-html="getDescription()" />

    <div v-if="proposal.status === 'PROPOSAL_STATUS_VOTING_PERIOD'">
      <h2>Vote</h2>
      <v-btn
        v-for="action in actions"
        :key="action.label"
        :color="action.color"
        class="mr-2"
        @click="onSubmitVote(action)"
        :disabled="!!loading"
        :loading="loading === action.value"
      >
        {{ action.label }}
      </v-btn>
    </div>

    <CustomAlert :loading="!!loading" :result="result" :error="error" />
  </v-container>
</template>

<script lang="ts">
import { VoteOption } from "@/types/cosmos/gov/v1beta1/gov";
import { submitVote, getProposal } from "@/utils/gov";
import { Component, Vue } from "vue-property-decorator";
import { marked } from "marked";
import CustomAlert from "@/components/CustomAlert.vue";

interface IAction {
  label: string;
  color: string;
  value: VoteOption;
}

@Component({
  name: "GovDetails",
  components: {
    CustomAlert,
  },
})
export default class GovDetails extends Vue {
  proposal: any = null;

  loading: VoteOption | null = null;
  result: any = null;
  error: string | null = null;

  getDescription() {
    return marked(this.proposal.description);
  }

  actions: IAction[] = [
    {
      label: "Yes",
      color: "green",
      value: VoteOption.VOTE_OPTION_YES,
    },
    { label: "No", color: "red", value: VoteOption.VOTE_OPTION_NO },
    {
      label: "Abstain",
      color: "grey",
      value: VoteOption.VOTE_OPTION_ABSTAIN,
    },
    {
      label: "No With Veto",
      color: "",
      value: VoteOption.VOTE_OPTION_NO_WITH_VETO,
    },
  ];

  created() {
    getProposal(this.$store.state.config.cosmos_rest, this.$route.params.id)
      .then((proposal) => {
        this.proposal = proposal.proposal;
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }

  onSubmitVote(action: IAction) {
    const vote = confirm(
      `Are your sure you want to vote \`${action.label}\` for proposal(${this.proposal.proposalId})?`
    );

    if (!vote) return;

    this.loading = action.value;
    this.result = null;
    this.error = null;

    submitVote(
      this.$store.state.config.tendermint_rpc,
      this.proposal.proposalId,
      action.value
    )
      .then((res) => {
        console.log(res);
        this.result = `Successfully voted with '${action.label}'.`;
      })
      .catch((err) => {
        console.log("Error", err);
        this.error = err.message;
      })
      .finally(() => {
        this.loading = null;
      });
  }
}
</script>
