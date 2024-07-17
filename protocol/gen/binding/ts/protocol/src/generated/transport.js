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

goog.provide('proto.observe.Transport');
goog.provide('proto.observe.Transport.TransportCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.observe.ProcessTransportConfig');
goog.require('proto.observe.SerialTransportConfig');
goog.require('proto.observe.TCPTransportConfig');
goog.require('proto.observe.UDPTransportConfig');

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
proto.observe.Transport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.observe.Transport.oneofGroups_);
};
goog.inherits(proto.observe.Transport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.observe.Transport.displayName = 'proto.observe.Transport';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.observe.Transport.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.observe.Transport.TransportCase = {
  TRANSPORT_NOT_SET: 0,
  PROCESS: 1,
  TCP: 2,
  UDP: 3,
  SERIAL: 4
};

/**
 * @return {proto.observe.Transport.TransportCase}
 */
proto.observe.Transport.prototype.getTransportCase = function() {
  return /** @type {proto.observe.Transport.TransportCase} */(jspb.Message.computeOneofCase(this, proto.observe.Transport.oneofGroups_[0]));
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
proto.observe.Transport.prototype.toObject = function(opt_includeInstance) {
  return proto.observe.Transport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.observe.Transport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.observe.Transport.toObject = function(includeInstance, msg) {
  var f, obj = {
    process: (f = msg.getProcess()) && proto.observe.ProcessTransportConfig.toObject(includeInstance, f),
    tcp: (f = msg.getTcp()) && proto.observe.TCPTransportConfig.toObject(includeInstance, f),
    udp: (f = msg.getUdp()) && proto.observe.UDPTransportConfig.toObject(includeInstance, f),
    serial: (f = msg.getSerial()) && proto.observe.SerialTransportConfig.toObject(includeInstance, f)
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
 * @return {!proto.observe.Transport}
 */
proto.observe.Transport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.observe.Transport;
  return proto.observe.Transport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.observe.Transport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.observe.Transport}
 */
proto.observe.Transport.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.observe.ProcessTransportConfig;
      reader.readMessage(value,proto.observe.ProcessTransportConfig.deserializeBinaryFromReader);
      msg.setProcess(value);
      break;
    case 2:
      var value = new proto.observe.TCPTransportConfig;
      reader.readMessage(value,proto.observe.TCPTransportConfig.deserializeBinaryFromReader);
      msg.setTcp(value);
      break;
    case 3:
      var value = new proto.observe.UDPTransportConfig;
      reader.readMessage(value,proto.observe.UDPTransportConfig.deserializeBinaryFromReader);
      msg.setUdp(value);
      break;
    case 4:
      var value = new proto.observe.SerialTransportConfig;
      reader.readMessage(value,proto.observe.SerialTransportConfig.deserializeBinaryFromReader);
      msg.setSerial(value);
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
proto.observe.Transport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.observe.Transport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.observe.Transport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.observe.Transport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcess();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.observe.ProcessTransportConfig.serializeBinaryToWriter
    );
  }
  f = message.getTcp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.observe.TCPTransportConfig.serializeBinaryToWriter
    );
  }
  f = message.getUdp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.observe.UDPTransportConfig.serializeBinaryToWriter
    );
  }
  f = message.getSerial();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.observe.SerialTransportConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional ProcessTransportConfig process = 1;
 * @return {?proto.observe.ProcessTransportConfig}
 */
proto.observe.Transport.prototype.getProcess = function() {
  return /** @type{?proto.observe.ProcessTransportConfig} */ (
    jspb.Message.getWrapperField(this, proto.observe.ProcessTransportConfig, 1));
};


/**
 * @param {?proto.observe.ProcessTransportConfig|undefined} value
 * @return {!proto.observe.Transport} returns this
*/
proto.observe.Transport.prototype.setProcess = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.observe.Transport.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.observe.Transport} returns this
 */
proto.observe.Transport.prototype.clearProcess = function() {
  return this.setProcess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.observe.Transport.prototype.hasProcess = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TCPTransportConfig tcp = 2;
 * @return {?proto.observe.TCPTransportConfig}
 */
proto.observe.Transport.prototype.getTcp = function() {
  return /** @type{?proto.observe.TCPTransportConfig} */ (
    jspb.Message.getWrapperField(this, proto.observe.TCPTransportConfig, 2));
};


/**
 * @param {?proto.observe.TCPTransportConfig|undefined} value
 * @return {!proto.observe.Transport} returns this
*/
proto.observe.Transport.prototype.setTcp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.observe.Transport.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.observe.Transport} returns this
 */
proto.observe.Transport.prototype.clearTcp = function() {
  return this.setTcp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.observe.Transport.prototype.hasTcp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional UDPTransportConfig udp = 3;
 * @return {?proto.observe.UDPTransportConfig}
 */
proto.observe.Transport.prototype.getUdp = function() {
  return /** @type{?proto.observe.UDPTransportConfig} */ (
    jspb.Message.getWrapperField(this, proto.observe.UDPTransportConfig, 3));
};


/**
 * @param {?proto.observe.UDPTransportConfig|undefined} value
 * @return {!proto.observe.Transport} returns this
*/
proto.observe.Transport.prototype.setUdp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.observe.Transport.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.observe.Transport} returns this
 */
proto.observe.Transport.prototype.clearUdp = function() {
  return this.setUdp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.observe.Transport.prototype.hasUdp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SerialTransportConfig serial = 4;
 * @return {?proto.observe.SerialTransportConfig}
 */
proto.observe.Transport.prototype.getSerial = function() {
  return /** @type{?proto.observe.SerialTransportConfig} */ (
    jspb.Message.getWrapperField(this, proto.observe.SerialTransportConfig, 4));
};


/**
 * @param {?proto.observe.SerialTransportConfig|undefined} value
 * @return {!proto.observe.Transport} returns this
*/
proto.observe.Transport.prototype.setSerial = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.observe.Transport.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.observe.Transport} returns this
 */
proto.observe.Transport.prototype.clearSerial = function() {
  return this.setSerial(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.observe.Transport.prototype.hasSerial = function() {
  return jspb.Message.getField(this, 4) != null;
};


