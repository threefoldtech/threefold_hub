/* eslint-disable */
import { Params } from "../validators/params";
import { Validator } from "../validators/validator";
import { HistoricalInfo } from "../validators/historical_info";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "threefold.threefoldhub.validators";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.historicalInfoList) {
            HistoricalInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.validators = [];
        message.historicalInfoList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.historicalInfoList.push(HistoricalInfo.decode(reader, reader.uint32()));
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
        message.validators = [];
        message.historicalInfoList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(Validator.fromJSON(e));
            }
        }
        if (object.historicalInfoList !== undefined &&
            object.historicalInfoList !== null) {
            for (const e of object.historicalInfoList) {
                message.historicalInfoList.push(HistoricalInfo.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        if (message.historicalInfoList) {
            obj.historicalInfoList = message.historicalInfoList.map((e) => e ? HistoricalInfo.toJSON(e) : undefined);
        }
        else {
            obj.historicalInfoList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.validators = [];
        message.historicalInfoList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.validators !== undefined && object.validators !== null) {
            for (const e of object.validators) {
                message.validators.push(Validator.fromPartial(e));
            }
        }
        if (object.historicalInfoList !== undefined &&
            object.historicalInfoList !== null) {
            for (const e of object.historicalInfoList) {
                message.historicalInfoList.push(HistoricalInfo.fromPartial(e));
            }
        }
        return message;
    },
};
