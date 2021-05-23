"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const envalid_1 = require("envalid");
exports.env = envalid_1.cleanEnv(process.env, {
    PORT: envalid_1.str({ default: '3000' }),
    NODE_ENV: envalid_1.str({
        choices: ['development', 'production'],
        default: 'development',
    }),
});
//# sourceMappingURL=env.js.map