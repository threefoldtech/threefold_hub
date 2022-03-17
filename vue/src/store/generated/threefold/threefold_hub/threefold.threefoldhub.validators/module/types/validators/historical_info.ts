/* eslint-disable */
import { Header } from "../tendermint/types/types";
import { Validator } from "../validators/validator";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "threefold.threefoldhub.validators";

export interface HistoricalInfo {
  header: Header | undefined;
  valset: Validator[];
}

const baseHistoricalInfo: object = {};

export const HistoricalInfo = {
  encode(message: HistoricalInfo, writer: Writer = Writer.create()): Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.valset) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): HistoricalInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHistoricalInfo } as HistoricalInfo;
    message.valset = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.valset.push(Validator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HistoricalInfo {
    const message = { ...baseHistoricalInfo } as HistoricalInfo;
    message.valset = [];
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromJSON(object.header);
    } else {
      message.header = undefined;
    }
    if (object.valset !== undefined && object.valset !== null) {
      for (const e of object.valset) {
        message.valset.push(Validator.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: HistoricalInfo): unknown {
    const obj: any = {};
    message.header !== undefined &&
      (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    if (message.valset) {
      obj.valset = message.valset.map((e) =>
        e ? Validator.toJSON(e) : undefined
      );
    } else {
      obj.valset = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<HistoricalInfo>): HistoricalInfo {
    const message = { ...baseHistoricalInfo } as HistoricalInfo;
    message.valset = [];
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromPartial(object.header);
    } else {
      message.header = undefined;
    }
    if (object.valset !== undefined && object.valset !== null) {
      for (const e of object.valset) {
        message.valset.push(Validator.fromPartial(e));
      }
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
