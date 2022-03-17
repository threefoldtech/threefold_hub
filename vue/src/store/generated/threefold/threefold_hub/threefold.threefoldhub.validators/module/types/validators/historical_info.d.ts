import { Header } from "../tendermint/types/types";
import { Validator } from "../validators/validator";
import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "threefold.threefoldhub.validators";
export interface HistoricalInfo {
    header: Header | undefined;
    valset: Validator[];
}
export declare const HistoricalInfo: {
    encode(message: HistoricalInfo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): HistoricalInfo;
    fromJSON(object: any): HistoricalInfo;
    toJSON(message: HistoricalInfo): unknown;
    fromPartial(object: DeepPartial<HistoricalInfo>): HistoricalInfo;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
