<template>
  <v-row>
    <div style="width: 100px">
      <v-select
        label="OS"
        :items="['windows', 'darwin', 'linux']"
        v-model="os"
      />
    </div>
    <div style="width: 100px" class="mr-2 ml-2">
      <v-select
        label="Arch"
        :items="['amd64', 'arm', 'arm64', 'i386']"
        v-model="arch"
      />
    </div>
    <v-text-field label="Url" v-model="url" />
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "OsInput",
})
export default class OsInput extends Vue {
  os = null;
  arch = null;
  url = null;
}
</script>
