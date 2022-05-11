import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "threefoldtech.threefoldhub.multisigwallet";
export interface MemberTransaction {
    index: string;
    walletName: string;
    member: string;
    action: string;
    state: string;
    signers: string;
}
export declare const MemberTransaction: {
    encode(message: MemberTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MemberTransaction;
    fromJSON(object: any): MemberTransaction;
    toJSON(message: MemberTransaction): unknown;
    fromPartial(object: DeepPartial<MemberTransaction>): MemberTransaction;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
