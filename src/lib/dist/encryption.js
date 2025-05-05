"use strict";
exports.__esModule = true;
exports.decrypt = void 0;
var crypto_1 = require("crypto");
var algorithm = 'aes-256-cbc';
var key = Buffer.from(process.env.BALANCE_ENCRYPTION_KEY, 'hex'); // 32字节密钥
// 解密函数
exports.decrypt = function (encrypted) {
    try {
        var _a = encrypted.split(':'), ivBase64 = _a[0], encryptedBase64 = _a[1];
        if (!ivBase64 || !encryptedBase64) {
            throw new Error('Invalid encrypted string format.');
        }
        var iv = Buffer.from(ivBase64, 'base64');
        var encryptedText = Buffer.from(encryptedBase64, 'base64');
        if (key.length !== 32) {
            throw new Error('Invalid encryption key length.');
        }
        var decipher = crypto_1["default"].createDecipheriv(algorithm, key, iv);
        var decrypted = Buffer.concat([
            decipher.update(encryptedText),
            decipher.final(),
        ]);
        return decrypted.toString('utf8');
    }
    catch (err) {
        console.error('Decryption error:', err);
        throw new Error('Failed to decrypt data.');
    }
};
