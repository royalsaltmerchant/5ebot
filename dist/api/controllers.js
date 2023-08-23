"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCommands = exports.deleteCommand = exports.getCommands = void 0;
const discordUtils_js_1 = require("./discordUtils.js");
const getSlashCommandBody_js_1 = __importDefault(require("./getSlashCommandBody.js"));
const appId = process.env.APP_ID;
const globalEndpoint = `applications/${appId}/commands`;
function getCommands(req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const discordRes = yield (0, discordUtils_js_1.DiscordRequest)(globalEndpoint, {
                method: 'GET',
            });
            const result = yield discordRes.json();
            return res.send(result);
        }
        catch (err) {
            return res.send({ message: "Failed to get slash commands", error: err });
        }
    });
}
exports.getCommands = getCommands;
function deleteCommand(req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const discordRes = yield (0, discordUtils_js_1.DiscordRequest)(`${globalEndpoint}/${req.params.id}`, {
                method: 'DELETE',
            });
            const resJson = yield discordRes.json();
            return res.send({ message: 'deleted', details: resJson });
        }
        catch (err) {
            return res.send({ message: "Failed to get delete command", error: err });
        }
    });
}
exports.deleteCommand = deleteCommand;
function createCommands(req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        const slashCommandsList = [
            "initiative",
        ];
        const responseList = [];
        yield Promise.all(slashCommandsList.map((slashCommandName) => __awaiter(this, void 0, void 0, function* () {
            const commandBody = yield (0, getSlashCommandBody_js_1.default)(slashCommandName);
            try {
                if (!commandBody)
                    throw { message: "missing command body" };
                const res = yield (0, discordUtils_js_1.DiscordRequest)(globalEndpoint, {
                    method: 'POST',
                    body: commandBody,
                });
                const resJson = yield res.json();
                responseList.push({ slashCommandName, resJson, message: 'success' });
            }
            catch (err) {
                console.log(err);
                responseList.push({ slashCommandName, error: err, message: "Failed" });
            }
        })));
        return res.send({ list: responseList });
    });
}
exports.createCommands = createCommands;
