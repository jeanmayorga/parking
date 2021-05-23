import { FastifyReply, FastifyRequest } from 'fastify';
import { logger } from '../utils';

export async function logResponseHook(req: FastifyRequest, reply: FastifyReply) {
  const responseTime = reply.getResponseTime();
  logger.info(
    {
      responseTime,
    },
    `${req.method} ${req.url} -> ${reply.statusCode}`,
  );
}
