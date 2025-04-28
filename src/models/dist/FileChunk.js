"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var FileChunkSchema = new mongoose_1.Schema({
    fixture_mid: { type: String, required: true },
    season: { type: Number, required: true },
    fixture_datetime: { type: Date, required: true },
    fixture_round: { type: Number, required: true },
    home_team: { type: String, required: true },
    away_team: { type: String, required: true },
    chunkIndex: { type: Number, required: true },
    fileData: { type: Buffer, required: true }
}, {
    timestamps: true
});
var FileChunk = mongoose_1["default"].models.FileChunk || mongoose_1["default"].model('FileChunk', FileChunkSchema, 'files');
exports["default"] = FileChunk;
