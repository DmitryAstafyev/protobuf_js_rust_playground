import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace protocol. */
export namespace protocol {

    /** Properties of an AttachmentInfo. */
    interface IAttachmentInfo {

        /** AttachmentInfo uuid */
        uuid?: (string|null);

        /** AttachmentInfo filepath */
        filepath?: (string|null);

        /** AttachmentInfo name */
        name?: (string|null);

        /** AttachmentInfo ext */
        ext?: (string|null);

        /** AttachmentInfo size */
        size?: (number|Long|null);

        /** AttachmentInfo mime */
        mime?: (string|null);

        /** AttachmentInfo messages */
        messages?: ((number|Long)[]|null);
    }

    /** Represents an AttachmentInfo. */
    class AttachmentInfo implements IAttachmentInfo {

        /**
         * Constructs a new AttachmentInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IAttachmentInfo);

        /** AttachmentInfo uuid. */
        public uuid: string;

        /** AttachmentInfo filepath. */
        public filepath: string;

        /** AttachmentInfo name. */
        public name: string;

        /** AttachmentInfo ext. */
        public ext: string;

        /** AttachmentInfo size. */
        public size: (number|Long);

        /** AttachmentInfo mime. */
        public mime: string;

        /** AttachmentInfo messages. */
        public messages: (number|Long)[];

        /**
         * Creates a new AttachmentInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AttachmentInfo instance
         */
        public static create(properties?: protocol.IAttachmentInfo): protocol.AttachmentInfo;

        /**
         * Encodes the specified AttachmentInfo message. Does not implicitly {@link protocol.AttachmentInfo.verify|verify} messages.
         * @param message AttachmentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IAttachmentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AttachmentInfo message, length delimited. Does not implicitly {@link protocol.AttachmentInfo.verify|verify} messages.
         * @param message AttachmentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IAttachmentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AttachmentInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AttachmentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.AttachmentInfo;

        /**
         * Decodes an AttachmentInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AttachmentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.AttachmentInfo;

        /**
         * Verifies an AttachmentInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AttachmentInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AttachmentInfo
         */
        public static fromObject(object: { [k: string]: any }): protocol.AttachmentInfo;

        /**
         * Creates a plain object from an AttachmentInfo message. Also converts values to other types if specified.
         * @param message AttachmentInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.AttachmentInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AttachmentInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AttachmentInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AttachmentInfoList. */
    interface IAttachmentInfoList {

        /** AttachmentInfoList elements */
        elements?: (protocol.IAttachmentInfo[]|null);
    }

    /** Represents an AttachmentInfoList. */
    class AttachmentInfoList implements IAttachmentInfoList {

        /**
         * Constructs a new AttachmentInfoList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IAttachmentInfoList);

        /** AttachmentInfoList elements. */
        public elements: protocol.IAttachmentInfo[];

        /**
         * Creates a new AttachmentInfoList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AttachmentInfoList instance
         */
        public static create(properties?: protocol.IAttachmentInfoList): protocol.AttachmentInfoList;

        /**
         * Encodes the specified AttachmentInfoList message. Does not implicitly {@link protocol.AttachmentInfoList.verify|verify} messages.
         * @param message AttachmentInfoList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IAttachmentInfoList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AttachmentInfoList message, length delimited. Does not implicitly {@link protocol.AttachmentInfoList.verify|verify} messages.
         * @param message AttachmentInfoList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IAttachmentInfoList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AttachmentInfoList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AttachmentInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.AttachmentInfoList;

        /**
         * Decodes an AttachmentInfoList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AttachmentInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.AttachmentInfoList;

        /**
         * Verifies an AttachmentInfoList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AttachmentInfoList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AttachmentInfoList
         */
        public static fromObject(object: { [k: string]: any }): protocol.AttachmentInfoList;

        /**
         * Creates a plain object from an AttachmentInfoList message. Also converts values to other types if specified.
         * @param message AttachmentInfoList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.AttachmentInfoList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AttachmentInfoList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AttachmentInfoList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Output. */
    interface IOutput {

        /** Output stringValue */
        stringValue?: (string|null);

        /** Output stringVecValue */
        stringVecValue?: (protocol.Output.IStringVec|null);

        /** Output optionStringValue */
        optionStringValue?: (string|null);

        /** Output boolValue */
        boolValue?: (boolean|null);

        /** Output int64Value */
        int64Value?: (number|Long|null);

        /** Output emptyValue */
        emptyValue?: (protocol.Output.IEmpty|null);
    }

    /** Represents an Output. */
    class Output implements IOutput {

        /**
         * Constructs a new Output.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IOutput);

        /** Output stringValue. */
        public stringValue?: (string|null);

        /** Output stringVecValue. */
        public stringVecValue?: (protocol.Output.IStringVec|null);

        /** Output optionStringValue. */
        public optionStringValue?: (string|null);

        /** Output boolValue. */
        public boolValue?: (boolean|null);

        /** Output int64Value. */
        public int64Value?: (number|Long|null);

        /** Output emptyValue. */
        public emptyValue?: (protocol.Output.IEmpty|null);

        /** Output output. */
        public output?: ("stringValue"|"stringVecValue"|"optionStringValue"|"boolValue"|"int64Value"|"emptyValue");

        /**
         * Creates a new Output instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Output instance
         */
        public static create(properties?: protocol.IOutput): protocol.Output;

        /**
         * Encodes the specified Output message. Does not implicitly {@link protocol.Output.verify|verify} messages.
         * @param message Output message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Output message, length delimited. Does not implicitly {@link protocol.Output.verify|verify} messages.
         * @param message Output message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Output message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Output;

        /**
         * Decodes an Output message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Output;

        /**
         * Verifies an Output message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Output message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Output
         */
        public static fromObject(object: { [k: string]: any }): protocol.Output;

        /**
         * Creates a plain object from an Output message. Also converts values to other types if specified.
         * @param message Output
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Output, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Output to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Output
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Output {

        /** Properties of a StringVec. */
        interface IStringVec {

            /** StringVec values */
            values?: (string[]|null);
        }

        /** Represents a StringVec. */
        class StringVec implements IStringVec {

            /**
             * Constructs a new StringVec.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.Output.IStringVec);

            /** StringVec values. */
            public values: string[];

            /**
             * Creates a new StringVec instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringVec instance
             */
            public static create(properties?: protocol.Output.IStringVec): protocol.Output.StringVec;

            /**
             * Encodes the specified StringVec message. Does not implicitly {@link protocol.Output.StringVec.verify|verify} messages.
             * @param message StringVec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.Output.IStringVec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringVec message, length delimited. Does not implicitly {@link protocol.Output.StringVec.verify|verify} messages.
             * @param message StringVec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.Output.IStringVec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringVec message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Output.StringVec;

            /**
             * Decodes a StringVec message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Output.StringVec;

            /**
             * Verifies a StringVec message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringVec message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringVec
             */
            public static fromObject(object: { [k: string]: any }): protocol.Output.StringVec;

            /**
             * Creates a plain object from a StringVec message. Also converts values to other types if specified.
             * @param message StringVec
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.Output.StringVec, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringVec to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StringVec
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.Output.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: protocol.Output.IEmpty): protocol.Output.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link protocol.Output.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.Output.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link protocol.Output.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.Output.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Output.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Output.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): protocol.Output.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.Output.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a CommandOutcome. */
    interface ICommandOutcome {

        /** CommandOutcome finished */
        finished?: (protocol.CommandOutcome.IFinished|null);

        /** CommandOutcome cancelled */
        cancelled?: (protocol.CommandOutcome.ICancelled|null);
    }

    /** Represents a CommandOutcome. */
    class CommandOutcome implements ICommandOutcome {

        /**
         * Constructs a new CommandOutcome.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ICommandOutcome);

        /** CommandOutcome finished. */
        public finished?: (protocol.CommandOutcome.IFinished|null);

        /** CommandOutcome cancelled. */
        public cancelled?: (protocol.CommandOutcome.ICancelled|null);

        /** CommandOutcome outcome. */
        public outcome?: ("finished"|"cancelled");

        /**
         * Creates a new CommandOutcome instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommandOutcome instance
         */
        public static create(properties?: protocol.ICommandOutcome): protocol.CommandOutcome;

        /**
         * Encodes the specified CommandOutcome message. Does not implicitly {@link protocol.CommandOutcome.verify|verify} messages.
         * @param message CommandOutcome message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ICommandOutcome, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommandOutcome message, length delimited. Does not implicitly {@link protocol.CommandOutcome.verify|verify} messages.
         * @param message CommandOutcome message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ICommandOutcome, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommandOutcome message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommandOutcome
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.CommandOutcome;

        /**
         * Decodes a CommandOutcome message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommandOutcome
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.CommandOutcome;

        /**
         * Verifies a CommandOutcome message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommandOutcome message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommandOutcome
         */
        public static fromObject(object: { [k: string]: any }): protocol.CommandOutcome;

        /**
         * Creates a plain object from a CommandOutcome message. Also converts values to other types if specified.
         * @param message CommandOutcome
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.CommandOutcome, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommandOutcome to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CommandOutcome
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CommandOutcome {

        /** Properties of a Finished. */
        interface IFinished {

            /** Finished result */
            result?: (protocol.IOutput|null);
        }

        /** Represents a Finished. */
        class Finished implements IFinished {

            /**
             * Constructs a new Finished.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.CommandOutcome.IFinished);

            /** Finished result. */
            public result?: (protocol.IOutput|null);

            /**
             * Creates a new Finished instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Finished instance
             */
            public static create(properties?: protocol.CommandOutcome.IFinished): protocol.CommandOutcome.Finished;

            /**
             * Encodes the specified Finished message. Does not implicitly {@link protocol.CommandOutcome.Finished.verify|verify} messages.
             * @param message Finished message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.CommandOutcome.IFinished, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Finished message, length delimited. Does not implicitly {@link protocol.CommandOutcome.Finished.verify|verify} messages.
             * @param message Finished message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.CommandOutcome.IFinished, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Finished message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Finished
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.CommandOutcome.Finished;

            /**
             * Decodes a Finished message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Finished
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.CommandOutcome.Finished;

            /**
             * Verifies a Finished message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Finished message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Finished
             */
            public static fromObject(object: { [k: string]: any }): protocol.CommandOutcome.Finished;

            /**
             * Creates a plain object from a Finished message. Also converts values to other types if specified.
             * @param message Finished
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.CommandOutcome.Finished, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Finished to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Finished
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Cancelled. */
        interface ICancelled {
        }

        /** Represents a Cancelled. */
        class Cancelled implements ICancelled {

            /**
             * Constructs a new Cancelled.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.CommandOutcome.ICancelled);

            /**
             * Creates a new Cancelled instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Cancelled instance
             */
            public static create(properties?: protocol.CommandOutcome.ICancelled): protocol.CommandOutcome.Cancelled;

            /**
             * Encodes the specified Cancelled message. Does not implicitly {@link protocol.CommandOutcome.Cancelled.verify|verify} messages.
             * @param message Cancelled message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.CommandOutcome.ICancelled, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Cancelled message, length delimited. Does not implicitly {@link protocol.CommandOutcome.Cancelled.verify|verify} messages.
             * @param message Cancelled message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.CommandOutcome.ICancelled, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Cancelled message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Cancelled
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.CommandOutcome.Cancelled;

            /**
             * Decodes a Cancelled message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Cancelled
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.CommandOutcome.Cancelled;

            /**
             * Verifies a Cancelled message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Cancelled message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Cancelled
             */
            public static fromObject(object: { [k: string]: any }): protocol.CommandOutcome.Cancelled;

            /**
             * Creates a plain object from a Cancelled message. Also converts values to other types if specified.
             * @param message Cancelled
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.CommandOutcome.Cancelled, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Cancelled to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Cancelled
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a Range. */
    interface IRange {

        /** Range start */
        start?: (number|Long|null);

        /** Range end */
        end?: (number|Long|null);
    }

    /** Represents a Range. */
    class Range implements IRange {

        /**
         * Constructs a new Range.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IRange);

        /** Range start. */
        public start: (number|Long);

        /** Range end. */
        public end: (number|Long);

        /**
         * Creates a new Range instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Range instance
         */
        public static create(properties?: protocol.IRange): protocol.Range;

        /**
         * Encodes the specified Range message. Does not implicitly {@link protocol.Range.verify|verify} messages.
         * @param message Range message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Range message, length delimited. Does not implicitly {@link protocol.Range.verify|verify} messages.
         * @param message Range message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Range message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Range
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Range;

        /**
         * Decodes a Range message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Range
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Range;

        /**
         * Verifies a Range message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Range message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Range
         */
        public static fromObject(object: { [k: string]: any }): protocol.Range;

        /**
         * Creates a plain object from a Range message. Also converts values to other types if specified.
         * @param message Range
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Range, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Range to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Range
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RangeInclusive. */
    interface IRangeInclusive {

        /** RangeInclusive start */
        start?: (number|Long|null);

        /** RangeInclusive end */
        end?: (number|Long|null);
    }

    /** Represents a RangeInclusive. */
    class RangeInclusive implements IRangeInclusive {

        /**
         * Constructs a new RangeInclusive.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IRangeInclusive);

        /** RangeInclusive start. */
        public start: (number|Long);

        /** RangeInclusive end. */
        public end: (number|Long);

        /**
         * Creates a new RangeInclusive instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RangeInclusive instance
         */
        public static create(properties?: protocol.IRangeInclusive): protocol.RangeInclusive;

        /**
         * Encodes the specified RangeInclusive message. Does not implicitly {@link protocol.RangeInclusive.verify|verify} messages.
         * @param message RangeInclusive message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IRangeInclusive, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RangeInclusive message, length delimited. Does not implicitly {@link protocol.RangeInclusive.verify|verify} messages.
         * @param message RangeInclusive message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IRangeInclusive, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RangeInclusive message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RangeInclusive
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.RangeInclusive;

        /**
         * Decodes a RangeInclusive message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RangeInclusive
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.RangeInclusive;

        /**
         * Verifies a RangeInclusive message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RangeInclusive message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RangeInclusive
         */
        public static fromObject(object: { [k: string]: any }): protocol.RangeInclusive;

        /**
         * Creates a plain object from a RangeInclusive message. Also converts values to other types if specified.
         * @param message RangeInclusive
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.RangeInclusive, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RangeInclusive to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RangeInclusive
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RangeInclusiveList. */
    interface IRangeInclusiveList {

        /** RangeInclusiveList elements */
        elements?: (protocol.IRangeInclusive[]|null);
    }

    /** Represents a RangeInclusiveList. */
    class RangeInclusiveList implements IRangeInclusiveList {

        /**
         * Constructs a new RangeInclusiveList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IRangeInclusiveList);

        /** RangeInclusiveList elements. */
        public elements: protocol.IRangeInclusive[];

        /**
         * Creates a new RangeInclusiveList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RangeInclusiveList instance
         */
        public static create(properties?: protocol.IRangeInclusiveList): protocol.RangeInclusiveList;

        /**
         * Encodes the specified RangeInclusiveList message. Does not implicitly {@link protocol.RangeInclusiveList.verify|verify} messages.
         * @param message RangeInclusiveList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IRangeInclusiveList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RangeInclusiveList message, length delimited. Does not implicitly {@link protocol.RangeInclusiveList.verify|verify} messages.
         * @param message RangeInclusiveList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IRangeInclusiveList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RangeInclusiveList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RangeInclusiveList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.RangeInclusiveList;

        /**
         * Decodes a RangeInclusiveList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RangeInclusiveList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.RangeInclusiveList;

        /**
         * Verifies a RangeInclusiveList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RangeInclusiveList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RangeInclusiveList
         */
        public static fromObject(object: { [k: string]: any }): protocol.RangeInclusiveList;

        /**
         * Creates a plain object from a RangeInclusiveList message. Also converts values to other types if specified.
         * @param message RangeInclusiveList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.RangeInclusiveList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RangeInclusiveList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RangeInclusiveList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GrabError. */
    interface IGrabError {

        /** GrabError config */
        config?: (protocol.GrabError.IConfig|null);

        /** GrabError communication */
        communication?: (protocol.GrabError.ICommunication|null);

        /** GrabError ioOperation */
        ioOperation?: (protocol.GrabError.IIoOperation|null);

        /** GrabError invalidRange */
        invalidRange?: (protocol.GrabError.IInvalidRange|null);

        /** GrabError interrupted */
        interrupted?: (protocol.GrabError.IInterrupted|null);

        /** GrabError notInitialize */
        notInitialize?: (protocol.GrabError.INotInitialize|null);

        /** GrabError unsupported */
        unsupported?: (protocol.GrabError.IUnsupported|null);
    }

    /** Represents a GrabError. */
    class GrabError implements IGrabError {

        /**
         * Constructs a new GrabError.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IGrabError);

        /** GrabError config. */
        public config?: (protocol.GrabError.IConfig|null);

        /** GrabError communication. */
        public communication?: (protocol.GrabError.ICommunication|null);

        /** GrabError ioOperation. */
        public ioOperation?: (protocol.GrabError.IIoOperation|null);

        /** GrabError invalidRange. */
        public invalidRange?: (protocol.GrabError.IInvalidRange|null);

        /** GrabError interrupted. */
        public interrupted?: (protocol.GrabError.IInterrupted|null);

        /** GrabError notInitialize. */
        public notInitialize?: (protocol.GrabError.INotInitialize|null);

        /** GrabError unsupported. */
        public unsupported?: (protocol.GrabError.IUnsupported|null);

        /** GrabError error. */
        public error?: ("config"|"communication"|"ioOperation"|"invalidRange"|"interrupted"|"notInitialize"|"unsupported");

        /**
         * Creates a new GrabError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GrabError instance
         */
        public static create(properties?: protocol.IGrabError): protocol.GrabError;

        /**
         * Encodes the specified GrabError message. Does not implicitly {@link protocol.GrabError.verify|verify} messages.
         * @param message GrabError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IGrabError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GrabError message, length delimited. Does not implicitly {@link protocol.GrabError.verify|verify} messages.
         * @param message GrabError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IGrabError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GrabError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GrabError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.GrabError;

        /**
         * Decodes a GrabError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GrabError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.GrabError;

        /**
         * Verifies a GrabError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GrabError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GrabError
         */
        public static fromObject(object: { [k: string]: any }): protocol.GrabError;

        /**
         * Creates a plain object from a GrabError message. Also converts values to other types if specified.
         * @param message GrabError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.GrabError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GrabError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GrabError
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace GrabError {

        /** Properties of a Config. */
        interface IConfig {

            /** Config message */
            message?: (string|null);
        }

        /** Represents a Config. */
        class Config implements IConfig {

            /**
             * Constructs a new Config.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.GrabError.IConfig);

            /** Config message. */
            public message: string;

            /**
             * Creates a new Config instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Config instance
             */
            public static create(properties?: protocol.GrabError.IConfig): protocol.GrabError.Config;

            /**
             * Encodes the specified Config message. Does not implicitly {@link protocol.GrabError.Config.verify|verify} messages.
             * @param message Config message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.GrabError.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Config message, length delimited. Does not implicitly {@link protocol.GrabError.Config.verify|verify} messages.
             * @param message Config message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.GrabError.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Config message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.GrabError.Config;

            /**
             * Decodes a Config message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.GrabError.Config;

            /**
             * Verifies a Config message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Config message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Config
             */
            public static fromObject(object: { [k: string]: any }): protocol.GrabError.Config;

            /**
             * Creates a plain object from a Config message. Also converts values to other types if specified.
             * @param message Config
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.GrabError.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Config to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Config
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Communication. */
        interface ICommunication {

            /** Communication message */
            message?: (string|null);
        }

        /** Represents a Communication. */
        class Communication implements ICommunication {

            /**
             * Constructs a new Communication.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.GrabError.ICommunication);

            /** Communication message. */
            public message: string;

            /**
             * Creates a new Communication instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Communication instance
             */
            public static create(properties?: protocol.GrabError.ICommunication): protocol.GrabError.Communication;

            /**
             * Encodes the specified Communication message. Does not implicitly {@link protocol.GrabError.Communication.verify|verify} messages.
             * @param message Communication message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.GrabError.ICommunication, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Communication message, length delimited. Does not implicitly {@link protocol.GrabError.Communication.verify|verify} messages.
             * @param message Communication message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.GrabError.ICommunication, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Communication message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Communication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.GrabError.Communication;

            /**
             * Decodes a Communication message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Communication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.GrabError.Communication;

            /**
             * Verifies a Communication message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Communication message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Communication
             */
            public static fromObject(object: { [k: string]: any }): protocol.GrabError.Communication;

            /**
             * Creates a plain object from a Communication message. Also converts values to other types if specified.
             * @param message Communication
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.GrabError.Communication, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Communication to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Communication
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an IoOperation. */
        interface IIoOperation {

            /** IoOperation message */
            message?: (string|null);
        }

        /** Represents an IoOperation. */
        class IoOperation implements IIoOperation {

            /**
             * Constructs a new IoOperation.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.GrabError.IIoOperation);

            /** IoOperation message. */
            public message: string;

            /**
             * Creates a new IoOperation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IoOperation instance
             */
            public static create(properties?: protocol.GrabError.IIoOperation): protocol.GrabError.IoOperation;

            /**
             * Encodes the specified IoOperation message. Does not implicitly {@link protocol.GrabError.IoOperation.verify|verify} messages.
             * @param message IoOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.GrabError.IIoOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IoOperation message, length delimited. Does not implicitly {@link protocol.GrabError.IoOperation.verify|verify} messages.
             * @param message IoOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.GrabError.IIoOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IoOperation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IoOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.GrabError.IoOperation;

            /**
             * Decodes an IoOperation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IoOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.GrabError.IoOperation;

            /**
             * Verifies an IoOperation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IoOperation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IoOperation
             */
            public static fromObject(object: { [k: string]: any }): protocol.GrabError.IoOperation;

            /**
             * Creates a plain object from an IoOperation message. Also converts values to other types if specified.
             * @param message IoOperation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.GrabError.IoOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IoOperation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for IoOperation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an InvalidRange. */
        interface IInvalidRange {

            /** InvalidRange range */
            range?: (protocol.IRangeInclusive|null);

            /** InvalidRange context */
            context?: (string|null);
        }

        /** Represents an InvalidRange. */
        class InvalidRange implements IInvalidRange {

            /**
             * Constructs a new InvalidRange.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.GrabError.IInvalidRange);

            /** InvalidRange range. */
            public range?: (protocol.IRangeInclusive|null);

            /** InvalidRange context. */
            public context: string;

            /**
             * Creates a new InvalidRange instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InvalidRange instance
             */
            public static create(properties?: protocol.GrabError.IInvalidRange): protocol.GrabError.InvalidRange;

            /**
             * Encodes the specified InvalidRange message. Does not implicitly {@link protocol.GrabError.InvalidRange.verify|verify} messages.
             * @param message InvalidRange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.GrabError.IInvalidRange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InvalidRange message, length delimited. Does not implicitly {@link protocol.GrabError.InvalidRange.verify|verify} messages.
             * @param message InvalidRange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.GrabError.IInvalidRange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InvalidRange message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InvalidRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.GrabError.InvalidRange;

            /**
             * Decodes an InvalidRange message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InvalidRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.GrabError.InvalidRange;

            /**
             * Verifies an InvalidRange message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InvalidRange message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InvalidRange
             */
            public static fromObject(object: { [k: string]: any }): protocol.GrabError.InvalidRange;

            /**
             * Creates a plain object from an InvalidRange message. Also converts values to other types if specified.
             * @param message InvalidRange
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.GrabError.InvalidRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InvalidRange to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InvalidRange
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Interrupted. */
        interface IInterrupted {
        }

        /** Represents an Interrupted. */
        class Interrupted implements IInterrupted {

            /**
             * Constructs a new Interrupted.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.GrabError.IInterrupted);

            /**
             * Creates a new Interrupted instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Interrupted instance
             */
            public static create(properties?: protocol.GrabError.IInterrupted): protocol.GrabError.Interrupted;

            /**
             * Encodes the specified Interrupted message. Does not implicitly {@link protocol.GrabError.Interrupted.verify|verify} messages.
             * @param message Interrupted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.GrabError.IInterrupted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Interrupted message, length delimited. Does not implicitly {@link protocol.GrabError.Interrupted.verify|verify} messages.
             * @param message Interrupted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.GrabError.IInterrupted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Interrupted message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Interrupted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.GrabError.Interrupted;

            /**
             * Decodes an Interrupted message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Interrupted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.GrabError.Interrupted;

            /**
             * Verifies an Interrupted message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Interrupted message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Interrupted
             */
            public static fromObject(object: { [k: string]: any }): protocol.GrabError.Interrupted;

            /**
             * Creates a plain object from an Interrupted message. Also converts values to other types if specified.
             * @param message Interrupted
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.GrabError.Interrupted, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Interrupted to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Interrupted
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NotInitialize. */
        interface INotInitialize {
        }

        /** Represents a NotInitialize. */
        class NotInitialize implements INotInitialize {

            /**
             * Constructs a new NotInitialize.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.GrabError.INotInitialize);

            /**
             * Creates a new NotInitialize instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NotInitialize instance
             */
            public static create(properties?: protocol.GrabError.INotInitialize): protocol.GrabError.NotInitialize;

            /**
             * Encodes the specified NotInitialize message. Does not implicitly {@link protocol.GrabError.NotInitialize.verify|verify} messages.
             * @param message NotInitialize message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.GrabError.INotInitialize, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NotInitialize message, length delimited. Does not implicitly {@link protocol.GrabError.NotInitialize.verify|verify} messages.
             * @param message NotInitialize message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.GrabError.INotInitialize, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NotInitialize message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NotInitialize
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.GrabError.NotInitialize;

            /**
             * Decodes a NotInitialize message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NotInitialize
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.GrabError.NotInitialize;

            /**
             * Verifies a NotInitialize message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NotInitialize message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NotInitialize
             */
            public static fromObject(object: { [k: string]: any }): protocol.GrabError.NotInitialize;

            /**
             * Creates a plain object from a NotInitialize message. Also converts values to other types if specified.
             * @param message NotInitialize
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.GrabError.NotInitialize, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NotInitialize to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NotInitialize
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Unsupported. */
        interface IUnsupported {

            /** Unsupported message */
            message?: (string|null);
        }

        /** Represents an Unsupported. */
        class Unsupported implements IUnsupported {

            /**
             * Constructs a new Unsupported.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.GrabError.IUnsupported);

            /** Unsupported message. */
            public message: string;

            /**
             * Creates a new Unsupported instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Unsupported instance
             */
            public static create(properties?: protocol.GrabError.IUnsupported): protocol.GrabError.Unsupported;

            /**
             * Encodes the specified Unsupported message. Does not implicitly {@link protocol.GrabError.Unsupported.verify|verify} messages.
             * @param message Unsupported message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.GrabError.IUnsupported, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Unsupported message, length delimited. Does not implicitly {@link protocol.GrabError.Unsupported.verify|verify} messages.
             * @param message Unsupported message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.GrabError.IUnsupported, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Unsupported message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Unsupported
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.GrabError.Unsupported;

            /**
             * Decodes an Unsupported message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Unsupported
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.GrabError.Unsupported;

            /**
             * Verifies an Unsupported message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Unsupported message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Unsupported
             */
            public static fromObject(object: { [k: string]: any }): protocol.GrabError.Unsupported;

            /**
             * Creates a plain object from an Unsupported message. Also converts values to other types if specified.
             * @param message Unsupported
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.GrabError.Unsupported, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Unsupported to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Unsupported
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a SearchError. */
    interface ISearchError {

        /** SearchError config */
        config?: (protocol.SearchError.IConfig|null);

        /** SearchError communication */
        communication?: (protocol.SearchError.ICommunication|null);

        /** SearchError ioOperation */
        ioOperation?: (protocol.SearchError.IIoOperation|null);

        /** SearchError regex */
        regex?: (protocol.SearchError.IRegex|null);

        /** SearchError input */
        input?: (protocol.SearchError.IInput|null);

        /** SearchError grab */
        grab?: (protocol.SearchError.IGrab|null);

        /** SearchError aborted */
        aborted?: (protocol.SearchError.IAborted|null);
    }

    /** Represents a SearchError. */
    class SearchError implements ISearchError {

        /**
         * Constructs a new SearchError.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISearchError);

        /** SearchError config. */
        public config?: (protocol.SearchError.IConfig|null);

        /** SearchError communication. */
        public communication?: (protocol.SearchError.ICommunication|null);

        /** SearchError ioOperation. */
        public ioOperation?: (protocol.SearchError.IIoOperation|null);

        /** SearchError regex. */
        public regex?: (protocol.SearchError.IRegex|null);

        /** SearchError input. */
        public input?: (protocol.SearchError.IInput|null);

        /** SearchError grab. */
        public grab?: (protocol.SearchError.IGrab|null);

        /** SearchError aborted. */
        public aborted?: (protocol.SearchError.IAborted|null);

        /** SearchError error. */
        public error?: ("config"|"communication"|"ioOperation"|"regex"|"input"|"grab"|"aborted");

        /**
         * Creates a new SearchError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchError instance
         */
        public static create(properties?: protocol.ISearchError): protocol.SearchError;

        /**
         * Encodes the specified SearchError message. Does not implicitly {@link protocol.SearchError.verify|verify} messages.
         * @param message SearchError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISearchError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SearchError message, length delimited. Does not implicitly {@link protocol.SearchError.verify|verify} messages.
         * @param message SearchError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISearchError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SearchError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SearchError;

        /**
         * Decodes a SearchError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SearchError;

        /**
         * Verifies a SearchError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SearchError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SearchError
         */
        public static fromObject(object: { [k: string]: any }): protocol.SearchError;

        /**
         * Creates a plain object from a SearchError message. Also converts values to other types if specified.
         * @param message SearchError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SearchError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SearchError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SearchError
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SearchError {

        /** Properties of a Config. */
        interface IConfig {

            /** Config message */
            message?: (string|null);
        }

        /** Represents a Config. */
        class Config implements IConfig {

            /**
             * Constructs a new Config.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.SearchError.IConfig);

            /** Config message. */
            public message: string;

            /**
             * Creates a new Config instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Config instance
             */
            public static create(properties?: protocol.SearchError.IConfig): protocol.SearchError.Config;

            /**
             * Encodes the specified Config message. Does not implicitly {@link protocol.SearchError.Config.verify|verify} messages.
             * @param message Config message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.SearchError.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Config message, length delimited. Does not implicitly {@link protocol.SearchError.Config.verify|verify} messages.
             * @param message Config message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.SearchError.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Config message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SearchError.Config;

            /**
             * Decodes a Config message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SearchError.Config;

            /**
             * Verifies a Config message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Config message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Config
             */
            public static fromObject(object: { [k: string]: any }): protocol.SearchError.Config;

            /**
             * Creates a plain object from a Config message. Also converts values to other types if specified.
             * @param message Config
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.SearchError.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Config to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Config
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Communication. */
        interface ICommunication {

            /** Communication message */
            message?: (string|null);
        }

        /** Represents a Communication. */
        class Communication implements ICommunication {

            /**
             * Constructs a new Communication.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.SearchError.ICommunication);

            /** Communication message. */
            public message: string;

            /**
             * Creates a new Communication instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Communication instance
             */
            public static create(properties?: protocol.SearchError.ICommunication): protocol.SearchError.Communication;

            /**
             * Encodes the specified Communication message. Does not implicitly {@link protocol.SearchError.Communication.verify|verify} messages.
             * @param message Communication message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.SearchError.ICommunication, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Communication message, length delimited. Does not implicitly {@link protocol.SearchError.Communication.verify|verify} messages.
             * @param message Communication message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.SearchError.ICommunication, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Communication message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Communication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SearchError.Communication;

            /**
             * Decodes a Communication message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Communication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SearchError.Communication;

            /**
             * Verifies a Communication message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Communication message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Communication
             */
            public static fromObject(object: { [k: string]: any }): protocol.SearchError.Communication;

            /**
             * Creates a plain object from a Communication message. Also converts values to other types if specified.
             * @param message Communication
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.SearchError.Communication, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Communication to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Communication
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an IoOperation. */
        interface IIoOperation {

            /** IoOperation message */
            message?: (string|null);
        }

        /** Represents an IoOperation. */
        class IoOperation implements IIoOperation {

            /**
             * Constructs a new IoOperation.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.SearchError.IIoOperation);

            /** IoOperation message. */
            public message: string;

            /**
             * Creates a new IoOperation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IoOperation instance
             */
            public static create(properties?: protocol.SearchError.IIoOperation): protocol.SearchError.IoOperation;

            /**
             * Encodes the specified IoOperation message. Does not implicitly {@link protocol.SearchError.IoOperation.verify|verify} messages.
             * @param message IoOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.SearchError.IIoOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IoOperation message, length delimited. Does not implicitly {@link protocol.SearchError.IoOperation.verify|verify} messages.
             * @param message IoOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.SearchError.IIoOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IoOperation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IoOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SearchError.IoOperation;

            /**
             * Decodes an IoOperation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IoOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SearchError.IoOperation;

            /**
             * Verifies an IoOperation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IoOperation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IoOperation
             */
            public static fromObject(object: { [k: string]: any }): protocol.SearchError.IoOperation;

            /**
             * Creates a plain object from an IoOperation message. Also converts values to other types if specified.
             * @param message IoOperation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.SearchError.IoOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IoOperation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for IoOperation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Regex. */
        interface IRegex {

            /** Regex message */
            message?: (string|null);
        }

        /** Represents a Regex. */
        class Regex implements IRegex {

            /**
             * Constructs a new Regex.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.SearchError.IRegex);

            /** Regex message. */
            public message: string;

            /**
             * Creates a new Regex instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Regex instance
             */
            public static create(properties?: protocol.SearchError.IRegex): protocol.SearchError.Regex;

            /**
             * Encodes the specified Regex message. Does not implicitly {@link protocol.SearchError.Regex.verify|verify} messages.
             * @param message Regex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.SearchError.IRegex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Regex message, length delimited. Does not implicitly {@link protocol.SearchError.Regex.verify|verify} messages.
             * @param message Regex message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.SearchError.IRegex, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Regex message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Regex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SearchError.Regex;

            /**
             * Decodes a Regex message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Regex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SearchError.Regex;

            /**
             * Verifies a Regex message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Regex message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Regex
             */
            public static fromObject(object: { [k: string]: any }): protocol.SearchError.Regex;

            /**
             * Creates a plain object from a Regex message. Also converts values to other types if specified.
             * @param message Regex
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.SearchError.Regex, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Regex to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Regex
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Input. */
        interface IInput {

            /** Input message */
            message?: (string|null);
        }

        /** Represents an Input. */
        class Input implements IInput {

            /**
             * Constructs a new Input.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.SearchError.IInput);

            /** Input message. */
            public message: string;

            /**
             * Creates a new Input instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Input instance
             */
            public static create(properties?: protocol.SearchError.IInput): protocol.SearchError.Input;

            /**
             * Encodes the specified Input message. Does not implicitly {@link protocol.SearchError.Input.verify|verify} messages.
             * @param message Input message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.SearchError.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Input message, length delimited. Does not implicitly {@link protocol.SearchError.Input.verify|verify} messages.
             * @param message Input message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.SearchError.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Input message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Input
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SearchError.Input;

            /**
             * Decodes an Input message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Input
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SearchError.Input;

            /**
             * Verifies an Input message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Input message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Input
             */
            public static fromObject(object: { [k: string]: any }): protocol.SearchError.Input;

            /**
             * Creates a plain object from an Input message. Also converts values to other types if specified.
             * @param message Input
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.SearchError.Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Input to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Input
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Grab. */
        interface IGrab {

            /** Grab error */
            error?: (protocol.IGrabError|null);
        }

        /** Represents a Grab. */
        class Grab implements IGrab {

            /**
             * Constructs a new Grab.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.SearchError.IGrab);

            /** Grab error. */
            public error?: (protocol.IGrabError|null);

            /**
             * Creates a new Grab instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Grab instance
             */
            public static create(properties?: protocol.SearchError.IGrab): protocol.SearchError.Grab;

            /**
             * Encodes the specified Grab message. Does not implicitly {@link protocol.SearchError.Grab.verify|verify} messages.
             * @param message Grab message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.SearchError.IGrab, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Grab message, length delimited. Does not implicitly {@link protocol.SearchError.Grab.verify|verify} messages.
             * @param message Grab message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.SearchError.IGrab, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Grab message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Grab
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SearchError.Grab;

            /**
             * Decodes a Grab message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Grab
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SearchError.Grab;

            /**
             * Verifies a Grab message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Grab message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Grab
             */
            public static fromObject(object: { [k: string]: any }): protocol.SearchError.Grab;

            /**
             * Creates a plain object from a Grab message. Also converts values to other types if specified.
             * @param message Grab
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.SearchError.Grab, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Grab to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Grab
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Aborted. */
        interface IAborted {

            /** Aborted message */
            message?: (string|null);
        }

        /** Represents an Aborted. */
        class Aborted implements IAborted {

            /**
             * Constructs a new Aborted.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.SearchError.IAborted);

            /** Aborted message. */
            public message: string;

            /**
             * Creates a new Aborted instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Aborted instance
             */
            public static create(properties?: protocol.SearchError.IAborted): protocol.SearchError.Aborted;

            /**
             * Encodes the specified Aborted message. Does not implicitly {@link protocol.SearchError.Aborted.verify|verify} messages.
             * @param message Aborted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.SearchError.IAborted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Aborted message, length delimited. Does not implicitly {@link protocol.SearchError.Aborted.verify|verify} messages.
             * @param message Aborted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.SearchError.IAborted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Aborted message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Aborted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SearchError.Aborted;

            /**
             * Decodes an Aborted message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Aborted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SearchError.Aborted;

            /**
             * Verifies an Aborted message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Aborted message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Aborted
             */
            public static fromObject(object: { [k: string]: any }): protocol.SearchError.Aborted;

            /**
             * Creates a plain object from an Aborted message. Also converts values to other types if specified.
             * @param message Aborted
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.SearchError.Aborted, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Aborted to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Aborted
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** NativeErrorKind enum. */
    enum NativeErrorKind {
        FileNotFound = 0,
        UnsupportedFileType = 1,
        ComputationFailed = 2,
        Configuration = 3,
        Interrupted = 4,
        OperationSearch = 5,
        NotYetImplemented = 6,
        ChannelError = 7,
        Io = 8,
        Grabber = 9
    }

    /** Properties of a NativeError. */
    interface INativeError {

        /** NativeError severity */
        severity?: (protocol.Severity|null);

        /** NativeError kind */
        kind?: (protocol.NativeErrorKind|null);

        /** NativeError message */
        message?: (string|null);
    }

    /** Represents a NativeError. */
    class NativeError implements INativeError {

        /**
         * Constructs a new NativeError.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.INativeError);

        /** NativeError severity. */
        public severity: protocol.Severity;

        /** NativeError kind. */
        public kind: protocol.NativeErrorKind;

        /** NativeError message. */
        public message: string;

        /**
         * Creates a new NativeError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NativeError instance
         */
        public static create(properties?: protocol.INativeError): protocol.NativeError;

        /**
         * Encodes the specified NativeError message. Does not implicitly {@link protocol.NativeError.verify|verify} messages.
         * @param message NativeError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.INativeError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NativeError message, length delimited. Does not implicitly {@link protocol.NativeError.verify|verify} messages.
         * @param message NativeError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.INativeError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NativeError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NativeError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.NativeError;

        /**
         * Decodes a NativeError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NativeError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.NativeError;

        /**
         * Verifies a NativeError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NativeError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NativeError
         */
        public static fromObject(object: { [k: string]: any }): protocol.NativeError;

        /**
         * Creates a plain object from a NativeError message. Also converts values to other types if specified.
         * @param message NativeError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.NativeError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NativeError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NativeError
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Severity enum. */
    enum Severity {
        WARNING = 0,
        ERROR = 1
    }

    /** Properties of a ComputationError. */
    interface IComputationError {

        /** ComputationError destinationPath */
        destinationPath?: (protocol.ComputationError.IDestinationPath|null);

        /** ComputationError sessionCreatingFail */
        sessionCreatingFail?: (protocol.ComputationError.ISessionCreatingFail|null);

        /** ComputationError communication */
        communication?: (protocol.ComputationError.ICommunication|null);

        /** ComputationError operationNotSupported */
        operationNotSupported?: (protocol.ComputationError.IOperationNotSupported|null);

        /** ComputationError ioOperation */
        ioOperation?: (protocol.ComputationError.IIoOperation|null);

        /** ComputationError invalidData */
        invalidData?: (protocol.ComputationError.IInvalidData|null);

        /** ComputationError invalidArgs */
        invalidArgs?: (protocol.ComputationError.IInvalidArgs|null);

        /** ComputationError process */
        process?: (protocol.ComputationError.IProcess|null);

        /** ComputationError protocol */
        protocol?: (protocol.ComputationError.IProtocol|null);

        /** ComputationError searchError */
        searchError?: (protocol.ISearchError|null);

        /** ComputationError multipleInitCall */
        multipleInitCall?: (protocol.ComputationError.IMultipleInitCall|null);

        /** ComputationError sessionUnavailable */
        sessionUnavailable?: (protocol.ComputationError.ISessionUnavailable|null);

        /** ComputationError nativeError */
        nativeError?: (protocol.INativeError|null);

        /** ComputationError grabbing */
        grabbing?: (protocol.ComputationError.IGrabbing|null);

        /** ComputationError sde */
        sde?: (protocol.ComputationError.ISde|null);
    }

    /** Represents a ComputationError. */
    class ComputationError implements IComputationError {

        /**
         * Constructs a new ComputationError.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IComputationError);

        /** ComputationError destinationPath. */
        public destinationPath?: (protocol.ComputationError.IDestinationPath|null);

        /** ComputationError sessionCreatingFail. */
        public sessionCreatingFail?: (protocol.ComputationError.ISessionCreatingFail|null);

        /** ComputationError communication. */
        public communication?: (protocol.ComputationError.ICommunication|null);

        /** ComputationError operationNotSupported. */
        public operationNotSupported?: (protocol.ComputationError.IOperationNotSupported|null);

        /** ComputationError ioOperation. */
        public ioOperation?: (protocol.ComputationError.IIoOperation|null);

        /** ComputationError invalidData. */
        public invalidData?: (protocol.ComputationError.IInvalidData|null);

        /** ComputationError invalidArgs. */
        public invalidArgs?: (protocol.ComputationError.IInvalidArgs|null);

        /** ComputationError process. */
        public process?: (protocol.ComputationError.IProcess|null);

        /** ComputationError protocol. */
        public protocol?: (protocol.ComputationError.IProtocol|null);

        /** ComputationError searchError. */
        public searchError?: (protocol.ISearchError|null);

        /** ComputationError multipleInitCall. */
        public multipleInitCall?: (protocol.ComputationError.IMultipleInitCall|null);

        /** ComputationError sessionUnavailable. */
        public sessionUnavailable?: (protocol.ComputationError.ISessionUnavailable|null);

        /** ComputationError nativeError. */
        public nativeError?: (protocol.INativeError|null);

        /** ComputationError grabbing. */
        public grabbing?: (protocol.ComputationError.IGrabbing|null);

        /** ComputationError sde. */
        public sde?: (protocol.ComputationError.ISde|null);

        /** ComputationError error. */
        public error?: ("destinationPath"|"sessionCreatingFail"|"communication"|"operationNotSupported"|"ioOperation"|"invalidData"|"invalidArgs"|"process"|"protocol"|"searchError"|"multipleInitCall"|"sessionUnavailable"|"nativeError"|"grabbing"|"sde");

        /**
         * Creates a new ComputationError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ComputationError instance
         */
        public static create(properties?: protocol.IComputationError): protocol.ComputationError;

        /**
         * Encodes the specified ComputationError message. Does not implicitly {@link protocol.ComputationError.verify|verify} messages.
         * @param message ComputationError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IComputationError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ComputationError message, length delimited. Does not implicitly {@link protocol.ComputationError.verify|verify} messages.
         * @param message ComputationError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IComputationError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ComputationError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ComputationError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ComputationError;

        /**
         * Decodes a ComputationError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ComputationError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ComputationError;

        /**
         * Verifies a ComputationError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ComputationError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ComputationError
         */
        public static fromObject(object: { [k: string]: any }): protocol.ComputationError;

        /**
         * Creates a plain object from a ComputationError message. Also converts values to other types if specified.
         * @param message ComputationError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ComputationError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ComputationError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ComputationError
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ComputationError {

        /** Properties of a DestinationPath. */
        interface IDestinationPath {
        }

        /** Represents a DestinationPath. */
        class DestinationPath implements IDestinationPath {

            /**
             * Constructs a new DestinationPath.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.ComputationError.IDestinationPath);

            /**
             * Creates a new DestinationPath instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DestinationPath instance
             */
            public static create(properties?: protocol.ComputationError.IDestinationPath): protocol.ComputationError.DestinationPath;

            /**
             * Encodes the specified DestinationPath message. Does not implicitly {@link protocol.ComputationError.DestinationPath.verify|verify} messages.
             * @param message DestinationPath message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.ComputationError.IDestinationPath, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DestinationPath message, length delimited. Does not implicitly {@link protocol.ComputationError.DestinationPath.verify|verify} messages.
             * @param message DestinationPath message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.ComputationError.IDestinationPath, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DestinationPath message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DestinationPath
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ComputationError.DestinationPath;

            /**
             * Decodes a DestinationPath message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DestinationPath
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ComputationError.DestinationPath;

            /**
             * Verifies a DestinationPath message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DestinationPath message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DestinationPath
             */
            public static fromObject(object: { [k: string]: any }): protocol.ComputationError.DestinationPath;

            /**
             * Creates a plain object from a DestinationPath message. Also converts values to other types if specified.
             * @param message DestinationPath
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.ComputationError.DestinationPath, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DestinationPath to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DestinationPath
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SessionCreatingFail. */
        interface ISessionCreatingFail {
        }

        /** Represents a SessionCreatingFail. */
        class SessionCreatingFail implements ISessionCreatingFail {

            /**
             * Constructs a new SessionCreatingFail.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.ComputationError.ISessionCreatingFail);

            /**
             * Creates a new SessionCreatingFail instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SessionCreatingFail instance
             */
            public static create(properties?: protocol.ComputationError.ISessionCreatingFail): protocol.ComputationError.SessionCreatingFail;

            /**
             * Encodes the specified SessionCreatingFail message. Does not implicitly {@link protocol.ComputationError.SessionCreatingFail.verify|verify} messages.
             * @param message SessionCreatingFail message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.ComputationError.ISessionCreatingFail, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SessionCreatingFail message, length delimited. Does not implicitly {@link protocol.ComputationError.SessionCreatingFail.verify|verify} messages.
             * @param message SessionCreatingFail message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.ComputationError.ISessionCreatingFail, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SessionCreatingFail message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SessionCreatingFail
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ComputationError.SessionCreatingFail;

            /**
             * Decodes a SessionCreatingFail message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SessionCreatingFail
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ComputationError.SessionCreatingFail;

            /**
             * Verifies a SessionCreatingFail message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SessionCreatingFail message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SessionCreatingFail
             */
            public static fromObject(object: { [k: string]: any }): protocol.ComputationError.SessionCreatingFail;

            /**
             * Creates a plain object from a SessionCreatingFail message. Also converts values to other types if specified.
             * @param message SessionCreatingFail
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.ComputationError.SessionCreatingFail, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SessionCreatingFail to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SessionCreatingFail
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Communication. */
        interface ICommunication {

            /** Communication message */
            message?: (string|null);
        }

        /** Represents a Communication. */
        class Communication implements ICommunication {

            /**
             * Constructs a new Communication.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.ComputationError.ICommunication);

            /** Communication message. */
            public message: string;

            /**
             * Creates a new Communication instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Communication instance
             */
            public static create(properties?: protocol.ComputationError.ICommunication): protocol.ComputationError.Communication;

            /**
             * Encodes the specified Communication message. Does not implicitly {@link protocol.ComputationError.Communication.verify|verify} messages.
             * @param message Communication message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.ComputationError.ICommunication, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Communication message, length delimited. Does not implicitly {@link protocol.ComputationError.Communication.verify|verify} messages.
             * @param message Communication message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.ComputationError.ICommunication, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Communication message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Communication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ComputationError.Communication;

            /**
             * Decodes a Communication message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Communication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ComputationError.Communication;

            /**
             * Verifies a Communication message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Communication message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Communication
             */
            public static fromObject(object: { [k: string]: any }): protocol.ComputationError.Communication;

            /**
             * Creates a plain object from a Communication message. Also converts values to other types if specified.
             * @param message Communication
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.ComputationError.Communication, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Communication to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Communication
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OperationNotSupported. */
        interface IOperationNotSupported {

            /** OperationNotSupported message */
            message?: (string|null);
        }

        /** Represents an OperationNotSupported. */
        class OperationNotSupported implements IOperationNotSupported {

            /**
             * Constructs a new OperationNotSupported.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.ComputationError.IOperationNotSupported);

            /** OperationNotSupported message. */
            public message: string;

            /**
             * Creates a new OperationNotSupported instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationNotSupported instance
             */
            public static create(properties?: protocol.ComputationError.IOperationNotSupported): protocol.ComputationError.OperationNotSupported;

            /**
             * Encodes the specified OperationNotSupported message. Does not implicitly {@link protocol.ComputationError.OperationNotSupported.verify|verify} messages.
             * @param message OperationNotSupported message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.ComputationError.IOperationNotSupported, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationNotSupported message, length delimited. Does not implicitly {@link protocol.ComputationError.OperationNotSupported.verify|verify} messages.
             * @param message OperationNotSupported message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.ComputationError.IOperationNotSupported, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationNotSupported message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationNotSupported
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ComputationError.OperationNotSupported;

            /**
             * Decodes an OperationNotSupported message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationNotSupported
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ComputationError.OperationNotSupported;

            /**
             * Verifies an OperationNotSupported message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationNotSupported message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationNotSupported
             */
            public static fromObject(object: { [k: string]: any }): protocol.ComputationError.OperationNotSupported;

            /**
             * Creates a plain object from an OperationNotSupported message. Also converts values to other types if specified.
             * @param message OperationNotSupported
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.ComputationError.OperationNotSupported, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationNotSupported to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OperationNotSupported
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an IoOperation. */
        interface IIoOperation {

            /** IoOperation message */
            message?: (string|null);
        }

        /** Represents an IoOperation. */
        class IoOperation implements IIoOperation {

            /**
             * Constructs a new IoOperation.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.ComputationError.IIoOperation);

            /** IoOperation message. */
            public message: string;

            /**
             * Creates a new IoOperation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IoOperation instance
             */
            public static create(properties?: protocol.ComputationError.IIoOperation): protocol.ComputationError.IoOperation;

            /**
             * Encodes the specified IoOperation message. Does not implicitly {@link protocol.ComputationError.IoOperation.verify|verify} messages.
             * @param message IoOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.ComputationError.IIoOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IoOperation message, length delimited. Does not implicitly {@link protocol.ComputationError.IoOperation.verify|verify} messages.
             * @param message IoOperation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.ComputationError.IIoOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IoOperation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IoOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ComputationError.IoOperation;

            /**
             * Decodes an IoOperation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IoOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ComputationError.IoOperation;

            /**
             * Verifies an IoOperation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IoOperation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IoOperation
             */
            public static fromObject(object: { [k: string]: any }): protocol.ComputationError.IoOperation;

            /**
             * Creates a plain object from an IoOperation message. Also converts values to other types if specified.
             * @param message IoOperation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.ComputationError.IoOperation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IoOperation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for IoOperation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an InvalidData. */
        interface IInvalidData {
        }

        /** Represents an InvalidData. */
        class InvalidData implements IInvalidData {

            /**
             * Constructs a new InvalidData.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.ComputationError.IInvalidData);

            /**
             * Creates a new InvalidData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InvalidData instance
             */
            public static create(properties?: protocol.ComputationError.IInvalidData): protocol.ComputationError.InvalidData;

            /**
             * Encodes the specified InvalidData message. Does not implicitly {@link protocol.ComputationError.InvalidData.verify|verify} messages.
             * @param message InvalidData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.ComputationError.IInvalidData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InvalidData message, length delimited. Does not implicitly {@link protocol.ComputationError.InvalidData.verify|verify} messages.
             * @param message InvalidData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.ComputationError.IInvalidData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InvalidData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InvalidData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ComputationError.InvalidData;

            /**
             * Decodes an InvalidData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InvalidData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ComputationError.InvalidData;

            /**
             * Verifies an InvalidData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InvalidData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InvalidData
             */
            public static fromObject(object: { [k: string]: any }): protocol.ComputationError.InvalidData;

            /**
             * Creates a plain object from an InvalidData message. Also converts values to other types if specified.
             * @param message InvalidData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.ComputationError.InvalidData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InvalidData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InvalidData
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an InvalidArgs. */
        interface IInvalidArgs {

            /** InvalidArgs message */
            message?: (string|null);
        }

        /** Represents an InvalidArgs. */
        class InvalidArgs implements IInvalidArgs {

            /**
             * Constructs a new InvalidArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.ComputationError.IInvalidArgs);

            /** InvalidArgs message. */
            public message: string;

            /**
             * Creates a new InvalidArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InvalidArgs instance
             */
            public static create(properties?: protocol.ComputationError.IInvalidArgs): protocol.ComputationError.InvalidArgs;

            /**
             * Encodes the specified InvalidArgs message. Does not implicitly {@link protocol.ComputationError.InvalidArgs.verify|verify} messages.
             * @param message InvalidArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.ComputationError.IInvalidArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InvalidArgs message, length delimited. Does not implicitly {@link protocol.ComputationError.InvalidArgs.verify|verify} messages.
             * @param message InvalidArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.ComputationError.IInvalidArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InvalidArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InvalidArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ComputationError.InvalidArgs;

            /**
             * Decodes an InvalidArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InvalidArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ComputationError.InvalidArgs;

            /**
             * Verifies an InvalidArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InvalidArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InvalidArgs
             */
            public static fromObject(object: { [k: string]: any }): protocol.ComputationError.InvalidArgs;

            /**
             * Creates a plain object from an InvalidArgs message. Also converts values to other types if specified.
             * @param message InvalidArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.ComputationError.InvalidArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InvalidArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InvalidArgs
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Process. */
        interface IProcess {

            /** Process message */
            message?: (string|null);
        }

        /** Represents a Process. */
        class Process implements IProcess {

            /**
             * Constructs a new Process.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.ComputationError.IProcess);

            /** Process message. */
            public message: string;

            /**
             * Creates a new Process instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Process instance
             */
            public static create(properties?: protocol.ComputationError.IProcess): protocol.ComputationError.Process;

            /**
             * Encodes the specified Process message. Does not implicitly {@link protocol.ComputationError.Process.verify|verify} messages.
             * @param message Process message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.ComputationError.IProcess, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Process message, length delimited. Does not implicitly {@link protocol.ComputationError.Process.verify|verify} messages.
             * @param message Process message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.ComputationError.IProcess, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Process message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Process
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ComputationError.Process;

            /**
             * Decodes a Process message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Process
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ComputationError.Process;

            /**
             * Verifies a Process message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Process message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Process
             */
            public static fromObject(object: { [k: string]: any }): protocol.ComputationError.Process;

            /**
             * Creates a plain object from a Process message. Also converts values to other types if specified.
             * @param message Process
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.ComputationError.Process, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Process to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Process
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Protocol. */
        interface IProtocol {

            /** Protocol message */
            message?: (string|null);
        }

        /** Represents a Protocol. */
        class Protocol implements IProtocol {

            /**
             * Constructs a new Protocol.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.ComputationError.IProtocol);

            /** Protocol message. */
            public message: string;

            /**
             * Creates a new Protocol instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Protocol instance
             */
            public static create(properties?: protocol.ComputationError.IProtocol): protocol.ComputationError.Protocol;

            /**
             * Encodes the specified Protocol message. Does not implicitly {@link protocol.ComputationError.Protocol.verify|verify} messages.
             * @param message Protocol message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.ComputationError.IProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Protocol message, length delimited. Does not implicitly {@link protocol.ComputationError.Protocol.verify|verify} messages.
             * @param message Protocol message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.ComputationError.IProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Protocol message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Protocol
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ComputationError.Protocol;

            /**
             * Decodes a Protocol message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Protocol
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ComputationError.Protocol;

            /**
             * Verifies a Protocol message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Protocol message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Protocol
             */
            public static fromObject(object: { [k: string]: any }): protocol.ComputationError.Protocol;

            /**
             * Creates a plain object from a Protocol message. Also converts values to other types if specified.
             * @param message Protocol
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.ComputationError.Protocol, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Protocol to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Protocol
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MultipleInitCall. */
        interface IMultipleInitCall {
        }

        /** Represents a MultipleInitCall. */
        class MultipleInitCall implements IMultipleInitCall {

            /**
             * Constructs a new MultipleInitCall.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.ComputationError.IMultipleInitCall);

            /**
             * Creates a new MultipleInitCall instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MultipleInitCall instance
             */
            public static create(properties?: protocol.ComputationError.IMultipleInitCall): protocol.ComputationError.MultipleInitCall;

            /**
             * Encodes the specified MultipleInitCall message. Does not implicitly {@link protocol.ComputationError.MultipleInitCall.verify|verify} messages.
             * @param message MultipleInitCall message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.ComputationError.IMultipleInitCall, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MultipleInitCall message, length delimited. Does not implicitly {@link protocol.ComputationError.MultipleInitCall.verify|verify} messages.
             * @param message MultipleInitCall message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.ComputationError.IMultipleInitCall, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MultipleInitCall message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MultipleInitCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ComputationError.MultipleInitCall;

            /**
             * Decodes a MultipleInitCall message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MultipleInitCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ComputationError.MultipleInitCall;

            /**
             * Verifies a MultipleInitCall message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MultipleInitCall message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MultipleInitCall
             */
            public static fromObject(object: { [k: string]: any }): protocol.ComputationError.MultipleInitCall;

            /**
             * Creates a plain object from a MultipleInitCall message. Also converts values to other types if specified.
             * @param message MultipleInitCall
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.ComputationError.MultipleInitCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MultipleInitCall to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MultipleInitCall
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SessionUnavailable. */
        interface ISessionUnavailable {
        }

        /** Represents a SessionUnavailable. */
        class SessionUnavailable implements ISessionUnavailable {

            /**
             * Constructs a new SessionUnavailable.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.ComputationError.ISessionUnavailable);

            /**
             * Creates a new SessionUnavailable instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SessionUnavailable instance
             */
            public static create(properties?: protocol.ComputationError.ISessionUnavailable): protocol.ComputationError.SessionUnavailable;

            /**
             * Encodes the specified SessionUnavailable message. Does not implicitly {@link protocol.ComputationError.SessionUnavailable.verify|verify} messages.
             * @param message SessionUnavailable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.ComputationError.ISessionUnavailable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SessionUnavailable message, length delimited. Does not implicitly {@link protocol.ComputationError.SessionUnavailable.verify|verify} messages.
             * @param message SessionUnavailable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.ComputationError.ISessionUnavailable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SessionUnavailable message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SessionUnavailable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ComputationError.SessionUnavailable;

            /**
             * Decodes a SessionUnavailable message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SessionUnavailable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ComputationError.SessionUnavailable;

            /**
             * Verifies a SessionUnavailable message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SessionUnavailable message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SessionUnavailable
             */
            public static fromObject(object: { [k: string]: any }): protocol.ComputationError.SessionUnavailable;

            /**
             * Creates a plain object from a SessionUnavailable message. Also converts values to other types if specified.
             * @param message SessionUnavailable
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.ComputationError.SessionUnavailable, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SessionUnavailable to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SessionUnavailable
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Grabbing. */
        interface IGrabbing {

            /** Grabbing error */
            error?: (protocol.IGrabError|null);
        }

        /** Represents a Grabbing. */
        class Grabbing implements IGrabbing {

            /**
             * Constructs a new Grabbing.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.ComputationError.IGrabbing);

            /** Grabbing error. */
            public error?: (protocol.IGrabError|null);

            /**
             * Creates a new Grabbing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Grabbing instance
             */
            public static create(properties?: protocol.ComputationError.IGrabbing): protocol.ComputationError.Grabbing;

            /**
             * Encodes the specified Grabbing message. Does not implicitly {@link protocol.ComputationError.Grabbing.verify|verify} messages.
             * @param message Grabbing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.ComputationError.IGrabbing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Grabbing message, length delimited. Does not implicitly {@link protocol.ComputationError.Grabbing.verify|verify} messages.
             * @param message Grabbing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.ComputationError.IGrabbing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Grabbing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Grabbing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ComputationError.Grabbing;

            /**
             * Decodes a Grabbing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Grabbing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ComputationError.Grabbing;

            /**
             * Verifies a Grabbing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Grabbing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Grabbing
             */
            public static fromObject(object: { [k: string]: any }): protocol.ComputationError.Grabbing;

            /**
             * Creates a plain object from a Grabbing message. Also converts values to other types if specified.
             * @param message Grabbing
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.ComputationError.Grabbing, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Grabbing to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Grabbing
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Sde. */
        interface ISde {

            /** Sde message */
            message?: (string|null);
        }

        /** Represents a Sde. */
        class Sde implements ISde {

            /**
             * Constructs a new Sde.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.ComputationError.ISde);

            /** Sde message. */
            public message: string;

            /**
             * Creates a new Sde instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Sde instance
             */
            public static create(properties?: protocol.ComputationError.ISde): protocol.ComputationError.Sde;

            /**
             * Encodes the specified Sde message. Does not implicitly {@link protocol.ComputationError.Sde.verify|verify} messages.
             * @param message Sde message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.ComputationError.ISde, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Sde message, length delimited. Does not implicitly {@link protocol.ComputationError.Sde.verify|verify} messages.
             * @param message Sde message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.ComputationError.ISde, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Sde message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Sde
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ComputationError.Sde;

            /**
             * Decodes a Sde message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Sde
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ComputationError.Sde;

            /**
             * Verifies a Sde message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Sde message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Sde
             */
            public static fromObject(object: { [k: string]: any }): protocol.ComputationError.Sde;

            /**
             * Creates a plain object from a Sde message. Also converts values to other types if specified.
             * @param message Sde
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.ComputationError.Sde, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Sde to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Sde
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an OperationDone. */
    interface IOperationDone {

        /** OperationDone uuid */
        uuid?: (string|null);

        /** OperationDone result */
        result?: (string|null);
    }

    /** Represents an OperationDone. */
    class OperationDone implements IOperationDone {

        /**
         * Constructs a new OperationDone.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IOperationDone);

        /** OperationDone uuid. */
        public uuid: string;

        /** OperationDone result. */
        public result: string;

        /**
         * Creates a new OperationDone instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OperationDone instance
         */
        public static create(properties?: protocol.IOperationDone): protocol.OperationDone;

        /**
         * Encodes the specified OperationDone message. Does not implicitly {@link protocol.OperationDone.verify|verify} messages.
         * @param message OperationDone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IOperationDone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OperationDone message, length delimited. Does not implicitly {@link protocol.OperationDone.verify|verify} messages.
         * @param message OperationDone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IOperationDone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OperationDone message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OperationDone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.OperationDone;

        /**
         * Decodes an OperationDone message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OperationDone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.OperationDone;

        /**
         * Verifies an OperationDone message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OperationDone message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OperationDone
         */
        public static fromObject(object: { [k: string]: any }): protocol.OperationDone;

        /**
         * Creates a plain object from an OperationDone message. Also converts values to other types if specified.
         * @param message OperationDone
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.OperationDone, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OperationDone to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OperationDone
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Ticks. */
    interface ITicks {

        /** Ticks count */
        count?: (number|Long|null);

        /** Ticks state */
        state?: (string|null);

        /** Ticks total */
        total?: (number|Long|null);
    }

    /** Represents a Ticks. */
    class Ticks implements ITicks {

        /**
         * Constructs a new Ticks.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITicks);

        /** Ticks count. */
        public count: (number|Long);

        /** Ticks state. */
        public state: string;

        /** Ticks total. */
        public total: (number|Long);

        /**
         * Creates a new Ticks instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ticks instance
         */
        public static create(properties?: protocol.ITicks): protocol.Ticks;

        /**
         * Encodes the specified Ticks message. Does not implicitly {@link protocol.Ticks.verify|verify} messages.
         * @param message Ticks message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITicks, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ticks message, length delimited. Does not implicitly {@link protocol.Ticks.verify|verify} messages.
         * @param message Ticks message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITicks, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Ticks message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ticks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Ticks;

        /**
         * Decodes a Ticks message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ticks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Ticks;

        /**
         * Verifies a Ticks message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Ticks message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ticks
         */
        public static fromObject(object: { [k: string]: any }): protocol.Ticks;

        /**
         * Creates a plain object from a Ticks message. Also converts values to other types if specified.
         * @param message Ticks
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Ticks, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ticks to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Ticks
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Notification. */
    interface INotification {

        /** Notification severity */
        severity?: (protocol.Severity|null);

        /** Notification content */
        content?: (string|null);

        /** Notification line */
        line?: (number|Long|null);
    }

    /** Represents a Notification. */
    class Notification implements INotification {

        /**
         * Constructs a new Notification.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.INotification);

        /** Notification severity. */
        public severity: protocol.Severity;

        /** Notification content. */
        public content: string;

        /** Notification line. */
        public line: (number|Long);

        /**
         * Creates a new Notification instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Notification instance
         */
        public static create(properties?: protocol.INotification): protocol.Notification;

        /**
         * Encodes the specified Notification message. Does not implicitly {@link protocol.Notification.verify|verify} messages.
         * @param message Notification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.INotification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Notification message, length delimited. Does not implicitly {@link protocol.Notification.verify|verify} messages.
         * @param message Notification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.INotification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Notification message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Notification;

        /**
         * Decodes a Notification message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Notification;

        /**
         * Verifies a Notification message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Notification message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Notification
         */
        public static fromObject(object: { [k: string]: any }): protocol.Notification;

        /**
         * Creates a plain object from a Notification message. Also converts values to other types if specified.
         * @param message Notification
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Notification, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Notification to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Notification
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CallbackEvent. */
    interface ICallbackEvent {

        /** CallbackEvent streamUpdated */
        streamUpdated?: (number|Long|null);

        /** CallbackEvent fileRead */
        fileRead?: (boolean|null);

        /** CallbackEvent searchUpdated */
        searchUpdated?: (protocol.CallbackEvent.ISearchUpdated|null);

        /** CallbackEvent indexedMapUpdated */
        indexedMapUpdated?: (protocol.CallbackEvent.IIndexedMapUpdated|null);

        /** CallbackEvent searchMapUpdated */
        searchMapUpdated?: (protocol.CallbackEvent.ISearchMapUpdated|null);

        /** CallbackEvent searchValuesUpdated */
        searchValuesUpdated?: (protocol.CallbackEvent.ISearchValuesUpdated|null);

        /** CallbackEvent attachmentsUpdated */
        attachmentsUpdated?: (protocol.CallbackEvent.IAttachmentsUpdated|null);

        /** CallbackEvent progress */
        progress?: (protocol.CallbackEvent.IProgress|null);

        /** CallbackEvent sessionError */
        sessionError?: (protocol.INativeError|null);

        /** CallbackEvent operationError */
        operationError?: (protocol.CallbackEvent.IOperationError|null);

        /** CallbackEvent operationStarted */
        operationStarted?: (string|null);

        /** CallbackEvent operationProcessing */
        operationProcessing?: (string|null);

        /** CallbackEvent operationDone */
        operationDone?: (protocol.IOperationDone|null);

        /** CallbackEvent sessionDestroyed */
        sessionDestroyed?: (boolean|null);
    }

    /** Represents a CallbackEvent. */
    class CallbackEvent implements ICallbackEvent {

        /**
         * Constructs a new CallbackEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ICallbackEvent);

        /** CallbackEvent streamUpdated. */
        public streamUpdated?: (number|Long|null);

        /** CallbackEvent fileRead. */
        public fileRead?: (boolean|null);

        /** CallbackEvent searchUpdated. */
        public searchUpdated?: (protocol.CallbackEvent.ISearchUpdated|null);

        /** CallbackEvent indexedMapUpdated. */
        public indexedMapUpdated?: (protocol.CallbackEvent.IIndexedMapUpdated|null);

        /** CallbackEvent searchMapUpdated. */
        public searchMapUpdated?: (protocol.CallbackEvent.ISearchMapUpdated|null);

        /** CallbackEvent searchValuesUpdated. */
        public searchValuesUpdated?: (protocol.CallbackEvent.ISearchValuesUpdated|null);

        /** CallbackEvent attachmentsUpdated. */
        public attachmentsUpdated?: (protocol.CallbackEvent.IAttachmentsUpdated|null);

        /** CallbackEvent progress. */
        public progress?: (protocol.CallbackEvent.IProgress|null);

        /** CallbackEvent sessionError. */
        public sessionError?: (protocol.INativeError|null);

        /** CallbackEvent operationError. */
        public operationError?: (protocol.CallbackEvent.IOperationError|null);

        /** CallbackEvent operationStarted. */
        public operationStarted?: (string|null);

        /** CallbackEvent operationProcessing. */
        public operationProcessing?: (string|null);

        /** CallbackEvent operationDone. */
        public operationDone?: (protocol.IOperationDone|null);

        /** CallbackEvent sessionDestroyed. */
        public sessionDestroyed?: (boolean|null);

        /** CallbackEvent event. */
        public event?: ("streamUpdated"|"fileRead"|"searchUpdated"|"indexedMapUpdated"|"searchMapUpdated"|"searchValuesUpdated"|"attachmentsUpdated"|"progress"|"sessionError"|"operationError"|"operationStarted"|"operationProcessing"|"operationDone"|"sessionDestroyed");

        /**
         * Creates a new CallbackEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CallbackEvent instance
         */
        public static create(properties?: protocol.ICallbackEvent): protocol.CallbackEvent;

        /**
         * Encodes the specified CallbackEvent message. Does not implicitly {@link protocol.CallbackEvent.verify|verify} messages.
         * @param message CallbackEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ICallbackEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CallbackEvent message, length delimited. Does not implicitly {@link protocol.CallbackEvent.verify|verify} messages.
         * @param message CallbackEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ICallbackEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CallbackEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CallbackEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.CallbackEvent;

        /**
         * Decodes a CallbackEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CallbackEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.CallbackEvent;

        /**
         * Verifies a CallbackEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CallbackEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CallbackEvent
         */
        public static fromObject(object: { [k: string]: any }): protocol.CallbackEvent;

        /**
         * Creates a plain object from a CallbackEvent message. Also converts values to other types if specified.
         * @param message CallbackEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.CallbackEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CallbackEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CallbackEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace CallbackEvent {

        /** Properties of a SearchUpdated. */
        interface ISearchUpdated {

            /** SearchUpdated found */
            found?: (number|Long|null);

            /** SearchUpdated stat */
            stat?: ({ [k: string]: (number|Long) }|null);
        }

        /** Represents a SearchUpdated. */
        class SearchUpdated implements ISearchUpdated {

            /**
             * Constructs a new SearchUpdated.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.CallbackEvent.ISearchUpdated);

            /** SearchUpdated found. */
            public found: (number|Long);

            /** SearchUpdated stat. */
            public stat: { [k: string]: (number|Long) };

            /**
             * Creates a new SearchUpdated instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SearchUpdated instance
             */
            public static create(properties?: protocol.CallbackEvent.ISearchUpdated): protocol.CallbackEvent.SearchUpdated;

            /**
             * Encodes the specified SearchUpdated message. Does not implicitly {@link protocol.CallbackEvent.SearchUpdated.verify|verify} messages.
             * @param message SearchUpdated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.CallbackEvent.ISearchUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SearchUpdated message, length delimited. Does not implicitly {@link protocol.CallbackEvent.SearchUpdated.verify|verify} messages.
             * @param message SearchUpdated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.CallbackEvent.ISearchUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SearchUpdated message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SearchUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.CallbackEvent.SearchUpdated;

            /**
             * Decodes a SearchUpdated message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SearchUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.CallbackEvent.SearchUpdated;

            /**
             * Verifies a SearchUpdated message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SearchUpdated message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SearchUpdated
             */
            public static fromObject(object: { [k: string]: any }): protocol.CallbackEvent.SearchUpdated;

            /**
             * Creates a plain object from a SearchUpdated message. Also converts values to other types if specified.
             * @param message SearchUpdated
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.CallbackEvent.SearchUpdated, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SearchUpdated to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SearchUpdated
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an IndexedMapUpdated. */
        interface IIndexedMapUpdated {

            /** IndexedMapUpdated len */
            len?: (number|Long|null);
        }

        /** Represents an IndexedMapUpdated. */
        class IndexedMapUpdated implements IIndexedMapUpdated {

            /**
             * Constructs a new IndexedMapUpdated.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.CallbackEvent.IIndexedMapUpdated);

            /** IndexedMapUpdated len. */
            public len: (number|Long);

            /**
             * Creates a new IndexedMapUpdated instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IndexedMapUpdated instance
             */
            public static create(properties?: protocol.CallbackEvent.IIndexedMapUpdated): protocol.CallbackEvent.IndexedMapUpdated;

            /**
             * Encodes the specified IndexedMapUpdated message. Does not implicitly {@link protocol.CallbackEvent.IndexedMapUpdated.verify|verify} messages.
             * @param message IndexedMapUpdated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.CallbackEvent.IIndexedMapUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IndexedMapUpdated message, length delimited. Does not implicitly {@link protocol.CallbackEvent.IndexedMapUpdated.verify|verify} messages.
             * @param message IndexedMapUpdated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.CallbackEvent.IIndexedMapUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IndexedMapUpdated message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IndexedMapUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.CallbackEvent.IndexedMapUpdated;

            /**
             * Decodes an IndexedMapUpdated message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IndexedMapUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.CallbackEvent.IndexedMapUpdated;

            /**
             * Verifies an IndexedMapUpdated message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an IndexedMapUpdated message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IndexedMapUpdated
             */
            public static fromObject(object: { [k: string]: any }): protocol.CallbackEvent.IndexedMapUpdated;

            /**
             * Creates a plain object from an IndexedMapUpdated message. Also converts values to other types if specified.
             * @param message IndexedMapUpdated
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.CallbackEvent.IndexedMapUpdated, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IndexedMapUpdated to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for IndexedMapUpdated
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SearchMapUpdated. */
        interface ISearchMapUpdated {

            /** SearchMapUpdated update */
            update?: (string|null);
        }

        /** Represents a SearchMapUpdated. */
        class SearchMapUpdated implements ISearchMapUpdated {

            /**
             * Constructs a new SearchMapUpdated.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.CallbackEvent.ISearchMapUpdated);

            /** SearchMapUpdated update. */
            public update: string;

            /**
             * Creates a new SearchMapUpdated instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SearchMapUpdated instance
             */
            public static create(properties?: protocol.CallbackEvent.ISearchMapUpdated): protocol.CallbackEvent.SearchMapUpdated;

            /**
             * Encodes the specified SearchMapUpdated message. Does not implicitly {@link protocol.CallbackEvent.SearchMapUpdated.verify|verify} messages.
             * @param message SearchMapUpdated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.CallbackEvent.ISearchMapUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SearchMapUpdated message, length delimited. Does not implicitly {@link protocol.CallbackEvent.SearchMapUpdated.verify|verify} messages.
             * @param message SearchMapUpdated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.CallbackEvent.ISearchMapUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SearchMapUpdated message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SearchMapUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.CallbackEvent.SearchMapUpdated;

            /**
             * Decodes a SearchMapUpdated message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SearchMapUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.CallbackEvent.SearchMapUpdated;

            /**
             * Verifies a SearchMapUpdated message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SearchMapUpdated message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SearchMapUpdated
             */
            public static fromObject(object: { [k: string]: any }): protocol.CallbackEvent.SearchMapUpdated;

            /**
             * Creates a plain object from a SearchMapUpdated message. Also converts values to other types if specified.
             * @param message SearchMapUpdated
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.CallbackEvent.SearchMapUpdated, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SearchMapUpdated to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SearchMapUpdated
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SearchValuesUpdated. */
        interface ISearchValuesUpdated {

            /** SearchValuesUpdated values */
            values?: ({ [k: string]: protocol.CallbackEvent.SearchValuesUpdated.IValueRange }|null);
        }

        /** Represents a SearchValuesUpdated. */
        class SearchValuesUpdated implements ISearchValuesUpdated {

            /**
             * Constructs a new SearchValuesUpdated.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.CallbackEvent.ISearchValuesUpdated);

            /** SearchValuesUpdated values. */
            public values: { [k: string]: protocol.CallbackEvent.SearchValuesUpdated.IValueRange };

            /**
             * Creates a new SearchValuesUpdated instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SearchValuesUpdated instance
             */
            public static create(properties?: protocol.CallbackEvent.ISearchValuesUpdated): protocol.CallbackEvent.SearchValuesUpdated;

            /**
             * Encodes the specified SearchValuesUpdated message. Does not implicitly {@link protocol.CallbackEvent.SearchValuesUpdated.verify|verify} messages.
             * @param message SearchValuesUpdated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.CallbackEvent.ISearchValuesUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SearchValuesUpdated message, length delimited. Does not implicitly {@link protocol.CallbackEvent.SearchValuesUpdated.verify|verify} messages.
             * @param message SearchValuesUpdated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.CallbackEvent.ISearchValuesUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SearchValuesUpdated message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SearchValuesUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.CallbackEvent.SearchValuesUpdated;

            /**
             * Decodes a SearchValuesUpdated message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SearchValuesUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.CallbackEvent.SearchValuesUpdated;

            /**
             * Verifies a SearchValuesUpdated message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SearchValuesUpdated message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SearchValuesUpdated
             */
            public static fromObject(object: { [k: string]: any }): protocol.CallbackEvent.SearchValuesUpdated;

            /**
             * Creates a plain object from a SearchValuesUpdated message. Also converts values to other types if specified.
             * @param message SearchValuesUpdated
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.CallbackEvent.SearchValuesUpdated, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SearchValuesUpdated to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SearchValuesUpdated
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SearchValuesUpdated {

            /** Properties of a ValueRange. */
            interface IValueRange {

                /** ValueRange min */
                min?: (number|null);

                /** ValueRange max */
                max?: (number|null);
            }

            /** Represents a ValueRange. */
            class ValueRange implements IValueRange {

                /**
                 * Constructs a new ValueRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: protocol.CallbackEvent.SearchValuesUpdated.IValueRange);

                /** ValueRange min. */
                public min: number;

                /** ValueRange max. */
                public max: number;

                /**
                 * Creates a new ValueRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ValueRange instance
                 */
                public static create(properties?: protocol.CallbackEvent.SearchValuesUpdated.IValueRange): protocol.CallbackEvent.SearchValuesUpdated.ValueRange;

                /**
                 * Encodes the specified ValueRange message. Does not implicitly {@link protocol.CallbackEvent.SearchValuesUpdated.ValueRange.verify|verify} messages.
                 * @param message ValueRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: protocol.CallbackEvent.SearchValuesUpdated.IValueRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ValueRange message, length delimited. Does not implicitly {@link protocol.CallbackEvent.SearchValuesUpdated.ValueRange.verify|verify} messages.
                 * @param message ValueRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: protocol.CallbackEvent.SearchValuesUpdated.IValueRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ValueRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ValueRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.CallbackEvent.SearchValuesUpdated.ValueRange;

                /**
                 * Decodes a ValueRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ValueRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.CallbackEvent.SearchValuesUpdated.ValueRange;

                /**
                 * Verifies a ValueRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ValueRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ValueRange
                 */
                public static fromObject(object: { [k: string]: any }): protocol.CallbackEvent.SearchValuesUpdated.ValueRange;

                /**
                 * Creates a plain object from a ValueRange message. Also converts values to other types if specified.
                 * @param message ValueRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: protocol.CallbackEvent.SearchValuesUpdated.ValueRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ValueRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ValueRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an AttachmentsUpdated. */
        interface IAttachmentsUpdated {

            /** AttachmentsUpdated len */
            len?: (number|Long|null);

            /** AttachmentsUpdated attachment */
            attachment?: (protocol.IAttachmentInfo|null);
        }

        /** Represents an AttachmentsUpdated. */
        class AttachmentsUpdated implements IAttachmentsUpdated {

            /**
             * Constructs a new AttachmentsUpdated.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.CallbackEvent.IAttachmentsUpdated);

            /** AttachmentsUpdated len. */
            public len: (number|Long);

            /** AttachmentsUpdated attachment. */
            public attachment?: (protocol.IAttachmentInfo|null);

            /**
             * Creates a new AttachmentsUpdated instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AttachmentsUpdated instance
             */
            public static create(properties?: protocol.CallbackEvent.IAttachmentsUpdated): protocol.CallbackEvent.AttachmentsUpdated;

            /**
             * Encodes the specified AttachmentsUpdated message. Does not implicitly {@link protocol.CallbackEvent.AttachmentsUpdated.verify|verify} messages.
             * @param message AttachmentsUpdated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.CallbackEvent.IAttachmentsUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AttachmentsUpdated message, length delimited. Does not implicitly {@link protocol.CallbackEvent.AttachmentsUpdated.verify|verify} messages.
             * @param message AttachmentsUpdated message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.CallbackEvent.IAttachmentsUpdated, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AttachmentsUpdated message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AttachmentsUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.CallbackEvent.AttachmentsUpdated;

            /**
             * Decodes an AttachmentsUpdated message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AttachmentsUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.CallbackEvent.AttachmentsUpdated;

            /**
             * Verifies an AttachmentsUpdated message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AttachmentsUpdated message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AttachmentsUpdated
             */
            public static fromObject(object: { [k: string]: any }): protocol.CallbackEvent.AttachmentsUpdated;

            /**
             * Creates a plain object from an AttachmentsUpdated message. Also converts values to other types if specified.
             * @param message AttachmentsUpdated
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.CallbackEvent.AttachmentsUpdated, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AttachmentsUpdated to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AttachmentsUpdated
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Progress. */
        interface IProgress {

            /** Progress uuid */
            uuid?: (string|null);

            /** Progress detail */
            detail?: (protocol.CallbackEvent.Progress.IProgressDetail|null);
        }

        /** Represents a Progress. */
        class Progress implements IProgress {

            /**
             * Constructs a new Progress.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.CallbackEvent.IProgress);

            /** Progress uuid. */
            public uuid: string;

            /** Progress detail. */
            public detail?: (protocol.CallbackEvent.Progress.IProgressDetail|null);

            /**
             * Creates a new Progress instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Progress instance
             */
            public static create(properties?: protocol.CallbackEvent.IProgress): protocol.CallbackEvent.Progress;

            /**
             * Encodes the specified Progress message. Does not implicitly {@link protocol.CallbackEvent.Progress.verify|verify} messages.
             * @param message Progress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.CallbackEvent.IProgress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Progress message, length delimited. Does not implicitly {@link protocol.CallbackEvent.Progress.verify|verify} messages.
             * @param message Progress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.CallbackEvent.IProgress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Progress message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Progress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.CallbackEvent.Progress;

            /**
             * Decodes a Progress message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Progress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.CallbackEvent.Progress;

            /**
             * Verifies a Progress message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Progress message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Progress
             */
            public static fromObject(object: { [k: string]: any }): protocol.CallbackEvent.Progress;

            /**
             * Creates a plain object from a Progress message. Also converts values to other types if specified.
             * @param message Progress
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.CallbackEvent.Progress, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Progress to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Progress
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Progress {

            /** Properties of a ProgressDetail. */
            interface IProgressDetail {

                /** ProgressDetail ticks */
                ticks?: (protocol.ITicks|null);

                /** ProgressDetail notification */
                notification?: (protocol.INotification|null);

                /** ProgressDetail stopped */
                stopped?: (boolean|null);
            }

            /** Represents a ProgressDetail. */
            class ProgressDetail implements IProgressDetail {

                /**
                 * Constructs a new ProgressDetail.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: protocol.CallbackEvent.Progress.IProgressDetail);

                /** ProgressDetail ticks. */
                public ticks?: (protocol.ITicks|null);

                /** ProgressDetail notification. */
                public notification?: (protocol.INotification|null);

                /** ProgressDetail stopped. */
                public stopped?: (boolean|null);

                /** ProgressDetail detail. */
                public detail?: ("ticks"|"notification"|"stopped");

                /**
                 * Creates a new ProgressDetail instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProgressDetail instance
                 */
                public static create(properties?: protocol.CallbackEvent.Progress.IProgressDetail): protocol.CallbackEvent.Progress.ProgressDetail;

                /**
                 * Encodes the specified ProgressDetail message. Does not implicitly {@link protocol.CallbackEvent.Progress.ProgressDetail.verify|verify} messages.
                 * @param message ProgressDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: protocol.CallbackEvent.Progress.IProgressDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProgressDetail message, length delimited. Does not implicitly {@link protocol.CallbackEvent.Progress.ProgressDetail.verify|verify} messages.
                 * @param message ProgressDetail message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: protocol.CallbackEvent.Progress.IProgressDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProgressDetail message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProgressDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.CallbackEvent.Progress.ProgressDetail;

                /**
                 * Decodes a ProgressDetail message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProgressDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.CallbackEvent.Progress.ProgressDetail;

                /**
                 * Verifies a ProgressDetail message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProgressDetail message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProgressDetail
                 */
                public static fromObject(object: { [k: string]: any }): protocol.CallbackEvent.Progress.ProgressDetail;

                /**
                 * Creates a plain object from a ProgressDetail message. Also converts values to other types if specified.
                 * @param message ProgressDetail
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: protocol.CallbackEvent.Progress.ProgressDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProgressDetail to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ProgressDetail
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an OperationError. */
        interface IOperationError {

            /** OperationError uuid */
            uuid?: (string|null);

            /** OperationError error */
            error?: (protocol.INativeError|null);
        }

        /** Represents an OperationError. */
        class OperationError implements IOperationError {

            /**
             * Constructs a new OperationError.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.CallbackEvent.IOperationError);

            /** OperationError uuid. */
            public uuid: string;

            /** OperationError error. */
            public error?: (protocol.INativeError|null);

            /**
             * Creates a new OperationError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationError instance
             */
            public static create(properties?: protocol.CallbackEvent.IOperationError): protocol.CallbackEvent.OperationError;

            /**
             * Encodes the specified OperationError message. Does not implicitly {@link protocol.CallbackEvent.OperationError.verify|verify} messages.
             * @param message OperationError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.CallbackEvent.IOperationError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationError message, length delimited. Does not implicitly {@link protocol.CallbackEvent.OperationError.verify|verify} messages.
             * @param message OperationError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.CallbackEvent.IOperationError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.CallbackEvent.OperationError;

            /**
             * Decodes an OperationError message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.CallbackEvent.OperationError;

            /**
             * Verifies an OperationError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationError message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationError
             */
            public static fromObject(object: { [k: string]: any }): protocol.CallbackEvent.OperationError;

            /**
             * Creates a plain object from an OperationError message. Also converts values to other types if specified.
             * @param message OperationError
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.CallbackEvent.OperationError, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationError to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OperationError
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a GrabbedElement. */
    interface IGrabbedElement {

        /** GrabbedElement sourceId */
        sourceId?: (number|null);

        /** GrabbedElement content */
        content?: (string|null);

        /** GrabbedElement pos */
        pos?: (number|Long|null);

        /** GrabbedElement nature */
        nature?: (number|null);
    }

    /** Represents a GrabbedElement. */
    class GrabbedElement implements IGrabbedElement {

        /**
         * Constructs a new GrabbedElement.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IGrabbedElement);

        /** GrabbedElement sourceId. */
        public sourceId: number;

        /** GrabbedElement content. */
        public content: string;

        /** GrabbedElement pos. */
        public pos: (number|Long);

        /** GrabbedElement nature. */
        public nature: number;

        /**
         * Creates a new GrabbedElement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GrabbedElement instance
         */
        public static create(properties?: protocol.IGrabbedElement): protocol.GrabbedElement;

        /**
         * Encodes the specified GrabbedElement message. Does not implicitly {@link protocol.GrabbedElement.verify|verify} messages.
         * @param message GrabbedElement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IGrabbedElement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GrabbedElement message, length delimited. Does not implicitly {@link protocol.GrabbedElement.verify|verify} messages.
         * @param message GrabbedElement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IGrabbedElement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GrabbedElement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GrabbedElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.GrabbedElement;

        /**
         * Decodes a GrabbedElement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GrabbedElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.GrabbedElement;

        /**
         * Verifies a GrabbedElement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GrabbedElement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GrabbedElement
         */
        public static fromObject(object: { [k: string]: any }): protocol.GrabbedElement;

        /**
         * Creates a plain object from a GrabbedElement message. Also converts values to other types if specified.
         * @param message GrabbedElement
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.GrabbedElement, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GrabbedElement to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GrabbedElement
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GrabbedElementList. */
    interface IGrabbedElementList {

        /** GrabbedElementList elements */
        elements?: (protocol.IGrabbedElement[]|null);
    }

    /** Represents a GrabbedElementList. */
    class GrabbedElementList implements IGrabbedElementList {

        /**
         * Constructs a new GrabbedElementList.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IGrabbedElementList);

        /** GrabbedElementList elements. */
        public elements: protocol.IGrabbedElement[];

        /**
         * Creates a new GrabbedElementList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GrabbedElementList instance
         */
        public static create(properties?: protocol.IGrabbedElementList): protocol.GrabbedElementList;

        /**
         * Encodes the specified GrabbedElementList message. Does not implicitly {@link protocol.GrabbedElementList.verify|verify} messages.
         * @param message GrabbedElementList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IGrabbedElementList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GrabbedElementList message, length delimited. Does not implicitly {@link protocol.GrabbedElementList.verify|verify} messages.
         * @param message GrabbedElementList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IGrabbedElementList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GrabbedElementList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GrabbedElementList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.GrabbedElementList;

        /**
         * Decodes a GrabbedElementList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GrabbedElementList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.GrabbedElementList;

        /**
         * Verifies a GrabbedElementList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GrabbedElementList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GrabbedElementList
         */
        public static fromObject(object: { [k: string]: any }): protocol.GrabbedElementList;

        /**
         * Creates a plain object from a GrabbedElementList message. Also converts values to other types if specified.
         * @param message GrabbedElementList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.GrabbedElementList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GrabbedElementList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GrabbedElementList
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ObserveOptions. */
    interface IObserveOptions {

        /** ObserveOptions origin */
        origin?: (protocol.IObserveOrigin|null);

        /** ObserveOptions parser */
        parser?: (protocol.IParserType|null);
    }

    /** Represents an ObserveOptions. */
    class ObserveOptions implements IObserveOptions {

        /**
         * Constructs a new ObserveOptions.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IObserveOptions);

        /** ObserveOptions origin. */
        public origin?: (protocol.IObserveOrigin|null);

        /** ObserveOptions parser. */
        public parser?: (protocol.IParserType|null);

        /**
         * Creates a new ObserveOptions instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObserveOptions instance
         */
        public static create(properties?: protocol.IObserveOptions): protocol.ObserveOptions;

        /**
         * Encodes the specified ObserveOptions message. Does not implicitly {@link protocol.ObserveOptions.verify|verify} messages.
         * @param message ObserveOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IObserveOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ObserveOptions message, length delimited. Does not implicitly {@link protocol.ObserveOptions.verify|verify} messages.
         * @param message ObserveOptions message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IObserveOptions, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObserveOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObserveOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ObserveOptions;

        /**
         * Decodes an ObserveOptions message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObserveOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ObserveOptions;

        /**
         * Verifies an ObserveOptions message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ObserveOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObserveOptions
         */
        public static fromObject(object: { [k: string]: any }): protocol.ObserveOptions;

        /**
         * Creates a plain object from an ObserveOptions message. Also converts values to other types if specified.
         * @param message ObserveOptions
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ObserveOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObserveOptions to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ObserveOptions
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DltParserSettings. */
    interface IDltParserSettings {

        /** DltParserSettings filterConfig */
        filterConfig?: (protocol.IDltFilterConfig|null);

        /** DltParserSettings fibexFilePaths */
        fibexFilePaths?: (string[]|null);

        /** DltParserSettings withStorageHeader */
        withStorageHeader?: (boolean|null);

        /** DltParserSettings tz */
        tz?: (string|null);
    }

    /** Represents a DltParserSettings. */
    class DltParserSettings implements IDltParserSettings {

        /**
         * Constructs a new DltParserSettings.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IDltParserSettings);

        /** DltParserSettings filterConfig. */
        public filterConfig?: (protocol.IDltFilterConfig|null);

        /** DltParserSettings fibexFilePaths. */
        public fibexFilePaths: string[];

        /** DltParserSettings withStorageHeader. */
        public withStorageHeader: boolean;

        /** DltParserSettings tz. */
        public tz: string;

        /**
         * Creates a new DltParserSettings instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DltParserSettings instance
         */
        public static create(properties?: protocol.IDltParserSettings): protocol.DltParserSettings;

        /**
         * Encodes the specified DltParserSettings message. Does not implicitly {@link protocol.DltParserSettings.verify|verify} messages.
         * @param message DltParserSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IDltParserSettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DltParserSettings message, length delimited. Does not implicitly {@link protocol.DltParserSettings.verify|verify} messages.
         * @param message DltParserSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IDltParserSettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DltParserSettings message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DltParserSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.DltParserSettings;

        /**
         * Decodes a DltParserSettings message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DltParserSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.DltParserSettings;

        /**
         * Verifies a DltParserSettings message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DltParserSettings message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DltParserSettings
         */
        public static fromObject(object: { [k: string]: any }): protocol.DltParserSettings;

        /**
         * Creates a plain object from a DltParserSettings message. Also converts values to other types if specified.
         * @param message DltParserSettings
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.DltParserSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DltParserSettings to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DltParserSettings
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DltFilterConfig. */
    interface IDltFilterConfig {

        /** DltFilterConfig minLogLevel */
        minLogLevel?: (number|null);

        /** DltFilterConfig appIds */
        appIds?: (string[]|null);

        /** DltFilterConfig ecuIds */
        ecuIds?: (string[]|null);

        /** DltFilterConfig contextIds */
        contextIds?: (string[]|null);

        /** DltFilterConfig appIdCount */
        appIdCount?: (number|Long|null);

        /** DltFilterConfig contextIdCount */
        contextIdCount?: (number|Long|null);
    }

    /** Represents a DltFilterConfig. */
    class DltFilterConfig implements IDltFilterConfig {

        /**
         * Constructs a new DltFilterConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IDltFilterConfig);

        /** DltFilterConfig minLogLevel. */
        public minLogLevel: number;

        /** DltFilterConfig appIds. */
        public appIds: string[];

        /** DltFilterConfig ecuIds. */
        public ecuIds: string[];

        /** DltFilterConfig contextIds. */
        public contextIds: string[];

        /** DltFilterConfig appIdCount. */
        public appIdCount: (number|Long);

        /** DltFilterConfig contextIdCount. */
        public contextIdCount: (number|Long);

        /**
         * Creates a new DltFilterConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DltFilterConfig instance
         */
        public static create(properties?: protocol.IDltFilterConfig): protocol.DltFilterConfig;

        /**
         * Encodes the specified DltFilterConfig message. Does not implicitly {@link protocol.DltFilterConfig.verify|verify} messages.
         * @param message DltFilterConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IDltFilterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DltFilterConfig message, length delimited. Does not implicitly {@link protocol.DltFilterConfig.verify|verify} messages.
         * @param message DltFilterConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IDltFilterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DltFilterConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DltFilterConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.DltFilterConfig;

        /**
         * Decodes a DltFilterConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DltFilterConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.DltFilterConfig;

        /**
         * Verifies a DltFilterConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DltFilterConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DltFilterConfig
         */
        public static fromObject(object: { [k: string]: any }): protocol.DltFilterConfig;

        /**
         * Creates a plain object from a DltFilterConfig message. Also converts values to other types if specified.
         * @param message DltFilterConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.DltFilterConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DltFilterConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DltFilterConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SomeIpParserSettings. */
    interface ISomeIpParserSettings {

        /** SomeIpParserSettings fibexFilePaths */
        fibexFilePaths?: (string[]|null);
    }

    /** Represents a SomeIpParserSettings. */
    class SomeIpParserSettings implements ISomeIpParserSettings {

        /**
         * Constructs a new SomeIpParserSettings.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISomeIpParserSettings);

        /** SomeIpParserSettings fibexFilePaths. */
        public fibexFilePaths: string[];

        /**
         * Creates a new SomeIpParserSettings instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SomeIpParserSettings instance
         */
        public static create(properties?: protocol.ISomeIpParserSettings): protocol.SomeIpParserSettings;

        /**
         * Encodes the specified SomeIpParserSettings message. Does not implicitly {@link protocol.SomeIpParserSettings.verify|verify} messages.
         * @param message SomeIpParserSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISomeIpParserSettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SomeIpParserSettings message, length delimited. Does not implicitly {@link protocol.SomeIpParserSettings.verify|verify} messages.
         * @param message SomeIpParserSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISomeIpParserSettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SomeIpParserSettings message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SomeIpParserSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SomeIpParserSettings;

        /**
         * Decodes a SomeIpParserSettings message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SomeIpParserSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SomeIpParserSettings;

        /**
         * Verifies a SomeIpParserSettings message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SomeIpParserSettings message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SomeIpParserSettings
         */
        public static fromObject(object: { [k: string]: any }): protocol.SomeIpParserSettings;

        /**
         * Creates a plain object from a SomeIpParserSettings message. Also converts values to other types if specified.
         * @param message SomeIpParserSettings
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SomeIpParserSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SomeIpParserSettings to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SomeIpParserSettings
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ProcessTransportConfig. */
    interface IProcessTransportConfig {

        /** ProcessTransportConfig cwd */
        cwd?: (string|null);

        /** ProcessTransportConfig command */
        command?: (string|null);

        /** ProcessTransportConfig envs */
        envs?: ({ [k: string]: string }|null);
    }

    /** Represents a ProcessTransportConfig. */
    class ProcessTransportConfig implements IProcessTransportConfig {

        /**
         * Constructs a new ProcessTransportConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IProcessTransportConfig);

        /** ProcessTransportConfig cwd. */
        public cwd: string;

        /** ProcessTransportConfig command. */
        public command: string;

        /** ProcessTransportConfig envs. */
        public envs: { [k: string]: string };

        /**
         * Creates a new ProcessTransportConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProcessTransportConfig instance
         */
        public static create(properties?: protocol.IProcessTransportConfig): protocol.ProcessTransportConfig;

        /**
         * Encodes the specified ProcessTransportConfig message. Does not implicitly {@link protocol.ProcessTransportConfig.verify|verify} messages.
         * @param message ProcessTransportConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IProcessTransportConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProcessTransportConfig message, length delimited. Does not implicitly {@link protocol.ProcessTransportConfig.verify|verify} messages.
         * @param message ProcessTransportConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IProcessTransportConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProcessTransportConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProcessTransportConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ProcessTransportConfig;

        /**
         * Decodes a ProcessTransportConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProcessTransportConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ProcessTransportConfig;

        /**
         * Verifies a ProcessTransportConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProcessTransportConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProcessTransportConfig
         */
        public static fromObject(object: { [k: string]: any }): protocol.ProcessTransportConfig;

        /**
         * Creates a plain object from a ProcessTransportConfig message. Also converts values to other types if specified.
         * @param message ProcessTransportConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ProcessTransportConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProcessTransportConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ProcessTransportConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SerialTransportConfig. */
    interface ISerialTransportConfig {

        /** SerialTransportConfig path */
        path?: (string|null);

        /** SerialTransportConfig baudRate */
        baudRate?: (number|null);

        /** SerialTransportConfig dataBits */
        dataBits?: (number|null);

        /** SerialTransportConfig flowControl */
        flowControl?: (number|null);

        /** SerialTransportConfig parity */
        parity?: (number|null);

        /** SerialTransportConfig stopBits */
        stopBits?: (number|null);

        /** SerialTransportConfig sendDataDelay */
        sendDataDelay?: (number|null);

        /** SerialTransportConfig exclusive */
        exclusive?: (boolean|null);
    }

    /** Represents a SerialTransportConfig. */
    class SerialTransportConfig implements ISerialTransportConfig {

        /**
         * Constructs a new SerialTransportConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISerialTransportConfig);

        /** SerialTransportConfig path. */
        public path: string;

        /** SerialTransportConfig baudRate. */
        public baudRate: number;

        /** SerialTransportConfig dataBits. */
        public dataBits: number;

        /** SerialTransportConfig flowControl. */
        public flowControl: number;

        /** SerialTransportConfig parity. */
        public parity: number;

        /** SerialTransportConfig stopBits. */
        public stopBits: number;

        /** SerialTransportConfig sendDataDelay. */
        public sendDataDelay: number;

        /** SerialTransportConfig exclusive. */
        public exclusive: boolean;

        /**
         * Creates a new SerialTransportConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SerialTransportConfig instance
         */
        public static create(properties?: protocol.ISerialTransportConfig): protocol.SerialTransportConfig;

        /**
         * Encodes the specified SerialTransportConfig message. Does not implicitly {@link protocol.SerialTransportConfig.verify|verify} messages.
         * @param message SerialTransportConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISerialTransportConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SerialTransportConfig message, length delimited. Does not implicitly {@link protocol.SerialTransportConfig.verify|verify} messages.
         * @param message SerialTransportConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISerialTransportConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SerialTransportConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SerialTransportConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SerialTransportConfig;

        /**
         * Decodes a SerialTransportConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SerialTransportConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SerialTransportConfig;

        /**
         * Verifies a SerialTransportConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SerialTransportConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SerialTransportConfig
         */
        public static fromObject(object: { [k: string]: any }): protocol.SerialTransportConfig;

        /**
         * Creates a plain object from a SerialTransportConfig message. Also converts values to other types if specified.
         * @param message SerialTransportConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SerialTransportConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SerialTransportConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SerialTransportConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TCPTransportConfig. */
    interface ITCPTransportConfig {

        /** TCPTransportConfig bindAddr */
        bindAddr?: (string|null);
    }

    /** Represents a TCPTransportConfig. */
    class TCPTransportConfig implements ITCPTransportConfig {

        /**
         * Constructs a new TCPTransportConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITCPTransportConfig);

        /** TCPTransportConfig bindAddr. */
        public bindAddr: string;

        /**
         * Creates a new TCPTransportConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TCPTransportConfig instance
         */
        public static create(properties?: protocol.ITCPTransportConfig): protocol.TCPTransportConfig;

        /**
         * Encodes the specified TCPTransportConfig message. Does not implicitly {@link protocol.TCPTransportConfig.verify|verify} messages.
         * @param message TCPTransportConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITCPTransportConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TCPTransportConfig message, length delimited. Does not implicitly {@link protocol.TCPTransportConfig.verify|verify} messages.
         * @param message TCPTransportConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITCPTransportConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TCPTransportConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TCPTransportConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.TCPTransportConfig;

        /**
         * Decodes a TCPTransportConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TCPTransportConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.TCPTransportConfig;

        /**
         * Verifies a TCPTransportConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TCPTransportConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TCPTransportConfig
         */
        public static fromObject(object: { [k: string]: any }): protocol.TCPTransportConfig;

        /**
         * Creates a plain object from a TCPTransportConfig message. Also converts values to other types if specified.
         * @param message TCPTransportConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TCPTransportConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TCPTransportConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TCPTransportConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MulticastInfo. */
    interface IMulticastInfo {

        /** MulticastInfo multiaddr */
        multiaddr?: (string|null);

        /** MulticastInfo interface */
        "interface"?: (string|null);
    }

    /** Represents a MulticastInfo. */
    class MulticastInfo implements IMulticastInfo {

        /**
         * Constructs a new MulticastInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMulticastInfo);

        /** MulticastInfo multiaddr. */
        public multiaddr: string;

        /** MulticastInfo interface. */
        public interface: string;

        /**
         * Creates a new MulticastInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MulticastInfo instance
         */
        public static create(properties?: protocol.IMulticastInfo): protocol.MulticastInfo;

        /**
         * Encodes the specified MulticastInfo message. Does not implicitly {@link protocol.MulticastInfo.verify|verify} messages.
         * @param message MulticastInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMulticastInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MulticastInfo message, length delimited. Does not implicitly {@link protocol.MulticastInfo.verify|verify} messages.
         * @param message MulticastInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMulticastInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MulticastInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MulticastInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.MulticastInfo;

        /**
         * Decodes a MulticastInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MulticastInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.MulticastInfo;

        /**
         * Verifies a MulticastInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MulticastInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MulticastInfo
         */
        public static fromObject(object: { [k: string]: any }): protocol.MulticastInfo;

        /**
         * Creates a plain object from a MulticastInfo message. Also converts values to other types if specified.
         * @param message MulticastInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.MulticastInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MulticastInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MulticastInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a UDPTransportConfig. */
    interface IUDPTransportConfig {

        /** UDPTransportConfig bindAddr */
        bindAddr?: (string|null);

        /** UDPTransportConfig multicast */
        multicast?: (protocol.IMulticastInfo[]|null);
    }

    /** Represents a UDPTransportConfig. */
    class UDPTransportConfig implements IUDPTransportConfig {

        /**
         * Constructs a new UDPTransportConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IUDPTransportConfig);

        /** UDPTransportConfig bindAddr. */
        public bindAddr: string;

        /** UDPTransportConfig multicast. */
        public multicast: protocol.IMulticastInfo[];

        /**
         * Creates a new UDPTransportConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UDPTransportConfig instance
         */
        public static create(properties?: protocol.IUDPTransportConfig): protocol.UDPTransportConfig;

        /**
         * Encodes the specified UDPTransportConfig message. Does not implicitly {@link protocol.UDPTransportConfig.verify|verify} messages.
         * @param message UDPTransportConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IUDPTransportConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UDPTransportConfig message, length delimited. Does not implicitly {@link protocol.UDPTransportConfig.verify|verify} messages.
         * @param message UDPTransportConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IUDPTransportConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UDPTransportConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UDPTransportConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.UDPTransportConfig;

        /**
         * Decodes a UDPTransportConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UDPTransportConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.UDPTransportConfig;

        /**
         * Verifies a UDPTransportConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UDPTransportConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UDPTransportConfig
         */
        public static fromObject(object: { [k: string]: any }): protocol.UDPTransportConfig;

        /**
         * Creates a plain object from a UDPTransportConfig message. Also converts values to other types if specified.
         * @param message UDPTransportConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.UDPTransportConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UDPTransportConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UDPTransportConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileFormat. */
    interface IFileFormat {
    }

    /** Represents a FileFormat. */
    class FileFormat implements IFileFormat {

        /**
         * Constructs a new FileFormat.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IFileFormat);

        /**
         * Creates a new FileFormat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileFormat instance
         */
        public static create(properties?: protocol.IFileFormat): protocol.FileFormat;

        /**
         * Encodes the specified FileFormat message. Does not implicitly {@link protocol.FileFormat.verify|verify} messages.
         * @param message FileFormat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IFileFormat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileFormat message, length delimited. Does not implicitly {@link protocol.FileFormat.verify|verify} messages.
         * @param message FileFormat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IFileFormat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileFormat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileFormat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.FileFormat;

        /**
         * Decodes a FileFormat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileFormat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.FileFormat;

        /**
         * Verifies a FileFormat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileFormat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileFormat
         */
        public static fromObject(object: { [k: string]: any }): protocol.FileFormat;

        /**
         * Creates a plain object from a FileFormat message. Also converts values to other types if specified.
         * @param message FileFormat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.FileFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileFormat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileFormat
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FileFormat {

        /** Type enum. */
        enum Type {
            PcapNG = 0,
            PcapLegacy = 1,
            Text = 2,
            Binary = 3
        }
    }

    /** Properties of a ParserType. */
    interface IParserType {

        /** ParserType dlt */
        dlt?: (protocol.IDltParserSettings|null);

        /** ParserType someIp */
        someIp?: (protocol.ISomeIpParserSettings|null);

        /** ParserType text */
        text?: (boolean|null);
    }

    /** Represents a ParserType. */
    class ParserType implements IParserType {

        /**
         * Constructs a new ParserType.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IParserType);

        /** ParserType dlt. */
        public dlt?: (protocol.IDltParserSettings|null);

        /** ParserType someIp. */
        public someIp?: (protocol.ISomeIpParserSettings|null);

        /** ParserType text. */
        public text?: (boolean|null);

        /** ParserType type. */
        public type?: ("dlt"|"someIp"|"text");

        /**
         * Creates a new ParserType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ParserType instance
         */
        public static create(properties?: protocol.IParserType): protocol.ParserType;

        /**
         * Encodes the specified ParserType message. Does not implicitly {@link protocol.ParserType.verify|verify} messages.
         * @param message ParserType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IParserType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ParserType message, length delimited. Does not implicitly {@link protocol.ParserType.verify|verify} messages.
         * @param message ParserType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IParserType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParserType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ParserType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ParserType;

        /**
         * Decodes a ParserType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ParserType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ParserType;

        /**
         * Verifies a ParserType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ParserType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ParserType
         */
        public static fromObject(object: { [k: string]: any }): protocol.ParserType;

        /**
         * Creates a plain object from a ParserType message. Also converts values to other types if specified.
         * @param message ParserType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ParserType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ParserType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ParserType
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Transport. */
    interface ITransport {

        /** Transport process */
        process?: (protocol.IProcessTransportConfig|null);

        /** Transport tcp */
        tcp?: (protocol.ITCPTransportConfig|null);

        /** Transport udp */
        udp?: (protocol.IUDPTransportConfig|null);

        /** Transport serial */
        serial?: (protocol.ISerialTransportConfig|null);
    }

    /** Represents a Transport. */
    class Transport implements ITransport {

        /**
         * Constructs a new Transport.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITransport);

        /** Transport process. */
        public process?: (protocol.IProcessTransportConfig|null);

        /** Transport tcp. */
        public tcp?: (protocol.ITCPTransportConfig|null);

        /** Transport udp. */
        public udp?: (protocol.IUDPTransportConfig|null);

        /** Transport serial. */
        public serial?: (protocol.ISerialTransportConfig|null);

        /** Transport transport. */
        public transport?: ("process"|"tcp"|"udp"|"serial");

        /**
         * Creates a new Transport instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Transport instance
         */
        public static create(properties?: protocol.ITransport): protocol.Transport;

        /**
         * Encodes the specified Transport message. Does not implicitly {@link protocol.Transport.verify|verify} messages.
         * @param message Transport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITransport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Transport message, length delimited. Does not implicitly {@link protocol.Transport.verify|verify} messages.
         * @param message Transport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITransport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Transport message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Transport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Transport;

        /**
         * Decodes a Transport message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Transport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Transport;

        /**
         * Verifies a Transport message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Transport message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Transport
         */
        public static fromObject(object: { [k: string]: any }): protocol.Transport;

        /**
         * Creates a plain object from a Transport message. Also converts values to other types if specified.
         * @param message Transport
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Transport, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Transport to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Transport
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ObserveOrigin. */
    interface IObserveOrigin {

        /** ObserveOrigin file */
        file?: (protocol.ObserveOrigin.IFile|null);

        /** ObserveOrigin concat */
        concat?: (protocol.ObserveOrigin.IConcat|null);

        /** ObserveOrigin stream */
        stream?: (protocol.ObserveOrigin.IStream|null);
    }

    /** Represents an ObserveOrigin. */
    class ObserveOrigin implements IObserveOrigin {

        /**
         * Constructs a new ObserveOrigin.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IObserveOrigin);

        /** ObserveOrigin file. */
        public file?: (protocol.ObserveOrigin.IFile|null);

        /** ObserveOrigin concat. */
        public concat?: (protocol.ObserveOrigin.IConcat|null);

        /** ObserveOrigin stream. */
        public stream?: (protocol.ObserveOrigin.IStream|null);

        /** ObserveOrigin origin. */
        public origin?: ("file"|"concat"|"stream");

        /**
         * Creates a new ObserveOrigin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObserveOrigin instance
         */
        public static create(properties?: protocol.IObserveOrigin): protocol.ObserveOrigin;

        /**
         * Encodes the specified ObserveOrigin message. Does not implicitly {@link protocol.ObserveOrigin.verify|verify} messages.
         * @param message ObserveOrigin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IObserveOrigin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ObserveOrigin message, length delimited. Does not implicitly {@link protocol.ObserveOrigin.verify|verify} messages.
         * @param message ObserveOrigin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IObserveOrigin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObserveOrigin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObserveOrigin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ObserveOrigin;

        /**
         * Decodes an ObserveOrigin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObserveOrigin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ObserveOrigin;

        /**
         * Verifies an ObserveOrigin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ObserveOrigin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObserveOrigin
         */
        public static fromObject(object: { [k: string]: any }): protocol.ObserveOrigin;

        /**
         * Creates a plain object from an ObserveOrigin message. Also converts values to other types if specified.
         * @param message ObserveOrigin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ObserveOrigin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObserveOrigin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ObserveOrigin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ObserveOrigin {

        /** Properties of a File. */
        interface IFile {

            /** File name */
            name?: (string|null);

            /** File format */
            format?: (protocol.FileFormat.Type|null);

            /** File path */
            path?: (string|null);
        }

        /** Represents a File. */
        class File implements IFile {

            /**
             * Constructs a new File.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.ObserveOrigin.IFile);

            /** File name. */
            public name: string;

            /** File format. */
            public format: protocol.FileFormat.Type;

            /** File path. */
            public path: string;

            /**
             * Creates a new File instance using the specified properties.
             * @param [properties] Properties to set
             * @returns File instance
             */
            public static create(properties?: protocol.ObserveOrigin.IFile): protocol.ObserveOrigin.File;

            /**
             * Encodes the specified File message. Does not implicitly {@link protocol.ObserveOrigin.File.verify|verify} messages.
             * @param message File message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.ObserveOrigin.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified File message, length delimited. Does not implicitly {@link protocol.ObserveOrigin.File.verify|verify} messages.
             * @param message File message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.ObserveOrigin.IFile, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a File message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns File
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ObserveOrigin.File;

            /**
             * Decodes a File message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns File
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ObserveOrigin.File;

            /**
             * Verifies a File message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a File message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns File
             */
            public static fromObject(object: { [k: string]: any }): protocol.ObserveOrigin.File;

            /**
             * Creates a plain object from a File message. Also converts values to other types if specified.
             * @param message File
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.ObserveOrigin.File, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this File to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for File
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Concat. */
        interface IConcat {

            /** Concat files */
            files?: (protocol.ObserveOrigin.IFile[]|null);
        }

        /** Represents a Concat. */
        class Concat implements IConcat {

            /**
             * Constructs a new Concat.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.ObserveOrigin.IConcat);

            /** Concat files. */
            public files: protocol.ObserveOrigin.IFile[];

            /**
             * Creates a new Concat instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Concat instance
             */
            public static create(properties?: protocol.ObserveOrigin.IConcat): protocol.ObserveOrigin.Concat;

            /**
             * Encodes the specified Concat message. Does not implicitly {@link protocol.ObserveOrigin.Concat.verify|verify} messages.
             * @param message Concat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.ObserveOrigin.IConcat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Concat message, length delimited. Does not implicitly {@link protocol.ObserveOrigin.Concat.verify|verify} messages.
             * @param message Concat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.ObserveOrigin.IConcat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Concat message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Concat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ObserveOrigin.Concat;

            /**
             * Decodes a Concat message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Concat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ObserveOrigin.Concat;

            /**
             * Verifies a Concat message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Concat message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Concat
             */
            public static fromObject(object: { [k: string]: any }): protocol.ObserveOrigin.Concat;

            /**
             * Creates a plain object from a Concat message. Also converts values to other types if specified.
             * @param message Concat
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.ObserveOrigin.Concat, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Concat to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Concat
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Stream. */
        interface IStream {

            /** Stream name */
            name?: (string|null);

            /** Stream transport */
            transport?: (protocol.ITransport|null);
        }

        /** Represents a Stream. */
        class Stream implements IStream {

            /**
             * Constructs a new Stream.
             * @param [properties] Properties to set
             */
            constructor(properties?: protocol.ObserveOrigin.IStream);

            /** Stream name. */
            public name: string;

            /** Stream transport. */
            public transport?: (protocol.ITransport|null);

            /**
             * Creates a new Stream instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Stream instance
             */
            public static create(properties?: protocol.ObserveOrigin.IStream): protocol.ObserveOrigin.Stream;

            /**
             * Encodes the specified Stream message. Does not implicitly {@link protocol.ObserveOrigin.Stream.verify|verify} messages.
             * @param message Stream message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protocol.ObserveOrigin.IStream, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Stream message, length delimited. Does not implicitly {@link protocol.ObserveOrigin.Stream.verify|verify} messages.
             * @param message Stream message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protocol.ObserveOrigin.IStream, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Stream message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Stream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ObserveOrigin.Stream;

            /**
             * Decodes a Stream message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Stream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ObserveOrigin.Stream;

            /**
             * Verifies a Stream message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Stream message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Stream
             */
            public static fromObject(object: { [k: string]: any }): protocol.ObserveOrigin.Stream;

            /**
             * Creates a plain object from a Stream message. Also converts values to other types if specified.
             * @param message Stream
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protocol.ObserveOrigin.Stream, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Stream to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Stream
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a LifecycleTransition. */
    interface ILifecycleTransition {

        /** LifecycleTransition started */
        started?: (protocol.IStarted|null);

        /** LifecycleTransition ticks */
        ticks?: (protocol.ITicksWithUuid|null);

        /** LifecycleTransition stopped */
        stopped?: (protocol.IStopped|null);
    }

    /** Represents a LifecycleTransition. */
    class LifecycleTransition implements ILifecycleTransition {

        /**
         * Constructs a new LifecycleTransition.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ILifecycleTransition);

        /** LifecycleTransition started. */
        public started?: (protocol.IStarted|null);

        /** LifecycleTransition ticks. */
        public ticks?: (protocol.ITicksWithUuid|null);

        /** LifecycleTransition stopped. */
        public stopped?: (protocol.IStopped|null);

        /** LifecycleTransition transition. */
        public transition?: ("started"|"ticks"|"stopped");

        /**
         * Creates a new LifecycleTransition instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LifecycleTransition instance
         */
        public static create(properties?: protocol.ILifecycleTransition): protocol.LifecycleTransition;

        /**
         * Encodes the specified LifecycleTransition message. Does not implicitly {@link protocol.LifecycleTransition.verify|verify} messages.
         * @param message LifecycleTransition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ILifecycleTransition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LifecycleTransition message, length delimited. Does not implicitly {@link protocol.LifecycleTransition.verify|verify} messages.
         * @param message LifecycleTransition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ILifecycleTransition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LifecycleTransition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LifecycleTransition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.LifecycleTransition;

        /**
         * Decodes a LifecycleTransition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LifecycleTransition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.LifecycleTransition;

        /**
         * Verifies a LifecycleTransition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LifecycleTransition message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LifecycleTransition
         */
        public static fromObject(object: { [k: string]: any }): protocol.LifecycleTransition;

        /**
         * Creates a plain object from a LifecycleTransition message. Also converts values to other types if specified.
         * @param message LifecycleTransition
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.LifecycleTransition, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LifecycleTransition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LifecycleTransition
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Started. */
    interface IStarted {

        /** Started uuid */
        uuid?: (string|null);

        /** Started alias */
        alias?: (string|null);
    }

    /** Represents a Started. */
    class Started implements IStarted {

        /**
         * Constructs a new Started.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IStarted);

        /** Started uuid. */
        public uuid: string;

        /** Started alias. */
        public alias: string;

        /**
         * Creates a new Started instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Started instance
         */
        public static create(properties?: protocol.IStarted): protocol.Started;

        /**
         * Encodes the specified Started message. Does not implicitly {@link protocol.Started.verify|verify} messages.
         * @param message Started message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IStarted, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Started message, length delimited. Does not implicitly {@link protocol.Started.verify|verify} messages.
         * @param message Started message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IStarted, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Started message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Started
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Started;

        /**
         * Decodes a Started message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Started
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Started;

        /**
         * Verifies a Started message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Started message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Started
         */
        public static fromObject(object: { [k: string]: any }): protocol.Started;

        /**
         * Creates a plain object from a Started message. Also converts values to other types if specified.
         * @param message Started
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Started, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Started to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Started
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a TicksWithUuid. */
    interface ITicksWithUuid {

        /** TicksWithUuid uuid */
        uuid?: (string|null);

        /** TicksWithUuid ticks */
        ticks?: (protocol.ITicks|null);
    }

    /** Represents a TicksWithUuid. */
    class TicksWithUuid implements ITicksWithUuid {

        /**
         * Constructs a new TicksWithUuid.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ITicksWithUuid);

        /** TicksWithUuid uuid. */
        public uuid: string;

        /** TicksWithUuid ticks. */
        public ticks?: (protocol.ITicks|null);

        /**
         * Creates a new TicksWithUuid instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TicksWithUuid instance
         */
        public static create(properties?: protocol.ITicksWithUuid): protocol.TicksWithUuid;

        /**
         * Encodes the specified TicksWithUuid message. Does not implicitly {@link protocol.TicksWithUuid.verify|verify} messages.
         * @param message TicksWithUuid message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ITicksWithUuid, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TicksWithUuid message, length delimited. Does not implicitly {@link protocol.TicksWithUuid.verify|verify} messages.
         * @param message TicksWithUuid message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ITicksWithUuid, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TicksWithUuid message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TicksWithUuid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.TicksWithUuid;

        /**
         * Decodes a TicksWithUuid message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TicksWithUuid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.TicksWithUuid;

        /**
         * Verifies a TicksWithUuid message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TicksWithUuid message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TicksWithUuid
         */
        public static fromObject(object: { [k: string]: any }): protocol.TicksWithUuid;

        /**
         * Creates a plain object from a TicksWithUuid message. Also converts values to other types if specified.
         * @param message TicksWithUuid
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.TicksWithUuid, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TicksWithUuid to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TicksWithUuid
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Stopped. */
    interface IStopped {

        /** Stopped uuid */
        uuid?: (string|null);
    }

    /** Represents a Stopped. */
    class Stopped implements IStopped {

        /**
         * Constructs a new Stopped.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IStopped);

        /** Stopped uuid. */
        public uuid: string;

        /**
         * Creates a new Stopped instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Stopped instance
         */
        public static create(properties?: protocol.IStopped): protocol.Stopped;

        /**
         * Encodes the specified Stopped message. Does not implicitly {@link protocol.Stopped.verify|verify} messages.
         * @param message Stopped message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IStopped, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Stopped message, length delimited. Does not implicitly {@link protocol.Stopped.verify|verify} messages.
         * @param message Stopped message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IStopped, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Stopped message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Stopped
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Stopped;

        /**
         * Decodes a Stopped message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Stopped
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Stopped;

        /**
         * Verifies a Stopped message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Stopped message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Stopped
         */
        public static fromObject(object: { [k: string]: any }): protocol.Stopped;

        /**
         * Creates a plain object from a Stopped message. Also converts values to other types if specified.
         * @param message Stopped
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Stopped, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Stopped to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Stopped
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SdeRequest. */
    interface ISdeRequest {

        /** SdeRequest writeText */
        writeText?: (string|null);

        /** SdeRequest writeBytes */
        writeBytes?: (Uint8Array|null);
    }

    /** Represents a SdeRequest. */
    class SdeRequest implements ISdeRequest {

        /**
         * Constructs a new SdeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISdeRequest);

        /** SdeRequest writeText. */
        public writeText?: (string|null);

        /** SdeRequest writeBytes. */
        public writeBytes?: (Uint8Array|null);

        /** SdeRequest request. */
        public request?: ("writeText"|"writeBytes");

        /**
         * Creates a new SdeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SdeRequest instance
         */
        public static create(properties?: protocol.ISdeRequest): protocol.SdeRequest;

        /**
         * Encodes the specified SdeRequest message. Does not implicitly {@link protocol.SdeRequest.verify|verify} messages.
         * @param message SdeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISdeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SdeRequest message, length delimited. Does not implicitly {@link protocol.SdeRequest.verify|verify} messages.
         * @param message SdeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISdeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SdeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SdeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SdeRequest;

        /**
         * Decodes a SdeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SdeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SdeRequest;

        /**
         * Verifies a SdeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SdeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SdeRequest
         */
        public static fromObject(object: { [k: string]: any }): protocol.SdeRequest;

        /**
         * Creates a plain object from a SdeRequest message. Also converts values to other types if specified.
         * @param message SdeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SdeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SdeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SdeRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SdeResponse. */
    interface ISdeResponse {

        /** SdeResponse bytes */
        bytes?: (number|Long|null);
    }

    /** Represents a SdeResponse. */
    class SdeResponse implements ISdeResponse {

        /**
         * Constructs a new SdeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISdeResponse);

        /** SdeResponse bytes. */
        public bytes: (number|Long);

        /**
         * Creates a new SdeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SdeResponse instance
         */
        public static create(properties?: protocol.ISdeResponse): protocol.SdeResponse;

        /**
         * Encodes the specified SdeResponse message. Does not implicitly {@link protocol.SdeResponse.verify|verify} messages.
         * @param message SdeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISdeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SdeResponse message, length delimited. Does not implicitly {@link protocol.SdeResponse.verify|verify} messages.
         * @param message SdeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISdeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SdeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SdeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SdeResponse;

        /**
         * Decodes a SdeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SdeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SdeResponse;

        /**
         * Verifies a SdeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SdeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SdeResponse
         */
        public static fromObject(object: { [k: string]: any }): protocol.SdeResponse;

        /**
         * Creates a plain object from a SdeResponse message. Also converts values to other types if specified.
         * @param message SdeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SdeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SdeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SdeResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
