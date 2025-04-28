"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var HashChunkSchema = new mongoose_1.Schema({
    chunkHash: { type: String, required: true }
}, {
    timestamps: true
});
var HashChunk = mongoose_1["default"].models.HashChunk || mongoose_1["default"].model('HashChunk', HashChunkSchema, 'hashchunks');
exports["default"] = HashChunk;
