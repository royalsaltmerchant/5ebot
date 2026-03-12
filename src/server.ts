import { config } from 'dotenv';
import { statSync } from 'fs';
import { resolve } from 'path';
// configure .env
config({ path: resolve(__dirname, '../.env') });
import express from 'express'
import routes from './api/routes.js'
import { createClient } from 'redis';
import { getMissingRequiredEnv, validateRequiredEnv } from './lib/env.js';
import { log, logError, requestLogger } from './lib/logger.js';

validateRequiredEnv();

const SITEMAP_ENTRIES = [
  {
    loc: 'https://5ebot.com/',
    changefreq: 'weekly',
    priority: '1.0',
    publicFile: 'index.html',
  },
  {
    loc: 'https://5ebot.com/dnd-discord-bot/',
    changefreq: 'weekly',
    priority: '0.8',
    publicFile: 'dnd-discord-bot/index.html',
  },
  {
    loc: 'https://5ebot.com/dnd-dice-bot-discord/',
    changefreq: 'weekly',
    priority: '0.8',
    publicFile: 'dnd-dice-bot-discord/index.html',
  },
  {
    loc: 'https://5ebot.com/5e-bot/',
    changefreq: 'weekly',
    priority: '0.8',
    publicFile: '5e-bot/index.html',
  },
  {
    loc: 'https://5ebot.com/how-to-roll-dice-in-discord-for-dnd/',
    changefreq: 'weekly',
    priority: '0.7',
    publicFile: 'how-to-roll-dice-in-discord-for-dnd/index.html',
  },
  {
    loc: 'https://5ebot.com/discord-initiative-tracker-for-dnd/',
    changefreq: 'weekly',
    priority: '0.7',
    publicFile: 'discord-initiative-tracker-for-dnd/index.html',
  },
] as const;

function getPublicFileLastModified(publicFile: string): string {
  const filePath = resolve(__dirname, '../public', publicFile);
  return statSync(filePath).mtime.toISOString().split('T')[0];
}

function buildSitemapXml(): string {
  const urls = SITEMAP_ENTRIES.map((entry) => {
    const lastmod = getPublicFileLastModified(entry.publicFile);
    return [
      '  <url>',
      `    <loc>${entry.loc}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${entry.changefreq}</changefreq>`,
      `    <priority>${entry.priority}</priority>`,
      '  </url>',
    ].join('\n');
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

// Create and configure express app
const app = express();
app.set('trust proxy', true);
app.use(requestLogger);

app.get('/sitemap.xml', (_req, res) => {
  return res
    .status(200)
    .type('application/xml')
    .send(buildSitemapXml());
});

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
