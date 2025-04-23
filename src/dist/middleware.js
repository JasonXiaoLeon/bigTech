"use strict";
exports.__esModule = true;
exports.config = void 0;
var printUrlMiddleware_1 = require("./middlewares/printUrlMiddleware");
var chain_1 = require("./middlewares/chain");
var authMiddleware_1 = require("./middlewares/authMiddleware");
var i18nMiddleware_1 = require("./middlewares/i18nMiddleware");
var middlewares = [printUrlMiddleware_1.printUrlMiddleware, i18nMiddleware_1.i18nMiddleware, authMiddleware_1.authMiddleware];
exports["default"] = chain_1.chain(middlewares);
exports.config = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
