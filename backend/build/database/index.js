"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const utils_1 = require("../utils");
const config_1 = require("../config");
let isConnected = false;
async function connectDatabase() {
    if (isConnected) {
        utils_1.logger.info('📚 Database connected from cache.');
        return true;
    }
    try {
        utils_1.logger.info('📚 Initializing database.');
        await mongoose_1.default.connect(config_1.env.X_MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: config_1.env.X_MONGO_DATABASE,
            useCreateIndex: true,
        });
        isConnected = true;
        utils_1.logger.info('📚 Database connected.');
        return true;
    }
    catch (error) {
        utils_1.logger.child({ error }).error('❌ Database connection failed.');
        return false;
    }
}
exports.connectDatabase = connectDatabase;
//# sourceMappingURL=index.js.map