/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../validators/params";
import { Validator } from "../validators/validator";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { HistoricalInfo } from "../validators/historical_info";

export const protobufPackage = "threefold.threefoldhub.validators";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetValidatorRequest {
  index: string;
}

export interface QueryGetValidatorResponse {
  validator: Validator | undefined;
}

export interface QueryAllValidatorRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllValidatorResponse {
  validator: Validator[];
  pagination: PageResponse | undefined;
}

export interface QueryGetHistoricalInfoRequest {
  height: number;
}

export interface QueryGetHistoricalInfoResponse {
  historicalInfo: HistoricalInfo | undefined;
}

export interface QueryAllHistoricalInfoRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllHistoricalInfoResponse {
  historicalInfo: HistoricalInfo[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetValidatorRequest: object = { index: "" };

export const QueryGetValidatorRequest = {
  encode(
    message: QueryGetValidatorRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetValidatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetValidatorRequest,
    } as QueryGetValidatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetValidatorRequest {
    const message = {
      ...baseQueryGetValidatorRequest,
    } as QueryGetValidatorRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetValidatorRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetValidatorRequest>
  ): QueryGetValidatorRequest {
    const message = {
      ...baseQueryGetValidatorRequest,
    } as QueryGetValidatorRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetValidatorResponse: object = {};

export const QueryGetValidatorResponse = {
  encode(
    message: QueryGetValidatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetValidatorResponse,
    } as QueryGetValidatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetValidatorResponse {
    const message = {
      ...baseQueryGetValidatorResponse,
    } as QueryGetValidatorResponse;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromJSON(object.validator);
    } else {
      message.validator = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator
        ? Validator.toJSON(message.validator)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetValidatorResponse>
  ): QueryGetValidatorResponse {
    const message = {
      ...baseQueryGetValidatorResponse,
    } as QueryGetValidatorResponse;
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    } else {
      message.validator = undefined;
    }
    return message;
  },
};

const baseQueryAllValidatorRequest: object = {};

export const QueryAllValidatorRequest = {
  encode(
    message: QueryAllValidatorRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllValidatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllValidatorRequest,
    } as QueryAllValidatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllValidatorRequest {
    const message = {
      ...baseQueryAllValidatorRequest,
    } as QueryAllValidatorRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllValidatorRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllValidatorRequest>
  ): QueryAllValidatorRequest {
    const message = {
      ...baseQueryAllValidatorRequest,
    } as QueryAllValidatorRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllValidatorResponse: object = {};

export const QueryAllValidatorResponse = {
  encode(
    message: QueryAllValidatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.validator) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllValidatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllValidatorResponse,
    } as QueryAllValidatorResponse;
    message.validator = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllValidatorResponse {
    const message = {
      ...baseQueryAllValidatorResponse,
    } as QueryAllValidatorResponse;
    message.validator = [];
    if (object.validator !== undefined && object.validator !== null) {
      for (const e of object.validator) {
        message.validator.push(Validator.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllValidatorResponse): unknown {
    const obj: any = {};
    if (message.validator) {
      obj.validator = message.validator.map((e) =>
        e ? Validator.toJSON(e) : undefined
      );
    } else {
      obj.validator = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllValidatorResponse>
  ): QueryAllValidatorResponse {
    const message = {
      ...baseQueryAllValidatorResponse,
    } as QueryAllValidatorResponse;
    message.validator = [];
    if (object.validator !== undefined && object.validator !== null) {
      for (const e of object.validator) {
        message.validator.push(Validator.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetHistoricalInfoRequest: object = { height: 0 };

export const QueryGetHistoricalInfoRequest = {
  encode(
    message: QueryGetHistoricalInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.height !== 0) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetHistoricalInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetHistoricalInfoRequest,
    } as QueryGetHistoricalInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHistoricalInfoRequest {
    const message = {
      ...baseQueryGetHistoricalInfoRequest,
    } as QueryGetHistoricalInfoRequest;
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    return message;
  },

  toJSON(message: QueryGetHistoricalInfoRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetHistoricalInfoRequest>
  ): QueryGetHistoricalInfoRequest {
    const message = {
      ...baseQueryGetHistoricalInfoRequest,
    } as QueryGetHistoricalInfoRequest;
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    return message;
  },
};

const baseQueryGetHistoricalInfoResponse: object = {};

export const QueryGetHistoricalInfoResponse = {
  encode(
    message: QueryGetHistoricalInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.historicalInfo !== undefined) {
      HistoricalInfo.encode(
        message.historicalInfo,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetHistoricalInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetHistoricalInfoResponse,
    } as QueryGetHistoricalInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.historicalInfo = HistoricalInfo.decode(
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

  fromJSON(object: any): QueryGetHistoricalInfoResponse {
    const message = {
      ...baseQueryGetHistoricalInfoResponse,
    } as QueryGetHistoricalInfoResponse;
    if (object.historicalInfo !== undefined && object.historicalInfo !== null) {
      message.historicalInfo = HistoricalInfo.fromJSON(object.historicalInfo);
    } else {
      message.historicalInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetHistoricalInfoResponse): unknown {
    const obj: any = {};
    message.historicalInfo !== undefined &&
      (obj.historicalInfo = message.historicalInfo
        ? HistoricalInfo.toJSON(message.historicalInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetHistoricalInfoResponse>
  ): QueryGetHistoricalInfoResponse {
    const message = {
      ...baseQueryGetHistoricalInfoResponse,
    } as QueryGetHistoricalInfoResponse;
    if (object.historicalInfo !== undefined && object.historicalInfo !== null) {
      message.historicalInfo = HistoricalInfo.fromPartial(
        object.historicalInfo
      );
    } else {
      message.historicalInfo = undefined;
    }
    return message;
  },
};

const baseQueryAllHistoricalInfoRequest: object = {};

export const QueryAllHistoricalInfoRequest = {
  encode(
    message: QueryAllHistoricalInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllHistoricalInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllHistoricalInfoRequest,
    } as QueryAllHistoricalInfoRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHistoricalInfoRequest {
    const message = {
      ...baseQueryAllHistoricalInfoRequest,
    } as QueryAllHistoricalInfoRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHistoricalInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllHistoricalInfoRequest>
  ): QueryAllHistoricalInfoRequest {
    const message = {
      ...baseQueryAllHistoricalInfoRequest,
    } as QueryAllHistoricalInfoRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllHistoricalInfoResponse: object = {};

export const QueryAllHistoricalInfoResponse = {
  encode(
    message: QueryAllHistoricalInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.historicalInfo) {
      HistoricalInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllHistoricalInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllHistoricalInfoResponse,
    } as QueryAllHistoricalInfoResponse;
    message.historicalInfo = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.historicalInfo.push(
            HistoricalInfo.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHistoricalInfoResponse {
    const message = {
      ...baseQueryAllHistoricalInfoResponse,
    } as QueryAllHistoricalInfoResponse;
    message.historicalInfo = [];
    if (object.historicalInfo !== undefined && object.historicalInfo !== null) {
      for (const e of object.historicalInfo) {
        message.historicalInfo.push(HistoricalInfo.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHistoricalInfoResponse): unknown {
    const obj: any = {};
    if (message.historicalInfo) {
      obj.historicalInfo = message.historicalInfo.map((e) =>
        e ? HistoricalInfo.toJSON(e) : undefined
      );
    } else {
      obj.historicalInfo = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllHistoricalInfoResponse>
  ): QueryAllHistoricalInfoResponse {
    const message = {
      ...baseQueryAllHistoricalInfoResponse,
    } as QueryAllHistoricalInfoResponse;
    message.historicalInfo = [];
    if (object.historicalInfo !== undefined && object.historicalInfo !== null) {
      for (const e of object.historicalInfo) {
        message.historicalInfo.push(HistoricalInfo.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Validator by index. */
  Validator(
    request: QueryGetValidatorRequest
  ): Promise<QueryGetValidatorResponse>;
  /** Queries a list of Validator items. */
  ValidatorAll(
    request: QueryAllValidatorRequest
  ): Promise<QueryAllValidatorResponse>;
  /** Queries a HistoricalInfo by index. */
  HistoricalInfo(
    request: QueryGetHistoricalInfoRequest
  ): Promise<QueryGetHistoricalInfoResponse>;
  /** Queries a list of HistoricalInfo items. */
  HistoricalInfoAll(
    request: QueryAllHistoricalInfoRequest
  ): Promise<QueryAllHistoricalInfoResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "threefold.threefoldhub.validators.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Validator(
    request: QueryGetValidatorRequest
  ): Promise<QueryGetValidatorResponse> {
    const data = QueryGetValidatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "threefold.threefoldhub.validators.Query",
      "Validator",
      data
    );
    return promise.then((data) =>
      QueryGetValidatorResponse.decode(new Reader(data))
    );
  }

  ValidatorAll(
    request: QueryAllValidatorRequest
  ): Promise<QueryAllValidatorResponse> {
    const data = QueryAllValidatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "threefold.threefoldhub.validators.Query",
      "ValidatorAll",
      data
    );
    return promise.then((data) =>
      QueryAllValidatorResponse.decode(new Reader(data))
    );
  }

  HistoricalInfo(
    request: QueryGetHistoricalInfoRequest
  ): Promise<QueryGetHistoricalInfoResponse> {
    const data = QueryGetHistoricalInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "threefold.threefoldhub.validators.Query",
      "HistoricalInfo",
      data
    );
    return promise.then((data) =>
      QueryGetHistoricalInfoResponse.decode(new Reader(data))
    );
  }

  HistoricalInfoAll(
    request: QueryAllHistoricalInfoRequest
  ): Promise<QueryAllHistoricalInfoResponse> {
    const data = QueryAllHistoricalInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "threefold.threefoldhub.validators.Query",
      "HistoricalInfoAll",
      data
    );
    return promise.then((data) =>
      QueryAllHistoricalInfoResponse.decode(new Reader(data))
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
