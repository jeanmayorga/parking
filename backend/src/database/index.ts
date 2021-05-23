import mongoose from 'mongoose';

import { logger } from '../utils';
import { env } from '../config';

let isConnected = false;

export async function connectDatabase(): Promise<boolean> {
  if (isConnected) {
    logger.info('📚 Database connected from cache.');
    return true;
  }

  try {
    logger.info('📚 Initializing database.');

    await mongoose.connect(env.X_MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: env.X_MONGO_DATABASE,
      useCreateIndex: true,
    });
    isConnected = true;
    logger.info('📚 Database connected.');

    return true;
  } catch (error) {
    logger.child({ error }).error('❌ Database connection failed.');
    return false;
  }
}
