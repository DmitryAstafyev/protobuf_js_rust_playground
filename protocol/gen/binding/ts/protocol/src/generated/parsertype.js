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

goog.provide('proto.observe.ParserType');
goog.provide('proto.observe.ParserType.TypeCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.observe.DltParserSettings');
goog.require('proto.observe.SomeIpParserSettings');

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
proto.observe.ParserType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.observe.ParserType.oneofGroups_);
};
goog.inherits(proto.observe.ParserType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.observe.ParserType.displayName = 'proto.observe.ParserType';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.observe.ParserType.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.observe.ParserType.TypeCase = {
  TYPE_NOT_SET: 0,
  DLT: 1,
  SOME_IP: 2,
  TEXT: 3
};

/**
 * @return {proto.observe.ParserType.TypeCase}
 */
proto.observe.ParserType.prototype.getTypeCase = function() {
  return /** @type {proto.observe.ParserType.TypeCase} */(jspb.Message.computeOneofCase(this, proto.observe.ParserType.oneofGroups_[0]));
};



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
proto.observe.ParserType.prototype.toObject = function(opt_includeInstance) {
  return proto.observe.ParserType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.observe.ParserType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.observe.ParserType.toObject = function(includeInstance, msg) {
  var f, obj = {
    dlt: (f = msg.getDlt()) && proto.observe.DltParserSettings.toObject(includeInstance, f),
    someIp: (f = msg.getSomeIp()) && proto.observe.SomeIpParserSettings.toObject(includeInstance, f),
    text: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.observe.ParserType}
 */
proto.observe.ParserType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.observe.ParserType;
  return proto.observe.ParserType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.observe.ParserType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.observe.ParserType}
 */
proto.observe.ParserType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.observe.DltParserSettings;
      reader.readMessage(value,proto.observe.DltParserSettings.deserializeBinaryFromReader);
      msg.setDlt(value);
      break;
    case 2:
      var value = new proto.observe.SomeIpParserSettings;
      reader.readMessage(value,proto.observe.SomeIpParserSettings.deserializeBinaryFromReader);
      msg.setSomeIp(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setText(value);
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
proto.observe.ParserType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.observe.ParserType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.observe.ParserType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.observe.ParserType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDlt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.observe.DltParserSettings.serializeBinaryToWriter
    );
  }
  f = message.getSomeIp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.observe.SomeIpParserSettings.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional DltParserSettings dlt = 1;
 * @return {?proto.observe.DltParserSettings}
 */
proto.observe.ParserType.prototype.getDlt = function() {
  return /** @type{?proto.observe.DltParserSettings} */ (
    jspb.Message.getWrapperField(this, proto.observe.DltParserSettings, 1));
};


/**
 * @param {?proto.observe.DltParserSettings|undefined} value
 * @return {!proto.observe.ParserType} returns this
*/
proto.observe.ParserType.prototype.setDlt = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.observe.ParserType.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.observe.ParserType} returns this
 */
proto.observe.ParserType.prototype.clearDlt = function() {
  return this.setDlt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.observe.ParserType.prototype.hasDlt = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SomeIpParserSettings some_ip = 2;
 * @return {?proto.observe.SomeIpParserSettings}
 */
proto.observe.ParserType.prototype.getSomeIp = function() {
  return /** @type{?proto.observe.SomeIpParserSettings} */ (
    jspb.Message.getWrapperField(this, proto.observe.SomeIpParserSettings, 2));
};


/**
 * @param {?proto.observe.SomeIpParserSettings|undefined} value
 * @return {!proto.observe.ParserType} returns this
*/
proto.observe.ParserType.prototype.setSomeIp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.observe.ParserType.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.observe.ParserType} returns this
 */
proto.observe.ParserType.prototype.clearSomeIp = function() {
  return this.setSomeIp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.observe.ParserType.prototype.hasSomeIp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool text = 3;
 * @return {boolean}
 */
proto.observe.ParserType.prototype.getText = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.observe.ParserType} returns this
 */
proto.observe.ParserType.prototype.setText = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.observe.ParserType.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.observe.ParserType} returns this
 */
proto.observe.ParserType.prototype.clearText = function() {
  return jspb.Message.setOneofField(this, 3, proto.observe.ParserType.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.observe.ParserType.prototype.hasText = function() {
  return jspb.Message.getField(this, 3) != null;
};


