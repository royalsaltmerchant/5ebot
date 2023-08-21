"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var path_1 = require("path");
(0, dotenv_1.config)({ path: (0, path_1.resolve)(__dirname, '../.env') });
var express_1 = __importDefault(require("express"));
var routes_js_1 = __importDefault(require("./api/routes.js"));
var app = (0, express_1.default)();
app.use(express_1.default.static("public"));
app.use('/', routes_js_1.default);
app.use(express_1.default.json());
app.listen(3000, function () {
    console.log('Listening on port http://localhost:3000');
});
