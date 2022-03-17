/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "threefold.threefoldhub.validators";

/** Params defines the parameters for the module. */
export interface Params {
  /** max_validators is the maximum number of validators. */
  maxValidators: number;
  /** historical_entries is the number of historical entries to persist. */
  historicalEntries: number;
}

const baseParams: object = { maxValidators: 0, historicalEntries: 0 };

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.maxValidators !== 0) {
      writer.uint32(8).uint32(message.maxValidators);
    }
    if (message.historicalEntries !== 0) {
      writer.uint32(16).uint32(message.historicalEntries);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxValidators = reader.uint32();
          break;
        case 2:
          message.historicalEntries = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (object.maxValidators !== undefined && object.maxValidators !== null) {
      message.maxValidators = Number(object.maxValidators);
    } else {
      message.maxValidators = 0;
    }
    if (
      object.historicalEntries !== undefined &&
      object.historicalEntries !== null
    ) {
      message.historicalEntries = Number(object.historicalEntries);
    } else {
      message.historicalEntries = 0;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxValidators !== undefined &&
      (obj.maxValidators = message.maxValidators);
    message.historicalEntries !== undefined &&
      (obj.historicalEntries = message.historicalEntries);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.maxValidators !== undefined && object.maxValidators !== null) {
      message.maxValidators = object.maxValidators;
    } else {
      message.maxValidators = 0;
    }
    if (
      object.historicalEntries !== undefined &&
      object.historicalEntries !== null
    ) {
      message.historicalEntries = object.historicalEntries;
    } else {
      message.historicalEntries = 0;
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
