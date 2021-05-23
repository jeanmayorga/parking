"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCar = exports.getCars = void 0;
const utils_1 = require("../../utils");
const model_1 = require("./model");
async function getCars(_req, reply) {
    try {
        const cars = await model_1.CarsModel.find({});
        reply.code(200).send({ data: cars });
    }
    catch (error) {
        reply.code(500).send({ data: 'Cannot get cars.' });
    }
}
exports.getCars = getCars;
async function createCar(req, reply) {
    const { licensePlate } = req.body;
    try {
        const carCreated = await model_1.CarsModel.create({ licensePlate });
        reply.code(200).send({ data: carCreated });
    }
    catch (error) {
        utils_1.logger.error({ error: error.message });
        throw new Error(`Cannot create car, maybe car ${licensePlate} already exists.`);
    }
}
exports.createCar = createCar;
//# sourceMappingURL=controllers.js.map