import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../validators/params";
import { Validator } from "../validators/validator";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { HistoricalInfo } from "../validators/historical_info";
export declare const protobufPackage = "threefold.threefoldhub.validators";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetValidatorRequest {
    index: string;
}
export interface QueryGetValidatorResponse {
    validator: Validator | undefined;
}
export interface QueryAllValidatorRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllValidatorResponse {
    validator: Validator[];
    pagination: PageResponse | undefined;
}
export interface QueryGetHistoricalInfoRequest {
    height: number;
}
export interface QueryGetHistoricalInfoResponse {
    historicalInfo: HistoricalInfo | undefined;
}
export interface QueryAllHistoricalInfoRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllHistoricalInfoResponse {
    historicalInfo: HistoricalInfo[];
    pagination: PageResponse | undefined;
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
export declare const QueryGetValidatorRequest: {
    encode(message: QueryGetValidatorRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetValidatorRequest;
    fromJSON(object: any): QueryGetValidatorRequest;
    toJSON(message: QueryGetValidatorRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetValidatorRequest>): QueryGetValidatorRequest;
};
export declare const QueryGetValidatorResponse: {
    encode(message: QueryGetValidatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetValidatorResponse;
    fromJSON(object: any): QueryGetValidatorResponse;
    toJSON(message: QueryGetValidatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetValidatorResponse>): QueryGetValidatorResponse;
};
export declare const QueryAllValidatorRequest: {
    encode(message: QueryAllValidatorRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllValidatorRequest;
    fromJSON(object: any): QueryAllValidatorRequest;
    toJSON(message: QueryAllValidatorRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllValidatorRequest>): QueryAllValidatorRequest;
};
export declare const QueryAllValidatorResponse: {
    encode(message: QueryAllValidatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllValidatorResponse;
    fromJSON(object: any): QueryAllValidatorResponse;
    toJSON(message: QueryAllValidatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllValidatorResponse>): QueryAllValidatorResponse;
};
export declare const QueryGetHistoricalInfoRequest: {
    encode(message: QueryGetHistoricalInfoRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetHistoricalInfoRequest;
    fromJSON(object: any): QueryGetHistoricalInfoRequest;
    toJSON(message: QueryGetHistoricalInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetHistoricalInfoRequest>): QueryGetHistoricalInfoRequest;
};
export declare const QueryGetHistoricalInfoResponse: {
    encode(message: QueryGetHistoricalInfoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetHistoricalInfoResponse;
    fromJSON(object: any): QueryGetHistoricalInfoResponse;
    toJSON(message: QueryGetHistoricalInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetHistoricalInfoResponse>): QueryGetHistoricalInfoResponse;
};
export declare const QueryAllHistoricalInfoRequest: {
    encode(message: QueryAllHistoricalInfoRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllHistoricalInfoRequest;
    fromJSON(object: any): QueryAllHistoricalInfoRequest;
    toJSON(message: QueryAllHistoricalInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllHistoricalInfoRequest>): QueryAllHistoricalInfoRequest;
};
export declare const QueryAllHistoricalInfoResponse: {
    encode(message: QueryAllHistoricalInfoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllHistoricalInfoResponse;
    fromJSON(object: any): QueryAllHistoricalInfoResponse;
    toJSON(message: QueryAllHistoricalInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllHistoricalInfoResponse>): QueryAllHistoricalInfoResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Validator by index. */
    Validator(request: QueryGetValidatorRequest): Promise<QueryGetValidatorResponse>;
    /** Queries a list of Validator items. */
    ValidatorAll(request: QueryAllValidatorRequest): Promise<QueryAllValidatorResponse>;
    /** Queries a HistoricalInfo by index. */
    HistoricalInfo(request: QueryGetHistoricalInfoRequest): Promise<QueryGetHistoricalInfoResponse>;
    /** Queries a list of HistoricalInfo items. */
    HistoricalInfoAll(request: QueryAllHistoricalInfoRequest): Promise<QueryAllHistoricalInfoResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Validator(request: QueryGetValidatorRequest): Promise<QueryGetValidatorResponse>;
    ValidatorAll(request: QueryAllValidatorRequest): Promise<QueryAllValidatorResponse>;
    HistoricalInfo(request: QueryGetHistoricalInfoRequest): Promise<QueryGetHistoricalInfoResponse>;
    HistoricalInfoAll(request: QueryAllHistoricalInfoRequest): Promise<QueryAllHistoricalInfoResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
