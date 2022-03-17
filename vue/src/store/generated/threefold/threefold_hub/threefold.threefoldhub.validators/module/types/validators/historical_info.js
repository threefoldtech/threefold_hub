/* eslint-disable */
import { Header } from "../tendermint/types/types";
import { Validator } from "../validators/validator";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "threefold.threefoldhub.validators";
const baseHistoricalInfo = {};
export const HistoricalInfo = {
    encode(message, writer = Writer.create()) {
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.valset) {
            Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHistoricalInfo };
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
    fromJSON(object) {
        const message = { ...baseHistoricalInfo };
        message.valset = [];
        if (object.header !== undefined && object.header !== null) {
            message.header = Header.fromJSON(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.valset !== undefined && object.valset !== null) {
            for (const e of object.valset) {
                message.valset.push(Validator.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined &&
            (obj.header = message.header ? Header.toJSON(message.header) : undefined);
        if (message.valset) {
            obj.valset = message.valset.map((e) => e ? Validator.toJSON(e) : undefined);
        }
        else {
            obj.valset = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHistoricalInfo };
        message.valset = [];
        if (object.header !== undefined && object.header !== null) {
            message.header = Header.fromPartial(object.header);
        }
        else {
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
