import { Reader, Writer } from "protobufjs/minimal";
import { Description } from "../validators/validator";
export declare const protobufPackage = "threefold.threefoldhub.validators";
export interface MsgCreateValidator {
    operatorAddress: string;
    consensusPubkey: string;
    description: Description | undefined;
}
export interface MsgCreateValidatorResponse {
}
export interface MsgUpdateValidator {
    operatorAddress: string;
    description: Description | undefined;
}
export interface MsgUpdateValidatorResponse {
}
export interface MsgDeleteValidator {
    operatorAddress: string;
}
export interface MsgDeleteValidatorResponse {
}
export declare const MsgCreateValidator: {
    encode(message: MsgCreateValidator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateValidator;
    fromJSON(object: any): MsgCreateValidator;
    toJSON(message: MsgCreateValidator): unknown;
    fromPartial(object: DeepPartial<MsgCreateValidator>): MsgCreateValidator;
};
export declare const MsgCreateValidatorResponse: {
    encode(_: MsgCreateValidatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateValidatorResponse;
    fromJSON(_: any): MsgCreateValidatorResponse;
    toJSON(_: MsgCreateValidatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateValidatorResponse>): MsgCreateValidatorResponse;
};
export declare const MsgUpdateValidator: {
    encode(message: MsgUpdateValidator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateValidator;
    fromJSON(object: any): MsgUpdateValidator;
    toJSON(message: MsgUpdateValidator): unknown;
    fromPartial(object: DeepPartial<MsgUpdateValidator>): MsgUpdateValidator;
};
export declare const MsgUpdateValidatorResponse: {
    encode(_: MsgUpdateValidatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateValidatorResponse;
    fromJSON(_: any): MsgUpdateValidatorResponse;
    toJSON(_: MsgUpdateValidatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateValidatorResponse>): MsgUpdateValidatorResponse;
};
export declare const MsgDeleteValidator: {
    encode(message: MsgDeleteValidator, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteValidator;
    fromJSON(object: any): MsgDeleteValidator;
    toJSON(message: MsgDeleteValidator): unknown;
    fromPartial(object: DeepPartial<MsgDeleteValidator>): MsgDeleteValidator;
};
export declare const MsgDeleteValidatorResponse: {
    encode(_: MsgDeleteValidatorResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteValidatorResponse;
    fromJSON(_: any): MsgDeleteValidatorResponse;
    toJSON(_: MsgDeleteValidatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteValidatorResponse>): MsgDeleteValidatorResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
    UpdateValidator(request: MsgUpdateValidator): Promise<MsgUpdateValidatorResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteValidator(request: MsgDeleteValidator): Promise<MsgDeleteValidatorResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
    UpdateValidator(request: MsgUpdateValidator): Promise<MsgUpdateValidatorResponse>;
    DeleteValidator(request: MsgDeleteValidator): Promise<MsgDeleteValidatorResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
