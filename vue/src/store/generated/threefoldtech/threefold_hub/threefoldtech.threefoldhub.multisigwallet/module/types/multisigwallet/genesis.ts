/* eslint-disable */
import { Params } from "../multisigwallet/params";
import { Wallet } from "../multisigwallet/wallet";
import { Transaction } from "../multisigwallet/transaction";
import { NextTransaction } from "../multisigwallet/next_transaction";
import { MemberTransaction } from "../multisigwallet/member_transaction";
import { NextMemberTransaction } from "../multisigwallet/next_member_transaction";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "threefoldtech.threefoldhub.multisigwallet";

/** GenesisState defines the multisigwallet module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  walletList: Wallet[];
  transactionList: Transaction[];
  nextTransaction: NextTransaction | undefined;
  memberTransactionList: MemberTransaction[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  nextMemberTransaction: NextMemberTransaction | undefined;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.walletList) {
      Wallet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.transactionList) {
      Transaction.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.nextTransaction !== undefined) {
      NextTransaction.encode(
        message.nextTransaction,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.memberTransactionList) {
      MemberTransaction.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.nextMemberTransaction !== undefined) {
      NextMemberTransaction.encode(
        message.nextMemberTransaction,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.walletList = [];
    message.transactionList = [];
    message.memberTransactionList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.walletList.push(Wallet.decode(reader, reader.uint32()));
          break;
        case 3:
          message.transactionList.push(
            Transaction.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.nextTransaction = NextTransaction.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.memberTransactionList.push(
            MemberTransaction.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.nextMemberTransaction = NextMemberTransaction.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.walletList = [];
    message.transactionList = [];
    message.memberTransactionList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.walletList !== undefined && object.walletList !== null) {
      for (const e of object.walletList) {
        message.walletList.push(Wallet.fromJSON(e));
      }
    }
    if (
      object.transactionList !== undefined &&
      object.transactionList !== null
    ) {
      for (const e of object.transactionList) {
        message.transactionList.push(Transaction.fromJSON(e));
      }
    }
    if (
      object.nextTransaction !== undefined &&
      object.nextTransaction !== null
    ) {
      message.nextTransaction = NextTransaction.fromJSON(
        object.nextTransaction
      );
    } else {
      message.nextTransaction = undefined;
    }
    if (
      object.memberTransactionList !== undefined &&
      object.memberTransactionList !== null
    ) {
      for (const e of object.memberTransactionList) {
        message.memberTransactionList.push(MemberTransaction.fromJSON(e));
      }
    }
    if (
      object.nextMemberTransaction !== undefined &&
      object.nextMemberTransaction !== null
    ) {
      message.nextMemberTransaction = NextMemberTransaction.fromJSON(
        object.nextMemberTransaction
      );
    } else {
      message.nextMemberTransaction = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.walletList) {
      obj.walletList = message.walletList.map((e) =>
        e ? Wallet.toJSON(e) : undefined
      );
    } else {
      obj.walletList = [];
    }
    if (message.transactionList) {
      obj.transactionList = message.transactionList.map((e) =>
        e ? Transaction.toJSON(e) : undefined
      );
    } else {
      obj.transactionList = [];
    }
    message.nextTransaction !== undefined &&
      (obj.nextTransaction = message.nextTransaction
        ? NextTransaction.toJSON(message.nextTransaction)
        : undefined);
    if (message.memberTransactionList) {
      obj.memberTransactionList = message.memberTransactionList.map((e) =>
        e ? MemberTransaction.toJSON(e) : undefined
      );
    } else {
      obj.memberTransactionList = [];
    }
    message.nextMemberTransaction !== undefined &&
      (obj.nextMemberTransaction = message.nextMemberTransaction
        ? NextMemberTransaction.toJSON(message.nextMemberTransaction)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.walletList = [];
    message.transactionList = [];
    message.memberTransactionList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.walletList !== undefined && object.walletList !== null) {
      for (const e of object.walletList) {
        message.walletList.push(Wallet.fromPartial(e));
      }
    }
    if (
      object.transactionList !== undefined &&
      object.transactionList !== null
    ) {
      for (const e of object.transactionList) {
        message.transactionList.push(Transaction.fromPartial(e));
      }
    }
    if (
      object.nextTransaction !== undefined &&
      object.nextTransaction !== null
    ) {
      message.nextTransaction = NextTransaction.fromPartial(
        object.nextTransaction
      );
    } else {
      message.nextTransaction = undefined;
    }
    if (
      object.memberTransactionList !== undefined &&
      object.memberTransactionList !== null
    ) {
      for (const e of object.memberTransactionList) {
        message.memberTransactionList.push(MemberTransaction.fromPartial(e));
      }
    }
    if (
      object.nextMemberTransaction !== undefined &&
      object.nextMemberTransaction !== null
    ) {
      message.nextMemberTransaction = NextMemberTransaction.fromPartial(
        object.nextMemberTransaction
      );
    } else {
      message.nextMemberTransaction = undefined;
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
