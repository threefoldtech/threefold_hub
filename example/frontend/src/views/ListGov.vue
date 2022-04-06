<template>
  <v-container>
    <h1>List Gov</h1>

    <v-data-table :headers="headers" :items="proposals">
      <template v-slot:[`item.status`]="{ item }">
        {{ item.status.replace("PROPOSAL_STATUS_", "") }}
      </template>

      <template v-slot:[`item.finalTallyResult`]="{ item }">
        <br />
        <p style="text-align: right">
          YES: {{ item.finalTallyResult.yes }} <br />
          NO: {{ item.finalTallyResult.no }} <br />
          NO_WITH_VETO: {{ item.finalTallyResult.noWithVeto }} <br />
          ABSTAIN: {{ item.finalTallyResult.abstain }}
        </p>
      </template>

      <template v-slot:[`item.details`]="{ item }">
        <v-btn color="primary" @click="$router.push('/gov/' + item.proposalId)">
          View Details
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import { listProposals } from "@/utils/gov";
import { CosmosGovV1Beta1QueryProposalsResponse } from "@/rest/cosmos";
import { listProposals } from "@/utils/gov";

@Component({
  name: "ListGov",
})
export default class ListGov extends Vue {
  headers: { text: string; value: string }[] = [
    { text: "ID", value: "proposalId" },
    { text: "Title", value: "content.title" },
    { text: "Status", value: "status" },
    { text: "Votes", value: "finalTallyResult" },
    { text: "Submitted", value: "submitTime" },
    { text: "Details", value: "details" },
  ];

  proposals: CosmosGovV1Beta1QueryProposalsResponse["proposals"] = [];

  created() {
    listProposals(this.$store.state.config.cosmos_rest)
      // Promise.resolve({
      //   proposals: [
      //     {
      //       proposal_id: "1",
      //       content: {
      //         "@type": "/cosmos.gov.v1beta1.TextProposal",
      //         title: "My first text proposal",
      //         description: "description of my first proposal",
      //       },
      //       status: "PROPOSAL_STATUS_VOTING_PERIOD",
      //       final_tally_result: {
      //         yes: "0",
      //         abstain: "0",
      //         no: "0",
      //         no_with_veto: "0",
      //       },
      //       submit_time: "2022-04-04T11:47:13.985289635Z",
      //       deposit_end_time: "2022-04-06T11:47:13.985289635Z",
      //       total_deposit: [
      //         {
      //           denom: "stake",
      //           amount: "10000200",
      //         },
      //       ],
      //       voting_start_time: "2022-04-04T11:49:29.816616431Z",
      //       voting_end_time: "2022-04-06T11:49:29.816616431Z",
      //     },
      //     {
      //       proposal_id: "2",
      //       content: {
      //         "@type": "/cosmos.gov.v1beta1.TextProposal",
      //         title: "hi",
      //         description: "hello",
      //       },
      //       status: "PROPOSAL_STATUS_DEPOSIT_PERIOD",
      //       final_tally_result: {
      //         yes: "0",
      //         abstain: "0",
      //         no: "0",
      //         no_with_veto: "0",
      //       },
      //       submit_time: "2022-04-04T15:02:16.204147223Z",
      //       deposit_end_time: "2022-04-06T15:02:16.204147223Z",
      //       total_deposit: [
      //         {
      //           denom: "stake",
      //           amount: "10",
      //         },
      //       ],
      //       voting_start_time: "0001-01-01T00:00:00Z",
      //       voting_end_time: "0001-01-01T00:00:00Z",
      //     },
      //   ],
      //   pagination: {
      //     next_key: null,
      //     total: "2",
      //   },
      // } as unknown as CosmosGovV1Beta1QueryProposalsResponse)
      .then((res: CosmosGovV1Beta1QueryProposalsResponse) => {
        this.proposals = res.proposals;
        console.log(res.proposals?.[0]);
      })
      .catch((err) => {
        console.log("Error", err);
        console.log(err);
      });
  }
}
</script>
