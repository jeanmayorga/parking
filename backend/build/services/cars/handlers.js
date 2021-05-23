"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCarHandler = exports.createCarHandler = exports.getCars = void 0;
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
async function createCarHandler(req, reply) {
    try {
        const { licensePlate } = req.body;
        const data = await model_1.CarsModel.create({ licensePlate });
        reply.code(200).send({ data });
    }
    catch (error) {
        utils_1.logger.error({ error: error.message });
        throw new Error(`Cannot create car or maybe car already exists.`);
    }
}
exports.createCarHandler = createCarHandler;
async function deleteCarHandler(req, reply) {
    try {
        const { carId } = req.params;
        const carDeleted = await model_1.CarsModel.findByIdAndDelete({ _id: carId });
        if (!carDeleted) {
            throw new Error(`Cannot delete car.`);
        }
        reply.code(200).send({ data: true });
    }
    catch (error) {
        utils_1.logger.error({ error: error.message });
        throw new Error(error.message || `Cannot delete car.`);
    }
}
exports.deleteCarHandler = deleteCarHandler;
//# sourceMappingURL=handlers.js.map