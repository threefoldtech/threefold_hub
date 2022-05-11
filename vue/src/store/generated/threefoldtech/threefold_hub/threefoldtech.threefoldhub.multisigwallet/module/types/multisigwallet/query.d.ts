import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../multisigwallet/params";
import { Wallet } from "../multisigwallet/wallet";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Transaction } from "../multisigwallet/transaction";
import { NextTransaction } from "../multisigwallet/next_transaction";
import { MemberTransaction } from "../multisigwallet/member_transaction";
import { NextMemberTransaction } from "../multisigwallet/next_member_transaction";
export declare const protobufPackage = "threefoldtech.threefoldhub.multisigwallet";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetWalletRequest {
    index: string;
}
export interface QueryGetWalletResponse {
    wallet: Wallet | undefined;
}
export interface QueryAllWalletRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllWalletResponse {
    wallet: Wallet[];
    pagination: PageResponse | undefined;
}
export interface QueryGetTransactionRequest {
    index: string;
}
export interface QueryGetTransactionResponse {
    transaction: Transaction | undefined;
}
export interface QueryAllTransactionRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllTransactionResponse {
    transaction: Transaction[];
    pagination: PageResponse | undefined;
}
export interface QueryGetNextTransactionRequest {
}
export interface QueryGetNextTransactionResponse {
    NextTransaction: NextTransaction | undefined;
}
export interface QueryGetMemberTransactionRequest {
    index: string;
}
export interface QueryGetMemberTransactionResponse {
    memberTransaction: MemberTransaction | undefined;
}
export interface QueryAllMemberTransactionRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllMemberTransactionResponse {
    memberTransaction: MemberTransaction[];
    pagination: PageResponse | undefined;
}
export interface QueryGetNextMemberTransactionRequest {
}
export interface QueryGetNextMemberTransactionResponse {
    NextMemberTransaction: NextMemberTransaction | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetWalletRequest: {
    encode(message: QueryGetWalletRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetWalletRequest;
    fromJSON(object: any): QueryGetWalletRequest;
    toJSON(message: QueryGetWalletRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetWalletRequest>): QueryGetWalletRequest;
};
export declare const QueryGetWalletResponse: {
    encode(message: QueryGetWalletResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetWalletResponse;
    fromJSON(object: any): QueryGetWalletResponse;
    toJSON(message: QueryGetWalletResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetWalletResponse>): QueryGetWalletResponse;
};
export declare const QueryAllWalletRequest: {
    encode(message: QueryAllWalletRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllWalletRequest;
    fromJSON(object: any): QueryAllWalletRequest;
    toJSON(message: QueryAllWalletRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllWalletRequest>): QueryAllWalletRequest;
};
export declare const QueryAllWalletResponse: {
    encode(message: QueryAllWalletResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllWalletResponse;
    fromJSON(object: any): QueryAllWalletResponse;
    toJSON(message: QueryAllWalletResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllWalletResponse>): QueryAllWalletResponse;
};
export declare const QueryGetTransactionRequest: {
    encode(message: QueryGetTransactionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTransactionRequest;
    fromJSON(object: any): QueryGetTransactionRequest;
    toJSON(message: QueryGetTransactionRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTransactionRequest>): QueryGetTransactionRequest;
};
export declare const QueryGetTransactionResponse: {
    encode(message: QueryGetTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTransactionResponse;
    fromJSON(object: any): QueryGetTransactionResponse;
    toJSON(message: QueryGetTransactionResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTransactionResponse>): QueryGetTransactionResponse;
};
export declare const QueryAllTransactionRequest: {
    encode(message: QueryAllTransactionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTransactionRequest;
    fromJSON(object: any): QueryAllTransactionRequest;
    toJSON(message: QueryAllTransactionRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTransactionRequest>): QueryAllTransactionRequest;
};
export declare const QueryAllTransactionResponse: {
    encode(message: QueryAllTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTransactionResponse;
    fromJSON(object: any): QueryAllTransactionResponse;
    toJSON(message: QueryAllTransactionResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTransactionResponse>): QueryAllTransactionResponse;
};
export declare const QueryGetNextTransactionRequest: {
    encode(_: QueryGetNextTransactionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetNextTransactionRequest;
    fromJSON(_: any): QueryGetNextTransactionRequest;
    toJSON(_: QueryGetNextTransactionRequest): unknown;
    fromPartial(_: DeepPartial<QueryGetNextTransactionRequest>): QueryGetNextTransactionRequest;
};
export declare const QueryGetNextTransactionResponse: {
    encode(message: QueryGetNextTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetNextTransactionResponse;
    fromJSON(object: any): QueryGetNextTransactionResponse;
    toJSON(message: QueryGetNextTransactionResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetNextTransactionResponse>): QueryGetNextTransactionResponse;
};
export declare const QueryGetMemberTransactionRequest: {
    encode(message: QueryGetMemberTransactionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMemberTransactionRequest;
    fromJSON(object: any): QueryGetMemberTransactionRequest;
    toJSON(message: QueryGetMemberTransactionRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetMemberTransactionRequest>): QueryGetMemberTransactionRequest;
};
export declare const QueryGetMemberTransactionResponse: {
    encode(message: QueryGetMemberTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMemberTransactionResponse;
    fromJSON(object: any): QueryGetMemberTransactionResponse;
    toJSON(message: QueryGetMemberTransactionResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetMemberTransactionResponse>): QueryGetMemberTransactionResponse;
};
export declare const QueryAllMemberTransactionRequest: {
    encode(message: QueryAllMemberTransactionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMemberTransactionRequest;
    fromJSON(object: any): QueryAllMemberTransactionRequest;
    toJSON(message: QueryAllMemberTransactionRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllMemberTransactionRequest>): QueryAllMemberTransactionRequest;
};
export declare const QueryAllMemberTransactionResponse: {
    encode(message: QueryAllMemberTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMemberTransactionResponse;
    fromJSON(object: any): QueryAllMemberTransactionResponse;
    toJSON(message: QueryAllMemberTransactionResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllMemberTransactionResponse>): QueryAllMemberTransactionResponse;
};
export declare const QueryGetNextMemberTransactionRequest: {
    encode(_: QueryGetNextMemberTransactionRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetNextMemberTransactionRequest;
    fromJSON(_: any): QueryGetNextMemberTransactionRequest;
    toJSON(_: QueryGetNextMemberTransactionRequest): unknown;
    fromPartial(_: DeepPartial<QueryGetNextMemberTransactionRequest>): QueryGetNextMemberTransactionRequest;
};
export declare const QueryGetNextMemberTransactionResponse: {
    encode(message: QueryGetNextMemberTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetNextMemberTransactionResponse;
    fromJSON(object: any): QueryGetNextMemberTransactionResponse;
    toJSON(message: QueryGetNextMemberTransactionResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetNextMemberTransactionResponse>): QueryGetNextMemberTransactionResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Wallet by index. */
    Wallet(request: QueryGetWalletRequest): Promise<QueryGetWalletResponse>;
    /** Queries a list of Wallet items. */
    WalletAll(request: QueryAllWalletRequest): Promise<QueryAllWalletResponse>;
    /** Queries a Transaction by index. */
    Transaction(request: QueryGetTransactionRequest): Promise<QueryGetTransactionResponse>;
    /** Queries a list of Transaction items. */
    TransactionAll(request: QueryAllTransactionRequest): Promise<QueryAllTransactionResponse>;
    /** Queries a NextTransaction by index. */
    NextTransaction(request: QueryGetNextTransactionRequest): Promise<QueryGetNextTransactionResponse>;
    /** Queries a MemberTransaction by index. */
    MemberTransaction(request: QueryGetMemberTransactionRequest): Promise<QueryGetMemberTransactionResponse>;
    /** Queries a list of MemberTransaction items. */
    MemberTransactionAll(request: QueryAllMemberTransactionRequest): Promise<QueryAllMemberTransactionResponse>;
    /** Queries a NextMemberTransaction by index. */
    NextMemberTransaction(request: QueryGetNextMemberTransactionRequest): Promise<QueryGetNextMemberTransactionResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Wallet(request: QueryGetWalletRequest): Promise<QueryGetWalletResponse>;
    WalletAll(request: QueryAllWalletRequest): Promise<QueryAllWalletResponse>;
    Transaction(request: QueryGetTransactionRequest): Promise<QueryGetTransactionResponse>;
    TransactionAll(request: QueryAllTransactionRequest): Promise<QueryAllTransactionResponse>;
    NextTransaction(request: QueryGetNextTransactionRequest): Promise<QueryGetNextTransactionResponse>;
    MemberTransaction(request: QueryGetMemberTransactionRequest): Promise<QueryGetMemberTransactionResponse>;
    MemberTransactionAll(request: QueryAllMemberTransactionRequest): Promise<QueryAllMemberTransactionResponse>;
    NextMemberTransaction(request: QueryGetNextMemberTransactionRequest): Promise<QueryGetNextMemberTransactionResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
