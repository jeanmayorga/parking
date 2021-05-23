import { FastifyRequest } from 'fastify';
export declare type GetCarsRequest = FastifyRequest & {
    params: {
        limit: number;
    };
};
export declare type CreateCarRequest = FastifyRequest & {
    body: {
        licensePlate: string;
    };
};
export declare type DeteleCarRequest = FastifyRequest & {
    params: {
        carId: string;
    };
};
