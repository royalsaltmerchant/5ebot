"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var discord_interactions_1 = require("discord-interactions");
var controllers_js_1 = require("./controllers.js");
var interactionController_js_1 = __importDefault(require("./interactionController.js"));
var router = express_1.default.Router();
router.get('/', function (_req, res) {
    return res.send({ message: 'healthy' });
});
router.get('/get_all_commands', controllers_js_1.getCommands);
router.post('/interactions', (0, discord_interactions_1.verifyKeyMiddleware)(process.env.PUBLIC_KEY), interactionController_js_1.default);
exports.default = router;
