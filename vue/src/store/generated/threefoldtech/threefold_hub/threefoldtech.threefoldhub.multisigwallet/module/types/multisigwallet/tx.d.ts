import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "threefoldtech.threefoldhub.multisigwallet";
export interface MsgCreateWallet {
    creator: string;
    name: string;
    members: string;
    minSigns: string;
}
export interface MsgCreateWalletResponse {
    address: string;
}
export interface MsgCreateTransaction {
    creator: string;
    walltName: string;
    toAddress: string;
    amount: string;
}
export interface MsgCreateTransactionResponse {
}
export interface MsgSignTransaction {
    creator: string;
    transactionID: string;
}
export interface MsgSignTransactionResponse {
}
export interface MsgExecuteTransaction {
    creator: string;
    transactionID: string;
}
export interface MsgExecuteTransactionResponse {
}
export interface MsgAddSigners {
    creator: string;
    walletName: string;
    members: string;
}
export interface MsgAddSignersResponse {
}
export interface MsgRemoveSigners {
    creator: string;
    walletName: string;
    members: string;
}
export interface MsgRemoveSignersResponse {
}
export interface MsgUpdateMinSigns {
    creator: string;
    walletName: string;
    minSigns: string;
}
export interface MsgUpdateMinSignsResponse {
}
export declare const MsgCreateWallet: {
    encode(message: MsgCreateWallet, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateWallet;
    fromJSON(object: any): MsgCreateWallet;
    toJSON(message: MsgCreateWallet): unknown;
    fromPartial(object: DeepPartial<MsgCreateWallet>): MsgCreateWallet;
};
export declare const MsgCreateWalletResponse: {
    encode(message: MsgCreateWalletResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateWalletResponse;
    fromJSON(object: any): MsgCreateWalletResponse;
    toJSON(message: MsgCreateWalletResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateWalletResponse>): MsgCreateWalletResponse;
};
export declare const MsgCreateTransaction: {
    encode(message: MsgCreateTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTransaction;
    fromJSON(object: any): MsgCreateTransaction;
    toJSON(message: MsgCreateTransaction): unknown;
    fromPartial(object: DeepPartial<MsgCreateTransaction>): MsgCreateTransaction;
};
export declare const MsgCreateTransactionResponse: {
    encode(_: MsgCreateTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTransactionResponse;
    fromJSON(_: any): MsgCreateTransactionResponse;
    toJSON(_: MsgCreateTransactionResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateTransactionResponse>): MsgCreateTransactionResponse;
};
export declare const MsgSignTransaction: {
    encode(message: MsgSignTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSignTransaction;
    fromJSON(object: any): MsgSignTransaction;
    toJSON(message: MsgSignTransaction): unknown;
    fromPartial(object: DeepPartial<MsgSignTransaction>): MsgSignTransaction;
};
export declare const MsgSignTransactionResponse: {
    encode(_: MsgSignTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSignTransactionResponse;
    fromJSON(_: any): MsgSignTransactionResponse;
    toJSON(_: MsgSignTransactionResponse): unknown;
    fromPartial(_: DeepPartial<MsgSignTransactionResponse>): MsgSignTransactionResponse;
};
export declare const MsgExecuteTransaction: {
    encode(message: MsgExecuteTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgExecuteTransaction;
    fromJSON(object: any): MsgExecuteTransaction;
    toJSON(message: MsgExecuteTransaction): unknown;
    fromPartial(object: DeepPartial<MsgExecuteTransaction>): MsgExecuteTransaction;
};
export declare const MsgExecuteTransactionResponse: {
    encode(_: MsgExecuteTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgExecuteTransactionResponse;
    fromJSON(_: any): MsgExecuteTransactionResponse;
    toJSON(_: MsgExecuteTransactionResponse): unknown;
    fromPartial(_: DeepPartial<MsgExecuteTransactionResponse>): MsgExecuteTransactionResponse;
};
export declare const MsgAddSigners: {
    encode(message: MsgAddSigners, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddSigners;
    fromJSON(object: any): MsgAddSigners;
    toJSON(message: MsgAddSigners): unknown;
    fromPartial(object: DeepPartial<MsgAddSigners>): MsgAddSigners;
};
export declare const MsgAddSignersResponse: {
    encode(_: MsgAddSignersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddSignersResponse;
    fromJSON(_: any): MsgAddSignersResponse;
    toJSON(_: MsgAddSignersResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddSignersResponse>): MsgAddSignersResponse;
};
export declare const MsgRemoveSigners: {
    encode(message: MsgRemoveSigners, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRemoveSigners;
    fromJSON(object: any): MsgRemoveSigners;
    toJSON(message: MsgRemoveSigners): unknown;
    fromPartial(object: DeepPartial<MsgRemoveSigners>): MsgRemoveSigners;
};
export declare const MsgRemoveSignersResponse: {
    encode(_: MsgRemoveSignersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRemoveSignersResponse;
    fromJSON(_: any): MsgRemoveSignersResponse;
    toJSON(_: MsgRemoveSignersResponse): unknown;
    fromPartial(_: DeepPartial<MsgRemoveSignersResponse>): MsgRemoveSignersResponse;
};
export declare const MsgUpdateMinSigns: {
    encode(message: MsgUpdateMinSigns, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateMinSigns;
    fromJSON(object: any): MsgUpdateMinSigns;
    toJSON(message: MsgUpdateMinSigns): unknown;
    fromPartial(object: DeepPartial<MsgUpdateMinSigns>): MsgUpdateMinSigns;
};
export declare const MsgUpdateMinSignsResponse: {
    encode(_: MsgUpdateMinSignsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateMinSignsResponse;
    fromJSON(_: any): MsgUpdateMinSignsResponse;
    toJSON(_: MsgUpdateMinSignsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateMinSignsResponse>): MsgUpdateMinSignsResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateWallet(request: MsgCreateWallet): Promise<MsgCreateWalletResponse>;
    CreateTransaction(request: MsgCreateTransaction): Promise<MsgCreateTransactionResponse>;
    SignTransaction(request: MsgSignTransaction): Promise<MsgSignTransactionResponse>;
    ExecuteTransaction(request: MsgExecuteTransaction): Promise<MsgExecuteTransactionResponse>;
    AddSigners(request: MsgAddSigners): Promise<MsgAddSignersResponse>;
    RemoveSigners(request: MsgRemoveSigners): Promise<MsgRemoveSignersResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    UpdateMinSigns(request: MsgUpdateMinSigns): Promise<MsgUpdateMinSignsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateWallet(request: MsgCreateWallet): Promise<MsgCreateWalletResponse>;
    CreateTransaction(request: MsgCreateTransaction): Promise<MsgCreateTransactionResponse>;
    SignTransaction(request: MsgSignTransaction): Promise<MsgSignTransactionResponse>;
    ExecuteTransaction(request: MsgExecuteTransaction): Promise<MsgExecuteTransactionResponse>;
    AddSigners(request: MsgAddSigners): Promise<MsgAddSignersResponse>;
    RemoveSigners(request: MsgRemoveSigners): Promise<MsgRemoveSignersResponse>;
    UpdateMinSigns(request: MsgUpdateMinSigns): Promise<MsgUpdateMinSignsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
