/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.protocol = (function() {

    /**
     * Namespace protocol.
     * @exports protocol
     * @namespace
     */
    var protocol = {};

    protocol.AttachmentInfo = (function() {

        /**
         * Properties of an AttachmentInfo.
         * @memberof protocol
         * @interface IAttachmentInfo
         * @property {string|null} [uuid] AttachmentInfo uuid
         * @property {string|null} [filepath] AttachmentInfo filepath
         * @property {string|null} [name] AttachmentInfo name
         * @property {string|null} [ext] AttachmentInfo ext
         * @property {number|Long|null} [size] AttachmentInfo size
         * @property {string|null} [mime] AttachmentInfo mime
         * @property {Array.<number|Long>|null} [messages] AttachmentInfo messages
         */

        /**
         * Constructs a new AttachmentInfo.
         * @memberof protocol
         * @classdesc Represents an AttachmentInfo.
         * @implements IAttachmentInfo
         * @constructor
         * @param {protocol.IAttachmentInfo=} [properties] Properties to set
         */
        function AttachmentInfo(properties) {
            this.messages = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AttachmentInfo uuid.
         * @member {string} uuid
         * @memberof protocol.AttachmentInfo
         * @instance
         */
        AttachmentInfo.prototype.uuid = "";

        /**
         * AttachmentInfo filepath.
         * @member {string} filepath
         * @memberof protocol.AttachmentInfo
         * @instance
         */
        AttachmentInfo.prototype.filepath = "";

        /**
         * AttachmentInfo name.
         * @member {string} name
         * @memberof protocol.AttachmentInfo
         * @instance
         */
        AttachmentInfo.prototype.name = "";

        /**
         * AttachmentInfo ext.
         * @member {string} ext
         * @memberof protocol.AttachmentInfo
         * @instance
         */
        AttachmentInfo.prototype.ext = "";

        /**
         * AttachmentInfo size.
         * @member {number|Long} size
         * @memberof protocol.AttachmentInfo
         * @instance
         */
        AttachmentInfo.prototype.size = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * AttachmentInfo mime.
         * @member {string} mime
         * @memberof protocol.AttachmentInfo
         * @instance
         */
        AttachmentInfo.prototype.mime = "";

        /**
         * AttachmentInfo messages.
         * @member {Array.<number|Long>} messages
         * @memberof protocol.AttachmentInfo
         * @instance
         */
        AttachmentInfo.prototype.messages = $util.emptyArray;

        /**
         * Creates a new AttachmentInfo instance using the specified properties.
         * @function create
         * @memberof protocol.AttachmentInfo
         * @static
         * @param {protocol.IAttachmentInfo=} [properties] Properties to set
         * @returns {protocol.AttachmentInfo} AttachmentInfo instance
         */
        AttachmentInfo.create = function create(properties) {
            return new AttachmentInfo(properties);
        };

        /**
         * Encodes the specified AttachmentInfo message. Does not implicitly {@link protocol.AttachmentInfo.verify|verify} messages.
         * @function encode
         * @memberof protocol.AttachmentInfo
         * @static
         * @param {protocol.IAttachmentInfo} message AttachmentInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttachmentInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.filepath != null && Object.hasOwnProperty.call(message, "filepath"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.filepath);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.ext != null && Object.hasOwnProperty.call(message, "ext"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.ext);
            if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.size);
            if (message.mime != null && Object.hasOwnProperty.call(message, "mime"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.mime);
            if (message.messages != null && message.messages.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (var i = 0; i < message.messages.length; ++i)
                    writer.uint64(message.messages[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified AttachmentInfo message, length delimited. Does not implicitly {@link protocol.AttachmentInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.AttachmentInfo
         * @static
         * @param {protocol.IAttachmentInfo} message AttachmentInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttachmentInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AttachmentInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.AttachmentInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.AttachmentInfo} AttachmentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttachmentInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.AttachmentInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uuid = reader.string();
                        break;
                    }
                case 2: {
                        message.filepath = reader.string();
                        break;
                    }
                case 3: {
                        message.name = reader.string();
                        break;
                    }
                case 4: {
                        message.ext = reader.string();
                        break;
                    }
                case 5: {
                        message.size = reader.uint64();
                        break;
                    }
                case 6: {
                        message.mime = reader.string();
                        break;
                    }
                case 7: {
                        if (!(message.messages && message.messages.length))
                            message.messages = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.messages.push(reader.uint64());
                        } else
                            message.messages.push(reader.uint64());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AttachmentInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.AttachmentInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.AttachmentInfo} AttachmentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttachmentInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AttachmentInfo message.
         * @function verify
         * @memberof protocol.AttachmentInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AttachmentInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.filepath != null && message.hasOwnProperty("filepath"))
                if (!$util.isString(message.filepath))
                    return "filepath: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.ext != null && message.hasOwnProperty("ext"))
                if (!$util.isString(message.ext))
                    return "ext: string expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                    return "size: integer|Long expected";
            if (message.mime != null && message.hasOwnProperty("mime"))
                if (!$util.isString(message.mime))
                    return "mime: string expected";
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (var i = 0; i < message.messages.length; ++i)
                    if (!$util.isInteger(message.messages[i]) && !(message.messages[i] && $util.isInteger(message.messages[i].low) && $util.isInteger(message.messages[i].high)))
                        return "messages: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates an AttachmentInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.AttachmentInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.AttachmentInfo} AttachmentInfo
         */
        AttachmentInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.AttachmentInfo)
                return object;
            var message = new $root.protocol.AttachmentInfo();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.filepath != null)
                message.filepath = String(object.filepath);
            if (object.name != null)
                message.name = String(object.name);
            if (object.ext != null)
                message.ext = String(object.ext);
            if (object.size != null)
                if ($util.Long)
                    (message.size = $util.Long.fromValue(object.size)).unsigned = true;
                else if (typeof object.size === "string")
                    message.size = parseInt(object.size, 10);
                else if (typeof object.size === "number")
                    message.size = object.size;
                else if (typeof object.size === "object")
                    message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber(true);
            if (object.mime != null)
                message.mime = String(object.mime);
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".protocol.AttachmentInfo.messages: array expected");
                message.messages = [];
                for (var i = 0; i < object.messages.length; ++i)
                    if ($util.Long)
                        (message.messages[i] = $util.Long.fromValue(object.messages[i])).unsigned = true;
                    else if (typeof object.messages[i] === "string")
                        message.messages[i] = parseInt(object.messages[i], 10);
                    else if (typeof object.messages[i] === "number")
                        message.messages[i] = object.messages[i];
                    else if (typeof object.messages[i] === "object")
                        message.messages[i] = new $util.LongBits(object.messages[i].low >>> 0, object.messages[i].high >>> 0).toNumber(true);
            }
            return message;
        };

        /**
         * Creates a plain object from an AttachmentInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.AttachmentInfo
         * @static
         * @param {protocol.AttachmentInfo} message AttachmentInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AttachmentInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.messages = [];
            if (options.defaults) {
                object.uuid = "";
                object.filepath = "";
                object.name = "";
                object.ext = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.size = options.longs === String ? "0" : 0;
                object.mime = "";
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.filepath != null && message.hasOwnProperty("filepath"))
                object.filepath = message.filepath;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.ext != null && message.hasOwnProperty("ext"))
                object.ext = message.ext;
            if (message.size != null && message.hasOwnProperty("size"))
                if (typeof message.size === "number")
                    object.size = options.longs === String ? String(message.size) : message.size;
                else
                    object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber(true) : message.size;
            if (message.mime != null && message.hasOwnProperty("mime"))
                object.mime = message.mime;
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (var j = 0; j < message.messages.length; ++j)
                    if (typeof message.messages[j] === "number")
                        object.messages[j] = options.longs === String ? String(message.messages[j]) : message.messages[j];
                    else
                        object.messages[j] = options.longs === String ? $util.Long.prototype.toString.call(message.messages[j]) : options.longs === Number ? new $util.LongBits(message.messages[j].low >>> 0, message.messages[j].high >>> 0).toNumber(true) : message.messages[j];
            }
            return object;
        };

        /**
         * Converts this AttachmentInfo to JSON.
         * @function toJSON
         * @memberof protocol.AttachmentInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AttachmentInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AttachmentInfo
         * @function getTypeUrl
         * @memberof protocol.AttachmentInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AttachmentInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.AttachmentInfo";
        };

        return AttachmentInfo;
    })();

    protocol.AttachmentInfoList = (function() {

        /**
         * Properties of an AttachmentInfoList.
         * @memberof protocol
         * @interface IAttachmentInfoList
         * @property {Array.<protocol.IAttachmentInfo>|null} [elements] AttachmentInfoList elements
         */

        /**
         * Constructs a new AttachmentInfoList.
         * @memberof protocol
         * @classdesc Represents an AttachmentInfoList.
         * @implements IAttachmentInfoList
         * @constructor
         * @param {protocol.IAttachmentInfoList=} [properties] Properties to set
         */
        function AttachmentInfoList(properties) {
            this.elements = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AttachmentInfoList elements.
         * @member {Array.<protocol.IAttachmentInfo>} elements
         * @memberof protocol.AttachmentInfoList
         * @instance
         */
        AttachmentInfoList.prototype.elements = $util.emptyArray;

        /**
         * Creates a new AttachmentInfoList instance using the specified properties.
         * @function create
         * @memberof protocol.AttachmentInfoList
         * @static
         * @param {protocol.IAttachmentInfoList=} [properties] Properties to set
         * @returns {protocol.AttachmentInfoList} AttachmentInfoList instance
         */
        AttachmentInfoList.create = function create(properties) {
            return new AttachmentInfoList(properties);
        };

        /**
         * Encodes the specified AttachmentInfoList message. Does not implicitly {@link protocol.AttachmentInfoList.verify|verify} messages.
         * @function encode
         * @memberof protocol.AttachmentInfoList
         * @static
         * @param {protocol.IAttachmentInfoList} message AttachmentInfoList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttachmentInfoList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.elements != null && message.elements.length)
                for (var i = 0; i < message.elements.length; ++i)
                    $root.protocol.AttachmentInfo.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AttachmentInfoList message, length delimited. Does not implicitly {@link protocol.AttachmentInfoList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.AttachmentInfoList
         * @static
         * @param {protocol.IAttachmentInfoList} message AttachmentInfoList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttachmentInfoList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AttachmentInfoList message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.AttachmentInfoList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.AttachmentInfoList} AttachmentInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttachmentInfoList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.AttachmentInfoList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.protocol.AttachmentInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AttachmentInfoList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.AttachmentInfoList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.AttachmentInfoList} AttachmentInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttachmentInfoList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AttachmentInfoList message.
         * @function verify
         * @memberof protocol.AttachmentInfoList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AttachmentInfoList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.elements != null && message.hasOwnProperty("elements")) {
                if (!Array.isArray(message.elements))
                    return "elements: array expected";
                for (var i = 0; i < message.elements.length; ++i) {
                    var error = $root.protocol.AttachmentInfo.verify(message.elements[i]);
                    if (error)
                        return "elements." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AttachmentInfoList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.AttachmentInfoList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.AttachmentInfoList} AttachmentInfoList
         */
        AttachmentInfoList.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.AttachmentInfoList)
                return object;
            var message = new $root.protocol.AttachmentInfoList();
            if (object.elements) {
                if (!Array.isArray(object.elements))
                    throw TypeError(".protocol.AttachmentInfoList.elements: array expected");
                message.elements = [];
                for (var i = 0; i < object.elements.length; ++i) {
                    if (typeof object.elements[i] !== "object")
                        throw TypeError(".protocol.AttachmentInfoList.elements: object expected");
                    message.elements[i] = $root.protocol.AttachmentInfo.fromObject(object.elements[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AttachmentInfoList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.AttachmentInfoList
         * @static
         * @param {protocol.AttachmentInfoList} message AttachmentInfoList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AttachmentInfoList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.elements = [];
            if (message.elements && message.elements.length) {
                object.elements = [];
                for (var j = 0; j < message.elements.length; ++j)
                    object.elements[j] = $root.protocol.AttachmentInfo.toObject(message.elements[j], options);
            }
            return object;
        };

        /**
         * Converts this AttachmentInfoList to JSON.
         * @function toJSON
         * @memberof protocol.AttachmentInfoList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AttachmentInfoList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AttachmentInfoList
         * @function getTypeUrl
         * @memberof protocol.AttachmentInfoList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AttachmentInfoList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.AttachmentInfoList";
        };

        return AttachmentInfoList;
    })();

    protocol.Output = (function() {

        /**
         * Properties of an Output.
         * @memberof protocol
         * @interface IOutput
         * @property {string|null} [stringValue] Output stringValue
         * @property {protocol.Output.IStringVec|null} [stringVecValue] Output stringVecValue
         * @property {string|null} [optionStringValue] Output optionStringValue
         * @property {boolean|null} [boolValue] Output boolValue
         * @property {number|Long|null} [int64Value] Output int64Value
         * @property {protocol.Output.IEmpty|null} [emptyValue] Output emptyValue
         */

        /**
         * Constructs a new Output.
         * @memberof protocol
         * @classdesc Represents an Output.
         * @implements IOutput
         * @constructor
         * @param {protocol.IOutput=} [properties] Properties to set
         */
        function Output(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Output stringValue.
         * @member {string|null|undefined} stringValue
         * @memberof protocol.Output
         * @instance
         */
        Output.prototype.stringValue = null;

        /**
         * Output stringVecValue.
         * @member {protocol.Output.IStringVec|null|undefined} stringVecValue
         * @memberof protocol.Output
         * @instance
         */
        Output.prototype.stringVecValue = null;

        /**
         * Output optionStringValue.
         * @member {string|null|undefined} optionStringValue
         * @memberof protocol.Output
         * @instance
         */
        Output.prototype.optionStringValue = null;

        /**
         * Output boolValue.
         * @member {boolean|null|undefined} boolValue
         * @memberof protocol.Output
         * @instance
         */
        Output.prototype.boolValue = null;

        /**
         * Output int64Value.
         * @member {number|Long|null|undefined} int64Value
         * @memberof protocol.Output
         * @instance
         */
        Output.prototype.int64Value = null;

        /**
         * Output emptyValue.
         * @member {protocol.Output.IEmpty|null|undefined} emptyValue
         * @memberof protocol.Output
         * @instance
         */
        Output.prototype.emptyValue = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Output output.
         * @member {"stringValue"|"stringVecValue"|"optionStringValue"|"boolValue"|"int64Value"|"emptyValue"|undefined} output
         * @memberof protocol.Output
         * @instance
         */
        Object.defineProperty(Output.prototype, "output", {
            get: $util.oneOfGetter($oneOfFields = ["stringValue", "stringVecValue", "optionStringValue", "boolValue", "int64Value", "emptyValue"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Output instance using the specified properties.
         * @function create
         * @memberof protocol.Output
         * @static
         * @param {protocol.IOutput=} [properties] Properties to set
         * @returns {protocol.Output} Output instance
         */
        Output.create = function create(properties) {
            return new Output(properties);
        };

        /**
         * Encodes the specified Output message. Does not implicitly {@link protocol.Output.verify|verify} messages.
         * @function encode
         * @memberof protocol.Output
         * @static
         * @param {protocol.IOutput} message Output message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Output.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.stringValue);
            if (message.stringVecValue != null && Object.hasOwnProperty.call(message, "stringVecValue"))
                $root.protocol.Output.StringVec.encode(message.stringVecValue, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.optionStringValue != null && Object.hasOwnProperty.call(message, "optionStringValue"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.optionStringValue);
            if (message.boolValue != null && Object.hasOwnProperty.call(message, "boolValue"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolValue);
            if (message.int64Value != null && Object.hasOwnProperty.call(message, "int64Value"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.int64Value);
            if (message.emptyValue != null && Object.hasOwnProperty.call(message, "emptyValue"))
                $root.protocol.Output.Empty.encode(message.emptyValue, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Output message, length delimited. Does not implicitly {@link protocol.Output.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Output
         * @static
         * @param {protocol.IOutput} message Output message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Output.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Output message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Output
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Output} Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Output.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Output();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.stringValue = reader.string();
                        break;
                    }
                case 2: {
                        message.stringVecValue = $root.protocol.Output.StringVec.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.optionStringValue = reader.string();
                        break;
                    }
                case 4: {
                        message.boolValue = reader.bool();
                        break;
                    }
                case 5: {
                        message.int64Value = reader.int64();
                        break;
                    }
                case 6: {
                        message.emptyValue = $root.protocol.Output.Empty.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Output message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Output
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Output} Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Output.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Output message.
         * @function verify
         * @memberof protocol.Output
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Output.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                properties.output = 1;
                if (!$util.isString(message.stringValue))
                    return "stringValue: string expected";
            }
            if (message.stringVecValue != null && message.hasOwnProperty("stringVecValue")) {
                if (properties.output === 1)
                    return "output: multiple values";
                properties.output = 1;
                {
                    var error = $root.protocol.Output.StringVec.verify(message.stringVecValue);
                    if (error)
                        return "stringVecValue." + error;
                }
            }
            if (message.optionStringValue != null && message.hasOwnProperty("optionStringValue")) {
                if (properties.output === 1)
                    return "output: multiple values";
                properties.output = 1;
                if (!$util.isString(message.optionStringValue))
                    return "optionStringValue: string expected";
            }
            if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                if (properties.output === 1)
                    return "output: multiple values";
                properties.output = 1;
                if (typeof message.boolValue !== "boolean")
                    return "boolValue: boolean expected";
            }
            if (message.int64Value != null && message.hasOwnProperty("int64Value")) {
                if (properties.output === 1)
                    return "output: multiple values";
                properties.output = 1;
                if (!$util.isInteger(message.int64Value) && !(message.int64Value && $util.isInteger(message.int64Value.low) && $util.isInteger(message.int64Value.high)))
                    return "int64Value: integer|Long expected";
            }
            if (message.emptyValue != null && message.hasOwnProperty("emptyValue")) {
                if (properties.output === 1)
                    return "output: multiple values";
                properties.output = 1;
                {
                    var error = $root.protocol.Output.Empty.verify(message.emptyValue);
                    if (error)
                        return "emptyValue." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Output message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Output
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Output} Output
         */
        Output.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Output)
                return object;
            var message = new $root.protocol.Output();
            if (object.stringValue != null)
                message.stringValue = String(object.stringValue);
            if (object.stringVecValue != null) {
                if (typeof object.stringVecValue !== "object")
                    throw TypeError(".protocol.Output.stringVecValue: object expected");
                message.stringVecValue = $root.protocol.Output.StringVec.fromObject(object.stringVecValue);
            }
            if (object.optionStringValue != null)
                message.optionStringValue = String(object.optionStringValue);
            if (object.boolValue != null)
                message.boolValue = Boolean(object.boolValue);
            if (object.int64Value != null)
                if ($util.Long)
                    (message.int64Value = $util.Long.fromValue(object.int64Value)).unsigned = false;
                else if (typeof object.int64Value === "string")
                    message.int64Value = parseInt(object.int64Value, 10);
                else if (typeof object.int64Value === "number")
                    message.int64Value = object.int64Value;
                else if (typeof object.int64Value === "object")
                    message.int64Value = new $util.LongBits(object.int64Value.low >>> 0, object.int64Value.high >>> 0).toNumber();
            if (object.emptyValue != null) {
                if (typeof object.emptyValue !== "object")
                    throw TypeError(".protocol.Output.emptyValue: object expected");
                message.emptyValue = $root.protocol.Output.Empty.fromObject(object.emptyValue);
            }
            return message;
        };

        /**
         * Creates a plain object from an Output message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Output
         * @static
         * @param {protocol.Output} message Output
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Output.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                object.stringValue = message.stringValue;
                if (options.oneofs)
                    object.output = "stringValue";
            }
            if (message.stringVecValue != null && message.hasOwnProperty("stringVecValue")) {
                object.stringVecValue = $root.protocol.Output.StringVec.toObject(message.stringVecValue, options);
                if (options.oneofs)
                    object.output = "stringVecValue";
            }
            if (message.optionStringValue != null && message.hasOwnProperty("optionStringValue")) {
                object.optionStringValue = message.optionStringValue;
                if (options.oneofs)
                    object.output = "optionStringValue";
            }
            if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                object.boolValue = message.boolValue;
                if (options.oneofs)
                    object.output = "boolValue";
            }
            if (message.int64Value != null && message.hasOwnProperty("int64Value")) {
                if (typeof message.int64Value === "number")
                    object.int64Value = options.longs === String ? String(message.int64Value) : message.int64Value;
                else
                    object.int64Value = options.longs === String ? $util.Long.prototype.toString.call(message.int64Value) : options.longs === Number ? new $util.LongBits(message.int64Value.low >>> 0, message.int64Value.high >>> 0).toNumber() : message.int64Value;
                if (options.oneofs)
                    object.output = "int64Value";
            }
            if (message.emptyValue != null && message.hasOwnProperty("emptyValue")) {
                object.emptyValue = $root.protocol.Output.Empty.toObject(message.emptyValue, options);
                if (options.oneofs)
                    object.output = "emptyValue";
            }
            return object;
        };

        /**
         * Converts this Output to JSON.
         * @function toJSON
         * @memberof protocol.Output
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Output.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Output
         * @function getTypeUrl
         * @memberof protocol.Output
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Output.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.Output";
        };

        Output.StringVec = (function() {

            /**
             * Properties of a StringVec.
             * @memberof protocol.Output
             * @interface IStringVec
             * @property {Array.<string>|null} [values] StringVec values
             */

            /**
             * Constructs a new StringVec.
             * @memberof protocol.Output
             * @classdesc Represents a StringVec.
             * @implements IStringVec
             * @constructor
             * @param {protocol.Output.IStringVec=} [properties] Properties to set
             */
            function StringVec(properties) {
                this.values = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StringVec values.
             * @member {Array.<string>} values
             * @memberof protocol.Output.StringVec
             * @instance
             */
            StringVec.prototype.values = $util.emptyArray;

            /**
             * Creates a new StringVec instance using the specified properties.
             * @function create
             * @memberof protocol.Output.StringVec
             * @static
             * @param {protocol.Output.IStringVec=} [properties] Properties to set
             * @returns {protocol.Output.StringVec} StringVec instance
             */
            StringVec.create = function create(properties) {
                return new StringVec(properties);
            };

            /**
             * Encodes the specified StringVec message. Does not implicitly {@link protocol.Output.StringVec.verify|verify} messages.
             * @function encode
             * @memberof protocol.Output.StringVec
             * @static
             * @param {protocol.Output.IStringVec} message StringVec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringVec.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.values != null && message.values.length)
                    for (var i = 0; i < message.values.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.values[i]);
                return writer;
            };

            /**
             * Encodes the specified StringVec message, length delimited. Does not implicitly {@link protocol.Output.StringVec.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.Output.StringVec
             * @static
             * @param {protocol.Output.IStringVec} message StringVec message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringVec.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StringVec message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.Output.StringVec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.Output.StringVec} StringVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringVec.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Output.StringVec();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.values && message.values.length))
                                message.values = [];
                            message.values.push(reader.string());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StringVec message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.Output.StringVec
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.Output.StringVec} StringVec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringVec.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StringVec message.
             * @function verify
             * @memberof protocol.Output.StringVec
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StringVec.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.values != null && message.hasOwnProperty("values")) {
                    if (!Array.isArray(message.values))
                        return "values: array expected";
                    for (var i = 0; i < message.values.length; ++i)
                        if (!$util.isString(message.values[i]))
                            return "values: string[] expected";
                }
                return null;
            };

            /**
             * Creates a StringVec message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.Output.StringVec
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.Output.StringVec} StringVec
             */
            StringVec.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.Output.StringVec)
                    return object;
                var message = new $root.protocol.Output.StringVec();
                if (object.values) {
                    if (!Array.isArray(object.values))
                        throw TypeError(".protocol.Output.StringVec.values: array expected");
                    message.values = [];
                    for (var i = 0; i < object.values.length; ++i)
                        message.values[i] = String(object.values[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a StringVec message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.Output.StringVec
             * @static
             * @param {protocol.Output.StringVec} message StringVec
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StringVec.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.values = [];
                if (message.values && message.values.length) {
                    object.values = [];
                    for (var j = 0; j < message.values.length; ++j)
                        object.values[j] = message.values[j];
                }
                return object;
            };

            /**
             * Converts this StringVec to JSON.
             * @function toJSON
             * @memberof protocol.Output.StringVec
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StringVec.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StringVec
             * @function getTypeUrl
             * @memberof protocol.Output.StringVec
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StringVec.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.Output.StringVec";
            };

            return StringVec;
        })();

        Output.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof protocol.Output
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof protocol.Output
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {protocol.Output.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof protocol.Output.Empty
             * @static
             * @param {protocol.Output.IEmpty=} [properties] Properties to set
             * @returns {protocol.Output.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link protocol.Output.Empty.verify|verify} messages.
             * @function encode
             * @memberof protocol.Output.Empty
             * @static
             * @param {protocol.Output.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link protocol.Output.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.Output.Empty
             * @static
             * @param {protocol.Output.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.Output.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.Output.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Output.Empty();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.Output.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.Output.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof protocol.Output.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.Output.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.Output.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.Output.Empty)
                    return object;
                return new $root.protocol.Output.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.Output.Empty
             * @static
             * @param {protocol.Output.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof protocol.Output.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Empty
             * @function getTypeUrl
             * @memberof protocol.Output.Empty
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.Output.Empty";
            };

            return Empty;
        })();

        return Output;
    })();

    protocol.CommandOutcome = (function() {

        /**
         * Properties of a CommandOutcome.
         * @memberof protocol
         * @interface ICommandOutcome
         * @property {protocol.CommandOutcome.IFinished|null} [finished] CommandOutcome finished
         * @property {protocol.CommandOutcome.ICancelled|null} [cancelled] CommandOutcome cancelled
         */

        /**
         * Constructs a new CommandOutcome.
         * @memberof protocol
         * @classdesc Represents a CommandOutcome.
         * @implements ICommandOutcome
         * @constructor
         * @param {protocol.ICommandOutcome=} [properties] Properties to set
         */
        function CommandOutcome(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommandOutcome finished.
         * @member {protocol.CommandOutcome.IFinished|null|undefined} finished
         * @memberof protocol.CommandOutcome
         * @instance
         */
        CommandOutcome.prototype.finished = null;

        /**
         * CommandOutcome cancelled.
         * @member {protocol.CommandOutcome.ICancelled|null|undefined} cancelled
         * @memberof protocol.CommandOutcome
         * @instance
         */
        CommandOutcome.prototype.cancelled = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CommandOutcome outcome.
         * @member {"finished"|"cancelled"|undefined} outcome
         * @memberof protocol.CommandOutcome
         * @instance
         */
        Object.defineProperty(CommandOutcome.prototype, "outcome", {
            get: $util.oneOfGetter($oneOfFields = ["finished", "cancelled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CommandOutcome instance using the specified properties.
         * @function create
         * @memberof protocol.CommandOutcome
         * @static
         * @param {protocol.ICommandOutcome=} [properties] Properties to set
         * @returns {protocol.CommandOutcome} CommandOutcome instance
         */
        CommandOutcome.create = function create(properties) {
            return new CommandOutcome(properties);
        };

        /**
         * Encodes the specified CommandOutcome message. Does not implicitly {@link protocol.CommandOutcome.verify|verify} messages.
         * @function encode
         * @memberof protocol.CommandOutcome
         * @static
         * @param {protocol.ICommandOutcome} message CommandOutcome message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommandOutcome.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.finished != null && Object.hasOwnProperty.call(message, "finished"))
                $root.protocol.CommandOutcome.Finished.encode(message.finished, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.cancelled != null && Object.hasOwnProperty.call(message, "cancelled"))
                $root.protocol.CommandOutcome.Cancelled.encode(message.cancelled, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CommandOutcome message, length delimited. Does not implicitly {@link protocol.CommandOutcome.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.CommandOutcome
         * @static
         * @param {protocol.ICommandOutcome} message CommandOutcome message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommandOutcome.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommandOutcome message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CommandOutcome
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.CommandOutcome} CommandOutcome
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommandOutcome.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CommandOutcome();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.finished = $root.protocol.CommandOutcome.Finished.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.cancelled = $root.protocol.CommandOutcome.Cancelled.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommandOutcome message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.CommandOutcome
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.CommandOutcome} CommandOutcome
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommandOutcome.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommandOutcome message.
         * @function verify
         * @memberof protocol.CommandOutcome
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommandOutcome.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.finished != null && message.hasOwnProperty("finished")) {
                properties.outcome = 1;
                {
                    var error = $root.protocol.CommandOutcome.Finished.verify(message.finished);
                    if (error)
                        return "finished." + error;
                }
            }
            if (message.cancelled != null && message.hasOwnProperty("cancelled")) {
                if (properties.outcome === 1)
                    return "outcome: multiple values";
                properties.outcome = 1;
                {
                    var error = $root.protocol.CommandOutcome.Cancelled.verify(message.cancelled);
                    if (error)
                        return "cancelled." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CommandOutcome message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.CommandOutcome
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.CommandOutcome} CommandOutcome
         */
        CommandOutcome.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.CommandOutcome)
                return object;
            var message = new $root.protocol.CommandOutcome();
            if (object.finished != null) {
                if (typeof object.finished !== "object")
                    throw TypeError(".protocol.CommandOutcome.finished: object expected");
                message.finished = $root.protocol.CommandOutcome.Finished.fromObject(object.finished);
            }
            if (object.cancelled != null) {
                if (typeof object.cancelled !== "object")
                    throw TypeError(".protocol.CommandOutcome.cancelled: object expected");
                message.cancelled = $root.protocol.CommandOutcome.Cancelled.fromObject(object.cancelled);
            }
            return message;
        };

        /**
         * Creates a plain object from a CommandOutcome message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.CommandOutcome
         * @static
         * @param {protocol.CommandOutcome} message CommandOutcome
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommandOutcome.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.finished != null && message.hasOwnProperty("finished")) {
                object.finished = $root.protocol.CommandOutcome.Finished.toObject(message.finished, options);
                if (options.oneofs)
                    object.outcome = "finished";
            }
            if (message.cancelled != null && message.hasOwnProperty("cancelled")) {
                object.cancelled = $root.protocol.CommandOutcome.Cancelled.toObject(message.cancelled, options);
                if (options.oneofs)
                    object.outcome = "cancelled";
            }
            return object;
        };

        /**
         * Converts this CommandOutcome to JSON.
         * @function toJSON
         * @memberof protocol.CommandOutcome
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommandOutcome.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CommandOutcome
         * @function getTypeUrl
         * @memberof protocol.CommandOutcome
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CommandOutcome.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.CommandOutcome";
        };

        CommandOutcome.Finished = (function() {

            /**
             * Properties of a Finished.
             * @memberof protocol.CommandOutcome
             * @interface IFinished
             * @property {protocol.IOutput|null} [result] Finished result
             */

            /**
             * Constructs a new Finished.
             * @memberof protocol.CommandOutcome
             * @classdesc Represents a Finished.
             * @implements IFinished
             * @constructor
             * @param {protocol.CommandOutcome.IFinished=} [properties] Properties to set
             */
            function Finished(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Finished result.
             * @member {protocol.IOutput|null|undefined} result
             * @memberof protocol.CommandOutcome.Finished
             * @instance
             */
            Finished.prototype.result = null;

            /**
             * Creates a new Finished instance using the specified properties.
             * @function create
             * @memberof protocol.CommandOutcome.Finished
             * @static
             * @param {protocol.CommandOutcome.IFinished=} [properties] Properties to set
             * @returns {protocol.CommandOutcome.Finished} Finished instance
             */
            Finished.create = function create(properties) {
                return new Finished(properties);
            };

            /**
             * Encodes the specified Finished message. Does not implicitly {@link protocol.CommandOutcome.Finished.verify|verify} messages.
             * @function encode
             * @memberof protocol.CommandOutcome.Finished
             * @static
             * @param {protocol.CommandOutcome.IFinished} message Finished message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Finished.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                    $root.protocol.Output.encode(message.result, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Finished message, length delimited. Does not implicitly {@link protocol.CommandOutcome.Finished.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.CommandOutcome.Finished
             * @static
             * @param {protocol.CommandOutcome.IFinished} message Finished message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Finished.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Finished message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.CommandOutcome.Finished
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.CommandOutcome.Finished} Finished
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Finished.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CommandOutcome.Finished();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.result = $root.protocol.Output.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Finished message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.CommandOutcome.Finished
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.CommandOutcome.Finished} Finished
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Finished.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Finished message.
             * @function verify
             * @memberof protocol.CommandOutcome.Finished
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Finished.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.result != null && message.hasOwnProperty("result")) {
                    var error = $root.protocol.Output.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                return null;
            };

            /**
             * Creates a Finished message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.CommandOutcome.Finished
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.CommandOutcome.Finished} Finished
             */
            Finished.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.CommandOutcome.Finished)
                    return object;
                var message = new $root.protocol.CommandOutcome.Finished();
                if (object.result != null) {
                    if (typeof object.result !== "object")
                        throw TypeError(".protocol.CommandOutcome.Finished.result: object expected");
                    message.result = $root.protocol.Output.fromObject(object.result);
                }
                return message;
            };

            /**
             * Creates a plain object from a Finished message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.CommandOutcome.Finished
             * @static
             * @param {protocol.CommandOutcome.Finished} message Finished
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Finished.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.result = null;
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = $root.protocol.Output.toObject(message.result, options);
                return object;
            };

            /**
             * Converts this Finished to JSON.
             * @function toJSON
             * @memberof protocol.CommandOutcome.Finished
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Finished.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Finished
             * @function getTypeUrl
             * @memberof protocol.CommandOutcome.Finished
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Finished.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.CommandOutcome.Finished";
            };

            return Finished;
        })();

        CommandOutcome.Cancelled = (function() {

            /**
             * Properties of a Cancelled.
             * @memberof protocol.CommandOutcome
             * @interface ICancelled
             */

            /**
             * Constructs a new Cancelled.
             * @memberof protocol.CommandOutcome
             * @classdesc Represents a Cancelled.
             * @implements ICancelled
             * @constructor
             * @param {protocol.CommandOutcome.ICancelled=} [properties] Properties to set
             */
            function Cancelled(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Cancelled instance using the specified properties.
             * @function create
             * @memberof protocol.CommandOutcome.Cancelled
             * @static
             * @param {protocol.CommandOutcome.ICancelled=} [properties] Properties to set
             * @returns {protocol.CommandOutcome.Cancelled} Cancelled instance
             */
            Cancelled.create = function create(properties) {
                return new Cancelled(properties);
            };

            /**
             * Encodes the specified Cancelled message. Does not implicitly {@link protocol.CommandOutcome.Cancelled.verify|verify} messages.
             * @function encode
             * @memberof protocol.CommandOutcome.Cancelled
             * @static
             * @param {protocol.CommandOutcome.ICancelled} message Cancelled message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Cancelled.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Cancelled message, length delimited. Does not implicitly {@link protocol.CommandOutcome.Cancelled.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.CommandOutcome.Cancelled
             * @static
             * @param {protocol.CommandOutcome.ICancelled} message Cancelled message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Cancelled.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Cancelled message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.CommandOutcome.Cancelled
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.CommandOutcome.Cancelled} Cancelled
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Cancelled.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CommandOutcome.Cancelled();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Cancelled message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.CommandOutcome.Cancelled
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.CommandOutcome.Cancelled} Cancelled
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Cancelled.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Cancelled message.
             * @function verify
             * @memberof protocol.CommandOutcome.Cancelled
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Cancelled.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a Cancelled message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.CommandOutcome.Cancelled
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.CommandOutcome.Cancelled} Cancelled
             */
            Cancelled.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.CommandOutcome.Cancelled)
                    return object;
                return new $root.protocol.CommandOutcome.Cancelled();
            };

            /**
             * Creates a plain object from a Cancelled message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.CommandOutcome.Cancelled
             * @static
             * @param {protocol.CommandOutcome.Cancelled} message Cancelled
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Cancelled.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Cancelled to JSON.
             * @function toJSON
             * @memberof protocol.CommandOutcome.Cancelled
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Cancelled.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Cancelled
             * @function getTypeUrl
             * @memberof protocol.CommandOutcome.Cancelled
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Cancelled.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.CommandOutcome.Cancelled";
            };

            return Cancelled;
        })();

        return CommandOutcome;
    })();

    protocol.Range = (function() {

        /**
         * Properties of a Range.
         * @memberof protocol
         * @interface IRange
         * @property {number|Long|null} [start] Range start
         * @property {number|Long|null} [end] Range end
         */

        /**
         * Constructs a new Range.
         * @memberof protocol
         * @classdesc Represents a Range.
         * @implements IRange
         * @constructor
         * @param {protocol.IRange=} [properties] Properties to set
         */
        function Range(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Range start.
         * @member {number|Long} start
         * @memberof protocol.Range
         * @instance
         */
        Range.prototype.start = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Range end.
         * @member {number|Long} end
         * @memberof protocol.Range
         * @instance
         */
        Range.prototype.end = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Range instance using the specified properties.
         * @function create
         * @memberof protocol.Range
         * @static
         * @param {protocol.IRange=} [properties] Properties to set
         * @returns {protocol.Range} Range instance
         */
        Range.create = function create(properties) {
            return new Range(properties);
        };

        /**
         * Encodes the specified Range message. Does not implicitly {@link protocol.Range.verify|verify} messages.
         * @function encode
         * @memberof protocol.Range
         * @static
         * @param {protocol.IRange} message Range message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Range.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.start);
            if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.end);
            return writer;
        };

        /**
         * Encodes the specified Range message, length delimited. Does not implicitly {@link protocol.Range.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Range
         * @static
         * @param {protocol.IRange} message Range message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Range.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Range message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Range
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Range} Range
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Range.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Range();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.start = reader.uint64();
                        break;
                    }
                case 2: {
                        message.end = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Range message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Range
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Range} Range
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Range.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Range message.
         * @function verify
         * @memberof protocol.Range
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Range.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.start != null && message.hasOwnProperty("start"))
                if (!$util.isInteger(message.start) && !(message.start && $util.isInteger(message.start.low) && $util.isInteger(message.start.high)))
                    return "start: integer|Long expected";
            if (message.end != null && message.hasOwnProperty("end"))
                if (!$util.isInteger(message.end) && !(message.end && $util.isInteger(message.end.low) && $util.isInteger(message.end.high)))
                    return "end: integer|Long expected";
            return null;
        };

        /**
         * Creates a Range message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Range
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Range} Range
         */
        Range.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Range)
                return object;
            var message = new $root.protocol.Range();
            if (object.start != null)
                if ($util.Long)
                    (message.start = $util.Long.fromValue(object.start)).unsigned = true;
                else if (typeof object.start === "string")
                    message.start = parseInt(object.start, 10);
                else if (typeof object.start === "number")
                    message.start = object.start;
                else if (typeof object.start === "object")
                    message.start = new $util.LongBits(object.start.low >>> 0, object.start.high >>> 0).toNumber(true);
            if (object.end != null)
                if ($util.Long)
                    (message.end = $util.Long.fromValue(object.end)).unsigned = true;
                else if (typeof object.end === "string")
                    message.end = parseInt(object.end, 10);
                else if (typeof object.end === "number")
                    message.end = object.end;
                else if (typeof object.end === "object")
                    message.end = new $util.LongBits(object.end.low >>> 0, object.end.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Range message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Range
         * @static
         * @param {protocol.Range} message Range
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Range.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.start = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.start = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.end = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.end = options.longs === String ? "0" : 0;
            }
            if (message.start != null && message.hasOwnProperty("start"))
                if (typeof message.start === "number")
                    object.start = options.longs === String ? String(message.start) : message.start;
                else
                    object.start = options.longs === String ? $util.Long.prototype.toString.call(message.start) : options.longs === Number ? new $util.LongBits(message.start.low >>> 0, message.start.high >>> 0).toNumber(true) : message.start;
            if (message.end != null && message.hasOwnProperty("end"))
                if (typeof message.end === "number")
                    object.end = options.longs === String ? String(message.end) : message.end;
                else
                    object.end = options.longs === String ? $util.Long.prototype.toString.call(message.end) : options.longs === Number ? new $util.LongBits(message.end.low >>> 0, message.end.high >>> 0).toNumber(true) : message.end;
            return object;
        };

        /**
         * Converts this Range to JSON.
         * @function toJSON
         * @memberof protocol.Range
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Range.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Range
         * @function getTypeUrl
         * @memberof protocol.Range
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Range.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.Range";
        };

        return Range;
    })();

    protocol.RangeInclusive = (function() {

        /**
         * Properties of a RangeInclusive.
         * @memberof protocol
         * @interface IRangeInclusive
         * @property {number|Long|null} [start] RangeInclusive start
         * @property {number|Long|null} [end] RangeInclusive end
         */

        /**
         * Constructs a new RangeInclusive.
         * @memberof protocol
         * @classdesc Represents a RangeInclusive.
         * @implements IRangeInclusive
         * @constructor
         * @param {protocol.IRangeInclusive=} [properties] Properties to set
         */
        function RangeInclusive(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RangeInclusive start.
         * @member {number|Long} start
         * @memberof protocol.RangeInclusive
         * @instance
         */
        RangeInclusive.prototype.start = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * RangeInclusive end.
         * @member {number|Long} end
         * @memberof protocol.RangeInclusive
         * @instance
         */
        RangeInclusive.prototype.end = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new RangeInclusive instance using the specified properties.
         * @function create
         * @memberof protocol.RangeInclusive
         * @static
         * @param {protocol.IRangeInclusive=} [properties] Properties to set
         * @returns {protocol.RangeInclusive} RangeInclusive instance
         */
        RangeInclusive.create = function create(properties) {
            return new RangeInclusive(properties);
        };

        /**
         * Encodes the specified RangeInclusive message. Does not implicitly {@link protocol.RangeInclusive.verify|verify} messages.
         * @function encode
         * @memberof protocol.RangeInclusive
         * @static
         * @param {protocol.IRangeInclusive} message RangeInclusive message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RangeInclusive.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.start);
            if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.end);
            return writer;
        };

        /**
         * Encodes the specified RangeInclusive message, length delimited. Does not implicitly {@link protocol.RangeInclusive.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.RangeInclusive
         * @static
         * @param {protocol.IRangeInclusive} message RangeInclusive message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RangeInclusive.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RangeInclusive message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.RangeInclusive
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.RangeInclusive} RangeInclusive
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RangeInclusive.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.RangeInclusive();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.start = reader.uint64();
                        break;
                    }
                case 2: {
                        message.end = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RangeInclusive message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.RangeInclusive
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.RangeInclusive} RangeInclusive
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RangeInclusive.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RangeInclusive message.
         * @function verify
         * @memberof protocol.RangeInclusive
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RangeInclusive.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.start != null && message.hasOwnProperty("start"))
                if (!$util.isInteger(message.start) && !(message.start && $util.isInteger(message.start.low) && $util.isInteger(message.start.high)))
                    return "start: integer|Long expected";
            if (message.end != null && message.hasOwnProperty("end"))
                if (!$util.isInteger(message.end) && !(message.end && $util.isInteger(message.end.low) && $util.isInteger(message.end.high)))
                    return "end: integer|Long expected";
            return null;
        };

        /**
         * Creates a RangeInclusive message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.RangeInclusive
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.RangeInclusive} RangeInclusive
         */
        RangeInclusive.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.RangeInclusive)
                return object;
            var message = new $root.protocol.RangeInclusive();
            if (object.start != null)
                if ($util.Long)
                    (message.start = $util.Long.fromValue(object.start)).unsigned = true;
                else if (typeof object.start === "string")
                    message.start = parseInt(object.start, 10);
                else if (typeof object.start === "number")
                    message.start = object.start;
                else if (typeof object.start === "object")
                    message.start = new $util.LongBits(object.start.low >>> 0, object.start.high >>> 0).toNumber(true);
            if (object.end != null)
                if ($util.Long)
                    (message.end = $util.Long.fromValue(object.end)).unsigned = true;
                else if (typeof object.end === "string")
                    message.end = parseInt(object.end, 10);
                else if (typeof object.end === "number")
                    message.end = object.end;
                else if (typeof object.end === "object")
                    message.end = new $util.LongBits(object.end.low >>> 0, object.end.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a RangeInclusive message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.RangeInclusive
         * @static
         * @param {protocol.RangeInclusive} message RangeInclusive
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RangeInclusive.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.start = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.start = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.end = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.end = options.longs === String ? "0" : 0;
            }
            if (message.start != null && message.hasOwnProperty("start"))
                if (typeof message.start === "number")
                    object.start = options.longs === String ? String(message.start) : message.start;
                else
                    object.start = options.longs === String ? $util.Long.prototype.toString.call(message.start) : options.longs === Number ? new $util.LongBits(message.start.low >>> 0, message.start.high >>> 0).toNumber(true) : message.start;
            if (message.end != null && message.hasOwnProperty("end"))
                if (typeof message.end === "number")
                    object.end = options.longs === String ? String(message.end) : message.end;
                else
                    object.end = options.longs === String ? $util.Long.prototype.toString.call(message.end) : options.longs === Number ? new $util.LongBits(message.end.low >>> 0, message.end.high >>> 0).toNumber(true) : message.end;
            return object;
        };

        /**
         * Converts this RangeInclusive to JSON.
         * @function toJSON
         * @memberof protocol.RangeInclusive
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RangeInclusive.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RangeInclusive
         * @function getTypeUrl
         * @memberof protocol.RangeInclusive
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RangeInclusive.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.RangeInclusive";
        };

        return RangeInclusive;
    })();

    protocol.RangeInclusiveList = (function() {

        /**
         * Properties of a RangeInclusiveList.
         * @memberof protocol
         * @interface IRangeInclusiveList
         * @property {Array.<protocol.IRangeInclusive>|null} [elements] RangeInclusiveList elements
         */

        /**
         * Constructs a new RangeInclusiveList.
         * @memberof protocol
         * @classdesc Represents a RangeInclusiveList.
         * @implements IRangeInclusiveList
         * @constructor
         * @param {protocol.IRangeInclusiveList=} [properties] Properties to set
         */
        function RangeInclusiveList(properties) {
            this.elements = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RangeInclusiveList elements.
         * @member {Array.<protocol.IRangeInclusive>} elements
         * @memberof protocol.RangeInclusiveList
         * @instance
         */
        RangeInclusiveList.prototype.elements = $util.emptyArray;

        /**
         * Creates a new RangeInclusiveList instance using the specified properties.
         * @function create
         * @memberof protocol.RangeInclusiveList
         * @static
         * @param {protocol.IRangeInclusiveList=} [properties] Properties to set
         * @returns {protocol.RangeInclusiveList} RangeInclusiveList instance
         */
        RangeInclusiveList.create = function create(properties) {
            return new RangeInclusiveList(properties);
        };

        /**
         * Encodes the specified RangeInclusiveList message. Does not implicitly {@link protocol.RangeInclusiveList.verify|verify} messages.
         * @function encode
         * @memberof protocol.RangeInclusiveList
         * @static
         * @param {protocol.IRangeInclusiveList} message RangeInclusiveList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RangeInclusiveList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.elements != null && message.elements.length)
                for (var i = 0; i < message.elements.length; ++i)
                    $root.protocol.RangeInclusive.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RangeInclusiveList message, length delimited. Does not implicitly {@link protocol.RangeInclusiveList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.RangeInclusiveList
         * @static
         * @param {protocol.IRangeInclusiveList} message RangeInclusiveList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RangeInclusiveList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RangeInclusiveList message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.RangeInclusiveList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.RangeInclusiveList} RangeInclusiveList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RangeInclusiveList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.RangeInclusiveList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.protocol.RangeInclusive.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RangeInclusiveList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.RangeInclusiveList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.RangeInclusiveList} RangeInclusiveList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RangeInclusiveList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RangeInclusiveList message.
         * @function verify
         * @memberof protocol.RangeInclusiveList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RangeInclusiveList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.elements != null && message.hasOwnProperty("elements")) {
                if (!Array.isArray(message.elements))
                    return "elements: array expected";
                for (var i = 0; i < message.elements.length; ++i) {
                    var error = $root.protocol.RangeInclusive.verify(message.elements[i]);
                    if (error)
                        return "elements." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RangeInclusiveList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.RangeInclusiveList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.RangeInclusiveList} RangeInclusiveList
         */
        RangeInclusiveList.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.RangeInclusiveList)
                return object;
            var message = new $root.protocol.RangeInclusiveList();
            if (object.elements) {
                if (!Array.isArray(object.elements))
                    throw TypeError(".protocol.RangeInclusiveList.elements: array expected");
                message.elements = [];
                for (var i = 0; i < object.elements.length; ++i) {
                    if (typeof object.elements[i] !== "object")
                        throw TypeError(".protocol.RangeInclusiveList.elements: object expected");
                    message.elements[i] = $root.protocol.RangeInclusive.fromObject(object.elements[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RangeInclusiveList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.RangeInclusiveList
         * @static
         * @param {protocol.RangeInclusiveList} message RangeInclusiveList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RangeInclusiveList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.elements = [];
            if (message.elements && message.elements.length) {
                object.elements = [];
                for (var j = 0; j < message.elements.length; ++j)
                    object.elements[j] = $root.protocol.RangeInclusive.toObject(message.elements[j], options);
            }
            return object;
        };

        /**
         * Converts this RangeInclusiveList to JSON.
         * @function toJSON
         * @memberof protocol.RangeInclusiveList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RangeInclusiveList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RangeInclusiveList
         * @function getTypeUrl
         * @memberof protocol.RangeInclusiveList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RangeInclusiveList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.RangeInclusiveList";
        };

        return RangeInclusiveList;
    })();

    protocol.GrabError = (function() {

        /**
         * Properties of a GrabError.
         * @memberof protocol
         * @interface IGrabError
         * @property {protocol.GrabError.IConfig|null} [config] GrabError config
         * @property {protocol.GrabError.ICommunication|null} [communication] GrabError communication
         * @property {protocol.GrabError.IIoOperation|null} [ioOperation] GrabError ioOperation
         * @property {protocol.GrabError.IInvalidRange|null} [invalidRange] GrabError invalidRange
         * @property {protocol.GrabError.IInterrupted|null} [interrupted] GrabError interrupted
         * @property {protocol.GrabError.INotInitialize|null} [notInitialize] GrabError notInitialize
         * @property {protocol.GrabError.IUnsupported|null} [unsupported] GrabError unsupported
         */

        /**
         * Constructs a new GrabError.
         * @memberof protocol
         * @classdesc Represents a GrabError.
         * @implements IGrabError
         * @constructor
         * @param {protocol.IGrabError=} [properties] Properties to set
         */
        function GrabError(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GrabError config.
         * @member {protocol.GrabError.IConfig|null|undefined} config
         * @memberof protocol.GrabError
         * @instance
         */
        GrabError.prototype.config = null;

        /**
         * GrabError communication.
         * @member {protocol.GrabError.ICommunication|null|undefined} communication
         * @memberof protocol.GrabError
         * @instance
         */
        GrabError.prototype.communication = null;

        /**
         * GrabError ioOperation.
         * @member {protocol.GrabError.IIoOperation|null|undefined} ioOperation
         * @memberof protocol.GrabError
         * @instance
         */
        GrabError.prototype.ioOperation = null;

        /**
         * GrabError invalidRange.
         * @member {protocol.GrabError.IInvalidRange|null|undefined} invalidRange
         * @memberof protocol.GrabError
         * @instance
         */
        GrabError.prototype.invalidRange = null;

        /**
         * GrabError interrupted.
         * @member {protocol.GrabError.IInterrupted|null|undefined} interrupted
         * @memberof protocol.GrabError
         * @instance
         */
        GrabError.prototype.interrupted = null;

        /**
         * GrabError notInitialize.
         * @member {protocol.GrabError.INotInitialize|null|undefined} notInitialize
         * @memberof protocol.GrabError
         * @instance
         */
        GrabError.prototype.notInitialize = null;

        /**
         * GrabError unsupported.
         * @member {protocol.GrabError.IUnsupported|null|undefined} unsupported
         * @memberof protocol.GrabError
         * @instance
         */
        GrabError.prototype.unsupported = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * GrabError error.
         * @member {"config"|"communication"|"ioOperation"|"invalidRange"|"interrupted"|"notInitialize"|"unsupported"|undefined} error
         * @memberof protocol.GrabError
         * @instance
         */
        Object.defineProperty(GrabError.prototype, "error", {
            get: $util.oneOfGetter($oneOfFields = ["config", "communication", "ioOperation", "invalidRange", "interrupted", "notInitialize", "unsupported"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new GrabError instance using the specified properties.
         * @function create
         * @memberof protocol.GrabError
         * @static
         * @param {protocol.IGrabError=} [properties] Properties to set
         * @returns {protocol.GrabError} GrabError instance
         */
        GrabError.create = function create(properties) {
            return new GrabError(properties);
        };

        /**
         * Encodes the specified GrabError message. Does not implicitly {@link protocol.GrabError.verify|verify} messages.
         * @function encode
         * @memberof protocol.GrabError
         * @static
         * @param {protocol.IGrabError} message GrabError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GrabError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                $root.protocol.GrabError.Config.encode(message.config, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.communication != null && Object.hasOwnProperty.call(message, "communication"))
                $root.protocol.GrabError.Communication.encode(message.communication, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.ioOperation != null && Object.hasOwnProperty.call(message, "ioOperation"))
                $root.protocol.GrabError.IoOperation.encode(message.ioOperation, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.invalidRange != null && Object.hasOwnProperty.call(message, "invalidRange"))
                $root.protocol.GrabError.InvalidRange.encode(message.invalidRange, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.interrupted != null && Object.hasOwnProperty.call(message, "interrupted"))
                $root.protocol.GrabError.Interrupted.encode(message.interrupted, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.notInitialize != null && Object.hasOwnProperty.call(message, "notInitialize"))
                $root.protocol.GrabError.NotInitialize.encode(message.notInitialize, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.unsupported != null && Object.hasOwnProperty.call(message, "unsupported"))
                $root.protocol.GrabError.Unsupported.encode(message.unsupported, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GrabError message, length delimited. Does not implicitly {@link protocol.GrabError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GrabError
         * @static
         * @param {protocol.IGrabError} message GrabError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GrabError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GrabError message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GrabError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GrabError} GrabError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GrabError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GrabError();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.config = $root.protocol.GrabError.Config.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.communication = $root.protocol.GrabError.Communication.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.ioOperation = $root.protocol.GrabError.IoOperation.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.invalidRange = $root.protocol.GrabError.InvalidRange.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.interrupted = $root.protocol.GrabError.Interrupted.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.notInitialize = $root.protocol.GrabError.NotInitialize.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.unsupported = $root.protocol.GrabError.Unsupported.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GrabError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.GrabError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GrabError} GrabError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GrabError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GrabError message.
         * @function verify
         * @memberof protocol.GrabError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GrabError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.config != null && message.hasOwnProperty("config")) {
                properties.error = 1;
                {
                    var error = $root.protocol.GrabError.Config.verify(message.config);
                    if (error)
                        return "config." + error;
                }
            }
            if (message.communication != null && message.hasOwnProperty("communication")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.GrabError.Communication.verify(message.communication);
                    if (error)
                        return "communication." + error;
                }
            }
            if (message.ioOperation != null && message.hasOwnProperty("ioOperation")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.GrabError.IoOperation.verify(message.ioOperation);
                    if (error)
                        return "ioOperation." + error;
                }
            }
            if (message.invalidRange != null && message.hasOwnProperty("invalidRange")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.GrabError.InvalidRange.verify(message.invalidRange);
                    if (error)
                        return "invalidRange." + error;
                }
            }
            if (message.interrupted != null && message.hasOwnProperty("interrupted")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.GrabError.Interrupted.verify(message.interrupted);
                    if (error)
                        return "interrupted." + error;
                }
            }
            if (message.notInitialize != null && message.hasOwnProperty("notInitialize")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.GrabError.NotInitialize.verify(message.notInitialize);
                    if (error)
                        return "notInitialize." + error;
                }
            }
            if (message.unsupported != null && message.hasOwnProperty("unsupported")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.GrabError.Unsupported.verify(message.unsupported);
                    if (error)
                        return "unsupported." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GrabError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GrabError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GrabError} GrabError
         */
        GrabError.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GrabError)
                return object;
            var message = new $root.protocol.GrabError();
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".protocol.GrabError.config: object expected");
                message.config = $root.protocol.GrabError.Config.fromObject(object.config);
            }
            if (object.communication != null) {
                if (typeof object.communication !== "object")
                    throw TypeError(".protocol.GrabError.communication: object expected");
                message.communication = $root.protocol.GrabError.Communication.fromObject(object.communication);
            }
            if (object.ioOperation != null) {
                if (typeof object.ioOperation !== "object")
                    throw TypeError(".protocol.GrabError.ioOperation: object expected");
                message.ioOperation = $root.protocol.GrabError.IoOperation.fromObject(object.ioOperation);
            }
            if (object.invalidRange != null) {
                if (typeof object.invalidRange !== "object")
                    throw TypeError(".protocol.GrabError.invalidRange: object expected");
                message.invalidRange = $root.protocol.GrabError.InvalidRange.fromObject(object.invalidRange);
            }
            if (object.interrupted != null) {
                if (typeof object.interrupted !== "object")
                    throw TypeError(".protocol.GrabError.interrupted: object expected");
                message.interrupted = $root.protocol.GrabError.Interrupted.fromObject(object.interrupted);
            }
            if (object.notInitialize != null) {
                if (typeof object.notInitialize !== "object")
                    throw TypeError(".protocol.GrabError.notInitialize: object expected");
                message.notInitialize = $root.protocol.GrabError.NotInitialize.fromObject(object.notInitialize);
            }
            if (object.unsupported != null) {
                if (typeof object.unsupported !== "object")
                    throw TypeError(".protocol.GrabError.unsupported: object expected");
                message.unsupported = $root.protocol.GrabError.Unsupported.fromObject(object.unsupported);
            }
            return message;
        };

        /**
         * Creates a plain object from a GrabError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GrabError
         * @static
         * @param {protocol.GrabError} message GrabError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GrabError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.config != null && message.hasOwnProperty("config")) {
                object.config = $root.protocol.GrabError.Config.toObject(message.config, options);
                if (options.oneofs)
                    object.error = "config";
            }
            if (message.communication != null && message.hasOwnProperty("communication")) {
                object.communication = $root.protocol.GrabError.Communication.toObject(message.communication, options);
                if (options.oneofs)
                    object.error = "communication";
            }
            if (message.ioOperation != null && message.hasOwnProperty("ioOperation")) {
                object.ioOperation = $root.protocol.GrabError.IoOperation.toObject(message.ioOperation, options);
                if (options.oneofs)
                    object.error = "ioOperation";
            }
            if (message.invalidRange != null && message.hasOwnProperty("invalidRange")) {
                object.invalidRange = $root.protocol.GrabError.InvalidRange.toObject(message.invalidRange, options);
                if (options.oneofs)
                    object.error = "invalidRange";
            }
            if (message.interrupted != null && message.hasOwnProperty("interrupted")) {
                object.interrupted = $root.protocol.GrabError.Interrupted.toObject(message.interrupted, options);
                if (options.oneofs)
                    object.error = "interrupted";
            }
            if (message.notInitialize != null && message.hasOwnProperty("notInitialize")) {
                object.notInitialize = $root.protocol.GrabError.NotInitialize.toObject(message.notInitialize, options);
                if (options.oneofs)
                    object.error = "notInitialize";
            }
            if (message.unsupported != null && message.hasOwnProperty("unsupported")) {
                object.unsupported = $root.protocol.GrabError.Unsupported.toObject(message.unsupported, options);
                if (options.oneofs)
                    object.error = "unsupported";
            }
            return object;
        };

        /**
         * Converts this GrabError to JSON.
         * @function toJSON
         * @memberof protocol.GrabError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GrabError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GrabError
         * @function getTypeUrl
         * @memberof protocol.GrabError
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GrabError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GrabError";
        };

        GrabError.Config = (function() {

            /**
             * Properties of a Config.
             * @memberof protocol.GrabError
             * @interface IConfig
             * @property {string|null} [message] Config message
             */

            /**
             * Constructs a new Config.
             * @memberof protocol.GrabError
             * @classdesc Represents a Config.
             * @implements IConfig
             * @constructor
             * @param {protocol.GrabError.IConfig=} [properties] Properties to set
             */
            function Config(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Config message.
             * @member {string} message
             * @memberof protocol.GrabError.Config
             * @instance
             */
            Config.prototype.message = "";

            /**
             * Creates a new Config instance using the specified properties.
             * @function create
             * @memberof protocol.GrabError.Config
             * @static
             * @param {protocol.GrabError.IConfig=} [properties] Properties to set
             * @returns {protocol.GrabError.Config} Config instance
             */
            Config.create = function create(properties) {
                return new Config(properties);
            };

            /**
             * Encodes the specified Config message. Does not implicitly {@link protocol.GrabError.Config.verify|verify} messages.
             * @function encode
             * @memberof protocol.GrabError.Config
             * @static
             * @param {protocol.GrabError.IConfig} message Config message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Config.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Config message, length delimited. Does not implicitly {@link protocol.GrabError.Config.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.GrabError.Config
             * @static
             * @param {protocol.GrabError.IConfig} message Config message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Config.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Config message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.GrabError.Config
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.GrabError.Config} Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Config.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GrabError.Config();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Config message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.GrabError.Config
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.GrabError.Config} Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Config.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Config message.
             * @function verify
             * @memberof protocol.GrabError.Config
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Config.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a Config message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.GrabError.Config
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.GrabError.Config} Config
             */
            Config.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.GrabError.Config)
                    return object;
                var message = new $root.protocol.GrabError.Config();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a Config message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.GrabError.Config
             * @static
             * @param {protocol.GrabError.Config} message Config
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Config.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Config to JSON.
             * @function toJSON
             * @memberof protocol.GrabError.Config
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Config.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Config
             * @function getTypeUrl
             * @memberof protocol.GrabError.Config
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Config.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.GrabError.Config";
            };

            return Config;
        })();

        GrabError.Communication = (function() {

            /**
             * Properties of a Communication.
             * @memberof protocol.GrabError
             * @interface ICommunication
             * @property {string|null} [message] Communication message
             */

            /**
             * Constructs a new Communication.
             * @memberof protocol.GrabError
             * @classdesc Represents a Communication.
             * @implements ICommunication
             * @constructor
             * @param {protocol.GrabError.ICommunication=} [properties] Properties to set
             */
            function Communication(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Communication message.
             * @member {string} message
             * @memberof protocol.GrabError.Communication
             * @instance
             */
            Communication.prototype.message = "";

            /**
             * Creates a new Communication instance using the specified properties.
             * @function create
             * @memberof protocol.GrabError.Communication
             * @static
             * @param {protocol.GrabError.ICommunication=} [properties] Properties to set
             * @returns {protocol.GrabError.Communication} Communication instance
             */
            Communication.create = function create(properties) {
                return new Communication(properties);
            };

            /**
             * Encodes the specified Communication message. Does not implicitly {@link protocol.GrabError.Communication.verify|verify} messages.
             * @function encode
             * @memberof protocol.GrabError.Communication
             * @static
             * @param {protocol.GrabError.ICommunication} message Communication message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Communication.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Communication message, length delimited. Does not implicitly {@link protocol.GrabError.Communication.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.GrabError.Communication
             * @static
             * @param {protocol.GrabError.ICommunication} message Communication message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Communication.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Communication message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.GrabError.Communication
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.GrabError.Communication} Communication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Communication.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GrabError.Communication();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Communication message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.GrabError.Communication
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.GrabError.Communication} Communication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Communication.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Communication message.
             * @function verify
             * @memberof protocol.GrabError.Communication
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Communication.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a Communication message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.GrabError.Communication
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.GrabError.Communication} Communication
             */
            Communication.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.GrabError.Communication)
                    return object;
                var message = new $root.protocol.GrabError.Communication();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a Communication message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.GrabError.Communication
             * @static
             * @param {protocol.GrabError.Communication} message Communication
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Communication.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Communication to JSON.
             * @function toJSON
             * @memberof protocol.GrabError.Communication
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Communication.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Communication
             * @function getTypeUrl
             * @memberof protocol.GrabError.Communication
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Communication.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.GrabError.Communication";
            };

            return Communication;
        })();

        GrabError.IoOperation = (function() {

            /**
             * Properties of an IoOperation.
             * @memberof protocol.GrabError
             * @interface IIoOperation
             * @property {string|null} [message] IoOperation message
             */

            /**
             * Constructs a new IoOperation.
             * @memberof protocol.GrabError
             * @classdesc Represents an IoOperation.
             * @implements IIoOperation
             * @constructor
             * @param {protocol.GrabError.IIoOperation=} [properties] Properties to set
             */
            function IoOperation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IoOperation message.
             * @member {string} message
             * @memberof protocol.GrabError.IoOperation
             * @instance
             */
            IoOperation.prototype.message = "";

            /**
             * Creates a new IoOperation instance using the specified properties.
             * @function create
             * @memberof protocol.GrabError.IoOperation
             * @static
             * @param {protocol.GrabError.IIoOperation=} [properties] Properties to set
             * @returns {protocol.GrabError.IoOperation} IoOperation instance
             */
            IoOperation.create = function create(properties) {
                return new IoOperation(properties);
            };

            /**
             * Encodes the specified IoOperation message. Does not implicitly {@link protocol.GrabError.IoOperation.verify|verify} messages.
             * @function encode
             * @memberof protocol.GrabError.IoOperation
             * @static
             * @param {protocol.GrabError.IIoOperation} message IoOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IoOperation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified IoOperation message, length delimited. Does not implicitly {@link protocol.GrabError.IoOperation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.GrabError.IoOperation
             * @static
             * @param {protocol.GrabError.IIoOperation} message IoOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IoOperation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an IoOperation message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.GrabError.IoOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.GrabError.IoOperation} IoOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IoOperation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GrabError.IoOperation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an IoOperation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.GrabError.IoOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.GrabError.IoOperation} IoOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IoOperation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an IoOperation message.
             * @function verify
             * @memberof protocol.GrabError.IoOperation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IoOperation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates an IoOperation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.GrabError.IoOperation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.GrabError.IoOperation} IoOperation
             */
            IoOperation.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.GrabError.IoOperation)
                    return object;
                var message = new $root.protocol.GrabError.IoOperation();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from an IoOperation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.GrabError.IoOperation
             * @static
             * @param {protocol.GrabError.IoOperation} message IoOperation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IoOperation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this IoOperation to JSON.
             * @function toJSON
             * @memberof protocol.GrabError.IoOperation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IoOperation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for IoOperation
             * @function getTypeUrl
             * @memberof protocol.GrabError.IoOperation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            IoOperation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.GrabError.IoOperation";
            };

            return IoOperation;
        })();

        GrabError.InvalidRange = (function() {

            /**
             * Properties of an InvalidRange.
             * @memberof protocol.GrabError
             * @interface IInvalidRange
             * @property {protocol.IRangeInclusive|null} [range] InvalidRange range
             * @property {string|null} [context] InvalidRange context
             */

            /**
             * Constructs a new InvalidRange.
             * @memberof protocol.GrabError
             * @classdesc Represents an InvalidRange.
             * @implements IInvalidRange
             * @constructor
             * @param {protocol.GrabError.IInvalidRange=} [properties] Properties to set
             */
            function InvalidRange(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InvalidRange range.
             * @member {protocol.IRangeInclusive|null|undefined} range
             * @memberof protocol.GrabError.InvalidRange
             * @instance
             */
            InvalidRange.prototype.range = null;

            /**
             * InvalidRange context.
             * @member {string} context
             * @memberof protocol.GrabError.InvalidRange
             * @instance
             */
            InvalidRange.prototype.context = "";

            /**
             * Creates a new InvalidRange instance using the specified properties.
             * @function create
             * @memberof protocol.GrabError.InvalidRange
             * @static
             * @param {protocol.GrabError.IInvalidRange=} [properties] Properties to set
             * @returns {protocol.GrabError.InvalidRange} InvalidRange instance
             */
            InvalidRange.create = function create(properties) {
                return new InvalidRange(properties);
            };

            /**
             * Encodes the specified InvalidRange message. Does not implicitly {@link protocol.GrabError.InvalidRange.verify|verify} messages.
             * @function encode
             * @memberof protocol.GrabError.InvalidRange
             * @static
             * @param {protocol.GrabError.IInvalidRange} message InvalidRange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InvalidRange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.range != null && Object.hasOwnProperty.call(message, "range"))
                    $root.protocol.RangeInclusive.encode(message.range, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.context != null && Object.hasOwnProperty.call(message, "context"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.context);
                return writer;
            };

            /**
             * Encodes the specified InvalidRange message, length delimited. Does not implicitly {@link protocol.GrabError.InvalidRange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.GrabError.InvalidRange
             * @static
             * @param {protocol.GrabError.IInvalidRange} message InvalidRange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InvalidRange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InvalidRange message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.GrabError.InvalidRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.GrabError.InvalidRange} InvalidRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InvalidRange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GrabError.InvalidRange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.range = $root.protocol.RangeInclusive.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.context = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InvalidRange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.GrabError.InvalidRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.GrabError.InvalidRange} InvalidRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InvalidRange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InvalidRange message.
             * @function verify
             * @memberof protocol.GrabError.InvalidRange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InvalidRange.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.range != null && message.hasOwnProperty("range")) {
                    var error = $root.protocol.RangeInclusive.verify(message.range);
                    if (error)
                        return "range." + error;
                }
                if (message.context != null && message.hasOwnProperty("context"))
                    if (!$util.isString(message.context))
                        return "context: string expected";
                return null;
            };

            /**
             * Creates an InvalidRange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.GrabError.InvalidRange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.GrabError.InvalidRange} InvalidRange
             */
            InvalidRange.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.GrabError.InvalidRange)
                    return object;
                var message = new $root.protocol.GrabError.InvalidRange();
                if (object.range != null) {
                    if (typeof object.range !== "object")
                        throw TypeError(".protocol.GrabError.InvalidRange.range: object expected");
                    message.range = $root.protocol.RangeInclusive.fromObject(object.range);
                }
                if (object.context != null)
                    message.context = String(object.context);
                return message;
            };

            /**
             * Creates a plain object from an InvalidRange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.GrabError.InvalidRange
             * @static
             * @param {protocol.GrabError.InvalidRange} message InvalidRange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InvalidRange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.range = null;
                    object.context = "";
                }
                if (message.range != null && message.hasOwnProperty("range"))
                    object.range = $root.protocol.RangeInclusive.toObject(message.range, options);
                if (message.context != null && message.hasOwnProperty("context"))
                    object.context = message.context;
                return object;
            };

            /**
             * Converts this InvalidRange to JSON.
             * @function toJSON
             * @memberof protocol.GrabError.InvalidRange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InvalidRange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for InvalidRange
             * @function getTypeUrl
             * @memberof protocol.GrabError.InvalidRange
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            InvalidRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.GrabError.InvalidRange";
            };

            return InvalidRange;
        })();

        GrabError.Interrupted = (function() {

            /**
             * Properties of an Interrupted.
             * @memberof protocol.GrabError
             * @interface IInterrupted
             */

            /**
             * Constructs a new Interrupted.
             * @memberof protocol.GrabError
             * @classdesc Represents an Interrupted.
             * @implements IInterrupted
             * @constructor
             * @param {protocol.GrabError.IInterrupted=} [properties] Properties to set
             */
            function Interrupted(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Interrupted instance using the specified properties.
             * @function create
             * @memberof protocol.GrabError.Interrupted
             * @static
             * @param {protocol.GrabError.IInterrupted=} [properties] Properties to set
             * @returns {protocol.GrabError.Interrupted} Interrupted instance
             */
            Interrupted.create = function create(properties) {
                return new Interrupted(properties);
            };

            /**
             * Encodes the specified Interrupted message. Does not implicitly {@link protocol.GrabError.Interrupted.verify|verify} messages.
             * @function encode
             * @memberof protocol.GrabError.Interrupted
             * @static
             * @param {protocol.GrabError.IInterrupted} message Interrupted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Interrupted.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Interrupted message, length delimited. Does not implicitly {@link protocol.GrabError.Interrupted.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.GrabError.Interrupted
             * @static
             * @param {protocol.GrabError.IInterrupted} message Interrupted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Interrupted.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Interrupted message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.GrabError.Interrupted
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.GrabError.Interrupted} Interrupted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Interrupted.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GrabError.Interrupted();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Interrupted message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.GrabError.Interrupted
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.GrabError.Interrupted} Interrupted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Interrupted.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Interrupted message.
             * @function verify
             * @memberof protocol.GrabError.Interrupted
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Interrupted.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Interrupted message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.GrabError.Interrupted
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.GrabError.Interrupted} Interrupted
             */
            Interrupted.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.GrabError.Interrupted)
                    return object;
                return new $root.protocol.GrabError.Interrupted();
            };

            /**
             * Creates a plain object from an Interrupted message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.GrabError.Interrupted
             * @static
             * @param {protocol.GrabError.Interrupted} message Interrupted
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Interrupted.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Interrupted to JSON.
             * @function toJSON
             * @memberof protocol.GrabError.Interrupted
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Interrupted.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Interrupted
             * @function getTypeUrl
             * @memberof protocol.GrabError.Interrupted
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Interrupted.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.GrabError.Interrupted";
            };

            return Interrupted;
        })();

        GrabError.NotInitialize = (function() {

            /**
             * Properties of a NotInitialize.
             * @memberof protocol.GrabError
             * @interface INotInitialize
             */

            /**
             * Constructs a new NotInitialize.
             * @memberof protocol.GrabError
             * @classdesc Represents a NotInitialize.
             * @implements INotInitialize
             * @constructor
             * @param {protocol.GrabError.INotInitialize=} [properties] Properties to set
             */
            function NotInitialize(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new NotInitialize instance using the specified properties.
             * @function create
             * @memberof protocol.GrabError.NotInitialize
             * @static
             * @param {protocol.GrabError.INotInitialize=} [properties] Properties to set
             * @returns {protocol.GrabError.NotInitialize} NotInitialize instance
             */
            NotInitialize.create = function create(properties) {
                return new NotInitialize(properties);
            };

            /**
             * Encodes the specified NotInitialize message. Does not implicitly {@link protocol.GrabError.NotInitialize.verify|verify} messages.
             * @function encode
             * @memberof protocol.GrabError.NotInitialize
             * @static
             * @param {protocol.GrabError.INotInitialize} message NotInitialize message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotInitialize.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified NotInitialize message, length delimited. Does not implicitly {@link protocol.GrabError.NotInitialize.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.GrabError.NotInitialize
             * @static
             * @param {protocol.GrabError.INotInitialize} message NotInitialize message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotInitialize.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NotInitialize message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.GrabError.NotInitialize
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.GrabError.NotInitialize} NotInitialize
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotInitialize.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GrabError.NotInitialize();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a NotInitialize message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.GrabError.NotInitialize
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.GrabError.NotInitialize} NotInitialize
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotInitialize.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NotInitialize message.
             * @function verify
             * @memberof protocol.GrabError.NotInitialize
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NotInitialize.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a NotInitialize message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.GrabError.NotInitialize
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.GrabError.NotInitialize} NotInitialize
             */
            NotInitialize.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.GrabError.NotInitialize)
                    return object;
                return new $root.protocol.GrabError.NotInitialize();
            };

            /**
             * Creates a plain object from a NotInitialize message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.GrabError.NotInitialize
             * @static
             * @param {protocol.GrabError.NotInitialize} message NotInitialize
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NotInitialize.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this NotInitialize to JSON.
             * @function toJSON
             * @memberof protocol.GrabError.NotInitialize
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NotInitialize.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for NotInitialize
             * @function getTypeUrl
             * @memberof protocol.GrabError.NotInitialize
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            NotInitialize.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.GrabError.NotInitialize";
            };

            return NotInitialize;
        })();

        GrabError.Unsupported = (function() {

            /**
             * Properties of an Unsupported.
             * @memberof protocol.GrabError
             * @interface IUnsupported
             * @property {string|null} [message] Unsupported message
             */

            /**
             * Constructs a new Unsupported.
             * @memberof protocol.GrabError
             * @classdesc Represents an Unsupported.
             * @implements IUnsupported
             * @constructor
             * @param {protocol.GrabError.IUnsupported=} [properties] Properties to set
             */
            function Unsupported(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Unsupported message.
             * @member {string} message
             * @memberof protocol.GrabError.Unsupported
             * @instance
             */
            Unsupported.prototype.message = "";

            /**
             * Creates a new Unsupported instance using the specified properties.
             * @function create
             * @memberof protocol.GrabError.Unsupported
             * @static
             * @param {protocol.GrabError.IUnsupported=} [properties] Properties to set
             * @returns {protocol.GrabError.Unsupported} Unsupported instance
             */
            Unsupported.create = function create(properties) {
                return new Unsupported(properties);
            };

            /**
             * Encodes the specified Unsupported message. Does not implicitly {@link protocol.GrabError.Unsupported.verify|verify} messages.
             * @function encode
             * @memberof protocol.GrabError.Unsupported
             * @static
             * @param {protocol.GrabError.IUnsupported} message Unsupported message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Unsupported.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Unsupported message, length delimited. Does not implicitly {@link protocol.GrabError.Unsupported.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.GrabError.Unsupported
             * @static
             * @param {protocol.GrabError.IUnsupported} message Unsupported message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Unsupported.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Unsupported message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.GrabError.Unsupported
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.GrabError.Unsupported} Unsupported
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Unsupported.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GrabError.Unsupported();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Unsupported message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.GrabError.Unsupported
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.GrabError.Unsupported} Unsupported
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Unsupported.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Unsupported message.
             * @function verify
             * @memberof protocol.GrabError.Unsupported
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Unsupported.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates an Unsupported message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.GrabError.Unsupported
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.GrabError.Unsupported} Unsupported
             */
            Unsupported.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.GrabError.Unsupported)
                    return object;
                var message = new $root.protocol.GrabError.Unsupported();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from an Unsupported message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.GrabError.Unsupported
             * @static
             * @param {protocol.GrabError.Unsupported} message Unsupported
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Unsupported.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Unsupported to JSON.
             * @function toJSON
             * @memberof protocol.GrabError.Unsupported
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Unsupported.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Unsupported
             * @function getTypeUrl
             * @memberof protocol.GrabError.Unsupported
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Unsupported.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.GrabError.Unsupported";
            };

            return Unsupported;
        })();

        return GrabError;
    })();

    protocol.SearchError = (function() {

        /**
         * Properties of a SearchError.
         * @memberof protocol
         * @interface ISearchError
         * @property {protocol.SearchError.IConfig|null} [config] SearchError config
         * @property {protocol.SearchError.ICommunication|null} [communication] SearchError communication
         * @property {protocol.SearchError.IIoOperation|null} [ioOperation] SearchError ioOperation
         * @property {protocol.SearchError.IRegex|null} [regex] SearchError regex
         * @property {protocol.SearchError.IInput|null} [input] SearchError input
         * @property {protocol.SearchError.IGrab|null} [grab] SearchError grab
         * @property {protocol.SearchError.IAborted|null} [aborted] SearchError aborted
         */

        /**
         * Constructs a new SearchError.
         * @memberof protocol
         * @classdesc Represents a SearchError.
         * @implements ISearchError
         * @constructor
         * @param {protocol.ISearchError=} [properties] Properties to set
         */
        function SearchError(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SearchError config.
         * @member {protocol.SearchError.IConfig|null|undefined} config
         * @memberof protocol.SearchError
         * @instance
         */
        SearchError.prototype.config = null;

        /**
         * SearchError communication.
         * @member {protocol.SearchError.ICommunication|null|undefined} communication
         * @memberof protocol.SearchError
         * @instance
         */
        SearchError.prototype.communication = null;

        /**
         * SearchError ioOperation.
         * @member {protocol.SearchError.IIoOperation|null|undefined} ioOperation
         * @memberof protocol.SearchError
         * @instance
         */
        SearchError.prototype.ioOperation = null;

        /**
         * SearchError regex.
         * @member {protocol.SearchError.IRegex|null|undefined} regex
         * @memberof protocol.SearchError
         * @instance
         */
        SearchError.prototype.regex = null;

        /**
         * SearchError input.
         * @member {protocol.SearchError.IInput|null|undefined} input
         * @memberof protocol.SearchError
         * @instance
         */
        SearchError.prototype.input = null;

        /**
         * SearchError grab.
         * @member {protocol.SearchError.IGrab|null|undefined} grab
         * @memberof protocol.SearchError
         * @instance
         */
        SearchError.prototype.grab = null;

        /**
         * SearchError aborted.
         * @member {protocol.SearchError.IAborted|null|undefined} aborted
         * @memberof protocol.SearchError
         * @instance
         */
        SearchError.prototype.aborted = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * SearchError error.
         * @member {"config"|"communication"|"ioOperation"|"regex"|"input"|"grab"|"aborted"|undefined} error
         * @memberof protocol.SearchError
         * @instance
         */
        Object.defineProperty(SearchError.prototype, "error", {
            get: $util.oneOfGetter($oneOfFields = ["config", "communication", "ioOperation", "regex", "input", "grab", "aborted"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SearchError instance using the specified properties.
         * @function create
         * @memberof protocol.SearchError
         * @static
         * @param {protocol.ISearchError=} [properties] Properties to set
         * @returns {protocol.SearchError} SearchError instance
         */
        SearchError.create = function create(properties) {
            return new SearchError(properties);
        };

        /**
         * Encodes the specified SearchError message. Does not implicitly {@link protocol.SearchError.verify|verify} messages.
         * @function encode
         * @memberof protocol.SearchError
         * @static
         * @param {protocol.ISearchError} message SearchError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                $root.protocol.SearchError.Config.encode(message.config, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.communication != null && Object.hasOwnProperty.call(message, "communication"))
                $root.protocol.SearchError.Communication.encode(message.communication, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.ioOperation != null && Object.hasOwnProperty.call(message, "ioOperation"))
                $root.protocol.SearchError.IoOperation.encode(message.ioOperation, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.regex != null && Object.hasOwnProperty.call(message, "regex"))
                $root.protocol.SearchError.Regex.encode(message.regex, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.input != null && Object.hasOwnProperty.call(message, "input"))
                $root.protocol.SearchError.Input.encode(message.input, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.grab != null && Object.hasOwnProperty.call(message, "grab"))
                $root.protocol.SearchError.Grab.encode(message.grab, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.aborted != null && Object.hasOwnProperty.call(message, "aborted"))
                $root.protocol.SearchError.Aborted.encode(message.aborted, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SearchError message, length delimited. Does not implicitly {@link protocol.SearchError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SearchError
         * @static
         * @param {protocol.ISearchError} message SearchError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SearchError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SearchError message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SearchError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SearchError} SearchError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SearchError();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.config = $root.protocol.SearchError.Config.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.communication = $root.protocol.SearchError.Communication.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.ioOperation = $root.protocol.SearchError.IoOperation.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.regex = $root.protocol.SearchError.Regex.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.input = $root.protocol.SearchError.Input.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.grab = $root.protocol.SearchError.Grab.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.aborted = $root.protocol.SearchError.Aborted.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SearchError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SearchError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SearchError} SearchError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SearchError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SearchError message.
         * @function verify
         * @memberof protocol.SearchError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SearchError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.config != null && message.hasOwnProperty("config")) {
                properties.error = 1;
                {
                    var error = $root.protocol.SearchError.Config.verify(message.config);
                    if (error)
                        return "config." + error;
                }
            }
            if (message.communication != null && message.hasOwnProperty("communication")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.SearchError.Communication.verify(message.communication);
                    if (error)
                        return "communication." + error;
                }
            }
            if (message.ioOperation != null && message.hasOwnProperty("ioOperation")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.SearchError.IoOperation.verify(message.ioOperation);
                    if (error)
                        return "ioOperation." + error;
                }
            }
            if (message.regex != null && message.hasOwnProperty("regex")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.SearchError.Regex.verify(message.regex);
                    if (error)
                        return "regex." + error;
                }
            }
            if (message.input != null && message.hasOwnProperty("input")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.SearchError.Input.verify(message.input);
                    if (error)
                        return "input." + error;
                }
            }
            if (message.grab != null && message.hasOwnProperty("grab")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.SearchError.Grab.verify(message.grab);
                    if (error)
                        return "grab." + error;
                }
            }
            if (message.aborted != null && message.hasOwnProperty("aborted")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.SearchError.Aborted.verify(message.aborted);
                    if (error)
                        return "aborted." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SearchError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SearchError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SearchError} SearchError
         */
        SearchError.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SearchError)
                return object;
            var message = new $root.protocol.SearchError();
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".protocol.SearchError.config: object expected");
                message.config = $root.protocol.SearchError.Config.fromObject(object.config);
            }
            if (object.communication != null) {
                if (typeof object.communication !== "object")
                    throw TypeError(".protocol.SearchError.communication: object expected");
                message.communication = $root.protocol.SearchError.Communication.fromObject(object.communication);
            }
            if (object.ioOperation != null) {
                if (typeof object.ioOperation !== "object")
                    throw TypeError(".protocol.SearchError.ioOperation: object expected");
                message.ioOperation = $root.protocol.SearchError.IoOperation.fromObject(object.ioOperation);
            }
            if (object.regex != null) {
                if (typeof object.regex !== "object")
                    throw TypeError(".protocol.SearchError.regex: object expected");
                message.regex = $root.protocol.SearchError.Regex.fromObject(object.regex);
            }
            if (object.input != null) {
                if (typeof object.input !== "object")
                    throw TypeError(".protocol.SearchError.input: object expected");
                message.input = $root.protocol.SearchError.Input.fromObject(object.input);
            }
            if (object.grab != null) {
                if (typeof object.grab !== "object")
                    throw TypeError(".protocol.SearchError.grab: object expected");
                message.grab = $root.protocol.SearchError.Grab.fromObject(object.grab);
            }
            if (object.aborted != null) {
                if (typeof object.aborted !== "object")
                    throw TypeError(".protocol.SearchError.aborted: object expected");
                message.aborted = $root.protocol.SearchError.Aborted.fromObject(object.aborted);
            }
            return message;
        };

        /**
         * Creates a plain object from a SearchError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SearchError
         * @static
         * @param {protocol.SearchError} message SearchError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SearchError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.config != null && message.hasOwnProperty("config")) {
                object.config = $root.protocol.SearchError.Config.toObject(message.config, options);
                if (options.oneofs)
                    object.error = "config";
            }
            if (message.communication != null && message.hasOwnProperty("communication")) {
                object.communication = $root.protocol.SearchError.Communication.toObject(message.communication, options);
                if (options.oneofs)
                    object.error = "communication";
            }
            if (message.ioOperation != null && message.hasOwnProperty("ioOperation")) {
                object.ioOperation = $root.protocol.SearchError.IoOperation.toObject(message.ioOperation, options);
                if (options.oneofs)
                    object.error = "ioOperation";
            }
            if (message.regex != null && message.hasOwnProperty("regex")) {
                object.regex = $root.protocol.SearchError.Regex.toObject(message.regex, options);
                if (options.oneofs)
                    object.error = "regex";
            }
            if (message.input != null && message.hasOwnProperty("input")) {
                object.input = $root.protocol.SearchError.Input.toObject(message.input, options);
                if (options.oneofs)
                    object.error = "input";
            }
            if (message.grab != null && message.hasOwnProperty("grab")) {
                object.grab = $root.protocol.SearchError.Grab.toObject(message.grab, options);
                if (options.oneofs)
                    object.error = "grab";
            }
            if (message.aborted != null && message.hasOwnProperty("aborted")) {
                object.aborted = $root.protocol.SearchError.Aborted.toObject(message.aborted, options);
                if (options.oneofs)
                    object.error = "aborted";
            }
            return object;
        };

        /**
         * Converts this SearchError to JSON.
         * @function toJSON
         * @memberof protocol.SearchError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SearchError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SearchError
         * @function getTypeUrl
         * @memberof protocol.SearchError
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SearchError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SearchError";
        };

        SearchError.Config = (function() {

            /**
             * Properties of a Config.
             * @memberof protocol.SearchError
             * @interface IConfig
             * @property {string|null} [message] Config message
             */

            /**
             * Constructs a new Config.
             * @memberof protocol.SearchError
             * @classdesc Represents a Config.
             * @implements IConfig
             * @constructor
             * @param {protocol.SearchError.IConfig=} [properties] Properties to set
             */
            function Config(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Config message.
             * @member {string} message
             * @memberof protocol.SearchError.Config
             * @instance
             */
            Config.prototype.message = "";

            /**
             * Creates a new Config instance using the specified properties.
             * @function create
             * @memberof protocol.SearchError.Config
             * @static
             * @param {protocol.SearchError.IConfig=} [properties] Properties to set
             * @returns {protocol.SearchError.Config} Config instance
             */
            Config.create = function create(properties) {
                return new Config(properties);
            };

            /**
             * Encodes the specified Config message. Does not implicitly {@link protocol.SearchError.Config.verify|verify} messages.
             * @function encode
             * @memberof protocol.SearchError.Config
             * @static
             * @param {protocol.SearchError.IConfig} message Config message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Config.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Config message, length delimited. Does not implicitly {@link protocol.SearchError.Config.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.SearchError.Config
             * @static
             * @param {protocol.SearchError.IConfig} message Config message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Config.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Config message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.SearchError.Config
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.SearchError.Config} Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Config.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SearchError.Config();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Config message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.SearchError.Config
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.SearchError.Config} Config
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Config.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Config message.
             * @function verify
             * @memberof protocol.SearchError.Config
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Config.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a Config message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.SearchError.Config
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.SearchError.Config} Config
             */
            Config.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.SearchError.Config)
                    return object;
                var message = new $root.protocol.SearchError.Config();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a Config message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.SearchError.Config
             * @static
             * @param {protocol.SearchError.Config} message Config
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Config.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Config to JSON.
             * @function toJSON
             * @memberof protocol.SearchError.Config
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Config.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Config
             * @function getTypeUrl
             * @memberof protocol.SearchError.Config
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Config.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.SearchError.Config";
            };

            return Config;
        })();

        SearchError.Communication = (function() {

            /**
             * Properties of a Communication.
             * @memberof protocol.SearchError
             * @interface ICommunication
             * @property {string|null} [message] Communication message
             */

            /**
             * Constructs a new Communication.
             * @memberof protocol.SearchError
             * @classdesc Represents a Communication.
             * @implements ICommunication
             * @constructor
             * @param {protocol.SearchError.ICommunication=} [properties] Properties to set
             */
            function Communication(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Communication message.
             * @member {string} message
             * @memberof protocol.SearchError.Communication
             * @instance
             */
            Communication.prototype.message = "";

            /**
             * Creates a new Communication instance using the specified properties.
             * @function create
             * @memberof protocol.SearchError.Communication
             * @static
             * @param {protocol.SearchError.ICommunication=} [properties] Properties to set
             * @returns {protocol.SearchError.Communication} Communication instance
             */
            Communication.create = function create(properties) {
                return new Communication(properties);
            };

            /**
             * Encodes the specified Communication message. Does not implicitly {@link protocol.SearchError.Communication.verify|verify} messages.
             * @function encode
             * @memberof protocol.SearchError.Communication
             * @static
             * @param {protocol.SearchError.ICommunication} message Communication message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Communication.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Communication message, length delimited. Does not implicitly {@link protocol.SearchError.Communication.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.SearchError.Communication
             * @static
             * @param {protocol.SearchError.ICommunication} message Communication message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Communication.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Communication message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.SearchError.Communication
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.SearchError.Communication} Communication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Communication.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SearchError.Communication();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Communication message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.SearchError.Communication
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.SearchError.Communication} Communication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Communication.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Communication message.
             * @function verify
             * @memberof protocol.SearchError.Communication
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Communication.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a Communication message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.SearchError.Communication
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.SearchError.Communication} Communication
             */
            Communication.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.SearchError.Communication)
                    return object;
                var message = new $root.protocol.SearchError.Communication();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a Communication message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.SearchError.Communication
             * @static
             * @param {protocol.SearchError.Communication} message Communication
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Communication.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Communication to JSON.
             * @function toJSON
             * @memberof protocol.SearchError.Communication
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Communication.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Communication
             * @function getTypeUrl
             * @memberof protocol.SearchError.Communication
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Communication.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.SearchError.Communication";
            };

            return Communication;
        })();

        SearchError.IoOperation = (function() {

            /**
             * Properties of an IoOperation.
             * @memberof protocol.SearchError
             * @interface IIoOperation
             * @property {string|null} [message] IoOperation message
             */

            /**
             * Constructs a new IoOperation.
             * @memberof protocol.SearchError
             * @classdesc Represents an IoOperation.
             * @implements IIoOperation
             * @constructor
             * @param {protocol.SearchError.IIoOperation=} [properties] Properties to set
             */
            function IoOperation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IoOperation message.
             * @member {string} message
             * @memberof protocol.SearchError.IoOperation
             * @instance
             */
            IoOperation.prototype.message = "";

            /**
             * Creates a new IoOperation instance using the specified properties.
             * @function create
             * @memberof protocol.SearchError.IoOperation
             * @static
             * @param {protocol.SearchError.IIoOperation=} [properties] Properties to set
             * @returns {protocol.SearchError.IoOperation} IoOperation instance
             */
            IoOperation.create = function create(properties) {
                return new IoOperation(properties);
            };

            /**
             * Encodes the specified IoOperation message. Does not implicitly {@link protocol.SearchError.IoOperation.verify|verify} messages.
             * @function encode
             * @memberof protocol.SearchError.IoOperation
             * @static
             * @param {protocol.SearchError.IIoOperation} message IoOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IoOperation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified IoOperation message, length delimited. Does not implicitly {@link protocol.SearchError.IoOperation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.SearchError.IoOperation
             * @static
             * @param {protocol.SearchError.IIoOperation} message IoOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IoOperation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an IoOperation message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.SearchError.IoOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.SearchError.IoOperation} IoOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IoOperation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SearchError.IoOperation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an IoOperation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.SearchError.IoOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.SearchError.IoOperation} IoOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IoOperation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an IoOperation message.
             * @function verify
             * @memberof protocol.SearchError.IoOperation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IoOperation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates an IoOperation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.SearchError.IoOperation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.SearchError.IoOperation} IoOperation
             */
            IoOperation.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.SearchError.IoOperation)
                    return object;
                var message = new $root.protocol.SearchError.IoOperation();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from an IoOperation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.SearchError.IoOperation
             * @static
             * @param {protocol.SearchError.IoOperation} message IoOperation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IoOperation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this IoOperation to JSON.
             * @function toJSON
             * @memberof protocol.SearchError.IoOperation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IoOperation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for IoOperation
             * @function getTypeUrl
             * @memberof protocol.SearchError.IoOperation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            IoOperation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.SearchError.IoOperation";
            };

            return IoOperation;
        })();

        SearchError.Regex = (function() {

            /**
             * Properties of a Regex.
             * @memberof protocol.SearchError
             * @interface IRegex
             * @property {string|null} [message] Regex message
             */

            /**
             * Constructs a new Regex.
             * @memberof protocol.SearchError
             * @classdesc Represents a Regex.
             * @implements IRegex
             * @constructor
             * @param {protocol.SearchError.IRegex=} [properties] Properties to set
             */
            function Regex(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Regex message.
             * @member {string} message
             * @memberof protocol.SearchError.Regex
             * @instance
             */
            Regex.prototype.message = "";

            /**
             * Creates a new Regex instance using the specified properties.
             * @function create
             * @memberof protocol.SearchError.Regex
             * @static
             * @param {protocol.SearchError.IRegex=} [properties] Properties to set
             * @returns {protocol.SearchError.Regex} Regex instance
             */
            Regex.create = function create(properties) {
                return new Regex(properties);
            };

            /**
             * Encodes the specified Regex message. Does not implicitly {@link protocol.SearchError.Regex.verify|verify} messages.
             * @function encode
             * @memberof protocol.SearchError.Regex
             * @static
             * @param {protocol.SearchError.IRegex} message Regex message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Regex.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Regex message, length delimited. Does not implicitly {@link protocol.SearchError.Regex.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.SearchError.Regex
             * @static
             * @param {protocol.SearchError.IRegex} message Regex message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Regex.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Regex message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.SearchError.Regex
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.SearchError.Regex} Regex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Regex.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SearchError.Regex();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Regex message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.SearchError.Regex
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.SearchError.Regex} Regex
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Regex.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Regex message.
             * @function verify
             * @memberof protocol.SearchError.Regex
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Regex.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a Regex message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.SearchError.Regex
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.SearchError.Regex} Regex
             */
            Regex.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.SearchError.Regex)
                    return object;
                var message = new $root.protocol.SearchError.Regex();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a Regex message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.SearchError.Regex
             * @static
             * @param {protocol.SearchError.Regex} message Regex
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Regex.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Regex to JSON.
             * @function toJSON
             * @memberof protocol.SearchError.Regex
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Regex.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Regex
             * @function getTypeUrl
             * @memberof protocol.SearchError.Regex
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Regex.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.SearchError.Regex";
            };

            return Regex;
        })();

        SearchError.Input = (function() {

            /**
             * Properties of an Input.
             * @memberof protocol.SearchError
             * @interface IInput
             * @property {string|null} [message] Input message
             */

            /**
             * Constructs a new Input.
             * @memberof protocol.SearchError
             * @classdesc Represents an Input.
             * @implements IInput
             * @constructor
             * @param {protocol.SearchError.IInput=} [properties] Properties to set
             */
            function Input(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Input message.
             * @member {string} message
             * @memberof protocol.SearchError.Input
             * @instance
             */
            Input.prototype.message = "";

            /**
             * Creates a new Input instance using the specified properties.
             * @function create
             * @memberof protocol.SearchError.Input
             * @static
             * @param {protocol.SearchError.IInput=} [properties] Properties to set
             * @returns {protocol.SearchError.Input} Input instance
             */
            Input.create = function create(properties) {
                return new Input(properties);
            };

            /**
             * Encodes the specified Input message. Does not implicitly {@link protocol.SearchError.Input.verify|verify} messages.
             * @function encode
             * @memberof protocol.SearchError.Input
             * @static
             * @param {protocol.SearchError.IInput} message Input message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Input.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Input message, length delimited. Does not implicitly {@link protocol.SearchError.Input.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.SearchError.Input
             * @static
             * @param {protocol.SearchError.IInput} message Input message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Input.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Input message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.SearchError.Input
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.SearchError.Input} Input
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Input.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SearchError.Input();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Input message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.SearchError.Input
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.SearchError.Input} Input
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Input.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Input message.
             * @function verify
             * @memberof protocol.SearchError.Input
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Input.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates an Input message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.SearchError.Input
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.SearchError.Input} Input
             */
            Input.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.SearchError.Input)
                    return object;
                var message = new $root.protocol.SearchError.Input();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from an Input message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.SearchError.Input
             * @static
             * @param {protocol.SearchError.Input} message Input
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Input.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Input to JSON.
             * @function toJSON
             * @memberof protocol.SearchError.Input
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Input.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Input
             * @function getTypeUrl
             * @memberof protocol.SearchError.Input
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Input.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.SearchError.Input";
            };

            return Input;
        })();

        SearchError.Grab = (function() {

            /**
             * Properties of a Grab.
             * @memberof protocol.SearchError
             * @interface IGrab
             * @property {protocol.IGrabError|null} [error] Grab error
             */

            /**
             * Constructs a new Grab.
             * @memberof protocol.SearchError
             * @classdesc Represents a Grab.
             * @implements IGrab
             * @constructor
             * @param {protocol.SearchError.IGrab=} [properties] Properties to set
             */
            function Grab(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Grab error.
             * @member {protocol.IGrabError|null|undefined} error
             * @memberof protocol.SearchError.Grab
             * @instance
             */
            Grab.prototype.error = null;

            /**
             * Creates a new Grab instance using the specified properties.
             * @function create
             * @memberof protocol.SearchError.Grab
             * @static
             * @param {protocol.SearchError.IGrab=} [properties] Properties to set
             * @returns {protocol.SearchError.Grab} Grab instance
             */
            Grab.create = function create(properties) {
                return new Grab(properties);
            };

            /**
             * Encodes the specified Grab message. Does not implicitly {@link protocol.SearchError.Grab.verify|verify} messages.
             * @function encode
             * @memberof protocol.SearchError.Grab
             * @static
             * @param {protocol.SearchError.IGrab} message Grab message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Grab.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    $root.protocol.GrabError.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Grab message, length delimited. Does not implicitly {@link protocol.SearchError.Grab.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.SearchError.Grab
             * @static
             * @param {protocol.SearchError.IGrab} message Grab message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Grab.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Grab message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.SearchError.Grab
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.SearchError.Grab} Grab
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Grab.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SearchError.Grab();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.error = $root.protocol.GrabError.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Grab message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.SearchError.Grab
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.SearchError.Grab} Grab
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Grab.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Grab message.
             * @function verify
             * @memberof protocol.SearchError.Grab
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Grab.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.protocol.GrabError.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                return null;
            };

            /**
             * Creates a Grab message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.SearchError.Grab
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.SearchError.Grab} Grab
             */
            Grab.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.SearchError.Grab)
                    return object;
                var message = new $root.protocol.SearchError.Grab();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".protocol.SearchError.Grab.error: object expected");
                    message.error = $root.protocol.GrabError.fromObject(object.error);
                }
                return message;
            };

            /**
             * Creates a plain object from a Grab message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.SearchError.Grab
             * @static
             * @param {protocol.SearchError.Grab} message Grab
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Grab.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.error = null;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.protocol.GrabError.toObject(message.error, options);
                return object;
            };

            /**
             * Converts this Grab to JSON.
             * @function toJSON
             * @memberof protocol.SearchError.Grab
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Grab.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Grab
             * @function getTypeUrl
             * @memberof protocol.SearchError.Grab
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Grab.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.SearchError.Grab";
            };

            return Grab;
        })();

        SearchError.Aborted = (function() {

            /**
             * Properties of an Aborted.
             * @memberof protocol.SearchError
             * @interface IAborted
             * @property {string|null} [message] Aborted message
             */

            /**
             * Constructs a new Aborted.
             * @memberof protocol.SearchError
             * @classdesc Represents an Aborted.
             * @implements IAborted
             * @constructor
             * @param {protocol.SearchError.IAborted=} [properties] Properties to set
             */
            function Aborted(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Aborted message.
             * @member {string} message
             * @memberof protocol.SearchError.Aborted
             * @instance
             */
            Aborted.prototype.message = "";

            /**
             * Creates a new Aborted instance using the specified properties.
             * @function create
             * @memberof protocol.SearchError.Aborted
             * @static
             * @param {protocol.SearchError.IAborted=} [properties] Properties to set
             * @returns {protocol.SearchError.Aborted} Aborted instance
             */
            Aborted.create = function create(properties) {
                return new Aborted(properties);
            };

            /**
             * Encodes the specified Aborted message. Does not implicitly {@link protocol.SearchError.Aborted.verify|verify} messages.
             * @function encode
             * @memberof protocol.SearchError.Aborted
             * @static
             * @param {protocol.SearchError.IAborted} message Aborted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Aborted.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Aborted message, length delimited. Does not implicitly {@link protocol.SearchError.Aborted.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.SearchError.Aborted
             * @static
             * @param {protocol.SearchError.IAborted} message Aborted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Aborted.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Aborted message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.SearchError.Aborted
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.SearchError.Aborted} Aborted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Aborted.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SearchError.Aborted();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Aborted message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.SearchError.Aborted
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.SearchError.Aborted} Aborted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Aborted.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Aborted message.
             * @function verify
             * @memberof protocol.SearchError.Aborted
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Aborted.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates an Aborted message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.SearchError.Aborted
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.SearchError.Aborted} Aborted
             */
            Aborted.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.SearchError.Aborted)
                    return object;
                var message = new $root.protocol.SearchError.Aborted();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from an Aborted message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.SearchError.Aborted
             * @static
             * @param {protocol.SearchError.Aborted} message Aborted
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Aborted.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Aborted to JSON.
             * @function toJSON
             * @memberof protocol.SearchError.Aborted
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Aborted.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Aborted
             * @function getTypeUrl
             * @memberof protocol.SearchError.Aborted
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Aborted.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.SearchError.Aborted";
            };

            return Aborted;
        })();

        return SearchError;
    })();

    /**
     * NativeErrorKind enum.
     * @name protocol.NativeErrorKind
     * @enum {number}
     * @property {number} FileNotFound=0 FileNotFound value
     * @property {number} UnsupportedFileType=1 UnsupportedFileType value
     * @property {number} ComputationFailed=2 ComputationFailed value
     * @property {number} Configuration=3 Configuration value
     * @property {number} Interrupted=4 Interrupted value
     * @property {number} OperationSearch=5 OperationSearch value
     * @property {number} NotYetImplemented=6 NotYetImplemented value
     * @property {number} ChannelError=7 ChannelError value
     * @property {number} Io=8 Io value
     * @property {number} Grabber=9 Grabber value
     */
    protocol.NativeErrorKind = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "FileNotFound"] = 0;
        values[valuesById[1] = "UnsupportedFileType"] = 1;
        values[valuesById[2] = "ComputationFailed"] = 2;
        values[valuesById[3] = "Configuration"] = 3;
        values[valuesById[4] = "Interrupted"] = 4;
        values[valuesById[5] = "OperationSearch"] = 5;
        values[valuesById[6] = "NotYetImplemented"] = 6;
        values[valuesById[7] = "ChannelError"] = 7;
        values[valuesById[8] = "Io"] = 8;
        values[valuesById[9] = "Grabber"] = 9;
        return values;
    })();

    protocol.NativeError = (function() {

        /**
         * Properties of a NativeError.
         * @memberof protocol
         * @interface INativeError
         * @property {protocol.Severity|null} [severity] NativeError severity
         * @property {protocol.NativeErrorKind|null} [kind] NativeError kind
         * @property {string|null} [message] NativeError message
         */

        /**
         * Constructs a new NativeError.
         * @memberof protocol
         * @classdesc Represents a NativeError.
         * @implements INativeError
         * @constructor
         * @param {protocol.INativeError=} [properties] Properties to set
         */
        function NativeError(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NativeError severity.
         * @member {protocol.Severity} severity
         * @memberof protocol.NativeError
         * @instance
         */
        NativeError.prototype.severity = 0;

        /**
         * NativeError kind.
         * @member {protocol.NativeErrorKind} kind
         * @memberof protocol.NativeError
         * @instance
         */
        NativeError.prototype.kind = 0;

        /**
         * NativeError message.
         * @member {string} message
         * @memberof protocol.NativeError
         * @instance
         */
        NativeError.prototype.message = "";

        /**
         * Creates a new NativeError instance using the specified properties.
         * @function create
         * @memberof protocol.NativeError
         * @static
         * @param {protocol.INativeError=} [properties] Properties to set
         * @returns {protocol.NativeError} NativeError instance
         */
        NativeError.create = function create(properties) {
            return new NativeError(properties);
        };

        /**
         * Encodes the specified NativeError message. Does not implicitly {@link protocol.NativeError.verify|verify} messages.
         * @function encode
         * @memberof protocol.NativeError
         * @static
         * @param {protocol.INativeError} message NativeError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NativeError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.severity != null && Object.hasOwnProperty.call(message, "severity"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.severity);
            if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.kind);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified NativeError message, length delimited. Does not implicitly {@link protocol.NativeError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.NativeError
         * @static
         * @param {protocol.INativeError} message NativeError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NativeError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NativeError message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.NativeError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.NativeError} NativeError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NativeError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.NativeError();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.severity = reader.int32();
                        break;
                    }
                case 2: {
                        message.kind = reader.int32();
                        break;
                    }
                case 3: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NativeError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.NativeError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.NativeError} NativeError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NativeError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NativeError message.
         * @function verify
         * @memberof protocol.NativeError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NativeError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.severity != null && message.hasOwnProperty("severity"))
                switch (message.severity) {
                default:
                    return "severity: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.kind != null && message.hasOwnProperty("kind"))
                switch (message.kind) {
                default:
                    return "kind: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a NativeError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.NativeError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.NativeError} NativeError
         */
        NativeError.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.NativeError)
                return object;
            var message = new $root.protocol.NativeError();
            switch (object.severity) {
            default:
                if (typeof object.severity === "number") {
                    message.severity = object.severity;
                    break;
                }
                break;
            case "WARNING":
            case 0:
                message.severity = 0;
                break;
            case "ERROR":
            case 1:
                message.severity = 1;
                break;
            }
            switch (object.kind) {
            default:
                if (typeof object.kind === "number") {
                    message.kind = object.kind;
                    break;
                }
                break;
            case "FileNotFound":
            case 0:
                message.kind = 0;
                break;
            case "UnsupportedFileType":
            case 1:
                message.kind = 1;
                break;
            case "ComputationFailed":
            case 2:
                message.kind = 2;
                break;
            case "Configuration":
            case 3:
                message.kind = 3;
                break;
            case "Interrupted":
            case 4:
                message.kind = 4;
                break;
            case "OperationSearch":
            case 5:
                message.kind = 5;
                break;
            case "NotYetImplemented":
            case 6:
                message.kind = 6;
                break;
            case "ChannelError":
            case 7:
                message.kind = 7;
                break;
            case "Io":
            case 8:
                message.kind = 8;
                break;
            case "Grabber":
            case 9:
                message.kind = 9;
                break;
            }
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a NativeError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.NativeError
         * @static
         * @param {protocol.NativeError} message NativeError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NativeError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.severity = options.enums === String ? "WARNING" : 0;
                object.kind = options.enums === String ? "FileNotFound" : 0;
                object.message = "";
            }
            if (message.severity != null && message.hasOwnProperty("severity"))
                object.severity = options.enums === String ? $root.protocol.Severity[message.severity] === undefined ? message.severity : $root.protocol.Severity[message.severity] : message.severity;
            if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = options.enums === String ? $root.protocol.NativeErrorKind[message.kind] === undefined ? message.kind : $root.protocol.NativeErrorKind[message.kind] : message.kind;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this NativeError to JSON.
         * @function toJSON
         * @memberof protocol.NativeError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NativeError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NativeError
         * @function getTypeUrl
         * @memberof protocol.NativeError
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NativeError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.NativeError";
        };

        return NativeError;
    })();

    /**
     * Severity enum.
     * @name protocol.Severity
     * @enum {number}
     * @property {number} WARNING=0 WARNING value
     * @property {number} ERROR=1 ERROR value
     */
    protocol.Severity = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "WARNING"] = 0;
        values[valuesById[1] = "ERROR"] = 1;
        return values;
    })();

    protocol.ComputationError = (function() {

        /**
         * Properties of a ComputationError.
         * @memberof protocol
         * @interface IComputationError
         * @property {protocol.ComputationError.IDestinationPath|null} [destinationPath] ComputationError destinationPath
         * @property {protocol.ComputationError.ISessionCreatingFail|null} [sessionCreatingFail] ComputationError sessionCreatingFail
         * @property {protocol.ComputationError.ICommunication|null} [communication] ComputationError communication
         * @property {protocol.ComputationError.IOperationNotSupported|null} [operationNotSupported] ComputationError operationNotSupported
         * @property {protocol.ComputationError.IIoOperation|null} [ioOperation] ComputationError ioOperation
         * @property {protocol.ComputationError.IInvalidData|null} [invalidData] ComputationError invalidData
         * @property {protocol.ComputationError.IInvalidArgs|null} [invalidArgs] ComputationError invalidArgs
         * @property {protocol.ComputationError.IProcess|null} [process] ComputationError process
         * @property {protocol.ComputationError.IProtocol|null} [protocol] ComputationError protocol
         * @property {protocol.ISearchError|null} [searchError] ComputationError searchError
         * @property {protocol.ComputationError.IMultipleInitCall|null} [multipleInitCall] ComputationError multipleInitCall
         * @property {protocol.ComputationError.ISessionUnavailable|null} [sessionUnavailable] ComputationError sessionUnavailable
         * @property {protocol.INativeError|null} [nativeError] ComputationError nativeError
         * @property {protocol.ComputationError.IGrabbing|null} [grabbing] ComputationError grabbing
         * @property {protocol.ComputationError.ISde|null} [sde] ComputationError sde
         */

        /**
         * Constructs a new ComputationError.
         * @memberof protocol
         * @classdesc Represents a ComputationError.
         * @implements IComputationError
         * @constructor
         * @param {protocol.IComputationError=} [properties] Properties to set
         */
        function ComputationError(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ComputationError destinationPath.
         * @member {protocol.ComputationError.IDestinationPath|null|undefined} destinationPath
         * @memberof protocol.ComputationError
         * @instance
         */
        ComputationError.prototype.destinationPath = null;

        /**
         * ComputationError sessionCreatingFail.
         * @member {protocol.ComputationError.ISessionCreatingFail|null|undefined} sessionCreatingFail
         * @memberof protocol.ComputationError
         * @instance
         */
        ComputationError.prototype.sessionCreatingFail = null;

        /**
         * ComputationError communication.
         * @member {protocol.ComputationError.ICommunication|null|undefined} communication
         * @memberof protocol.ComputationError
         * @instance
         */
        ComputationError.prototype.communication = null;

        /**
         * ComputationError operationNotSupported.
         * @member {protocol.ComputationError.IOperationNotSupported|null|undefined} operationNotSupported
         * @memberof protocol.ComputationError
         * @instance
         */
        ComputationError.prototype.operationNotSupported = null;

        /**
         * ComputationError ioOperation.
         * @member {protocol.ComputationError.IIoOperation|null|undefined} ioOperation
         * @memberof protocol.ComputationError
         * @instance
         */
        ComputationError.prototype.ioOperation = null;

        /**
         * ComputationError invalidData.
         * @member {protocol.ComputationError.IInvalidData|null|undefined} invalidData
         * @memberof protocol.ComputationError
         * @instance
         */
        ComputationError.prototype.invalidData = null;

        /**
         * ComputationError invalidArgs.
         * @member {protocol.ComputationError.IInvalidArgs|null|undefined} invalidArgs
         * @memberof protocol.ComputationError
         * @instance
         */
        ComputationError.prototype.invalidArgs = null;

        /**
         * ComputationError process.
         * @member {protocol.ComputationError.IProcess|null|undefined} process
         * @memberof protocol.ComputationError
         * @instance
         */
        ComputationError.prototype.process = null;

        /**
         * ComputationError protocol.
         * @member {protocol.ComputationError.IProtocol|null|undefined} protocol
         * @memberof protocol.ComputationError
         * @instance
         */
        ComputationError.prototype.protocol = null;

        /**
         * ComputationError searchError.
         * @member {protocol.ISearchError|null|undefined} searchError
         * @memberof protocol.ComputationError
         * @instance
         */
        ComputationError.prototype.searchError = null;

        /**
         * ComputationError multipleInitCall.
         * @member {protocol.ComputationError.IMultipleInitCall|null|undefined} multipleInitCall
         * @memberof protocol.ComputationError
         * @instance
         */
        ComputationError.prototype.multipleInitCall = null;

        /**
         * ComputationError sessionUnavailable.
         * @member {protocol.ComputationError.ISessionUnavailable|null|undefined} sessionUnavailable
         * @memberof protocol.ComputationError
         * @instance
         */
        ComputationError.prototype.sessionUnavailable = null;

        /**
         * ComputationError nativeError.
         * @member {protocol.INativeError|null|undefined} nativeError
         * @memberof protocol.ComputationError
         * @instance
         */
        ComputationError.prototype.nativeError = null;

        /**
         * ComputationError grabbing.
         * @member {protocol.ComputationError.IGrabbing|null|undefined} grabbing
         * @memberof protocol.ComputationError
         * @instance
         */
        ComputationError.prototype.grabbing = null;

        /**
         * ComputationError sde.
         * @member {protocol.ComputationError.ISde|null|undefined} sde
         * @memberof protocol.ComputationError
         * @instance
         */
        ComputationError.prototype.sde = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ComputationError error.
         * @member {"destinationPath"|"sessionCreatingFail"|"communication"|"operationNotSupported"|"ioOperation"|"invalidData"|"invalidArgs"|"process"|"protocol"|"searchError"|"multipleInitCall"|"sessionUnavailable"|"nativeError"|"grabbing"|"sde"|undefined} error
         * @memberof protocol.ComputationError
         * @instance
         */
        Object.defineProperty(ComputationError.prototype, "error", {
            get: $util.oneOfGetter($oneOfFields = ["destinationPath", "sessionCreatingFail", "communication", "operationNotSupported", "ioOperation", "invalidData", "invalidArgs", "process", "protocol", "searchError", "multipleInitCall", "sessionUnavailable", "nativeError", "grabbing", "sde"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ComputationError instance using the specified properties.
         * @function create
         * @memberof protocol.ComputationError
         * @static
         * @param {protocol.IComputationError=} [properties] Properties to set
         * @returns {protocol.ComputationError} ComputationError instance
         */
        ComputationError.create = function create(properties) {
            return new ComputationError(properties);
        };

        /**
         * Encodes the specified ComputationError message. Does not implicitly {@link protocol.ComputationError.verify|verify} messages.
         * @function encode
         * @memberof protocol.ComputationError
         * @static
         * @param {protocol.IComputationError} message ComputationError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ComputationError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.destinationPath != null && Object.hasOwnProperty.call(message, "destinationPath"))
                $root.protocol.ComputationError.DestinationPath.encode(message.destinationPath, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.sessionCreatingFail != null && Object.hasOwnProperty.call(message, "sessionCreatingFail"))
                $root.protocol.ComputationError.SessionCreatingFail.encode(message.sessionCreatingFail, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.communication != null && Object.hasOwnProperty.call(message, "communication"))
                $root.protocol.ComputationError.Communication.encode(message.communication, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.operationNotSupported != null && Object.hasOwnProperty.call(message, "operationNotSupported"))
                $root.protocol.ComputationError.OperationNotSupported.encode(message.operationNotSupported, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.ioOperation != null && Object.hasOwnProperty.call(message, "ioOperation"))
                $root.protocol.ComputationError.IoOperation.encode(message.ioOperation, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.invalidData != null && Object.hasOwnProperty.call(message, "invalidData"))
                $root.protocol.ComputationError.InvalidData.encode(message.invalidData, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.invalidArgs != null && Object.hasOwnProperty.call(message, "invalidArgs"))
                $root.protocol.ComputationError.InvalidArgs.encode(message.invalidArgs, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.process != null && Object.hasOwnProperty.call(message, "process"))
                $root.protocol.ComputationError.Process.encode(message.process, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
                $root.protocol.ComputationError.Protocol.encode(message.protocol, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.searchError != null && Object.hasOwnProperty.call(message, "searchError"))
                $root.protocol.SearchError.encode(message.searchError, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.multipleInitCall != null && Object.hasOwnProperty.call(message, "multipleInitCall"))
                $root.protocol.ComputationError.MultipleInitCall.encode(message.multipleInitCall, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.sessionUnavailable != null && Object.hasOwnProperty.call(message, "sessionUnavailable"))
                $root.protocol.ComputationError.SessionUnavailable.encode(message.sessionUnavailable, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.nativeError != null && Object.hasOwnProperty.call(message, "nativeError"))
                $root.protocol.NativeError.encode(message.nativeError, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.grabbing != null && Object.hasOwnProperty.call(message, "grabbing"))
                $root.protocol.ComputationError.Grabbing.encode(message.grabbing, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.sde != null && Object.hasOwnProperty.call(message, "sde"))
                $root.protocol.ComputationError.Sde.encode(message.sde, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ComputationError message, length delimited. Does not implicitly {@link protocol.ComputationError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ComputationError
         * @static
         * @param {protocol.IComputationError} message ComputationError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ComputationError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ComputationError message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ComputationError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ComputationError} ComputationError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ComputationError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ComputationError();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.destinationPath = $root.protocol.ComputationError.DestinationPath.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.sessionCreatingFail = $root.protocol.ComputationError.SessionCreatingFail.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.communication = $root.protocol.ComputationError.Communication.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.operationNotSupported = $root.protocol.ComputationError.OperationNotSupported.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.ioOperation = $root.protocol.ComputationError.IoOperation.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.invalidData = $root.protocol.ComputationError.InvalidData.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.invalidArgs = $root.protocol.ComputationError.InvalidArgs.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.process = $root.protocol.ComputationError.Process.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.protocol = $root.protocol.ComputationError.Protocol.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.searchError = $root.protocol.SearchError.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.multipleInitCall = $root.protocol.ComputationError.MultipleInitCall.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.sessionUnavailable = $root.protocol.ComputationError.SessionUnavailable.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.nativeError = $root.protocol.NativeError.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.grabbing = $root.protocol.ComputationError.Grabbing.decode(reader, reader.uint32());
                        break;
                    }
                case 15: {
                        message.sde = $root.protocol.ComputationError.Sde.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ComputationError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ComputationError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ComputationError} ComputationError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ComputationError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ComputationError message.
         * @function verify
         * @memberof protocol.ComputationError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ComputationError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.destinationPath != null && message.hasOwnProperty("destinationPath")) {
                properties.error = 1;
                {
                    var error = $root.protocol.ComputationError.DestinationPath.verify(message.destinationPath);
                    if (error)
                        return "destinationPath." + error;
                }
            }
            if (message.sessionCreatingFail != null && message.hasOwnProperty("sessionCreatingFail")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.ComputationError.SessionCreatingFail.verify(message.sessionCreatingFail);
                    if (error)
                        return "sessionCreatingFail." + error;
                }
            }
            if (message.communication != null && message.hasOwnProperty("communication")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.ComputationError.Communication.verify(message.communication);
                    if (error)
                        return "communication." + error;
                }
            }
            if (message.operationNotSupported != null && message.hasOwnProperty("operationNotSupported")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.ComputationError.OperationNotSupported.verify(message.operationNotSupported);
                    if (error)
                        return "operationNotSupported." + error;
                }
            }
            if (message.ioOperation != null && message.hasOwnProperty("ioOperation")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.ComputationError.IoOperation.verify(message.ioOperation);
                    if (error)
                        return "ioOperation." + error;
                }
            }
            if (message.invalidData != null && message.hasOwnProperty("invalidData")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.ComputationError.InvalidData.verify(message.invalidData);
                    if (error)
                        return "invalidData." + error;
                }
            }
            if (message.invalidArgs != null && message.hasOwnProperty("invalidArgs")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.ComputationError.InvalidArgs.verify(message.invalidArgs);
                    if (error)
                        return "invalidArgs." + error;
                }
            }
            if (message.process != null && message.hasOwnProperty("process")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.ComputationError.Process.verify(message.process);
                    if (error)
                        return "process." + error;
                }
            }
            if (message.protocol != null && message.hasOwnProperty("protocol")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.ComputationError.Protocol.verify(message.protocol);
                    if (error)
                        return "protocol." + error;
                }
            }
            if (message.searchError != null && message.hasOwnProperty("searchError")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.SearchError.verify(message.searchError);
                    if (error)
                        return "searchError." + error;
                }
            }
            if (message.multipleInitCall != null && message.hasOwnProperty("multipleInitCall")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.ComputationError.MultipleInitCall.verify(message.multipleInitCall);
                    if (error)
                        return "multipleInitCall." + error;
                }
            }
            if (message.sessionUnavailable != null && message.hasOwnProperty("sessionUnavailable")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.ComputationError.SessionUnavailable.verify(message.sessionUnavailable);
                    if (error)
                        return "sessionUnavailable." + error;
                }
            }
            if (message.nativeError != null && message.hasOwnProperty("nativeError")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.NativeError.verify(message.nativeError);
                    if (error)
                        return "nativeError." + error;
                }
            }
            if (message.grabbing != null && message.hasOwnProperty("grabbing")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.ComputationError.Grabbing.verify(message.grabbing);
                    if (error)
                        return "grabbing." + error;
                }
            }
            if (message.sde != null && message.hasOwnProperty("sde")) {
                if (properties.error === 1)
                    return "error: multiple values";
                properties.error = 1;
                {
                    var error = $root.protocol.ComputationError.Sde.verify(message.sde);
                    if (error)
                        return "sde." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ComputationError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ComputationError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ComputationError} ComputationError
         */
        ComputationError.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ComputationError)
                return object;
            var message = new $root.protocol.ComputationError();
            if (object.destinationPath != null) {
                if (typeof object.destinationPath !== "object")
                    throw TypeError(".protocol.ComputationError.destinationPath: object expected");
                message.destinationPath = $root.protocol.ComputationError.DestinationPath.fromObject(object.destinationPath);
            }
            if (object.sessionCreatingFail != null) {
                if (typeof object.sessionCreatingFail !== "object")
                    throw TypeError(".protocol.ComputationError.sessionCreatingFail: object expected");
                message.sessionCreatingFail = $root.protocol.ComputationError.SessionCreatingFail.fromObject(object.sessionCreatingFail);
            }
            if (object.communication != null) {
                if (typeof object.communication !== "object")
                    throw TypeError(".protocol.ComputationError.communication: object expected");
                message.communication = $root.protocol.ComputationError.Communication.fromObject(object.communication);
            }
            if (object.operationNotSupported != null) {
                if (typeof object.operationNotSupported !== "object")
                    throw TypeError(".protocol.ComputationError.operationNotSupported: object expected");
                message.operationNotSupported = $root.protocol.ComputationError.OperationNotSupported.fromObject(object.operationNotSupported);
            }
            if (object.ioOperation != null) {
                if (typeof object.ioOperation !== "object")
                    throw TypeError(".protocol.ComputationError.ioOperation: object expected");
                message.ioOperation = $root.protocol.ComputationError.IoOperation.fromObject(object.ioOperation);
            }
            if (object.invalidData != null) {
                if (typeof object.invalidData !== "object")
                    throw TypeError(".protocol.ComputationError.invalidData: object expected");
                message.invalidData = $root.protocol.ComputationError.InvalidData.fromObject(object.invalidData);
            }
            if (object.invalidArgs != null) {
                if (typeof object.invalidArgs !== "object")
                    throw TypeError(".protocol.ComputationError.invalidArgs: object expected");
                message.invalidArgs = $root.protocol.ComputationError.InvalidArgs.fromObject(object.invalidArgs);
            }
            if (object.process != null) {
                if (typeof object.process !== "object")
                    throw TypeError(".protocol.ComputationError.process: object expected");
                message.process = $root.protocol.ComputationError.Process.fromObject(object.process);
            }
            if (object.protocol != null) {
                if (typeof object.protocol !== "object")
                    throw TypeError(".protocol.ComputationError.protocol: object expected");
                message.protocol = $root.protocol.ComputationError.Protocol.fromObject(object.protocol);
            }
            if (object.searchError != null) {
                if (typeof object.searchError !== "object")
                    throw TypeError(".protocol.ComputationError.searchError: object expected");
                message.searchError = $root.protocol.SearchError.fromObject(object.searchError);
            }
            if (object.multipleInitCall != null) {
                if (typeof object.multipleInitCall !== "object")
                    throw TypeError(".protocol.ComputationError.multipleInitCall: object expected");
                message.multipleInitCall = $root.protocol.ComputationError.MultipleInitCall.fromObject(object.multipleInitCall);
            }
            if (object.sessionUnavailable != null) {
                if (typeof object.sessionUnavailable !== "object")
                    throw TypeError(".protocol.ComputationError.sessionUnavailable: object expected");
                message.sessionUnavailable = $root.protocol.ComputationError.SessionUnavailable.fromObject(object.sessionUnavailable);
            }
            if (object.nativeError != null) {
                if (typeof object.nativeError !== "object")
                    throw TypeError(".protocol.ComputationError.nativeError: object expected");
                message.nativeError = $root.protocol.NativeError.fromObject(object.nativeError);
            }
            if (object.grabbing != null) {
                if (typeof object.grabbing !== "object")
                    throw TypeError(".protocol.ComputationError.grabbing: object expected");
                message.grabbing = $root.protocol.ComputationError.Grabbing.fromObject(object.grabbing);
            }
            if (object.sde != null) {
                if (typeof object.sde !== "object")
                    throw TypeError(".protocol.ComputationError.sde: object expected");
                message.sde = $root.protocol.ComputationError.Sde.fromObject(object.sde);
            }
            return message;
        };

        /**
         * Creates a plain object from a ComputationError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ComputationError
         * @static
         * @param {protocol.ComputationError} message ComputationError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ComputationError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.destinationPath != null && message.hasOwnProperty("destinationPath")) {
                object.destinationPath = $root.protocol.ComputationError.DestinationPath.toObject(message.destinationPath, options);
                if (options.oneofs)
                    object.error = "destinationPath";
            }
            if (message.sessionCreatingFail != null && message.hasOwnProperty("sessionCreatingFail")) {
                object.sessionCreatingFail = $root.protocol.ComputationError.SessionCreatingFail.toObject(message.sessionCreatingFail, options);
                if (options.oneofs)
                    object.error = "sessionCreatingFail";
            }
            if (message.communication != null && message.hasOwnProperty("communication")) {
                object.communication = $root.protocol.ComputationError.Communication.toObject(message.communication, options);
                if (options.oneofs)
                    object.error = "communication";
            }
            if (message.operationNotSupported != null && message.hasOwnProperty("operationNotSupported")) {
                object.operationNotSupported = $root.protocol.ComputationError.OperationNotSupported.toObject(message.operationNotSupported, options);
                if (options.oneofs)
                    object.error = "operationNotSupported";
            }
            if (message.ioOperation != null && message.hasOwnProperty("ioOperation")) {
                object.ioOperation = $root.protocol.ComputationError.IoOperation.toObject(message.ioOperation, options);
                if (options.oneofs)
                    object.error = "ioOperation";
            }
            if (message.invalidData != null && message.hasOwnProperty("invalidData")) {
                object.invalidData = $root.protocol.ComputationError.InvalidData.toObject(message.invalidData, options);
                if (options.oneofs)
                    object.error = "invalidData";
            }
            if (message.invalidArgs != null && message.hasOwnProperty("invalidArgs")) {
                object.invalidArgs = $root.protocol.ComputationError.InvalidArgs.toObject(message.invalidArgs, options);
                if (options.oneofs)
                    object.error = "invalidArgs";
            }
            if (message.process != null && message.hasOwnProperty("process")) {
                object.process = $root.protocol.ComputationError.Process.toObject(message.process, options);
                if (options.oneofs)
                    object.error = "process";
            }
            if (message.protocol != null && message.hasOwnProperty("protocol")) {
                object.protocol = $root.protocol.ComputationError.Protocol.toObject(message.protocol, options);
                if (options.oneofs)
                    object.error = "protocol";
            }
            if (message.searchError != null && message.hasOwnProperty("searchError")) {
                object.searchError = $root.protocol.SearchError.toObject(message.searchError, options);
                if (options.oneofs)
                    object.error = "searchError";
            }
            if (message.multipleInitCall != null && message.hasOwnProperty("multipleInitCall")) {
                object.multipleInitCall = $root.protocol.ComputationError.MultipleInitCall.toObject(message.multipleInitCall, options);
                if (options.oneofs)
                    object.error = "multipleInitCall";
            }
            if (message.sessionUnavailable != null && message.hasOwnProperty("sessionUnavailable")) {
                object.sessionUnavailable = $root.protocol.ComputationError.SessionUnavailable.toObject(message.sessionUnavailable, options);
                if (options.oneofs)
                    object.error = "sessionUnavailable";
            }
            if (message.nativeError != null && message.hasOwnProperty("nativeError")) {
                object.nativeError = $root.protocol.NativeError.toObject(message.nativeError, options);
                if (options.oneofs)
                    object.error = "nativeError";
            }
            if (message.grabbing != null && message.hasOwnProperty("grabbing")) {
                object.grabbing = $root.protocol.ComputationError.Grabbing.toObject(message.grabbing, options);
                if (options.oneofs)
                    object.error = "grabbing";
            }
            if (message.sde != null && message.hasOwnProperty("sde")) {
                object.sde = $root.protocol.ComputationError.Sde.toObject(message.sde, options);
                if (options.oneofs)
                    object.error = "sde";
            }
            return object;
        };

        /**
         * Converts this ComputationError to JSON.
         * @function toJSON
         * @memberof protocol.ComputationError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ComputationError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ComputationError
         * @function getTypeUrl
         * @memberof protocol.ComputationError
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ComputationError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.ComputationError";
        };

        ComputationError.DestinationPath = (function() {

            /**
             * Properties of a DestinationPath.
             * @memberof protocol.ComputationError
             * @interface IDestinationPath
             */

            /**
             * Constructs a new DestinationPath.
             * @memberof protocol.ComputationError
             * @classdesc Represents a DestinationPath.
             * @implements IDestinationPath
             * @constructor
             * @param {protocol.ComputationError.IDestinationPath=} [properties] Properties to set
             */
            function DestinationPath(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new DestinationPath instance using the specified properties.
             * @function create
             * @memberof protocol.ComputationError.DestinationPath
             * @static
             * @param {protocol.ComputationError.IDestinationPath=} [properties] Properties to set
             * @returns {protocol.ComputationError.DestinationPath} DestinationPath instance
             */
            DestinationPath.create = function create(properties) {
                return new DestinationPath(properties);
            };

            /**
             * Encodes the specified DestinationPath message. Does not implicitly {@link protocol.ComputationError.DestinationPath.verify|verify} messages.
             * @function encode
             * @memberof protocol.ComputationError.DestinationPath
             * @static
             * @param {protocol.ComputationError.IDestinationPath} message DestinationPath message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DestinationPath.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified DestinationPath message, length delimited. Does not implicitly {@link protocol.ComputationError.DestinationPath.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.ComputationError.DestinationPath
             * @static
             * @param {protocol.ComputationError.IDestinationPath} message DestinationPath message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DestinationPath.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DestinationPath message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.ComputationError.DestinationPath
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.ComputationError.DestinationPath} DestinationPath
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DestinationPath.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ComputationError.DestinationPath();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DestinationPath message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.ComputationError.DestinationPath
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.ComputationError.DestinationPath} DestinationPath
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DestinationPath.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DestinationPath message.
             * @function verify
             * @memberof protocol.ComputationError.DestinationPath
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DestinationPath.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a DestinationPath message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.ComputationError.DestinationPath
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.ComputationError.DestinationPath} DestinationPath
             */
            DestinationPath.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.ComputationError.DestinationPath)
                    return object;
                return new $root.protocol.ComputationError.DestinationPath();
            };

            /**
             * Creates a plain object from a DestinationPath message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.ComputationError.DestinationPath
             * @static
             * @param {protocol.ComputationError.DestinationPath} message DestinationPath
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DestinationPath.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this DestinationPath to JSON.
             * @function toJSON
             * @memberof protocol.ComputationError.DestinationPath
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DestinationPath.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DestinationPath
             * @function getTypeUrl
             * @memberof protocol.ComputationError.DestinationPath
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DestinationPath.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.ComputationError.DestinationPath";
            };

            return DestinationPath;
        })();

        ComputationError.SessionCreatingFail = (function() {

            /**
             * Properties of a SessionCreatingFail.
             * @memberof protocol.ComputationError
             * @interface ISessionCreatingFail
             */

            /**
             * Constructs a new SessionCreatingFail.
             * @memberof protocol.ComputationError
             * @classdesc Represents a SessionCreatingFail.
             * @implements ISessionCreatingFail
             * @constructor
             * @param {protocol.ComputationError.ISessionCreatingFail=} [properties] Properties to set
             */
            function SessionCreatingFail(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new SessionCreatingFail instance using the specified properties.
             * @function create
             * @memberof protocol.ComputationError.SessionCreatingFail
             * @static
             * @param {protocol.ComputationError.ISessionCreatingFail=} [properties] Properties to set
             * @returns {protocol.ComputationError.SessionCreatingFail} SessionCreatingFail instance
             */
            SessionCreatingFail.create = function create(properties) {
                return new SessionCreatingFail(properties);
            };

            /**
             * Encodes the specified SessionCreatingFail message. Does not implicitly {@link protocol.ComputationError.SessionCreatingFail.verify|verify} messages.
             * @function encode
             * @memberof protocol.ComputationError.SessionCreatingFail
             * @static
             * @param {protocol.ComputationError.ISessionCreatingFail} message SessionCreatingFail message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionCreatingFail.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified SessionCreatingFail message, length delimited. Does not implicitly {@link protocol.ComputationError.SessionCreatingFail.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.ComputationError.SessionCreatingFail
             * @static
             * @param {protocol.ComputationError.ISessionCreatingFail} message SessionCreatingFail message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionCreatingFail.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SessionCreatingFail message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.ComputationError.SessionCreatingFail
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.ComputationError.SessionCreatingFail} SessionCreatingFail
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionCreatingFail.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ComputationError.SessionCreatingFail();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SessionCreatingFail message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.ComputationError.SessionCreatingFail
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.ComputationError.SessionCreatingFail} SessionCreatingFail
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionCreatingFail.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SessionCreatingFail message.
             * @function verify
             * @memberof protocol.ComputationError.SessionCreatingFail
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SessionCreatingFail.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a SessionCreatingFail message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.ComputationError.SessionCreatingFail
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.ComputationError.SessionCreatingFail} SessionCreatingFail
             */
            SessionCreatingFail.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.ComputationError.SessionCreatingFail)
                    return object;
                return new $root.protocol.ComputationError.SessionCreatingFail();
            };

            /**
             * Creates a plain object from a SessionCreatingFail message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.ComputationError.SessionCreatingFail
             * @static
             * @param {protocol.ComputationError.SessionCreatingFail} message SessionCreatingFail
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SessionCreatingFail.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this SessionCreatingFail to JSON.
             * @function toJSON
             * @memberof protocol.ComputationError.SessionCreatingFail
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SessionCreatingFail.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SessionCreatingFail
             * @function getTypeUrl
             * @memberof protocol.ComputationError.SessionCreatingFail
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SessionCreatingFail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.ComputationError.SessionCreatingFail";
            };

            return SessionCreatingFail;
        })();

        ComputationError.Communication = (function() {

            /**
             * Properties of a Communication.
             * @memberof protocol.ComputationError
             * @interface ICommunication
             * @property {string|null} [message] Communication message
             */

            /**
             * Constructs a new Communication.
             * @memberof protocol.ComputationError
             * @classdesc Represents a Communication.
             * @implements ICommunication
             * @constructor
             * @param {protocol.ComputationError.ICommunication=} [properties] Properties to set
             */
            function Communication(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Communication message.
             * @member {string} message
             * @memberof protocol.ComputationError.Communication
             * @instance
             */
            Communication.prototype.message = "";

            /**
             * Creates a new Communication instance using the specified properties.
             * @function create
             * @memberof protocol.ComputationError.Communication
             * @static
             * @param {protocol.ComputationError.ICommunication=} [properties] Properties to set
             * @returns {protocol.ComputationError.Communication} Communication instance
             */
            Communication.create = function create(properties) {
                return new Communication(properties);
            };

            /**
             * Encodes the specified Communication message. Does not implicitly {@link protocol.ComputationError.Communication.verify|verify} messages.
             * @function encode
             * @memberof protocol.ComputationError.Communication
             * @static
             * @param {protocol.ComputationError.ICommunication} message Communication message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Communication.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Communication message, length delimited. Does not implicitly {@link protocol.ComputationError.Communication.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.ComputationError.Communication
             * @static
             * @param {protocol.ComputationError.ICommunication} message Communication message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Communication.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Communication message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.ComputationError.Communication
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.ComputationError.Communication} Communication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Communication.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ComputationError.Communication();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Communication message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.ComputationError.Communication
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.ComputationError.Communication} Communication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Communication.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Communication message.
             * @function verify
             * @memberof protocol.ComputationError.Communication
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Communication.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a Communication message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.ComputationError.Communication
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.ComputationError.Communication} Communication
             */
            Communication.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.ComputationError.Communication)
                    return object;
                var message = new $root.protocol.ComputationError.Communication();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a Communication message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.ComputationError.Communication
             * @static
             * @param {protocol.ComputationError.Communication} message Communication
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Communication.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Communication to JSON.
             * @function toJSON
             * @memberof protocol.ComputationError.Communication
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Communication.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Communication
             * @function getTypeUrl
             * @memberof protocol.ComputationError.Communication
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Communication.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.ComputationError.Communication";
            };

            return Communication;
        })();

        ComputationError.OperationNotSupported = (function() {

            /**
             * Properties of an OperationNotSupported.
             * @memberof protocol.ComputationError
             * @interface IOperationNotSupported
             * @property {string|null} [message] OperationNotSupported message
             */

            /**
             * Constructs a new OperationNotSupported.
             * @memberof protocol.ComputationError
             * @classdesc Represents an OperationNotSupported.
             * @implements IOperationNotSupported
             * @constructor
             * @param {protocol.ComputationError.IOperationNotSupported=} [properties] Properties to set
             */
            function OperationNotSupported(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OperationNotSupported message.
             * @member {string} message
             * @memberof protocol.ComputationError.OperationNotSupported
             * @instance
             */
            OperationNotSupported.prototype.message = "";

            /**
             * Creates a new OperationNotSupported instance using the specified properties.
             * @function create
             * @memberof protocol.ComputationError.OperationNotSupported
             * @static
             * @param {protocol.ComputationError.IOperationNotSupported=} [properties] Properties to set
             * @returns {protocol.ComputationError.OperationNotSupported} OperationNotSupported instance
             */
            OperationNotSupported.create = function create(properties) {
                return new OperationNotSupported(properties);
            };

            /**
             * Encodes the specified OperationNotSupported message. Does not implicitly {@link protocol.ComputationError.OperationNotSupported.verify|verify} messages.
             * @function encode
             * @memberof protocol.ComputationError.OperationNotSupported
             * @static
             * @param {protocol.ComputationError.IOperationNotSupported} message OperationNotSupported message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OperationNotSupported.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified OperationNotSupported message, length delimited. Does not implicitly {@link protocol.ComputationError.OperationNotSupported.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.ComputationError.OperationNotSupported
             * @static
             * @param {protocol.ComputationError.IOperationNotSupported} message OperationNotSupported message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OperationNotSupported.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OperationNotSupported message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.ComputationError.OperationNotSupported
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.ComputationError.OperationNotSupported} OperationNotSupported
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OperationNotSupported.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ComputationError.OperationNotSupported();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OperationNotSupported message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.ComputationError.OperationNotSupported
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.ComputationError.OperationNotSupported} OperationNotSupported
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OperationNotSupported.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OperationNotSupported message.
             * @function verify
             * @memberof protocol.ComputationError.OperationNotSupported
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OperationNotSupported.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates an OperationNotSupported message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.ComputationError.OperationNotSupported
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.ComputationError.OperationNotSupported} OperationNotSupported
             */
            OperationNotSupported.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.ComputationError.OperationNotSupported)
                    return object;
                var message = new $root.protocol.ComputationError.OperationNotSupported();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from an OperationNotSupported message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.ComputationError.OperationNotSupported
             * @static
             * @param {protocol.ComputationError.OperationNotSupported} message OperationNotSupported
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OperationNotSupported.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this OperationNotSupported to JSON.
             * @function toJSON
             * @memberof protocol.ComputationError.OperationNotSupported
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OperationNotSupported.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OperationNotSupported
             * @function getTypeUrl
             * @memberof protocol.ComputationError.OperationNotSupported
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OperationNotSupported.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.ComputationError.OperationNotSupported";
            };

            return OperationNotSupported;
        })();

        ComputationError.IoOperation = (function() {

            /**
             * Properties of an IoOperation.
             * @memberof protocol.ComputationError
             * @interface IIoOperation
             * @property {string|null} [message] IoOperation message
             */

            /**
             * Constructs a new IoOperation.
             * @memberof protocol.ComputationError
             * @classdesc Represents an IoOperation.
             * @implements IIoOperation
             * @constructor
             * @param {protocol.ComputationError.IIoOperation=} [properties] Properties to set
             */
            function IoOperation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IoOperation message.
             * @member {string} message
             * @memberof protocol.ComputationError.IoOperation
             * @instance
             */
            IoOperation.prototype.message = "";

            /**
             * Creates a new IoOperation instance using the specified properties.
             * @function create
             * @memberof protocol.ComputationError.IoOperation
             * @static
             * @param {protocol.ComputationError.IIoOperation=} [properties] Properties to set
             * @returns {protocol.ComputationError.IoOperation} IoOperation instance
             */
            IoOperation.create = function create(properties) {
                return new IoOperation(properties);
            };

            /**
             * Encodes the specified IoOperation message. Does not implicitly {@link protocol.ComputationError.IoOperation.verify|verify} messages.
             * @function encode
             * @memberof protocol.ComputationError.IoOperation
             * @static
             * @param {protocol.ComputationError.IIoOperation} message IoOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IoOperation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified IoOperation message, length delimited. Does not implicitly {@link protocol.ComputationError.IoOperation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.ComputationError.IoOperation
             * @static
             * @param {protocol.ComputationError.IIoOperation} message IoOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IoOperation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an IoOperation message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.ComputationError.IoOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.ComputationError.IoOperation} IoOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IoOperation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ComputationError.IoOperation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an IoOperation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.ComputationError.IoOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.ComputationError.IoOperation} IoOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IoOperation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an IoOperation message.
             * @function verify
             * @memberof protocol.ComputationError.IoOperation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IoOperation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates an IoOperation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.ComputationError.IoOperation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.ComputationError.IoOperation} IoOperation
             */
            IoOperation.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.ComputationError.IoOperation)
                    return object;
                var message = new $root.protocol.ComputationError.IoOperation();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from an IoOperation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.ComputationError.IoOperation
             * @static
             * @param {protocol.ComputationError.IoOperation} message IoOperation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IoOperation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this IoOperation to JSON.
             * @function toJSON
             * @memberof protocol.ComputationError.IoOperation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IoOperation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for IoOperation
             * @function getTypeUrl
             * @memberof protocol.ComputationError.IoOperation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            IoOperation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.ComputationError.IoOperation";
            };

            return IoOperation;
        })();

        ComputationError.InvalidData = (function() {

            /**
             * Properties of an InvalidData.
             * @memberof protocol.ComputationError
             * @interface IInvalidData
             */

            /**
             * Constructs a new InvalidData.
             * @memberof protocol.ComputationError
             * @classdesc Represents an InvalidData.
             * @implements IInvalidData
             * @constructor
             * @param {protocol.ComputationError.IInvalidData=} [properties] Properties to set
             */
            function InvalidData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new InvalidData instance using the specified properties.
             * @function create
             * @memberof protocol.ComputationError.InvalidData
             * @static
             * @param {protocol.ComputationError.IInvalidData=} [properties] Properties to set
             * @returns {protocol.ComputationError.InvalidData} InvalidData instance
             */
            InvalidData.create = function create(properties) {
                return new InvalidData(properties);
            };

            /**
             * Encodes the specified InvalidData message. Does not implicitly {@link protocol.ComputationError.InvalidData.verify|verify} messages.
             * @function encode
             * @memberof protocol.ComputationError.InvalidData
             * @static
             * @param {protocol.ComputationError.IInvalidData} message InvalidData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InvalidData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified InvalidData message, length delimited. Does not implicitly {@link protocol.ComputationError.InvalidData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.ComputationError.InvalidData
             * @static
             * @param {protocol.ComputationError.IInvalidData} message InvalidData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InvalidData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InvalidData message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.ComputationError.InvalidData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.ComputationError.InvalidData} InvalidData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InvalidData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ComputationError.InvalidData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InvalidData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.ComputationError.InvalidData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.ComputationError.InvalidData} InvalidData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InvalidData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InvalidData message.
             * @function verify
             * @memberof protocol.ComputationError.InvalidData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InvalidData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an InvalidData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.ComputationError.InvalidData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.ComputationError.InvalidData} InvalidData
             */
            InvalidData.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.ComputationError.InvalidData)
                    return object;
                return new $root.protocol.ComputationError.InvalidData();
            };

            /**
             * Creates a plain object from an InvalidData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.ComputationError.InvalidData
             * @static
             * @param {protocol.ComputationError.InvalidData} message InvalidData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InvalidData.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this InvalidData to JSON.
             * @function toJSON
             * @memberof protocol.ComputationError.InvalidData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InvalidData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for InvalidData
             * @function getTypeUrl
             * @memberof protocol.ComputationError.InvalidData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            InvalidData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.ComputationError.InvalidData";
            };

            return InvalidData;
        })();

        ComputationError.InvalidArgs = (function() {

            /**
             * Properties of an InvalidArgs.
             * @memberof protocol.ComputationError
             * @interface IInvalidArgs
             * @property {string|null} [message] InvalidArgs message
             */

            /**
             * Constructs a new InvalidArgs.
             * @memberof protocol.ComputationError
             * @classdesc Represents an InvalidArgs.
             * @implements IInvalidArgs
             * @constructor
             * @param {protocol.ComputationError.IInvalidArgs=} [properties] Properties to set
             */
            function InvalidArgs(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InvalidArgs message.
             * @member {string} message
             * @memberof protocol.ComputationError.InvalidArgs
             * @instance
             */
            InvalidArgs.prototype.message = "";

            /**
             * Creates a new InvalidArgs instance using the specified properties.
             * @function create
             * @memberof protocol.ComputationError.InvalidArgs
             * @static
             * @param {protocol.ComputationError.IInvalidArgs=} [properties] Properties to set
             * @returns {protocol.ComputationError.InvalidArgs} InvalidArgs instance
             */
            InvalidArgs.create = function create(properties) {
                return new InvalidArgs(properties);
            };

            /**
             * Encodes the specified InvalidArgs message. Does not implicitly {@link protocol.ComputationError.InvalidArgs.verify|verify} messages.
             * @function encode
             * @memberof protocol.ComputationError.InvalidArgs
             * @static
             * @param {protocol.ComputationError.IInvalidArgs} message InvalidArgs message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InvalidArgs.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified InvalidArgs message, length delimited. Does not implicitly {@link protocol.ComputationError.InvalidArgs.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.ComputationError.InvalidArgs
             * @static
             * @param {protocol.ComputationError.IInvalidArgs} message InvalidArgs message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InvalidArgs.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InvalidArgs message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.ComputationError.InvalidArgs
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.ComputationError.InvalidArgs} InvalidArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InvalidArgs.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ComputationError.InvalidArgs();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an InvalidArgs message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.ComputationError.InvalidArgs
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.ComputationError.InvalidArgs} InvalidArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InvalidArgs.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InvalidArgs message.
             * @function verify
             * @memberof protocol.ComputationError.InvalidArgs
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InvalidArgs.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates an InvalidArgs message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.ComputationError.InvalidArgs
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.ComputationError.InvalidArgs} InvalidArgs
             */
            InvalidArgs.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.ComputationError.InvalidArgs)
                    return object;
                var message = new $root.protocol.ComputationError.InvalidArgs();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from an InvalidArgs message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.ComputationError.InvalidArgs
             * @static
             * @param {protocol.ComputationError.InvalidArgs} message InvalidArgs
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InvalidArgs.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this InvalidArgs to JSON.
             * @function toJSON
             * @memberof protocol.ComputationError.InvalidArgs
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InvalidArgs.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for InvalidArgs
             * @function getTypeUrl
             * @memberof protocol.ComputationError.InvalidArgs
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            InvalidArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.ComputationError.InvalidArgs";
            };

            return InvalidArgs;
        })();

        ComputationError.Process = (function() {

            /**
             * Properties of a Process.
             * @memberof protocol.ComputationError
             * @interface IProcess
             * @property {string|null} [message] Process message
             */

            /**
             * Constructs a new Process.
             * @memberof protocol.ComputationError
             * @classdesc Represents a Process.
             * @implements IProcess
             * @constructor
             * @param {protocol.ComputationError.IProcess=} [properties] Properties to set
             */
            function Process(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Process message.
             * @member {string} message
             * @memberof protocol.ComputationError.Process
             * @instance
             */
            Process.prototype.message = "";

            /**
             * Creates a new Process instance using the specified properties.
             * @function create
             * @memberof protocol.ComputationError.Process
             * @static
             * @param {protocol.ComputationError.IProcess=} [properties] Properties to set
             * @returns {protocol.ComputationError.Process} Process instance
             */
            Process.create = function create(properties) {
                return new Process(properties);
            };

            /**
             * Encodes the specified Process message. Does not implicitly {@link protocol.ComputationError.Process.verify|verify} messages.
             * @function encode
             * @memberof protocol.ComputationError.Process
             * @static
             * @param {protocol.ComputationError.IProcess} message Process message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Process.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Process message, length delimited. Does not implicitly {@link protocol.ComputationError.Process.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.ComputationError.Process
             * @static
             * @param {protocol.ComputationError.IProcess} message Process message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Process.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Process message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.ComputationError.Process
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.ComputationError.Process} Process
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Process.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ComputationError.Process();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Process message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.ComputationError.Process
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.ComputationError.Process} Process
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Process.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Process message.
             * @function verify
             * @memberof protocol.ComputationError.Process
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Process.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a Process message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.ComputationError.Process
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.ComputationError.Process} Process
             */
            Process.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.ComputationError.Process)
                    return object;
                var message = new $root.protocol.ComputationError.Process();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a Process message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.ComputationError.Process
             * @static
             * @param {protocol.ComputationError.Process} message Process
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Process.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Process to JSON.
             * @function toJSON
             * @memberof protocol.ComputationError.Process
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Process.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Process
             * @function getTypeUrl
             * @memberof protocol.ComputationError.Process
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Process.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.ComputationError.Process";
            };

            return Process;
        })();

        ComputationError.Protocol = (function() {

            /**
             * Properties of a Protocol.
             * @memberof protocol.ComputationError
             * @interface IProtocol
             * @property {string|null} [message] Protocol message
             */

            /**
             * Constructs a new Protocol.
             * @memberof protocol.ComputationError
             * @classdesc Represents a Protocol.
             * @implements IProtocol
             * @constructor
             * @param {protocol.ComputationError.IProtocol=} [properties] Properties to set
             */
            function Protocol(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Protocol message.
             * @member {string} message
             * @memberof protocol.ComputationError.Protocol
             * @instance
             */
            Protocol.prototype.message = "";

            /**
             * Creates a new Protocol instance using the specified properties.
             * @function create
             * @memberof protocol.ComputationError.Protocol
             * @static
             * @param {protocol.ComputationError.IProtocol=} [properties] Properties to set
             * @returns {protocol.ComputationError.Protocol} Protocol instance
             */
            Protocol.create = function create(properties) {
                return new Protocol(properties);
            };

            /**
             * Encodes the specified Protocol message. Does not implicitly {@link protocol.ComputationError.Protocol.verify|verify} messages.
             * @function encode
             * @memberof protocol.ComputationError.Protocol
             * @static
             * @param {protocol.ComputationError.IProtocol} message Protocol message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Protocol.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Protocol message, length delimited. Does not implicitly {@link protocol.ComputationError.Protocol.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.ComputationError.Protocol
             * @static
             * @param {protocol.ComputationError.IProtocol} message Protocol message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Protocol.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Protocol message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.ComputationError.Protocol
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.ComputationError.Protocol} Protocol
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Protocol.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ComputationError.Protocol();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Protocol message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.ComputationError.Protocol
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.ComputationError.Protocol} Protocol
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Protocol.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Protocol message.
             * @function verify
             * @memberof protocol.ComputationError.Protocol
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Protocol.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a Protocol message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.ComputationError.Protocol
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.ComputationError.Protocol} Protocol
             */
            Protocol.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.ComputationError.Protocol)
                    return object;
                var message = new $root.protocol.ComputationError.Protocol();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a Protocol message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.ComputationError.Protocol
             * @static
             * @param {protocol.ComputationError.Protocol} message Protocol
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Protocol.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Protocol to JSON.
             * @function toJSON
             * @memberof protocol.ComputationError.Protocol
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Protocol.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Protocol
             * @function getTypeUrl
             * @memberof protocol.ComputationError.Protocol
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Protocol.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.ComputationError.Protocol";
            };

            return Protocol;
        })();

        ComputationError.MultipleInitCall = (function() {

            /**
             * Properties of a MultipleInitCall.
             * @memberof protocol.ComputationError
             * @interface IMultipleInitCall
             */

            /**
             * Constructs a new MultipleInitCall.
             * @memberof protocol.ComputationError
             * @classdesc Represents a MultipleInitCall.
             * @implements IMultipleInitCall
             * @constructor
             * @param {protocol.ComputationError.IMultipleInitCall=} [properties] Properties to set
             */
            function MultipleInitCall(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new MultipleInitCall instance using the specified properties.
             * @function create
             * @memberof protocol.ComputationError.MultipleInitCall
             * @static
             * @param {protocol.ComputationError.IMultipleInitCall=} [properties] Properties to set
             * @returns {protocol.ComputationError.MultipleInitCall} MultipleInitCall instance
             */
            MultipleInitCall.create = function create(properties) {
                return new MultipleInitCall(properties);
            };

            /**
             * Encodes the specified MultipleInitCall message. Does not implicitly {@link protocol.ComputationError.MultipleInitCall.verify|verify} messages.
             * @function encode
             * @memberof protocol.ComputationError.MultipleInitCall
             * @static
             * @param {protocol.ComputationError.IMultipleInitCall} message MultipleInitCall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultipleInitCall.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified MultipleInitCall message, length delimited. Does not implicitly {@link protocol.ComputationError.MultipleInitCall.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.ComputationError.MultipleInitCall
             * @static
             * @param {protocol.ComputationError.IMultipleInitCall} message MultipleInitCall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MultipleInitCall.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MultipleInitCall message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.ComputationError.MultipleInitCall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.ComputationError.MultipleInitCall} MultipleInitCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultipleInitCall.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ComputationError.MultipleInitCall();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MultipleInitCall message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.ComputationError.MultipleInitCall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.ComputationError.MultipleInitCall} MultipleInitCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MultipleInitCall.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MultipleInitCall message.
             * @function verify
             * @memberof protocol.ComputationError.MultipleInitCall
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MultipleInitCall.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a MultipleInitCall message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.ComputationError.MultipleInitCall
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.ComputationError.MultipleInitCall} MultipleInitCall
             */
            MultipleInitCall.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.ComputationError.MultipleInitCall)
                    return object;
                return new $root.protocol.ComputationError.MultipleInitCall();
            };

            /**
             * Creates a plain object from a MultipleInitCall message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.ComputationError.MultipleInitCall
             * @static
             * @param {protocol.ComputationError.MultipleInitCall} message MultipleInitCall
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MultipleInitCall.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this MultipleInitCall to JSON.
             * @function toJSON
             * @memberof protocol.ComputationError.MultipleInitCall
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MultipleInitCall.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MultipleInitCall
             * @function getTypeUrl
             * @memberof protocol.ComputationError.MultipleInitCall
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MultipleInitCall.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.ComputationError.MultipleInitCall";
            };

            return MultipleInitCall;
        })();

        ComputationError.SessionUnavailable = (function() {

            /**
             * Properties of a SessionUnavailable.
             * @memberof protocol.ComputationError
             * @interface ISessionUnavailable
             */

            /**
             * Constructs a new SessionUnavailable.
             * @memberof protocol.ComputationError
             * @classdesc Represents a SessionUnavailable.
             * @implements ISessionUnavailable
             * @constructor
             * @param {protocol.ComputationError.ISessionUnavailable=} [properties] Properties to set
             */
            function SessionUnavailable(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new SessionUnavailable instance using the specified properties.
             * @function create
             * @memberof protocol.ComputationError.SessionUnavailable
             * @static
             * @param {protocol.ComputationError.ISessionUnavailable=} [properties] Properties to set
             * @returns {protocol.ComputationError.SessionUnavailable} SessionUnavailable instance
             */
            SessionUnavailable.create = function create(properties) {
                return new SessionUnavailable(properties);
            };

            /**
             * Encodes the specified SessionUnavailable message. Does not implicitly {@link protocol.ComputationError.SessionUnavailable.verify|verify} messages.
             * @function encode
             * @memberof protocol.ComputationError.SessionUnavailable
             * @static
             * @param {protocol.ComputationError.ISessionUnavailable} message SessionUnavailable message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionUnavailable.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified SessionUnavailable message, length delimited. Does not implicitly {@link protocol.ComputationError.SessionUnavailable.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.ComputationError.SessionUnavailable
             * @static
             * @param {protocol.ComputationError.ISessionUnavailable} message SessionUnavailable message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionUnavailable.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SessionUnavailable message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.ComputationError.SessionUnavailable
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.ComputationError.SessionUnavailable} SessionUnavailable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionUnavailable.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ComputationError.SessionUnavailable();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SessionUnavailable message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.ComputationError.SessionUnavailable
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.ComputationError.SessionUnavailable} SessionUnavailable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionUnavailable.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SessionUnavailable message.
             * @function verify
             * @memberof protocol.ComputationError.SessionUnavailable
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SessionUnavailable.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a SessionUnavailable message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.ComputationError.SessionUnavailable
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.ComputationError.SessionUnavailable} SessionUnavailable
             */
            SessionUnavailable.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.ComputationError.SessionUnavailable)
                    return object;
                return new $root.protocol.ComputationError.SessionUnavailable();
            };

            /**
             * Creates a plain object from a SessionUnavailable message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.ComputationError.SessionUnavailable
             * @static
             * @param {protocol.ComputationError.SessionUnavailable} message SessionUnavailable
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SessionUnavailable.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this SessionUnavailable to JSON.
             * @function toJSON
             * @memberof protocol.ComputationError.SessionUnavailable
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SessionUnavailable.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SessionUnavailable
             * @function getTypeUrl
             * @memberof protocol.ComputationError.SessionUnavailable
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SessionUnavailable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.ComputationError.SessionUnavailable";
            };

            return SessionUnavailable;
        })();

        ComputationError.Grabbing = (function() {

            /**
             * Properties of a Grabbing.
             * @memberof protocol.ComputationError
             * @interface IGrabbing
             * @property {protocol.IGrabError|null} [error] Grabbing error
             */

            /**
             * Constructs a new Grabbing.
             * @memberof protocol.ComputationError
             * @classdesc Represents a Grabbing.
             * @implements IGrabbing
             * @constructor
             * @param {protocol.ComputationError.IGrabbing=} [properties] Properties to set
             */
            function Grabbing(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Grabbing error.
             * @member {protocol.IGrabError|null|undefined} error
             * @memberof protocol.ComputationError.Grabbing
             * @instance
             */
            Grabbing.prototype.error = null;

            /**
             * Creates a new Grabbing instance using the specified properties.
             * @function create
             * @memberof protocol.ComputationError.Grabbing
             * @static
             * @param {protocol.ComputationError.IGrabbing=} [properties] Properties to set
             * @returns {protocol.ComputationError.Grabbing} Grabbing instance
             */
            Grabbing.create = function create(properties) {
                return new Grabbing(properties);
            };

            /**
             * Encodes the specified Grabbing message. Does not implicitly {@link protocol.ComputationError.Grabbing.verify|verify} messages.
             * @function encode
             * @memberof protocol.ComputationError.Grabbing
             * @static
             * @param {protocol.ComputationError.IGrabbing} message Grabbing message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Grabbing.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    $root.protocol.GrabError.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Grabbing message, length delimited. Does not implicitly {@link protocol.ComputationError.Grabbing.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.ComputationError.Grabbing
             * @static
             * @param {protocol.ComputationError.IGrabbing} message Grabbing message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Grabbing.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Grabbing message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.ComputationError.Grabbing
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.ComputationError.Grabbing} Grabbing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Grabbing.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ComputationError.Grabbing();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.error = $root.protocol.GrabError.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Grabbing message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.ComputationError.Grabbing
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.ComputationError.Grabbing} Grabbing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Grabbing.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Grabbing message.
             * @function verify
             * @memberof protocol.ComputationError.Grabbing
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Grabbing.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.protocol.GrabError.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                return null;
            };

            /**
             * Creates a Grabbing message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.ComputationError.Grabbing
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.ComputationError.Grabbing} Grabbing
             */
            Grabbing.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.ComputationError.Grabbing)
                    return object;
                var message = new $root.protocol.ComputationError.Grabbing();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".protocol.ComputationError.Grabbing.error: object expected");
                    message.error = $root.protocol.GrabError.fromObject(object.error);
                }
                return message;
            };

            /**
             * Creates a plain object from a Grabbing message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.ComputationError.Grabbing
             * @static
             * @param {protocol.ComputationError.Grabbing} message Grabbing
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Grabbing.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.error = null;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.protocol.GrabError.toObject(message.error, options);
                return object;
            };

            /**
             * Converts this Grabbing to JSON.
             * @function toJSON
             * @memberof protocol.ComputationError.Grabbing
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Grabbing.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Grabbing
             * @function getTypeUrl
             * @memberof protocol.ComputationError.Grabbing
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Grabbing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.ComputationError.Grabbing";
            };

            return Grabbing;
        })();

        ComputationError.Sde = (function() {

            /**
             * Properties of a Sde.
             * @memberof protocol.ComputationError
             * @interface ISde
             * @property {string|null} [message] Sde message
             */

            /**
             * Constructs a new Sde.
             * @memberof protocol.ComputationError
             * @classdesc Represents a Sde.
             * @implements ISde
             * @constructor
             * @param {protocol.ComputationError.ISde=} [properties] Properties to set
             */
            function Sde(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Sde message.
             * @member {string} message
             * @memberof protocol.ComputationError.Sde
             * @instance
             */
            Sde.prototype.message = "";

            /**
             * Creates a new Sde instance using the specified properties.
             * @function create
             * @memberof protocol.ComputationError.Sde
             * @static
             * @param {protocol.ComputationError.ISde=} [properties] Properties to set
             * @returns {protocol.ComputationError.Sde} Sde instance
             */
            Sde.create = function create(properties) {
                return new Sde(properties);
            };

            /**
             * Encodes the specified Sde message. Does not implicitly {@link protocol.ComputationError.Sde.verify|verify} messages.
             * @function encode
             * @memberof protocol.ComputationError.Sde
             * @static
             * @param {protocol.ComputationError.ISde} message Sde message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Sde.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified Sde message, length delimited. Does not implicitly {@link protocol.ComputationError.Sde.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.ComputationError.Sde
             * @static
             * @param {protocol.ComputationError.ISde} message Sde message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Sde.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Sde message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.ComputationError.Sde
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.ComputationError.Sde} Sde
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Sde.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ComputationError.Sde();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Sde message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.ComputationError.Sde
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.ComputationError.Sde} Sde
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Sde.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Sde message.
             * @function verify
             * @memberof protocol.ComputationError.Sde
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Sde.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a Sde message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.ComputationError.Sde
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.ComputationError.Sde} Sde
             */
            Sde.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.ComputationError.Sde)
                    return object;
                var message = new $root.protocol.ComputationError.Sde();
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a Sde message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.ComputationError.Sde
             * @static
             * @param {protocol.ComputationError.Sde} message Sde
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Sde.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.message = "";
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this Sde to JSON.
             * @function toJSON
             * @memberof protocol.ComputationError.Sde
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Sde.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Sde
             * @function getTypeUrl
             * @memberof protocol.ComputationError.Sde
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Sde.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.ComputationError.Sde";
            };

            return Sde;
        })();

        return ComputationError;
    })();

    protocol.OperationDone = (function() {

        /**
         * Properties of an OperationDone.
         * @memberof protocol
         * @interface IOperationDone
         * @property {string|null} [uuid] OperationDone uuid
         * @property {string|null} [result] OperationDone result
         */

        /**
         * Constructs a new OperationDone.
         * @memberof protocol
         * @classdesc Represents an OperationDone.
         * @implements IOperationDone
         * @constructor
         * @param {protocol.IOperationDone=} [properties] Properties to set
         */
        function OperationDone(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperationDone uuid.
         * @member {string} uuid
         * @memberof protocol.OperationDone
         * @instance
         */
        OperationDone.prototype.uuid = "";

        /**
         * OperationDone result.
         * @member {string} result
         * @memberof protocol.OperationDone
         * @instance
         */
        OperationDone.prototype.result = "";

        /**
         * Creates a new OperationDone instance using the specified properties.
         * @function create
         * @memberof protocol.OperationDone
         * @static
         * @param {protocol.IOperationDone=} [properties] Properties to set
         * @returns {protocol.OperationDone} OperationDone instance
         */
        OperationDone.create = function create(properties) {
            return new OperationDone(properties);
        };

        /**
         * Encodes the specified OperationDone message. Does not implicitly {@link protocol.OperationDone.verify|verify} messages.
         * @function encode
         * @memberof protocol.OperationDone
         * @static
         * @param {protocol.IOperationDone} message OperationDone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperationDone.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.result);
            return writer;
        };

        /**
         * Encodes the specified OperationDone message, length delimited. Does not implicitly {@link protocol.OperationDone.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.OperationDone
         * @static
         * @param {protocol.IOperationDone} message OperationDone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperationDone.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperationDone message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.OperationDone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.OperationDone} OperationDone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperationDone.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.OperationDone();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uuid = reader.string();
                        break;
                    }
                case 2: {
                        message.result = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OperationDone message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.OperationDone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.OperationDone} OperationDone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperationDone.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperationDone message.
         * @function verify
         * @memberof protocol.OperationDone
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperationDone.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isString(message.result))
                    return "result: string expected";
            return null;
        };

        /**
         * Creates an OperationDone message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.OperationDone
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.OperationDone} OperationDone
         */
        OperationDone.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.OperationDone)
                return object;
            var message = new $root.protocol.OperationDone();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.result != null)
                message.result = String(object.result);
            return message;
        };

        /**
         * Creates a plain object from an OperationDone message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.OperationDone
         * @static
         * @param {protocol.OperationDone} message OperationDone
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OperationDone.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.result = "";
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            return object;
        };

        /**
         * Converts this OperationDone to JSON.
         * @function toJSON
         * @memberof protocol.OperationDone
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OperationDone.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OperationDone
         * @function getTypeUrl
         * @memberof protocol.OperationDone
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OperationDone.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.OperationDone";
        };

        return OperationDone;
    })();

    protocol.Ticks = (function() {

        /**
         * Properties of a Ticks.
         * @memberof protocol
         * @interface ITicks
         * @property {number|Long|null} [count] Ticks count
         * @property {string|null} [state] Ticks state
         * @property {number|Long|null} [total] Ticks total
         */

        /**
         * Constructs a new Ticks.
         * @memberof protocol
         * @classdesc Represents a Ticks.
         * @implements ITicks
         * @constructor
         * @param {protocol.ITicks=} [properties] Properties to set
         */
        function Ticks(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ticks count.
         * @member {number|Long} count
         * @memberof protocol.Ticks
         * @instance
         */
        Ticks.prototype.count = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Ticks state.
         * @member {string} state
         * @memberof protocol.Ticks
         * @instance
         */
        Ticks.prototype.state = "";

        /**
         * Ticks total.
         * @member {number|Long} total
         * @memberof protocol.Ticks
         * @instance
         */
        Ticks.prototype.total = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Ticks instance using the specified properties.
         * @function create
         * @memberof protocol.Ticks
         * @static
         * @param {protocol.ITicks=} [properties] Properties to set
         * @returns {protocol.Ticks} Ticks instance
         */
        Ticks.create = function create(properties) {
            return new Ticks(properties);
        };

        /**
         * Encodes the specified Ticks message. Does not implicitly {@link protocol.Ticks.verify|verify} messages.
         * @function encode
         * @memberof protocol.Ticks
         * @static
         * @param {protocol.ITicks} message Ticks message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ticks.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.count);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.state);
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.total);
            return writer;
        };

        /**
         * Encodes the specified Ticks message, length delimited. Does not implicitly {@link protocol.Ticks.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Ticks
         * @static
         * @param {protocol.ITicks} message Ticks message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ticks.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Ticks message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Ticks
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Ticks} Ticks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ticks.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Ticks();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.count = reader.uint64();
                        break;
                    }
                case 2: {
                        message.state = reader.string();
                        break;
                    }
                case 3: {
                        message.total = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Ticks message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Ticks
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Ticks} Ticks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ticks.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Ticks message.
         * @function verify
         * @memberof protocol.Ticks
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ticks.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                    return "count: integer|Long expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isString(message.state))
                    return "state: string expected";
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                    return "total: integer|Long expected";
            return null;
        };

        /**
         * Creates a Ticks message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Ticks
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Ticks} Ticks
         */
        Ticks.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Ticks)
                return object;
            var message = new $root.protocol.Ticks();
            if (object.count != null)
                if ($util.Long)
                    (message.count = $util.Long.fromValue(object.count)).unsigned = true;
                else if (typeof object.count === "string")
                    message.count = parseInt(object.count, 10);
                else if (typeof object.count === "number")
                    message.count = object.count;
                else if (typeof object.count === "object")
                    message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber(true);
            if (object.state != null)
                message.state = String(object.state);
            if (object.total != null)
                if ($util.Long)
                    (message.total = $util.Long.fromValue(object.total)).unsigned = true;
                else if (typeof object.total === "string")
                    message.total = parseInt(object.total, 10);
                else if (typeof object.total === "number")
                    message.total = object.total;
                else if (typeof object.total === "object")
                    message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Ticks message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Ticks
         * @static
         * @param {protocol.Ticks} message Ticks
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ticks.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.count = options.longs === String ? "0" : 0;
                object.state = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total = options.longs === String ? "0" : 0;
            }
            if (message.count != null && message.hasOwnProperty("count"))
                if (typeof message.count === "number")
                    object.count = options.longs === String ? String(message.count) : message.count;
                else
                    object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber(true) : message.count;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber(true) : message.total;
            return object;
        };

        /**
         * Converts this Ticks to JSON.
         * @function toJSON
         * @memberof protocol.Ticks
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ticks.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Ticks
         * @function getTypeUrl
         * @memberof protocol.Ticks
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Ticks.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.Ticks";
        };

        return Ticks;
    })();

    protocol.Notification = (function() {

        /**
         * Properties of a Notification.
         * @memberof protocol
         * @interface INotification
         * @property {protocol.Severity|null} [severity] Notification severity
         * @property {string|null} [content] Notification content
         * @property {number|Long|null} [line] Notification line
         */

        /**
         * Constructs a new Notification.
         * @memberof protocol
         * @classdesc Represents a Notification.
         * @implements INotification
         * @constructor
         * @param {protocol.INotification=} [properties] Properties to set
         */
        function Notification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Notification severity.
         * @member {protocol.Severity} severity
         * @memberof protocol.Notification
         * @instance
         */
        Notification.prototype.severity = 0;

        /**
         * Notification content.
         * @member {string} content
         * @memberof protocol.Notification
         * @instance
         */
        Notification.prototype.content = "";

        /**
         * Notification line.
         * @member {number|Long} line
         * @memberof protocol.Notification
         * @instance
         */
        Notification.prototype.line = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Notification instance using the specified properties.
         * @function create
         * @memberof protocol.Notification
         * @static
         * @param {protocol.INotification=} [properties] Properties to set
         * @returns {protocol.Notification} Notification instance
         */
        Notification.create = function create(properties) {
            return new Notification(properties);
        };

        /**
         * Encodes the specified Notification message. Does not implicitly {@link protocol.Notification.verify|verify} messages.
         * @function encode
         * @memberof protocol.Notification
         * @static
         * @param {protocol.INotification} message Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.severity != null && Object.hasOwnProperty.call(message, "severity"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.severity);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.line);
            return writer;
        };

        /**
         * Encodes the specified Notification message, length delimited. Does not implicitly {@link protocol.Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Notification
         * @static
         * @param {protocol.INotification} message Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Notification message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Notification} Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Notification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.severity = reader.int32();
                        break;
                    }
                case 2: {
                        message.content = reader.string();
                        break;
                    }
                case 3: {
                        message.line = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Notification} Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Notification message.
         * @function verify
         * @memberof protocol.Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.severity != null && message.hasOwnProperty("severity"))
                switch (message.severity) {
                default:
                    return "severity: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.line != null && message.hasOwnProperty("line"))
                if (!$util.isInteger(message.line) && !(message.line && $util.isInteger(message.line.low) && $util.isInteger(message.line.high)))
                    return "line: integer|Long expected";
            return null;
        };

        /**
         * Creates a Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Notification} Notification
         */
        Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Notification)
                return object;
            var message = new $root.protocol.Notification();
            switch (object.severity) {
            default:
                if (typeof object.severity === "number") {
                    message.severity = object.severity;
                    break;
                }
                break;
            case "WARNING":
            case 0:
                message.severity = 0;
                break;
            case "ERROR":
            case 1:
                message.severity = 1;
                break;
            }
            if (object.content != null)
                message.content = String(object.content);
            if (object.line != null)
                if ($util.Long)
                    (message.line = $util.Long.fromValue(object.line)).unsigned = true;
                else if (typeof object.line === "string")
                    message.line = parseInt(object.line, 10);
                else if (typeof object.line === "number")
                    message.line = object.line;
                else if (typeof object.line === "object")
                    message.line = new $util.LongBits(object.line.low >>> 0, object.line.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Notification
         * @static
         * @param {protocol.Notification} message Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.severity = options.enums === String ? "WARNING" : 0;
                object.content = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.line = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.line = options.longs === String ? "0" : 0;
            }
            if (message.severity != null && message.hasOwnProperty("severity"))
                object.severity = options.enums === String ? $root.protocol.Severity[message.severity] === undefined ? message.severity : $root.protocol.Severity[message.severity] : message.severity;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.line != null && message.hasOwnProperty("line"))
                if (typeof message.line === "number")
                    object.line = options.longs === String ? String(message.line) : message.line;
                else
                    object.line = options.longs === String ? $util.Long.prototype.toString.call(message.line) : options.longs === Number ? new $util.LongBits(message.line.low >>> 0, message.line.high >>> 0).toNumber(true) : message.line;
            return object;
        };

        /**
         * Converts this Notification to JSON.
         * @function toJSON
         * @memberof protocol.Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Notification
         * @function getTypeUrl
         * @memberof protocol.Notification
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Notification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.Notification";
        };

        return Notification;
    })();

    protocol.CallbackEvent = (function() {

        /**
         * Properties of a CallbackEvent.
         * @memberof protocol
         * @interface ICallbackEvent
         * @property {number|Long|null} [streamUpdated] CallbackEvent streamUpdated
         * @property {boolean|null} [fileRead] CallbackEvent fileRead
         * @property {protocol.CallbackEvent.ISearchUpdated|null} [searchUpdated] CallbackEvent searchUpdated
         * @property {protocol.CallbackEvent.IIndexedMapUpdated|null} [indexedMapUpdated] CallbackEvent indexedMapUpdated
         * @property {protocol.CallbackEvent.ISearchMapUpdated|null} [searchMapUpdated] CallbackEvent searchMapUpdated
         * @property {protocol.CallbackEvent.ISearchValuesUpdated|null} [searchValuesUpdated] CallbackEvent searchValuesUpdated
         * @property {protocol.CallbackEvent.IAttachmentsUpdated|null} [attachmentsUpdated] CallbackEvent attachmentsUpdated
         * @property {protocol.CallbackEvent.IProgress|null} [progress] CallbackEvent progress
         * @property {protocol.INativeError|null} [sessionError] CallbackEvent sessionError
         * @property {protocol.CallbackEvent.IOperationError|null} [operationError] CallbackEvent operationError
         * @property {string|null} [operationStarted] CallbackEvent operationStarted
         * @property {string|null} [operationProcessing] CallbackEvent operationProcessing
         * @property {protocol.IOperationDone|null} [operationDone] CallbackEvent operationDone
         * @property {boolean|null} [sessionDestroyed] CallbackEvent sessionDestroyed
         */

        /**
         * Constructs a new CallbackEvent.
         * @memberof protocol
         * @classdesc Represents a CallbackEvent.
         * @implements ICallbackEvent
         * @constructor
         * @param {protocol.ICallbackEvent=} [properties] Properties to set
         */
        function CallbackEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CallbackEvent streamUpdated.
         * @member {number|Long|null|undefined} streamUpdated
         * @memberof protocol.CallbackEvent
         * @instance
         */
        CallbackEvent.prototype.streamUpdated = null;

        /**
         * CallbackEvent fileRead.
         * @member {boolean|null|undefined} fileRead
         * @memberof protocol.CallbackEvent
         * @instance
         */
        CallbackEvent.prototype.fileRead = null;

        /**
         * CallbackEvent searchUpdated.
         * @member {protocol.CallbackEvent.ISearchUpdated|null|undefined} searchUpdated
         * @memberof protocol.CallbackEvent
         * @instance
         */
        CallbackEvent.prototype.searchUpdated = null;

        /**
         * CallbackEvent indexedMapUpdated.
         * @member {protocol.CallbackEvent.IIndexedMapUpdated|null|undefined} indexedMapUpdated
         * @memberof protocol.CallbackEvent
         * @instance
         */
        CallbackEvent.prototype.indexedMapUpdated = null;

        /**
         * CallbackEvent searchMapUpdated.
         * @member {protocol.CallbackEvent.ISearchMapUpdated|null|undefined} searchMapUpdated
         * @memberof protocol.CallbackEvent
         * @instance
         */
        CallbackEvent.prototype.searchMapUpdated = null;

        /**
         * CallbackEvent searchValuesUpdated.
         * @member {protocol.CallbackEvent.ISearchValuesUpdated|null|undefined} searchValuesUpdated
         * @memberof protocol.CallbackEvent
         * @instance
         */
        CallbackEvent.prototype.searchValuesUpdated = null;

        /**
         * CallbackEvent attachmentsUpdated.
         * @member {protocol.CallbackEvent.IAttachmentsUpdated|null|undefined} attachmentsUpdated
         * @memberof protocol.CallbackEvent
         * @instance
         */
        CallbackEvent.prototype.attachmentsUpdated = null;

        /**
         * CallbackEvent progress.
         * @member {protocol.CallbackEvent.IProgress|null|undefined} progress
         * @memberof protocol.CallbackEvent
         * @instance
         */
        CallbackEvent.prototype.progress = null;

        /**
         * CallbackEvent sessionError.
         * @member {protocol.INativeError|null|undefined} sessionError
         * @memberof protocol.CallbackEvent
         * @instance
         */
        CallbackEvent.prototype.sessionError = null;

        /**
         * CallbackEvent operationError.
         * @member {protocol.CallbackEvent.IOperationError|null|undefined} operationError
         * @memberof protocol.CallbackEvent
         * @instance
         */
        CallbackEvent.prototype.operationError = null;

        /**
         * CallbackEvent operationStarted.
         * @member {string|null|undefined} operationStarted
         * @memberof protocol.CallbackEvent
         * @instance
         */
        CallbackEvent.prototype.operationStarted = null;

        /**
         * CallbackEvent operationProcessing.
         * @member {string|null|undefined} operationProcessing
         * @memberof protocol.CallbackEvent
         * @instance
         */
        CallbackEvent.prototype.operationProcessing = null;

        /**
         * CallbackEvent operationDone.
         * @member {protocol.IOperationDone|null|undefined} operationDone
         * @memberof protocol.CallbackEvent
         * @instance
         */
        CallbackEvent.prototype.operationDone = null;

        /**
         * CallbackEvent sessionDestroyed.
         * @member {boolean|null|undefined} sessionDestroyed
         * @memberof protocol.CallbackEvent
         * @instance
         */
        CallbackEvent.prototype.sessionDestroyed = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * CallbackEvent event.
         * @member {"streamUpdated"|"fileRead"|"searchUpdated"|"indexedMapUpdated"|"searchMapUpdated"|"searchValuesUpdated"|"attachmentsUpdated"|"progress"|"sessionError"|"operationError"|"operationStarted"|"operationProcessing"|"operationDone"|"sessionDestroyed"|undefined} event
         * @memberof protocol.CallbackEvent
         * @instance
         */
        Object.defineProperty(CallbackEvent.prototype, "event", {
            get: $util.oneOfGetter($oneOfFields = ["streamUpdated", "fileRead", "searchUpdated", "indexedMapUpdated", "searchMapUpdated", "searchValuesUpdated", "attachmentsUpdated", "progress", "sessionError", "operationError", "operationStarted", "operationProcessing", "operationDone", "sessionDestroyed"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CallbackEvent instance using the specified properties.
         * @function create
         * @memberof protocol.CallbackEvent
         * @static
         * @param {protocol.ICallbackEvent=} [properties] Properties to set
         * @returns {protocol.CallbackEvent} CallbackEvent instance
         */
        CallbackEvent.create = function create(properties) {
            return new CallbackEvent(properties);
        };

        /**
         * Encodes the specified CallbackEvent message. Does not implicitly {@link protocol.CallbackEvent.verify|verify} messages.
         * @function encode
         * @memberof protocol.CallbackEvent
         * @static
         * @param {protocol.ICallbackEvent} message CallbackEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CallbackEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.streamUpdated != null && Object.hasOwnProperty.call(message, "streamUpdated"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.streamUpdated);
            if (message.fileRead != null && Object.hasOwnProperty.call(message, "fileRead"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.fileRead);
            if (message.searchUpdated != null && Object.hasOwnProperty.call(message, "searchUpdated"))
                $root.protocol.CallbackEvent.SearchUpdated.encode(message.searchUpdated, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.indexedMapUpdated != null && Object.hasOwnProperty.call(message, "indexedMapUpdated"))
                $root.protocol.CallbackEvent.IndexedMapUpdated.encode(message.indexedMapUpdated, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.searchMapUpdated != null && Object.hasOwnProperty.call(message, "searchMapUpdated"))
                $root.protocol.CallbackEvent.SearchMapUpdated.encode(message.searchMapUpdated, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.searchValuesUpdated != null && Object.hasOwnProperty.call(message, "searchValuesUpdated"))
                $root.protocol.CallbackEvent.SearchValuesUpdated.encode(message.searchValuesUpdated, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.attachmentsUpdated != null && Object.hasOwnProperty.call(message, "attachmentsUpdated"))
                $root.protocol.CallbackEvent.AttachmentsUpdated.encode(message.attachmentsUpdated, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.progress != null && Object.hasOwnProperty.call(message, "progress"))
                $root.protocol.CallbackEvent.Progress.encode(message.progress, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.sessionError != null && Object.hasOwnProperty.call(message, "sessionError"))
                $root.protocol.NativeError.encode(message.sessionError, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.operationError != null && Object.hasOwnProperty.call(message, "operationError"))
                $root.protocol.CallbackEvent.OperationError.encode(message.operationError, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.operationStarted != null && Object.hasOwnProperty.call(message, "operationStarted"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.operationStarted);
            if (message.operationProcessing != null && Object.hasOwnProperty.call(message, "operationProcessing"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.operationProcessing);
            if (message.operationDone != null && Object.hasOwnProperty.call(message, "operationDone"))
                $root.protocol.OperationDone.encode(message.operationDone, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.sessionDestroyed != null && Object.hasOwnProperty.call(message, "sessionDestroyed"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.sessionDestroyed);
            return writer;
        };

        /**
         * Encodes the specified CallbackEvent message, length delimited. Does not implicitly {@link protocol.CallbackEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.CallbackEvent
         * @static
         * @param {protocol.ICallbackEvent} message CallbackEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CallbackEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CallbackEvent message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.CallbackEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.CallbackEvent} CallbackEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CallbackEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CallbackEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.streamUpdated = reader.uint64();
                        break;
                    }
                case 2: {
                        message.fileRead = reader.bool();
                        break;
                    }
                case 3: {
                        message.searchUpdated = $root.protocol.CallbackEvent.SearchUpdated.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.indexedMapUpdated = $root.protocol.CallbackEvent.IndexedMapUpdated.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.searchMapUpdated = $root.protocol.CallbackEvent.SearchMapUpdated.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.searchValuesUpdated = $root.protocol.CallbackEvent.SearchValuesUpdated.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.attachmentsUpdated = $root.protocol.CallbackEvent.AttachmentsUpdated.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.progress = $root.protocol.CallbackEvent.Progress.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.sessionError = $root.protocol.NativeError.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.operationError = $root.protocol.CallbackEvent.OperationError.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.operationStarted = reader.string();
                        break;
                    }
                case 12: {
                        message.operationProcessing = reader.string();
                        break;
                    }
                case 13: {
                        message.operationDone = $root.protocol.OperationDone.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.sessionDestroyed = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CallbackEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.CallbackEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.CallbackEvent} CallbackEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CallbackEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CallbackEvent message.
         * @function verify
         * @memberof protocol.CallbackEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CallbackEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.streamUpdated != null && message.hasOwnProperty("streamUpdated")) {
                properties.event = 1;
                if (!$util.isInteger(message.streamUpdated) && !(message.streamUpdated && $util.isInteger(message.streamUpdated.low) && $util.isInteger(message.streamUpdated.high)))
                    return "streamUpdated: integer|Long expected";
            }
            if (message.fileRead != null && message.hasOwnProperty("fileRead")) {
                if (properties.event === 1)
                    return "event: multiple values";
                properties.event = 1;
                if (typeof message.fileRead !== "boolean")
                    return "fileRead: boolean expected";
            }
            if (message.searchUpdated != null && message.hasOwnProperty("searchUpdated")) {
                if (properties.event === 1)
                    return "event: multiple values";
                properties.event = 1;
                {
                    var error = $root.protocol.CallbackEvent.SearchUpdated.verify(message.searchUpdated);
                    if (error)
                        return "searchUpdated." + error;
                }
            }
            if (message.indexedMapUpdated != null && message.hasOwnProperty("indexedMapUpdated")) {
                if (properties.event === 1)
                    return "event: multiple values";
                properties.event = 1;
                {
                    var error = $root.protocol.CallbackEvent.IndexedMapUpdated.verify(message.indexedMapUpdated);
                    if (error)
                        return "indexedMapUpdated." + error;
                }
            }
            if (message.searchMapUpdated != null && message.hasOwnProperty("searchMapUpdated")) {
                if (properties.event === 1)
                    return "event: multiple values";
                properties.event = 1;
                {
                    var error = $root.protocol.CallbackEvent.SearchMapUpdated.verify(message.searchMapUpdated);
                    if (error)
                        return "searchMapUpdated." + error;
                }
            }
            if (message.searchValuesUpdated != null && message.hasOwnProperty("searchValuesUpdated")) {
                if (properties.event === 1)
                    return "event: multiple values";
                properties.event = 1;
                {
                    var error = $root.protocol.CallbackEvent.SearchValuesUpdated.verify(message.searchValuesUpdated);
                    if (error)
                        return "searchValuesUpdated." + error;
                }
            }
            if (message.attachmentsUpdated != null && message.hasOwnProperty("attachmentsUpdated")) {
                if (properties.event === 1)
                    return "event: multiple values";
                properties.event = 1;
                {
                    var error = $root.protocol.CallbackEvent.AttachmentsUpdated.verify(message.attachmentsUpdated);
                    if (error)
                        return "attachmentsUpdated." + error;
                }
            }
            if (message.progress != null && message.hasOwnProperty("progress")) {
                if (properties.event === 1)
                    return "event: multiple values";
                properties.event = 1;
                {
                    var error = $root.protocol.CallbackEvent.Progress.verify(message.progress);
                    if (error)
                        return "progress." + error;
                }
            }
            if (message.sessionError != null && message.hasOwnProperty("sessionError")) {
                if (properties.event === 1)
                    return "event: multiple values";
                properties.event = 1;
                {
                    var error = $root.protocol.NativeError.verify(message.sessionError);
                    if (error)
                        return "sessionError." + error;
                }
            }
            if (message.operationError != null && message.hasOwnProperty("operationError")) {
                if (properties.event === 1)
                    return "event: multiple values";
                properties.event = 1;
                {
                    var error = $root.protocol.CallbackEvent.OperationError.verify(message.operationError);
                    if (error)
                        return "operationError." + error;
                }
            }
            if (message.operationStarted != null && message.hasOwnProperty("operationStarted")) {
                if (properties.event === 1)
                    return "event: multiple values";
                properties.event = 1;
                if (!$util.isString(message.operationStarted))
                    return "operationStarted: string expected";
            }
            if (message.operationProcessing != null && message.hasOwnProperty("operationProcessing")) {
                if (properties.event === 1)
                    return "event: multiple values";
                properties.event = 1;
                if (!$util.isString(message.operationProcessing))
                    return "operationProcessing: string expected";
            }
            if (message.operationDone != null && message.hasOwnProperty("operationDone")) {
                if (properties.event === 1)
                    return "event: multiple values";
                properties.event = 1;
                {
                    var error = $root.protocol.OperationDone.verify(message.operationDone);
                    if (error)
                        return "operationDone." + error;
                }
            }
            if (message.sessionDestroyed != null && message.hasOwnProperty("sessionDestroyed")) {
                if (properties.event === 1)
                    return "event: multiple values";
                properties.event = 1;
                if (typeof message.sessionDestroyed !== "boolean")
                    return "sessionDestroyed: boolean expected";
            }
            return null;
        };

        /**
         * Creates a CallbackEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.CallbackEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.CallbackEvent} CallbackEvent
         */
        CallbackEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.CallbackEvent)
                return object;
            var message = new $root.protocol.CallbackEvent();
            if (object.streamUpdated != null)
                if ($util.Long)
                    (message.streamUpdated = $util.Long.fromValue(object.streamUpdated)).unsigned = true;
                else if (typeof object.streamUpdated === "string")
                    message.streamUpdated = parseInt(object.streamUpdated, 10);
                else if (typeof object.streamUpdated === "number")
                    message.streamUpdated = object.streamUpdated;
                else if (typeof object.streamUpdated === "object")
                    message.streamUpdated = new $util.LongBits(object.streamUpdated.low >>> 0, object.streamUpdated.high >>> 0).toNumber(true);
            if (object.fileRead != null)
                message.fileRead = Boolean(object.fileRead);
            if (object.searchUpdated != null) {
                if (typeof object.searchUpdated !== "object")
                    throw TypeError(".protocol.CallbackEvent.searchUpdated: object expected");
                message.searchUpdated = $root.protocol.CallbackEvent.SearchUpdated.fromObject(object.searchUpdated);
            }
            if (object.indexedMapUpdated != null) {
                if (typeof object.indexedMapUpdated !== "object")
                    throw TypeError(".protocol.CallbackEvent.indexedMapUpdated: object expected");
                message.indexedMapUpdated = $root.protocol.CallbackEvent.IndexedMapUpdated.fromObject(object.indexedMapUpdated);
            }
            if (object.searchMapUpdated != null) {
                if (typeof object.searchMapUpdated !== "object")
                    throw TypeError(".protocol.CallbackEvent.searchMapUpdated: object expected");
                message.searchMapUpdated = $root.protocol.CallbackEvent.SearchMapUpdated.fromObject(object.searchMapUpdated);
            }
            if (object.searchValuesUpdated != null) {
                if (typeof object.searchValuesUpdated !== "object")
                    throw TypeError(".protocol.CallbackEvent.searchValuesUpdated: object expected");
                message.searchValuesUpdated = $root.protocol.CallbackEvent.SearchValuesUpdated.fromObject(object.searchValuesUpdated);
            }
            if (object.attachmentsUpdated != null) {
                if (typeof object.attachmentsUpdated !== "object")
                    throw TypeError(".protocol.CallbackEvent.attachmentsUpdated: object expected");
                message.attachmentsUpdated = $root.protocol.CallbackEvent.AttachmentsUpdated.fromObject(object.attachmentsUpdated);
            }
            if (object.progress != null) {
                if (typeof object.progress !== "object")
                    throw TypeError(".protocol.CallbackEvent.progress: object expected");
                message.progress = $root.protocol.CallbackEvent.Progress.fromObject(object.progress);
            }
            if (object.sessionError != null) {
                if (typeof object.sessionError !== "object")
                    throw TypeError(".protocol.CallbackEvent.sessionError: object expected");
                message.sessionError = $root.protocol.NativeError.fromObject(object.sessionError);
            }
            if (object.operationError != null) {
                if (typeof object.operationError !== "object")
                    throw TypeError(".protocol.CallbackEvent.operationError: object expected");
                message.operationError = $root.protocol.CallbackEvent.OperationError.fromObject(object.operationError);
            }
            if (object.operationStarted != null)
                message.operationStarted = String(object.operationStarted);
            if (object.operationProcessing != null)
                message.operationProcessing = String(object.operationProcessing);
            if (object.operationDone != null) {
                if (typeof object.operationDone !== "object")
                    throw TypeError(".protocol.CallbackEvent.operationDone: object expected");
                message.operationDone = $root.protocol.OperationDone.fromObject(object.operationDone);
            }
            if (object.sessionDestroyed != null)
                message.sessionDestroyed = Boolean(object.sessionDestroyed);
            return message;
        };

        /**
         * Creates a plain object from a CallbackEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.CallbackEvent
         * @static
         * @param {protocol.CallbackEvent} message CallbackEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CallbackEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.streamUpdated != null && message.hasOwnProperty("streamUpdated")) {
                if (typeof message.streamUpdated === "number")
                    object.streamUpdated = options.longs === String ? String(message.streamUpdated) : message.streamUpdated;
                else
                    object.streamUpdated = options.longs === String ? $util.Long.prototype.toString.call(message.streamUpdated) : options.longs === Number ? new $util.LongBits(message.streamUpdated.low >>> 0, message.streamUpdated.high >>> 0).toNumber(true) : message.streamUpdated;
                if (options.oneofs)
                    object.event = "streamUpdated";
            }
            if (message.fileRead != null && message.hasOwnProperty("fileRead")) {
                object.fileRead = message.fileRead;
                if (options.oneofs)
                    object.event = "fileRead";
            }
            if (message.searchUpdated != null && message.hasOwnProperty("searchUpdated")) {
                object.searchUpdated = $root.protocol.CallbackEvent.SearchUpdated.toObject(message.searchUpdated, options);
                if (options.oneofs)
                    object.event = "searchUpdated";
            }
            if (message.indexedMapUpdated != null && message.hasOwnProperty("indexedMapUpdated")) {
                object.indexedMapUpdated = $root.protocol.CallbackEvent.IndexedMapUpdated.toObject(message.indexedMapUpdated, options);
                if (options.oneofs)
                    object.event = "indexedMapUpdated";
            }
            if (message.searchMapUpdated != null && message.hasOwnProperty("searchMapUpdated")) {
                object.searchMapUpdated = $root.protocol.CallbackEvent.SearchMapUpdated.toObject(message.searchMapUpdated, options);
                if (options.oneofs)
                    object.event = "searchMapUpdated";
            }
            if (message.searchValuesUpdated != null && message.hasOwnProperty("searchValuesUpdated")) {
                object.searchValuesUpdated = $root.protocol.CallbackEvent.SearchValuesUpdated.toObject(message.searchValuesUpdated, options);
                if (options.oneofs)
                    object.event = "searchValuesUpdated";
            }
            if (message.attachmentsUpdated != null && message.hasOwnProperty("attachmentsUpdated")) {
                object.attachmentsUpdated = $root.protocol.CallbackEvent.AttachmentsUpdated.toObject(message.attachmentsUpdated, options);
                if (options.oneofs)
                    object.event = "attachmentsUpdated";
            }
            if (message.progress != null && message.hasOwnProperty("progress")) {
                object.progress = $root.protocol.CallbackEvent.Progress.toObject(message.progress, options);
                if (options.oneofs)
                    object.event = "progress";
            }
            if (message.sessionError != null && message.hasOwnProperty("sessionError")) {
                object.sessionError = $root.protocol.NativeError.toObject(message.sessionError, options);
                if (options.oneofs)
                    object.event = "sessionError";
            }
            if (message.operationError != null && message.hasOwnProperty("operationError")) {
                object.operationError = $root.protocol.CallbackEvent.OperationError.toObject(message.operationError, options);
                if (options.oneofs)
                    object.event = "operationError";
            }
            if (message.operationStarted != null && message.hasOwnProperty("operationStarted")) {
                object.operationStarted = message.operationStarted;
                if (options.oneofs)
                    object.event = "operationStarted";
            }
            if (message.operationProcessing != null && message.hasOwnProperty("operationProcessing")) {
                object.operationProcessing = message.operationProcessing;
                if (options.oneofs)
                    object.event = "operationProcessing";
            }
            if (message.operationDone != null && message.hasOwnProperty("operationDone")) {
                object.operationDone = $root.protocol.OperationDone.toObject(message.operationDone, options);
                if (options.oneofs)
                    object.event = "operationDone";
            }
            if (message.sessionDestroyed != null && message.hasOwnProperty("sessionDestroyed")) {
                object.sessionDestroyed = message.sessionDestroyed;
                if (options.oneofs)
                    object.event = "sessionDestroyed";
            }
            return object;
        };

        /**
         * Converts this CallbackEvent to JSON.
         * @function toJSON
         * @memberof protocol.CallbackEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CallbackEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CallbackEvent
         * @function getTypeUrl
         * @memberof protocol.CallbackEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CallbackEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.CallbackEvent";
        };

        CallbackEvent.SearchUpdated = (function() {

            /**
             * Properties of a SearchUpdated.
             * @memberof protocol.CallbackEvent
             * @interface ISearchUpdated
             * @property {number|Long|null} [found] SearchUpdated found
             * @property {Object.<string,number|Long>|null} [stat] SearchUpdated stat
             */

            /**
             * Constructs a new SearchUpdated.
             * @memberof protocol.CallbackEvent
             * @classdesc Represents a SearchUpdated.
             * @implements ISearchUpdated
             * @constructor
             * @param {protocol.CallbackEvent.ISearchUpdated=} [properties] Properties to set
             */
            function SearchUpdated(properties) {
                this.stat = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SearchUpdated found.
             * @member {number|Long} found
             * @memberof protocol.CallbackEvent.SearchUpdated
             * @instance
             */
            SearchUpdated.prototype.found = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * SearchUpdated stat.
             * @member {Object.<string,number|Long>} stat
             * @memberof protocol.CallbackEvent.SearchUpdated
             * @instance
             */
            SearchUpdated.prototype.stat = $util.emptyObject;

            /**
             * Creates a new SearchUpdated instance using the specified properties.
             * @function create
             * @memberof protocol.CallbackEvent.SearchUpdated
             * @static
             * @param {protocol.CallbackEvent.ISearchUpdated=} [properties] Properties to set
             * @returns {protocol.CallbackEvent.SearchUpdated} SearchUpdated instance
             */
            SearchUpdated.create = function create(properties) {
                return new SearchUpdated(properties);
            };

            /**
             * Encodes the specified SearchUpdated message. Does not implicitly {@link protocol.CallbackEvent.SearchUpdated.verify|verify} messages.
             * @function encode
             * @memberof protocol.CallbackEvent.SearchUpdated
             * @static
             * @param {protocol.CallbackEvent.ISearchUpdated} message SearchUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SearchUpdated.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.found != null && Object.hasOwnProperty.call(message, "found"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.found);
                if (message.stat != null && Object.hasOwnProperty.call(message, "stat"))
                    for (var keys = Object.keys(message.stat), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint64(message.stat[keys[i]]).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SearchUpdated message, length delimited. Does not implicitly {@link protocol.CallbackEvent.SearchUpdated.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.CallbackEvent.SearchUpdated
             * @static
             * @param {protocol.CallbackEvent.ISearchUpdated} message SearchUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SearchUpdated.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SearchUpdated message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.CallbackEvent.SearchUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.CallbackEvent.SearchUpdated} SearchUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SearchUpdated.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CallbackEvent.SearchUpdated(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.found = reader.uint64();
                            break;
                        }
                    case 2: {
                            if (message.stat === $util.emptyObject)
                                message.stat = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = 0;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.uint64();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.stat[key] = value;
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SearchUpdated message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.CallbackEvent.SearchUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.CallbackEvent.SearchUpdated} SearchUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SearchUpdated.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SearchUpdated message.
             * @function verify
             * @memberof protocol.CallbackEvent.SearchUpdated
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SearchUpdated.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.found != null && message.hasOwnProperty("found"))
                    if (!$util.isInteger(message.found) && !(message.found && $util.isInteger(message.found.low) && $util.isInteger(message.found.high)))
                        return "found: integer|Long expected";
                if (message.stat != null && message.hasOwnProperty("stat")) {
                    if (!$util.isObject(message.stat))
                        return "stat: object expected";
                    var key = Object.keys(message.stat);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isInteger(message.stat[key[i]]) && !(message.stat[key[i]] && $util.isInteger(message.stat[key[i]].low) && $util.isInteger(message.stat[key[i]].high)))
                            return "stat: integer|Long{k:string} expected";
                }
                return null;
            };

            /**
             * Creates a SearchUpdated message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.CallbackEvent.SearchUpdated
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.CallbackEvent.SearchUpdated} SearchUpdated
             */
            SearchUpdated.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.CallbackEvent.SearchUpdated)
                    return object;
                var message = new $root.protocol.CallbackEvent.SearchUpdated();
                if (object.found != null)
                    if ($util.Long)
                        (message.found = $util.Long.fromValue(object.found)).unsigned = true;
                    else if (typeof object.found === "string")
                        message.found = parseInt(object.found, 10);
                    else if (typeof object.found === "number")
                        message.found = object.found;
                    else if (typeof object.found === "object")
                        message.found = new $util.LongBits(object.found.low >>> 0, object.found.high >>> 0).toNumber(true);
                if (object.stat) {
                    if (typeof object.stat !== "object")
                        throw TypeError(".protocol.CallbackEvent.SearchUpdated.stat: object expected");
                    message.stat = {};
                    for (var keys = Object.keys(object.stat), i = 0; i < keys.length; ++i)
                        if ($util.Long)
                            (message.stat[keys[i]] = $util.Long.fromValue(object.stat[keys[i]])).unsigned = true;
                        else if (typeof object.stat[keys[i]] === "string")
                            message.stat[keys[i]] = parseInt(object.stat[keys[i]], 10);
                        else if (typeof object.stat[keys[i]] === "number")
                            message.stat[keys[i]] = object.stat[keys[i]];
                        else if (typeof object.stat[keys[i]] === "object")
                            message.stat[keys[i]] = new $util.LongBits(object.stat[keys[i]].low >>> 0, object.stat[keys[i]].high >>> 0).toNumber(true);
                }
                return message;
            };

            /**
             * Creates a plain object from a SearchUpdated message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.CallbackEvent.SearchUpdated
             * @static
             * @param {protocol.CallbackEvent.SearchUpdated} message SearchUpdated
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SearchUpdated.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.stat = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.found = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.found = options.longs === String ? "0" : 0;
                if (message.found != null && message.hasOwnProperty("found"))
                    if (typeof message.found === "number")
                        object.found = options.longs === String ? String(message.found) : message.found;
                    else
                        object.found = options.longs === String ? $util.Long.prototype.toString.call(message.found) : options.longs === Number ? new $util.LongBits(message.found.low >>> 0, message.found.high >>> 0).toNumber(true) : message.found;
                var keys2;
                if (message.stat && (keys2 = Object.keys(message.stat)).length) {
                    object.stat = {};
                    for (var j = 0; j < keys2.length; ++j)
                        if (typeof message.stat[keys2[j]] === "number")
                            object.stat[keys2[j]] = options.longs === String ? String(message.stat[keys2[j]]) : message.stat[keys2[j]];
                        else
                            object.stat[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.stat[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.stat[keys2[j]].low >>> 0, message.stat[keys2[j]].high >>> 0).toNumber(true) : message.stat[keys2[j]];
                }
                return object;
            };

            /**
             * Converts this SearchUpdated to JSON.
             * @function toJSON
             * @memberof protocol.CallbackEvent.SearchUpdated
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SearchUpdated.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SearchUpdated
             * @function getTypeUrl
             * @memberof protocol.CallbackEvent.SearchUpdated
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SearchUpdated.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.CallbackEvent.SearchUpdated";
            };

            return SearchUpdated;
        })();

        CallbackEvent.IndexedMapUpdated = (function() {

            /**
             * Properties of an IndexedMapUpdated.
             * @memberof protocol.CallbackEvent
             * @interface IIndexedMapUpdated
             * @property {number|Long|null} [len] IndexedMapUpdated len
             */

            /**
             * Constructs a new IndexedMapUpdated.
             * @memberof protocol.CallbackEvent
             * @classdesc Represents an IndexedMapUpdated.
             * @implements IIndexedMapUpdated
             * @constructor
             * @param {protocol.CallbackEvent.IIndexedMapUpdated=} [properties] Properties to set
             */
            function IndexedMapUpdated(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IndexedMapUpdated len.
             * @member {number|Long} len
             * @memberof protocol.CallbackEvent.IndexedMapUpdated
             * @instance
             */
            IndexedMapUpdated.prototype.len = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new IndexedMapUpdated instance using the specified properties.
             * @function create
             * @memberof protocol.CallbackEvent.IndexedMapUpdated
             * @static
             * @param {protocol.CallbackEvent.IIndexedMapUpdated=} [properties] Properties to set
             * @returns {protocol.CallbackEvent.IndexedMapUpdated} IndexedMapUpdated instance
             */
            IndexedMapUpdated.create = function create(properties) {
                return new IndexedMapUpdated(properties);
            };

            /**
             * Encodes the specified IndexedMapUpdated message. Does not implicitly {@link protocol.CallbackEvent.IndexedMapUpdated.verify|verify} messages.
             * @function encode
             * @memberof protocol.CallbackEvent.IndexedMapUpdated
             * @static
             * @param {protocol.CallbackEvent.IIndexedMapUpdated} message IndexedMapUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IndexedMapUpdated.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.len != null && Object.hasOwnProperty.call(message, "len"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.len);
                return writer;
            };

            /**
             * Encodes the specified IndexedMapUpdated message, length delimited. Does not implicitly {@link protocol.CallbackEvent.IndexedMapUpdated.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.CallbackEvent.IndexedMapUpdated
             * @static
             * @param {protocol.CallbackEvent.IIndexedMapUpdated} message IndexedMapUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IndexedMapUpdated.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an IndexedMapUpdated message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.CallbackEvent.IndexedMapUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.CallbackEvent.IndexedMapUpdated} IndexedMapUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IndexedMapUpdated.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CallbackEvent.IndexedMapUpdated();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.len = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an IndexedMapUpdated message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.CallbackEvent.IndexedMapUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.CallbackEvent.IndexedMapUpdated} IndexedMapUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IndexedMapUpdated.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an IndexedMapUpdated message.
             * @function verify
             * @memberof protocol.CallbackEvent.IndexedMapUpdated
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IndexedMapUpdated.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.len != null && message.hasOwnProperty("len"))
                    if (!$util.isInteger(message.len) && !(message.len && $util.isInteger(message.len.low) && $util.isInteger(message.len.high)))
                        return "len: integer|Long expected";
                return null;
            };

            /**
             * Creates an IndexedMapUpdated message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.CallbackEvent.IndexedMapUpdated
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.CallbackEvent.IndexedMapUpdated} IndexedMapUpdated
             */
            IndexedMapUpdated.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.CallbackEvent.IndexedMapUpdated)
                    return object;
                var message = new $root.protocol.CallbackEvent.IndexedMapUpdated();
                if (object.len != null)
                    if ($util.Long)
                        (message.len = $util.Long.fromValue(object.len)).unsigned = true;
                    else if (typeof object.len === "string")
                        message.len = parseInt(object.len, 10);
                    else if (typeof object.len === "number")
                        message.len = object.len;
                    else if (typeof object.len === "object")
                        message.len = new $util.LongBits(object.len.low >>> 0, object.len.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from an IndexedMapUpdated message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.CallbackEvent.IndexedMapUpdated
             * @static
             * @param {protocol.CallbackEvent.IndexedMapUpdated} message IndexedMapUpdated
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IndexedMapUpdated.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.len = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.len = options.longs === String ? "0" : 0;
                if (message.len != null && message.hasOwnProperty("len"))
                    if (typeof message.len === "number")
                        object.len = options.longs === String ? String(message.len) : message.len;
                    else
                        object.len = options.longs === String ? $util.Long.prototype.toString.call(message.len) : options.longs === Number ? new $util.LongBits(message.len.low >>> 0, message.len.high >>> 0).toNumber(true) : message.len;
                return object;
            };

            /**
             * Converts this IndexedMapUpdated to JSON.
             * @function toJSON
             * @memberof protocol.CallbackEvent.IndexedMapUpdated
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IndexedMapUpdated.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for IndexedMapUpdated
             * @function getTypeUrl
             * @memberof protocol.CallbackEvent.IndexedMapUpdated
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            IndexedMapUpdated.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.CallbackEvent.IndexedMapUpdated";
            };

            return IndexedMapUpdated;
        })();

        CallbackEvent.SearchMapUpdated = (function() {

            /**
             * Properties of a SearchMapUpdated.
             * @memberof protocol.CallbackEvent
             * @interface ISearchMapUpdated
             * @property {string|null} [update] SearchMapUpdated update
             */

            /**
             * Constructs a new SearchMapUpdated.
             * @memberof protocol.CallbackEvent
             * @classdesc Represents a SearchMapUpdated.
             * @implements ISearchMapUpdated
             * @constructor
             * @param {protocol.CallbackEvent.ISearchMapUpdated=} [properties] Properties to set
             */
            function SearchMapUpdated(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SearchMapUpdated update.
             * @member {string} update
             * @memberof protocol.CallbackEvent.SearchMapUpdated
             * @instance
             */
            SearchMapUpdated.prototype.update = "";

            /**
             * Creates a new SearchMapUpdated instance using the specified properties.
             * @function create
             * @memberof protocol.CallbackEvent.SearchMapUpdated
             * @static
             * @param {protocol.CallbackEvent.ISearchMapUpdated=} [properties] Properties to set
             * @returns {protocol.CallbackEvent.SearchMapUpdated} SearchMapUpdated instance
             */
            SearchMapUpdated.create = function create(properties) {
                return new SearchMapUpdated(properties);
            };

            /**
             * Encodes the specified SearchMapUpdated message. Does not implicitly {@link protocol.CallbackEvent.SearchMapUpdated.verify|verify} messages.
             * @function encode
             * @memberof protocol.CallbackEvent.SearchMapUpdated
             * @static
             * @param {protocol.CallbackEvent.ISearchMapUpdated} message SearchMapUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SearchMapUpdated.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.update != null && Object.hasOwnProperty.call(message, "update"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.update);
                return writer;
            };

            /**
             * Encodes the specified SearchMapUpdated message, length delimited. Does not implicitly {@link protocol.CallbackEvent.SearchMapUpdated.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.CallbackEvent.SearchMapUpdated
             * @static
             * @param {protocol.CallbackEvent.ISearchMapUpdated} message SearchMapUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SearchMapUpdated.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SearchMapUpdated message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.CallbackEvent.SearchMapUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.CallbackEvent.SearchMapUpdated} SearchMapUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SearchMapUpdated.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CallbackEvent.SearchMapUpdated();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.update = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SearchMapUpdated message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.CallbackEvent.SearchMapUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.CallbackEvent.SearchMapUpdated} SearchMapUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SearchMapUpdated.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SearchMapUpdated message.
             * @function verify
             * @memberof protocol.CallbackEvent.SearchMapUpdated
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SearchMapUpdated.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.update != null && message.hasOwnProperty("update"))
                    if (!$util.isString(message.update))
                        return "update: string expected";
                return null;
            };

            /**
             * Creates a SearchMapUpdated message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.CallbackEvent.SearchMapUpdated
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.CallbackEvent.SearchMapUpdated} SearchMapUpdated
             */
            SearchMapUpdated.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.CallbackEvent.SearchMapUpdated)
                    return object;
                var message = new $root.protocol.CallbackEvent.SearchMapUpdated();
                if (object.update != null)
                    message.update = String(object.update);
                return message;
            };

            /**
             * Creates a plain object from a SearchMapUpdated message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.CallbackEvent.SearchMapUpdated
             * @static
             * @param {protocol.CallbackEvent.SearchMapUpdated} message SearchMapUpdated
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SearchMapUpdated.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.update = "";
                if (message.update != null && message.hasOwnProperty("update"))
                    object.update = message.update;
                return object;
            };

            /**
             * Converts this SearchMapUpdated to JSON.
             * @function toJSON
             * @memberof protocol.CallbackEvent.SearchMapUpdated
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SearchMapUpdated.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SearchMapUpdated
             * @function getTypeUrl
             * @memberof protocol.CallbackEvent.SearchMapUpdated
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SearchMapUpdated.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.CallbackEvent.SearchMapUpdated";
            };

            return SearchMapUpdated;
        })();

        CallbackEvent.SearchValuesUpdated = (function() {

            /**
             * Properties of a SearchValuesUpdated.
             * @memberof protocol.CallbackEvent
             * @interface ISearchValuesUpdated
             * @property {Object.<string,protocol.CallbackEvent.SearchValuesUpdated.IValueRange>|null} [values] SearchValuesUpdated values
             */

            /**
             * Constructs a new SearchValuesUpdated.
             * @memberof protocol.CallbackEvent
             * @classdesc Represents a SearchValuesUpdated.
             * @implements ISearchValuesUpdated
             * @constructor
             * @param {protocol.CallbackEvent.ISearchValuesUpdated=} [properties] Properties to set
             */
            function SearchValuesUpdated(properties) {
                this.values = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SearchValuesUpdated values.
             * @member {Object.<string,protocol.CallbackEvent.SearchValuesUpdated.IValueRange>} values
             * @memberof protocol.CallbackEvent.SearchValuesUpdated
             * @instance
             */
            SearchValuesUpdated.prototype.values = $util.emptyObject;

            /**
             * Creates a new SearchValuesUpdated instance using the specified properties.
             * @function create
             * @memberof protocol.CallbackEvent.SearchValuesUpdated
             * @static
             * @param {protocol.CallbackEvent.ISearchValuesUpdated=} [properties] Properties to set
             * @returns {protocol.CallbackEvent.SearchValuesUpdated} SearchValuesUpdated instance
             */
            SearchValuesUpdated.create = function create(properties) {
                return new SearchValuesUpdated(properties);
            };

            /**
             * Encodes the specified SearchValuesUpdated message. Does not implicitly {@link protocol.CallbackEvent.SearchValuesUpdated.verify|verify} messages.
             * @function encode
             * @memberof protocol.CallbackEvent.SearchValuesUpdated
             * @static
             * @param {protocol.CallbackEvent.ISearchValuesUpdated} message SearchValuesUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SearchValuesUpdated.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.values != null && Object.hasOwnProperty.call(message, "values"))
                    for (var keys = Object.keys(message.values), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                        $root.protocol.CallbackEvent.SearchValuesUpdated.ValueRange.encode(message.values[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Encodes the specified SearchValuesUpdated message, length delimited. Does not implicitly {@link protocol.CallbackEvent.SearchValuesUpdated.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.CallbackEvent.SearchValuesUpdated
             * @static
             * @param {protocol.CallbackEvent.ISearchValuesUpdated} message SearchValuesUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SearchValuesUpdated.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SearchValuesUpdated message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.CallbackEvent.SearchValuesUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.CallbackEvent.SearchValuesUpdated} SearchValuesUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SearchValuesUpdated.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CallbackEvent.SearchValuesUpdated(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (message.values === $util.emptyObject)
                                message.values = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = 0;
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.uint32();
                                    break;
                                case 2:
                                    value = $root.protocol.CallbackEvent.SearchValuesUpdated.ValueRange.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.values[key] = value;
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SearchValuesUpdated message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.CallbackEvent.SearchValuesUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.CallbackEvent.SearchValuesUpdated} SearchValuesUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SearchValuesUpdated.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SearchValuesUpdated message.
             * @function verify
             * @memberof protocol.CallbackEvent.SearchValuesUpdated
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SearchValuesUpdated.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.values != null && message.hasOwnProperty("values")) {
                    if (!$util.isObject(message.values))
                        return "values: object expected";
                    var key = Object.keys(message.values);
                    for (var i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "values: integer key{k:uint32} expected";
                        {
                            var error = $root.protocol.CallbackEvent.SearchValuesUpdated.ValueRange.verify(message.values[key[i]]);
                            if (error)
                                return "values." + error;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a SearchValuesUpdated message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.CallbackEvent.SearchValuesUpdated
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.CallbackEvent.SearchValuesUpdated} SearchValuesUpdated
             */
            SearchValuesUpdated.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.CallbackEvent.SearchValuesUpdated)
                    return object;
                var message = new $root.protocol.CallbackEvent.SearchValuesUpdated();
                if (object.values) {
                    if (typeof object.values !== "object")
                        throw TypeError(".protocol.CallbackEvent.SearchValuesUpdated.values: object expected");
                    message.values = {};
                    for (var keys = Object.keys(object.values), i = 0; i < keys.length; ++i) {
                        if (typeof object.values[keys[i]] !== "object")
                            throw TypeError(".protocol.CallbackEvent.SearchValuesUpdated.values: object expected");
                        message.values[keys[i]] = $root.protocol.CallbackEvent.SearchValuesUpdated.ValueRange.fromObject(object.values[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SearchValuesUpdated message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.CallbackEvent.SearchValuesUpdated
             * @static
             * @param {protocol.CallbackEvent.SearchValuesUpdated} message SearchValuesUpdated
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SearchValuesUpdated.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.values = {};
                var keys2;
                if (message.values && (keys2 = Object.keys(message.values)).length) {
                    object.values = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.values[keys2[j]] = $root.protocol.CallbackEvent.SearchValuesUpdated.ValueRange.toObject(message.values[keys2[j]], options);
                }
                return object;
            };

            /**
             * Converts this SearchValuesUpdated to JSON.
             * @function toJSON
             * @memberof protocol.CallbackEvent.SearchValuesUpdated
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SearchValuesUpdated.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SearchValuesUpdated
             * @function getTypeUrl
             * @memberof protocol.CallbackEvent.SearchValuesUpdated
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SearchValuesUpdated.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.CallbackEvent.SearchValuesUpdated";
            };

            SearchValuesUpdated.ValueRange = (function() {

                /**
                 * Properties of a ValueRange.
                 * @memberof protocol.CallbackEvent.SearchValuesUpdated
                 * @interface IValueRange
                 * @property {number|null} [min] ValueRange min
                 * @property {number|null} [max] ValueRange max
                 */

                /**
                 * Constructs a new ValueRange.
                 * @memberof protocol.CallbackEvent.SearchValuesUpdated
                 * @classdesc Represents a ValueRange.
                 * @implements IValueRange
                 * @constructor
                 * @param {protocol.CallbackEvent.SearchValuesUpdated.IValueRange=} [properties] Properties to set
                 */
                function ValueRange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ValueRange min.
                 * @member {number} min
                 * @memberof protocol.CallbackEvent.SearchValuesUpdated.ValueRange
                 * @instance
                 */
                ValueRange.prototype.min = 0;

                /**
                 * ValueRange max.
                 * @member {number} max
                 * @memberof protocol.CallbackEvent.SearchValuesUpdated.ValueRange
                 * @instance
                 */
                ValueRange.prototype.max = 0;

                /**
                 * Creates a new ValueRange instance using the specified properties.
                 * @function create
                 * @memberof protocol.CallbackEvent.SearchValuesUpdated.ValueRange
                 * @static
                 * @param {protocol.CallbackEvent.SearchValuesUpdated.IValueRange=} [properties] Properties to set
                 * @returns {protocol.CallbackEvent.SearchValuesUpdated.ValueRange} ValueRange instance
                 */
                ValueRange.create = function create(properties) {
                    return new ValueRange(properties);
                };

                /**
                 * Encodes the specified ValueRange message. Does not implicitly {@link protocol.CallbackEvent.SearchValuesUpdated.ValueRange.verify|verify} messages.
                 * @function encode
                 * @memberof protocol.CallbackEvent.SearchValuesUpdated.ValueRange
                 * @static
                 * @param {protocol.CallbackEvent.SearchValuesUpdated.IValueRange} message ValueRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ValueRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.min != null && Object.hasOwnProperty.call(message, "min"))
                        writer.uint32(/* id 1, wireType 1 =*/9).double(message.min);
                    if (message.max != null && Object.hasOwnProperty.call(message, "max"))
                        writer.uint32(/* id 2, wireType 1 =*/17).double(message.max);
                    return writer;
                };

                /**
                 * Encodes the specified ValueRange message, length delimited. Does not implicitly {@link protocol.CallbackEvent.SearchValuesUpdated.ValueRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof protocol.CallbackEvent.SearchValuesUpdated.ValueRange
                 * @static
                 * @param {protocol.CallbackEvent.SearchValuesUpdated.IValueRange} message ValueRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ValueRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ValueRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof protocol.CallbackEvent.SearchValuesUpdated.ValueRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {protocol.CallbackEvent.SearchValuesUpdated.ValueRange} ValueRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ValueRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CallbackEvent.SearchValuesUpdated.ValueRange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.min = reader.double();
                                break;
                            }
                        case 2: {
                                message.max = reader.double();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ValueRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof protocol.CallbackEvent.SearchValuesUpdated.ValueRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {protocol.CallbackEvent.SearchValuesUpdated.ValueRange} ValueRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ValueRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ValueRange message.
                 * @function verify
                 * @memberof protocol.CallbackEvent.SearchValuesUpdated.ValueRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ValueRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.min != null && message.hasOwnProperty("min"))
                        if (typeof message.min !== "number")
                            return "min: number expected";
                    if (message.max != null && message.hasOwnProperty("max"))
                        if (typeof message.max !== "number")
                            return "max: number expected";
                    return null;
                };

                /**
                 * Creates a ValueRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof protocol.CallbackEvent.SearchValuesUpdated.ValueRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {protocol.CallbackEvent.SearchValuesUpdated.ValueRange} ValueRange
                 */
                ValueRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.CallbackEvent.SearchValuesUpdated.ValueRange)
                        return object;
                    var message = new $root.protocol.CallbackEvent.SearchValuesUpdated.ValueRange();
                    if (object.min != null)
                        message.min = Number(object.min);
                    if (object.max != null)
                        message.max = Number(object.max);
                    return message;
                };

                /**
                 * Creates a plain object from a ValueRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof protocol.CallbackEvent.SearchValuesUpdated.ValueRange
                 * @static
                 * @param {protocol.CallbackEvent.SearchValuesUpdated.ValueRange} message ValueRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ValueRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.min = 0;
                        object.max = 0;
                    }
                    if (message.min != null && message.hasOwnProperty("min"))
                        object.min = options.json && !isFinite(message.min) ? String(message.min) : message.min;
                    if (message.max != null && message.hasOwnProperty("max"))
                        object.max = options.json && !isFinite(message.max) ? String(message.max) : message.max;
                    return object;
                };

                /**
                 * Converts this ValueRange to JSON.
                 * @function toJSON
                 * @memberof protocol.CallbackEvent.SearchValuesUpdated.ValueRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ValueRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ValueRange
                 * @function getTypeUrl
                 * @memberof protocol.CallbackEvent.SearchValuesUpdated.ValueRange
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ValueRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/protocol.CallbackEvent.SearchValuesUpdated.ValueRange";
                };

                return ValueRange;
            })();

            return SearchValuesUpdated;
        })();

        CallbackEvent.AttachmentsUpdated = (function() {

            /**
             * Properties of an AttachmentsUpdated.
             * @memberof protocol.CallbackEvent
             * @interface IAttachmentsUpdated
             * @property {number|Long|null} [len] AttachmentsUpdated len
             * @property {protocol.IAttachmentInfo|null} [attachment] AttachmentsUpdated attachment
             */

            /**
             * Constructs a new AttachmentsUpdated.
             * @memberof protocol.CallbackEvent
             * @classdesc Represents an AttachmentsUpdated.
             * @implements IAttachmentsUpdated
             * @constructor
             * @param {protocol.CallbackEvent.IAttachmentsUpdated=} [properties] Properties to set
             */
            function AttachmentsUpdated(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AttachmentsUpdated len.
             * @member {number|Long} len
             * @memberof protocol.CallbackEvent.AttachmentsUpdated
             * @instance
             */
            AttachmentsUpdated.prototype.len = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * AttachmentsUpdated attachment.
             * @member {protocol.IAttachmentInfo|null|undefined} attachment
             * @memberof protocol.CallbackEvent.AttachmentsUpdated
             * @instance
             */
            AttachmentsUpdated.prototype.attachment = null;

            /**
             * Creates a new AttachmentsUpdated instance using the specified properties.
             * @function create
             * @memberof protocol.CallbackEvent.AttachmentsUpdated
             * @static
             * @param {protocol.CallbackEvent.IAttachmentsUpdated=} [properties] Properties to set
             * @returns {protocol.CallbackEvent.AttachmentsUpdated} AttachmentsUpdated instance
             */
            AttachmentsUpdated.create = function create(properties) {
                return new AttachmentsUpdated(properties);
            };

            /**
             * Encodes the specified AttachmentsUpdated message. Does not implicitly {@link protocol.CallbackEvent.AttachmentsUpdated.verify|verify} messages.
             * @function encode
             * @memberof protocol.CallbackEvent.AttachmentsUpdated
             * @static
             * @param {protocol.CallbackEvent.IAttachmentsUpdated} message AttachmentsUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AttachmentsUpdated.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.len != null && Object.hasOwnProperty.call(message, "len"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.len);
                if (message.attachment != null && Object.hasOwnProperty.call(message, "attachment"))
                    $root.protocol.AttachmentInfo.encode(message.attachment, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified AttachmentsUpdated message, length delimited. Does not implicitly {@link protocol.CallbackEvent.AttachmentsUpdated.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.CallbackEvent.AttachmentsUpdated
             * @static
             * @param {protocol.CallbackEvent.IAttachmentsUpdated} message AttachmentsUpdated message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AttachmentsUpdated.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AttachmentsUpdated message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.CallbackEvent.AttachmentsUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.CallbackEvent.AttachmentsUpdated} AttachmentsUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AttachmentsUpdated.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CallbackEvent.AttachmentsUpdated();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.len = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.attachment = $root.protocol.AttachmentInfo.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AttachmentsUpdated message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.CallbackEvent.AttachmentsUpdated
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.CallbackEvent.AttachmentsUpdated} AttachmentsUpdated
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AttachmentsUpdated.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AttachmentsUpdated message.
             * @function verify
             * @memberof protocol.CallbackEvent.AttachmentsUpdated
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AttachmentsUpdated.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.len != null && message.hasOwnProperty("len"))
                    if (!$util.isInteger(message.len) && !(message.len && $util.isInteger(message.len.low) && $util.isInteger(message.len.high)))
                        return "len: integer|Long expected";
                if (message.attachment != null && message.hasOwnProperty("attachment")) {
                    var error = $root.protocol.AttachmentInfo.verify(message.attachment);
                    if (error)
                        return "attachment." + error;
                }
                return null;
            };

            /**
             * Creates an AttachmentsUpdated message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.CallbackEvent.AttachmentsUpdated
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.CallbackEvent.AttachmentsUpdated} AttachmentsUpdated
             */
            AttachmentsUpdated.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.CallbackEvent.AttachmentsUpdated)
                    return object;
                var message = new $root.protocol.CallbackEvent.AttachmentsUpdated();
                if (object.len != null)
                    if ($util.Long)
                        (message.len = $util.Long.fromValue(object.len)).unsigned = true;
                    else if (typeof object.len === "string")
                        message.len = parseInt(object.len, 10);
                    else if (typeof object.len === "number")
                        message.len = object.len;
                    else if (typeof object.len === "object")
                        message.len = new $util.LongBits(object.len.low >>> 0, object.len.high >>> 0).toNumber(true);
                if (object.attachment != null) {
                    if (typeof object.attachment !== "object")
                        throw TypeError(".protocol.CallbackEvent.AttachmentsUpdated.attachment: object expected");
                    message.attachment = $root.protocol.AttachmentInfo.fromObject(object.attachment);
                }
                return message;
            };

            /**
             * Creates a plain object from an AttachmentsUpdated message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.CallbackEvent.AttachmentsUpdated
             * @static
             * @param {protocol.CallbackEvent.AttachmentsUpdated} message AttachmentsUpdated
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AttachmentsUpdated.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.len = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.len = options.longs === String ? "0" : 0;
                    object.attachment = null;
                }
                if (message.len != null && message.hasOwnProperty("len"))
                    if (typeof message.len === "number")
                        object.len = options.longs === String ? String(message.len) : message.len;
                    else
                        object.len = options.longs === String ? $util.Long.prototype.toString.call(message.len) : options.longs === Number ? new $util.LongBits(message.len.low >>> 0, message.len.high >>> 0).toNumber(true) : message.len;
                if (message.attachment != null && message.hasOwnProperty("attachment"))
                    object.attachment = $root.protocol.AttachmentInfo.toObject(message.attachment, options);
                return object;
            };

            /**
             * Converts this AttachmentsUpdated to JSON.
             * @function toJSON
             * @memberof protocol.CallbackEvent.AttachmentsUpdated
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AttachmentsUpdated.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AttachmentsUpdated
             * @function getTypeUrl
             * @memberof protocol.CallbackEvent.AttachmentsUpdated
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AttachmentsUpdated.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.CallbackEvent.AttachmentsUpdated";
            };

            return AttachmentsUpdated;
        })();

        CallbackEvent.Progress = (function() {

            /**
             * Properties of a Progress.
             * @memberof protocol.CallbackEvent
             * @interface IProgress
             * @property {string|null} [uuid] Progress uuid
             * @property {protocol.CallbackEvent.Progress.IProgressDetail|null} [detail] Progress detail
             */

            /**
             * Constructs a new Progress.
             * @memberof protocol.CallbackEvent
             * @classdesc Represents a Progress.
             * @implements IProgress
             * @constructor
             * @param {protocol.CallbackEvent.IProgress=} [properties] Properties to set
             */
            function Progress(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Progress uuid.
             * @member {string} uuid
             * @memberof protocol.CallbackEvent.Progress
             * @instance
             */
            Progress.prototype.uuid = "";

            /**
             * Progress detail.
             * @member {protocol.CallbackEvent.Progress.IProgressDetail|null|undefined} detail
             * @memberof protocol.CallbackEvent.Progress
             * @instance
             */
            Progress.prototype.detail = null;

            /**
             * Creates a new Progress instance using the specified properties.
             * @function create
             * @memberof protocol.CallbackEvent.Progress
             * @static
             * @param {protocol.CallbackEvent.IProgress=} [properties] Properties to set
             * @returns {protocol.CallbackEvent.Progress} Progress instance
             */
            Progress.create = function create(properties) {
                return new Progress(properties);
            };

            /**
             * Encodes the specified Progress message. Does not implicitly {@link protocol.CallbackEvent.Progress.verify|verify} messages.
             * @function encode
             * @memberof protocol.CallbackEvent.Progress
             * @static
             * @param {protocol.CallbackEvent.IProgress} message Progress message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Progress.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
                if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
                    $root.protocol.CallbackEvent.Progress.ProgressDetail.encode(message.detail, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Progress message, length delimited. Does not implicitly {@link protocol.CallbackEvent.Progress.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.CallbackEvent.Progress
             * @static
             * @param {protocol.CallbackEvent.IProgress} message Progress message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Progress.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Progress message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.CallbackEvent.Progress
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.CallbackEvent.Progress} Progress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Progress.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CallbackEvent.Progress();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.uuid = reader.string();
                            break;
                        }
                    case 2: {
                            message.detail = $root.protocol.CallbackEvent.Progress.ProgressDetail.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Progress message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.CallbackEvent.Progress
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.CallbackEvent.Progress} Progress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Progress.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Progress message.
             * @function verify
             * @memberof protocol.CallbackEvent.Progress
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Progress.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!$util.isString(message.uuid))
                        return "uuid: string expected";
                if (message.detail != null && message.hasOwnProperty("detail")) {
                    var error = $root.protocol.CallbackEvent.Progress.ProgressDetail.verify(message.detail);
                    if (error)
                        return "detail." + error;
                }
                return null;
            };

            /**
             * Creates a Progress message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.CallbackEvent.Progress
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.CallbackEvent.Progress} Progress
             */
            Progress.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.CallbackEvent.Progress)
                    return object;
                var message = new $root.protocol.CallbackEvent.Progress();
                if (object.uuid != null)
                    message.uuid = String(object.uuid);
                if (object.detail != null) {
                    if (typeof object.detail !== "object")
                        throw TypeError(".protocol.CallbackEvent.Progress.detail: object expected");
                    message.detail = $root.protocol.CallbackEvent.Progress.ProgressDetail.fromObject(object.detail);
                }
                return message;
            };

            /**
             * Creates a plain object from a Progress message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.CallbackEvent.Progress
             * @static
             * @param {protocol.CallbackEvent.Progress} message Progress
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Progress.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uuid = "";
                    object.detail = null;
                }
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = message.uuid;
                if (message.detail != null && message.hasOwnProperty("detail"))
                    object.detail = $root.protocol.CallbackEvent.Progress.ProgressDetail.toObject(message.detail, options);
                return object;
            };

            /**
             * Converts this Progress to JSON.
             * @function toJSON
             * @memberof protocol.CallbackEvent.Progress
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Progress.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Progress
             * @function getTypeUrl
             * @memberof protocol.CallbackEvent.Progress
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Progress.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.CallbackEvent.Progress";
            };

            Progress.ProgressDetail = (function() {

                /**
                 * Properties of a ProgressDetail.
                 * @memberof protocol.CallbackEvent.Progress
                 * @interface IProgressDetail
                 * @property {protocol.ITicks|null} [ticks] ProgressDetail ticks
                 * @property {protocol.INotification|null} [notification] ProgressDetail notification
                 * @property {boolean|null} [stopped] ProgressDetail stopped
                 */

                /**
                 * Constructs a new ProgressDetail.
                 * @memberof protocol.CallbackEvent.Progress
                 * @classdesc Represents a ProgressDetail.
                 * @implements IProgressDetail
                 * @constructor
                 * @param {protocol.CallbackEvent.Progress.IProgressDetail=} [properties] Properties to set
                 */
                function ProgressDetail(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ProgressDetail ticks.
                 * @member {protocol.ITicks|null|undefined} ticks
                 * @memberof protocol.CallbackEvent.Progress.ProgressDetail
                 * @instance
                 */
                ProgressDetail.prototype.ticks = null;

                /**
                 * ProgressDetail notification.
                 * @member {protocol.INotification|null|undefined} notification
                 * @memberof protocol.CallbackEvent.Progress.ProgressDetail
                 * @instance
                 */
                ProgressDetail.prototype.notification = null;

                /**
                 * ProgressDetail stopped.
                 * @member {boolean|null|undefined} stopped
                 * @memberof protocol.CallbackEvent.Progress.ProgressDetail
                 * @instance
                 */
                ProgressDetail.prototype.stopped = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * ProgressDetail detail.
                 * @member {"ticks"|"notification"|"stopped"|undefined} detail
                 * @memberof protocol.CallbackEvent.Progress.ProgressDetail
                 * @instance
                 */
                Object.defineProperty(ProgressDetail.prototype, "detail", {
                    get: $util.oneOfGetter($oneOfFields = ["ticks", "notification", "stopped"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new ProgressDetail instance using the specified properties.
                 * @function create
                 * @memberof protocol.CallbackEvent.Progress.ProgressDetail
                 * @static
                 * @param {protocol.CallbackEvent.Progress.IProgressDetail=} [properties] Properties to set
                 * @returns {protocol.CallbackEvent.Progress.ProgressDetail} ProgressDetail instance
                 */
                ProgressDetail.create = function create(properties) {
                    return new ProgressDetail(properties);
                };

                /**
                 * Encodes the specified ProgressDetail message. Does not implicitly {@link protocol.CallbackEvent.Progress.ProgressDetail.verify|verify} messages.
                 * @function encode
                 * @memberof protocol.CallbackEvent.Progress.ProgressDetail
                 * @static
                 * @param {protocol.CallbackEvent.Progress.IProgressDetail} message ProgressDetail message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ProgressDetail.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ticks != null && Object.hasOwnProperty.call(message, "ticks"))
                        $root.protocol.Ticks.encode(message.ticks, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.notification != null && Object.hasOwnProperty.call(message, "notification"))
                        $root.protocol.Notification.encode(message.notification, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.stopped != null && Object.hasOwnProperty.call(message, "stopped"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.stopped);
                    return writer;
                };

                /**
                 * Encodes the specified ProgressDetail message, length delimited. Does not implicitly {@link protocol.CallbackEvent.Progress.ProgressDetail.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof protocol.CallbackEvent.Progress.ProgressDetail
                 * @static
                 * @param {protocol.CallbackEvent.Progress.IProgressDetail} message ProgressDetail message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ProgressDetail.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ProgressDetail message from the specified reader or buffer.
                 * @function decode
                 * @memberof protocol.CallbackEvent.Progress.ProgressDetail
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {protocol.CallbackEvent.Progress.ProgressDetail} ProgressDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ProgressDetail.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CallbackEvent.Progress.ProgressDetail();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.ticks = $root.protocol.Ticks.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.notification = $root.protocol.Notification.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                message.stopped = reader.bool();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ProgressDetail message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof protocol.CallbackEvent.Progress.ProgressDetail
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {protocol.CallbackEvent.Progress.ProgressDetail} ProgressDetail
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ProgressDetail.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ProgressDetail message.
                 * @function verify
                 * @memberof protocol.CallbackEvent.Progress.ProgressDetail
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ProgressDetail.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.ticks != null && message.hasOwnProperty("ticks")) {
                        properties.detail = 1;
                        {
                            var error = $root.protocol.Ticks.verify(message.ticks);
                            if (error)
                                return "ticks." + error;
                        }
                    }
                    if (message.notification != null && message.hasOwnProperty("notification")) {
                        if (properties.detail === 1)
                            return "detail: multiple values";
                        properties.detail = 1;
                        {
                            var error = $root.protocol.Notification.verify(message.notification);
                            if (error)
                                return "notification." + error;
                        }
                    }
                    if (message.stopped != null && message.hasOwnProperty("stopped")) {
                        if (properties.detail === 1)
                            return "detail: multiple values";
                        properties.detail = 1;
                        if (typeof message.stopped !== "boolean")
                            return "stopped: boolean expected";
                    }
                    return null;
                };

                /**
                 * Creates a ProgressDetail message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof protocol.CallbackEvent.Progress.ProgressDetail
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {protocol.CallbackEvent.Progress.ProgressDetail} ProgressDetail
                 */
                ProgressDetail.fromObject = function fromObject(object) {
                    if (object instanceof $root.protocol.CallbackEvent.Progress.ProgressDetail)
                        return object;
                    var message = new $root.protocol.CallbackEvent.Progress.ProgressDetail();
                    if (object.ticks != null) {
                        if (typeof object.ticks !== "object")
                            throw TypeError(".protocol.CallbackEvent.Progress.ProgressDetail.ticks: object expected");
                        message.ticks = $root.protocol.Ticks.fromObject(object.ticks);
                    }
                    if (object.notification != null) {
                        if (typeof object.notification !== "object")
                            throw TypeError(".protocol.CallbackEvent.Progress.ProgressDetail.notification: object expected");
                        message.notification = $root.protocol.Notification.fromObject(object.notification);
                    }
                    if (object.stopped != null)
                        message.stopped = Boolean(object.stopped);
                    return message;
                };

                /**
                 * Creates a plain object from a ProgressDetail message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof protocol.CallbackEvent.Progress.ProgressDetail
                 * @static
                 * @param {protocol.CallbackEvent.Progress.ProgressDetail} message ProgressDetail
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ProgressDetail.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.ticks != null && message.hasOwnProperty("ticks")) {
                        object.ticks = $root.protocol.Ticks.toObject(message.ticks, options);
                        if (options.oneofs)
                            object.detail = "ticks";
                    }
                    if (message.notification != null && message.hasOwnProperty("notification")) {
                        object.notification = $root.protocol.Notification.toObject(message.notification, options);
                        if (options.oneofs)
                            object.detail = "notification";
                    }
                    if (message.stopped != null && message.hasOwnProperty("stopped")) {
                        object.stopped = message.stopped;
                        if (options.oneofs)
                            object.detail = "stopped";
                    }
                    return object;
                };

                /**
                 * Converts this ProgressDetail to JSON.
                 * @function toJSON
                 * @memberof protocol.CallbackEvent.Progress.ProgressDetail
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ProgressDetail.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ProgressDetail
                 * @function getTypeUrl
                 * @memberof protocol.CallbackEvent.Progress.ProgressDetail
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ProgressDetail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/protocol.CallbackEvent.Progress.ProgressDetail";
                };

                return ProgressDetail;
            })();

            return Progress;
        })();

        CallbackEvent.OperationError = (function() {

            /**
             * Properties of an OperationError.
             * @memberof protocol.CallbackEvent
             * @interface IOperationError
             * @property {string|null} [uuid] OperationError uuid
             * @property {protocol.INativeError|null} [error] OperationError error
             */

            /**
             * Constructs a new OperationError.
             * @memberof protocol.CallbackEvent
             * @classdesc Represents an OperationError.
             * @implements IOperationError
             * @constructor
             * @param {protocol.CallbackEvent.IOperationError=} [properties] Properties to set
             */
            function OperationError(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OperationError uuid.
             * @member {string} uuid
             * @memberof protocol.CallbackEvent.OperationError
             * @instance
             */
            OperationError.prototype.uuid = "";

            /**
             * OperationError error.
             * @member {protocol.INativeError|null|undefined} error
             * @memberof protocol.CallbackEvent.OperationError
             * @instance
             */
            OperationError.prototype.error = null;

            /**
             * Creates a new OperationError instance using the specified properties.
             * @function create
             * @memberof protocol.CallbackEvent.OperationError
             * @static
             * @param {protocol.CallbackEvent.IOperationError=} [properties] Properties to set
             * @returns {protocol.CallbackEvent.OperationError} OperationError instance
             */
            OperationError.create = function create(properties) {
                return new OperationError(properties);
            };

            /**
             * Encodes the specified OperationError message. Does not implicitly {@link protocol.CallbackEvent.OperationError.verify|verify} messages.
             * @function encode
             * @memberof protocol.CallbackEvent.OperationError
             * @static
             * @param {protocol.CallbackEvent.IOperationError} message OperationError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OperationError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    $root.protocol.NativeError.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OperationError message, length delimited. Does not implicitly {@link protocol.CallbackEvent.OperationError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.CallbackEvent.OperationError
             * @static
             * @param {protocol.CallbackEvent.IOperationError} message OperationError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OperationError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OperationError message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.CallbackEvent.OperationError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.CallbackEvent.OperationError} OperationError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OperationError.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.CallbackEvent.OperationError();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.uuid = reader.string();
                            break;
                        }
                    case 2: {
                            message.error = $root.protocol.NativeError.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OperationError message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.CallbackEvent.OperationError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.CallbackEvent.OperationError} OperationError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OperationError.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OperationError message.
             * @function verify
             * @memberof protocol.CallbackEvent.OperationError
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OperationError.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    if (!$util.isString(message.uuid))
                        return "uuid: string expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.protocol.NativeError.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                return null;
            };

            /**
             * Creates an OperationError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.CallbackEvent.OperationError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.CallbackEvent.OperationError} OperationError
             */
            OperationError.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.CallbackEvent.OperationError)
                    return object;
                var message = new $root.protocol.CallbackEvent.OperationError();
                if (object.uuid != null)
                    message.uuid = String(object.uuid);
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".protocol.CallbackEvent.OperationError.error: object expected");
                    message.error = $root.protocol.NativeError.fromObject(object.error);
                }
                return message;
            };

            /**
             * Creates a plain object from an OperationError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.CallbackEvent.OperationError
             * @static
             * @param {protocol.CallbackEvent.OperationError} message OperationError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OperationError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uuid = "";
                    object.error = null;
                }
                if (message.uuid != null && message.hasOwnProperty("uuid"))
                    object.uuid = message.uuid;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.protocol.NativeError.toObject(message.error, options);
                return object;
            };

            /**
             * Converts this OperationError to JSON.
             * @function toJSON
             * @memberof protocol.CallbackEvent.OperationError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OperationError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OperationError
             * @function getTypeUrl
             * @memberof protocol.CallbackEvent.OperationError
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OperationError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.CallbackEvent.OperationError";
            };

            return OperationError;
        })();

        return CallbackEvent;
    })();

    protocol.GrabbedElement = (function() {

        /**
         * Properties of a GrabbedElement.
         * @memberof protocol
         * @interface IGrabbedElement
         * @property {number|null} [sourceId] GrabbedElement sourceId
         * @property {string|null} [content] GrabbedElement content
         * @property {number|Long|null} [pos] GrabbedElement pos
         * @property {number|null} [nature] GrabbedElement nature
         */

        /**
         * Constructs a new GrabbedElement.
         * @memberof protocol
         * @classdesc Represents a GrabbedElement.
         * @implements IGrabbedElement
         * @constructor
         * @param {protocol.IGrabbedElement=} [properties] Properties to set
         */
        function GrabbedElement(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GrabbedElement sourceId.
         * @member {number} sourceId
         * @memberof protocol.GrabbedElement
         * @instance
         */
        GrabbedElement.prototype.sourceId = 0;

        /**
         * GrabbedElement content.
         * @member {string} content
         * @memberof protocol.GrabbedElement
         * @instance
         */
        GrabbedElement.prototype.content = "";

        /**
         * GrabbedElement pos.
         * @member {number|Long} pos
         * @memberof protocol.GrabbedElement
         * @instance
         */
        GrabbedElement.prototype.pos = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * GrabbedElement nature.
         * @member {number} nature
         * @memberof protocol.GrabbedElement
         * @instance
         */
        GrabbedElement.prototype.nature = 0;

        /**
         * Creates a new GrabbedElement instance using the specified properties.
         * @function create
         * @memberof protocol.GrabbedElement
         * @static
         * @param {protocol.IGrabbedElement=} [properties] Properties to set
         * @returns {protocol.GrabbedElement} GrabbedElement instance
         */
        GrabbedElement.create = function create(properties) {
            return new GrabbedElement(properties);
        };

        /**
         * Encodes the specified GrabbedElement message. Does not implicitly {@link protocol.GrabbedElement.verify|verify} messages.
         * @function encode
         * @memberof protocol.GrabbedElement
         * @static
         * @param {protocol.IGrabbedElement} message GrabbedElement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GrabbedElement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sourceId != null && Object.hasOwnProperty.call(message, "sourceId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.sourceId);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            if (message.pos != null && Object.hasOwnProperty.call(message, "pos"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.pos);
            if (message.nature != null && Object.hasOwnProperty.call(message, "nature"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.nature);
            return writer;
        };

        /**
         * Encodes the specified GrabbedElement message, length delimited. Does not implicitly {@link protocol.GrabbedElement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GrabbedElement
         * @static
         * @param {protocol.IGrabbedElement} message GrabbedElement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GrabbedElement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GrabbedElement message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GrabbedElement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GrabbedElement} GrabbedElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GrabbedElement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GrabbedElement();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sourceId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.content = reader.string();
                        break;
                    }
                case 3: {
                        message.pos = reader.uint64();
                        break;
                    }
                case 4: {
                        message.nature = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GrabbedElement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.GrabbedElement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GrabbedElement} GrabbedElement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GrabbedElement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GrabbedElement message.
         * @function verify
         * @memberof protocol.GrabbedElement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GrabbedElement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                if (!$util.isInteger(message.sourceId))
                    return "sourceId: integer expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (!$util.isInteger(message.pos) && !(message.pos && $util.isInteger(message.pos.low) && $util.isInteger(message.pos.high)))
                    return "pos: integer|Long expected";
            if (message.nature != null && message.hasOwnProperty("nature"))
                if (!$util.isInteger(message.nature))
                    return "nature: integer expected";
            return null;
        };

        /**
         * Creates a GrabbedElement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GrabbedElement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GrabbedElement} GrabbedElement
         */
        GrabbedElement.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GrabbedElement)
                return object;
            var message = new $root.protocol.GrabbedElement();
            if (object.sourceId != null)
                message.sourceId = object.sourceId >>> 0;
            if (object.content != null)
                message.content = String(object.content);
            if (object.pos != null)
                if ($util.Long)
                    (message.pos = $util.Long.fromValue(object.pos)).unsigned = true;
                else if (typeof object.pos === "string")
                    message.pos = parseInt(object.pos, 10);
                else if (typeof object.pos === "number")
                    message.pos = object.pos;
                else if (typeof object.pos === "object")
                    message.pos = new $util.LongBits(object.pos.low >>> 0, object.pos.high >>> 0).toNumber(true);
            if (object.nature != null)
                message.nature = object.nature >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a GrabbedElement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GrabbedElement
         * @static
         * @param {protocol.GrabbedElement} message GrabbedElement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GrabbedElement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sourceId = 0;
                object.content = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.pos = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pos = options.longs === String ? "0" : 0;
                object.nature = 0;
            }
            if (message.sourceId != null && message.hasOwnProperty("sourceId"))
                object.sourceId = message.sourceId;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (typeof message.pos === "number")
                    object.pos = options.longs === String ? String(message.pos) : message.pos;
                else
                    object.pos = options.longs === String ? $util.Long.prototype.toString.call(message.pos) : options.longs === Number ? new $util.LongBits(message.pos.low >>> 0, message.pos.high >>> 0).toNumber(true) : message.pos;
            if (message.nature != null && message.hasOwnProperty("nature"))
                object.nature = message.nature;
            return object;
        };

        /**
         * Converts this GrabbedElement to JSON.
         * @function toJSON
         * @memberof protocol.GrabbedElement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GrabbedElement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GrabbedElement
         * @function getTypeUrl
         * @memberof protocol.GrabbedElement
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GrabbedElement.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GrabbedElement";
        };

        return GrabbedElement;
    })();

    protocol.GrabbedElementList = (function() {

        /**
         * Properties of a GrabbedElementList.
         * @memberof protocol
         * @interface IGrabbedElementList
         * @property {Array.<protocol.IGrabbedElement>|null} [elements] GrabbedElementList elements
         */

        /**
         * Constructs a new GrabbedElementList.
         * @memberof protocol
         * @classdesc Represents a GrabbedElementList.
         * @implements IGrabbedElementList
         * @constructor
         * @param {protocol.IGrabbedElementList=} [properties] Properties to set
         */
        function GrabbedElementList(properties) {
            this.elements = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GrabbedElementList elements.
         * @member {Array.<protocol.IGrabbedElement>} elements
         * @memberof protocol.GrabbedElementList
         * @instance
         */
        GrabbedElementList.prototype.elements = $util.emptyArray;

        /**
         * Creates a new GrabbedElementList instance using the specified properties.
         * @function create
         * @memberof protocol.GrabbedElementList
         * @static
         * @param {protocol.IGrabbedElementList=} [properties] Properties to set
         * @returns {protocol.GrabbedElementList} GrabbedElementList instance
         */
        GrabbedElementList.create = function create(properties) {
            return new GrabbedElementList(properties);
        };

        /**
         * Encodes the specified GrabbedElementList message. Does not implicitly {@link protocol.GrabbedElementList.verify|verify} messages.
         * @function encode
         * @memberof protocol.GrabbedElementList
         * @static
         * @param {protocol.IGrabbedElementList} message GrabbedElementList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GrabbedElementList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.elements != null && message.elements.length)
                for (var i = 0; i < message.elements.length; ++i)
                    $root.protocol.GrabbedElement.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GrabbedElementList message, length delimited. Does not implicitly {@link protocol.GrabbedElementList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.GrabbedElementList
         * @static
         * @param {protocol.IGrabbedElementList} message GrabbedElementList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GrabbedElementList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GrabbedElementList message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.GrabbedElementList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.GrabbedElementList} GrabbedElementList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GrabbedElementList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.GrabbedElementList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.protocol.GrabbedElement.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GrabbedElementList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.GrabbedElementList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.GrabbedElementList} GrabbedElementList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GrabbedElementList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GrabbedElementList message.
         * @function verify
         * @memberof protocol.GrabbedElementList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GrabbedElementList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.elements != null && message.hasOwnProperty("elements")) {
                if (!Array.isArray(message.elements))
                    return "elements: array expected";
                for (var i = 0; i < message.elements.length; ++i) {
                    var error = $root.protocol.GrabbedElement.verify(message.elements[i]);
                    if (error)
                        return "elements." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GrabbedElementList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.GrabbedElementList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.GrabbedElementList} GrabbedElementList
         */
        GrabbedElementList.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.GrabbedElementList)
                return object;
            var message = new $root.protocol.GrabbedElementList();
            if (object.elements) {
                if (!Array.isArray(object.elements))
                    throw TypeError(".protocol.GrabbedElementList.elements: array expected");
                message.elements = [];
                for (var i = 0; i < object.elements.length; ++i) {
                    if (typeof object.elements[i] !== "object")
                        throw TypeError(".protocol.GrabbedElementList.elements: object expected");
                    message.elements[i] = $root.protocol.GrabbedElement.fromObject(object.elements[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GrabbedElementList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.GrabbedElementList
         * @static
         * @param {protocol.GrabbedElementList} message GrabbedElementList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GrabbedElementList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.elements = [];
            if (message.elements && message.elements.length) {
                object.elements = [];
                for (var j = 0; j < message.elements.length; ++j)
                    object.elements[j] = $root.protocol.GrabbedElement.toObject(message.elements[j], options);
            }
            return object;
        };

        /**
         * Converts this GrabbedElementList to JSON.
         * @function toJSON
         * @memberof protocol.GrabbedElementList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GrabbedElementList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GrabbedElementList
         * @function getTypeUrl
         * @memberof protocol.GrabbedElementList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GrabbedElementList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.GrabbedElementList";
        };

        return GrabbedElementList;
    })();

    protocol.ObserveOptions = (function() {

        /**
         * Properties of an ObserveOptions.
         * @memberof protocol
         * @interface IObserveOptions
         * @property {protocol.IObserveOrigin|null} [origin] ObserveOptions origin
         * @property {protocol.IParserType|null} [parser] ObserveOptions parser
         */

        /**
         * Constructs a new ObserveOptions.
         * @memberof protocol
         * @classdesc Represents an ObserveOptions.
         * @implements IObserveOptions
         * @constructor
         * @param {protocol.IObserveOptions=} [properties] Properties to set
         */
        function ObserveOptions(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObserveOptions origin.
         * @member {protocol.IObserveOrigin|null|undefined} origin
         * @memberof protocol.ObserveOptions
         * @instance
         */
        ObserveOptions.prototype.origin = null;

        /**
         * ObserveOptions parser.
         * @member {protocol.IParserType|null|undefined} parser
         * @memberof protocol.ObserveOptions
         * @instance
         */
        ObserveOptions.prototype.parser = null;

        /**
         * Creates a new ObserveOptions instance using the specified properties.
         * @function create
         * @memberof protocol.ObserveOptions
         * @static
         * @param {protocol.IObserveOptions=} [properties] Properties to set
         * @returns {protocol.ObserveOptions} ObserveOptions instance
         */
        ObserveOptions.create = function create(properties) {
            return new ObserveOptions(properties);
        };

        /**
         * Encodes the specified ObserveOptions message. Does not implicitly {@link protocol.ObserveOptions.verify|verify} messages.
         * @function encode
         * @memberof protocol.ObserveOptions
         * @static
         * @param {protocol.IObserveOptions} message ObserveOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObserveOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.origin != null && Object.hasOwnProperty.call(message, "origin"))
                $root.protocol.ObserveOrigin.encode(message.origin, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.parser != null && Object.hasOwnProperty.call(message, "parser"))
                $root.protocol.ParserType.encode(message.parser, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ObserveOptions message, length delimited. Does not implicitly {@link protocol.ObserveOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ObserveOptions
         * @static
         * @param {protocol.IObserveOptions} message ObserveOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObserveOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ObserveOptions message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ObserveOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ObserveOptions} ObserveOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObserveOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ObserveOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.origin = $root.protocol.ObserveOrigin.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.parser = $root.protocol.ParserType.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ObserveOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ObserveOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ObserveOptions} ObserveOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObserveOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ObserveOptions message.
         * @function verify
         * @memberof protocol.ObserveOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ObserveOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.origin != null && message.hasOwnProperty("origin")) {
                var error = $root.protocol.ObserveOrigin.verify(message.origin);
                if (error)
                    return "origin." + error;
            }
            if (message.parser != null && message.hasOwnProperty("parser")) {
                var error = $root.protocol.ParserType.verify(message.parser);
                if (error)
                    return "parser." + error;
            }
            return null;
        };

        /**
         * Creates an ObserveOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ObserveOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ObserveOptions} ObserveOptions
         */
        ObserveOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ObserveOptions)
                return object;
            var message = new $root.protocol.ObserveOptions();
            if (object.origin != null) {
                if (typeof object.origin !== "object")
                    throw TypeError(".protocol.ObserveOptions.origin: object expected");
                message.origin = $root.protocol.ObserveOrigin.fromObject(object.origin);
            }
            if (object.parser != null) {
                if (typeof object.parser !== "object")
                    throw TypeError(".protocol.ObserveOptions.parser: object expected");
                message.parser = $root.protocol.ParserType.fromObject(object.parser);
            }
            return message;
        };

        /**
         * Creates a plain object from an ObserveOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ObserveOptions
         * @static
         * @param {protocol.ObserveOptions} message ObserveOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ObserveOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.origin = null;
                object.parser = null;
            }
            if (message.origin != null && message.hasOwnProperty("origin"))
                object.origin = $root.protocol.ObserveOrigin.toObject(message.origin, options);
            if (message.parser != null && message.hasOwnProperty("parser"))
                object.parser = $root.protocol.ParserType.toObject(message.parser, options);
            return object;
        };

        /**
         * Converts this ObserveOptions to JSON.
         * @function toJSON
         * @memberof protocol.ObserveOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ObserveOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ObserveOptions
         * @function getTypeUrl
         * @memberof protocol.ObserveOptions
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ObserveOptions.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.ObserveOptions";
        };

        return ObserveOptions;
    })();

    protocol.DltParserSettings = (function() {

        /**
         * Properties of a DltParserSettings.
         * @memberof protocol
         * @interface IDltParserSettings
         * @property {protocol.IDltFilterConfig|null} [filterConfig] DltParserSettings filterConfig
         * @property {Array.<string>|null} [fibexFilePaths] DltParserSettings fibexFilePaths
         * @property {boolean|null} [withStorageHeader] DltParserSettings withStorageHeader
         * @property {string|null} [tz] DltParserSettings tz
         */

        /**
         * Constructs a new DltParserSettings.
         * @memberof protocol
         * @classdesc Represents a DltParserSettings.
         * @implements IDltParserSettings
         * @constructor
         * @param {protocol.IDltParserSettings=} [properties] Properties to set
         */
        function DltParserSettings(properties) {
            this.fibexFilePaths = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DltParserSettings filterConfig.
         * @member {protocol.IDltFilterConfig|null|undefined} filterConfig
         * @memberof protocol.DltParserSettings
         * @instance
         */
        DltParserSettings.prototype.filterConfig = null;

        /**
         * DltParserSettings fibexFilePaths.
         * @member {Array.<string>} fibexFilePaths
         * @memberof protocol.DltParserSettings
         * @instance
         */
        DltParserSettings.prototype.fibexFilePaths = $util.emptyArray;

        /**
         * DltParserSettings withStorageHeader.
         * @member {boolean} withStorageHeader
         * @memberof protocol.DltParserSettings
         * @instance
         */
        DltParserSettings.prototype.withStorageHeader = false;

        /**
         * DltParserSettings tz.
         * @member {string} tz
         * @memberof protocol.DltParserSettings
         * @instance
         */
        DltParserSettings.prototype.tz = "";

        /**
         * Creates a new DltParserSettings instance using the specified properties.
         * @function create
         * @memberof protocol.DltParserSettings
         * @static
         * @param {protocol.IDltParserSettings=} [properties] Properties to set
         * @returns {protocol.DltParserSettings} DltParserSettings instance
         */
        DltParserSettings.create = function create(properties) {
            return new DltParserSettings(properties);
        };

        /**
         * Encodes the specified DltParserSettings message. Does not implicitly {@link protocol.DltParserSettings.verify|verify} messages.
         * @function encode
         * @memberof protocol.DltParserSettings
         * @static
         * @param {protocol.IDltParserSettings} message DltParserSettings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DltParserSettings.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.filterConfig != null && Object.hasOwnProperty.call(message, "filterConfig"))
                $root.protocol.DltFilterConfig.encode(message.filterConfig, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.fibexFilePaths != null && message.fibexFilePaths.length)
                for (var i = 0; i < message.fibexFilePaths.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.fibexFilePaths[i]);
            if (message.withStorageHeader != null && Object.hasOwnProperty.call(message, "withStorageHeader"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.withStorageHeader);
            if (message.tz != null && Object.hasOwnProperty.call(message, "tz"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.tz);
            return writer;
        };

        /**
         * Encodes the specified DltParserSettings message, length delimited. Does not implicitly {@link protocol.DltParserSettings.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.DltParserSettings
         * @static
         * @param {protocol.IDltParserSettings} message DltParserSettings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DltParserSettings.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DltParserSettings message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.DltParserSettings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.DltParserSettings} DltParserSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DltParserSettings.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.DltParserSettings();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.filterConfig = $root.protocol.DltFilterConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.fibexFilePaths && message.fibexFilePaths.length))
                            message.fibexFilePaths = [];
                        message.fibexFilePaths.push(reader.string());
                        break;
                    }
                case 3: {
                        message.withStorageHeader = reader.bool();
                        break;
                    }
                case 4: {
                        message.tz = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DltParserSettings message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.DltParserSettings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.DltParserSettings} DltParserSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DltParserSettings.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DltParserSettings message.
         * @function verify
         * @memberof protocol.DltParserSettings
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DltParserSettings.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.filterConfig != null && message.hasOwnProperty("filterConfig")) {
                var error = $root.protocol.DltFilterConfig.verify(message.filterConfig);
                if (error)
                    return "filterConfig." + error;
            }
            if (message.fibexFilePaths != null && message.hasOwnProperty("fibexFilePaths")) {
                if (!Array.isArray(message.fibexFilePaths))
                    return "fibexFilePaths: array expected";
                for (var i = 0; i < message.fibexFilePaths.length; ++i)
                    if (!$util.isString(message.fibexFilePaths[i]))
                        return "fibexFilePaths: string[] expected";
            }
            if (message.withStorageHeader != null && message.hasOwnProperty("withStorageHeader"))
                if (typeof message.withStorageHeader !== "boolean")
                    return "withStorageHeader: boolean expected";
            if (message.tz != null && message.hasOwnProperty("tz"))
                if (!$util.isString(message.tz))
                    return "tz: string expected";
            return null;
        };

        /**
         * Creates a DltParserSettings message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.DltParserSettings
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.DltParserSettings} DltParserSettings
         */
        DltParserSettings.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.DltParserSettings)
                return object;
            var message = new $root.protocol.DltParserSettings();
            if (object.filterConfig != null) {
                if (typeof object.filterConfig !== "object")
                    throw TypeError(".protocol.DltParserSettings.filterConfig: object expected");
                message.filterConfig = $root.protocol.DltFilterConfig.fromObject(object.filterConfig);
            }
            if (object.fibexFilePaths) {
                if (!Array.isArray(object.fibexFilePaths))
                    throw TypeError(".protocol.DltParserSettings.fibexFilePaths: array expected");
                message.fibexFilePaths = [];
                for (var i = 0; i < object.fibexFilePaths.length; ++i)
                    message.fibexFilePaths[i] = String(object.fibexFilePaths[i]);
            }
            if (object.withStorageHeader != null)
                message.withStorageHeader = Boolean(object.withStorageHeader);
            if (object.tz != null)
                message.tz = String(object.tz);
            return message;
        };

        /**
         * Creates a plain object from a DltParserSettings message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.DltParserSettings
         * @static
         * @param {protocol.DltParserSettings} message DltParserSettings
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DltParserSettings.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.fibexFilePaths = [];
            if (options.defaults) {
                object.filterConfig = null;
                object.withStorageHeader = false;
                object.tz = "";
            }
            if (message.filterConfig != null && message.hasOwnProperty("filterConfig"))
                object.filterConfig = $root.protocol.DltFilterConfig.toObject(message.filterConfig, options);
            if (message.fibexFilePaths && message.fibexFilePaths.length) {
                object.fibexFilePaths = [];
                for (var j = 0; j < message.fibexFilePaths.length; ++j)
                    object.fibexFilePaths[j] = message.fibexFilePaths[j];
            }
            if (message.withStorageHeader != null && message.hasOwnProperty("withStorageHeader"))
                object.withStorageHeader = message.withStorageHeader;
            if (message.tz != null && message.hasOwnProperty("tz"))
                object.tz = message.tz;
            return object;
        };

        /**
         * Converts this DltParserSettings to JSON.
         * @function toJSON
         * @memberof protocol.DltParserSettings
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DltParserSettings.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DltParserSettings
         * @function getTypeUrl
         * @memberof protocol.DltParserSettings
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DltParserSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.DltParserSettings";
        };

        return DltParserSettings;
    })();

    protocol.DltFilterConfig = (function() {

        /**
         * Properties of a DltFilterConfig.
         * @memberof protocol
         * @interface IDltFilterConfig
         * @property {number|null} [minLogLevel] DltFilterConfig minLogLevel
         * @property {Array.<string>|null} [appIds] DltFilterConfig appIds
         * @property {Array.<string>|null} [ecuIds] DltFilterConfig ecuIds
         * @property {Array.<string>|null} [contextIds] DltFilterConfig contextIds
         * @property {number|Long|null} [appIdCount] DltFilterConfig appIdCount
         * @property {number|Long|null} [contextIdCount] DltFilterConfig contextIdCount
         */

        /**
         * Constructs a new DltFilterConfig.
         * @memberof protocol
         * @classdesc Represents a DltFilterConfig.
         * @implements IDltFilterConfig
         * @constructor
         * @param {protocol.IDltFilterConfig=} [properties] Properties to set
         */
        function DltFilterConfig(properties) {
            this.appIds = [];
            this.ecuIds = [];
            this.contextIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DltFilterConfig minLogLevel.
         * @member {number} minLogLevel
         * @memberof protocol.DltFilterConfig
         * @instance
         */
        DltFilterConfig.prototype.minLogLevel = 0;

        /**
         * DltFilterConfig appIds.
         * @member {Array.<string>} appIds
         * @memberof protocol.DltFilterConfig
         * @instance
         */
        DltFilterConfig.prototype.appIds = $util.emptyArray;

        /**
         * DltFilterConfig ecuIds.
         * @member {Array.<string>} ecuIds
         * @memberof protocol.DltFilterConfig
         * @instance
         */
        DltFilterConfig.prototype.ecuIds = $util.emptyArray;

        /**
         * DltFilterConfig contextIds.
         * @member {Array.<string>} contextIds
         * @memberof protocol.DltFilterConfig
         * @instance
         */
        DltFilterConfig.prototype.contextIds = $util.emptyArray;

        /**
         * DltFilterConfig appIdCount.
         * @member {number|Long} appIdCount
         * @memberof protocol.DltFilterConfig
         * @instance
         */
        DltFilterConfig.prototype.appIdCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DltFilterConfig contextIdCount.
         * @member {number|Long} contextIdCount
         * @memberof protocol.DltFilterConfig
         * @instance
         */
        DltFilterConfig.prototype.contextIdCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DltFilterConfig instance using the specified properties.
         * @function create
         * @memberof protocol.DltFilterConfig
         * @static
         * @param {protocol.IDltFilterConfig=} [properties] Properties to set
         * @returns {protocol.DltFilterConfig} DltFilterConfig instance
         */
        DltFilterConfig.create = function create(properties) {
            return new DltFilterConfig(properties);
        };

        /**
         * Encodes the specified DltFilterConfig message. Does not implicitly {@link protocol.DltFilterConfig.verify|verify} messages.
         * @function encode
         * @memberof protocol.DltFilterConfig
         * @static
         * @param {protocol.IDltFilterConfig} message DltFilterConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DltFilterConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.minLogLevel != null && Object.hasOwnProperty.call(message, "minLogLevel"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.minLogLevel);
            if (message.appIds != null && message.appIds.length)
                for (var i = 0; i < message.appIds.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.appIds[i]);
            if (message.ecuIds != null && message.ecuIds.length)
                for (var i = 0; i < message.ecuIds.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.ecuIds[i]);
            if (message.contextIds != null && message.contextIds.length)
                for (var i = 0; i < message.contextIds.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.contextIds[i]);
            if (message.appIdCount != null && Object.hasOwnProperty.call(message, "appIdCount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.appIdCount);
            if (message.contextIdCount != null && Object.hasOwnProperty.call(message, "contextIdCount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.contextIdCount);
            return writer;
        };

        /**
         * Encodes the specified DltFilterConfig message, length delimited. Does not implicitly {@link protocol.DltFilterConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.DltFilterConfig
         * @static
         * @param {protocol.IDltFilterConfig} message DltFilterConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DltFilterConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DltFilterConfig message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.DltFilterConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.DltFilterConfig} DltFilterConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DltFilterConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.DltFilterConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.minLogLevel = reader.uint32();
                        break;
                    }
                case 2: {
                        if (!(message.appIds && message.appIds.length))
                            message.appIds = [];
                        message.appIds.push(reader.string());
                        break;
                    }
                case 3: {
                        if (!(message.ecuIds && message.ecuIds.length))
                            message.ecuIds = [];
                        message.ecuIds.push(reader.string());
                        break;
                    }
                case 4: {
                        if (!(message.contextIds && message.contextIds.length))
                            message.contextIds = [];
                        message.contextIds.push(reader.string());
                        break;
                    }
                case 5: {
                        message.appIdCount = reader.int64();
                        break;
                    }
                case 6: {
                        message.contextIdCount = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DltFilterConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.DltFilterConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.DltFilterConfig} DltFilterConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DltFilterConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DltFilterConfig message.
         * @function verify
         * @memberof protocol.DltFilterConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DltFilterConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.minLogLevel != null && message.hasOwnProperty("minLogLevel"))
                if (!$util.isInteger(message.minLogLevel))
                    return "minLogLevel: integer expected";
            if (message.appIds != null && message.hasOwnProperty("appIds")) {
                if (!Array.isArray(message.appIds))
                    return "appIds: array expected";
                for (var i = 0; i < message.appIds.length; ++i)
                    if (!$util.isString(message.appIds[i]))
                        return "appIds: string[] expected";
            }
            if (message.ecuIds != null && message.hasOwnProperty("ecuIds")) {
                if (!Array.isArray(message.ecuIds))
                    return "ecuIds: array expected";
                for (var i = 0; i < message.ecuIds.length; ++i)
                    if (!$util.isString(message.ecuIds[i]))
                        return "ecuIds: string[] expected";
            }
            if (message.contextIds != null && message.hasOwnProperty("contextIds")) {
                if (!Array.isArray(message.contextIds))
                    return "contextIds: array expected";
                for (var i = 0; i < message.contextIds.length; ++i)
                    if (!$util.isString(message.contextIds[i]))
                        return "contextIds: string[] expected";
            }
            if (message.appIdCount != null && message.hasOwnProperty("appIdCount"))
                if (!$util.isInteger(message.appIdCount) && !(message.appIdCount && $util.isInteger(message.appIdCount.low) && $util.isInteger(message.appIdCount.high)))
                    return "appIdCount: integer|Long expected";
            if (message.contextIdCount != null && message.hasOwnProperty("contextIdCount"))
                if (!$util.isInteger(message.contextIdCount) && !(message.contextIdCount && $util.isInteger(message.contextIdCount.low) && $util.isInteger(message.contextIdCount.high)))
                    return "contextIdCount: integer|Long expected";
            return null;
        };

        /**
         * Creates a DltFilterConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.DltFilterConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.DltFilterConfig} DltFilterConfig
         */
        DltFilterConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.DltFilterConfig)
                return object;
            var message = new $root.protocol.DltFilterConfig();
            if (object.minLogLevel != null)
                message.minLogLevel = object.minLogLevel >>> 0;
            if (object.appIds) {
                if (!Array.isArray(object.appIds))
                    throw TypeError(".protocol.DltFilterConfig.appIds: array expected");
                message.appIds = [];
                for (var i = 0; i < object.appIds.length; ++i)
                    message.appIds[i] = String(object.appIds[i]);
            }
            if (object.ecuIds) {
                if (!Array.isArray(object.ecuIds))
                    throw TypeError(".protocol.DltFilterConfig.ecuIds: array expected");
                message.ecuIds = [];
                for (var i = 0; i < object.ecuIds.length; ++i)
                    message.ecuIds[i] = String(object.ecuIds[i]);
            }
            if (object.contextIds) {
                if (!Array.isArray(object.contextIds))
                    throw TypeError(".protocol.DltFilterConfig.contextIds: array expected");
                message.contextIds = [];
                for (var i = 0; i < object.contextIds.length; ++i)
                    message.contextIds[i] = String(object.contextIds[i]);
            }
            if (object.appIdCount != null)
                if ($util.Long)
                    (message.appIdCount = $util.Long.fromValue(object.appIdCount)).unsigned = false;
                else if (typeof object.appIdCount === "string")
                    message.appIdCount = parseInt(object.appIdCount, 10);
                else if (typeof object.appIdCount === "number")
                    message.appIdCount = object.appIdCount;
                else if (typeof object.appIdCount === "object")
                    message.appIdCount = new $util.LongBits(object.appIdCount.low >>> 0, object.appIdCount.high >>> 0).toNumber();
            if (object.contextIdCount != null)
                if ($util.Long)
                    (message.contextIdCount = $util.Long.fromValue(object.contextIdCount)).unsigned = false;
                else if (typeof object.contextIdCount === "string")
                    message.contextIdCount = parseInt(object.contextIdCount, 10);
                else if (typeof object.contextIdCount === "number")
                    message.contextIdCount = object.contextIdCount;
                else if (typeof object.contextIdCount === "object")
                    message.contextIdCount = new $util.LongBits(object.contextIdCount.low >>> 0, object.contextIdCount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a DltFilterConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.DltFilterConfig
         * @static
         * @param {protocol.DltFilterConfig} message DltFilterConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DltFilterConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.appIds = [];
                object.ecuIds = [];
                object.contextIds = [];
            }
            if (options.defaults) {
                object.minLogLevel = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.appIdCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.appIdCount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.contextIdCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.contextIdCount = options.longs === String ? "0" : 0;
            }
            if (message.minLogLevel != null && message.hasOwnProperty("minLogLevel"))
                object.minLogLevel = message.minLogLevel;
            if (message.appIds && message.appIds.length) {
                object.appIds = [];
                for (var j = 0; j < message.appIds.length; ++j)
                    object.appIds[j] = message.appIds[j];
            }
            if (message.ecuIds && message.ecuIds.length) {
                object.ecuIds = [];
                for (var j = 0; j < message.ecuIds.length; ++j)
                    object.ecuIds[j] = message.ecuIds[j];
            }
            if (message.contextIds && message.contextIds.length) {
                object.contextIds = [];
                for (var j = 0; j < message.contextIds.length; ++j)
                    object.contextIds[j] = message.contextIds[j];
            }
            if (message.appIdCount != null && message.hasOwnProperty("appIdCount"))
                if (typeof message.appIdCount === "number")
                    object.appIdCount = options.longs === String ? String(message.appIdCount) : message.appIdCount;
                else
                    object.appIdCount = options.longs === String ? $util.Long.prototype.toString.call(message.appIdCount) : options.longs === Number ? new $util.LongBits(message.appIdCount.low >>> 0, message.appIdCount.high >>> 0).toNumber() : message.appIdCount;
            if (message.contextIdCount != null && message.hasOwnProperty("contextIdCount"))
                if (typeof message.contextIdCount === "number")
                    object.contextIdCount = options.longs === String ? String(message.contextIdCount) : message.contextIdCount;
                else
                    object.contextIdCount = options.longs === String ? $util.Long.prototype.toString.call(message.contextIdCount) : options.longs === Number ? new $util.LongBits(message.contextIdCount.low >>> 0, message.contextIdCount.high >>> 0).toNumber() : message.contextIdCount;
            return object;
        };

        /**
         * Converts this DltFilterConfig to JSON.
         * @function toJSON
         * @memberof protocol.DltFilterConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DltFilterConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DltFilterConfig
         * @function getTypeUrl
         * @memberof protocol.DltFilterConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DltFilterConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.DltFilterConfig";
        };

        return DltFilterConfig;
    })();

    protocol.SomeIpParserSettings = (function() {

        /**
         * Properties of a SomeIpParserSettings.
         * @memberof protocol
         * @interface ISomeIpParserSettings
         * @property {Array.<string>|null} [fibexFilePaths] SomeIpParserSettings fibexFilePaths
         */

        /**
         * Constructs a new SomeIpParserSettings.
         * @memberof protocol
         * @classdesc Represents a SomeIpParserSettings.
         * @implements ISomeIpParserSettings
         * @constructor
         * @param {protocol.ISomeIpParserSettings=} [properties] Properties to set
         */
        function SomeIpParserSettings(properties) {
            this.fibexFilePaths = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SomeIpParserSettings fibexFilePaths.
         * @member {Array.<string>} fibexFilePaths
         * @memberof protocol.SomeIpParserSettings
         * @instance
         */
        SomeIpParserSettings.prototype.fibexFilePaths = $util.emptyArray;

        /**
         * Creates a new SomeIpParserSettings instance using the specified properties.
         * @function create
         * @memberof protocol.SomeIpParserSettings
         * @static
         * @param {protocol.ISomeIpParserSettings=} [properties] Properties to set
         * @returns {protocol.SomeIpParserSettings} SomeIpParserSettings instance
         */
        SomeIpParserSettings.create = function create(properties) {
            return new SomeIpParserSettings(properties);
        };

        /**
         * Encodes the specified SomeIpParserSettings message. Does not implicitly {@link protocol.SomeIpParserSettings.verify|verify} messages.
         * @function encode
         * @memberof protocol.SomeIpParserSettings
         * @static
         * @param {protocol.ISomeIpParserSettings} message SomeIpParserSettings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SomeIpParserSettings.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fibexFilePaths != null && message.fibexFilePaths.length)
                for (var i = 0; i < message.fibexFilePaths.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.fibexFilePaths[i]);
            return writer;
        };

        /**
         * Encodes the specified SomeIpParserSettings message, length delimited. Does not implicitly {@link protocol.SomeIpParserSettings.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SomeIpParserSettings
         * @static
         * @param {protocol.ISomeIpParserSettings} message SomeIpParserSettings message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SomeIpParserSettings.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SomeIpParserSettings message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SomeIpParserSettings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SomeIpParserSettings} SomeIpParserSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SomeIpParserSettings.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SomeIpParserSettings();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.fibexFilePaths && message.fibexFilePaths.length))
                            message.fibexFilePaths = [];
                        message.fibexFilePaths.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SomeIpParserSettings message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SomeIpParserSettings
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SomeIpParserSettings} SomeIpParserSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SomeIpParserSettings.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SomeIpParserSettings message.
         * @function verify
         * @memberof protocol.SomeIpParserSettings
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SomeIpParserSettings.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fibexFilePaths != null && message.hasOwnProperty("fibexFilePaths")) {
                if (!Array.isArray(message.fibexFilePaths))
                    return "fibexFilePaths: array expected";
                for (var i = 0; i < message.fibexFilePaths.length; ++i)
                    if (!$util.isString(message.fibexFilePaths[i]))
                        return "fibexFilePaths: string[] expected";
            }
            return null;
        };

        /**
         * Creates a SomeIpParserSettings message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SomeIpParserSettings
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SomeIpParserSettings} SomeIpParserSettings
         */
        SomeIpParserSettings.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SomeIpParserSettings)
                return object;
            var message = new $root.protocol.SomeIpParserSettings();
            if (object.fibexFilePaths) {
                if (!Array.isArray(object.fibexFilePaths))
                    throw TypeError(".protocol.SomeIpParserSettings.fibexFilePaths: array expected");
                message.fibexFilePaths = [];
                for (var i = 0; i < object.fibexFilePaths.length; ++i)
                    message.fibexFilePaths[i] = String(object.fibexFilePaths[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a SomeIpParserSettings message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SomeIpParserSettings
         * @static
         * @param {protocol.SomeIpParserSettings} message SomeIpParserSettings
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SomeIpParserSettings.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.fibexFilePaths = [];
            if (message.fibexFilePaths && message.fibexFilePaths.length) {
                object.fibexFilePaths = [];
                for (var j = 0; j < message.fibexFilePaths.length; ++j)
                    object.fibexFilePaths[j] = message.fibexFilePaths[j];
            }
            return object;
        };

        /**
         * Converts this SomeIpParserSettings to JSON.
         * @function toJSON
         * @memberof protocol.SomeIpParserSettings
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SomeIpParserSettings.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SomeIpParserSettings
         * @function getTypeUrl
         * @memberof protocol.SomeIpParserSettings
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SomeIpParserSettings.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SomeIpParserSettings";
        };

        return SomeIpParserSettings;
    })();

    protocol.ProcessTransportConfig = (function() {

        /**
         * Properties of a ProcessTransportConfig.
         * @memberof protocol
         * @interface IProcessTransportConfig
         * @property {string|null} [cwd] ProcessTransportConfig cwd
         * @property {string|null} [command] ProcessTransportConfig command
         * @property {Object.<string,string>|null} [envs] ProcessTransportConfig envs
         */

        /**
         * Constructs a new ProcessTransportConfig.
         * @memberof protocol
         * @classdesc Represents a ProcessTransportConfig.
         * @implements IProcessTransportConfig
         * @constructor
         * @param {protocol.IProcessTransportConfig=} [properties] Properties to set
         */
        function ProcessTransportConfig(properties) {
            this.envs = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProcessTransportConfig cwd.
         * @member {string} cwd
         * @memberof protocol.ProcessTransportConfig
         * @instance
         */
        ProcessTransportConfig.prototype.cwd = "";

        /**
         * ProcessTransportConfig command.
         * @member {string} command
         * @memberof protocol.ProcessTransportConfig
         * @instance
         */
        ProcessTransportConfig.prototype.command = "";

        /**
         * ProcessTransportConfig envs.
         * @member {Object.<string,string>} envs
         * @memberof protocol.ProcessTransportConfig
         * @instance
         */
        ProcessTransportConfig.prototype.envs = $util.emptyObject;

        /**
         * Creates a new ProcessTransportConfig instance using the specified properties.
         * @function create
         * @memberof protocol.ProcessTransportConfig
         * @static
         * @param {protocol.IProcessTransportConfig=} [properties] Properties to set
         * @returns {protocol.ProcessTransportConfig} ProcessTransportConfig instance
         */
        ProcessTransportConfig.create = function create(properties) {
            return new ProcessTransportConfig(properties);
        };

        /**
         * Encodes the specified ProcessTransportConfig message. Does not implicitly {@link protocol.ProcessTransportConfig.verify|verify} messages.
         * @function encode
         * @memberof protocol.ProcessTransportConfig
         * @static
         * @param {protocol.IProcessTransportConfig} message ProcessTransportConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProcessTransportConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cwd != null && Object.hasOwnProperty.call(message, "cwd"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cwd);
            if (message.command != null && Object.hasOwnProperty.call(message, "command"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.command);
            if (message.envs != null && Object.hasOwnProperty.call(message, "envs"))
                for (var keys = Object.keys(message.envs), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.envs[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ProcessTransportConfig message, length delimited. Does not implicitly {@link protocol.ProcessTransportConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ProcessTransportConfig
         * @static
         * @param {protocol.IProcessTransportConfig} message ProcessTransportConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProcessTransportConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProcessTransportConfig message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ProcessTransportConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ProcessTransportConfig} ProcessTransportConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProcessTransportConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ProcessTransportConfig(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cwd = reader.string();
                        break;
                    }
                case 2: {
                        message.command = reader.string();
                        break;
                    }
                case 3: {
                        if (message.envs === $util.emptyObject)
                            message.envs = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.envs[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ProcessTransportConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ProcessTransportConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ProcessTransportConfig} ProcessTransportConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProcessTransportConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProcessTransportConfig message.
         * @function verify
         * @memberof protocol.ProcessTransportConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProcessTransportConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cwd != null && message.hasOwnProperty("cwd"))
                if (!$util.isString(message.cwd))
                    return "cwd: string expected";
            if (message.command != null && message.hasOwnProperty("command"))
                if (!$util.isString(message.command))
                    return "command: string expected";
            if (message.envs != null && message.hasOwnProperty("envs")) {
                if (!$util.isObject(message.envs))
                    return "envs: object expected";
                var key = Object.keys(message.envs);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.envs[key[i]]))
                        return "envs: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a ProcessTransportConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ProcessTransportConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ProcessTransportConfig} ProcessTransportConfig
         */
        ProcessTransportConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ProcessTransportConfig)
                return object;
            var message = new $root.protocol.ProcessTransportConfig();
            if (object.cwd != null)
                message.cwd = String(object.cwd);
            if (object.command != null)
                message.command = String(object.command);
            if (object.envs) {
                if (typeof object.envs !== "object")
                    throw TypeError(".protocol.ProcessTransportConfig.envs: object expected");
                message.envs = {};
                for (var keys = Object.keys(object.envs), i = 0; i < keys.length; ++i)
                    message.envs[keys[i]] = String(object.envs[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ProcessTransportConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ProcessTransportConfig
         * @static
         * @param {protocol.ProcessTransportConfig} message ProcessTransportConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProcessTransportConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.envs = {};
            if (options.defaults) {
                object.cwd = "";
                object.command = "";
            }
            if (message.cwd != null && message.hasOwnProperty("cwd"))
                object.cwd = message.cwd;
            if (message.command != null && message.hasOwnProperty("command"))
                object.command = message.command;
            var keys2;
            if (message.envs && (keys2 = Object.keys(message.envs)).length) {
                object.envs = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.envs[keys2[j]] = message.envs[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this ProcessTransportConfig to JSON.
         * @function toJSON
         * @memberof protocol.ProcessTransportConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProcessTransportConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProcessTransportConfig
         * @function getTypeUrl
         * @memberof protocol.ProcessTransportConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProcessTransportConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.ProcessTransportConfig";
        };

        return ProcessTransportConfig;
    })();

    protocol.SerialTransportConfig = (function() {

        /**
         * Properties of a SerialTransportConfig.
         * @memberof protocol
         * @interface ISerialTransportConfig
         * @property {string|null} [path] SerialTransportConfig path
         * @property {number|null} [baudRate] SerialTransportConfig baudRate
         * @property {number|null} [dataBits] SerialTransportConfig dataBits
         * @property {number|null} [flowControl] SerialTransportConfig flowControl
         * @property {number|null} [parity] SerialTransportConfig parity
         * @property {number|null} [stopBits] SerialTransportConfig stopBits
         * @property {number|null} [sendDataDelay] SerialTransportConfig sendDataDelay
         * @property {boolean|null} [exclusive] SerialTransportConfig exclusive
         */

        /**
         * Constructs a new SerialTransportConfig.
         * @memberof protocol
         * @classdesc Represents a SerialTransportConfig.
         * @implements ISerialTransportConfig
         * @constructor
         * @param {protocol.ISerialTransportConfig=} [properties] Properties to set
         */
        function SerialTransportConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SerialTransportConfig path.
         * @member {string} path
         * @memberof protocol.SerialTransportConfig
         * @instance
         */
        SerialTransportConfig.prototype.path = "";

        /**
         * SerialTransportConfig baudRate.
         * @member {number} baudRate
         * @memberof protocol.SerialTransportConfig
         * @instance
         */
        SerialTransportConfig.prototype.baudRate = 0;

        /**
         * SerialTransportConfig dataBits.
         * @member {number} dataBits
         * @memberof protocol.SerialTransportConfig
         * @instance
         */
        SerialTransportConfig.prototype.dataBits = 0;

        /**
         * SerialTransportConfig flowControl.
         * @member {number} flowControl
         * @memberof protocol.SerialTransportConfig
         * @instance
         */
        SerialTransportConfig.prototype.flowControl = 0;

        /**
         * SerialTransportConfig parity.
         * @member {number} parity
         * @memberof protocol.SerialTransportConfig
         * @instance
         */
        SerialTransportConfig.prototype.parity = 0;

        /**
         * SerialTransportConfig stopBits.
         * @member {number} stopBits
         * @memberof protocol.SerialTransportConfig
         * @instance
         */
        SerialTransportConfig.prototype.stopBits = 0;

        /**
         * SerialTransportConfig sendDataDelay.
         * @member {number} sendDataDelay
         * @memberof protocol.SerialTransportConfig
         * @instance
         */
        SerialTransportConfig.prototype.sendDataDelay = 0;

        /**
         * SerialTransportConfig exclusive.
         * @member {boolean} exclusive
         * @memberof protocol.SerialTransportConfig
         * @instance
         */
        SerialTransportConfig.prototype.exclusive = false;

        /**
         * Creates a new SerialTransportConfig instance using the specified properties.
         * @function create
         * @memberof protocol.SerialTransportConfig
         * @static
         * @param {protocol.ISerialTransportConfig=} [properties] Properties to set
         * @returns {protocol.SerialTransportConfig} SerialTransportConfig instance
         */
        SerialTransportConfig.create = function create(properties) {
            return new SerialTransportConfig(properties);
        };

        /**
         * Encodes the specified SerialTransportConfig message. Does not implicitly {@link protocol.SerialTransportConfig.verify|verify} messages.
         * @function encode
         * @memberof protocol.SerialTransportConfig
         * @static
         * @param {protocol.ISerialTransportConfig} message SerialTransportConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SerialTransportConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
            if (message.baudRate != null && Object.hasOwnProperty.call(message, "baudRate"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.baudRate);
            if (message.dataBits != null && Object.hasOwnProperty.call(message, "dataBits"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.dataBits);
            if (message.flowControl != null && Object.hasOwnProperty.call(message, "flowControl"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.flowControl);
            if (message.parity != null && Object.hasOwnProperty.call(message, "parity"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.parity);
            if (message.stopBits != null && Object.hasOwnProperty.call(message, "stopBits"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.stopBits);
            if (message.sendDataDelay != null && Object.hasOwnProperty.call(message, "sendDataDelay"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.sendDataDelay);
            if (message.exclusive != null && Object.hasOwnProperty.call(message, "exclusive"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.exclusive);
            return writer;
        };

        /**
         * Encodes the specified SerialTransportConfig message, length delimited. Does not implicitly {@link protocol.SerialTransportConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SerialTransportConfig
         * @static
         * @param {protocol.ISerialTransportConfig} message SerialTransportConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SerialTransportConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SerialTransportConfig message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SerialTransportConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SerialTransportConfig} SerialTransportConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SerialTransportConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SerialTransportConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.path = reader.string();
                        break;
                    }
                case 2: {
                        message.baudRate = reader.uint32();
                        break;
                    }
                case 3: {
                        message.dataBits = reader.uint32();
                        break;
                    }
                case 4: {
                        message.flowControl = reader.uint32();
                        break;
                    }
                case 5: {
                        message.parity = reader.uint32();
                        break;
                    }
                case 6: {
                        message.stopBits = reader.uint32();
                        break;
                    }
                case 7: {
                        message.sendDataDelay = reader.uint32();
                        break;
                    }
                case 8: {
                        message.exclusive = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SerialTransportConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SerialTransportConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SerialTransportConfig} SerialTransportConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SerialTransportConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SerialTransportConfig message.
         * @function verify
         * @memberof protocol.SerialTransportConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SerialTransportConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            if (message.baudRate != null && message.hasOwnProperty("baudRate"))
                if (!$util.isInteger(message.baudRate))
                    return "baudRate: integer expected";
            if (message.dataBits != null && message.hasOwnProperty("dataBits"))
                if (!$util.isInteger(message.dataBits))
                    return "dataBits: integer expected";
            if (message.flowControl != null && message.hasOwnProperty("flowControl"))
                if (!$util.isInteger(message.flowControl))
                    return "flowControl: integer expected";
            if (message.parity != null && message.hasOwnProperty("parity"))
                if (!$util.isInteger(message.parity))
                    return "parity: integer expected";
            if (message.stopBits != null && message.hasOwnProperty("stopBits"))
                if (!$util.isInteger(message.stopBits))
                    return "stopBits: integer expected";
            if (message.sendDataDelay != null && message.hasOwnProperty("sendDataDelay"))
                if (!$util.isInteger(message.sendDataDelay))
                    return "sendDataDelay: integer expected";
            if (message.exclusive != null && message.hasOwnProperty("exclusive"))
                if (typeof message.exclusive !== "boolean")
                    return "exclusive: boolean expected";
            return null;
        };

        /**
         * Creates a SerialTransportConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SerialTransportConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SerialTransportConfig} SerialTransportConfig
         */
        SerialTransportConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SerialTransportConfig)
                return object;
            var message = new $root.protocol.SerialTransportConfig();
            if (object.path != null)
                message.path = String(object.path);
            if (object.baudRate != null)
                message.baudRate = object.baudRate >>> 0;
            if (object.dataBits != null)
                message.dataBits = object.dataBits >>> 0;
            if (object.flowControl != null)
                message.flowControl = object.flowControl >>> 0;
            if (object.parity != null)
                message.parity = object.parity >>> 0;
            if (object.stopBits != null)
                message.stopBits = object.stopBits >>> 0;
            if (object.sendDataDelay != null)
                message.sendDataDelay = object.sendDataDelay >>> 0;
            if (object.exclusive != null)
                message.exclusive = Boolean(object.exclusive);
            return message;
        };

        /**
         * Creates a plain object from a SerialTransportConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SerialTransportConfig
         * @static
         * @param {protocol.SerialTransportConfig} message SerialTransportConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SerialTransportConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.path = "";
                object.baudRate = 0;
                object.dataBits = 0;
                object.flowControl = 0;
                object.parity = 0;
                object.stopBits = 0;
                object.sendDataDelay = 0;
                object.exclusive = false;
            }
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            if (message.baudRate != null && message.hasOwnProperty("baudRate"))
                object.baudRate = message.baudRate;
            if (message.dataBits != null && message.hasOwnProperty("dataBits"))
                object.dataBits = message.dataBits;
            if (message.flowControl != null && message.hasOwnProperty("flowControl"))
                object.flowControl = message.flowControl;
            if (message.parity != null && message.hasOwnProperty("parity"))
                object.parity = message.parity;
            if (message.stopBits != null && message.hasOwnProperty("stopBits"))
                object.stopBits = message.stopBits;
            if (message.sendDataDelay != null && message.hasOwnProperty("sendDataDelay"))
                object.sendDataDelay = message.sendDataDelay;
            if (message.exclusive != null && message.hasOwnProperty("exclusive"))
                object.exclusive = message.exclusive;
            return object;
        };

        /**
         * Converts this SerialTransportConfig to JSON.
         * @function toJSON
         * @memberof protocol.SerialTransportConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SerialTransportConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SerialTransportConfig
         * @function getTypeUrl
         * @memberof protocol.SerialTransportConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SerialTransportConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SerialTransportConfig";
        };

        return SerialTransportConfig;
    })();

    protocol.TCPTransportConfig = (function() {

        /**
         * Properties of a TCPTransportConfig.
         * @memberof protocol
         * @interface ITCPTransportConfig
         * @property {string|null} [bindAddr] TCPTransportConfig bindAddr
         */

        /**
         * Constructs a new TCPTransportConfig.
         * @memberof protocol
         * @classdesc Represents a TCPTransportConfig.
         * @implements ITCPTransportConfig
         * @constructor
         * @param {protocol.ITCPTransportConfig=} [properties] Properties to set
         */
        function TCPTransportConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TCPTransportConfig bindAddr.
         * @member {string} bindAddr
         * @memberof protocol.TCPTransportConfig
         * @instance
         */
        TCPTransportConfig.prototype.bindAddr = "";

        /**
         * Creates a new TCPTransportConfig instance using the specified properties.
         * @function create
         * @memberof protocol.TCPTransportConfig
         * @static
         * @param {protocol.ITCPTransportConfig=} [properties] Properties to set
         * @returns {protocol.TCPTransportConfig} TCPTransportConfig instance
         */
        TCPTransportConfig.create = function create(properties) {
            return new TCPTransportConfig(properties);
        };

        /**
         * Encodes the specified TCPTransportConfig message. Does not implicitly {@link protocol.TCPTransportConfig.verify|verify} messages.
         * @function encode
         * @memberof protocol.TCPTransportConfig
         * @static
         * @param {protocol.ITCPTransportConfig} message TCPTransportConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TCPTransportConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bindAddr != null && Object.hasOwnProperty.call(message, "bindAddr"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.bindAddr);
            return writer;
        };

        /**
         * Encodes the specified TCPTransportConfig message, length delimited. Does not implicitly {@link protocol.TCPTransportConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TCPTransportConfig
         * @static
         * @param {protocol.ITCPTransportConfig} message TCPTransportConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TCPTransportConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TCPTransportConfig message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TCPTransportConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TCPTransportConfig} TCPTransportConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TCPTransportConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TCPTransportConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.bindAddr = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TCPTransportConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TCPTransportConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TCPTransportConfig} TCPTransportConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TCPTransportConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TCPTransportConfig message.
         * @function verify
         * @memberof protocol.TCPTransportConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TCPTransportConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bindAddr != null && message.hasOwnProperty("bindAddr"))
                if (!$util.isString(message.bindAddr))
                    return "bindAddr: string expected";
            return null;
        };

        /**
         * Creates a TCPTransportConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TCPTransportConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TCPTransportConfig} TCPTransportConfig
         */
        TCPTransportConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TCPTransportConfig)
                return object;
            var message = new $root.protocol.TCPTransportConfig();
            if (object.bindAddr != null)
                message.bindAddr = String(object.bindAddr);
            return message;
        };

        /**
         * Creates a plain object from a TCPTransportConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TCPTransportConfig
         * @static
         * @param {protocol.TCPTransportConfig} message TCPTransportConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TCPTransportConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.bindAddr = "";
            if (message.bindAddr != null && message.hasOwnProperty("bindAddr"))
                object.bindAddr = message.bindAddr;
            return object;
        };

        /**
         * Converts this TCPTransportConfig to JSON.
         * @function toJSON
         * @memberof protocol.TCPTransportConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TCPTransportConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TCPTransportConfig
         * @function getTypeUrl
         * @memberof protocol.TCPTransportConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TCPTransportConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.TCPTransportConfig";
        };

        return TCPTransportConfig;
    })();

    protocol.MulticastInfo = (function() {

        /**
         * Properties of a MulticastInfo.
         * @memberof protocol
         * @interface IMulticastInfo
         * @property {string|null} [multiaddr] MulticastInfo multiaddr
         * @property {string|null} ["interface"] MulticastInfo interface
         */

        /**
         * Constructs a new MulticastInfo.
         * @memberof protocol
         * @classdesc Represents a MulticastInfo.
         * @implements IMulticastInfo
         * @constructor
         * @param {protocol.IMulticastInfo=} [properties] Properties to set
         */
        function MulticastInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MulticastInfo multiaddr.
         * @member {string} multiaddr
         * @memberof protocol.MulticastInfo
         * @instance
         */
        MulticastInfo.prototype.multiaddr = "";

        /**
         * MulticastInfo interface.
         * @member {string} interface
         * @memberof protocol.MulticastInfo
         * @instance
         */
        MulticastInfo.prototype["interface"] = "";

        /**
         * Creates a new MulticastInfo instance using the specified properties.
         * @function create
         * @memberof protocol.MulticastInfo
         * @static
         * @param {protocol.IMulticastInfo=} [properties] Properties to set
         * @returns {protocol.MulticastInfo} MulticastInfo instance
         */
        MulticastInfo.create = function create(properties) {
            return new MulticastInfo(properties);
        };

        /**
         * Encodes the specified MulticastInfo message. Does not implicitly {@link protocol.MulticastInfo.verify|verify} messages.
         * @function encode
         * @memberof protocol.MulticastInfo
         * @static
         * @param {protocol.IMulticastInfo} message MulticastInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MulticastInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.multiaddr != null && Object.hasOwnProperty.call(message, "multiaddr"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.multiaddr);
            if (message["interface"] != null && Object.hasOwnProperty.call(message, "interface"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message["interface"]);
            return writer;
        };

        /**
         * Encodes the specified MulticastInfo message, length delimited. Does not implicitly {@link protocol.MulticastInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.MulticastInfo
         * @static
         * @param {protocol.IMulticastInfo} message MulticastInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MulticastInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MulticastInfo message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.MulticastInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.MulticastInfo} MulticastInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MulticastInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.MulticastInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.multiaddr = reader.string();
                        break;
                    }
                case 2: {
                        message["interface"] = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MulticastInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.MulticastInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.MulticastInfo} MulticastInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MulticastInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MulticastInfo message.
         * @function verify
         * @memberof protocol.MulticastInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MulticastInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.multiaddr != null && message.hasOwnProperty("multiaddr"))
                if (!$util.isString(message.multiaddr))
                    return "multiaddr: string expected";
            if (message["interface"] != null && message.hasOwnProperty("interface"))
                if (!$util.isString(message["interface"]))
                    return "interface: string expected";
            return null;
        };

        /**
         * Creates a MulticastInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.MulticastInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.MulticastInfo} MulticastInfo
         */
        MulticastInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.MulticastInfo)
                return object;
            var message = new $root.protocol.MulticastInfo();
            if (object.multiaddr != null)
                message.multiaddr = String(object.multiaddr);
            if (object["interface"] != null)
                message["interface"] = String(object["interface"]);
            return message;
        };

        /**
         * Creates a plain object from a MulticastInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.MulticastInfo
         * @static
         * @param {protocol.MulticastInfo} message MulticastInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MulticastInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.multiaddr = "";
                object["interface"] = "";
            }
            if (message.multiaddr != null && message.hasOwnProperty("multiaddr"))
                object.multiaddr = message.multiaddr;
            if (message["interface"] != null && message.hasOwnProperty("interface"))
                object["interface"] = message["interface"];
            return object;
        };

        /**
         * Converts this MulticastInfo to JSON.
         * @function toJSON
         * @memberof protocol.MulticastInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MulticastInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MulticastInfo
         * @function getTypeUrl
         * @memberof protocol.MulticastInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MulticastInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.MulticastInfo";
        };

        return MulticastInfo;
    })();

    protocol.UDPTransportConfig = (function() {

        /**
         * Properties of a UDPTransportConfig.
         * @memberof protocol
         * @interface IUDPTransportConfig
         * @property {string|null} [bindAddr] UDPTransportConfig bindAddr
         * @property {Array.<protocol.IMulticastInfo>|null} [multicast] UDPTransportConfig multicast
         */

        /**
         * Constructs a new UDPTransportConfig.
         * @memberof protocol
         * @classdesc Represents a UDPTransportConfig.
         * @implements IUDPTransportConfig
         * @constructor
         * @param {protocol.IUDPTransportConfig=} [properties] Properties to set
         */
        function UDPTransportConfig(properties) {
            this.multicast = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UDPTransportConfig bindAddr.
         * @member {string} bindAddr
         * @memberof protocol.UDPTransportConfig
         * @instance
         */
        UDPTransportConfig.prototype.bindAddr = "";

        /**
         * UDPTransportConfig multicast.
         * @member {Array.<protocol.IMulticastInfo>} multicast
         * @memberof protocol.UDPTransportConfig
         * @instance
         */
        UDPTransportConfig.prototype.multicast = $util.emptyArray;

        /**
         * Creates a new UDPTransportConfig instance using the specified properties.
         * @function create
         * @memberof protocol.UDPTransportConfig
         * @static
         * @param {protocol.IUDPTransportConfig=} [properties] Properties to set
         * @returns {protocol.UDPTransportConfig} UDPTransportConfig instance
         */
        UDPTransportConfig.create = function create(properties) {
            return new UDPTransportConfig(properties);
        };

        /**
         * Encodes the specified UDPTransportConfig message. Does not implicitly {@link protocol.UDPTransportConfig.verify|verify} messages.
         * @function encode
         * @memberof protocol.UDPTransportConfig
         * @static
         * @param {protocol.IUDPTransportConfig} message UDPTransportConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UDPTransportConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bindAddr != null && Object.hasOwnProperty.call(message, "bindAddr"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.bindAddr);
            if (message.multicast != null && message.multicast.length)
                for (var i = 0; i < message.multicast.length; ++i)
                    $root.protocol.MulticastInfo.encode(message.multicast[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UDPTransportConfig message, length delimited. Does not implicitly {@link protocol.UDPTransportConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.UDPTransportConfig
         * @static
         * @param {protocol.IUDPTransportConfig} message UDPTransportConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UDPTransportConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UDPTransportConfig message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.UDPTransportConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.UDPTransportConfig} UDPTransportConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UDPTransportConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.UDPTransportConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.bindAddr = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.multicast && message.multicast.length))
                            message.multicast = [];
                        message.multicast.push($root.protocol.MulticastInfo.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UDPTransportConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.UDPTransportConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.UDPTransportConfig} UDPTransportConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UDPTransportConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UDPTransportConfig message.
         * @function verify
         * @memberof protocol.UDPTransportConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UDPTransportConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bindAddr != null && message.hasOwnProperty("bindAddr"))
                if (!$util.isString(message.bindAddr))
                    return "bindAddr: string expected";
            if (message.multicast != null && message.hasOwnProperty("multicast")) {
                if (!Array.isArray(message.multicast))
                    return "multicast: array expected";
                for (var i = 0; i < message.multicast.length; ++i) {
                    var error = $root.protocol.MulticastInfo.verify(message.multicast[i]);
                    if (error)
                        return "multicast." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UDPTransportConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.UDPTransportConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.UDPTransportConfig} UDPTransportConfig
         */
        UDPTransportConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.UDPTransportConfig)
                return object;
            var message = new $root.protocol.UDPTransportConfig();
            if (object.bindAddr != null)
                message.bindAddr = String(object.bindAddr);
            if (object.multicast) {
                if (!Array.isArray(object.multicast))
                    throw TypeError(".protocol.UDPTransportConfig.multicast: array expected");
                message.multicast = [];
                for (var i = 0; i < object.multicast.length; ++i) {
                    if (typeof object.multicast[i] !== "object")
                        throw TypeError(".protocol.UDPTransportConfig.multicast: object expected");
                    message.multicast[i] = $root.protocol.MulticastInfo.fromObject(object.multicast[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UDPTransportConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.UDPTransportConfig
         * @static
         * @param {protocol.UDPTransportConfig} message UDPTransportConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UDPTransportConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.multicast = [];
            if (options.defaults)
                object.bindAddr = "";
            if (message.bindAddr != null && message.hasOwnProperty("bindAddr"))
                object.bindAddr = message.bindAddr;
            if (message.multicast && message.multicast.length) {
                object.multicast = [];
                for (var j = 0; j < message.multicast.length; ++j)
                    object.multicast[j] = $root.protocol.MulticastInfo.toObject(message.multicast[j], options);
            }
            return object;
        };

        /**
         * Converts this UDPTransportConfig to JSON.
         * @function toJSON
         * @memberof protocol.UDPTransportConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UDPTransportConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UDPTransportConfig
         * @function getTypeUrl
         * @memberof protocol.UDPTransportConfig
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UDPTransportConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.UDPTransportConfig";
        };

        return UDPTransportConfig;
    })();

    protocol.FileFormat = (function() {

        /**
         * Properties of a FileFormat.
         * @memberof protocol
         * @interface IFileFormat
         */

        /**
         * Constructs a new FileFormat.
         * @memberof protocol
         * @classdesc Represents a FileFormat.
         * @implements IFileFormat
         * @constructor
         * @param {protocol.IFileFormat=} [properties] Properties to set
         */
        function FileFormat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new FileFormat instance using the specified properties.
         * @function create
         * @memberof protocol.FileFormat
         * @static
         * @param {protocol.IFileFormat=} [properties] Properties to set
         * @returns {protocol.FileFormat} FileFormat instance
         */
        FileFormat.create = function create(properties) {
            return new FileFormat(properties);
        };

        /**
         * Encodes the specified FileFormat message. Does not implicitly {@link protocol.FileFormat.verify|verify} messages.
         * @function encode
         * @memberof protocol.FileFormat
         * @static
         * @param {protocol.IFileFormat} message FileFormat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileFormat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified FileFormat message, length delimited. Does not implicitly {@link protocol.FileFormat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.FileFormat
         * @static
         * @param {protocol.IFileFormat} message FileFormat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileFormat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileFormat message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.FileFormat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.FileFormat} FileFormat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileFormat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.FileFormat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FileFormat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.FileFormat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.FileFormat} FileFormat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileFormat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileFormat message.
         * @function verify
         * @memberof protocol.FileFormat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileFormat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a FileFormat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.FileFormat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.FileFormat} FileFormat
         */
        FileFormat.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.FileFormat)
                return object;
            return new $root.protocol.FileFormat();
        };

        /**
         * Creates a plain object from a FileFormat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.FileFormat
         * @static
         * @param {protocol.FileFormat} message FileFormat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileFormat.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this FileFormat to JSON.
         * @function toJSON
         * @memberof protocol.FileFormat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileFormat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FileFormat
         * @function getTypeUrl
         * @memberof protocol.FileFormat
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FileFormat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.FileFormat";
        };

        /**
         * Type enum.
         * @name protocol.FileFormat.Type
         * @enum {number}
         * @property {number} PcapNG=0 PcapNG value
         * @property {number} PcapLegacy=1 PcapLegacy value
         * @property {number} Text=2 Text value
         * @property {number} Binary=3 Binary value
         */
        FileFormat.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PcapNG"] = 0;
            values[valuesById[1] = "PcapLegacy"] = 1;
            values[valuesById[2] = "Text"] = 2;
            values[valuesById[3] = "Binary"] = 3;
            return values;
        })();

        return FileFormat;
    })();

    protocol.ParserType = (function() {

        /**
         * Properties of a ParserType.
         * @memberof protocol
         * @interface IParserType
         * @property {protocol.IDltParserSettings|null} [dlt] ParserType dlt
         * @property {protocol.ISomeIpParserSettings|null} [someIp] ParserType someIp
         * @property {boolean|null} [text] ParserType text
         */

        /**
         * Constructs a new ParserType.
         * @memberof protocol
         * @classdesc Represents a ParserType.
         * @implements IParserType
         * @constructor
         * @param {protocol.IParserType=} [properties] Properties to set
         */
        function ParserType(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParserType dlt.
         * @member {protocol.IDltParserSettings|null|undefined} dlt
         * @memberof protocol.ParserType
         * @instance
         */
        ParserType.prototype.dlt = null;

        /**
         * ParserType someIp.
         * @member {protocol.ISomeIpParserSettings|null|undefined} someIp
         * @memberof protocol.ParserType
         * @instance
         */
        ParserType.prototype.someIp = null;

        /**
         * ParserType text.
         * @member {boolean|null|undefined} text
         * @memberof protocol.ParserType
         * @instance
         */
        ParserType.prototype.text = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ParserType type.
         * @member {"dlt"|"someIp"|"text"|undefined} type
         * @memberof protocol.ParserType
         * @instance
         */
        Object.defineProperty(ParserType.prototype, "type", {
            get: $util.oneOfGetter($oneOfFields = ["dlt", "someIp", "text"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ParserType instance using the specified properties.
         * @function create
         * @memberof protocol.ParserType
         * @static
         * @param {protocol.IParserType=} [properties] Properties to set
         * @returns {protocol.ParserType} ParserType instance
         */
        ParserType.create = function create(properties) {
            return new ParserType(properties);
        };

        /**
         * Encodes the specified ParserType message. Does not implicitly {@link protocol.ParserType.verify|verify} messages.
         * @function encode
         * @memberof protocol.ParserType
         * @static
         * @param {protocol.IParserType} message ParserType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParserType.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dlt != null && Object.hasOwnProperty.call(message, "dlt"))
                $root.protocol.DltParserSettings.encode(message.dlt, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.someIp != null && Object.hasOwnProperty.call(message, "someIp"))
                $root.protocol.SomeIpParserSettings.encode(message.someIp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.text);
            return writer;
        };

        /**
         * Encodes the specified ParserType message, length delimited. Does not implicitly {@link protocol.ParserType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ParserType
         * @static
         * @param {protocol.IParserType} message ParserType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParserType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ParserType message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ParserType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ParserType} ParserType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParserType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ParserType();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.dlt = $root.protocol.DltParserSettings.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.someIp = $root.protocol.SomeIpParserSettings.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.text = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ParserType message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ParserType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ParserType} ParserType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParserType.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ParserType message.
         * @function verify
         * @memberof protocol.ParserType
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ParserType.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.dlt != null && message.hasOwnProperty("dlt")) {
                properties.type = 1;
                {
                    var error = $root.protocol.DltParserSettings.verify(message.dlt);
                    if (error)
                        return "dlt." + error;
                }
            }
            if (message.someIp != null && message.hasOwnProperty("someIp")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                {
                    var error = $root.protocol.SomeIpParserSettings.verify(message.someIp);
                    if (error)
                        return "someIp." + error;
                }
            }
            if (message.text != null && message.hasOwnProperty("text")) {
                if (properties.type === 1)
                    return "type: multiple values";
                properties.type = 1;
                if (typeof message.text !== "boolean")
                    return "text: boolean expected";
            }
            return null;
        };

        /**
         * Creates a ParserType message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ParserType
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ParserType} ParserType
         */
        ParserType.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ParserType)
                return object;
            var message = new $root.protocol.ParserType();
            if (object.dlt != null) {
                if (typeof object.dlt !== "object")
                    throw TypeError(".protocol.ParserType.dlt: object expected");
                message.dlt = $root.protocol.DltParserSettings.fromObject(object.dlt);
            }
            if (object.someIp != null) {
                if (typeof object.someIp !== "object")
                    throw TypeError(".protocol.ParserType.someIp: object expected");
                message.someIp = $root.protocol.SomeIpParserSettings.fromObject(object.someIp);
            }
            if (object.text != null)
                message.text = Boolean(object.text);
            return message;
        };

        /**
         * Creates a plain object from a ParserType message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ParserType
         * @static
         * @param {protocol.ParserType} message ParserType
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ParserType.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.dlt != null && message.hasOwnProperty("dlt")) {
                object.dlt = $root.protocol.DltParserSettings.toObject(message.dlt, options);
                if (options.oneofs)
                    object.type = "dlt";
            }
            if (message.someIp != null && message.hasOwnProperty("someIp")) {
                object.someIp = $root.protocol.SomeIpParserSettings.toObject(message.someIp, options);
                if (options.oneofs)
                    object.type = "someIp";
            }
            if (message.text != null && message.hasOwnProperty("text")) {
                object.text = message.text;
                if (options.oneofs)
                    object.type = "text";
            }
            return object;
        };

        /**
         * Converts this ParserType to JSON.
         * @function toJSON
         * @memberof protocol.ParserType
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ParserType.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ParserType
         * @function getTypeUrl
         * @memberof protocol.ParserType
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ParserType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.ParserType";
        };

        return ParserType;
    })();

    protocol.Transport = (function() {

        /**
         * Properties of a Transport.
         * @memberof protocol
         * @interface ITransport
         * @property {protocol.IProcessTransportConfig|null} [process] Transport process
         * @property {protocol.ITCPTransportConfig|null} [tcp] Transport tcp
         * @property {protocol.IUDPTransportConfig|null} [udp] Transport udp
         * @property {protocol.ISerialTransportConfig|null} [serial] Transport serial
         */

        /**
         * Constructs a new Transport.
         * @memberof protocol
         * @classdesc Represents a Transport.
         * @implements ITransport
         * @constructor
         * @param {protocol.ITransport=} [properties] Properties to set
         */
        function Transport(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Transport process.
         * @member {protocol.IProcessTransportConfig|null|undefined} process
         * @memberof protocol.Transport
         * @instance
         */
        Transport.prototype.process = null;

        /**
         * Transport tcp.
         * @member {protocol.ITCPTransportConfig|null|undefined} tcp
         * @memberof protocol.Transport
         * @instance
         */
        Transport.prototype.tcp = null;

        /**
         * Transport udp.
         * @member {protocol.IUDPTransportConfig|null|undefined} udp
         * @memberof protocol.Transport
         * @instance
         */
        Transport.prototype.udp = null;

        /**
         * Transport serial.
         * @member {protocol.ISerialTransportConfig|null|undefined} serial
         * @memberof protocol.Transport
         * @instance
         */
        Transport.prototype.serial = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Transport transport.
         * @member {"process"|"tcp"|"udp"|"serial"|undefined} transport
         * @memberof protocol.Transport
         * @instance
         */
        Object.defineProperty(Transport.prototype, "transport", {
            get: $util.oneOfGetter($oneOfFields = ["process", "tcp", "udp", "serial"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Transport instance using the specified properties.
         * @function create
         * @memberof protocol.Transport
         * @static
         * @param {protocol.ITransport=} [properties] Properties to set
         * @returns {protocol.Transport} Transport instance
         */
        Transport.create = function create(properties) {
            return new Transport(properties);
        };

        /**
         * Encodes the specified Transport message. Does not implicitly {@link protocol.Transport.verify|verify} messages.
         * @function encode
         * @memberof protocol.Transport
         * @static
         * @param {protocol.ITransport} message Transport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Transport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.process != null && Object.hasOwnProperty.call(message, "process"))
                $root.protocol.ProcessTransportConfig.encode(message.process, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.tcp != null && Object.hasOwnProperty.call(message, "tcp"))
                $root.protocol.TCPTransportConfig.encode(message.tcp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.udp != null && Object.hasOwnProperty.call(message, "udp"))
                $root.protocol.UDPTransportConfig.encode(message.udp, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.serial != null && Object.hasOwnProperty.call(message, "serial"))
                $root.protocol.SerialTransportConfig.encode(message.serial, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Transport message, length delimited. Does not implicitly {@link protocol.Transport.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Transport
         * @static
         * @param {protocol.ITransport} message Transport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Transport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Transport message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Transport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Transport} Transport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Transport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Transport();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.process = $root.protocol.ProcessTransportConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.tcp = $root.protocol.TCPTransportConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.udp = $root.protocol.UDPTransportConfig.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.serial = $root.protocol.SerialTransportConfig.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Transport message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Transport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Transport} Transport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Transport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Transport message.
         * @function verify
         * @memberof protocol.Transport
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Transport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.process != null && message.hasOwnProperty("process")) {
                properties.transport = 1;
                {
                    var error = $root.protocol.ProcessTransportConfig.verify(message.process);
                    if (error)
                        return "process." + error;
                }
            }
            if (message.tcp != null && message.hasOwnProperty("tcp")) {
                if (properties.transport === 1)
                    return "transport: multiple values";
                properties.transport = 1;
                {
                    var error = $root.protocol.TCPTransportConfig.verify(message.tcp);
                    if (error)
                        return "tcp." + error;
                }
            }
            if (message.udp != null && message.hasOwnProperty("udp")) {
                if (properties.transport === 1)
                    return "transport: multiple values";
                properties.transport = 1;
                {
                    var error = $root.protocol.UDPTransportConfig.verify(message.udp);
                    if (error)
                        return "udp." + error;
                }
            }
            if (message.serial != null && message.hasOwnProperty("serial")) {
                if (properties.transport === 1)
                    return "transport: multiple values";
                properties.transport = 1;
                {
                    var error = $root.protocol.SerialTransportConfig.verify(message.serial);
                    if (error)
                        return "serial." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Transport message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Transport
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Transport} Transport
         */
        Transport.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Transport)
                return object;
            var message = new $root.protocol.Transport();
            if (object.process != null) {
                if (typeof object.process !== "object")
                    throw TypeError(".protocol.Transport.process: object expected");
                message.process = $root.protocol.ProcessTransportConfig.fromObject(object.process);
            }
            if (object.tcp != null) {
                if (typeof object.tcp !== "object")
                    throw TypeError(".protocol.Transport.tcp: object expected");
                message.tcp = $root.protocol.TCPTransportConfig.fromObject(object.tcp);
            }
            if (object.udp != null) {
                if (typeof object.udp !== "object")
                    throw TypeError(".protocol.Transport.udp: object expected");
                message.udp = $root.protocol.UDPTransportConfig.fromObject(object.udp);
            }
            if (object.serial != null) {
                if (typeof object.serial !== "object")
                    throw TypeError(".protocol.Transport.serial: object expected");
                message.serial = $root.protocol.SerialTransportConfig.fromObject(object.serial);
            }
            return message;
        };

        /**
         * Creates a plain object from a Transport message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Transport
         * @static
         * @param {protocol.Transport} message Transport
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Transport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.process != null && message.hasOwnProperty("process")) {
                object.process = $root.protocol.ProcessTransportConfig.toObject(message.process, options);
                if (options.oneofs)
                    object.transport = "process";
            }
            if (message.tcp != null && message.hasOwnProperty("tcp")) {
                object.tcp = $root.protocol.TCPTransportConfig.toObject(message.tcp, options);
                if (options.oneofs)
                    object.transport = "tcp";
            }
            if (message.udp != null && message.hasOwnProperty("udp")) {
                object.udp = $root.protocol.UDPTransportConfig.toObject(message.udp, options);
                if (options.oneofs)
                    object.transport = "udp";
            }
            if (message.serial != null && message.hasOwnProperty("serial")) {
                object.serial = $root.protocol.SerialTransportConfig.toObject(message.serial, options);
                if (options.oneofs)
                    object.transport = "serial";
            }
            return object;
        };

        /**
         * Converts this Transport to JSON.
         * @function toJSON
         * @memberof protocol.Transport
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Transport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Transport
         * @function getTypeUrl
         * @memberof protocol.Transport
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Transport.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.Transport";
        };

        return Transport;
    })();

    protocol.ObserveOrigin = (function() {

        /**
         * Properties of an ObserveOrigin.
         * @memberof protocol
         * @interface IObserveOrigin
         * @property {protocol.ObserveOrigin.IFile|null} [file] ObserveOrigin file
         * @property {protocol.ObserveOrigin.IConcat|null} [concat] ObserveOrigin concat
         * @property {protocol.ObserveOrigin.IStream|null} [stream] ObserveOrigin stream
         */

        /**
         * Constructs a new ObserveOrigin.
         * @memberof protocol
         * @classdesc Represents an ObserveOrigin.
         * @implements IObserveOrigin
         * @constructor
         * @param {protocol.IObserveOrigin=} [properties] Properties to set
         */
        function ObserveOrigin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ObserveOrigin file.
         * @member {protocol.ObserveOrigin.IFile|null|undefined} file
         * @memberof protocol.ObserveOrigin
         * @instance
         */
        ObserveOrigin.prototype.file = null;

        /**
         * ObserveOrigin concat.
         * @member {protocol.ObserveOrigin.IConcat|null|undefined} concat
         * @memberof protocol.ObserveOrigin
         * @instance
         */
        ObserveOrigin.prototype.concat = null;

        /**
         * ObserveOrigin stream.
         * @member {protocol.ObserveOrigin.IStream|null|undefined} stream
         * @memberof protocol.ObserveOrigin
         * @instance
         */
        ObserveOrigin.prototype.stream = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ObserveOrigin origin.
         * @member {"file"|"concat"|"stream"|undefined} origin
         * @memberof protocol.ObserveOrigin
         * @instance
         */
        Object.defineProperty(ObserveOrigin.prototype, "origin", {
            get: $util.oneOfGetter($oneOfFields = ["file", "concat", "stream"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ObserveOrigin instance using the specified properties.
         * @function create
         * @memberof protocol.ObserveOrigin
         * @static
         * @param {protocol.IObserveOrigin=} [properties] Properties to set
         * @returns {protocol.ObserveOrigin} ObserveOrigin instance
         */
        ObserveOrigin.create = function create(properties) {
            return new ObserveOrigin(properties);
        };

        /**
         * Encodes the specified ObserveOrigin message. Does not implicitly {@link protocol.ObserveOrigin.verify|verify} messages.
         * @function encode
         * @memberof protocol.ObserveOrigin
         * @static
         * @param {protocol.IObserveOrigin} message ObserveOrigin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObserveOrigin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.file != null && Object.hasOwnProperty.call(message, "file"))
                $root.protocol.ObserveOrigin.File.encode(message.file, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.concat != null && Object.hasOwnProperty.call(message, "concat"))
                $root.protocol.ObserveOrigin.Concat.encode(message.concat, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.stream != null && Object.hasOwnProperty.call(message, "stream"))
                $root.protocol.ObserveOrigin.Stream.encode(message.stream, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ObserveOrigin message, length delimited. Does not implicitly {@link protocol.ObserveOrigin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ObserveOrigin
         * @static
         * @param {protocol.IObserveOrigin} message ObserveOrigin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ObserveOrigin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ObserveOrigin message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ObserveOrigin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ObserveOrigin} ObserveOrigin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObserveOrigin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ObserveOrigin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.file = $root.protocol.ObserveOrigin.File.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.concat = $root.protocol.ObserveOrigin.Concat.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.stream = $root.protocol.ObserveOrigin.Stream.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ObserveOrigin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ObserveOrigin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ObserveOrigin} ObserveOrigin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ObserveOrigin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ObserveOrigin message.
         * @function verify
         * @memberof protocol.ObserveOrigin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ObserveOrigin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.file != null && message.hasOwnProperty("file")) {
                properties.origin = 1;
                {
                    var error = $root.protocol.ObserveOrigin.File.verify(message.file);
                    if (error)
                        return "file." + error;
                }
            }
            if (message.concat != null && message.hasOwnProperty("concat")) {
                if (properties.origin === 1)
                    return "origin: multiple values";
                properties.origin = 1;
                {
                    var error = $root.protocol.ObserveOrigin.Concat.verify(message.concat);
                    if (error)
                        return "concat." + error;
                }
            }
            if (message.stream != null && message.hasOwnProperty("stream")) {
                if (properties.origin === 1)
                    return "origin: multiple values";
                properties.origin = 1;
                {
                    var error = $root.protocol.ObserveOrigin.Stream.verify(message.stream);
                    if (error)
                        return "stream." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ObserveOrigin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ObserveOrigin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ObserveOrigin} ObserveOrigin
         */
        ObserveOrigin.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ObserveOrigin)
                return object;
            var message = new $root.protocol.ObserveOrigin();
            if (object.file != null) {
                if (typeof object.file !== "object")
                    throw TypeError(".protocol.ObserveOrigin.file: object expected");
                message.file = $root.protocol.ObserveOrigin.File.fromObject(object.file);
            }
            if (object.concat != null) {
                if (typeof object.concat !== "object")
                    throw TypeError(".protocol.ObserveOrigin.concat: object expected");
                message.concat = $root.protocol.ObserveOrigin.Concat.fromObject(object.concat);
            }
            if (object.stream != null) {
                if (typeof object.stream !== "object")
                    throw TypeError(".protocol.ObserveOrigin.stream: object expected");
                message.stream = $root.protocol.ObserveOrigin.Stream.fromObject(object.stream);
            }
            return message;
        };

        /**
         * Creates a plain object from an ObserveOrigin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ObserveOrigin
         * @static
         * @param {protocol.ObserveOrigin} message ObserveOrigin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ObserveOrigin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.file != null && message.hasOwnProperty("file")) {
                object.file = $root.protocol.ObserveOrigin.File.toObject(message.file, options);
                if (options.oneofs)
                    object.origin = "file";
            }
            if (message.concat != null && message.hasOwnProperty("concat")) {
                object.concat = $root.protocol.ObserveOrigin.Concat.toObject(message.concat, options);
                if (options.oneofs)
                    object.origin = "concat";
            }
            if (message.stream != null && message.hasOwnProperty("stream")) {
                object.stream = $root.protocol.ObserveOrigin.Stream.toObject(message.stream, options);
                if (options.oneofs)
                    object.origin = "stream";
            }
            return object;
        };

        /**
         * Converts this ObserveOrigin to JSON.
         * @function toJSON
         * @memberof protocol.ObserveOrigin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ObserveOrigin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ObserveOrigin
         * @function getTypeUrl
         * @memberof protocol.ObserveOrigin
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ObserveOrigin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.ObserveOrigin";
        };

        ObserveOrigin.File = (function() {

            /**
             * Properties of a File.
             * @memberof protocol.ObserveOrigin
             * @interface IFile
             * @property {string|null} [name] File name
             * @property {protocol.FileFormat.Type|null} [format] File format
             * @property {string|null} [path] File path
             */

            /**
             * Constructs a new File.
             * @memberof protocol.ObserveOrigin
             * @classdesc Represents a File.
             * @implements IFile
             * @constructor
             * @param {protocol.ObserveOrigin.IFile=} [properties] Properties to set
             */
            function File(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * File name.
             * @member {string} name
             * @memberof protocol.ObserveOrigin.File
             * @instance
             */
            File.prototype.name = "";

            /**
             * File format.
             * @member {protocol.FileFormat.Type} format
             * @memberof protocol.ObserveOrigin.File
             * @instance
             */
            File.prototype.format = 0;

            /**
             * File path.
             * @member {string} path
             * @memberof protocol.ObserveOrigin.File
             * @instance
             */
            File.prototype.path = "";

            /**
             * Creates a new File instance using the specified properties.
             * @function create
             * @memberof protocol.ObserveOrigin.File
             * @static
             * @param {protocol.ObserveOrigin.IFile=} [properties] Properties to set
             * @returns {protocol.ObserveOrigin.File} File instance
             */
            File.create = function create(properties) {
                return new File(properties);
            };

            /**
             * Encodes the specified File message. Does not implicitly {@link protocol.ObserveOrigin.File.verify|verify} messages.
             * @function encode
             * @memberof protocol.ObserveOrigin.File
             * @static
             * @param {protocol.ObserveOrigin.IFile} message File message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            File.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.format != null && Object.hasOwnProperty.call(message, "format"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.format);
                if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.path);
                return writer;
            };

            /**
             * Encodes the specified File message, length delimited. Does not implicitly {@link protocol.ObserveOrigin.File.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.ObserveOrigin.File
             * @static
             * @param {protocol.ObserveOrigin.IFile} message File message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            File.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a File message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.ObserveOrigin.File
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.ObserveOrigin.File} File
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            File.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ObserveOrigin.File();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.format = reader.int32();
                            break;
                        }
                    case 3: {
                            message.path = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a File message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.ObserveOrigin.File
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.ObserveOrigin.File} File
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            File.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a File message.
             * @function verify
             * @memberof protocol.ObserveOrigin.File
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            File.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.format != null && message.hasOwnProperty("format"))
                    switch (message.format) {
                    default:
                        return "format: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.path != null && message.hasOwnProperty("path"))
                    if (!$util.isString(message.path))
                        return "path: string expected";
                return null;
            };

            /**
             * Creates a File message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.ObserveOrigin.File
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.ObserveOrigin.File} File
             */
            File.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.ObserveOrigin.File)
                    return object;
                var message = new $root.protocol.ObserveOrigin.File();
                if (object.name != null)
                    message.name = String(object.name);
                switch (object.format) {
                default:
                    if (typeof object.format === "number") {
                        message.format = object.format;
                        break;
                    }
                    break;
                case "PcapNG":
                case 0:
                    message.format = 0;
                    break;
                case "PcapLegacy":
                case 1:
                    message.format = 1;
                    break;
                case "Text":
                case 2:
                    message.format = 2;
                    break;
                case "Binary":
                case 3:
                    message.format = 3;
                    break;
                }
                if (object.path != null)
                    message.path = String(object.path);
                return message;
            };

            /**
             * Creates a plain object from a File message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.ObserveOrigin.File
             * @static
             * @param {protocol.ObserveOrigin.File} message File
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            File.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.format = options.enums === String ? "PcapNG" : 0;
                    object.path = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.format != null && message.hasOwnProperty("format"))
                    object.format = options.enums === String ? $root.protocol.FileFormat.Type[message.format] === undefined ? message.format : $root.protocol.FileFormat.Type[message.format] : message.format;
                if (message.path != null && message.hasOwnProperty("path"))
                    object.path = message.path;
                return object;
            };

            /**
             * Converts this File to JSON.
             * @function toJSON
             * @memberof protocol.ObserveOrigin.File
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            File.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for File
             * @function getTypeUrl
             * @memberof protocol.ObserveOrigin.File
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            File.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.ObserveOrigin.File";
            };

            return File;
        })();

        ObserveOrigin.Concat = (function() {

            /**
             * Properties of a Concat.
             * @memberof protocol.ObserveOrigin
             * @interface IConcat
             * @property {Array.<protocol.ObserveOrigin.IFile>|null} [files] Concat files
             */

            /**
             * Constructs a new Concat.
             * @memberof protocol.ObserveOrigin
             * @classdesc Represents a Concat.
             * @implements IConcat
             * @constructor
             * @param {protocol.ObserveOrigin.IConcat=} [properties] Properties to set
             */
            function Concat(properties) {
                this.files = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Concat files.
             * @member {Array.<protocol.ObserveOrigin.IFile>} files
             * @memberof protocol.ObserveOrigin.Concat
             * @instance
             */
            Concat.prototype.files = $util.emptyArray;

            /**
             * Creates a new Concat instance using the specified properties.
             * @function create
             * @memberof protocol.ObserveOrigin.Concat
             * @static
             * @param {protocol.ObserveOrigin.IConcat=} [properties] Properties to set
             * @returns {protocol.ObserveOrigin.Concat} Concat instance
             */
            Concat.create = function create(properties) {
                return new Concat(properties);
            };

            /**
             * Encodes the specified Concat message. Does not implicitly {@link protocol.ObserveOrigin.Concat.verify|verify} messages.
             * @function encode
             * @memberof protocol.ObserveOrigin.Concat
             * @static
             * @param {protocol.ObserveOrigin.IConcat} message Concat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Concat.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.files != null && message.files.length)
                    for (var i = 0; i < message.files.length; ++i)
                        $root.protocol.ObserveOrigin.File.encode(message.files[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Concat message, length delimited. Does not implicitly {@link protocol.ObserveOrigin.Concat.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.ObserveOrigin.Concat
             * @static
             * @param {protocol.ObserveOrigin.IConcat} message Concat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Concat.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Concat message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.ObserveOrigin.Concat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.ObserveOrigin.Concat} Concat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Concat.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ObserveOrigin.Concat();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.files && message.files.length))
                                message.files = [];
                            message.files.push($root.protocol.ObserveOrigin.File.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Concat message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.ObserveOrigin.Concat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.ObserveOrigin.Concat} Concat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Concat.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Concat message.
             * @function verify
             * @memberof protocol.ObserveOrigin.Concat
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Concat.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.files != null && message.hasOwnProperty("files")) {
                    if (!Array.isArray(message.files))
                        return "files: array expected";
                    for (var i = 0; i < message.files.length; ++i) {
                        var error = $root.protocol.ObserveOrigin.File.verify(message.files[i]);
                        if (error)
                            return "files." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Concat message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.ObserveOrigin.Concat
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.ObserveOrigin.Concat} Concat
             */
            Concat.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.ObserveOrigin.Concat)
                    return object;
                var message = new $root.protocol.ObserveOrigin.Concat();
                if (object.files) {
                    if (!Array.isArray(object.files))
                        throw TypeError(".protocol.ObserveOrigin.Concat.files: array expected");
                    message.files = [];
                    for (var i = 0; i < object.files.length; ++i) {
                        if (typeof object.files[i] !== "object")
                            throw TypeError(".protocol.ObserveOrigin.Concat.files: object expected");
                        message.files[i] = $root.protocol.ObserveOrigin.File.fromObject(object.files[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Concat message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.ObserveOrigin.Concat
             * @static
             * @param {protocol.ObserveOrigin.Concat} message Concat
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Concat.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.files = [];
                if (message.files && message.files.length) {
                    object.files = [];
                    for (var j = 0; j < message.files.length; ++j)
                        object.files[j] = $root.protocol.ObserveOrigin.File.toObject(message.files[j], options);
                }
                return object;
            };

            /**
             * Converts this Concat to JSON.
             * @function toJSON
             * @memberof protocol.ObserveOrigin.Concat
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Concat.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Concat
             * @function getTypeUrl
             * @memberof protocol.ObserveOrigin.Concat
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Concat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.ObserveOrigin.Concat";
            };

            return Concat;
        })();

        ObserveOrigin.Stream = (function() {

            /**
             * Properties of a Stream.
             * @memberof protocol.ObserveOrigin
             * @interface IStream
             * @property {string|null} [name] Stream name
             * @property {protocol.ITransport|null} [transport] Stream transport
             */

            /**
             * Constructs a new Stream.
             * @memberof protocol.ObserveOrigin
             * @classdesc Represents a Stream.
             * @implements IStream
             * @constructor
             * @param {protocol.ObserveOrigin.IStream=} [properties] Properties to set
             */
            function Stream(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Stream name.
             * @member {string} name
             * @memberof protocol.ObserveOrigin.Stream
             * @instance
             */
            Stream.prototype.name = "";

            /**
             * Stream transport.
             * @member {protocol.ITransport|null|undefined} transport
             * @memberof protocol.ObserveOrigin.Stream
             * @instance
             */
            Stream.prototype.transport = null;

            /**
             * Creates a new Stream instance using the specified properties.
             * @function create
             * @memberof protocol.ObserveOrigin.Stream
             * @static
             * @param {protocol.ObserveOrigin.IStream=} [properties] Properties to set
             * @returns {protocol.ObserveOrigin.Stream} Stream instance
             */
            Stream.create = function create(properties) {
                return new Stream(properties);
            };

            /**
             * Encodes the specified Stream message. Does not implicitly {@link protocol.ObserveOrigin.Stream.verify|verify} messages.
             * @function encode
             * @memberof protocol.ObserveOrigin.Stream
             * @static
             * @param {protocol.ObserveOrigin.IStream} message Stream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Stream.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.transport != null && Object.hasOwnProperty.call(message, "transport"))
                    $root.protocol.Transport.encode(message.transport, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Stream message, length delimited. Does not implicitly {@link protocol.ObserveOrigin.Stream.verify|verify} messages.
             * @function encodeDelimited
             * @memberof protocol.ObserveOrigin.Stream
             * @static
             * @param {protocol.ObserveOrigin.IStream} message Stream message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Stream.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Stream message from the specified reader or buffer.
             * @function decode
             * @memberof protocol.ObserveOrigin.Stream
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {protocol.ObserveOrigin.Stream} Stream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Stream.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ObserveOrigin.Stream();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.transport = $root.protocol.Transport.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Stream message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof protocol.ObserveOrigin.Stream
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {protocol.ObserveOrigin.Stream} Stream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Stream.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Stream message.
             * @function verify
             * @memberof protocol.ObserveOrigin.Stream
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Stream.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.transport != null && message.hasOwnProperty("transport")) {
                    var error = $root.protocol.Transport.verify(message.transport);
                    if (error)
                        return "transport." + error;
                }
                return null;
            };

            /**
             * Creates a Stream message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof protocol.ObserveOrigin.Stream
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {protocol.ObserveOrigin.Stream} Stream
             */
            Stream.fromObject = function fromObject(object) {
                if (object instanceof $root.protocol.ObserveOrigin.Stream)
                    return object;
                var message = new $root.protocol.ObserveOrigin.Stream();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.transport != null) {
                    if (typeof object.transport !== "object")
                        throw TypeError(".protocol.ObserveOrigin.Stream.transport: object expected");
                    message.transport = $root.protocol.Transport.fromObject(object.transport);
                }
                return message;
            };

            /**
             * Creates a plain object from a Stream message. Also converts values to other types if specified.
             * @function toObject
             * @memberof protocol.ObserveOrigin.Stream
             * @static
             * @param {protocol.ObserveOrigin.Stream} message Stream
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Stream.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    object.transport = null;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.transport != null && message.hasOwnProperty("transport"))
                    object.transport = $root.protocol.Transport.toObject(message.transport, options);
                return object;
            };

            /**
             * Converts this Stream to JSON.
             * @function toJSON
             * @memberof protocol.ObserveOrigin.Stream
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Stream.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Stream
             * @function getTypeUrl
             * @memberof protocol.ObserveOrigin.Stream
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Stream.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/protocol.ObserveOrigin.Stream";
            };

            return Stream;
        })();

        return ObserveOrigin;
    })();

    protocol.LifecycleTransition = (function() {

        /**
         * Properties of a LifecycleTransition.
         * @memberof protocol
         * @interface ILifecycleTransition
         * @property {protocol.IStarted|null} [started] LifecycleTransition started
         * @property {protocol.ITicksWithUuid|null} [ticks] LifecycleTransition ticks
         * @property {protocol.IStopped|null} [stopped] LifecycleTransition stopped
         */

        /**
         * Constructs a new LifecycleTransition.
         * @memberof protocol
         * @classdesc Represents a LifecycleTransition.
         * @implements ILifecycleTransition
         * @constructor
         * @param {protocol.ILifecycleTransition=} [properties] Properties to set
         */
        function LifecycleTransition(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LifecycleTransition started.
         * @member {protocol.IStarted|null|undefined} started
         * @memberof protocol.LifecycleTransition
         * @instance
         */
        LifecycleTransition.prototype.started = null;

        /**
         * LifecycleTransition ticks.
         * @member {protocol.ITicksWithUuid|null|undefined} ticks
         * @memberof protocol.LifecycleTransition
         * @instance
         */
        LifecycleTransition.prototype.ticks = null;

        /**
         * LifecycleTransition stopped.
         * @member {protocol.IStopped|null|undefined} stopped
         * @memberof protocol.LifecycleTransition
         * @instance
         */
        LifecycleTransition.prototype.stopped = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * LifecycleTransition transition.
         * @member {"started"|"ticks"|"stopped"|undefined} transition
         * @memberof protocol.LifecycleTransition
         * @instance
         */
        Object.defineProperty(LifecycleTransition.prototype, "transition", {
            get: $util.oneOfGetter($oneOfFields = ["started", "ticks", "stopped"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new LifecycleTransition instance using the specified properties.
         * @function create
         * @memberof protocol.LifecycleTransition
         * @static
         * @param {protocol.ILifecycleTransition=} [properties] Properties to set
         * @returns {protocol.LifecycleTransition} LifecycleTransition instance
         */
        LifecycleTransition.create = function create(properties) {
            return new LifecycleTransition(properties);
        };

        /**
         * Encodes the specified LifecycleTransition message. Does not implicitly {@link protocol.LifecycleTransition.verify|verify} messages.
         * @function encode
         * @memberof protocol.LifecycleTransition
         * @static
         * @param {protocol.ILifecycleTransition} message LifecycleTransition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LifecycleTransition.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.started != null && Object.hasOwnProperty.call(message, "started"))
                $root.protocol.Started.encode(message.started, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.ticks != null && Object.hasOwnProperty.call(message, "ticks"))
                $root.protocol.TicksWithUuid.encode(message.ticks, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.stopped != null && Object.hasOwnProperty.call(message, "stopped"))
                $root.protocol.Stopped.encode(message.stopped, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LifecycleTransition message, length delimited. Does not implicitly {@link protocol.LifecycleTransition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.LifecycleTransition
         * @static
         * @param {protocol.ILifecycleTransition} message LifecycleTransition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LifecycleTransition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LifecycleTransition message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LifecycleTransition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.LifecycleTransition} LifecycleTransition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LifecycleTransition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.LifecycleTransition();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.started = $root.protocol.Started.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.ticks = $root.protocol.TicksWithUuid.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.stopped = $root.protocol.Stopped.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LifecycleTransition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.LifecycleTransition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.LifecycleTransition} LifecycleTransition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LifecycleTransition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LifecycleTransition message.
         * @function verify
         * @memberof protocol.LifecycleTransition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LifecycleTransition.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.started != null && message.hasOwnProperty("started")) {
                properties.transition = 1;
                {
                    var error = $root.protocol.Started.verify(message.started);
                    if (error)
                        return "started." + error;
                }
            }
            if (message.ticks != null && message.hasOwnProperty("ticks")) {
                if (properties.transition === 1)
                    return "transition: multiple values";
                properties.transition = 1;
                {
                    var error = $root.protocol.TicksWithUuid.verify(message.ticks);
                    if (error)
                        return "ticks." + error;
                }
            }
            if (message.stopped != null && message.hasOwnProperty("stopped")) {
                if (properties.transition === 1)
                    return "transition: multiple values";
                properties.transition = 1;
                {
                    var error = $root.protocol.Stopped.verify(message.stopped);
                    if (error)
                        return "stopped." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LifecycleTransition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.LifecycleTransition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.LifecycleTransition} LifecycleTransition
         */
        LifecycleTransition.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.LifecycleTransition)
                return object;
            var message = new $root.protocol.LifecycleTransition();
            if (object.started != null) {
                if (typeof object.started !== "object")
                    throw TypeError(".protocol.LifecycleTransition.started: object expected");
                message.started = $root.protocol.Started.fromObject(object.started);
            }
            if (object.ticks != null) {
                if (typeof object.ticks !== "object")
                    throw TypeError(".protocol.LifecycleTransition.ticks: object expected");
                message.ticks = $root.protocol.TicksWithUuid.fromObject(object.ticks);
            }
            if (object.stopped != null) {
                if (typeof object.stopped !== "object")
                    throw TypeError(".protocol.LifecycleTransition.stopped: object expected");
                message.stopped = $root.protocol.Stopped.fromObject(object.stopped);
            }
            return message;
        };

        /**
         * Creates a plain object from a LifecycleTransition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.LifecycleTransition
         * @static
         * @param {protocol.LifecycleTransition} message LifecycleTransition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LifecycleTransition.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.started != null && message.hasOwnProperty("started")) {
                object.started = $root.protocol.Started.toObject(message.started, options);
                if (options.oneofs)
                    object.transition = "started";
            }
            if (message.ticks != null && message.hasOwnProperty("ticks")) {
                object.ticks = $root.protocol.TicksWithUuid.toObject(message.ticks, options);
                if (options.oneofs)
                    object.transition = "ticks";
            }
            if (message.stopped != null && message.hasOwnProperty("stopped")) {
                object.stopped = $root.protocol.Stopped.toObject(message.stopped, options);
                if (options.oneofs)
                    object.transition = "stopped";
            }
            return object;
        };

        /**
         * Converts this LifecycleTransition to JSON.
         * @function toJSON
         * @memberof protocol.LifecycleTransition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LifecycleTransition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LifecycleTransition
         * @function getTypeUrl
         * @memberof protocol.LifecycleTransition
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LifecycleTransition.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.LifecycleTransition";
        };

        return LifecycleTransition;
    })();

    protocol.Started = (function() {

        /**
         * Properties of a Started.
         * @memberof protocol
         * @interface IStarted
         * @property {string|null} [uuid] Started uuid
         * @property {string|null} [alias] Started alias
         */

        /**
         * Constructs a new Started.
         * @memberof protocol
         * @classdesc Represents a Started.
         * @implements IStarted
         * @constructor
         * @param {protocol.IStarted=} [properties] Properties to set
         */
        function Started(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Started uuid.
         * @member {string} uuid
         * @memberof protocol.Started
         * @instance
         */
        Started.prototype.uuid = "";

        /**
         * Started alias.
         * @member {string} alias
         * @memberof protocol.Started
         * @instance
         */
        Started.prototype.alias = "";

        /**
         * Creates a new Started instance using the specified properties.
         * @function create
         * @memberof protocol.Started
         * @static
         * @param {protocol.IStarted=} [properties] Properties to set
         * @returns {protocol.Started} Started instance
         */
        Started.create = function create(properties) {
            return new Started(properties);
        };

        /**
         * Encodes the specified Started message. Does not implicitly {@link protocol.Started.verify|verify} messages.
         * @function encode
         * @memberof protocol.Started
         * @static
         * @param {protocol.IStarted} message Started message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Started.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.alias != null && Object.hasOwnProperty.call(message, "alias"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.alias);
            return writer;
        };

        /**
         * Encodes the specified Started message, length delimited. Does not implicitly {@link protocol.Started.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Started
         * @static
         * @param {protocol.IStarted} message Started message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Started.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Started message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Started
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Started} Started
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Started.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Started();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uuid = reader.string();
                        break;
                    }
                case 2: {
                        message.alias = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Started message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Started
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Started} Started
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Started.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Started message.
         * @function verify
         * @memberof protocol.Started
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Started.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.alias != null && message.hasOwnProperty("alias"))
                if (!$util.isString(message.alias))
                    return "alias: string expected";
            return null;
        };

        /**
         * Creates a Started message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Started
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Started} Started
         */
        Started.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Started)
                return object;
            var message = new $root.protocol.Started();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.alias != null)
                message.alias = String(object.alias);
            return message;
        };

        /**
         * Creates a plain object from a Started message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Started
         * @static
         * @param {protocol.Started} message Started
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Started.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.alias = "";
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.alias != null && message.hasOwnProperty("alias"))
                object.alias = message.alias;
            return object;
        };

        /**
         * Converts this Started to JSON.
         * @function toJSON
         * @memberof protocol.Started
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Started.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Started
         * @function getTypeUrl
         * @memberof protocol.Started
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Started.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.Started";
        };

        return Started;
    })();

    protocol.TicksWithUuid = (function() {

        /**
         * Properties of a TicksWithUuid.
         * @memberof protocol
         * @interface ITicksWithUuid
         * @property {string|null} [uuid] TicksWithUuid uuid
         * @property {protocol.ITicks|null} [ticks] TicksWithUuid ticks
         */

        /**
         * Constructs a new TicksWithUuid.
         * @memberof protocol
         * @classdesc Represents a TicksWithUuid.
         * @implements ITicksWithUuid
         * @constructor
         * @param {protocol.ITicksWithUuid=} [properties] Properties to set
         */
        function TicksWithUuid(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TicksWithUuid uuid.
         * @member {string} uuid
         * @memberof protocol.TicksWithUuid
         * @instance
         */
        TicksWithUuid.prototype.uuid = "";

        /**
         * TicksWithUuid ticks.
         * @member {protocol.ITicks|null|undefined} ticks
         * @memberof protocol.TicksWithUuid
         * @instance
         */
        TicksWithUuid.prototype.ticks = null;

        /**
         * Creates a new TicksWithUuid instance using the specified properties.
         * @function create
         * @memberof protocol.TicksWithUuid
         * @static
         * @param {protocol.ITicksWithUuid=} [properties] Properties to set
         * @returns {protocol.TicksWithUuid} TicksWithUuid instance
         */
        TicksWithUuid.create = function create(properties) {
            return new TicksWithUuid(properties);
        };

        /**
         * Encodes the specified TicksWithUuid message. Does not implicitly {@link protocol.TicksWithUuid.verify|verify} messages.
         * @function encode
         * @memberof protocol.TicksWithUuid
         * @static
         * @param {protocol.ITicksWithUuid} message TicksWithUuid message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TicksWithUuid.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.ticks != null && Object.hasOwnProperty.call(message, "ticks"))
                $root.protocol.Ticks.encode(message.ticks, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TicksWithUuid message, length delimited. Does not implicitly {@link protocol.TicksWithUuid.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.TicksWithUuid
         * @static
         * @param {protocol.ITicksWithUuid} message TicksWithUuid message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TicksWithUuid.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TicksWithUuid message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.TicksWithUuid
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.TicksWithUuid} TicksWithUuid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TicksWithUuid.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.TicksWithUuid();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uuid = reader.string();
                        break;
                    }
                case 2: {
                        message.ticks = $root.protocol.Ticks.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TicksWithUuid message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.TicksWithUuid
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.TicksWithUuid} TicksWithUuid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TicksWithUuid.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TicksWithUuid message.
         * @function verify
         * @memberof protocol.TicksWithUuid
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TicksWithUuid.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.ticks != null && message.hasOwnProperty("ticks")) {
                var error = $root.protocol.Ticks.verify(message.ticks);
                if (error)
                    return "ticks." + error;
            }
            return null;
        };

        /**
         * Creates a TicksWithUuid message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.TicksWithUuid
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.TicksWithUuid} TicksWithUuid
         */
        TicksWithUuid.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.TicksWithUuid)
                return object;
            var message = new $root.protocol.TicksWithUuid();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.ticks != null) {
                if (typeof object.ticks !== "object")
                    throw TypeError(".protocol.TicksWithUuid.ticks: object expected");
                message.ticks = $root.protocol.Ticks.fromObject(object.ticks);
            }
            return message;
        };

        /**
         * Creates a plain object from a TicksWithUuid message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.TicksWithUuid
         * @static
         * @param {protocol.TicksWithUuid} message TicksWithUuid
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TicksWithUuid.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uuid = "";
                object.ticks = null;
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.ticks != null && message.hasOwnProperty("ticks"))
                object.ticks = $root.protocol.Ticks.toObject(message.ticks, options);
            return object;
        };

        /**
         * Converts this TicksWithUuid to JSON.
         * @function toJSON
         * @memberof protocol.TicksWithUuid
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TicksWithUuid.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TicksWithUuid
         * @function getTypeUrl
         * @memberof protocol.TicksWithUuid
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TicksWithUuid.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.TicksWithUuid";
        };

        return TicksWithUuid;
    })();

    protocol.Stopped = (function() {

        /**
         * Properties of a Stopped.
         * @memberof protocol
         * @interface IStopped
         * @property {string|null} [uuid] Stopped uuid
         */

        /**
         * Constructs a new Stopped.
         * @memberof protocol
         * @classdesc Represents a Stopped.
         * @implements IStopped
         * @constructor
         * @param {protocol.IStopped=} [properties] Properties to set
         */
        function Stopped(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Stopped uuid.
         * @member {string} uuid
         * @memberof protocol.Stopped
         * @instance
         */
        Stopped.prototype.uuid = "";

        /**
         * Creates a new Stopped instance using the specified properties.
         * @function create
         * @memberof protocol.Stopped
         * @static
         * @param {protocol.IStopped=} [properties] Properties to set
         * @returns {protocol.Stopped} Stopped instance
         */
        Stopped.create = function create(properties) {
            return new Stopped(properties);
        };

        /**
         * Encodes the specified Stopped message. Does not implicitly {@link protocol.Stopped.verify|verify} messages.
         * @function encode
         * @memberof protocol.Stopped
         * @static
         * @param {protocol.IStopped} message Stopped message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Stopped.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            return writer;
        };

        /**
         * Encodes the specified Stopped message, length delimited. Does not implicitly {@link protocol.Stopped.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Stopped
         * @static
         * @param {protocol.IStopped} message Stopped message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Stopped.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Stopped message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Stopped
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Stopped} Stopped
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Stopped.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Stopped();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uuid = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Stopped message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Stopped
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Stopped} Stopped
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Stopped.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Stopped message.
         * @function verify
         * @memberof protocol.Stopped
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Stopped.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            return null;
        };

        /**
         * Creates a Stopped message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Stopped
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Stopped} Stopped
         */
        Stopped.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Stopped)
                return object;
            var message = new $root.protocol.Stopped();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            return message;
        };

        /**
         * Creates a plain object from a Stopped message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Stopped
         * @static
         * @param {protocol.Stopped} message Stopped
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Stopped.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.uuid = "";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            return object;
        };

        /**
         * Converts this Stopped to JSON.
         * @function toJSON
         * @memberof protocol.Stopped
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Stopped.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Stopped
         * @function getTypeUrl
         * @memberof protocol.Stopped
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Stopped.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.Stopped";
        };

        return Stopped;
    })();

    protocol.SdeRequest = (function() {

        /**
         * Properties of a SdeRequest.
         * @memberof protocol
         * @interface ISdeRequest
         * @property {string|null} [writeText] SdeRequest writeText
         * @property {Uint8Array|null} [writeBytes] SdeRequest writeBytes
         */

        /**
         * Constructs a new SdeRequest.
         * @memberof protocol
         * @classdesc Represents a SdeRequest.
         * @implements ISdeRequest
         * @constructor
         * @param {protocol.ISdeRequest=} [properties] Properties to set
         */
        function SdeRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SdeRequest writeText.
         * @member {string|null|undefined} writeText
         * @memberof protocol.SdeRequest
         * @instance
         */
        SdeRequest.prototype.writeText = null;

        /**
         * SdeRequest writeBytes.
         * @member {Uint8Array|null|undefined} writeBytes
         * @memberof protocol.SdeRequest
         * @instance
         */
        SdeRequest.prototype.writeBytes = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * SdeRequest request.
         * @member {"writeText"|"writeBytes"|undefined} request
         * @memberof protocol.SdeRequest
         * @instance
         */
        Object.defineProperty(SdeRequest.prototype, "request", {
            get: $util.oneOfGetter($oneOfFields = ["writeText", "writeBytes"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SdeRequest instance using the specified properties.
         * @function create
         * @memberof protocol.SdeRequest
         * @static
         * @param {protocol.ISdeRequest=} [properties] Properties to set
         * @returns {protocol.SdeRequest} SdeRequest instance
         */
        SdeRequest.create = function create(properties) {
            return new SdeRequest(properties);
        };

        /**
         * Encodes the specified SdeRequest message. Does not implicitly {@link protocol.SdeRequest.verify|verify} messages.
         * @function encode
         * @memberof protocol.SdeRequest
         * @static
         * @param {protocol.ISdeRequest} message SdeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SdeRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.writeText != null && Object.hasOwnProperty.call(message, "writeText"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.writeText);
            if (message.writeBytes != null && Object.hasOwnProperty.call(message, "writeBytes"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.writeBytes);
            return writer;
        };

        /**
         * Encodes the specified SdeRequest message, length delimited. Does not implicitly {@link protocol.SdeRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SdeRequest
         * @static
         * @param {protocol.ISdeRequest} message SdeRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SdeRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SdeRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SdeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SdeRequest} SdeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SdeRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SdeRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.writeText = reader.string();
                        break;
                    }
                case 2: {
                        message.writeBytes = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SdeRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SdeRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SdeRequest} SdeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SdeRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SdeRequest message.
         * @function verify
         * @memberof protocol.SdeRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SdeRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.writeText != null && message.hasOwnProperty("writeText")) {
                properties.request = 1;
                if (!$util.isString(message.writeText))
                    return "writeText: string expected";
            }
            if (message.writeBytes != null && message.hasOwnProperty("writeBytes")) {
                if (properties.request === 1)
                    return "request: multiple values";
                properties.request = 1;
                if (!(message.writeBytes && typeof message.writeBytes.length === "number" || $util.isString(message.writeBytes)))
                    return "writeBytes: buffer expected";
            }
            return null;
        };

        /**
         * Creates a SdeRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SdeRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SdeRequest} SdeRequest
         */
        SdeRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SdeRequest)
                return object;
            var message = new $root.protocol.SdeRequest();
            if (object.writeText != null)
                message.writeText = String(object.writeText);
            if (object.writeBytes != null)
                if (typeof object.writeBytes === "string")
                    $util.base64.decode(object.writeBytes, message.writeBytes = $util.newBuffer($util.base64.length(object.writeBytes)), 0);
                else if (object.writeBytes.length >= 0)
                    message.writeBytes = object.writeBytes;
            return message;
        };

        /**
         * Creates a plain object from a SdeRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SdeRequest
         * @static
         * @param {protocol.SdeRequest} message SdeRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SdeRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.writeText != null && message.hasOwnProperty("writeText")) {
                object.writeText = message.writeText;
                if (options.oneofs)
                    object.request = "writeText";
            }
            if (message.writeBytes != null && message.hasOwnProperty("writeBytes")) {
                object.writeBytes = options.bytes === String ? $util.base64.encode(message.writeBytes, 0, message.writeBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.writeBytes) : message.writeBytes;
                if (options.oneofs)
                    object.request = "writeBytes";
            }
            return object;
        };

        /**
         * Converts this SdeRequest to JSON.
         * @function toJSON
         * @memberof protocol.SdeRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SdeRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SdeRequest
         * @function getTypeUrl
         * @memberof protocol.SdeRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SdeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SdeRequest";
        };

        return SdeRequest;
    })();

    protocol.SdeResponse = (function() {

        /**
         * Properties of a SdeResponse.
         * @memberof protocol
         * @interface ISdeResponse
         * @property {number|Long|null} [bytes] SdeResponse bytes
         */

        /**
         * Constructs a new SdeResponse.
         * @memberof protocol
         * @classdesc Represents a SdeResponse.
         * @implements ISdeResponse
         * @constructor
         * @param {protocol.ISdeResponse=} [properties] Properties to set
         */
        function SdeResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SdeResponse bytes.
         * @member {number|Long} bytes
         * @memberof protocol.SdeResponse
         * @instance
         */
        SdeResponse.prototype.bytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new SdeResponse instance using the specified properties.
         * @function create
         * @memberof protocol.SdeResponse
         * @static
         * @param {protocol.ISdeResponse=} [properties] Properties to set
         * @returns {protocol.SdeResponse} SdeResponse instance
         */
        SdeResponse.create = function create(properties) {
            return new SdeResponse(properties);
        };

        /**
         * Encodes the specified SdeResponse message. Does not implicitly {@link protocol.SdeResponse.verify|verify} messages.
         * @function encode
         * @memberof protocol.SdeResponse
         * @static
         * @param {protocol.ISdeResponse} message SdeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SdeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bytes != null && Object.hasOwnProperty.call(message, "bytes"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.bytes);
            return writer;
        };

        /**
         * Encodes the specified SdeResponse message, length delimited. Does not implicitly {@link protocol.SdeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SdeResponse
         * @static
         * @param {protocol.ISdeResponse} message SdeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SdeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SdeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SdeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SdeResponse} SdeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SdeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SdeResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.bytes = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SdeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SdeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SdeResponse} SdeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SdeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SdeResponse message.
         * @function verify
         * @memberof protocol.SdeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SdeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bytes != null && message.hasOwnProperty("bytes"))
                if (!$util.isInteger(message.bytes) && !(message.bytes && $util.isInteger(message.bytes.low) && $util.isInteger(message.bytes.high)))
                    return "bytes: integer|Long expected";
            return null;
        };

        /**
         * Creates a SdeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SdeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SdeResponse} SdeResponse
         */
        SdeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SdeResponse)
                return object;
            var message = new $root.protocol.SdeResponse();
            if (object.bytes != null)
                if ($util.Long)
                    (message.bytes = $util.Long.fromValue(object.bytes)).unsigned = true;
                else if (typeof object.bytes === "string")
                    message.bytes = parseInt(object.bytes, 10);
                else if (typeof object.bytes === "number")
                    message.bytes = object.bytes;
                else if (typeof object.bytes === "object")
                    message.bytes = new $util.LongBits(object.bytes.low >>> 0, object.bytes.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a SdeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SdeResponse
         * @static
         * @param {protocol.SdeResponse} message SdeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SdeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.bytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bytes = options.longs === String ? "0" : 0;
            if (message.bytes != null && message.hasOwnProperty("bytes"))
                if (typeof message.bytes === "number")
                    object.bytes = options.longs === String ? String(message.bytes) : message.bytes;
                else
                    object.bytes = options.longs === String ? $util.Long.prototype.toString.call(message.bytes) : options.longs === Number ? new $util.LongBits(message.bytes.low >>> 0, message.bytes.high >>> 0).toNumber(true) : message.bytes;
            return object;
        };

        /**
         * Converts this SdeResponse to JSON.
         * @function toJSON
         * @memberof protocol.SdeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SdeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SdeResponse
         * @function getTypeUrl
         * @memberof protocol.SdeResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SdeResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SdeResponse";
        };

        return SdeResponse;
    })();

    return protocol;
})();

module.exports = $root;
