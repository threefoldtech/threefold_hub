<template>
  <v-container v-if="proposal">
    <h1>#{{ proposal.proposal_id }} {{ proposal.content.title }}</h1>
    <p>
      {{ proposal.content.description }}
    </p>

    <div v-if="proposal.status === 'PROPOSAL_STATUS_VOTING_PERIOD'">
      <h2>Vote</h2>
      <v-btn
        v-for="action in actions"
        :key="action.label"
        :color="action.color"
        class="mr-2"
        @click="onSubmitVote(action)"
      >
        {{ action.label }}
      </v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import { VoteOption } from "@/types/cosmos/gov/v1beta1/gov";
import { submitVote } from "@/utils/gov";
import { Component, Vue } from "vue-property-decorator";

interface IAction {
  label: string;
  color: string;
  value: VoteOption;
}

@Component({
  name: "GovDetails",
})
export default class GovDetails extends Vue {
  proposal: any;

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
    const proposal = [
      {
        proposal_id: "1",
        content: {
          "@type": "/cosmos.gov.v1beta1.TextProposal",
          title: "My first text proposal",
          description: "description of my first proposal",
        },
        status: "PROPOSAL_STATUS_VOTING_PERIOD",
        final_tally_result: {
          yes: "0",
          abstain: "0",
          no: "0",
          no_with_veto: "0",
        },
        submit_time: "2022-04-04T11:47:13.985289635Z",
        deposit_end_time: "2022-04-06T11:47:13.985289635Z",
        total_deposit: [
          {
            denom: "stake",
            amount: "10000200",
          },
        ],
        voting_start_time: "2022-04-04T11:49:29.816616431Z",
        voting_end_time: "2022-04-06T11:49:29.816616431Z",
      },
      {
        proposal_id: "2",
        content: {
          "@type": "/cosmos.gov.v1beta1.TextProposal",
          title: "hi",
          description: "hello",
        },
        status: "PROPOSAL_STATUS_DEPOSIT_PERIOD",
        final_tally_result: {
          yes: "0",
          abstain: "0",
          no: "0",
          no_with_veto: "0",
        },
        submit_time: "2022-04-04T15:02:16.204147223Z",
        deposit_end_time: "2022-04-06T15:02:16.204147223Z",
        total_deposit: [
          {
            denom: "stake",
            amount: "10",
          },
        ],
        voting_start_time: "0001-01-01T00:00:00Z",
        voting_end_time: "0001-01-01T00:00:00Z",
      },
    ].find(({ proposal_id }) => proposal_id === this.$route.params.id);

    this.proposal = proposal;
  }

  onSubmitVote(action: IAction) {
    const vote = confirm(
      `Are your sure you want to vote \`${action.label}\` for proposal(${this.proposal.proposal_id})?`
    );

    if (!vote) return;

    submitVote(
      this.$store.state.config.tendermint_rpc,
      this.proposal.proposal_id,
      action.value
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
