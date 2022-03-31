<template>
  <v-container>
    <h1>Cosmos</h1>

    <form>
      <v-text-field
        label="Gravity Contract Address"
        placeholder="Gravity Contract Address"
        v-model="gravity"
      />
      <v-text-field
        label="Token Contract Address"
        placeholder="Token Contract Address"
        v-model="token"
      />
      <v-text-field label="Amount" placeholder="Amount" v-model="amount" />
      <v-text-field
        label="Destination"
        placeholder="Destination"
        v-model="destination"
      />

      <v-row justify="center">
        <v-btn color="primary" x-large type="submit" :disabled="inValid">
          Send
        </v-btn>
      </v-row>
    </form>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { sendToCosmos } from "@/utils";

@Component({
  name: "CosmosView",
})
export default class Cosmos extends Vue {
  gravity = "";
  token = "";
  amount = "";
  destination = "";

  get inValid() {
    return (
      this.gravity === "" ||
      this.token === "" ||
      this.amount === "" ||
      this.destination === ""
    );
  }

  onSendToCosmos() {
    const { token, gravity, amount, destination } = this;
    sendToCosmos(token, gravity, destination, amount)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }
}
</script>
