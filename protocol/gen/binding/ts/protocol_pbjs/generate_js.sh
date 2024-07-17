pbjs -t static-module -p ../../../../src/binding -w es6 -o ./src/generated/attachment.js ../../../../src/binding/attachment.proto
pbjs -t static-module -p ../../../../src/binding -w es6 -o ./src/generated/common.js ../../../../src/binding/common.proto
pbjs -t static-module -p ../../../../src/binding -w es6 -o ./src/generated/error.js ../../../../src/binding/error.proto
pbjs -t static-module -p ../../../../src/binding -w es6 -o ./src/generated/event.js ../../../../src/binding/event.proto
pbjs -t static-module -p ../../../../src/binding -w es6 -o ./src/generated/grabbing.js ../../../../src/binding/grabbing.proto 
pbjs -t static-module -p ../../../../src/binding -w es6 -o ./src/generated/observe.js ../../../../src/binding/observe.proto 
pbjs -t static-module -p ../../../../src/binding -w es6 -o ./src/generated/sde.js ../../../../src/binding/sde.proto
pbjs -t static-module -p ../../../../src/binding -w es6 -o ./src/generated/commands.js ../../../../src/binding/commands.proto
pbjs -t static-module -p ../../../../src/binding -w es6 -o ./src/generated/progress.js ../../../../src/binding/progress.proto
pbts -o ./src/generated/attachment.d.ts ./src/generated/attachment.js
pbts -o ./src/generated/common.d.ts ./src/generated/common.js
pbts -o ./src/generated/error.d.ts ./src/generated/error.js
pbts -o ./src/generated/event.d.ts ./src/generated/event.js
pbts -o ./src/generated/grabbing.d.ts ./src/generated/grabbing.js
pbts -o ./src/generated/observe.d.ts ./src/generated/observe.js
pbts -o ./src/generated/sde.d.ts ./src/generated/sde.js
pbts -o ./src/generated/commands.d.ts ./src/generated/commands.js
pbts -o ./src/generated/progress.d.ts ./src/generated/progress.js
