import { config } from 'dotenv';
import { resolve } from 'path';
// configure .env
config({ path: resolve(__dirname, '../.env') });
import express from 'express'
import routes from './api/routes.js'
import { createClient } from 'redis';
import { getMissingRequiredEnv, validateRequiredEnv } from './lib/env.js';
import { log, logError, requestLogger } from './lib/logger.js';

validateRequiredEnv();

// Create and configure express app
const app = express();
app.set('trust proxy', true);
app.use(requestLogger);

// Static
app.use(express.static("public"));

app.get('/healthz', (_req, res) => {
  return res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

app.get('/readyz', (_req, res) => {
  const missingEnv = getMissingRequiredEnv();
  const redisReady = redisClient.isReady;
  const ready = missingEnv.length === 0 && redisReady;

  return res.status(ready ? 200 : 503).json({
    status: ready ? 'ready' : 'not_ready',
    redisReady,
    missingEnv,
    timestamp: new Date().toISOString(),
  });
});

// add routes
app.use('/', routes)

// Setup redis
export const redisClient = createClient();
redisClient.on('error', err => logError('redis_client_error', err));
redisClient.connect().catch((err) => {
  logError('redis_connect_failed', err);
});

const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  log('info', 'server_listening', { port });
});

process.on('unhandledRejection', (reason) => {
  logError('unhandled_rejection', reason);
});

process.on('uncaughtException', (err) => {
  logError('uncaught_exception', err);
});
