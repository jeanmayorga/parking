"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const fastify_1 = __importDefault(require("fastify"));
const fastify_swagger_1 = __importDefault(require("fastify-swagger"));
const config_1 = require("./config");
const database_1 = require("./database");
const utils_1 = require("./utils");
const services_1 = require("./services");
const hooks_1 = require("./hooks");
const schemas_1 = require("./services/cars/schemas");
async function main() {
    await database_1.connectDatabase();
    const app = fastify_1.default();
    app.addHook('onRequest', hooks_1.logRequestHook);
    app.addHook('onResponse', hooks_1.logResponseHook);
    app.register(fastify_swagger_1.default, {
        routePrefix: '/docs',
        exposeRoute: true,
        swagger: {
            info: {
                title: 'Parking API',
                description: 'Api for parking app',
                version: '1.0.0',
            },
            host: 'localhost:3001',
            schemes: ['http'],
            consumes: ['application/json'],
            produces: ['application/json'],
            definitions: {
                Car: schemas_1.carSchema,
            },
            tags: [
                { name: 'auth', description: 'Auth endpoints' },
                { name: 'cars', description: 'Cars endpoints' },
            ],
        },
    });
    app.register(services_1.carsRoutes);
    app.listen(config_1.env.PORT, error => {
        if (error) {
            utils_1.logger.error(`❌ Error: ${error}`);
            return;
        }
        utils_1.logger.info(`🌎 Environment: ${config_1.env.NODE_ENV}`);
        utils_1.logger.info(`🚀 Server is running on http://localhost:${config_1.env.PORT}/`);
        utils_1.logger.info(`🚀 Server Docs is running on http://localhost:${config_1.env.PORT}/docs`);
    });
    return app;
}
exports.main = main;
if (require.main === module) {
    main();
}
else {
    // required as a module => executed on aws lambda
}
//# sourceMappingURL=app.js.map