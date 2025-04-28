"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var FileSchema = new mongoose_1["default"].Schema({
    fileHash: { type: String, unique: true },
    data: { type: Array }
}, { timestamps: true });
exports["default"] = mongoose_1["default"].models.File || mongoose_1["default"].model('File', FileSchema);
