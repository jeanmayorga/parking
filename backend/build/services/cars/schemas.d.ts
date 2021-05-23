import { FastifySchema } from 'fastify';
export declare const carSchema: {
    type: string;
    properties: {
        _id: {
            type: string;
        };
        licensePlate: {
            type: string;
        };
        createdAt: {
            type: string;
        };
        updatedAt: {
            type: string;
        };
    };
};
export declare const getCarsSchema: FastifySchema;
export declare const createCarSchema: FastifySchema;
export declare const deleteCarSchema: FastifySchema;
