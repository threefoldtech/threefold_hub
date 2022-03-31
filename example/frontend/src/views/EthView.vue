<template>
  <v-container>
    <h1>Eth</h1>

    <form @submit.prevent="onSendToEth()">
      <v-text-field label="Amount" placeholder="Amount" v-model="amount" />
      <v-text-field
        label="Token Denom"
        placeholder="Token Denom"
        v-model="token"
      />
      <v-text-field
        label="Bridge Fees"
        placeholder="Bridge Fees"
        v-model="fees"
      />
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
import { sendToEth } from "@/utils";

@Component({
  name: "EthView",
})
export default class Eth extends Vue {
  amount = "";
  token = "";
  fees = "";
  destination = "";

  get inValid() {
    return (
      this.amount === "" ||
      this.token === "" ||
      this.fees === "" ||
      this.destination === ""
    );
  }

  onSendToEth() {
    const { destination, amount, token, fees } = this;
    sendToEth(destination, amount, fees, token)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log("Error", err));
  }
}
</script>
