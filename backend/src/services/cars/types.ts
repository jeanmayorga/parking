import { FastifyRequest } from 'fastify';

export type GetCarsRequest = FastifyRequest & {
  params: {
    limit: number;
  };
};

export type CreateCarRequest = FastifyRequest & {
  body: {
    licensePlate: string;
  };
};

export type DeteleCarRequest = FastifyRequest & {
  params: {
    carId: string;
  };
};
