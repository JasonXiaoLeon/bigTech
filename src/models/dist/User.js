"use strict";
exports.__esModule = true;
exports.User = void 0;
// models/User.ts
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String },
    age: { type: Number },
    avatar: { type: String },
    createdAt: { type: Date, "default": Date.now },
    isDelete: { type: Number, "default": 0 },
    refreshToken: { type: String },
    refreshTokenExpires: { type: Number },
    newPassword: { type: String, "default": '' },
    permissionLevel: { type: Number, "default": 1 }
}, { timestamps: true });
exports.User = mongoose_1.models.User || mongoose_1.model('User', userSchema, 'users');
