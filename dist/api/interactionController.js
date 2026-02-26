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
Object.defineProperty(exports, "__esModule", { value: true });
const discord_interactions_1 = require("discord-interactions");
const dice_js_1 = require("../lib/dice.js");
const info_js_1 = require("../lib/info.js");
const initiative_js_1 = require("../lib/initiative.js");
const query_js_1 = require("../lib/query.js");
const logger_js_1 = require("../lib/logger.js");
function interactionsController(req, res, _next) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { type, data } = req.body;
            if (type === discord_interactions_1.InteractionType.PING) {
                return res.send({ type: discord_interactions_1.InteractionResponseType.PONG });
            }
            if (type === discord_interactions_1.InteractionType.APPLICATION_COMMAND) {
                switch (data.name) {
                    case "help":
                        return res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: "Please visit this documentation site to better understand the usage of the commands: https://5ebot.com/",
                            },
                        });
                    case "roll":
                        (0, dice_js_1.rollResponse)(data, res);
                        return;
                    case "in":
                        (0, initiative_js_1.initiativeResponse)(req, res);
                        return;
                    case "skills":
                        (0, info_js_1.skillsResponse)(data, res);
                        return;
                    case "classes":
                        (0, info_js_1.classesResponse)(data, res);
                        return;
                    case "subclasses":
                        (0, info_js_1.subClassesResponse)(data, res);
                        return;
                    case "races":
                        (0, info_js_1.racesResponse)(data, res);
                        return;
                    case "subraces":
                        (0, info_js_1.subRacesResponse)(data, res);
                        return;
                    case "ability-scores":
                        (0, info_js_1.abilityScoresResponse)(data, res);
                        return;
                    case "alignments":
                        (0, info_js_1.alignmentsResponse)(data, res);
                        return;
                    case "languages":
                        (0, info_js_1.languagesResponse)(data, res);
                        return;
                    case "conditions":
                        (0, info_js_1.conditionsResponse)(data, res);
                        return;
                    case "spells":
                        (0, info_js_1.spellsResponse)(data, res);
                        return;
                    case "proficiencies":
                        (0, info_js_1.proficienciesResponse)(data, res);
                        return;
                    case "features":
                        (0, info_js_1.featuresResponse)(data, res);
                        return;
                    case "traits":
                        (0, info_js_1.traitsResponse)(data, res);
                        return;
                    case "equipment":
                        (0, info_js_1.equipmentResponse)(data, res);
                        return;
                    case "magicitems":
                        (0, info_js_1.magicItemsResponse)(data, res);
                        return;
                    case "monsters":
                        (0, info_js_1.monstersResponse)(data, res);
                        return;
                    case "query": {
                        const question = data.options[0].value;
                        const briefOption = data.options.find((o) => o.name === "brief");
                        const short = (briefOption === null || briefOption === void 0 ? void 0 : briefOption.value) === true;
                        const appId = process.env.APP_ID;
                        const token = req.body.token;
                        (0, query_js_1.handleQueryResponse)(question, short, appId, token).catch((err) => {
                            var _a;
                            (0, logger_js_1.logError)("query_background_failed", err, {
                                command: "query",
                                guildId: (_a = req.body) === null || _a === void 0 ? void 0 : _a.guild_id,
                                requestId: req.requestId,
                            });
                        });
                        return res.send({
                            type: discord_interactions_1.InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
                        });
                    }
                    default:
                        return res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: "Unknown command.",
                            },
                        });
                }
            }
            if (type === discord_interactions_1.InteractionType.MESSAGE_COMPONENT) {
                switch (data.custom_id) {
                    case "select_spell":
                        (0, info_js_1.selectSpellResponse)(data, res);
                        return;
                    case "select_proficiency":
                        (0, info_js_1.selectProficiencyResponse)(data, res);
                        return;
                    case "select_feature":
                        (0, info_js_1.selectFeatureResponse)(data, res);
                        return;
                    case "select_trait":
                        (0, info_js_1.selectTrait)(data, res);
                        return;
                    case "select_magicitem":
                        (0, info_js_1.selectMagicItemResponse)(data, res);
                        return;
                    case "select_equipment":
                        (0, info_js_1.selectEquipmentResponse)(data, res);
                        return;
                    case "select_monster":
                        (0, info_js_1.selectMonster)(data, res);
                        return;
                    default:
                        return res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: "There was an error",
                            },
                        });
                }
            }
            return res.send({
                type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    content: "Unsupported interaction type.",
                },
            });
        }
        catch (err) {
            (0, logger_js_1.logError)("interaction_controller_failed", err, {
                interactionType: (_a = req.body) === null || _a === void 0 ? void 0 : _a.type,
                command: (_c = (_b = req.body) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.name,
                guildId: (_d = req.body) === null || _d === void 0 ? void 0 : _d.guild_id,
                requestId: req.requestId,
            });
            return res.send({
                type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    content: "There was an error",
                },
            });
        }
    });
}
exports.default = interactionsController;
