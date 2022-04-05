import { CosmosGovV1Beta1QueryProposalsResponse, Api, CosmosGovV1Beta1QueryProposalResponse, CosmosGovV1Beta1QueryParamsResponse, CosmosGovV1Beta1QueryVotesResponse, CosmosGovV1Beta1QueryDepositsResponse } from "@/rest/cosmos";
import { SigningStargateClient } from "@cosmjs/stargate";
import { snakeToCamelCase } from "./camel"
import { myRegistry } from "./registry";
import { MsgDeposit, MsgSubmitProposal, MsgVote } from "../types/cosmos/gov/v1beta1/tx";
import { TextProposal, VoteOption } from "@/types/cosmos/gov/v1beta1/gov";
import { Any } from "@/types/google/protobuf/any";
import { BigNumber } from "ethers";
import { Coin } from "@/types/cosmos/base/v1beta1/coin";
import { GAS, FEE, FEE_DENOM } from "./fees"

async function listProposals(
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

async function listVotes(
    cosmos_rest: string,
    proposalId: string,
    offset?: number,
    limit?: number,
): Promise<CosmosGovV1Beta1QueryVotesResponse> {
    if (!window.keplr) {
        throw new Error("keplr is not installed");
    }
    const queryClient = new Api({ baseUrl: cosmos_rest });
    const response = await queryClient.cosmos.cosmosGovV1Beta1Votes(proposalId, {
        "pagination.limit": limit?.toString(),
        "pagination.offset": offset?.toString(),
    }, { format: "json" });
    snakeToCamelCase(response.data)
    return response.data as CosmosGovV1Beta1QueryVotesResponse;
}

async function listDeposites(
    cosmos_rest: string,
    proposalId: string,
    offset?: number,
    limit?: number,
): Promise<CosmosGovV1Beta1QueryDepositsResponse> {
    if (!window.keplr) {
        throw new Error("keplr is not installed");
    }
    const queryClient = new Api({ baseUrl: cosmos_rest });
    const response = await queryClient.cosmos.cosmosGovV1Beta1Deposits(proposalId, {
        "pagination.limit": limit?.toString(),
        "pagination.offset": offset?.toString(),
    }, { format: "json" });
    snakeToCamelCase(response.data)
    return response.data as CosmosGovV1Beta1QueryDepositsResponse;
}

async function getProposal(
    cosmos_rest: string,
    proposalId: string
): Promise<CosmosGovV1Beta1QueryProposalResponse> {
    if (!window.keplr) {
        throw new Error("keplr is not installed");
    }
    const queryClient = new Api({ baseUrl: cosmos_rest });
    const response = await queryClient.cosmos.cosmosGovV1Beta1Proposal(proposalId, { format: "json" });
    snakeToCamelCase(response.data)
    return response.data as CosmosGovV1Beta1QueryProposalResponse;
}

async function parameters(
    cosmos_rest: string,
): Promise<CosmosGovV1Beta1QueryParamsResponse> {
    if (!window.keplr) {
        throw new Error("keplr is not installed");
    }
    const queryClient = new Api({ baseUrl: cosmos_rest });
    // requesting all params is not supported over rest
    const params = await queryClient.cosmos.cosmosGovV1Beta1Params("deposit", {format: "json"});
    const tallying_params = await queryClient.cosmos.cosmosGovV1Beta1Params("tallying", {format: "json"});
    const voting_params = await queryClient.cosmos.cosmosGovV1Beta1Params("voting", {format: "json"});
    snakeToCamelCase(params.data)
    snakeToCamelCase(tallying_params.data)
    snakeToCamelCase(voting_params.data)
    params.data.tallyParams = tallying_params.data.tallyParams
    params.data.votingParams = tallying_params.data.votingParams
    return params.data as CosmosGovV1Beta1QueryParamsResponse;
}

async function submitProposal(
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
            return client.signAndBroadcast(account.bech32Address, [message], fee);
        });

    // TODO: how to check transaction errors
}

async function deposit(
    tendermint_rpc: string,
    proposalId: string,
    deposit: BigNumber,
    denom: string
) {
    if (!window.keplr) {
        throw new Error("keplr is not installed");
    }
    // TODO: should this be done globally one time?
    const offlineSigner = window.keplr.getOfflineSigner("threefold-hub");
    const sender = (await offlineSigner.getAccounts())[0];
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
                typeUrl: "/cosmos.gov.v1beta1.MsgDeposit", // Same as above
                value: MsgDeposit.fromPartial({
                    amount: [Coin.fromPartial({
                        amount: deposit.toString(),
                        denom: denom
                    })],
                    depositor: sender,
                    proposalId: proposalId
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

async function submitVote(
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

export {
    deposit,
    listProposals,
    listVotes,
    listDeposites,
    getProposal,
    parameters,
    submitProposal,
    submitVote
}