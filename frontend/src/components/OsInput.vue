<template>
  <div style="display: flex">
    <div style="width: 100px">
      <v-select
        label="OS"
        :items="['linux', 'windows', 'darwin']"
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
    <v-text-field label="Url" v-model="url" :rules="[validUrl]"/>
    <v-btn
      fab
      small
      color="error"
      class="ml-2"
      @click="$emit('on:remove')"
      v-if="removable"
    >
      <v-icon> mdi-minus </v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
  name: "OsInput",
})
export default class OsInput extends Vue {
  @Prop({ default: false }) removable!: boolean;
  @Prop({ required: false }) value!: any;

  os = "linux";
  arch = "amd64";
  url = null;

  validUrl() {
    if (this.url === null || this.url === "") {
      return "URL is required"
    }
    let url;    
    try {
      url = new URL(this.url);
    } catch (err: any) {
      return "Invalid url";
    }

    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return "URL must be http or https";
    }
    return true;
  }

  get osInfo() {
    const { os, arch, url } = this;
    return { os, arch, url };
  }

  @Watch("os")
  @Watch("arch")
  @Watch("url")
  onUpdateValue() {
    this.$emit("input", this.osInfo);
  }
}
</script>
