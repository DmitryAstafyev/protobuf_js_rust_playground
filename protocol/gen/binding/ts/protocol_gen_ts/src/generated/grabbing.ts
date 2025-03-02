/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.27.2
 * source: grabbing.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace grabbing {
    export class GrabbedElement extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(
            data?:
                | any[]
                | {
                      source_id?: number;
                      content?: string;
                      pos?: number;
                      nature?: number;
                  }
        ) {
            super();
            pb_1.Message.initialize(
                this,
                Array.isArray(data) ? data : [],
                0,
                -1,
                [],
                this.#one_of_decls
            );
            if (!Array.isArray(data) && typeof data == "object") {
                if ("source_id" in data && data.source_id != undefined) {
                    this.source_id = data.source_id;
                }
                if ("content" in data && data.content != undefined) {
                    this.content = data.content;
                }
                if ("pos" in data && data.pos != undefined) {
                    this.pos = data.pos;
                }
                if ("nature" in data && data.nature != undefined) {
                    this.nature = data.nature;
                }
            }
        }
        get source_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set source_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get content() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set content(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get pos() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set pos(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get nature() {
            return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
        }
        set nature(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            source_id?: number;
            content?: string;
            pos?: number;
            nature?: number;
        }): GrabbedElement {
            const message = new GrabbedElement({});
            if (data.source_id != null) {
                message.source_id = data.source_id;
            }
            if (data.content != null) {
                message.content = data.content;
            }
            if (data.pos != null) {
                message.pos = data.pos;
            }
            if (data.nature != null) {
                message.nature = data.nature;
            }
            return message;
        }
        toObject() {
            const data: {
                source_id?: number;
                content?: string;
                pos?: number;
                nature?: number;
            } = {};
            if (this.source_id != null) {
                data.source_id = this.source_id;
            }
            if (this.content != null) {
                data.content = this.content;
            }
            if (this.pos != null) {
                data.pos = this.pos;
            }
            if (this.nature != null) {
                data.nature = this.nature;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.source_id != 0) writer.writeUint32(1, this.source_id);
            if (this.content.length) writer.writeString(2, this.content);
            if (this.pos != 0) writer.writeUint64(3, this.pos);
            if (this.nature != 0) writer.writeUint32(4, this.nature);
            if (!w) return writer.getResultBuffer();
        }
        static deserialize(
            bytes: Uint8Array | pb_1.BinaryReader
        ): GrabbedElement {
            const reader =
                    bytes instanceof pb_1.BinaryReader
                        ? bytes
                        : new pb_1.BinaryReader(bytes),
                message = new GrabbedElement();
            while (reader.nextField()) {
                if (reader.isEndGroup()) break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.source_id = reader.readUint32();
                        break;
                    case 2:
                        message.content = reader.readString();
                        break;
                    case 3:
                        message.pos = reader.readUint64();
                        break;
                    case 4:
                        message.nature = reader.readUint32();
                        break;
                    default:
                        reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static override deserializeBinary(bytes: Uint8Array): GrabbedElement {
            return GrabbedElement.deserialize(bytes);
        }
    }
    export class GrabbedElementList extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(
            data?:
                | any[]
                | {
                      elements?: GrabbedElement[];
                  }
        ) {
            super();
            pb_1.Message.initialize(
                this,
                Array.isArray(data) ? data : [],
                0,
                -1,
                [1],
                this.#one_of_decls
            );
            if (!Array.isArray(data) && typeof data == "object") {
                if ("elements" in data && data.elements != undefined) {
                    this.elements = data.elements;
                }
            }
        }
        get elements() {
            return pb_1.Message.getRepeatedWrapperField(
                this,
                GrabbedElement,
                1
            ) as GrabbedElement[];
        }
        set elements(value: GrabbedElement[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        static fromObject(data: {
            elements?: ReturnType<typeof GrabbedElement.prototype.toObject>[];
        }): GrabbedElementList {
            const message = new GrabbedElementList({});
            if (data.elements != null) {
                message.elements = data.elements.map((item) =>
                    GrabbedElement.fromObject(item)
                );
            }
            return message;
        }
        toObject() {
            const data: {
                elements?: ReturnType<
                    typeof GrabbedElement.prototype.toObject
                >[];
            } = {};
            if (this.elements != null) {
                data.elements = this.elements.map((item: GrabbedElement) =>
                    item.toObject()
                );
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.elements.length)
                writer.writeRepeatedMessage(
                    1,
                    this.elements,
                    (item: GrabbedElement) => item.serialize(writer)
                );
            if (!w) return writer.getResultBuffer();
        }
        static deserialize(
            bytes: Uint8Array | pb_1.BinaryReader
        ): GrabbedElementList {
            const reader =
                    bytes instanceof pb_1.BinaryReader
                        ? bytes
                        : new pb_1.BinaryReader(bytes),
                message = new GrabbedElementList();
            while (reader.nextField()) {
                if (reader.isEndGroup()) break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.elements, () =>
                            pb_1.Message.addToRepeatedWrapperField(
                                message,
                                1,
                                GrabbedElement.deserialize(reader),
                                GrabbedElement
                            )
                        );
                        break;
                    default:
                        reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static override deserializeBinary(
            bytes: Uint8Array
        ): GrabbedElementList {
            return GrabbedElementList.deserialize(bytes);
        }
    }
}
