"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var TransactionHistorySchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    type: { type: String, "enum": ['Buy', 'Sell'], required: true },
    asset: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true }
}, {
    timestamps: true
});
exports["default"] = mongoose_1["default"].models.TransactionHistory ||
    mongoose_1["default"].model('TransactionHistory', TransactionHistorySchema, 'transactionhistory');
