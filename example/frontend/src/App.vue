<template>
  <v-app>
    <div>
      <v-btn tile color="primary" @click="$router.push('/')"> Cosmos </v-btn>
      <div class="mr-2" />
      <v-btn tile color="primary" @click="$router.push('/eth')"> Eth </v-btn>

      <v-divider class="mt-2 mb-2" />
    </div>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "App",
})
export default class App extends Vue {}
</script>
