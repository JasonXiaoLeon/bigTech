"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserOperationSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    datetime: { type: String, required: true },
    operationType: { type: String, required: true },
    purpose: { type: String, required: true },
    timestamp: { type: Date, "default": Date.now }
});
var UserOperation = mongoose_1["default"].model('UserOperation', UserOperationSchema);
exports["default"] = UserOperation;
