"use strict";
exports.__esModule = true;
exports.verifyRefreshToken = exports.verifyAccessToken = exports.generateRefreshToken = exports.generateAccessToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET;
var REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET;
function generateAccessToken(payload) {
    var token = jsonwebtoken_1["default"].sign(payload, ACCESS_SECRET, { expiresIn: '15m' });
    console.log('Generated Access Token:', token); // 打印 Access Token
    return token;
}
exports.generateAccessToken = generateAccessToken;
function generateRefreshToken(payload) {
    var token = jsonwebtoken_1["default"].sign(payload, REFRESH_SECRET, { expiresIn: '30d' });
    console.log('Generated Refresh Token:', token); // 打印 Refresh Token
    return token;
}
exports.generateRefreshToken = generateRefreshToken;
function verifyAccessToken(token) {
    return jsonwebtoken_1["default"].verify(token, ACCESS_SECRET);
}
exports.verifyAccessToken = verifyAccessToken;
function verifyRefreshToken(token) {
    return jsonwebtoken_1["default"].verify(token, REFRESH_SECRET);
}
exports.verifyRefreshToken = verifyRefreshToken;
