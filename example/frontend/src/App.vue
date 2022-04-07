<template>
  <v-app>
    <v-app-bar fixed dark>
      <v-toolbar-title>
        <v-img src="./assets/logo.png" height="40" width="40" alt="logo" />
      </v-toolbar-title>

      <v-spacer />

      <div>
        <v-badge
          dot
          v-for="route in routes"
          :key="route.path"
          :value="keplr !== 'loaded' && route.keplr"
          color="red"
        >
          <v-btn
            depressed
            :color="$route.path === route.path ? 'primary' : 'transparent'"
            class="ml-2"
            @click="$router.push(route.path)"
            :disabled="keplr !== 'loaded' && route.keplr"
          >
            {{ route.label }}
          </v-btn>
        </v-badge>
      </div>
    </v-app-bar>

    <v-main style="padding-top: 100px">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Actions, Keplr } from "./store";

@Component({
  name: "App",
})
export default class App extends Vue {
  loading = true;
  error = false;

  routes = [
    { label: "Send to Cosmos", path: "/", keplr: true },
    { label: "Send to BSC", path: "/bsc", keplr: true },
    { label: "Add proposal", path: "/proposal", keplr: true },
    { label: "Pending BSC transactions", path: "/list-bsc", keplr: true },
    { label: "Proposals", path: "/list-proposals", keplr: false },
  ];

  get keplr(): Keplr {
    return this.$store.state.keplr;
  }

  created() {
    this.$store.dispatch(Actions.CHECK_KEPLR);
  }
}
</script>
