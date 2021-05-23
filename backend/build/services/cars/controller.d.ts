import { FastifyReply } from 'fastify';
import { CreateCarRequest, DeteleCarRequest, GetCarsRequest } from './types';
export declare function getCarsHandler(_req: GetCarsRequest, reply: FastifyReply): Promise<void>;
export declare function createCarHandler(req: CreateCarRequest, reply: FastifyReply): Promise<void>;
export declare function deleteCarHandler(req: DeteleCarRequest, reply: FastifyReply): Promise<void>;
