"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const discord_interactions_1 = require("discord-interactions");
const controllers_js_1 = require("./controllers.js");
const interactionController_js_1 = __importDefault(require("./interactionController.js"));
var router = express_1.default.Router();
router.get('/', function (_req, res) {
    return res.sendFile("../public/index.html");
});
router.get('/index', function (_req, res) {
    return res.sendFile("../public/index.html");
});
router.get('/get_all_commands', controllers_js_1.getCommands);
router.post('/interactions', (0, discord_interactions_1.verifyKeyMiddleware)(process.env.PUBLIC_KEY), interactionController_js_1.default);
exports.default = router;
