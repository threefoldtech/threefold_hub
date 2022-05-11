/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "threefoldtech.threefoldhub.multisigwallet";

export interface MemberTransaction {
  index: string;
  walletName: string;
  member: string;
  action: string;
  state: string;
  signers: string;
}

const baseMemberTransaction: object = {
  index: "",
  walletName: "",
  member: "",
  action: "",
  state: "",
  signers: "",
};

export const MemberTransaction = {
  encode(message: MemberTransaction, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.walletName !== "") {
      writer.uint32(18).string(message.walletName);
    }
    if (message.member !== "") {
      writer.uint32(26).string(message.member);
    }
    if (message.action !== "") {
      writer.uint32(34).string(message.action);
    }
    if (message.state !== "") {
      writer.uint32(42).string(message.state);
    }
    if (message.signers !== "") {
      writer.uint32(50).string(message.signers);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MemberTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMemberTransaction } as MemberTransaction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.walletName = reader.string();
          break;
        case 3:
          message.member = reader.string();
          break;
        case 4:
          message.action = reader.string();
          break;
        case 5:
          message.state = reader.string();
          break;
        case 6:
          message.signers = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MemberTransaction {
    const message = { ...baseMemberTransaction } as MemberTransaction;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.walletName !== undefined && object.walletName !== null) {
      message.walletName = String(object.walletName);
    } else {
      message.walletName = "";
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = String(object.member);
    } else {
      message.member = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = String(object.action);
    } else {
      message.action = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = String(object.state);
    } else {
      message.state = "";
    }
    if (object.signers !== undefined && object.signers !== null) {
      message.signers = String(object.signers);
    } else {
      message.signers = "";
    }
    return message;
  },

  toJSON(message: MemberTransaction): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.walletName !== undefined && (obj.walletName = message.walletName);
    message.member !== undefined && (obj.member = message.member);
    message.action !== undefined && (obj.action = message.action);
    message.state !== undefined && (obj.state = message.state);
    message.signers !== undefined && (obj.signers = message.signers);
    return obj;
  },

  fromPartial(object: DeepPartial<MemberTransaction>): MemberTransaction {
    const message = { ...baseMemberTransaction } as MemberTransaction;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.walletName !== undefined && object.walletName !== null) {
      message.walletName = object.walletName;
    } else {
      message.walletName = "";
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    } else {
      message.member = "";
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    } else {
      message.action = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = "";
    }
    if (object.signers !== undefined && object.signers !== null) {
      message.signers = object.signers;
    } else {
      message.signers = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
