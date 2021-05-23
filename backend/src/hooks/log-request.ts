import { FastifyReply, FastifyRequest } from 'fastify';
import { logger } from '../utils';

export async function logRequestHook(req: FastifyRequest, _reply: FastifyReply) {
  logger.info(`${req.method} ${req.url}`);
}
