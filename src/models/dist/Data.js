"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var DataSchema = new mongoose_1.Schema({
    fixture_mid: { type: String, require: true },
    season: { type: Number, require: true },
    fixture_datetime: { type: Date, require: true },
    fixture_round: { type: Number, require: true },
    home_team: { type: String, require: true },
    away_team: { type: String, require: true }
}, {
    timestamps: true
});
var Data = mongoose_1["default"].models.Data || mongoose_1["default"].model('Data', DataSchema, 'files');
exports["default"] = Data;
