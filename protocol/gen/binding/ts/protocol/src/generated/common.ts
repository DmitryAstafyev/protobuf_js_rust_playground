/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.27.2
 * source: common.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace common {
    export class Range extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            start?: number;
            end?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("start" in data && data.start != undefined) {
                    this.start = data.start;
                }
                if ("end" in data && data.end != undefined) {
                    this.end = data.end;
                }
            }
        }
        get start() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set start(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get end() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set end(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            start?: number;
            end?: number;
        }): Range {
            const message = new Range({});
            if (data.start != null) {
                message.start = data.start;
            }
            if (data.end != null) {
                message.end = data.end;
            }
            return message;
        }
        toObject() {
            const data: {
                start?: number;
                end?: number;
            } = {};
            if (this.start != null) {
                data.start = this.start;
            }
            if (this.end != null) {
                data.end = this.end;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.start != 0)
                writer.writeUint64(1, this.start);
            if (this.end != 0)
                writer.writeUint64(2, this.end);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Range {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Range();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.start = reader.readUint64();
                        break;
                    case 2:
                        message.end = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static override deserializeBinary(bytes: Uint8Array): Range {
            return Range.deserialize(bytes);
        }
    }
    export class RangeInclusive extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            start?: number;
            end?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("start" in data && data.start != undefined) {
                    this.start = data.start;
                }
                if ("end" in data && data.end != undefined) {
                    this.end = data.end;
                }
            }
        }
        get start() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set start(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get end() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set end(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            start?: number;
            end?: number;
        }): RangeInclusive {
            const message = new RangeInclusive({});
            if (data.start != null) {
                message.start = data.start;
            }
            if (data.end != null) {
                message.end = data.end;
            }
            return message;
        }
        toObject() {
            const data: {
                start?: number;
                end?: number;
            } = {};
            if (this.start != null) {
                data.start = this.start;
            }
            if (this.end != null) {
                data.end = this.end;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.start != 0)
                writer.writeUint64(1, this.start);
            if (this.end != 0)
                writer.writeUint64(2, this.end);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RangeInclusive {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RangeInclusive();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.start = reader.readUint64();
                        break;
                    case 2:
                        message.end = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static override deserializeBinary(bytes: Uint8Array): RangeInclusive {
            return RangeInclusive.deserialize(bytes);
        }
    }
    export class RangeInclusiveList extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            elements?: RangeInclusive[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("elements" in data && data.elements != undefined) {
                    this.elements = data.elements;
                }
            }
        }
        get elements() {
            return pb_1.Message.getRepeatedWrapperField(this, RangeInclusive, 1) as RangeInclusive[];
        }
        set elements(value: RangeInclusive[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            elements?: ReturnType<typeof RangeInclusive.prototype.toObject>[];
        }): RangeInclusiveList {
            const message = new RangeInclusiveList({});
            if (data.elements != null) {
                message.elements = data.elements.map(item => RangeInclusive.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                elements?: ReturnType<typeof RangeInclusive.prototype.toObject>[];
            } = {};
            if (this.elements != null) {
                data.elements = this.elements.map((item: RangeInclusive) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.elements.length)
                writer.writeRepeatedMessage(1, this.elements, (item: RangeInclusive) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RangeInclusiveList {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RangeInclusiveList();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.elements, () => pb_1.Message.addToRepeatedWrapperField(message, 1, RangeInclusive.deserialize(reader), RangeInclusive));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static override deserializeBinary(bytes: Uint8Array): RangeInclusiveList {
            return RangeInclusiveList.deserialize(bytes);
        }
    }
}
