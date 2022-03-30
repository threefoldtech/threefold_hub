import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateWallet } from "./types/multisigwallet/tx";
import { MsgAddSigners } from "./types/multisigwallet/tx";
import { MsgUpdateMinSigns } from "./types/multisigwallet/tx";
import { MsgCreateTransaction } from "./types/multisigwallet/tx";
import { MsgSignTransaction } from "./types/multisigwallet/tx";
import { MsgExecuteTransaction } from "./types/multisigwallet/tx";
import { MsgRemoveSigners } from "./types/multisigwallet/tx";
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
    msgCreateWallet: (data: MsgCreateWallet) => EncodeObject;
    msgAddSigners: (data: MsgAddSigners) => EncodeObject;
    msgUpdateMinSigns: (data: MsgUpdateMinSigns) => EncodeObject;
    msgCreateTransaction: (data: MsgCreateTransaction) => EncodeObject;
    msgSignTransaction: (data: MsgSignTransaction) => EncodeObject;
    msgExecuteTransaction: (data: MsgExecuteTransaction) => EncodeObject;
    msgRemoveSigners: (data: MsgRemoveSigners) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
