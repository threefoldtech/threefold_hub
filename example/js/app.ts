import { DirectSecp256k1HdWallet, makeAuthInfoBytes, Registry } from "@cosmjs/proto-signing";
import {
  defaultRegistryTypes as defaultStargateTypes,
  SigningStargateClient,
} from "@cosmjs/stargate";
import { MsgSendToEth } from "./types/gravity/v1/msgs"; // Replace with your own Msg import
import { ethers } from "ethers";

declare global {
    interface Window {
        keplr: any;
        ethereum: any;
    }
}

const GAS = "100000";
const FEE = "120000";
const FEE_DENOM = "uETH";

const UINT256_MAX_INT = ethers.BigNumber.from("115792089237316195423570985008687907853269984665640564039457584007913129639935");

const myRegistry = new Registry(defaultStargateTypes);
myRegistry.register("/gravity.v1.MsgSendToEth", MsgSendToEth); // Replace with your own type URL and Msg class

const bepapi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];
const gravityabi = [{"inputs":[{"internalType":"bytes32","name":"_gravityId","type":"bytes32"},{"internalType":"address[]","name":"_validators","type":"address[]"},{"internalType":"uint256[]","name":"_powers","type":"uint256[]"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"BatchTimedOut","type":"error"},{"inputs":[],"name":"IncorrectCheckpoint","type":"error"},{"inputs":[{"internalType":"uint256","name":"cumulativePower","type":"uint256"},{"internalType":"uint256","name":"powerThreshold","type":"uint256"}],"name":"InsufficientPower","type":"error"},{"inputs":[{"internalType":"uint256","name":"newNonce","type":"uint256"},{"internalType":"uint256","name":"currentNonce","type":"uint256"}],"name":"InvalidBatchNonce","type":"error"},{"inputs":[],"name":"InvalidLogicCallFees","type":"error"},{"inputs":[{"internalType":"uint256","name":"newNonce","type":"uint256"},{"internalType":"uint256","name":"currentNonce","type":"uint256"}],"name":"InvalidLogicCallNonce","type":"error"},{"inputs":[],"name":"InvalidLogicCallTransfers","type":"error"},{"inputs":[],"name":"InvalidSendToCosmos","type":"error"},{"inputs":[],"name":"InvalidSignature","type":"error"},{"inputs":[{"internalType":"uint256","name":"newNonce","type":"uint256"},{"internalType":"uint256","name":"currentNonce","type":"uint256"}],"name":"InvalidValsetNonce","type":"error"},{"inputs":[],"name":"LogicCallTimedOut","type":"error"},{"inputs":[],"name":"MalformedBatch","type":"error"},{"inputs":[],"name":"MalformedCurrentValidatorSet","type":"error"},{"inputs":[],"name":"MalformedNewValidatorSet","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_cosmosDenom","type":"string"},{"indexed":true,"internalType":"address","name":"_tokenContract","type":"address"},{"indexed":false,"internalType":"string","name":"_name","type":"string"},{"indexed":false,"internalType":"string","name":"_symbol","type":"string"},{"indexed":false,"internalType":"uint8","name":"_decimals","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"_eventNonce","type":"uint256"}],"name":"ERC20DeployedEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"_invalidationId","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"_invalidationNonce","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"_returnData","type":"bytes"},{"indexed":false,"internalType":"uint256","name":"_eventNonce","type":"uint256"}],"name":"LogicCallEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_tokenContract","type":"address"},{"indexed":true,"internalType":"address","name":"_sender","type":"address"},{"indexed":false,"internalType":"string","name":"_destination","type":"string"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_eventNonce","type":"uint256"}],"name":"SendToCosmosEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_batchNonce","type":"uint256"},{"indexed":true,"internalType":"address","name":"_token","type":"address"},{"indexed":false,"internalType":"uint256","name":"_eventNonce","type":"uint256"}],"name":"TransactionBatchExecutedEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_newValsetNonce","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_eventNonce","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_rewardAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"_rewardToken","type":"address"},{"indexed":false,"internalType":"address[]","name":"_validators","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"_powers","type":"uint256[]"}],"name":"ValsetUpdatedEvent","type":"event"},{"inputs":[{"internalType":"string","name":"_cosmosDenom","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"}],"name":"deployERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_erc20Address","type":"address"}],"name":"lastBatchNonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_invalidation_id","type":"bytes32"}],"name":"lastLogicCallNonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenContract","type":"address"},{"internalType":"string","name":"_destination","type":"string"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"sendToCosmos","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"state_gravityId","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"state_invalidationMapping","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"state_lastBatchNonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"state_lastEventNonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"state_lastValsetCheckpoint","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"state_lastValsetNonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address[]","name":"validators","type":"address[]"},{"internalType":"uint256[]","name":"powers","type":"uint256[]"},{"internalType":"uint256","name":"valsetNonce","type":"uint256"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"address","name":"rewardToken","type":"address"}],"internalType":"struct ValsetArgs","name":"_currentValset","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct Signature[]","name":"_sigs","type":"tuple[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address[]","name":"_destinations","type":"address[]"},{"internalType":"uint256[]","name":"_fees","type":"uint256[]"},{"internalType":"uint256","name":"_batchNonce","type":"uint256"},{"internalType":"address","name":"_tokenContract","type":"address"},{"internalType":"uint256","name":"_batchTimeout","type":"uint256"}],"name":"submitBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address[]","name":"validators","type":"address[]"},{"internalType":"uint256[]","name":"powers","type":"uint256[]"},{"internalType":"uint256","name":"valsetNonce","type":"uint256"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"address","name":"rewardToken","type":"address"}],"internalType":"struct ValsetArgs","name":"_currentValset","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct Signature[]","name":"_sigs","type":"tuple[]"},{"components":[{"internalType":"uint256[]","name":"transferAmounts","type":"uint256[]"},{"internalType":"address[]","name":"transferTokenContracts","type":"address[]"},{"internalType":"uint256[]","name":"feeAmounts","type":"uint256[]"},{"internalType":"address[]","name":"feeTokenContracts","type":"address[]"},{"internalType":"address","name":"logicContractAddress","type":"address"},{"internalType":"bytes","name":"payload","type":"bytes"},{"internalType":"uint256","name":"timeOut","type":"uint256"},{"internalType":"bytes32","name":"invalidationId","type":"bytes32"},{"internalType":"uint256","name":"invalidationNonce","type":"uint256"}],"internalType":"struct LogicCallArgs","name":"_args","type":"tuple"}],"name":"submitLogicCall","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address[]","name":"validators","type":"address[]"},{"internalType":"uint256[]","name":"powers","type":"uint256[]"},{"internalType":"uint256","name":"valsetNonce","type":"uint256"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"address","name":"rewardToken","type":"address"}],"internalType":"struct ValsetArgs","name":"_currentValset","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct Signature[]","name":"_sigs","type":"tuple[]"},{"internalType":"bytes32","name":"_theHash","type":"bytes32"},{"internalType":"uint256","name":"_powerThreshold","type":"uint256"}],"name":"testCheckValidatorSignatures","outputs":[],"stateMutability":"pure","type":"function"},{"inputs":[{"components":[{"internalType":"address[]","name":"validators","type":"address[]"},{"internalType":"uint256[]","name":"powers","type":"uint256[]"},{"internalType":"uint256","name":"valsetNonce","type":"uint256"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"address","name":"rewardToken","type":"address"}],"internalType":"struct ValsetArgs","name":"_valsetArgs","type":"tuple"},{"internalType":"bytes32","name":"_gravityId","type":"bytes32"}],"name":"testMakeCheckpoint","outputs":[],"stateMutability":"pure","type":"function"},{"inputs":[{"components":[{"internalType":"address[]","name":"validators","type":"address[]"},{"internalType":"uint256[]","name":"powers","type":"uint256[]"},{"internalType":"uint256","name":"valsetNonce","type":"uint256"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"address","name":"rewardToken","type":"address"}],"internalType":"struct ValsetArgs","name":"_newValset","type":"tuple"},{"components":[{"internalType":"address[]","name":"validators","type":"address[]"},{"internalType":"uint256[]","name":"powers","type":"uint256[]"},{"internalType":"uint256","name":"valsetNonce","type":"uint256"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"address","name":"rewardToken","type":"address"}],"internalType":"struct ValsetArgs","name":"_currentValset","type":"tuple"},{"components":[{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"internalType":"struct Signature[]","name":"_sigs","type":"tuple[]"}],"name":"updateValset","outputs":[],"stateMutability":"nonpayable","type":"function"}];

async function sendToCosmos(token_contract_address: string, gravity_contract_address: string, destination: string, amountStr: string) {
    if (!window.ethereum) {
        throw new Error("metamask is not installed")
    }
    if (!window.ethereum.isMetaMask) {
        throw new Error("using something else than metamask. we only support metamask.")
    }
    // TODO: should this be done one time?
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner(0);
    let bepContract = new ethers.Contract(token_contract_address, bepapi, signer);
    let gravityContract = new ethers.Contract(gravity_contract_address, gravityabi, signer);
    let senderAddress = (await window.ethereum.request({ method: 'eth_requestAccounts' }))[0];
    // console.log(senderAddress)
    let allowance = ethers.BigNumber.from(await bepContract.allowance(senderAddress, gravity_contract_address));
    let amount = ethers.BigNumber.from(amountStr)
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
        )
    await gravityContract.sendToCosmos(token_contract_address, destination, amount);
}
async function sendToEth(destination: string, amount: string, bridge_fees: string, denom: string) {
    if (!window.keplr) {
        throw new Error("keplr is not installed")
    }
    // TODO: should this be done globally one time?
    let offlineSigner = window.keplr.getOfflineSigner("threefold-hub");
    const client = await SigningStargateClient.connectWithSigner(
        "http://localhost:26657", // Replace with your own RPC endpoint
        offlineSigner,
        { registry: myRegistry },
        );
    
    let account = await window.keplr.getKey('threefold-hub');
    const message = {
    typeUrl: "/gravity.v1.MsgSendToEth", // Same as above
    value: MsgSendToEth.fromPartial({
        sender: account.bech32Address,
        amount: {
            amount: amount,
            denom: denom,
        },
        bridgeFee:  {
            amount: bridge_fees,
            denom: denom,
        },
        ethDest: destination

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

    // Inside an async function...
    // This method uses the registry you provided
    const response = await client.signAndBroadcast(account.bech32Address, [message], fee);
    // TODO: how to check transaction errors
}

window.onload = function() {
    function value(v) {
        console.log(v)
        console.log(document.getElementById(v))
        return (document.getElementById(v) as HTMLInputElement).value
    }
    document
        .getElementById("cosmos_button")
        .addEventListener("click", function() {
            sendToCosmos(
                value("token_contract_address"),
                value("gravity_contract_address"),
                value("cosmos_destination"),
                value("cosmos_amount")
            )
        })
    document
        .getElementById("eth_button")
        .addEventListener("click", function() {
            sendToEth(
                value("eth_destination"),
                value("eth_amount"),
                value("bridge_fee"),
                value("denom")
            )
        })
}