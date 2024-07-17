// source: observe.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.observe.DltFilterConfig');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.observe.DltFilterConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.observe.DltFilterConfig.repeatedFields_, null);
};
goog.inherits(proto.observe.DltFilterConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.observe.DltFilterConfig.displayName = 'proto.observe.DltFilterConfig';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.observe.DltFilterConfig.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.observe.DltFilterConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.observe.DltFilterConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.observe.DltFilterConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.observe.DltFilterConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    minLogLevel: jspb.Message.getFieldWithDefault(msg, 1, 0),
    appIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    ecuIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    contextIdsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    appIdCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    contextIdCount: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.observe.DltFilterConfig}
 */
proto.observe.DltFilterConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.observe.DltFilterConfig;
  return proto.observe.DltFilterConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.observe.DltFilterConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.observe.DltFilterConfig}
 */
proto.observe.DltFilterConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMinLogLevel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAppIds(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addEcuIds(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addContextIds(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAppIdCount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setContextIdCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.observe.DltFilterConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.observe.DltFilterConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.observe.DltFilterConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.observe.DltFilterConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinLogLevel();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getAppIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getEcuIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getContextIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getAppIdCount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getContextIdCount();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional uint32 min_log_level = 1;
 * @return {number}
 */
proto.observe.DltFilterConfig.prototype.getMinLogLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.observe.DltFilterConfig} returns this
 */
proto.observe.DltFilterConfig.prototype.setMinLogLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated string app_ids = 2;
 * @return {!Array<string>}
 */
proto.observe.DltFilterConfig.prototype.getAppIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.observe.DltFilterConfig} returns this
 */
proto.observe.DltFilterConfig.prototype.setAppIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.observe.DltFilterConfig} returns this
 */
proto.observe.DltFilterConfig.prototype.addAppIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.observe.DltFilterConfig} returns this
 */
proto.observe.DltFilterConfig.prototype.clearAppIdsList = function() {
  return this.setAppIdsList([]);
};


/**
 * repeated string ecu_ids = 3;
 * @return {!Array<string>}
 */
proto.observe.DltFilterConfig.prototype.getEcuIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.observe.DltFilterConfig} returns this
 */
proto.observe.DltFilterConfig.prototype.setEcuIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.observe.DltFilterConfig} returns this
 */
proto.observe.DltFilterConfig.prototype.addEcuIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.observe.DltFilterConfig} returns this
 */
proto.observe.DltFilterConfig.prototype.clearEcuIdsList = function() {
  return this.setEcuIdsList([]);
};


/**
 * repeated string context_ids = 4;
 * @return {!Array<string>}
 */
proto.observe.DltFilterConfig.prototype.getContextIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.observe.DltFilterConfig} returns this
 */
proto.observe.DltFilterConfig.prototype.setContextIdsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.observe.DltFilterConfig} returns this
 */
proto.observe.DltFilterConfig.prototype.addContextIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.observe.DltFilterConfig} returns this
 */
proto.observe.DltFilterConfig.prototype.clearContextIdsList = function() {
  return this.setContextIdsList([]);
};


/**
 * optional int64 app_id_count = 5;
 * @return {number}
 */
proto.observe.DltFilterConfig.prototype.getAppIdCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.observe.DltFilterConfig} returns this
 */
proto.observe.DltFilterConfig.prototype.setAppIdCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 context_id_count = 6;
 * @return {number}
 */
proto.observe.DltFilterConfig.prototype.getContextIdCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.observe.DltFilterConfig} returns this
 */
proto.observe.DltFilterConfig.prototype.setContextIdCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


