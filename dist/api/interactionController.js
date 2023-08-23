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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_interactions_1 = require("discord-interactions");
var dice_js_1 = require("../lib/dice.js");
var info_js_1 = require("../lib/info.js");
var initiative_js_1 = require("../lib/initiative.js");
function interactionsController(req, res, _next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, type, data;
        return __generator(this, function (_b) {
            try {
                _a = req.body, type = _a.type, data = _a.data;
                if (type === discord_interactions_1.InteractionType.PING) {
                    return [2, res.send({ type: discord_interactions_1.InteractionResponseType.PONG })];
                }
                if (type === discord_interactions_1.InteractionType.APPLICATION_COMMAND) {
                    switch (data.name) {
                        case "help":
                            return [2, res.send({
                                    type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                                    data: {
                                        content: "Please visit this documentation site to better understand the usage of the commands: https://5ebot.com/",
                                    },
                                })];
                        case "roll":
                            (0, dice_js_1.rollResponse)(data, res);
                            return [2];
                        case "in":
                            (0, initiative_js_1.initiativeResponse)(data, res);
                            return [2];
                        case "skills":
                            (0, info_js_1.skillsResponse)(data, res);
                            return [2];
                        case "classes":
                            (0, info_js_1.classesResponse)(data, res);
                            return [2];
                        case "subclasses":
                            (0, info_js_1.subClassesResponse)(data, res);
                            return [2];
                        case "races":
                            (0, info_js_1.racesResponse)(data, res);
                            return [2];
                        case "subraces":
                            (0, info_js_1.subRacesResponse)(data, res);
                            return [2];
                        case "ability-scores":
                            (0, info_js_1.abilityScoresResponse)(data, res);
                            return [2];
                        case "alignments":
                            (0, info_js_1.alignmentsResponse)(data, res);
                            return [2];
                        case "languages":
                            (0, info_js_1.languagesResponse)(data, res);
                            return [2];
                        case "conditions":
                            (0, info_js_1.conditionsResponse)(data, res);
                            return [2];
                        case "spells":
                            (0, info_js_1.spellsResponse)(data, res);
                            return [2];
                        case "proficiencies":
                            (0, info_js_1.proficienciesResponse)(data, res);
                            return [2];
                        case "features":
                            (0, info_js_1.featuresResponse)(data, res);
                            return [2];
                        case "traits":
                            (0, info_js_1.traitsResponse)(data, res);
                            return [2];
                        case "equipment":
                            (0, info_js_1.equipmentResponse)(data, res);
                            return [2];
                        case "magicitems":
                            (0, info_js_1.magicItemsResponse)(data, res);
                            return [2];
                        case "monsters":
                            (0, info_js_1.monstersResponse)(data, res);
                            return [2];
                    }
                }
                if (type === discord_interactions_1.InteractionType.MESSAGE_COMPONENT) {
                    switch (data.custom_id) {
                        case "select_spell":
                            (0, info_js_1.selectSpellResponse)(data, res);
                            return [2];
                        case "select_proficiency":
                            (0, info_js_1.selectProficiencyResponse)(data, res);
                            return [2];
                        case "select_feature":
                            (0, info_js_1.selectFeatureResponse)(data, res);
                            return [2];
                        case "select_trait":
                            (0, info_js_1.selectTrait)(data, res);
                            return [2];
                        case "select_magicitem":
                            (0, info_js_1.selectMagicItemResponse)(data, res);
                            return [2];
                        case "select_equipment":
                            (0, info_js_1.selectEquipmentResponse)(data, res);
                            return [2];
                        case "select_monster":
                            (0, info_js_1.selectMonster)(data, res);
                            return [2];
                        default:
                            return [2, res.send({
                                    type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                                    data: {
                                        content: "There was an error",
                                    },
                                })];
                    }
                }
            }
            catch (err) {
                console.log(err);
                return [2, res.send({
                        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                        data: {
                            content: "There was an error",
                        },
                    })];
            }
            return [2];
        });
    });
}
exports.default = interactionsController;
