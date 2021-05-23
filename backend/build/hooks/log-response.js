"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logResponseHook = void 0;
const utils_1 = require("../utils");
async function logResponseHook(req, reply) {
    const responseTime = reply.getResponseTime();
    utils_1.logger.info({
        responseTime,
    }, `${req.method} ${req.url} -> ${reply.statusCode}`);
}
exports.logResponseHook = logResponseHook;
//# sourceMappingURL=log-response.js.map