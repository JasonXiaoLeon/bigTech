"use strict";
exports.__esModule = true;
// models/LeaveRequest.ts
var mongoose_1 = require("mongoose");
var LeaveRequestSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    leaveType: {
        type: String,
        required: true,
        "enum": ['事假', '病假', '年假', '其他']
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    reason: {
        type: String,
        "default": '',
        trim: true
    },
    status: {
        type: String,
        "enum": ['pending', 'approved', 'rejected']
    }
}, {
    timestamps: true
});
// 防止模型重复注册
exports["default"] = mongoose_1["default"].models.LeaveRequest ||
    mongoose_1["default"].model('LeaveRequest', LeaveRequestSchema, 'askForLeave');
