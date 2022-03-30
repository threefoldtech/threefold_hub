/* eslint-disable */
import { Params } from "../multisigwallet/params";
import { Wallet } from "../multisigwallet/wallet";
import { Transaction } from "../multisigwallet/transaction";
import { NextTransaction } from "../multisigwallet/next_transaction";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "threefoldtech.threefoldhub.multisigwallet";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.walletList) {
            Wallet.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.transactionList) {
            Transaction.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.nextTransaction !== undefined) {
            NextTransaction.encode(message.nextTransaction, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.walletList = [];
        message.transactionList = [];
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
                    message.transactionList.push(Transaction.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.nextTransaction = NextTransaction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.walletList = [];
        message.transactionList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.walletList !== undefined && object.walletList !== null) {
            for (const e of object.walletList) {
                message.walletList.push(Wallet.fromJSON(e));
            }
        }
        if (object.transactionList !== undefined &&
            object.transactionList !== null) {
            for (const e of object.transactionList) {
                message.transactionList.push(Transaction.fromJSON(e));
            }
        }
        if (object.nextTransaction !== undefined &&
            object.nextTransaction !== null) {
            message.nextTransaction = NextTransaction.fromJSON(object.nextTransaction);
        }
        else {
            message.nextTransaction = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.walletList) {
            obj.walletList = message.walletList.map((e) => e ? Wallet.toJSON(e) : undefined);
        }
        else {
            obj.walletList = [];
        }
        if (message.transactionList) {
            obj.transactionList = message.transactionList.map((e) => e ? Transaction.toJSON(e) : undefined);
        }
        else {
            obj.transactionList = [];
        }
        message.nextTransaction !== undefined &&
            (obj.nextTransaction = message.nextTransaction
                ? NextTransaction.toJSON(message.nextTransaction)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.walletList = [];
        message.transactionList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.walletList !== undefined && object.walletList !== null) {
            for (const e of object.walletList) {
                message.walletList.push(Wallet.fromPartial(e));
            }
        }
        if (object.transactionList !== undefined &&
            object.transactionList !== null) {
            for (const e of object.transactionList) {
                message.transactionList.push(Transaction.fromPartial(e));
            }
        }
        if (object.nextTransaction !== undefined &&
            object.nextTransaction !== null) {
            message.nextTransaction = NextTransaction.fromPartial(object.nextTransaction);
        }
        else {
            message.nextTransaction = undefined;
        }
        return message;
    },
};