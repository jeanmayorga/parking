"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const envalid_1 = require("envalid");
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
exports.env = envalid_1.cleanEnv(process.env, {
    PORT: envalid_1.str({ default: '3000' }),
    NODE_ENV: envalid_1.str({
        choices: ['development', 'production'],
        default: 'development',
    }),
    X_MONGO_URL: envalid_1.str(),
    X_MONGO_DATABASE: envalid_1.str(),
});
//# sourceMappingURL=environment.js.map