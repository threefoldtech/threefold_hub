import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgRemoveSigners } from "./types/multisigwallet/tx";
import { MsgCreateTransaction } from "./types/multisigwallet/tx";
import { MsgExecuteTransaction } from "./types/multisigwallet/tx";
import { MsgCreateWallet } from "./types/multisigwallet/tx";
import { MsgAddSigners } from "./types/multisigwallet/tx";
import { MsgSignTransaction } from "./types/multisigwallet/tx";
import { MsgUpdateMinSigns } from "./types/multisigwallet/tx";
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
    msgRemoveSigners: (data: MsgRemoveSigners) => EncodeObject;
    msgCreateTransaction: (data: MsgCreateTransaction) => EncodeObject;
    msgExecuteTransaction: (data: MsgExecuteTransaction) => EncodeObject;
    msgCreateWallet: (data: MsgCreateWallet) => EncodeObject;
    msgAddSigners: (data: MsgAddSigners) => EncodeObject;
    msgSignTransaction: (data: MsgSignTransaction) => EncodeObject;
    msgUpdateMinSigns: (data: MsgUpdateMinSigns) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
