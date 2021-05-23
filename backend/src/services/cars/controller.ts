import { FastifyReply } from 'fastify';

import { logger } from '../../utils';

import { CarsModel } from './model';
import { CreateCarRequest, DeteleCarRequest, GetCarsRequest } from './types';

export async function getCarsHandler(_req: GetCarsRequest, reply: FastifyReply): Promise<void> {
  try {
    const cars = await CarsModel.find({});

    reply.code(200).send({ data: cars });
  } catch (error) {
    reply.code(500).send({ data: 'Cannot get cars.' });
  }
}

export async function createCarHandler(req: CreateCarRequest, reply: FastifyReply): Promise<void> {
  try {
    const { licensePlate } = req.body;
    const data = await CarsModel.create({ licensePlate });

    reply.code(200).send({ data });
  } catch (error) {
    logger.error({ error: error.message });
    throw new Error(`Cannot create car or maybe car already exists.`);
  }
}

export async function deleteCarHandler(req: DeteleCarRequest, reply: FastifyReply): Promise<void> {
  try {
    const { carId } = req.params;

    const carDeleted = await CarsModel.findByIdAndDelete({ _id: carId });

    if (!carDeleted) {
      throw new Error(`Cannot delete car.`);
    }

    reply.code(200).send({ data: true });
  } catch (error) {
    logger.error({ error: error.message });
    throw new Error(error.message || `Cannot delete car.`);
  }
}
