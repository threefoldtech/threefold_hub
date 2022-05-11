import { Params } from "../multisigwallet/params";
import { Wallet } from "../multisigwallet/wallet";
import { Transaction } from "../multisigwallet/transaction";
import { NextTransaction } from "../multisigwallet/next_transaction";
import { MemberTransaction } from "../multisigwallet/member_transaction";
import { NextMemberTransaction } from "../multisigwallet/next_member_transaction";
import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "threefoldtech.threefoldhub.multisigwallet";
/** GenesisState defines the multisigwallet module's genesis state. */
export interface GenesisState {
    params: Params | undefined;
    walletList: Wallet[];
    transactionList: Transaction[];
    nextTransaction: NextTransaction | undefined;
    memberTransactionList: MemberTransaction[];
    /** this line is used by starport scaffolding # genesis/proto/state */
    nextMemberTransaction: NextMemberTransaction | undefined;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
