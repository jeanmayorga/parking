import fastify from 'fastify';
import fastifySwagger from 'fastify-swagger';

import { env } from './config';
import { connectDatabase } from './database';
import { logger } from './utils';
import { carsRoutes } from './services';
import { logRequestHook, logResponseHook } from './hooks';
import { carSchema } from './services/cars/schemas';

export async function main() {
  await connectDatabase();
  const app = fastify();

  app.addHook('onRequest', logRequestHook);
  app.addHook('onResponse', logResponseHook);

  app.register(fastifySwagger, {
    routePrefix: '/docs',
    exposeRoute: true,
    swagger: {
      info: {
        title: 'Parking API',
        description: 'Api for parking app',
        version: '1.0.0',
      },
      host: 'localhost:3001',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      definitions: {
        Car: carSchema,
      },
      tags: [
        { name: 'auth', description: 'Auth endpoints' },
        { name: 'cars', description: 'Cars endpoints' },
      ],
    },
  });

  app.register(carsRoutes);

  app.listen(env.PORT, error => {
    if (error) {
      logger.error(`❌ Error: ${error}`);
      return;
    }

    logger.info(`🌎 Environment: ${env.NODE_ENV}`);
    logger.info(`🚀 Server is running on http://localhost:${env.PORT}/`);
    logger.info(`🚀 Server Docs is running on http://localhost:${env.PORT}/docs`);
  });

  return app;
}

if (require.main === module) {
  main();
} else {
  // required as a module => executed on aws lambda
}
