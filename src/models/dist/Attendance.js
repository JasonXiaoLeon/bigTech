"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var AttendanceSchema = new mongoose_1["default"].Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    clockIn: { type: String },
    clockOut: { type: String }
});
var Attendance = mongoose_1["default"].models.Attendance || mongoose_1["default"].model('Attendance', AttendanceSchema, 'attendance');
exports["default"] = Attendance;
