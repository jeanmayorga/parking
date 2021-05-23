"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRequestHook = void 0;
async function logRequestHook(req, _reply) {
    req.log.info(`${req.method} ${req.url}`);
}
exports.logRequestHook = logRequestHook;
//# sourceMappingURL=request.js.map