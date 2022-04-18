<template>
  <v-container>
    <h1>Add Software Proposal</h1>

    <OsInput />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OsInput from "@/components/OsInput.vue";
// import { submitSoftwareUpgradeProposal } from '@/utils/gov';

@Component({
  name: "SoftwareProposal",
  components: {
    OsInput,
  },
})
export default class SoftwareProposal extends Vue {
  // created() {
  //   submitSoftwareUpgradeProposal()
  // }
}
</script>
