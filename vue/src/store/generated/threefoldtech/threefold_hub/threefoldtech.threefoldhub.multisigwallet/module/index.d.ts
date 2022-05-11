import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgExecuteTransaction } from "./types/multisigwallet/tx";
import { MsgAddMember } from "./types/multisigwallet/tx";
import { MsgUpdateMinSigns } from "./types/multisigwallet/tx";
import { MsgSignMemberTransaction } from "./types/multisigwallet/tx";
import { MsgSignTransaction } from "./types/multisigwallet/tx";
import { MsgRemoveMember } from "./types/multisigwallet/tx";
import { MsgCreateWallet } from "./types/multisigwallet/tx";
import { MsgCreateTransaction } from "./types/multisigwallet/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgExecuteTransaction: (data: MsgExecuteTransaction) => EncodeObject;
    msgAddMember: (data: MsgAddMember) => EncodeObject;
    msgUpdateMinSigns: (data: MsgUpdateMinSigns) => EncodeObject;
    msgSignMemberTransaction: (data: MsgSignMemberTransaction) => EncodeObject;
    msgSignTransaction: (data: MsgSignTransaction) => EncodeObject;
    msgRemoveMember: (data: MsgRemoveMember) => EncodeObject;
    msgCreateWallet: (data: MsgCreateWallet) => EncodeObject;
    msgCreateTransaction: (data: MsgCreateTransaction) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
