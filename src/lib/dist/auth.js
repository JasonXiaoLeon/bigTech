"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var _a;
exports.__esModule = true;
exports.signOutNextAuth = exports.signIn = exports.handlers = exports.auth = void 0;
var next_auth_1 = require("next-auth");
var credentials_1 = require("next-auth/providers/credentials");
var userService_1 = require("@/service/userService");
var bcrypt_1 = require("bcrypt");
var uuid_1 = require("uuid");
var REFRESH_TOKEN_EXPIRE_IN = parseInt(process.env.REFRESH_TOKEN_EXPIRE_IN || '2592000', 10);
exports.auth = (_a = next_auth_1["default"]({
    providers: [
        credentials_1["default"]({
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            authorize: function (credentials) { return __awaiter(void 0, void 0, void 0, function () {
                var email, password, user, isPasswordValid;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            email = credentials === null || credentials === void 0 ? void 0 : credentials.email;
                            password = credentials === null || credentials === void 0 ? void 0 : credentials.password;
                            if (!email || !password) {
                                throw new Error('Missing email or password.');
                            }
                            return [4 /*yield*/, userService_1.getUserByEmail(email)];
                        case 1:
                            user = _a.sent();
                            if (!user || !user.password) {
                                throw new Error('User not found.');
                            }
                            return [4 /*yield*/, bcrypt_1["default"].compare(password, user.password)];
                        case 2:
                            isPasswordValid = _a.sent();
                            if (!isPasswordValid) {
                                throw new Error('Invalid credentials.');
                            }
                            return [2 /*return*/, {
                                    id: user.id,
                                    email: user.email,
                                    gender: user.gender
                                }];
                    }
                });
            }); }
        }),
    ],
    session: {
        strategy: 'jwt',
        maxAge: 60,
        updateAge: 0
    },
    callbacks: {
        jwt: function (_a) {
            var token = _a.token, user = _a.user;
            return __awaiter(this, void 0, void 0, function () {
                var now, refreshToken, refreshTokenExpires;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            now = Math.floor(Date.now() / 1000);
                            if (!user) return [3 /*break*/, 2];
                            token.email = user.email;
                            token.gender = user.gender;
                            refreshToken = uuid_1.v4();
                            token.refreshToken = refreshToken;
                            refreshTokenExpires = now + REFRESH_TOKEN_EXPIRE_IN;
                            token.exp = now + 5;
                            return [4 /*yield*/, userService_1.updateUserRefreshToken(user.email, refreshToken, refreshTokenExpires)];
                        case 1:
                            _b.sent();
                            return [2 /*return*/, token];
                        case 2: return [2 /*return*/, token];
                    }
                });
            });
        },
        session: function (_a) {
            var session = _a.session, token = _a.token;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    if (token && token.email) {
                        session.user = __assign(__assign({}, session.user), { email: token.email, gender: token.gender });
                    }
                    return [2 /*return*/, session];
                });
            });
        }
    }
}), _a.auth), exports.handlers = _a.handlers, exports.signIn = _a.signIn, exports.signOutNextAuth = _a.signOut;
