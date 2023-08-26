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
function interactionsController(req, res, _next) {
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
        }
        catch (err) {
            console.log(err);
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
