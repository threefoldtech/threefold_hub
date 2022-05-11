import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "threefoldtech.threefoldhub.multisigwallet";
export interface NextMemberTransaction {
    idValue: number;
}
export declare const NextMemberTransaction: {
    encode(message: NextMemberTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): NextMemberTransaction;
    fromJSON(object: any): NextMemberTransaction;
    toJSON(message: NextMemberTransaction): unknown;
    fromPartial(object: DeepPartial<NextMemberTransaction>): NextMemberTransaction;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
