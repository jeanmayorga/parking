"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCarSchema = exports.createCarSchema = exports.getCarsSchema = exports.carSchema = void 0;
exports.carSchema = {
    type: 'object',
    properties: {
        _id: { type: 'string' },
        licensePlate: { type: 'string' },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' },
    },
};
exports.getCarsSchema = {
    tags: ['cars'],
    summary: 'Get a list of cars created',
    response: {
        200: {
            type: 'object',
            properties: {
                data: {
                    type: 'array',
                    items: exports.carSchema,
                },
            },
        },
    },
};
exports.createCarSchema = {
    tags: ['cars'],
    summary: 'Create a new car in the cars table',
    body: {
        type: 'object',
        required: ['licensePlate'],
        properties: {
            licensePlate: {
                type: 'string',
            },
        },
    },
    response: {
        200: {
            description: 'Success',
            type: 'object',
            properties: {
                data: exports.carSchema,
            },
        },
    },
};
exports.deleteCarSchema = {
    tags: ['cars'],
    summary: 'Delete a car in the cars table',
    response: {
        200: {
            description: 'Success',
            type: 'object',
            properties: {
                data: exports.carSchema,
            },
        },
    },
};
//# sourceMappingURL=schemas.js.map