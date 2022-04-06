<template>
  <v-container>
    <v-row justify="space-between" class="mb-6">
      <h1>Proposals</h1>
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
import { CosmosGovV1Beta1QueryProposalsResponse } from "@/rest/cosmos";
import { listProposals } from "@/utils/gov";
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
