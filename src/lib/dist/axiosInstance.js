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
var axios_1 = require("axios");
var auth_1 = require("@/lib/auth");
var tokenStorage_1 = require("./tokenStorage");
// 创建一个异步初始化函数，确保在组件加载时获取到 session 和 token
function initializeToken() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var session, accessToken, refreshToken;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, auth_1.auth()]; // 获取 session
                case 1:
                    session = _c.sent() // 获取 session
                    ;
                    accessToken = (_a = session === null || session === void 0 ? void 0 : session.user) === null || _a === void 0 ? void 0 : _a.accessToken;
                    refreshToken = (_b = session === null || session === void 0 ? void 0 : session.user) === null || _b === void 0 ? void 0 : _b.refreshToken;
                    console.log("hello", accessToken, refreshToken);
                    // 如果获取到 accessToken 和 refreshToken，就将它们存储到 localStorage
                    if (accessToken) {
                        tokenStorage_1.setToken(accessToken);
                    }
                    if (refreshToken) {
                        tokenStorage_1.setRefreshToken(refreshToken);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// 创建 axios 实例
var ins = axios_1["default"].create({
    baseURL: 'http://localhost:3000',
    headers: {
        Authorization: "Bearer " + tokenStorage_1.getToken()
    }
});
// 确保在发送请求之前初始化 token
initializeToken().then(function () {
    // 发送请求或执行其他操作
    console.log('Token initialized');
});
// 响应拦截器，处理返回的 token
ins.interceptors.response.use(function (res) { return __awaiter(void 0, void 0, void 0, function () {
    var token, refreshtoken;
    return __generator(this, function (_a) {
        if (res.headers.authorization) {
            token = res.headers.authorization.replace('Bearer ', '');
            tokenStorage_1.setToken(token); // 存储新的 accessToken
            ins.defaults.headers.Authorization = "Bearer " + token; // 更新请求头中的 Authorization
        }
        if (res.headers.refreshtoken) {
            refreshtoken = res.headers.refreshtoken.replace('Bearer ', '');
            tokenStorage_1.setRefreshToken(refreshtoken); // 存储新的 refreshToken
        }
        return [2 /*return*/, res.data];
    });
}); }, function (error) {
    // 处理响应错误
    return Promise.reject(error);
});
exports["default"] = ins;
