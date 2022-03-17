/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Description } from "../validators/validator";

export const protobufPackage = "threefold.threefoldhub.validators";

export interface MsgCreateValidator {
  operatorAddress: string;
  consensusPubkey: string;
  description: Description | undefined;
}

export interface MsgCreateValidatorResponse {}

export interface MsgUpdateValidator {
  operatorAddress: string;
  description: Description | undefined;
}

export interface MsgUpdateValidatorResponse {}

export interface MsgDeleteValidator {
  operatorAddress: string;
}

export interface MsgDeleteValidatorResponse {}

const baseMsgCreateValidator: object = {
  operatorAddress: "",
  consensusPubkey: "",
};

export const MsgCreateValidator = {
  encode(
    message: MsgCreateValidator,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.consensusPubkey !== "") {
      writer.uint32(18).string(message.consensusPubkey);
    }
    if (message.description !== undefined) {
      Description.encode(
        message.description,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateValidator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateValidator } as MsgCreateValidator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.consensusPubkey = reader.string();
          break;
        case 3:
          message.description = Description.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateValidator {
    const message = { ...baseMsgCreateValidator } as MsgCreateValidator;
    if (
      object.operatorAddress !== undefined &&
      object.operatorAddress !== null
    ) {
      message.operatorAddress = String(object.operatorAddress);
    } else {
      message.operatorAddress = "";
    }
    if (
      object.consensusPubkey !== undefined &&
      object.consensusPubkey !== null
    ) {
      message.consensusPubkey = String(object.consensusPubkey);
    } else {
      message.consensusPubkey = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromJSON(object.description);
    } else {
      message.description = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateValidator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined &&
      (obj.operatorAddress = message.operatorAddress);
    message.consensusPubkey !== undefined &&
      (obj.consensusPubkey = message.consensusPubkey);
    message.description !== undefined &&
      (obj.description = message.description
        ? Description.toJSON(message.description)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateValidator>): MsgCreateValidator {
    const message = { ...baseMsgCreateValidator } as MsgCreateValidator;
    if (
      object.operatorAddress !== undefined &&
      object.operatorAddress !== null
    ) {
      message.operatorAddress = object.operatorAddress;
    } else {
      message.operatorAddress = "";
    }
    if (
      object.consensusPubkey !== undefined &&
      object.consensusPubkey !== null
    ) {
      message.consensusPubkey = object.consensusPubkey;
    } else {
      message.consensusPubkey = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromPartial(object.description);
    } else {
      message.description = undefined;
    }
    return message;
  },
};

const baseMsgCreateValidatorResponse: object = {};

export const MsgCreateValidatorResponse = {
  encode(
    _: MsgCreateValidatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateValidatorResponse,
    } as MsgCreateValidatorResponse;
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

  fromJSON(_: any): MsgCreateValidatorResponse {
    const message = {
      ...baseMsgCreateValidatorResponse,
    } as MsgCreateValidatorResponse;
    return message;
  },

  toJSON(_: MsgCreateValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateValidatorResponse>
  ): MsgCreateValidatorResponse {
    const message = {
      ...baseMsgCreateValidatorResponse,
    } as MsgCreateValidatorResponse;
    return message;
  },
};

const baseMsgUpdateValidator: object = { operatorAddress: "" };

export const MsgUpdateValidator = {
  encode(
    message: MsgUpdateValidator,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.description !== undefined) {
      Description.encode(
        message.description,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateValidator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateValidator } as MsgUpdateValidator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 3:
          message.description = Description.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateValidator {
    const message = { ...baseMsgUpdateValidator } as MsgUpdateValidator;
    if (
      object.operatorAddress !== undefined &&
      object.operatorAddress !== null
    ) {
      message.operatorAddress = String(object.operatorAddress);
    } else {
      message.operatorAddress = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromJSON(object.description);
    } else {
      message.description = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateValidator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined &&
      (obj.operatorAddress = message.operatorAddress);
    message.description !== undefined &&
      (obj.description = message.description
        ? Description.toJSON(message.description)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateValidator>): MsgUpdateValidator {
    const message = { ...baseMsgUpdateValidator } as MsgUpdateValidator;
    if (
      object.operatorAddress !== undefined &&
      object.operatorAddress !== null
    ) {
      message.operatorAddress = object.operatorAddress;
    } else {
      message.operatorAddress = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromPartial(object.description);
    } else {
      message.description = undefined;
    }
    return message;
  },
};

const baseMsgUpdateValidatorResponse: object = {};

export const MsgUpdateValidatorResponse = {
  encode(
    _: MsgUpdateValidatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateValidatorResponse,
    } as MsgUpdateValidatorResponse;
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

  fromJSON(_: any): MsgUpdateValidatorResponse {
    const message = {
      ...baseMsgUpdateValidatorResponse,
    } as MsgUpdateValidatorResponse;
    return message;
  },

  toJSON(_: MsgUpdateValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateValidatorResponse>
  ): MsgUpdateValidatorResponse {
    const message = {
      ...baseMsgUpdateValidatorResponse,
    } as MsgUpdateValidatorResponse;
    return message;
  },
};

const baseMsgDeleteValidator: object = { operatorAddress: "" };

export const MsgDeleteValidator = {
  encode(
    message: MsgDeleteValidator,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteValidator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteValidator } as MsgDeleteValidator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteValidator {
    const message = { ...baseMsgDeleteValidator } as MsgDeleteValidator;
    if (
      object.operatorAddress !== undefined &&
      object.operatorAddress !== null
    ) {
      message.operatorAddress = String(object.operatorAddress);
    } else {
      message.operatorAddress = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteValidator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined &&
      (obj.operatorAddress = message.operatorAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteValidator>): MsgDeleteValidator {
    const message = { ...baseMsgDeleteValidator } as MsgDeleteValidator;
    if (
      object.operatorAddress !== undefined &&
      object.operatorAddress !== null
    ) {
      message.operatorAddress = object.operatorAddress;
    } else {
      message.operatorAddress = "";
    }
    return message;
  },
};

const baseMsgDeleteValidatorResponse: object = {};

export const MsgDeleteValidatorResponse = {
  encode(
    _: MsgDeleteValidatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteValidatorResponse,
    } as MsgDeleteValidatorResponse;
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

  fromJSON(_: any): MsgDeleteValidatorResponse {
    const message = {
      ...baseMsgDeleteValidatorResponse,
    } as MsgDeleteValidatorResponse;
    return message;
  },

  toJSON(_: MsgDeleteValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteValidatorResponse>
  ): MsgDeleteValidatorResponse {
    const message = {
      ...baseMsgDeleteValidatorResponse,
    } as MsgDeleteValidatorResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateValidator(
    request: MsgCreateValidator
  ): Promise<MsgCreateValidatorResponse>;
  UpdateValidator(
    request: MsgUpdateValidator
  ): Promise<MsgUpdateValidatorResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteValidator(
    request: MsgDeleteValidator
  ): Promise<MsgDeleteValidatorResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateValidator(
    request: MsgCreateValidator
  ): Promise<MsgCreateValidatorResponse> {
    const data = MsgCreateValidator.encode(request).finish();
    const promise = this.rpc.request(
      "threefold.threefoldhub.validators.Msg",
      "CreateValidator",
      data
    );
    return promise.then((data) =>
      MsgCreateValidatorResponse.decode(new Reader(data))
    );
  }

  UpdateValidator(
    request: MsgUpdateValidator
  ): Promise<MsgUpdateValidatorResponse> {
    const data = MsgUpdateValidator.encode(request).finish();
    const promise = this.rpc.request(
      "threefold.threefoldhub.validators.Msg",
      "UpdateValidator",
      data
    );
    return promise.then((data) =>
      MsgUpdateValidatorResponse.decode(new Reader(data))
    );
  }

  DeleteValidator(
    request: MsgDeleteValidator
  ): Promise<MsgDeleteValidatorResponse> {
    const data = MsgDeleteValidator.encode(request).finish();
    const promise = this.rpc.request(
      "threefold.threefoldhub.validators.Msg",
      "DeleteValidator",
      data
    );
    return promise.then((data) =>
      MsgDeleteValidatorResponse.decode(new Reader(data))
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
