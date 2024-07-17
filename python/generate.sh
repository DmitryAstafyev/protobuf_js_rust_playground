protoc \
    --python_out="./src/" \
    --proto_path="../protocol/src/binding" \
    ../protocol/src/binding/attachment.proto \
    ../protocol/src/binding/common.proto \
    ../protocol/src/binding/error.proto \
    ../protocol/src/binding/event.proto \
    ../protocol/src/binding/grabbing.proto \
    ../protocol/src/binding/observe.proto \
    ../protocol/src/binding/sde.proto \
    ../protocol/src/binding/commands.proto \
    ../protocol/src/binding/progress.proto
