"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsRoutes = void 0;
const controller_1 = require("./controller");
const schemas_1 = require("./schemas");
async function carsRoutes(app) {
    app.route({
        method: 'GET',
        url: '/cars',
        schema: schemas_1.getCarsSchema,
        handler: controller_1.getCarsHandler,
    });
    app.route({
        method: 'POST',
        url: '/cars',
        schema: schemas_1.createCarSchema,
        handler: controller_1.createCarHandler,
    });
    app.route({
        method: 'DELETE',
        url: '/cars/:carId',
        schema: schemas_1.deleteCarSchema,
        handler: controller_1.deleteCarHandler,
    });
}
exports.carsRoutes = carsRoutes;
//# sourceMappingURL=view.js.map