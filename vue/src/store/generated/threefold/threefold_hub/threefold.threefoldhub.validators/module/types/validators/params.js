/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "threefold.threefoldhub.validators";
const baseParams = { maxValidators: 0, historicalEntries: 0 };
export const Params = {
    encode(message, writer = Writer.create()) {
        if (message.maxValidators !== 0) {
            writer.uint32(8).uint32(message.maxValidators);
        }
        if (message.historicalEntries !== 0) {
            writer.uint32(16).uint32(message.historicalEntries);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseParams };
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
    fromJSON(object) {
        const message = { ...baseParams };
        if (object.maxValidators !== undefined && object.maxValidators !== null) {
            message.maxValidators = Number(object.maxValidators);
        }
        else {
            message.maxValidators = 0;
        }
        if (object.historicalEntries !== undefined &&
            object.historicalEntries !== null) {
            message.historicalEntries = Number(object.historicalEntries);
        }
        else {
            message.historicalEntries = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.maxValidators !== undefined &&
            (obj.maxValidators = message.maxValidators);
        message.historicalEntries !== undefined &&
            (obj.historicalEntries = message.historicalEntries);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseParams };
        if (object.maxValidators !== undefined && object.maxValidators !== null) {
            message.maxValidators = object.maxValidators;
        }
        else {
            message.maxValidators = 0;
        }
        if (object.historicalEntries !== undefined &&
            object.historicalEntries !== null) {
            message.historicalEntries = object.historicalEntries;
        }
        else {
            message.historicalEntries = 0;
        }
        return message;
    },
};
