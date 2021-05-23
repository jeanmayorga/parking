import { FastifyReply, FastifyRequest } from 'fastify';
declare type GetCarsRequest = {
    params: {
        limit: number;
    };
};
export declare function getCars(_req: FastifyRequest & GetCarsRequest, reply: FastifyReply): Promise<void>;
declare type CreateCarRequest = {
    body: {
        licensePlate: string;
    };
};
export declare function createCarHandler(req: FastifyRequest & CreateCarRequest, reply: FastifyReply): Promise<void>;
declare type DeteleCarRequest = {
    params: {
        carId: string;
    };
};
export declare function deleteCarHandler(req: FastifyRequest & DeteleCarRequest, reply: FastifyReply): Promise<void>;
export {};
