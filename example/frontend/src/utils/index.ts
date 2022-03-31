import { Registry } from "@cosmjs/proto-signing";
import {
  defaultRegistryTypes as defaultStargateTypes,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { MsgSendToEth } from "../types/gravity/v1/msgs"; // Replace with your own Msg import
import { ethers } from "ethers";
import bepapi from "../json/bepapi.json";
import gravityabi from "../json/bepapi.json";

const GAS = "100000";
const FEE = "120000";
const FEE_DENOM = "uETH";

const UINT256_MAX_INT = ethers.BigNumber.from(
  "115792089237316195423570985008687907853269984665640564039457584007913129639935"
);

const myRegistry = new Registry(defaultStargateTypes);
myRegistry.register("/gravity.v1.MsgSendToEth", MsgSendToEth); // Replace with your own type URL and Msg class

export async function sendToCosmos(
  token_contract_address: string,
  gravity_contract_address: string,
  destination: string,
  amountStr: string
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
  const amount = ethers.BigNumber.from(amountStr);
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
  destination: string,
  amount: string,
  bridge_fees: string,
  denom: string
) {
  if (!window.keplr) {
    throw new Error("keplr is not installed");
  }
  // TODO: should this be done globally one time?
  const offlineSigner = window.keplr.getOfflineSigner("threefold-hub");
  let client: any;

  return SigningStargateClient.connectWithSigner(
    "http://localhost:26657", // Replace with your own RPC endpoint
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
            amount: amount,
            denom: denom,
          },
          bridgeFee: {
            amount: bridge_fees,
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
      return client.signAndBroadcast(account.bech32Address, [message], fee);
    });

  // Inside an async function...
  // This method uses the registry you provided
  // TODO: how to check transaction errors
}

// window.onload = function () {
//   function value(v) {
//     console.log(v);
//     console.log(document.getElementById(v));
//     return (document.getElementById(v) as HTMLInputElement).value;
//   }
//   document
//     .getElementById("cosmos_button")
//     .addEventListener("click", function () {
//       sendToCosmos(
//         value("token_contract_address"),
//         value("gravity_contract_address"),
//         value("cosmos_destination"),
//         value("cosmos_amount")
//       );
//     });
//   document.getElementById("eth_button").addEventListener("click", function () {
//     sendToEth(
//       value("eth_destination"),
//       value("eth_amount"),
//       value("bridge_fee"),
//       value("denom")
//     );
//   });
// };
