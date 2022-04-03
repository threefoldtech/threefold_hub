<template>
  <v-app>
    <div>
      <v-btn tile color="primary" class="mr-2" @click="$router.push('/')">
        Cosmos
      </v-btn>
      <v-btn tile color="primary" class="mr-2" @click="$router.push('/eth')">
        Eth
      </v-btn>
      <v-btn
        tile
        color="primary"
        class="mr-2"
        @click="$router.push('/list-eth')"
      >
        List Eth
      </v-btn>

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
export default class App extends Vue {
  created() {
    this.$store.dispatch("init");
  }
}
</script>
