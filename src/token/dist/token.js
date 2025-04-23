"use strict";
exports.__esModule = true;
exports.isDbTokenExpired = exports.isJwtAccessTokenValid = exports.decodeJWT = void 0;
function decodeJWT(token) {
    try {
        var payload = token.split('.')[1];
        var decoded = Buffer.from(payload, 'base64').toString();
        return JSON.parse(decoded);
    }
    catch (error) {
        console.error('Failed to decode JWT:', error);
        return null;
    }
}
exports.decodeJWT = decodeJWT;
function isJwtAccessTokenValid(token) {
    var decoded = decodeJWT(token);
    if (!(decoded === null || decoded === void 0 ? void 0 : decoded.exp))
        return false;
    var now = Math.floor(Date.now() / 1000);
    return decoded.exp > now;
}
exports.isJwtAccessTokenValid = isJwtAccessTokenValid;
function isDbTokenExpired(expireTime) {
    var now = Math.floor(Date.now() / 1000);
    return expireTime < now;
}
exports.isDbTokenExpired = isDbTokenExpired;
