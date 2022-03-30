// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateWallet } from "./types/multisigwallet/tx";
import { MsgAddSigners } from "./types/multisigwallet/tx";
import { MsgUpdateMinSigns } from "./types/multisigwallet/tx";
import { MsgCreateTransaction } from "./types/multisigwallet/tx";
import { MsgSignTransaction } from "./types/multisigwallet/tx";
import { MsgExecuteTransaction } from "./types/multisigwallet/tx";
import { MsgRemoveSigners } from "./types/multisigwallet/tx";
const types = [
    ["/threefoldtech.threefoldhub.multisigwallet.MsgCreateWallet", MsgCreateWallet],
    ["/threefoldtech.threefoldhub.multisigwallet.MsgAddSigners", MsgAddSigners],
    ["/threefoldtech.threefoldhub.multisigwallet.MsgUpdateMinSigns", MsgUpdateMinSigns],
    ["/threefoldtech.threefoldhub.multisigwallet.MsgCreateTransaction", MsgCreateTransaction],
    ["/threefoldtech.threefoldhub.multisigwallet.MsgSignTransaction", MsgSignTransaction],
    ["/threefoldtech.threefoldhub.multisigwallet.MsgExecuteTransaction", MsgExecuteTransaction],
    ["/threefoldtech.threefoldhub.multisigwallet.MsgRemoveSigners", MsgRemoveSigners],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreateWallet: (data) => ({ typeUrl: "/threefoldtech.threefoldhub.multisigwallet.MsgCreateWallet", value: MsgCreateWallet.fromPartial(data) }),
        msgAddSigners: (data) => ({ typeUrl: "/threefoldtech.threefoldhub.multisigwallet.MsgAddSigners", value: MsgAddSigners.fromPartial(data) }),
        msgUpdateMinSigns: (data) => ({ typeUrl: "/threefoldtech.threefoldhub.multisigwallet.MsgUpdateMinSigns", value: MsgUpdateMinSigns.fromPartial(data) }),
        msgCreateTransaction: (data) => ({ typeUrl: "/threefoldtech.threefoldhub.multisigwallet.MsgCreateTransaction", value: MsgCreateTransaction.fromPartial(data) }),
        msgSignTransaction: (data) => ({ typeUrl: "/threefoldtech.threefoldhub.multisigwallet.MsgSignTransaction", value: MsgSignTransaction.fromPartial(data) }),
        msgExecuteTransaction: (data) => ({ typeUrl: "/threefoldtech.threefoldhub.multisigwallet.MsgExecuteTransaction", value: MsgExecuteTransaction.fromPartial(data) }),
        msgRemoveSigners: (data) => ({ typeUrl: "/threefoldtech.threefoldhub.multisigwallet.MsgRemoveSigners", value: MsgRemoveSigners.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
