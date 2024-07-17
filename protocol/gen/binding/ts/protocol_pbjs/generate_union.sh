pbjs -t static-module -p ../../../../src -w es6 -o ./dist/index.js ../../../../src/union.proto
pbts -o ./dist/index.d.ts ./dist/index.js
