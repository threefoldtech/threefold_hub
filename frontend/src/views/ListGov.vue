<template>
  <v-container>
    <v-row justify="space-between" class="mb-6">
      <h1>Proposals</h1>
      <v-alert
        type="error"
        v-if="error != null"
      >
      {{ error }}
      </v-alert>

      <div style="display: flex">
        <div v-if="tally">
          <h4>Tally Parameters</h4>
          <ul style="list-style: square">
            <li>
              Quorum: <strong>{{ normalize(tally.quorum) }}</strong>
            </li>
            <li>
              Threshold: <strong>{{ normalize(tally.threshold) }}</strong>
            </li>
            <li>
              Veto Threshold:
              <strong>{{ normalize(tally.veto_threshold) }}</strong>
            </li>
          </ul>
        </div>

        <v-divider vertical class="mr-2 ml-2" v-if="tally" />

        <div v-if="deposit || voting">
          <div v-if="deposit">
            <h4>Deposit Parameters</h4>
            <ul style="list-style: square">
              <li>
                Min Deposit:
                <strong>
                  {{ deposit.min_deposit[0].amount }}
                  {{ deposit.min_deposit[0].denom }}
                </strong>
              </li>
              <li>
                Max Deposit Period:
                <strong>{{ deposit.max_deposit_period }}</strong>
              </li>
            </ul>
          </div>

          <v-divider v-if="deposit && voting" />

          <div v-if="voting">
            <h4>Voting Parameters</h4>
            <ul style="list-style: square">
              <li>
                Voting Period: <strong>{{ voting.voting_period }}</strong>
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

    <v-data-table :headers="headers" :items="proposals" :loading="loading">
      <template v-slot:[`item.status`]="{ item }">
        {{ item.status.replace("PROPOSAL_STATUS_", "") }}
      </template>

      <template v-slot:[`item.final_tally_result`]="{ item }">
        <VoteCircle
          :yes="+item.final_tally_result.yes"
          :no="+item.final_tally_result.no"
          :noWithVeto="+item.final_tally_result.no_with_veto"
        />
      </template>
      <template v-slot:[`item.submit_time`]="{ item }">
        {{ item.submit_time | toUTC }}
      </template>

      <template v-slot:[`item.type`]="{ item }">
        {{ getType(item.content["@type"]) }}
      </template>

      <template v-slot:[`item.details`]="{ item }">
        <v-btn
          color="primary"
          @click="$router.push('/proposal/' + item.proposal_id)"
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
import { listProposals, parameters, tally } from "@/utils/gov";
import { formatUnits} from "ethers/lib/utils";
import { parseUnits } from "@/utils/money";
import VoteCircle from "@/components/VoteCircle.vue";

@Component({
  name: "ListGov",
  components: {
    VoteCircle,
  },
})
export default class ListGov extends Vue {
  headers: { text: string; value: string }[] = [
    { text: "ID", value: "proposal_id" },
    { text: "Title", value: "content.title" },
    { text: "Type", value: "type" },
    { text: "Status", value: "status" },
    { text: "Votes", value: "final_tally_result" },
    { text: "Submitted", value: "submit_time" },
    { text: "Details", value: "details" },
  ];

  proposals: CosmosGovV1Beta1QueryProposalsResponse["proposals"] = [];
  loading = false;

  // params
  tally: CosmosGovV1Beta1QueryParamsResponse["tally_params"] | null = null;
  deposit: any | null = null;
  voting: CosmosGovV1Beta1QueryParamsResponse["voting_params"] | null = null;
  error: string | null = null;

  normalize(v?: string): string {
    if (typeof v !== "string") return v as any;

    return +v * 100 + "%";
  }

  async fillPendingProposalsVotes() {
    let proposals = this.proposals || [];
    for (const proposal of proposals) {
      if (proposal.status == "PROPOSAL_STATUS_VOTING_PERIOD") {
        let currentTally = await tally(
          this.$store.state.config.cosmos_rest,
          proposal.proposal_id || ""
        );
        proposal.final_tally_result = currentTally.tally;
      }
    }
  }

  created() {
    this.loading = true;

    parameters(this.$store.state.config.cosmos_rest)
      .then((res) => {
        this.tally = res.tally_params!;
        this.deposit = res.deposit_params!;
        this.deposit.min_deposit[0].amount = formatUnits(
          this.deposit.min_deposit[0].amount,
          this.$store.state.config.tft_decimals
        );
        this.voting = res.voting_params!;
      })
      .catch((err: any) => {
        this.error = "Couldn't get voting parameters (refresh to try again): " + err.message
      });

    listProposals(this.$store.state.config.cosmos_rest)
      .then((res: CosmosGovV1Beta1QueryProposalsResponse) => {
        this.proposals = res.proposals;
        this.fillPendingProposalsVotes();
      })
      .catch((err) => {
        this.error = "Couldn't list proposals (refresh to try again): " + err.message
      })
      .finally(() => {
        this.loading = false;
      });
  }

  getType(type: string): string {
    const parts = type.split(".");
    return parts[parts.length - 1].replace("Proposal", "");
  }
}
</script>
