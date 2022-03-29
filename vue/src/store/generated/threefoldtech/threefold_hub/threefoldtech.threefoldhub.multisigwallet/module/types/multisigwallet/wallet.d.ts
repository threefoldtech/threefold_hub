import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "threefoldtech.threefoldhub.multisigwallet";
export interface Wallet {
    index: string;
    name: string;
    address: string;
    members: string;
    minSigns: string;
}
export declare const Wallet: {
    encode(message: Wallet, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Wallet;
    fromJSON(object: any): Wallet;
    toJSON(message: Wallet): unknown;
    fromPartial(object: DeepPartial<Wallet>): Wallet;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
