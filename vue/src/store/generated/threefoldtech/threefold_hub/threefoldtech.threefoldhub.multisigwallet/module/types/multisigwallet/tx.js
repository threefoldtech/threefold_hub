/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
export const protobufPackage = "threefoldtech.threefoldhub.multisigwallet";
const baseMsgCreateWallet = {
    creator: "",
    name: "",
    members: "",
    minSigns: "",
};
export const MsgCreateWallet = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateWallet };
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
    fromJSON(object) {
        const message = { ...baseMsgCreateWallet };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.members !== undefined && object.members !== null) {
            message.members = String(object.members);
        }
        else {
            message.members = "";
        }
        if (object.minSigns !== undefined && object.minSigns !== null) {
            message.minSigns = String(object.minSigns);
        }
        else {
            message.minSigns = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.members !== undefined && (obj.members = message.members);
        message.minSigns !== undefined && (obj.minSigns = message.minSigns);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateWallet };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.members !== undefined && object.members !== null) {
            message.members = object.members;
        }
        else {
            message.members = "";
        }
        if (object.minSigns !== undefined && object.minSigns !== null) {
            message.minSigns = object.minSigns;
        }
        else {
            message.minSigns = "";
        }
        return message;
    },
};
const baseMsgCreateWalletResponse = { address: "" };
export const MsgCreateWalletResponse = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateWalletResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgCreateWalletResponse,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateWalletResponse,
        };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseMsgCreateTransaction = {
    creator: "",
    walltName: "",
    toAddress: "",
    amount: "",
};
export const MsgCreateTransaction = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateTransaction };
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
    fromJSON(object) {
        const message = { ...baseMsgCreateTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.walltName !== undefined && object.walltName !== null) {
            message.walltName = String(object.walltName);
        }
        else {
            message.walltName = "";
        }
        if (object.toAddress !== undefined && object.toAddress !== null) {
            message.toAddress = String(object.toAddress);
        }
        else {
            message.toAddress = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.walltName !== undefined && (obj.walltName = message.walltName);
        message.toAddress !== undefined && (obj.toAddress = message.toAddress);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.walltName !== undefined && object.walltName !== null) {
            message.walltName = object.walltName;
        }
        else {
            message.walltName = "";
        }
        if (object.toAddress !== undefined && object.toAddress !== null) {
            message.toAddress = object.toAddress;
        }
        else {
            message.toAddress = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = "";
        }
        return message;
    },
};
const baseMsgCreateTransactionResponse = {};
export const MsgCreateTransactionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateTransactionResponse,
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
            ...baseMsgCreateTransactionResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgCreateTransactionResponse,
        };
        return message;
    },
};
const baseMsgSignTransaction = { creator: "", transactionID: "" };
export const MsgSignTransaction = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.transactionID !== "") {
            writer.uint32(18).string(message.transactionID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSignTransaction };
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
    fromJSON(object) {
        const message = { ...baseMsgSignTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.transactionID !== undefined && object.transactionID !== null) {
            message.transactionID = String(object.transactionID);
        }
        else {
            message.transactionID = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.transactionID !== undefined &&
            (obj.transactionID = message.transactionID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSignTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.transactionID !== undefined && object.transactionID !== null) {
            message.transactionID = object.transactionID;
        }
        else {
            message.transactionID = "";
        }
        return message;
    },
};
const baseMsgSignTransactionResponse = {};
export const MsgSignTransactionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgSignTransactionResponse,
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
            ...baseMsgSignTransactionResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgSignTransactionResponse,
        };
        return message;
    },
};
const baseMsgExecuteTransaction = { creator: "", transactionID: "" };
export const MsgExecuteTransaction = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.transactionID !== "") {
            writer.uint32(18).string(message.transactionID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgExecuteTransaction };
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
    fromJSON(object) {
        const message = { ...baseMsgExecuteTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.transactionID !== undefined && object.transactionID !== null) {
            message.transactionID = String(object.transactionID);
        }
        else {
            message.transactionID = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.transactionID !== undefined &&
            (obj.transactionID = message.transactionID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgExecuteTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.transactionID !== undefined && object.transactionID !== null) {
            message.transactionID = object.transactionID;
        }
        else {
            message.transactionID = "";
        }
        return message;
    },
};
const baseMsgExecuteTransactionResponse = {};
export const MsgExecuteTransactionResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgExecuteTransactionResponse,
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
            ...baseMsgExecuteTransactionResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgExecuteTransactionResponse,
        };
        return message;
    },
};
const baseMsgAddSigners = { creator: "", walletName: "", members: "" };
export const MsgAddSigners = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddSigners };
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
    fromJSON(object) {
        const message = { ...baseMsgAddSigners };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.walletName !== undefined && object.walletName !== null) {
            message.walletName = String(object.walletName);
        }
        else {
            message.walletName = "";
        }
        if (object.members !== undefined && object.members !== null) {
            message.members = String(object.members);
        }
        else {
            message.members = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.walletName !== undefined && (obj.walletName = message.walletName);
        message.members !== undefined && (obj.members = message.members);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAddSigners };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.walletName !== undefined && object.walletName !== null) {
            message.walletName = object.walletName;
        }
        else {
            message.walletName = "";
        }
        if (object.members !== undefined && object.members !== null) {
            message.members = object.members;
        }
        else {
            message.members = "";
        }
        return message;
    },
};
const baseMsgAddSignersResponse = {};
export const MsgAddSignersResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddSignersResponse };
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
        const message = { ...baseMsgAddSignersResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgAddSignersResponse };
        return message;
    },
};
const baseMsgRemoveSigners = {
    creator: "",
    walletName: "",
    members: "",
};
export const MsgRemoveSigners = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRemoveSigners };
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
    fromJSON(object) {
        const message = { ...baseMsgRemoveSigners };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.walletName !== undefined && object.walletName !== null) {
            message.walletName = String(object.walletName);
        }
        else {
            message.walletName = "";
        }
        if (object.members !== undefined && object.members !== null) {
            message.members = String(object.members);
        }
        else {
            message.members = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.walletName !== undefined && (obj.walletName = message.walletName);
        message.members !== undefined && (obj.members = message.members);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRemoveSigners };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.walletName !== undefined && object.walletName !== null) {
            message.walletName = object.walletName;
        }
        else {
            message.walletName = "";
        }
        if (object.members !== undefined && object.members !== null) {
            message.members = object.members;
        }
        else {
            message.members = "";
        }
        return message;
    },
};
const baseMsgRemoveSignersResponse = {};
export const MsgRemoveSignersResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRemoveSignersResponse,
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
            ...baseMsgRemoveSignersResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgRemoveSignersResponse,
        };
        return message;
    },
};
const baseMsgUpdateMinSigns = {
    creator: "",
    walletName: "",
    minSigns: "",
};
export const MsgUpdateMinSigns = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateMinSigns };
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateMinSigns };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.walletName !== undefined && object.walletName !== null) {
            message.walletName = String(object.walletName);
        }
        else {
            message.walletName = "";
        }
        if (object.minSigns !== undefined && object.minSigns !== null) {
            message.minSigns = String(object.minSigns);
        }
        else {
            message.minSigns = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.walletName !== undefined && (obj.walletName = message.walletName);
        message.minSigns !== undefined && (obj.minSigns = message.minSigns);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateMinSigns };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.walletName !== undefined && object.walletName !== null) {
            message.walletName = object.walletName;
        }
        else {
            message.walletName = "";
        }
        if (object.minSigns !== undefined && object.minSigns !== null) {
            message.minSigns = object.minSigns;
        }
        else {
            message.minSigns = "";
        }
        return message;
    },
};
const baseMsgUpdateMinSignsResponse = {};
export const MsgUpdateMinSignsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateMinSignsResponse,
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
            ...baseMsgUpdateMinSignsResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateMinSignsResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateWallet(request) {
        const data = MsgCreateWallet.encode(request).finish();
        const promise = this.rpc.request("threefoldtech.threefoldhub.multisigwallet.Msg", "CreateWallet", data);
        return promise.then((data) => MsgCreateWalletResponse.decode(new Reader(data)));
    }
    CreateTransaction(request) {
        const data = MsgCreateTransaction.encode(request).finish();
        const promise = this.rpc.request("threefoldtech.threefoldhub.multisigwallet.Msg", "CreateTransaction", data);
        return promise.then((data) => MsgCreateTransactionResponse.decode(new Reader(data)));
    }
    SignTransaction(request) {
        const data = MsgSignTransaction.encode(request).finish();
        const promise = this.rpc.request("threefoldtech.threefoldhub.multisigwallet.Msg", "SignTransaction", data);
        return promise.then((data) => MsgSignTransactionResponse.decode(new Reader(data)));
    }
    ExecuteTransaction(request) {
        const data = MsgExecuteTransaction.encode(request).finish();
        const promise = this.rpc.request("threefoldtech.threefoldhub.multisigwallet.Msg", "ExecuteTransaction", data);
        return promise.then((data) => MsgExecuteTransactionResponse.decode(new Reader(data)));
    }
    AddSigners(request) {
        const data = MsgAddSigners.encode(request).finish();
        const promise = this.rpc.request("threefoldtech.threefoldhub.multisigwallet.Msg", "AddSigners", data);
        return promise.then((data) => MsgAddSignersResponse.decode(new Reader(data)));
    }
    RemoveSigners(request) {
        const data = MsgRemoveSigners.encode(request).finish();
        const promise = this.rpc.request("threefoldtech.threefoldhub.multisigwallet.Msg", "RemoveSigners", data);
        return promise.then((data) => MsgRemoveSignersResponse.decode(new Reader(data)));
    }
    UpdateMinSigns(request) {
        const data = MsgUpdateMinSigns.encode(request).finish();
        const promise = this.rpc.request("threefoldtech.threefoldhub.multisigwallet.Msg", "UpdateMinSigns", data);
        return promise.then((data) => MsgUpdateMinSignsResponse.decode(new Reader(data)));
    }
}
