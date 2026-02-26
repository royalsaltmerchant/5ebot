"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClient = void 0;
const dotenv_1 = require("dotenv");
const path_1 = require("path");
(0, dotenv_1.config)({ path: (0, path_1.resolve)(__dirname, '../.env') });
const express_1 = __importDefault(require("express"));
const routes_js_1 = __importDefault(require("./api/routes.js"));
const redis_1 = require("redis");
const env_js_1 = require("./lib/env.js");
const logger_js_1 = require("./lib/logger.js");
(0, env_js_1.validateRequiredEnv)();
const app = (0, express_1.default)();
app.set('trust proxy', true);
app.use(logger_js_1.requestLogger);
app.use(express_1.default.static("public"));
app.get('/healthz', (_req, res) => {
    return res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
    });
});
app.get('/readyz', (_req, res) => {
    const missingEnv = (0, env_js_1.getMissingRequiredEnv)();
    const redisReady = exports.redisClient.isReady;
    const ready = missingEnv.length === 0 && redisReady;
    return res.status(ready ? 200 : 503).json({
        status: ready ? 'ready' : 'not_ready',
        redisReady,
        missingEnv,
        timestamp: new Date().toISOString(),
    });
});
app.use('/', routes_js_1.default);
exports.redisClient = (0, redis_1.createClient)();
exports.redisClient.on('error', err => (0, logger_js_1.logError)('redis_client_error', err));
exports.redisClient.connect().catch((err) => {
    (0, logger_js_1.logError)('redis_connect_failed', err);
});
const port = Number(process.env.PORT) || 3000;
app.listen(port, () => {
    (0, logger_js_1.log)('info', 'server_listening', { port });
});
process.on('unhandledRejection', (reason) => {
    (0, logger_js_1.logError)('unhandled_rejection', reason);
});
process.on('uncaughtException', (err) => {
    (0, logger_js_1.logError)('uncaught_exception', err);
});
