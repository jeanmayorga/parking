import dotenv from 'dotenv';
import path from 'path';
import { cleanEnv, str } from 'envalid';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const env = cleanEnv(process.env, {
  PORT: str({ default: '3000' }),
  NODE_ENV: str({
    choices: ['development', 'production'],
    default: 'development',
  }),
  X_MONGO_URL: str(),
  X_MONGO_DATABASE: str(),
});
