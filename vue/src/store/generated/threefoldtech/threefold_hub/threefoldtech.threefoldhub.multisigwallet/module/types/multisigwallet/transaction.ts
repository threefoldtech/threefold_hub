/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "threefoldtech.threefoldhub.multisigwallet";

export interface Transaction {
  index: string;
  walletName: string;
  toAddress: string;
  amount: string;
  state: string;
  members: string;
}

const baseTransaction: object = {
  index: "",
  walletName: "",
  toAddress: "",
  amount: "",
  state: "",
  members: "",
};

export const Transaction = {
  encode(message: Transaction, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.walletName !== "") {
      writer.uint32(18).string(message.walletName);
    }
    if (message.toAddress !== "") {
      writer.uint32(26).string(message.toAddress);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.state !== "") {
      writer.uint32(42).string(message.state);
    }
    if (message.members !== "") {
      writer.uint32(50).string(message.members);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTransaction } as Transaction;
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
          message.toAddress = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.state = reader.string();
          break;
        case 6:
          message.members = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    const message = { ...baseTransaction } as Transaction;
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
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = String(object.toAddress);
    } else {
      message.toAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = String(object.state);
    } else {
      message.state = "";
    }
    if (object.members !== undefined && object.members !== null) {
      message.members = String(object.members);
    } else {
      message.members = "";
    }
    return message;
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.walletName !== undefined && (obj.walletName = message.walletName);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    message.state !== undefined && (obj.state = message.state);
    message.members !== undefined && (obj.members = message.members);
    return obj;
  },

  fromPartial(object: DeepPartial<Transaction>): Transaction {
    const message = { ...baseTransaction } as Transaction;
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
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = object.toAddress;
    } else {
      message.toAddress = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = "";
    }
    if (object.members !== undefined && object.members !== null) {
      message.members = object.members;
    } else {
      message.members = "";
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
