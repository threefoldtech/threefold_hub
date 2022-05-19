<template>
  <v-app>
    <v-app-bar fixed dark>
      <v-snackbar
        :value="error != null"
        color="red"
        :timeout="-1"
        absolute
        left
        top
      >
        {{ error }}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="yellow"
            text
            v-bind="attrs"
            @click="error = null"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
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
          <v-tooltip
            bottom
            :disabled="!(keplr !== 'loaded' && route.keplr)"
            type="error"
          >
            <template v-slot:activator="{ on, attrs }">
              <div v-bind="attrs" v-on="on">
                <v-btn
                  depressed
                  :color="
                    $route.path === route.path ? 'primary' : 'transparent'
                  "
                  class="ml-2"
                  @click="$router.push(route.path)"
                  :disabled="keplr !== 'loaded' && route.keplr"
                >
                  {{ route.label }}
                </v-btn>
              </div>
            </template>
            <span>Keplr must be installed first</span>
          </v-tooltip>
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
import { checkKeplr } from "@/utils/checkKeplr";
import { ensureChain } from "@/utils/keplr";

@Component({
  name: "App",
})
export default class App extends Vue {
  error: string | null = null;

  routes = [
    { label: "Send to Threefold Hub", path: "/", keplr: false },
    { label: "Send to BSC", path: "/bsc", keplr: true },
    { label: "Pending BSC transactions", path: "/list-bsc", keplr: true },
    { label: "Add proposal", path: "/add-proposal", keplr: true },
    { label: "Proposals", path: "/list-proposals", keplr: false },
    { label: "Validators", path: "/validators", keplr: false },
  ];

  get keplr(): Keplr {
    return this.$store.state.keplr;
  }

  created() {
    this.$store.dispatch(Actions.CHECK_KEPLR);
    checkKeplr().then((_) => {
      ensureChain(
        this.$store.state.config.chain_id,
        "tf",
        this.$store.state.config.tendermint_rpc,
        this.$store.state.config.cosmos_rest
      ).catch((e) => {
        this.error = "Couldn't check whether keplr installed or not (refresh to try again): " + e.message
      });
    });
  }
}
</script>
