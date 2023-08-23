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
const app = (0, express_1.default)();
app.use(express_1.default.static("public"));
app.use('/', routes_js_1.default);
app.use(express_1.default.json());
exports.redisClient = (0, redis_1.createClient)();
exports.redisClient.on('error', err => console.log('Redis Client Error', err));
exports.redisClient.connect();
app.listen(3000, () => {
    console.log('Listening on port http://localhost:3000');
});
