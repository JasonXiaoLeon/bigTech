"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.POST = exports.GET = void 0;
// route.ts
var server_1 = require("next/server");
var auth_1 = require("@/lib/auth");
var connectdb_1 = require("@/lib/connectdb");
var Attendance_1 = require("@/models/Attendance");
var userService_1 = require("@/service/userService");
exports.GET = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var session, user, attendance, uniqueUsers, numUsersBooked;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, connectdb_1.connectDB()];
            case 1:
                _b.sent();
                return [4 /*yield*/, auth_1.auth()];
            case 2:
                session = _b.sent();
                if (!session || !((_a = session.user) === null || _a === void 0 ? void 0 : _a.email)) {
                    return [2 /*return*/, server_1.NextResponse.json({ error: '未授权，用户信息缺失' }, { status: 401 })];
                }
                return [4 /*yield*/, userService_1.getUserByEmail(session.user.email)];
            case 3:
                user = _b.sent();
                if (!user) {
                    return [2 /*return*/, server_1.NextResponse.json({ error: '未找到用户' }, { status: 404 })];
                }
                return [4 /*yield*/, Attendance_1["default"].find().lean()
                    // 获取已预约的不同用户数量
                ];
            case 4:
                attendance = _b.sent();
                uniqueUsers = new Set(attendance.map(function (att) { return att.email; })) // 假设每个预约记录有一个 email 字段
                ;
                numUsersBooked = uniqueUsers.size // 计算唯一用户数量
                ;
                return [2 /*return*/, server_1.NextResponse.json({
                        permissionLevel: user.permissionLevel,
                        attendance: attendance,
                        numUsersBooked: numUsersBooked
                    })];
        }
    });
}); };
exports.POST = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    var session, user, body, selectedDays, email_1, name_1, today, currentMonday_1, dayOfWeek, records, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, connectdb_1.connectDB()];
            case 1:
                _b.sent();
                return [4 /*yield*/, auth_1.auth()];
            case 2:
                session = _b.sent();
                if (!session || !((_a = session.user) === null || _a === void 0 ? void 0 : _a.email)) {
                    return [2 /*return*/, server_1.NextResponse.json({ error: '未授权，用户信息缺失' }, { status: 401 })];
                }
                return [4 /*yield*/, userService_1.getUserByEmail(session.user.email)];
            case 3:
                user = _b.sent();
                if (!user) {
                    return [2 /*return*/, server_1.NextResponse.json({ error: '未找到用户' }, { status: 404 })];
                }
                _b.label = 4;
            case 4:
                _b.trys.push([4, 7, , 8]);
                return [4 /*yield*/, req.json()];
            case 5:
                body = _b.sent();
                selectedDays = body.selectedDays, email_1 = body.email, name_1 = body.name;
                if (!Array.isArray(selectedDays) || selectedDays.length === 0) {
                    return [2 /*return*/, server_1.NextResponse.json({ error: 'selectedDays 无效' }, { status: 400 })];
                }
                today = new Date();
                currentMonday_1 = new Date(today);
                dayOfWeek = currentMonday_1.getDay() || 7;
                currentMonday_1.setDate(today.getDate() - dayOfWeek + 1);
                currentMonday_1.setHours(0, 0, 0, 0);
                records = selectedDays.map(function (dayName) {
                    var index = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].indexOf(dayName);
                    var date = new Date(currentMonday_1);
                    date.setDate(currentMonday_1.getDate() + index);
                    return {
                        email: email_1,
                        name: name_1,
                        date: date,
                        clockIn: '',
                        clockOut: ''
                    };
                });
                return [4 /*yield*/, Attendance_1["default"].insertMany(records)];
            case 6:
                _b.sent();
                return [2 /*return*/, server_1.NextResponse.json({ message: '预约成功', records: records }, { status: 200 })];
            case 7:
                error_1 = _b.sent();
                console.error('预约提交出错:', error_1);
                return [2 /*return*/, server_1.NextResponse.json({ error: '服务器内部错误' }, { status: 500 })];
            case 8: return [2 /*return*/];
        }
    });
}); };
