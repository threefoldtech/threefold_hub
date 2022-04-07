<template>
  <v-app>
    <v-app-bar fixed dark>
      <v-toolbar-title>
        <v-img src="./assets/logo.png" height="40" width="40" alt="logo" />
      </v-toolbar-title>

      <v-spacer />

      <div>
        <v-btn
          depressed
          :color="$route.path === route.path ? 'primary' : 'transparent'"
          class="ml-2"
          v-for="route in routes"
          :key="route.path"
          @click="$router.push(route.path)"
        >
          {{ route.label }}
        </v-btn>
      </div>
    </v-app-bar>

    <v-main style="padding-top: 100px">
      <router-view />
    </v-main>
    <!-- </div> -->
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "App",
})
export default class App extends Vue {
  loading = true;
  error = false;

  routes = [
    { label: "Send to Cosmos", path: "/" },
    { label: "Send to BSC", path: "/bsc" },
    { label: "Add proposal", path: "/proposal" },
    { label: "Pending BSC transactions", path: "/list-bsc" },
    { label: "Proposals", path: "/list-proposals" },
  ];

  created() {
    this.__checkKeplr()
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.error = true;
      });
  }

  private __checkKeplr(): Promise<any> {
    let i = 0;

    return new Promise((res, rej) => {
      function _checkKeplr() {
        if (window.keplr) res(window.keplr);
        else if (i === 10) {
          rej();
        } else {
          i++;
          setTimeout(_checkKeplr, 500);
        }
      }
      _checkKeplr();
    });
  }
}
</script>
