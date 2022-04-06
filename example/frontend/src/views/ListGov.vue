<template>
  <v-container>
    <v-row justify="space-between" class="mb-6">
      <h1>Proposals</h1>

      <div style="display: flex">
        <div v-if="tally">
          <h4>Tally Parameters</h4>
          <ul style="list-style: square">
            <li>
              Quorum: <strong>{{ tally.quorum }}</strong>
            </li>
            <li>
              Threshold: <strong>{{ tally.threshold }}</strong>
            </li>
            <li>
              Veto Threshold: <strong>{{ tally.vetoThreshold }}</strong>
            </li>
          </ul>
        </div>

        <v-divider vertical class="mr-2 ml-2" v-if="tally" />

        <div v-if="deposit || voting">
          <div v-if="deposit">
            <h4>Deposit Parameters</h4>
            <ul style="list-style: square">
              <li>
                Min Deposit: <strong>{{ deposit.minDeposit }}</strong>
              </li>
            </ul>
          </div>

          <v-divider v-if="deposit && voting" />

          <div v-if="voting">
            <h4>Voting Parameters</h4>
            <ul style="list-style: square">
              <li>
                Voting Period: <strong>{{ voting.votingPeriod }}</strong>
              </li>
            </ul>
          </div>
        </div>

        <v-divider vertical class="mr-2 ml-2" v-if="deposit || voting" />

        <div>
          <ul style="list-style: none">
            <li
              v-for="color in [
                ['#2ecc71', 'Yes'],
                ['#e74c3c', 'No'],
                ['#c0392b', 'No With Veto'],
              ]"
              :key="color[0]"
              style="display: flex; align-items: center"
            >
              <span
                :style="
                  'display: inline-block; margin-right: 10px;height: 20px; width: 20px; background-color:' +
                  color[0]
                "
              />
              <span>{{ color[1] }}</span>
            </li>
          </ul>
        </div>
      </div>
    </v-row>

    <v-data-table :headers="headers" :items="proposals">
      <template v-slot:[`item.status`]="{ item }">
        {{ item.status.replace("PROPOSAL_STATUS_", "") }}
      </template>

      <template v-slot:[`item.finalTallyResult`]="{ item }">
        <v-col>
          <VoteCircle
            :yes="item.finalTallyResult.yes"
            :no="item.finalTallyResult.no"
            :noWithVeto="item.finalTallyResult.noWithVeto"
          />
          <!-- ["#2ecc71", "#e74c3c", "#c0392b"] -->
          <p>
            Yes:
            {{
              item.finalTallyResult.yes /
              (item.finalTallyResult.yes +
                item.finalTallyResult.no +
                item.finalTallyResult.noWithVeto)
            }}
          </p>
        </v-col>
      </template>

      <template v-slot:[`item.submitTime`]="{ item }">
        {{ item.submitTime | toUTC }}
      </template>

      <template v-slot:[`item.details`]="{ item }">
        <v-btn
          color="primary"
          @click="$router.push('/proposal/' + item.proposalId)"
        >
          View Details
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  CosmosGovV1Beta1QueryParamsResponse,
  CosmosGovV1Beta1QueryProposalsResponse,
} from "@/rest/cosmos";
import { listProposals, parameters } from "@/utils/gov";
import VoteCircle from "@/components/VoteCircle.vue";

@Component({
  name: "ListGov",
  components: {
    VoteCircle,
  },
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

  // params
  tally: CosmosGovV1Beta1QueryParamsResponse["tallyParams"];
  deposit: CosmosGovV1Beta1QueryParamsResponse["depositParams"];
  voting: CosmosGovV1Beta1QueryParamsResponse["votingParams"];

  created() {
    parameters(this.$store.state.config.cosmos_rest)
      .then((res) => {
        this.tally = res.tallyParams!;
        this.deposit = res.depositParams!;
        this.voting = res.votingParams!;
      })
      .catch((err) => {
        console.log("Error", err);
      });

    listProposals(this.$store.state.config.cosmos_rest)
      .then((res: CosmosGovV1Beta1QueryProposalsResponse) => {
        this.proposals = res.proposals;
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }
}
</script>
