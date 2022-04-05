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

    <v-main style="padding-top: 64px">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "App",
})
export default class App extends Vue {
  routes = [
    { label: "Cosmos", path: "/" },
    { label: "Eth", path: "/eth" },
    { label: "Gov", path: "/gov" },
    { label: "List Eth", path: "/list-eth" },
    { label: "List Gov", path: "/list-gov" },
  ];
}
</script>
