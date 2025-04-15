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
exports.authMiddleware = void 0;
var server_1 = require("next/server");
var jwt_1 = require("next-auth/jwt");
var userService_1 = require("@/service/userService");
function authMiddleware(next) {
    var _this = this;
    return function (req, event, res) { return __awaiter(_this, void 0, void 0, function () {
        var nextUrl, locale, isOnDashboard, token, now, isTokenExpired, isLoggedIn, refreshToken, refreshExp, loginUrl;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    nextUrl = req.nextUrl;
                    locale = ((_a = req.cookies.get('NEXT_LOCALE')) === null || _a === void 0 ? void 0 : _a.value) || 'en';
                    isOnDashboard = nextUrl.pathname.startsWith("/" + locale + "/dashboard");
                    return [4 /*yield*/, jwt_1.getToken({ req: req, secret: process.env.AUTH_SECRET })];
                case 1:
                    token = _b.sent();
                    now = Math.floor(Date.now() / 1000);
                    isTokenExpired = (token === null || token === void 0 ? void 0 : token.exp) && token.exp < now;
                    isLoggedIn = !!(token === null || token === void 0 ? void 0 : token.email) && !isTokenExpired;
                    if (!(token === null || token === void 0 ? void 0 : token.email)) return [3 /*break*/, 4];
                    return [4 /*yield*/, userService_1.getTokenByUser(token.email)];
                case 2:
                    refreshToken = _b.sent();
                    return [4 /*yield*/, userService_1.getRefreshExpireTimeByUser(token.email)];
                case 3:
                    refreshExp = _b.sent();
                    _b.label = 4;
                case 4:
                    if (isOnDashboard && !isLoggedIn) {
                        loginUrl = new URL("/" + locale + "/login?callbackUrl=" + encodeURIComponent(nextUrl.pathname), req.url);
                        return [2 /*return*/, server_1.NextResponse.redirect(loginUrl)];
                    }
                    return [2 /*return*/, next(req, event, res)];
            }
        });
    }); };
}
exports.authMiddleware = authMiddleware;
