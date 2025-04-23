"use strict";
exports.__esModule = true;
exports.clearTokens = exports.setRefreshToken = exports.getRefreshToken = exports.setToken = exports.getToken = void 0;
var ACCESS_TOKEN_KEY = 'access_token';
var REFRESH_TOKEN_KEY = 'refresh_token';
function getToken() {
    if (typeof window === 'undefined')
        return null;
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}
exports.getToken = getToken;
function setToken(token) {
    if (typeof window === 'undefined')
        return;
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
}
exports.setToken = setToken;
function getRefreshToken() {
    if (typeof window === 'undefined')
        return null;
    return localStorage.getItem(REFRESH_TOKEN_KEY);
}
exports.getRefreshToken = getRefreshToken;
function setRefreshToken(token) {
    if (typeof window === 'undefined')
        return;
    localStorage.setItem(REFRESH_TOKEN_KEY, token);
}
exports.setRefreshToken = setRefreshToken;
function clearTokens() {
    if (typeof window === 'undefined')
        return;
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
}
exports.clearTokens = clearTokens;
