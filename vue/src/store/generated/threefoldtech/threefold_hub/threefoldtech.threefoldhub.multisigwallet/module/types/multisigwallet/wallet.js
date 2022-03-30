/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "threefoldtech.threefoldhub.multisigwallet";
const baseWallet = {
    index: "",
    name: "",
    address: "",
    members: "",
    minSigns: "",
};
export const Wallet = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.address !== "") {
            writer.uint32(26).string(message.address);
        }
        if (message.members !== "") {
            writer.uint32(34).string(message.members);
        }
        if (message.minSigns !== "") {
            writer.uint32(42).string(message.minSigns);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWallet };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                case 4:
                    message.members = reader.string();
                    break;
                case 5:
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
        const message = { ...baseWallet };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
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
        message.index !== undefined && (obj.index = message.index);
        message.name !== undefined && (obj.name = message.name);
        message.address !== undefined && (obj.address = message.address);
        message.members !== undefined && (obj.members = message.members);
        message.minSigns !== undefined && (obj.minSigns = message.minSigns);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWallet };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
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
