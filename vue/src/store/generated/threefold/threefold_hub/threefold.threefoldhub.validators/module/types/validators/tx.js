/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Description } from "../validators/validator";
export const protobufPackage = "threefold.threefoldhub.validators";
const baseMsgCreateValidator = {
    operatorAddress: "",
    consensusPubkey: "",
};
export const MsgCreateValidator = {
    encode(message, writer = Writer.create()) {
        if (message.operatorAddress !== "") {
            writer.uint32(10).string(message.operatorAddress);
        }
        if (message.consensusPubkey !== "") {
            writer.uint32(18).string(message.consensusPubkey);
        }
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateValidator };
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
    fromJSON(object) {
        const message = { ...baseMsgCreateValidator };
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
        const message = { ...baseMsgCreateValidator };
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
const baseMsgCreateValidatorResponse = {};
export const MsgCreateValidatorResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateValidatorResponse,
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
            ...baseMsgCreateValidatorResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgCreateValidatorResponse,
        };
        return message;
    },
};
const baseMsgUpdateValidator = { operatorAddress: "" };
export const MsgUpdateValidator = {
    encode(message, writer = Writer.create()) {
        if (message.operatorAddress !== "") {
            writer.uint32(10).string(message.operatorAddress);
        }
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateValidator };
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateValidator };
        if (object.operatorAddress !== undefined &&
            object.operatorAddress !== null) {
            message.operatorAddress = String(object.operatorAddress);
        }
        else {
            message.operatorAddress = "";
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
        message.description !== undefined &&
            (obj.description = message.description
                ? Description.toJSON(message.description)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateValidator };
        if (object.operatorAddress !== undefined &&
            object.operatorAddress !== null) {
            message.operatorAddress = object.operatorAddress;
        }
        else {
            message.operatorAddress = "";
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
const baseMsgUpdateValidatorResponse = {};
export const MsgUpdateValidatorResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateValidatorResponse,
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
            ...baseMsgUpdateValidatorResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateValidatorResponse,
        };
        return message;
    },
};
const baseMsgDeleteValidator = { operatorAddress: "" };
export const MsgDeleteValidator = {
    encode(message, writer = Writer.create()) {
        if (message.operatorAddress !== "") {
            writer.uint32(10).string(message.operatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteValidator };
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
    fromJSON(object) {
        const message = { ...baseMsgDeleteValidator };
        if (object.operatorAddress !== undefined &&
            object.operatorAddress !== null) {
            message.operatorAddress = String(object.operatorAddress);
        }
        else {
            message.operatorAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.operatorAddress !== undefined &&
            (obj.operatorAddress = message.operatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteValidator };
        if (object.operatorAddress !== undefined &&
            object.operatorAddress !== null) {
            message.operatorAddress = object.operatorAddress;
        }
        else {
            message.operatorAddress = "";
        }
        return message;
    },
};
const baseMsgDeleteValidatorResponse = {};
export const MsgDeleteValidatorResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteValidatorResponse,
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
            ...baseMsgDeleteValidatorResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteValidatorResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateValidator(request) {
        const data = MsgCreateValidator.encode(request).finish();
        const promise = this.rpc.request("threefold.threefoldhub.validators.Msg", "CreateValidator", data);
        return promise.then((data) => MsgCreateValidatorResponse.decode(new Reader(data)));
    }
    UpdateValidator(request) {
        const data = MsgUpdateValidator.encode(request).finish();
        const promise = this.rpc.request("threefold.threefoldhub.validators.Msg", "UpdateValidator", data);
        return promise.then((data) => MsgUpdateValidatorResponse.decode(new Reader(data)));
    }
    DeleteValidator(request) {
        const data = MsgDeleteValidator.encode(request).finish();
        const promise = this.rpc.request("threefold.threefoldhub.validators.Msg", "DeleteValidator", data);
        return promise.then((data) => MsgDeleteValidatorResponse.decode(new Reader(data)));
    }
}
