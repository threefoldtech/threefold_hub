<template>
  <v-container>
    <v-row justify="center" v-if="!proposal">
      <v-progress-circular indeterminate />
    </v-row>
    <div v-if="proposal">
      <v-row class="mb-2" justify="space-between" align="center">
        <h1>{{ proposal.content.title }} #{{ proposal.proposal_id }}</h1>
        <v-btn
          v-if="proposal.status === 'PROPOSAL_STATUS_DEPOSIT_PERIOD'"
          color="primary"
          @click="$router.push('/proposal/deposit/' + proposal.proposal_id)"
        >
          Deposit
        </v-btn>
      </v-row>

      <div
        style="display: flex"
        v-if="proposal.status !== 'PROPOSAL_STATUS_DEPOSIT_PERIOD'"
      >
        <v-card
          v-for="item of [
            { label: 'YES', symbol: 'yes', color: 'success' },
            { label: 'NO', symbol: 'no', color: 'red' },
            { label: 'ABSTAIN', symbol: 'abstain', color: 'grey' },
            { label: 'NO (VETO)', symbol: 'no_with_veto', color: '#c40404' },
          ]"
          :key="item.symbol"
          :color="item.color"
          dark
          style="min-width: 150px"
          class="mr-2"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline">{{ item.label }}</div>
              <v-list-item-title class="text-h5 mt-1 mb-1">
                {{
                  totalVotes
                    ? (proposal.final_tally_result[item.symbol] * 100) /
                      totalVotes
                    : 0
                }}%
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ proposal.final_tally_result[item.symbol] }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <v-card style="width: 100%" dark v-if="bondedTokens">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline">Percent Voted</div>
              <v-list-item-title class="text-h5 mt-1 mb-1">
                <v-progress-linear
                  :value="(totalVotes * 100) / +bondedTokens"
                  :height="30"
                >
                  {{ totalVotes }} / {{ bondedTokens }}
                </v-progress-linear>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>

      <h3 class="mt-6">Total Deposit</h3>
      <p>
        {{ proposal.total_deposit.length ? proposal.total_deposit[0].amount : 0 }}
        <strong>
          {{
            proposal.total_deposit.length ? proposal.total_deposit[0].denom : ""
          }}</strong
        >
      </p>

      <h3 class="mt-6">Description</h3>
      <p v-html="getDescription()" />

      <div v-if="proposal.content['@type'].indexOf('SoftwareUpgrade') > -1">
        <v-divider class="mb-2"/>
        <p class="mb-0"><strong>Name:</strong> {{ proposal.content.plan.name }}</p>
        <p class="mb-0"><strong>Height:</strong> {{ proposal.content.plan.height }}</p>
        <p class="mb-0">
          <strong>info:</strong>
          <ul>
            <li v-for="(u, i) in normalizeInfo(proposal.content.plan.info)" :key="i">
              <strong>{{ u[0] }}:</strong> {{  u[1] }}
            </li>
          </ul>
        </p>
      </div>

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
    </div>
  </v-container>
</template>

<script lang="ts">
import { VoteOption } from "@/types/cosmos/gov/v1beta1/gov";
import { submitVote, getProposal } from "@/utils/gov";
import { Component, Vue } from "vue-property-decorator";
import { marked } from "marked";
import CustomAlert from "@/components/CustomAlert.vue";
import { pool } from "@/utils/staking";
import { formatUnits } from "ethers/lib/utils";

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
  bondedTokens: string | null = null;

  loading: VoteOption | null = null;
  result: any = null;
  error: string | null = null;

  getDescription() {
    return marked(this.proposal.content.description);
  }

  get totalVotes(): number {
    const { yes, no, abstain, no_with_veto } = this.proposal.final_tally_result;
    return +yes + +no + +abstain + +no_with_veto;
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
    this.loading = 1;
    getProposal(this.$store.state.config.cosmos_rest, this.$route.params.id)
      .then((proposal) => {
        this.proposal = proposal.proposal;
        this.proposal.total_deposit[0].amount = formatUnits(
          this.proposal.total_deposit[0].amount,
          this.$store.state.config.tft_decimals
        );
        this.proposal.final_tally_result.yes = formatUnits(
          this.proposal.final_tally_result.yes,
          this.$store.state.config.tft_decimals
        );
        this.proposal.final_tally_result.no = formatUnits(
          this.proposal.final_tally_result.no,
          this.$store.state.config.tft_decimals
        );
        this.proposal.final_tally_result.no_with_veto = formatUnits(
          this.proposal.final_tally_result.no_with_veto,
          this.$store.state.config.tft_decimals
        );
        this.proposal.final_tally_result.abstain = formatUnits(
          this.proposal.final_tally_result.abstain,
          this.$store.state.config.tft_decimals
        );
      })
      .catch((err) => {
        this.error = "Couldn't get proposal info (refresh to try again): " + err.message
      })
      .finally(() => {
        this.loading = null;
      });

    pool(this.$store.state.config.cosmos_rest)
      .then((res: any) => {
        this.bondedTokens = formatUnits(
          res.pool.bonded_tokens!,
          this.$store.state.config.tft_decimals
        );
      })
      .catch((err) => {
        this.error = "Couldn't get total bonded tokens (refresh to try again): " + err.message
      });
  }

  onSubmitVote(action: IAction) {
    const vote = confirm(
      `Are your sure you want to vote \`${action.label}\` for proposal(${this.proposal.proposal_id})?`
    );

    if (!vote) return;

    this.loading = action.value;
    this.result = null;
    this.error = null;

    submitVote(
      this.$store.state.config.tendermint_rpc,
      this.$store.state.config.cosmos_rest,
      this.$store.state.config.gas_price,
      this.$store.state.config.chain_id,
      this.proposal.proposal_id,
      action.value
    )
      .then((res) => {
        this.result = `Successfully voted with '${action.label}'.`;
      })
      .catch((err) => {
        this.error = err.message;
      })
      .finally(() => {
        this.loading = null;
      });
  }

  normalizeInfo(info: string): Array<[string, string]> {
    return Object.entries(JSON.parse(info));
  }
}
</script>
