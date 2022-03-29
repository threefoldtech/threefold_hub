/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../multisigwallet/params";
import { Wallet } from "../multisigwallet/wallet";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Transaction } from "../multisigwallet/transaction";
import { NextTransaction } from "../multisigwallet/next_transaction";

export const protobufPackage = "threefoldtech.threefoldhub.multisigwallet";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetWalletRequest {
  index: string;
}

export interface QueryGetWalletResponse {
  wallet: Wallet | undefined;
}

export interface QueryAllWalletRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllWalletResponse {
  wallet: Wallet[];
  pagination: PageResponse | undefined;
}

export interface QueryGetTransactionRequest {
  index: string;
}

export interface QueryGetTransactionResponse {
  transaction: Transaction | undefined;
}

export interface QueryAllTransactionRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllTransactionResponse {
  transaction: Transaction[];
  pagination: PageResponse | undefined;
}

export interface QueryGetNextTransactionRequest {}

export interface QueryGetNextTransactionResponse {
  NextTransaction: NextTransaction | undefined;
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

const baseQueryGetWalletRequest: object = { index: "" };

export const QueryGetWalletRequest = {
  encode(
    message: QueryGetWalletRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetWalletRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetWalletRequest } as QueryGetWalletRequest;
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

  fromJSON(object: any): QueryGetWalletRequest {
    const message = { ...baseQueryGetWalletRequest } as QueryGetWalletRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetWalletRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWalletRequest>
  ): QueryGetWalletRequest {
    const message = { ...baseQueryGetWalletRequest } as QueryGetWalletRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetWalletResponse: object = {};

export const QueryGetWalletResponse = {
  encode(
    message: QueryGetWalletResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.wallet !== undefined) {
      Wallet.encode(message.wallet, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetWalletResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetWalletResponse } as QueryGetWalletResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wallet = Wallet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWalletResponse {
    const message = { ...baseQueryGetWalletResponse } as QueryGetWalletResponse;
    if (object.wallet !== undefined && object.wallet !== null) {
      message.wallet = Wallet.fromJSON(object.wallet);
    } else {
      message.wallet = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetWalletResponse): unknown {
    const obj: any = {};
    message.wallet !== undefined &&
      (obj.wallet = message.wallet ? Wallet.toJSON(message.wallet) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWalletResponse>
  ): QueryGetWalletResponse {
    const message = { ...baseQueryGetWalletResponse } as QueryGetWalletResponse;
    if (object.wallet !== undefined && object.wallet !== null) {
      message.wallet = Wallet.fromPartial(object.wallet);
    } else {
      message.wallet = undefined;
    }
    return message;
  },
};

const baseQueryAllWalletRequest: object = {};

export const QueryAllWalletRequest = {
  encode(
    message: QueryAllWalletRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllWalletRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllWalletRequest } as QueryAllWalletRequest;
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

  fromJSON(object: any): QueryAllWalletRequest {
    const message = { ...baseQueryAllWalletRequest } as QueryAllWalletRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWalletRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWalletRequest>
  ): QueryAllWalletRequest {
    const message = { ...baseQueryAllWalletRequest } as QueryAllWalletRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllWalletResponse: object = {};

export const QueryAllWalletResponse = {
  encode(
    message: QueryAllWalletResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.wallet) {
      Wallet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllWalletResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllWalletResponse } as QueryAllWalletResponse;
    message.wallet = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wallet.push(Wallet.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllWalletResponse {
    const message = { ...baseQueryAllWalletResponse } as QueryAllWalletResponse;
    message.wallet = [];
    if (object.wallet !== undefined && object.wallet !== null) {
      for (const e of object.wallet) {
        message.wallet.push(Wallet.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWalletResponse): unknown {
    const obj: any = {};
    if (message.wallet) {
      obj.wallet = message.wallet.map((e) =>
        e ? Wallet.toJSON(e) : undefined
      );
    } else {
      obj.wallet = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWalletResponse>
  ): QueryAllWalletResponse {
    const message = { ...baseQueryAllWalletResponse } as QueryAllWalletResponse;
    message.wallet = [];
    if (object.wallet !== undefined && object.wallet !== null) {
      for (const e of object.wallet) {
        message.wallet.push(Wallet.fromPartial(e));
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

const baseQueryGetTransactionRequest: object = { index: "" };

export const QueryGetTransactionRequest = {
  encode(
    message: QueryGetTransactionRequest,
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
  ): QueryGetTransactionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTransactionRequest,
    } as QueryGetTransactionRequest;
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

  fromJSON(object: any): QueryGetTransactionRequest {
    const message = {
      ...baseQueryGetTransactionRequest,
    } as QueryGetTransactionRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetTransactionRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTransactionRequest>
  ): QueryGetTransactionRequest {
    const message = {
      ...baseQueryGetTransactionRequest,
    } as QueryGetTransactionRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetTransactionResponse: object = {};

export const QueryGetTransactionResponse = {
  encode(
    message: QueryGetTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.transaction !== undefined) {
      Transaction.encode(
        message.transaction,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTransactionResponse,
    } as QueryGetTransactionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transaction = Transaction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTransactionResponse {
    const message = {
      ...baseQueryGetTransactionResponse,
    } as QueryGetTransactionResponse;
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = Transaction.fromJSON(object.transaction);
    } else {
      message.transaction = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTransactionResponse): unknown {
    const obj: any = {};
    message.transaction !== undefined &&
      (obj.transaction = message.transaction
        ? Transaction.toJSON(message.transaction)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTransactionResponse>
  ): QueryGetTransactionResponse {
    const message = {
      ...baseQueryGetTransactionResponse,
    } as QueryGetTransactionResponse;
    if (object.transaction !== undefined && object.transaction !== null) {
      message.transaction = Transaction.fromPartial(object.transaction);
    } else {
      message.transaction = undefined;
    }
    return message;
  },
};

const baseQueryAllTransactionRequest: object = {};

export const QueryAllTransactionRequest = {
  encode(
    message: QueryAllTransactionRequest,
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
  ): QueryAllTransactionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTransactionRequest,
    } as QueryAllTransactionRequest;
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

  fromJSON(object: any): QueryAllTransactionRequest {
    const message = {
      ...baseQueryAllTransactionRequest,
    } as QueryAllTransactionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTransactionRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTransactionRequest>
  ): QueryAllTransactionRequest {
    const message = {
      ...baseQueryAllTransactionRequest,
    } as QueryAllTransactionRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllTransactionResponse: object = {};

export const QueryAllTransactionResponse = {
  encode(
    message: QueryAllTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.transaction) {
      Transaction.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTransactionResponse,
    } as QueryAllTransactionResponse;
    message.transaction = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transaction.push(Transaction.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllTransactionResponse {
    const message = {
      ...baseQueryAllTransactionResponse,
    } as QueryAllTransactionResponse;
    message.transaction = [];
    if (object.transaction !== undefined && object.transaction !== null) {
      for (const e of object.transaction) {
        message.transaction.push(Transaction.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTransactionResponse): unknown {
    const obj: any = {};
    if (message.transaction) {
      obj.transaction = message.transaction.map((e) =>
        e ? Transaction.toJSON(e) : undefined
      );
    } else {
      obj.transaction = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTransactionResponse>
  ): QueryAllTransactionResponse {
    const message = {
      ...baseQueryAllTransactionResponse,
    } as QueryAllTransactionResponse;
    message.transaction = [];
    if (object.transaction !== undefined && object.transaction !== null) {
      for (const e of object.transaction) {
        message.transaction.push(Transaction.fromPartial(e));
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

const baseQueryGetNextTransactionRequest: object = {};

export const QueryGetNextTransactionRequest = {
  encode(
    _: QueryGetNextTransactionRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetNextTransactionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNextTransactionRequest,
    } as QueryGetNextTransactionRequest;
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

  fromJSON(_: any): QueryGetNextTransactionRequest {
    const message = {
      ...baseQueryGetNextTransactionRequest,
    } as QueryGetNextTransactionRequest;
    return message;
  },

  toJSON(_: QueryGetNextTransactionRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetNextTransactionRequest>
  ): QueryGetNextTransactionRequest {
    const message = {
      ...baseQueryGetNextTransactionRequest,
    } as QueryGetNextTransactionRequest;
    return message;
  },
};

const baseQueryGetNextTransactionResponse: object = {};

export const QueryGetNextTransactionResponse = {
  encode(
    message: QueryGetNextTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.NextTransaction !== undefined) {
      NextTransaction.encode(
        message.NextTransaction,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetNextTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetNextTransactionResponse,
    } as QueryGetNextTransactionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.NextTransaction = NextTransaction.decode(
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

  fromJSON(object: any): QueryGetNextTransactionResponse {
    const message = {
      ...baseQueryGetNextTransactionResponse,
    } as QueryGetNextTransactionResponse;
    if (
      object.NextTransaction !== undefined &&
      object.NextTransaction !== null
    ) {
      message.NextTransaction = NextTransaction.fromJSON(
        object.NextTransaction
      );
    } else {
      message.NextTransaction = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetNextTransactionResponse): unknown {
    const obj: any = {};
    message.NextTransaction !== undefined &&
      (obj.NextTransaction = message.NextTransaction
        ? NextTransaction.toJSON(message.NextTransaction)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetNextTransactionResponse>
  ): QueryGetNextTransactionResponse {
    const message = {
      ...baseQueryGetNextTransactionResponse,
    } as QueryGetNextTransactionResponse;
    if (
      object.NextTransaction !== undefined &&
      object.NextTransaction !== null
    ) {
      message.NextTransaction = NextTransaction.fromPartial(
        object.NextTransaction
      );
    } else {
      message.NextTransaction = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Wallet by index. */
  Wallet(request: QueryGetWalletRequest): Promise<QueryGetWalletResponse>;
  /** Queries a list of Wallet items. */
  WalletAll(request: QueryAllWalletRequest): Promise<QueryAllWalletResponse>;
  /** Queries a Transaction by index. */
  Transaction(
    request: QueryGetTransactionRequest
  ): Promise<QueryGetTransactionResponse>;
  /** Queries a list of Transaction items. */
  TransactionAll(
    request: QueryAllTransactionRequest
  ): Promise<QueryAllTransactionResponse>;
  /** Queries a NextTransaction by index. */
  NextTransaction(
    request: QueryGetNextTransactionRequest
  ): Promise<QueryGetNextTransactionResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "threefoldtech.threefoldhub.multisigwallet.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Wallet(request: QueryGetWalletRequest): Promise<QueryGetWalletResponse> {
    const data = QueryGetWalletRequest.encode(request).finish();
    const promise = this.rpc.request(
      "threefoldtech.threefoldhub.multisigwallet.Query",
      "Wallet",
      data
    );
    return promise.then((data) =>
      QueryGetWalletResponse.decode(new Reader(data))
    );
  }

  WalletAll(request: QueryAllWalletRequest): Promise<QueryAllWalletResponse> {
    const data = QueryAllWalletRequest.encode(request).finish();
    const promise = this.rpc.request(
      "threefoldtech.threefoldhub.multisigwallet.Query",
      "WalletAll",
      data
    );
    return promise.then((data) =>
      QueryAllWalletResponse.decode(new Reader(data))
    );
  }

  Transaction(
    request: QueryGetTransactionRequest
  ): Promise<QueryGetTransactionResponse> {
    const data = QueryGetTransactionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "threefoldtech.threefoldhub.multisigwallet.Query",
      "Transaction",
      data
    );
    return promise.then((data) =>
      QueryGetTransactionResponse.decode(new Reader(data))
    );
  }

  TransactionAll(
    request: QueryAllTransactionRequest
  ): Promise<QueryAllTransactionResponse> {
    const data = QueryAllTransactionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "threefoldtech.threefoldhub.multisigwallet.Query",
      "TransactionAll",
      data
    );
    return promise.then((data) =>
      QueryAllTransactionResponse.decode(new Reader(data))
    );
  }

  NextTransaction(
    request: QueryGetNextTransactionRequest
  ): Promise<QueryGetNextTransactionResponse> {
    const data = QueryGetNextTransactionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "threefoldtech.threefoldhub.multisigwallet.Query",
      "NextTransaction",
      data
    );
    return promise.then((data) =>
      QueryGetNextTransactionResponse.decode(new Reader(data))
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
