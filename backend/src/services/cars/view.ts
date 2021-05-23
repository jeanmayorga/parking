import { FastifyInstance } from 'fastify';

import { createCarHandler, deleteCarHandler, getCarsHandler } from './controller';
import { createCarSchema, deleteCarSchema, getCarsSchema } from './schemas';

export async function carsRoutes(app: FastifyInstance) {
  app.route({
    method: 'GET',
    url: '/cars',
    schema: getCarsSchema,
    handler: getCarsHandler,
  });

  app.route({
    method: 'POST',
    url: '/cars',
    schema: createCarSchema,
    handler: createCarHandler,
  });

  app.route({
    method: 'DELETE',
    url: '/cars/:carId',
    schema: deleteCarSchema,
    handler: deleteCarHandler,
  });
}
