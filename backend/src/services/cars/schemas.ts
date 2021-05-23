import { FastifySchema } from 'fastify';

export const carSchema = {
  type: 'object',
  properties: {
    _id: { type: 'string' },
    licensePlate: { type: 'string' },
    createdAt: { type: 'string' },
    updatedAt: { type: 'string' },
  },
};

export const getCarsSchema: FastifySchema = {
  tags: ['cars'],
  summary: 'Get a list of cars created',
  response: {
    200: {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: carSchema,
        },
      },
    },
  },
};

export const createCarSchema: FastifySchema = {
  tags: ['cars'],
  summary: 'Create a new car in the cars table',
  body: {
    type: 'object',
    required: ['licensePlate'],
    properties: {
      licensePlate: {
        type: 'string',
      },
    },
  },
  response: {
    200: {
      description: 'Success',
      type: 'object',
      properties: {
        data: carSchema,
      },
    },
  },
};

export const deleteCarSchema: FastifySchema = {
  tags: ['cars'],
  summary: 'Delete a car in the cars table',
  response: {
    200: {
      description: 'Success',
      type: 'object',
      properties: {
        data: carSchema,
      },
    },
  },
};
