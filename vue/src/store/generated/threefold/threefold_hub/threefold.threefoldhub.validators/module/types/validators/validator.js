/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "threefold.threefoldhub.validators";
const baseDescription = {
    moniker: "",
    identity: "",
    website: "",
    securityContact: "",
    details: "",
};
export const Description = {
    encode(message, writer = Writer.create()) {
        if (message.moniker !== "") {
            writer.uint32(10).string(message.moniker);
        }
        if (message.identity !== "") {
            writer.uint32(18).string(message.identity);
        }
        if (message.website !== "") {
            writer.uint32(26).string(message.website);
        }
        if (message.securityContact !== "") {
            writer.uint32(34).string(message.securityContact);
        }
        if (message.details !== "") {
            writer.uint32(42).string(message.details);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDescription };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moniker = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
                    break;
                case 3:
                    message.website = reader.string();
                    break;
                case 4:
                    message.securityContact = reader.string();
                    break;
                case 5:
                    message.details = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDescription };
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = String(object.moniker);
        }
        else {
            message.moniker = "";
        }
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = String(object.identity);
        }
        else {
            message.identity = "";
        }
        if (object.website !== undefined && object.website !== null) {
            message.website = String(object.website);
        }
        else {
            message.website = "";
        }
        if (object.securityContact !== undefined &&
            object.securityContact !== null) {
            message.securityContact = String(object.securityContact);
        }
        else {
            message.securityContact = "";
        }
        if (object.details !== undefined && object.details !== null) {
            message.details = String(object.details);
        }
        else {
            message.details = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.identity !== undefined && (obj.identity = message.identity);
        message.website !== undefined && (obj.website = message.website);
        message.securityContact !== undefined &&
            (obj.securityContact = message.securityContact);
        message.details !== undefined && (obj.details = message.details);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDescription };
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        else {
            message.moniker = "";
        }
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = object.identity;
        }
        else {
            message.identity = "";
        }
        if (object.website !== undefined && object.website !== null) {
            message.website = object.website;
        }
        else {
            message.website = "";
        }
        if (object.securityContact !== undefined &&
            object.securityContact !== null) {
            message.securityContact = object.securityContact;
        }
        else {
            message.securityContact = "";
        }
        if (object.details !== undefined && object.details !== null) {
            message.details = object.details;
        }
        else {
            message.details = "";
        }
        return message;
    },
};
const baseValidator = { operatorAddress: "", consensusPubkey: "" };
export const Validator = {
    encode(message, writer = Writer.create()) {
        if (message.operatorAddress !== "") {
            writer.uint32(18).string(message.operatorAddress);
        }
        if (message.consensusPubkey !== "") {
            writer.uint32(26).string(message.consensusPubkey);
        }
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseValidator };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.operatorAddress = reader.string();
                    break;
                case 3:
                    message.consensusPubkey = reader.string();
                    break;
                case 4:
                    message.description = Description.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseValidator };
        if (object.operatorAddress !== undefined &&
            object.operatorAddress !== null) {
            message.operatorAddress = String(object.operatorAddress);
        }
        else {
            message.operatorAddress = "";
        }
        if (object.consensusPubkey !== undefined &&
            object.consensusPubkey !== null) {
            message.consensusPubkey = String(object.consensusPubkey);
        }
        else {
            message.consensusPubkey = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = Description.fromJSON(object.description);
        }
        else {
            message.description = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = { ...baseValidator };
        if (object.operatorAddress !== undefined &&
            object.operatorAddress !== null) {
            message.operatorAddress = object.operatorAddress;
        }
        else {
            message.operatorAddress = "";
        }
        if (object.consensusPubkey !== undefined &&
            object.consensusPubkey !== null) {
            message.consensusPubkey = object.consensusPubkey;
        }
        else {
            message.consensusPubkey = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = Description.fromPartial(object.description);
        }
        else {
            message.description = undefined;
        }
        return message;
    },
};
