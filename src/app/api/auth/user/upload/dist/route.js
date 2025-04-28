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
exports.POST = void 0;
var connectdb_1 = require("@/lib/connectdb");
var Data_1 = require("@/models/Data");
var HashChunk_1 = require("@/models/HashChunk");
var File_1 = require("@/models/File");
function POST(req) {
    return __awaiter(this, void 0, void 0, function () {
        var body, chunkHash, fileHash, data, isWholeFile, existingFile, existingHash, bulkOps, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 13, , 14]);
                    return [4 /*yield*/, req.json()];
                case 1:
                    body = _a.sent();
                    chunkHash = body.chunkHash, fileHash = body.fileHash, data = body.data, isWholeFile = body.isWholeFile;
                    if (!data || data.length === 0) {
                        return [2 /*return*/, new Response(JSON.stringify({ message: '缺少数据' }), {
                                status: 400,
                                headers: { 'Content-Type': 'application/json' }
                            })];
                    }
                    return [4 /*yield*/, connectdb_1.connectDB()];
                case 2:
                    _a.sent();
                    if (!isWholeFile) return [3 /*break*/, 7];
                    if (!fileHash) {
                        return [2 /*return*/, new Response(JSON.stringify({ message: '缺少 fileHash 参数' }), {
                                status: 400,
                                headers: { 'Content-Type': 'application/json' }
                            })];
                    }
                    return [4 /*yield*/, File_1["default"].findOne({ fileHash: fileHash }).lean()];
                case 3:
                    existingFile = _a.sent();
                    if (!!existingFile) return [3 /*break*/, 5];
                    return [4 /*yield*/, File_1["default"].create({ fileHash: fileHash, data: data })];
                case 4:
                    _a.sent();
                    console.log("\u6587\u4EF6 " + fileHash + " \u5DF2\u4FDD\u5B58\u5230 files");
                    return [3 /*break*/, 6];
                case 5:
                    console.log("\u6587\u4EF6 " + fileHash + " \u5DF2\u5B58\u5728\uFF0C\u8DF3\u8FC7\u4FDD\u5B58");
                    _a.label = 6;
                case 6: return [3 /*break*/, 12];
                case 7:
                    if (!chunkHash) {
                        return [2 /*return*/, new Response(JSON.stringify({ message: '缺少 chunkHash 参数' }), {
                                status: 400,
                                headers: { 'Content-Type': 'application/json' }
                            })];
                    }
                    return [4 /*yield*/, HashChunk_1["default"].findOne({ chunkHash: chunkHash }).lean()];
                case 8:
                    existingHash = _a.sent();
                    if (!!existingHash) return [3 /*break*/, 11];
                    return [4 /*yield*/, HashChunk_1["default"].create({ chunkHash: chunkHash })];
                case 9:
                    _a.sent();
                    bulkOps = data.map(function (item) { return ({
                        insertOne: { document: item }
                    }); });
                    return [4 /*yield*/, Data_1["default"].bulkWrite(bulkOps)];
                case 10:
                    _a.sent();
                    console.log("\u5206\u7247 " + chunkHash + " \u5DF2\u4FDD\u5B58\u5230 data");
                    return [3 /*break*/, 12];
                case 11:
                    console.log("\u5206\u7247 " + chunkHash + " \u5DF2\u5B58\u5728\uFF0C\u8DF3\u8FC7\u4FDD\u5B58");
                    _a.label = 12;
                case 12: return [2 /*return*/, new Response(JSON.stringify({ message: '上传处理完成' }), {
                        status: 200,
                        headers: { 'Content-Type': 'application/json' }
                    })];
                case 13:
                    error_1 = _a.sent();
                    console.error('处理上传错误:', error_1);
                    return [2 /*return*/, new Response(JSON.stringify({ message: '服务器错误', error: error_1 }), {
                            status: 500,
                            headers: { 'Content-Type': 'application/json' }
                        })];
                case 14: return [2 /*return*/];
            }
        });
    });
}
exports.POST = POST;
