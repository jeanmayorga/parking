"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsRoutes = void 0;
const handlers_1 = require("./handlers");
const schemas_1 = require("./schemas");
async function carsRoutes(app) {
    app.route({
        method: 'GET',
        url: '/cars',
        schema: schemas_1.getCarsSchema,
        handler: handlers_1.getCars,
    });
    app.route({
        method: 'POST',
        url: '/cars',
        schema: schemas_1.createCarSchema,
        handler: handlers_1.createCarHandler,
    });
    app.route({
        method: 'DELETE',
        url: '/cars/:carId',
        handler: handlers_1.deleteCarHandler,
    });
}
exports.carsRoutes = carsRoutes;
//# sourceMappingURL=routes.js.map