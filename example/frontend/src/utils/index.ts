import {
  SigningStargateClient,
} from "@cosmjs/stargate";
import { MsgCancelSendToEth, MsgSendToEth } from "../types/gravity/v1/msgs"; // Replace with your own Msg import
import { BigNumber, ethers } from "ethers";
import bepapi from "../json/bepabi.json";
import gravityabi from "../json/gravityabi.json";
import { loadConfig } from "./config";
import { Api, GravityV1QueryPendingSendToEthResponse } from "@/rest/cosmos";
import Long from "long";
import { snakeToCamelCase } from "./camel";
import { myRegistry } from "./registry"
import { GAS, FEE, FEE_DENOM } from "./fees" 
import { submitProposal, submitVote } from "./gov";
import { TextProposal, VoteOption } from "@/types/cosmos/gov/v1beta1/gov";
import { submitWithCheck } from "./txs";
const UINT256_MAX_INT = ethers.BigNumber.from(
  "115792089237316195423570985008687907853269984665640564039457584007913129639935"
);

const config = loadConfig();

export async function sendToCosmos(
  token_contract_address: string,
  gravity_contract_address: string,
  destination: string,
  amount: BigNumber
) {
  if (!window.ethereum) {
    throw new Error("metamask is not installed");
  }
  if (!window.ethereum.isMetaMask) {
    throw new Error(
      "using something else than metamask. we only support metamask."
    );
  }
  // TODO: should this be done one time?
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner(0);
  const bepContract = new ethers.Contract(
    token_contract_address,
    bepapi as any,
    signer
  );
  const gravityContract = new ethers.Contract(
    gravity_contract_address,
    gravityabi as any,
    signer
  );
  const senderAddress = (
    await window.ethereum.request({ method: "eth_requestAccounts" })
  )[0];
  // console.log(senderAddress)
  const allowance = ethers.BigNumber.from(
    await bepContract.allowance(senderAddress, gravity_contract_address)
  );
  if (allowance.lt(amount)) {
    // TODO: should we get only the allowance we need for this operation or require the max
    //             gbt client does the max thing but it seems fishy
    //             metamask however provides the user with the given amount
    //             and the ability to change it
    //             performing allowance everytime will cost extra fees
    //
    await bepContract.approve(gravity_contract_address, UINT256_MAX_INT);
  }
  console.log(
    "sending " +
      amount +
      " of token " +
      token_contract_address +
      " from  " +
      senderAddress +
      " to " +
      destination
  );

  return gravityContract.sendToCosmos(
    token_contract_address,
    destination,
    amount
  );
}

export function sendToEth(
  tendermint_rpc: string,
  destination: string,
  amount: BigNumber,
  bridge_fees: BigNumber,
  denom: string
) {
  if (!window.keplr) {
    throw new Error("keplr is not installed");
  }
  // TODO: should this be done globally one time?
  const offlineSigner = window.keplr.getOfflineSigner("threefold-hub");
  let client: any;

  return SigningStargateClient.connectWithSigner(
    tendermint_rpc, // Replace with your own RPC endpoint
    offlineSigner,
    { registry: myRegistry }
  )
    .then((_client) => (client = _client))
    .then(() => window.keplr.getKey("threefold-hub"))
    .then((account) => {
      const message = {
        typeUrl: "/gravity.v1.MsgSendToEth", // Same as above
        value: MsgSendToEth.fromPartial({
          sender: account.bech32Address,
          amount: {
            amount: amount.toString(),
            denom: denom,
          },
          bridgeFee: {
            amount: bridge_fees.toString(),
            denom: denom,
          },
          ethDest: destination,
        }),
      };
      const fee = {
        amount: [
          {
            denom: FEE_DENOM, // Use the appropriate fee denom for your chain
            amount: FEE,
          },
        ],
        gas: GAS,
      };
      return submitWithCheck(client, account.bech32Address, [message], fee);
    });

  // TODO: how to check transaction errors
}

export async function cancelSendToEth(
  tendermint_rpc: string,
  transactionId: string
) {
  if (!window.keplr) {
    throw new Error("keplr is not installed");
  }
  // TODO: should this be done globally one time?
  const offlineSigner = window.keplr.getOfflineSigner("threefold-hub");
  const sender = (await offlineSigner.getAccounts())[0];
  let client: any;
  console.log(sender);
  return SigningStargateClient.connectWithSigner(
    tendermint_rpc, // Replace with your own RPC endpoint
    offlineSigner,
    { registry: myRegistry }
  )
    .then((_client) => (client = _client))
    .then(() => window.keplr.getKey("threefold-hub"))
    .then((account) => {
      const message = {
        typeUrl: "/gravity.v1.MsgCancelSendToEth", // Same as above
        value: MsgCancelSendToEth.fromPartial({
          sender: sender.address,
          transactionId: Long.fromString(transactionId),
        }),
      };
      const fee = {
        amount: [
          {
            denom: FEE_DENOM, // Use the appropriate fee denom for your chain
            amount: FEE,
          },
        ],
        gas: GAS,
      };
      return submitWithCheck(client, account.bech32Address, [message], fee);
    });

  // TODO: how to check transaction errors
}

export async function pendingSendToEth(
  cosmos_rest: string
): Promise<GravityV1QueryPendingSendToEthResponse> {
  if (!window.keplr) {
    throw new Error("keplr is not installed");
  }
  const signer = window.keplr.getOfflineSigner("threefold-hub");
  const sender = (await signer.getAccounts())[0].address;
  const queryClient = new Api({ baseUrl: cosmos_rest });
  const response = await queryClient.gravity.gravityV1GetPendingSendToEth(
    { senderAddress: sender },
    { format: "json" }
  );
  snakeToCamelCase(response.data)
  return response.data as GravityV1QueryPendingSendToEthResponse;
}