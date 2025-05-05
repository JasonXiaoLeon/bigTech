"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserFinanceSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    balance: {
        type: String,
        required: true,
        "default": '0'
    },
    stocks: {
        type: String,
        required: true,
        "default": '0'
    },
    funds: {
        type: String,
        required: true,
        "default": '0'
    },
    cryptcurrency: {
        type: String,
        required: true,
        "default": '0'
    }
}, {
    timestamps: true
});
var UserFinance = mongoose_1["default"].models.UserFinance || mongoose_1.model('UserFinance', UserFinanceSchema, "finance");
exports["default"] = UserFinance;
