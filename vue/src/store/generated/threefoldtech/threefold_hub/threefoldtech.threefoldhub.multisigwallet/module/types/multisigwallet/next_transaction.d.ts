import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "threefoldtech.threefoldhub.multisigwallet";
export interface NextTransaction {
    idValue: number;
}
export declare const NextTransaction: {
    encode(message: NextTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): NextTransaction;
    fromJSON(object: any): NextTransaction;
    toJSON(message: NextTransaction): unknown;
    fromPartial(object: DeepPartial<NextTransaction>): NextTransaction;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
