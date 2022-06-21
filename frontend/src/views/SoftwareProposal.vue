<template>
  <v-container>
    <h1>Add Software Proposal</h1>

    <v-form v-model="valid" @submit.prevent="onSubmitSoftwareUpgradeProposal()">
      <v-text-field label="Title" v-model="title" :rules="[nonemptyTitle]"/>
      <v-text-field label="Description" v-model="description" :rules="[nonemptyDescription]" />
      <v-text-field label="Name" v-model="name" :rules="[nonemptyName]" />
      <v-text-field
        label="Initial Deposit"
        placeholder="Initial Deposit"
        v-model="initialDeposit"
        :rules="[money]"
      />
      <v-text-field ref="chainHeight" label="Height" type="number" v-model="height" :rules="[futuristic]" />

      <v-row justify="space-between" class="mt-5 ml-0">
        <h3>Operating Systems</h3>
        <v-btn fab small color="success" @click="onAddSystem()">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-row>
      <br />
      <OsInput
        v-for="(os, idx) in systems"
        :key="idx"
        v-model="systems[idx]"
        :removable="systems.length > 1"
        @on:remove="onRemoveSystem(idx)"
      />

      <v-row justify="center" class="mt-4">
        <v-btn
          color="primary"
          type="submit"
          :disabled="loading || !valid"
          :loading="loading"
        >
          Submit
        </v-btn>
      </v-row>
    </v-form>

    <CustomAlert :loading="loading" :result="result" :error="error" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OsInput from "@/components/OsInput.vue";
import { submitSoftwareUpgradeProposal } from "@/utils/gov";
import { currentHeight } from "@/utils/index";
import { parseUnits } from "@/utils/money";
import { SoftwareUpgradeProposal } from "@/types/cosmos/upgrade/v1beta1/upgrade";
import Long from "long";
import { BigNumber } from "ethers";

@Component({
  name: "SoftwareProposal",
  components: {
    OsInput,
  },
})
export default class SoftwareProposal extends Vue {
  loading = false;
  result: any = null;
  error: string | null = null;
  valid = false;

  title = "";
  description = "";
  name = "";
  height = 0;
  initialDeposit = "1";
  systems = [{ os: null, arch: null, url: null }];
  chainHeight = 0;

  created() {
    currentHeight(
      this.$store.state.config.cosmos_rest,
      this.$store.state.config.chain_id,
    )
      .then((info) => { return info.block?.header?.height})
      .then((height) => {
        this.chainHeight = +(height || "0");
        (this.$refs.chainHeight as any).validate();
      })
      .catch(err => {console.log("Error", err)})
  }

  onAddSystem() {
    this.systems.push({ os: null, arch: null, url: null });
  }

  onRemoveSystem(i: number) {
    this.systems.splice(i, 1);
  }

  parseAmount(): BigNumber {
    if (this.initialDeposit == "") {
      throw new Error("Amount is required")
    }
    const decimals = this.$store.state.config.tft_decimals || 0;
    const amountBN = parseUnits(this.initialDeposit || "0", decimals);
    if (amountBN.lte(0)) {
      throw new Error("Amount must be positive")
    }
    return amountBN
  }

  money() {
    try {
      this.parseAmount()
      return true
    } catch (err: any) {
      return err.message
    }
  }

  nonemptyTitle() {
    if (this.title == "") {
      return "Title is required"
    }
    return true
  }

  nonemptyName() {
    if (this.name == "") {
      return "Name is required"
    }
    return true
  }

  nonemptyDescription() {
    if (this.description == "") {
      return "Description is required"
    }
    return true
  }
  futuristic() {
    if (this.height <= this.chainHeight) {
      return "Height must be in the future (after " + this.chainHeight + ")"
    }
    return true
  }
  onSubmitSoftwareUpgradeProposal() {
    const { title, description, name, height, initialDeposit, systems } = this;

    const info = systems.reduce((res, { os, arch, url }) => {
      res[`${os}/${arch}`] = url;
      return res;
    }, {} as any);

    const proposal: SoftwareUpgradeProposal = {
      title,
      description,
      plan: {
        name,
        height: Long.fromNumber(height),
        info: JSON.stringify(info),
      },
    };

    this.loading = true;
    submitSoftwareUpgradeProposal(
      this.$store.state.config.tendermint_rpc,
      this.$store.state.config.cosmos_rest,
      this.$store.state.config.gas_price,
      this.$store.state.config.chain_id,
      proposal,
      this.parseAmount(),
      this.$store.state.config.tft_denom
    )
      .then((res) => {
          this.result = "Proposal added succefully!";
      })
      .catch((err) => {
        this.error = err.message;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
</script>
