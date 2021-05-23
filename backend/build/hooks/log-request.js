"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRequestHook = void 0;
const utils_1 = require("../utils");
async function logRequestHook(req, _reply) {
    utils_1.logger.info(`${req.method} ${req.url}`);
}
exports.logRequestHook = logRequestHook;
//# sourceMappingURL=log-request.js.map