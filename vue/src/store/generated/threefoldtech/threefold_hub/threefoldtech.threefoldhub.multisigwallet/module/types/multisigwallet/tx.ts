/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "threefoldtech.threefoldhub.multisigwallet";

export interface MsgCreateWallet {
  creator: string;
  name: string;
  members: string;
  minSigns: string;
}

export interface MsgCreateWalletResponse {
  address: string;
}

export interface MsgCreateTransaction {
  creator: string;
  walltName: string;
  toAddress: string;
  amount: string;
}

export interface MsgCreateTransactionResponse {}

export interface MsgSignTransaction {
  creator: string;
  transactionID: string;
}

export interface MsgSignTransactionResponse {}

export interface MsgExecuteTransaction {
  creator: string;
  transactionID: string;
}

export interface MsgExecuteTransactionResponse {}

export interface MsgAddSigners {
  creator: string;
  walletName: string;
  members: string;
}

export interface MsgAddSignersResponse {}

export interface MsgRemoveSigners {
  creator: string;
  walletName: string;
  members: string;
}

export interface MsgRemoveSignersResponse {}

export interface MsgUpdateMinSigns {
  creator: string;
  walletName: string;
  minSigns: string;
}

export interface MsgUpdateMinSignsResponse {}

export interface MsgAddMember {
  creator: string;
  walltName: string;
  member: string;
}

export interface MsgAddMemberResponse {}

export interface MsgSignMemberTransaction {
  creator: string;
  transactionID: string;
}

export interface MsgSignMemberTransactionResponse {}

export interface MsgRemoveMember {
  creator: string;
  walltName: string;
  member: string;
}

export interface MsgRemoveMemberResponse {}

const baseMsgCreateWallet: object = {
  creator: "",
  name: "",
  members: "",
  minSigns: "",
};

export const MsgCreateWallet = {
  encode(message: MsgCreateWallet, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.members !== "") {
      writer.uint32(26).string(message.members);
    }
    if (message.minSigns !== "") {
      writer.uint32(34).string(message.minSigns);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateWallet {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateWallet } as MsgCreateWallet;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.members = reader.string();
          break;
        case 4:
          message.minSigns = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateWallet {
    const message = { ...baseMsgCreateWallet } as MsgCreateWallet;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.members !== undefined && object.members !== null) {
      message.members = String(object.members);
    } else {
      message.members = "";
    }
    if (object.minSigns !== undefined && object.minSigns !== null) {
      message.minSigns = String(object.minSigns);
    } else {
      message.minSigns = "";
    }
    return message;
  },

  toJSON(message: MsgCreateWallet): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.members !== undefined && (obj.members = message.members);
    message.minSigns !== undefined && (obj.minSigns = message.minSigns);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateWallet>): MsgCreateWallet {
    const message = { ...baseMsgCreateWallet } as MsgCreateWallet;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.members !== undefined && object.members !== null) {
      message.members = object.members;
    } else {
      message.members = "";
    }
    if (object.minSigns !== undefined && object.minSigns !== null) {
      message.minSigns = object.minSigns;
    } else {
      message.minSigns = "";
    }
    return message;
  },
};

const baseMsgCreateWalletResponse: object = { address: "" };

export const MsgCreateWalletResponse = {
  encode(
    message: MsgCreateWalletResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateWalletResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateWalletResponse,
    } as MsgCreateWalletResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateWalletResponse {
    const message = {
      ...baseMsgCreateWalletResponse,
    } as MsgCreateWalletResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgCreateWalletResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateWalletResponse>
  ): MsgCreateWalletResponse {
    const message = {
      ...baseMsgCreateWalletResponse,
    } as MsgCreateWalletResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgCreateTransaction: object = {
  creator: "",
  walltName: "",
  toAddress: "",
  amount: "",
};

export const MsgCreateTransaction = {
  encode(
    message: MsgCreateTransaction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.walltName !== "") {
      writer.uint32(18).string(message.walltName);
    }
    if (message.toAddress !== "") {
      writer.uint32(26).string(message.toAddress);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTransaction } as MsgCreateTransaction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.walltName = reader.string();
          break;
        case 3:
          message.toAddress = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTransaction {
    const message = { ...baseMsgCreateTransaction } as MsgCreateTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.walltName !== undefined && object.walltName !== null) {
      message.walltName = String(object.walltName);
    } else {
      message.walltName = "";
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
    return message;
  },

  toJSON(message: MsgCreateTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.walltName !== undefined && (obj.walltName = message.walltName);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateTransaction>): MsgCreateTransaction {
    const message = { ...baseMsgCreateTransaction } as MsgCreateTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.walltName !== undefined && object.walltName !== null) {
      message.walltName = object.walltName;
    } else {
      message.walltName = "";
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
    return message;
  },
};

const baseMsgCreateTransactionResponse: object = {};

export const MsgCreateTransactionResponse = {
  encode(
    _: MsgCreateTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateTransactionResponse,
    } as MsgCreateTransactionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateTransactionResponse {
    const message = {
      ...baseMsgCreateTransactionResponse,
    } as MsgCreateTransactionResponse;
    return message;
  },

  toJSON(_: MsgCreateTransactionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateTransactionResponse>
  ): MsgCreateTransactionResponse {
    const message = {
      ...baseMsgCreateTransactionResponse,
    } as MsgCreateTransactionResponse;
    return message;
  },
};

const baseMsgSignTransaction: object = { creator: "", transactionID: "" };

export const MsgSignTransaction = {
  encode(
    message: MsgSignTransaction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.transactionID !== "") {
      writer.uint32(18).string(message.transactionID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSignTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSignTransaction } as MsgSignTransaction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.transactionID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSignTransaction {
    const message = { ...baseMsgSignTransaction } as MsgSignTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.transactionID !== undefined && object.transactionID !== null) {
      message.transactionID = String(object.transactionID);
    } else {
      message.transactionID = "";
    }
    return message;
  },

  toJSON(message: MsgSignTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.transactionID !== undefined &&
      (obj.transactionID = message.transactionID);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSignTransaction>): MsgSignTransaction {
    const message = { ...baseMsgSignTransaction } as MsgSignTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.transactionID !== undefined && object.transactionID !== null) {
      message.transactionID = object.transactionID;
    } else {
      message.transactionID = "";
    }
    return message;
  },
};

const baseMsgSignTransactionResponse: object = {};

export const MsgSignTransactionResponse = {
  encode(
    _: MsgSignTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSignTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSignTransactionResponse,
    } as MsgSignTransactionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSignTransactionResponse {
    const message = {
      ...baseMsgSignTransactionResponse,
    } as MsgSignTransactionResponse;
    return message;
  },

  toJSON(_: MsgSignTransactionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSignTransactionResponse>
  ): MsgSignTransactionResponse {
    const message = {
      ...baseMsgSignTransactionResponse,
    } as MsgSignTransactionResponse;
    return message;
  },
};

const baseMsgExecuteTransaction: object = { creator: "", transactionID: "" };

export const MsgExecuteTransaction = {
  encode(
    message: MsgExecuteTransaction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.transactionID !== "") {
      writer.uint32(18).string(message.transactionID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgExecuteTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExecuteTransaction } as MsgExecuteTransaction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.transactionID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExecuteTransaction {
    const message = { ...baseMsgExecuteTransaction } as MsgExecuteTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.transactionID !== undefined && object.transactionID !== null) {
      message.transactionID = String(object.transactionID);
    } else {
      message.transactionID = "";
    }
    return message;
  },

  toJSON(message: MsgExecuteTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.transactionID !== undefined &&
      (obj.transactionID = message.transactionID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgExecuteTransaction>
  ): MsgExecuteTransaction {
    const message = { ...baseMsgExecuteTransaction } as MsgExecuteTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.transactionID !== undefined && object.transactionID !== null) {
      message.transactionID = object.transactionID;
    } else {
      message.transactionID = "";
    }
    return message;
  },
};

const baseMsgExecuteTransactionResponse: object = {};

export const MsgExecuteTransactionResponse = {
  encode(
    _: MsgExecuteTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgExecuteTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgExecuteTransactionResponse,
    } as MsgExecuteTransactionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgExecuteTransactionResponse {
    const message = {
      ...baseMsgExecuteTransactionResponse,
    } as MsgExecuteTransactionResponse;
    return message;
  },

  toJSON(_: MsgExecuteTransactionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgExecuteTransactionResponse>
  ): MsgExecuteTransactionResponse {
    const message = {
      ...baseMsgExecuteTransactionResponse,
    } as MsgExecuteTransactionResponse;
    return message;
  },
};

const baseMsgAddSigners: object = { creator: "", walletName: "", members: "" };

export const MsgAddSigners = {
  encode(message: MsgAddSigners, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.walletName !== "") {
      writer.uint32(18).string(message.walletName);
    }
    if (message.members !== "") {
      writer.uint32(26).string(message.members);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddSigners {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddSigners } as MsgAddSigners;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.walletName = reader.string();
          break;
        case 3:
          message.members = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddSigners {
    const message = { ...baseMsgAddSigners } as MsgAddSigners;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.walletName !== undefined && object.walletName !== null) {
      message.walletName = String(object.walletName);
    } else {
      message.walletName = "";
    }
    if (object.members !== undefined && object.members !== null) {
      message.members = String(object.members);
    } else {
      message.members = "";
    }
    return message;
  },

  toJSON(message: MsgAddSigners): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.walletName !== undefined && (obj.walletName = message.walletName);
    message.members !== undefined && (obj.members = message.members);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddSigners>): MsgAddSigners {
    const message = { ...baseMsgAddSigners } as MsgAddSigners;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.walletName !== undefined && object.walletName !== null) {
      message.walletName = object.walletName;
    } else {
      message.walletName = "";
    }
    if (object.members !== undefined && object.members !== null) {
      message.members = object.members;
    } else {
      message.members = "";
    }
    return message;
  },
};

const baseMsgAddSignersResponse: object = {};

export const MsgAddSignersResponse = {
  encode(_: MsgAddSignersResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddSignersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddSignersResponse } as MsgAddSignersResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgAddSignersResponse {
    const message = { ...baseMsgAddSignersResponse } as MsgAddSignersResponse;
    return message;
  },

  toJSON(_: MsgAddSignersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddSignersResponse>): MsgAddSignersResponse {
    const message = { ...baseMsgAddSignersResponse } as MsgAddSignersResponse;
    return message;
  },
};

const baseMsgRemoveSigners: object = {
  creator: "",
  walletName: "",
  members: "",
};

export const MsgRemoveSigners = {
  encode(message: MsgRemoveSigners, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.walletName !== "") {
      writer.uint32(18).string(message.walletName);
    }
    if (message.members !== "") {
      writer.uint32(26).string(message.members);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRemoveSigners {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveSigners } as MsgRemoveSigners;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.walletName = reader.string();
          break;
        case 3:
          message.members = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveSigners {
    const message = { ...baseMsgRemoveSigners } as MsgRemoveSigners;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.walletName !== undefined && object.walletName !== null) {
      message.walletName = String(object.walletName);
    } else {
      message.walletName = "";
    }
    if (object.members !== undefined && object.members !== null) {
      message.members = String(object.members);
    } else {
      message.members = "";
    }
    return message;
  },

  toJSON(message: MsgRemoveSigners): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.walletName !== undefined && (obj.walletName = message.walletName);
    message.members !== undefined && (obj.members = message.members);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveSigners>): MsgRemoveSigners {
    const message = { ...baseMsgRemoveSigners } as MsgRemoveSigners;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.walletName !== undefined && object.walletName !== null) {
      message.walletName = object.walletName;
    } else {
      message.walletName = "";
    }
    if (object.members !== undefined && object.members !== null) {
      message.members = object.members;
    } else {
      message.members = "";
    }
    return message;
  },
};

const baseMsgRemoveSignersResponse: object = {};

export const MsgRemoveSignersResponse = {
  encode(
    _: MsgRemoveSignersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRemoveSignersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveSignersResponse,
    } as MsgRemoveSignersResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRemoveSignersResponse {
    const message = {
      ...baseMsgRemoveSignersResponse,
    } as MsgRemoveSignersResponse;
    return message;
  },

  toJSON(_: MsgRemoveSignersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemoveSignersResponse>
  ): MsgRemoveSignersResponse {
    const message = {
      ...baseMsgRemoveSignersResponse,
    } as MsgRemoveSignersResponse;
    return message;
  },
};

const baseMsgUpdateMinSigns: object = {
  creator: "",
  walletName: "",
  minSigns: "",
};

export const MsgUpdateMinSigns = {
  encode(message: MsgUpdateMinSigns, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.walletName !== "") {
      writer.uint32(18).string(message.walletName);
    }
    if (message.minSigns !== "") {
      writer.uint32(26).string(message.minSigns);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMinSigns {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMinSigns } as MsgUpdateMinSigns;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.walletName = reader.string();
          break;
        case 3:
          message.minSigns = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMinSigns {
    const message = { ...baseMsgUpdateMinSigns } as MsgUpdateMinSigns;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.walletName !== undefined && object.walletName !== null) {
      message.walletName = String(object.walletName);
    } else {
      message.walletName = "";
    }
    if (object.minSigns !== undefined && object.minSigns !== null) {
      message.minSigns = String(object.minSigns);
    } else {
      message.minSigns = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateMinSigns): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.walletName !== undefined && (obj.walletName = message.walletName);
    message.minSigns !== undefined && (obj.minSigns = message.minSigns);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateMinSigns>): MsgUpdateMinSigns {
    const message = { ...baseMsgUpdateMinSigns } as MsgUpdateMinSigns;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.walletName !== undefined && object.walletName !== null) {
      message.walletName = object.walletName;
    } else {
      message.walletName = "";
    }
    if (object.minSigns !== undefined && object.minSigns !== null) {
      message.minSigns = object.minSigns;
    } else {
      message.minSigns = "";
    }
    return message;
  },
};

const baseMsgUpdateMinSignsResponse: object = {};

export const MsgUpdateMinSignsResponse = {
  encode(
    _: MsgUpdateMinSignsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateMinSignsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMinSignsResponse,
    } as MsgUpdateMinSignsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateMinSignsResponse {
    const message = {
      ...baseMsgUpdateMinSignsResponse,
    } as MsgUpdateMinSignsResponse;
    return message;
  },

  toJSON(_: MsgUpdateMinSignsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMinSignsResponse>
  ): MsgUpdateMinSignsResponse {
    const message = {
      ...baseMsgUpdateMinSignsResponse,
    } as MsgUpdateMinSignsResponse;
    return message;
  },
};

const baseMsgAddMember: object = { creator: "", walltName: "", member: "" };

export const MsgAddMember = {
  encode(message: MsgAddMember, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.walltName !== "") {
      writer.uint32(18).string(message.walltName);
    }
    if (message.member !== "") {
      writer.uint32(26).string(message.member);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddMember {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddMember } as MsgAddMember;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.walltName = reader.string();
          break;
        case 3:
          message.member = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddMember {
    const message = { ...baseMsgAddMember } as MsgAddMember;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.walltName !== undefined && object.walltName !== null) {
      message.walltName = String(object.walltName);
    } else {
      message.walltName = "";
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = String(object.member);
    } else {
      message.member = "";
    }
    return message;
  },

  toJSON(message: MsgAddMember): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.walltName !== undefined && (obj.walltName = message.walltName);
    message.member !== undefined && (obj.member = message.member);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddMember>): MsgAddMember {
    const message = { ...baseMsgAddMember } as MsgAddMember;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.walltName !== undefined && object.walltName !== null) {
      message.walltName = object.walltName;
    } else {
      message.walltName = "";
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    } else {
      message.member = "";
    }
    return message;
  },
};

const baseMsgAddMemberResponse: object = {};

export const MsgAddMemberResponse = {
  encode(_: MsgAddMemberResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddMemberResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddMemberResponse } as MsgAddMemberResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgAddMemberResponse {
    const message = { ...baseMsgAddMemberResponse } as MsgAddMemberResponse;
    return message;
  },

  toJSON(_: MsgAddMemberResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddMemberResponse>): MsgAddMemberResponse {
    const message = { ...baseMsgAddMemberResponse } as MsgAddMemberResponse;
    return message;
  },
};

const baseMsgSignMemberTransaction: object = { creator: "", transactionID: "" };

export const MsgSignMemberTransaction = {
  encode(
    message: MsgSignMemberTransaction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.transactionID !== "") {
      writer.uint32(18).string(message.transactionID);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSignMemberTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSignMemberTransaction,
    } as MsgSignMemberTransaction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.transactionID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSignMemberTransaction {
    const message = {
      ...baseMsgSignMemberTransaction,
    } as MsgSignMemberTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.transactionID !== undefined && object.transactionID !== null) {
      message.transactionID = String(object.transactionID);
    } else {
      message.transactionID = "";
    }
    return message;
  },

  toJSON(message: MsgSignMemberTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.transactionID !== undefined &&
      (obj.transactionID = message.transactionID);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSignMemberTransaction>
  ): MsgSignMemberTransaction {
    const message = {
      ...baseMsgSignMemberTransaction,
    } as MsgSignMemberTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.transactionID !== undefined && object.transactionID !== null) {
      message.transactionID = object.transactionID;
    } else {
      message.transactionID = "";
    }
    return message;
  },
};

const baseMsgSignMemberTransactionResponse: object = {};

export const MsgSignMemberTransactionResponse = {
  encode(
    _: MsgSignMemberTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSignMemberTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSignMemberTransactionResponse,
    } as MsgSignMemberTransactionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSignMemberTransactionResponse {
    const message = {
      ...baseMsgSignMemberTransactionResponse,
    } as MsgSignMemberTransactionResponse;
    return message;
  },

  toJSON(_: MsgSignMemberTransactionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSignMemberTransactionResponse>
  ): MsgSignMemberTransactionResponse {
    const message = {
      ...baseMsgSignMemberTransactionResponse,
    } as MsgSignMemberTransactionResponse;
    return message;
  },
};

const baseMsgRemoveMember: object = { creator: "", walltName: "", member: "" };

export const MsgRemoveMember = {
  encode(message: MsgRemoveMember, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.walltName !== "") {
      writer.uint32(18).string(message.walltName);
    }
    if (message.member !== "") {
      writer.uint32(26).string(message.member);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRemoveMember {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveMember } as MsgRemoveMember;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.walltName = reader.string();
          break;
        case 3:
          message.member = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveMember {
    const message = { ...baseMsgRemoveMember } as MsgRemoveMember;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.walltName !== undefined && object.walltName !== null) {
      message.walltName = String(object.walltName);
    } else {
      message.walltName = "";
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = String(object.member);
    } else {
      message.member = "";
    }
    return message;
  },

  toJSON(message: MsgRemoveMember): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.walltName !== undefined && (obj.walltName = message.walltName);
    message.member !== undefined && (obj.member = message.member);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveMember>): MsgRemoveMember {
    const message = { ...baseMsgRemoveMember } as MsgRemoveMember;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.walltName !== undefined && object.walltName !== null) {
      message.walltName = object.walltName;
    } else {
      message.walltName = "";
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = object.member;
    } else {
      message.member = "";
    }
    return message;
  },
};

const baseMsgRemoveMemberResponse: object = {};

export const MsgRemoveMemberResponse = {
  encode(_: MsgRemoveMemberResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRemoveMemberResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveMemberResponse,
    } as MsgRemoveMemberResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRemoveMemberResponse {
    const message = {
      ...baseMsgRemoveMemberResponse,
    } as MsgRemoveMemberResponse;
    return message;
  },

  toJSON(_: MsgRemoveMemberResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRemoveMemberResponse>
  ): MsgRemoveMemberResponse {
    const message = {
      ...baseMsgRemoveMemberResponse,
    } as MsgRemoveMemberResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateWallet(request: MsgCreateWallet): Promise<MsgCreateWalletResponse>;
  CreateTransaction(
    request: MsgCreateTransaction
  ): Promise<MsgCreateTransactionResponse>;
  SignTransaction(
    request: MsgSignTransaction
  ): Promise<MsgSignTransactionResponse>;
  ExecuteTransaction(
    request: MsgExecuteTransaction
  ): Promise<MsgExecuteTransactionResponse>;
  AddSigners(request: MsgAddSigners): Promise<MsgAddSignersResponse>;
  RemoveSigners(request: MsgRemoveSigners): Promise<MsgRemoveSignersResponse>;
  UpdateMinSigns(
    request: MsgUpdateMinSigns
  ): Promise<MsgUpdateMinSignsResponse>;
  AddMember(request: MsgAddMember): Promise<MsgAddMemberResponse>;
  SignMemberTransaction(
    request: MsgSignMemberTransaction
  ): Promise<MsgSignMemberTransactionResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RemoveMember(request: MsgRemoveMember): Promise<MsgRemoveMemberResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateWallet(request: MsgCreateWallet): Promise<MsgCreateWalletResponse> {
    const data = MsgCreateWallet.encode(request).finish();
    const promise = this.rpc.request(
      "threefoldtech.threefoldhub.multisigwallet.Msg",
      "CreateWallet",
      data
    );
    return promise.then((data) =>
      MsgCreateWalletResponse.decode(new Reader(data))
    );
  }

  CreateTransaction(
    request: MsgCreateTransaction
  ): Promise<MsgCreateTransactionResponse> {
    const data = MsgCreateTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "threefoldtech.threefoldhub.multisigwallet.Msg",
      "CreateTransaction",
      data
    );
    return promise.then((data) =>
      MsgCreateTransactionResponse.decode(new Reader(data))
    );
  }

  SignTransaction(
    request: MsgSignTransaction
  ): Promise<MsgSignTransactionResponse> {
    const data = MsgSignTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "threefoldtech.threefoldhub.multisigwallet.Msg",
      "SignTransaction",
      data
    );
    return promise.then((data) =>
      MsgSignTransactionResponse.decode(new Reader(data))
    );
  }

  ExecuteTransaction(
    request: MsgExecuteTransaction
  ): Promise<MsgExecuteTransactionResponse> {
    const data = MsgExecuteTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "threefoldtech.threefoldhub.multisigwallet.Msg",
      "ExecuteTransaction",
      data
    );
    return promise.then((data) =>
      MsgExecuteTransactionResponse.decode(new Reader(data))
    );
  }

  AddSigners(request: MsgAddSigners): Promise<MsgAddSignersResponse> {
    const data = MsgAddSigners.encode(request).finish();
    const promise = this.rpc.request(
      "threefoldtech.threefoldhub.multisigwallet.Msg",
      "AddSigners",
      data
    );
    return promise.then((data) =>
      MsgAddSignersResponse.decode(new Reader(data))
    );
  }

  RemoveSigners(request: MsgRemoveSigners): Promise<MsgRemoveSignersResponse> {
    const data = MsgRemoveSigners.encode(request).finish();
    const promise = this.rpc.request(
      "threefoldtech.threefoldhub.multisigwallet.Msg",
      "RemoveSigners",
      data
    );
    return promise.then((data) =>
      MsgRemoveSignersResponse.decode(new Reader(data))
    );
  }

  UpdateMinSigns(
    request: MsgUpdateMinSigns
  ): Promise<MsgUpdateMinSignsResponse> {
    const data = MsgUpdateMinSigns.encode(request).finish();
    const promise = this.rpc.request(
      "threefoldtech.threefoldhub.multisigwallet.Msg",
      "UpdateMinSigns",
      data
    );
    return promise.then((data) =>
      MsgUpdateMinSignsResponse.decode(new Reader(data))
    );
  }

  AddMember(request: MsgAddMember): Promise<MsgAddMemberResponse> {
    const data = MsgAddMember.encode(request).finish();
    const promise = this.rpc.request(
      "threefoldtech.threefoldhub.multisigwallet.Msg",
      "AddMember",
      data
    );
    return promise.then((data) =>
      MsgAddMemberResponse.decode(new Reader(data))
    );
  }

  SignMemberTransaction(
    request: MsgSignMemberTransaction
  ): Promise<MsgSignMemberTransactionResponse> {
    const data = MsgSignMemberTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "threefoldtech.threefoldhub.multisigwallet.Msg",
      "SignMemberTransaction",
      data
    );
    return promise.then((data) =>
      MsgSignMemberTransactionResponse.decode(new Reader(data))
    );
  }

  RemoveMember(request: MsgRemoveMember): Promise<MsgRemoveMemberResponse> {
    const data = MsgRemoveMember.encode(request).finish();
    const promise = this.rpc.request(
      "threefoldtech.threefoldhub.multisigwallet.Msg",
      "RemoveMember",
      data
    );
    return promise.then((data) =>
      MsgRemoveMemberResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
