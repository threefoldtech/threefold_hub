import { CosmosGovV1Beta1QueryProposalsResponse, Api } from "@/rest/cosmos";
import { SigningStargateClient } from "@cosmjs/stargate";
import { snakeToCamelCase } from "./camel"
import { myRegistry } from "./registry";
import { MsgSubmitProposal, MsgVote } from "../types/cosmos/gov/v1beta1/tx";
import { TextProposal, VoteOption } from "@/types/cosmos/gov/v1beta1/gov";
import { Any } from "@/types/google/protobuf/any";
import { BigNumber } from "ethers";
import { Coin } from "@/types/cosmos/base/v1beta1/coin";
import { GAS, FEE, FEE_DENOM } from "./fees"

/*
    proto.RegisterType((*MsgSubmitProposal)(nil), "cosmos.gov.v1beta1.MsgSubmitProposal")
    proto.RegisterType((*MsgSubmitProposalResponse)(nil), "cosmos.gov.v1beta1.MsgSubmitProposalResponse")
    proto.RegisterType((*MsgVote)(nil), "cosmos.gov.v1beta1.MsgVote")
    proto.RegisterType((*MsgVoteResponse)(nil), "cosmos.gov.v1beta1.MsgVoteResponse")
    proto.RegisterType((*MsgVoteWeighted)(nil), "cosmos.gov.v1beta1.MsgVoteWeighted")
    proto.RegisterType((*MsgVoteWeightedResponse)(nil), "cosmos.gov.v1beta1.MsgVoteWeightedResponse")
    proto.RegisterType((*MsgDeposit)(nil), "cosmos.gov.v1beta1.MsgDeposit")
    proto.RegisterType((*MsgDepositResponse)(nil), "cosmos.gov.v1beta1.MsgDepositResponse")
*/

export async function listProposals(
    cosmos_rest: string,
    status?:
        | "PROPOSAL_STATUS_UNSPECIFIED"
        | "PROPOSAL_STATUS_DEPOSIT_PERIOD"
        | "PROPOSAL_STATUS_VOTING_PERIOD"
        | "PROPOSAL_STATUS_PASSED"
        | "PROPOSAL_STATUS_REJECTED"
        | "PROPOSAL_STATUS_FAILED",
    offset?: number,
    limit?: number,
): Promise<CosmosGovV1Beta1QueryProposalsResponse> {
    if (!window.keplr) {
        throw new Error("keplr is not installed");
    }
    const signer = window.keplr.getOfflineSigner("threefold-hub");
    const sender = (await signer.getAccounts())[0].address;
    const queryClient = new Api({ baseUrl: cosmos_rest });
    const response = await queryClient.cosmos.cosmosGovV1Beta1Proposals(
        {
            proposalStatus: status,
            "pagination.offset": offset?.toString(),
            "pagination.limit": limit?.toString(),
        },
        { format: "json" }
    );
    snakeToCamelCase(response.data)
    return response.data as CosmosGovV1Beta1QueryProposalsResponse;
}

export async function submitProposal(
    tendermint_rpc: string,
    content: TextProposal,
    initialDeposit: BigNumber,
    denom: string
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
                typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal", // Same as above
                value: MsgSubmitProposal.fromPartial({
                    content: Any.fromPartial({
                        typeUrl: "/cosmos.gov.v1beta1.TextProposal",
                        value: TextProposal.encode(content).finish()
                    }),
                    initialDeposit: [Coin.fromPartial({
                        amount: initialDeposit.toString(),
                        denom: denom
                    })],
                    proposer: sender.address
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
            console.log(sender);
            console.log(message);
            return client.signAndBroadcast(account.bech32Address, [message], fee);
        });

    // TODO: how to check transaction errors
}

export async function submitVote(
    tendermint_rpc: string,
    proposalId: string,
    vote: VoteOption
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
                typeUrl: "/cosmos.gov.v1beta1.MsgVote", // Same as above
                value: MsgVote.fromPartial({
                    voter: sender.address,
                    proposalId: proposalId,
                    option: vote
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

    // TODO: how to check transaction errors
}
  // cosmos.gov.v1beta1.TextProposal