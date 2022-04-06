<template>
  <v-container>
    <h1>Proposals</h1>

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
        <v-btn color="primary" @click="$router.push('/proposal/' + item.proposalId)">
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
