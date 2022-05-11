/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../multisigwallet/params";
import { Wallet } from "../multisigwallet/wallet";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { Transaction } from "../multisigwallet/transaction";
import { NextTransaction } from "../multisigwallet/next_transaction";
import { MemberTransaction } from "../multisigwallet/member_transaction";
import { NextMemberTransaction } from "../multisigwallet/next_member_transaction";
export const protobufPackage = "threefoldtech.threefoldhub.multisigwallet";
const baseQueryParamsRequest = {};
export const QueryParamsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest };
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
    fromJSON(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
};
const baseQueryParamsResponse = {};
export const QueryParamsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseQueryGetWalletRequest = { index: "" };
export const QueryGetWalletRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetWalletRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryGetWalletRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetWalletRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetWalletResponse = {};
export const QueryGetWalletResponse = {
    encode(message, writer = Writer.create()) {
        if (message.wallet !== undefined) {
            Wallet.encode(message.wallet, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetWalletResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryGetWalletResponse };
        if (object.wallet !== undefined && object.wallet !== null) {
            message.wallet = Wallet.fromJSON(object.wallet);
        }
        else {
            message.wallet = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.wallet !== undefined &&
            (obj.wallet = message.wallet ? Wallet.toJSON(message.wallet) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetWalletResponse };
        if (object.wallet !== undefined && object.wallet !== null) {
            message.wallet = Wallet.fromPartial(object.wallet);
        }
        else {
            message.wallet = undefined;
        }
        return message;
    },
};
const baseQueryAllWalletRequest = {};
export const QueryAllWalletRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllWalletRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAllWalletRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllWalletRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllWalletResponse = {};
export const QueryAllWalletResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.wallet) {
            Wallet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllWalletResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryAllWalletResponse };
        message.wallet = [];
        if (object.wallet !== undefined && object.wallet !== null) {
            for (const e of object.wallet) {
                message.wallet.push(Wallet.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.wallet) {
            obj.wallet = message.wallet.map((e) => e ? Wallet.toJSON(e) : undefined);
        }
        else {
            obj.wallet = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllWalletResponse };
        message.wallet = [];
        if (object.wallet !== undefined && object.wallet !== null) {
            for (const e of object.wallet) {
                message.wallet.push(Wallet.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetTransactionRequest = { index: "" };
export const QueryGetTransactionRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetTransactionRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetTransactionRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetTransactionRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetTransactionResponse = {};
export const QueryGetTransactionResponse = {
    encode(message, writer = Writer.create()) {
        if (message.transaction !== undefined) {
            Transaction.encode(message.transaction, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetTransactionResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetTransactionResponse,
        };
        if (object.transaction !== undefined && object.transaction !== null) {
            message.transaction = Transaction.fromJSON(object.transaction);
        }
        else {
            message.transaction = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.transaction !== undefined &&
            (obj.transaction = message.transaction
                ? Transaction.toJSON(message.transaction)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetTransactionResponse,
        };
        if (object.transaction !== undefined && object.transaction !== null) {
            message.transaction = Transaction.fromPartial(object.transaction);
        }
        else {
            message.transaction = undefined;
        }
        return message;
    },
};
const baseQueryAllTransactionRequest = {};
export const QueryAllTransactionRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllTransactionRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllTransactionRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllTransactionRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllTransactionResponse = {};
export const QueryAllTransactionResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.transaction) {
            Transaction.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllTransactionResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllTransactionResponse,
        };
        message.transaction = [];
        if (object.transaction !== undefined && object.transaction !== null) {
            for (const e of object.transaction) {
                message.transaction.push(Transaction.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.transaction) {
            obj.transaction = message.transaction.map((e) => e ? Transaction.toJSON(e) : undefined);
        }
        else {
            obj.transaction = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllTransactionResponse,
        };
        message.transaction = [];
        if (object.transaction !== undefined && object.transaction !== null) {
            for (const e of object.transaction) {
                message.transaction.push(Transaction.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetNextTransactionRequest = {};
export const QueryGetNextTransactionRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetNextTransactionRequest,
        };
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
    fromJSON(_) {
        const message = {
            ...baseQueryGetNextTransactionRequest,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseQueryGetNextTransactionRequest,
        };
        return message;
    },
};
const baseQueryGetNextTransactionResponse = {};
export const QueryGetNextTransactionResponse = {
    encode(message, writer = Writer.create()) {
        if (message.NextTransaction !== undefined) {
            NextTransaction.encode(message.NextTransaction, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetNextTransactionResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.NextTransaction = NextTransaction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetNextTransactionResponse,
        };
        if (object.NextTransaction !== undefined &&
            object.NextTransaction !== null) {
            message.NextTransaction = NextTransaction.fromJSON(object.NextTransaction);
        }
        else {
            message.NextTransaction = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.NextTransaction !== undefined &&
            (obj.NextTransaction = message.NextTransaction
                ? NextTransaction.toJSON(message.NextTransaction)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetNextTransactionResponse,
        };
        if (object.NextTransaction !== undefined &&
            object.NextTransaction !== null) {
            message.NextTransaction = NextTransaction.fromPartial(object.NextTransaction);
        }
        else {
            message.NextTransaction = undefined;
        }
        return message;
    },
};
const baseQueryGetMemberTransactionRequest = { index: "" };
export const QueryGetMemberTransactionRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetMemberTransactionRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetMemberTransactionRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetMemberTransactionRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetMemberTransactionResponse = {};
export const QueryGetMemberTransactionResponse = {
    encode(message, writer = Writer.create()) {
        if (message.memberTransaction !== undefined) {
            MemberTransaction.encode(message.memberTransaction, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetMemberTransactionResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.memberTransaction = MemberTransaction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetMemberTransactionResponse,
        };
        if (object.memberTransaction !== undefined &&
            object.memberTransaction !== null) {
            message.memberTransaction = MemberTransaction.fromJSON(object.memberTransaction);
        }
        else {
            message.memberTransaction = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.memberTransaction !== undefined &&
            (obj.memberTransaction = message.memberTransaction
                ? MemberTransaction.toJSON(message.memberTransaction)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetMemberTransactionResponse,
        };
        if (object.memberTransaction !== undefined &&
            object.memberTransaction !== null) {
            message.memberTransaction = MemberTransaction.fromPartial(object.memberTransaction);
        }
        else {
            message.memberTransaction = undefined;
        }
        return message;
    },
};
const baseQueryAllMemberTransactionRequest = {};
export const QueryAllMemberTransactionRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllMemberTransactionRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllMemberTransactionRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllMemberTransactionRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllMemberTransactionResponse = {};
export const QueryAllMemberTransactionResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.memberTransaction) {
            MemberTransaction.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllMemberTransactionResponse,
        };
        message.memberTransaction = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.memberTransaction.push(MemberTransaction.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllMemberTransactionResponse,
        };
        message.memberTransaction = [];
        if (object.memberTransaction !== undefined &&
            object.memberTransaction !== null) {
            for (const e of object.memberTransaction) {
                message.memberTransaction.push(MemberTransaction.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.memberTransaction) {
            obj.memberTransaction = message.memberTransaction.map((e) => e ? MemberTransaction.toJSON(e) : undefined);
        }
        else {
            obj.memberTransaction = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllMemberTransactionResponse,
        };
        message.memberTransaction = [];
        if (object.memberTransaction !== undefined &&
            object.memberTransaction !== null) {
            for (const e of object.memberTransaction) {
                message.memberTransaction.push(MemberTransaction.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetNextMemberTransactionRequest = {};
export const QueryGetNextMemberTransactionRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetNextMemberTransactionRequest,
        };
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
    fromJSON(_) {
        const message = {
            ...baseQueryGetNextMemberTransactionRequest,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseQueryGetNextMemberTransactionRequest,
        };
        return message;
    },
};
const baseQueryGetNextMemberTransactionResponse = {};
export const QueryGetNextMemberTransactionResponse = {
    encode(message, writer = Writer.create()) {
        if (message.NextMemberTransaction !== undefined) {
            NextMemberTransaction.encode(message.NextMemberTransaction, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetNextMemberTransactionResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.NextMemberTransaction = NextMemberTransaction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetNextMemberTransactionResponse,
        };
        if (object.NextMemberTransaction !== undefined &&
            object.NextMemberTransaction !== null) {
            message.NextMemberTransaction = NextMemberTransaction.fromJSON(object.NextMemberTransaction);
        }
        else {
            message.NextMemberTransaction = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.NextMemberTransaction !== undefined &&
            (obj.NextMemberTransaction = message.NextMemberTransaction
                ? NextMemberTransaction.toJSON(message.NextMemberTransaction)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetNextMemberTransactionResponse,
        };
        if (object.NextMemberTransaction !== undefined &&
            object.NextMemberTransaction !== null) {
            message.NextMemberTransaction = NextMemberTransaction.fromPartial(object.NextMemberTransaction);
        }
        else {
            message.NextMemberTransaction = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("threefoldtech.threefoldhub.multisigwallet.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
    }
    Wallet(request) {
        const data = QueryGetWalletRequest.encode(request).finish();
        const promise = this.rpc.request("threefoldtech.threefoldhub.multisigwallet.Query", "Wallet", data);
        return promise.then((data) => QueryGetWalletResponse.decode(new Reader(data)));
    }
    WalletAll(request) {
        const data = QueryAllWalletRequest.encode(request).finish();
        const promise = this.rpc.request("threefoldtech.threefoldhub.multisigwallet.Query", "WalletAll", data);
        return promise.then((data) => QueryAllWalletResponse.decode(new Reader(data)));
    }
    Transaction(request) {
        const data = QueryGetTransactionRequest.encode(request).finish();
        const promise = this.rpc.request("threefoldtech.threefoldhub.multisigwallet.Query", "Transaction", data);
        return promise.then((data) => QueryGetTransactionResponse.decode(new Reader(data)));
    }
    TransactionAll(request) {
        const data = QueryAllTransactionRequest.encode(request).finish();
        const promise = this.rpc.request("threefoldtech.threefoldhub.multisigwallet.Query", "TransactionAll", data);
        return promise.then((data) => QueryAllTransactionResponse.decode(new Reader(data)));
    }
    NextTransaction(request) {
        const data = QueryGetNextTransactionRequest.encode(request).finish();
        const promise = this.rpc.request("threefoldtech.threefoldhub.multisigwallet.Query", "NextTransaction", data);
        return promise.then((data) => QueryGetNextTransactionResponse.decode(new Reader(data)));
    }
    MemberTransaction(request) {
        const data = QueryGetMemberTransactionRequest.encode(request).finish();
        const promise = this.rpc.request("threefoldtech.threefoldhub.multisigwallet.Query", "MemberTransaction", data);
        return promise.then((data) => QueryGetMemberTransactionResponse.decode(new Reader(data)));
    }
    MemberTransactionAll(request) {
        const data = QueryAllMemberTransactionRequest.encode(request).finish();
        const promise = this.rpc.request("threefoldtech.threefoldhub.multisigwallet.Query", "MemberTransactionAll", data);
        return promise.then((data) => QueryAllMemberTransactionResponse.decode(new Reader(data)));
    }
    NextMemberTransaction(request) {
        const data = QueryGetNextMemberTransactionRequest.encode(request).finish();
        const promise = this.rpc.request("threefoldtech.threefoldhub.multisigwallet.Query", "NextMemberTransaction", data);
        return promise.then((data) => QueryGetNextMemberTransactionResponse.decode(new Reader(data)));
    }
}
