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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.getUserTransactions = exports.getUserFinanceByEmail = exports.updateMultipleUsers = exports.getUsersWithPermissionLevel = exports.getRefreshExpireTimeByUser = exports.getUserByRefreshToken = exports.updateUserByEmail = exports.getUserByEmail = void 0;
var connectdb_1 = require("@/lib/connectdb");
var databse_1 = require("@/lib/databse");
var encryption_1 = require("@/lib/encryption");
var Finance_1 = require("@/models/Finance");
var TransactionHistory_1 = require("@/models/TransactionHistory");
var User_1 = require("@/models/User");
var dbName = 'Edge';
exports.getUserByEmail = function (email) { return __awaiter(void 0, void 0, void 0, function () {
    var client, db, usersCollection, user, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, databse_1["default"]];
            case 1:
                client = _a.sent();
                db = client.db(dbName);
                usersCollection = db.collection('users');
                return [4 /*yield*/, usersCollection.findOne({ email: email })];
            case 2:
                user = _a.sent();
                return [2 /*return*/, user];
            case 3:
                error_1 = _a.sent();
                console.error('Error fetching user:', error_1);
                throw new Error('Could not fetch user');
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateUserByEmail = function (email, updates) { return __awaiter(void 0, void 0, void 0, function () {
    var _id, filteredUpdates, client, db, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _id = updates._id, filteredUpdates = __rest(updates, ["_id"]);
                return [4 /*yield*/, databse_1["default"]];
            case 1:
                client = _a.sent();
                db = client.db(dbName);
                return [4 /*yield*/, db.collection('users').updateOne({ email: email }, { $set: filteredUpdates })];
            case 2:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); };
exports.getUserByRefreshToken = function (refreshToken) { return __awaiter(void 0, void 0, void 0, function () {
    var client, db, usersCollection, user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!refreshToken) {
                    throw new Error('Refresh token is required');
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, databse_1["default"]];
            case 2:
                client = _a.sent();
                db = client.db('Edge');
                usersCollection = db.collection('users');
                return [4 /*yield*/, usersCollection.findOne({ refreshToken: refreshToken })];
            case 3:
                user = _a.sent();
                return [2 /*return*/, user];
            case 4:
                error_2 = _a.sent();
                console.error('Error fetching user by refresh token:', error_2);
                throw new Error('Could not fetch user by refresh token');
            case 5: return [2 /*return*/];
        }
    });
}); };
function getRefreshExpireTimeByUser(email) {
    return __awaiter(this, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!email) {
                        throw new Error('Email is required');
                    }
                    return [4 /*yield*/, exports.getUserByEmail(email)];
                case 1:
                    user = _a.sent();
                    if (!user) {
                        console.log('No user found with the provided email');
                        return [2 /*return*/, null];
                    }
                    return [2 /*return*/, user.refreshTokenExpires];
            }
        });
    });
}
exports.getRefreshExpireTimeByUser = getRefreshExpireTimeByUser;
function getUsersWithPermissionLevel() {
    return __awaiter(this, void 0, void 0, function () {
        var users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connectdb_1.connectDB()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, User_1.User.find({
                            permissionLevel: { $gte: 3, $lte: 6 },
                            isDelete: 0
                        }).lean()];
                case 2:
                    users = _a.sent();
                    return [2 /*return*/, users];
            }
        });
    });
}
exports.getUsersWithPermissionLevel = getUsersWithPermissionLevel;
function updateMultipleUsers(users) {
    return __awaiter(this, void 0, void 0, function () {
        var updatePromises, updatedUsers, filteredUsers, error_3;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, connectdb_1.connectDB()];
                case 1:
                    _a.sent();
                    updatePromises = users.map(function (user) { return __awaiter(_this, void 0, void 0, function () {
                        var _id, gender, age, permissionLevel, existingUser, hasChanged;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _id = user._id, gender = user.gender, age = user.age, permissionLevel = user.permissionLevel;
                                    return [4 /*yield*/, User_1.User.findById(_id)];
                                case 1:
                                    existingUser = _a.sent();
                                    if (!existingUser)
                                        return [2 /*return*/, null];
                                    hasChanged = existingUser.gender !== gender ||
                                        existingUser.age !== age ||
                                        existingUser.permissionLevel !== permissionLevel;
                                    if (!hasChanged)
                                        return [2 /*return*/, null];
                                    return [2 /*return*/, User_1.User.findByIdAndUpdate(_id, {
                                            gender: gender,
                                            age: age,
                                            permissionLevel: permissionLevel,
                                            updatedAt: Date.now()
                                        }, { "new": true })];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(updatePromises)];
                case 2:
                    updatedUsers = _a.sent();
                    filteredUsers = updatedUsers.filter(function (user) { return user !== null; });
                    return [2 /*return*/, {
                            acknowledged: filteredUsers.length > 0,
                            updatedUsers: filteredUsers
                        }];
                case 3:
                    error_3 = _a.sent();
                    console.error("Error updating users:", error_3);
                    throw new Error("Failed to update users");
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateMultipleUsers = updateMultipleUsers;
exports.getUserFinanceByEmail = function (email) { return __awaiter(void 0, void 0, void 0, function () {
    var finance, decryptedFinance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Finance_1["default"].findOne({ email: email })];
            case 1:
                finance = _a.sent();
                if (!finance)
                    return [2 /*return*/, null];
                decryptedFinance = {
                    email: finance.email,
                    balance: parseFloat(encryption_1.decrypt(finance.balance)),
                    stocks: parseFloat(encryption_1.decrypt(finance.stocks)),
                    funds: parseFloat(encryption_1.decrypt(finance.funds)),
                    cryptocurrency: parseFloat(encryption_1.decrypt(finance.cryptcurrency))
                };
                return [2 /*return*/, decryptedFinance];
        }
    });
}); };
exports.getUserTransactions = function (email) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, TransactionHistory_1["default"].find({ email: email }).sort({ date: -1 }).limit(10)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
