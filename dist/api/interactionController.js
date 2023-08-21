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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_interactions_1 = require("discord-interactions");
var fetchWrapper_js_1 = __importDefault(require("../lib/fetchWrapper.js"));
var dataUtils_js_1 = require("../lib/dataUtils.js");
var dice_js_1 = require("../lib/dice.js");
var character_js_1 = require("../lib/character.js");
function interactionsController(req, res, _next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, type, data, spellData, formattedData, proficiencyData, formattedData, featureData, formattedData, traitData, formattedData, magicItemData, formattedData, equipmentData, formattedData, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 13, , 14]);
                    _a = req.body, type = _a.type, data = _a.data;
                    if (type === discord_interactions_1.InteractionType.PING) {
                        return [2, res.send({ type: discord_interactions_1.InteractionResponseType.PONG })];
                    }
                    if (type === discord_interactions_1.InteractionType.APPLICATION_COMMAND) {
                        switch (data.name) {
                            case "roll":
                                (0, dice_js_1.rollResponse)(data, res);
                                return [2];
                            case "skills":
                                (0, character_js_1.skillsResponse)(data, res);
                                return [2];
                            case "ability-scores":
                                (0, character_js_1.abilityScoresResponse)(data, res);
                                return [2];
                            case "alignments":
                                (0, character_js_1.alignmentsResponse)(data, res);
                                return [2];
                            case "languages":
                                (0, character_js_1.languagesResponse)(data, res);
                                return [2];
                            case "conditions":
                                (0, character_js_1.conditionsResponse)(data, res);
                                return [2];
                            case "spells":
                                (0, character_js_1.spellsResponse)(data, res);
                                return [2];
                            case "proficiencies":
                                (0, character_js_1.proficienciesResponse)(data, res);
                                return [2];
                            case "features":
                                (0, character_js_1.featuresResponse)(data, res);
                                return [2];
                            case "traits":
                                (0, character_js_1.traitsResponse)(data, res);
                                return [2];
                            case "equipment":
                                (0, character_js_1.equipmentResponse)(data, res);
                                return [2];
                            case "magicitems":
                                (0, character_js_1.magicItemsResponse)(data, res);
                                return [2];
                        }
                    }
                    if (!(type === discord_interactions_1.InteractionType.MESSAGE_COMPONENT)) return [3, 12];
                    if (!(data.custom_id === "select_spell")) return [3, 2];
                    return [4, (0, fetchWrapper_js_1.default)("https://www.dnd5eapi.co/api/spells/".concat(data.values[0]))];
                case 1:
                    spellData = _b.sent();
                    formattedData = "**".concat(spellData.name, "** - ");
                    if (spellData.school && spellData.school.name)
                        formattedData += spellData.school.name;
                    if (spellData.level)
                        formattedData += "\n**Level:** ".concat(spellData.level);
                    if (spellData.classes && spellData.classes.length !== 0)
                        formattedData += "\n**Classes:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(spellData.classes, "name"));
                    if (spellData.casting_time)
                        formattedData += "\n**Casting Time:** ".concat(spellData.casting_time);
                    if (spellData.range)
                        formattedData += "\n**Range:** ".concat(spellData.range);
                    if (spellData.duration)
                        formattedData += "\n**Duration:** ".concat(spellData.duration);
                    if (spellData.concentration)
                        formattedData += "\n**Concentration:** true";
                    if (spellData.damage && spellData.damage.damage_type.name)
                        formattedData += "\n**Damage Type:** ".concat(spellData.damage.damage_type.name);
                    if (spellData.area_of_effect)
                        formattedData += "\n**Area of Effect:** **Type:** ".concat(spellData.area_of_effect.type, ", **Size:** ").concat(spellData.area_of_effect.size);
                    if (spellData.desc)
                        formattedData += "\n**Description:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(spellData.desc, null), " ");
                    if (spellData.higher_level.length &&
                        spellData.higher_level.length !== 0)
                        formattedData += (0, dataUtils_js_1.returnArrayDataAsString)(spellData.higher_level, null);
                    return [2, res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: formattedData,
                            },
                        })];
                case 2:
                    if (!(data.custom_id === "select_proficiency")) return [3, 4];
                    return [4, (0, fetchWrapper_js_1.default)("https://www.dnd5eapi.co/api/proficiencies/".concat(data.values[0]))];
                case 3:
                    proficiencyData = _b.sent();
                    formattedData = "**".concat(proficiencyData.name, "** - ");
                    if (proficiencyData.type)
                        formattedData += "\n**Type:** ".concat(proficiencyData.type);
                    if (proficiencyData.classes && proficiencyData.classes.length)
                        formattedData += "\n**Classes:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(proficiencyData.classes, "name"));
                    if (proficiencyData.data && proficiencyData.races.length)
                        formattedData += "\n**Races:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(proficiencyData.races, "name"));
                    return [2, res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: formattedData,
                            },
                        })];
                case 4:
                    if (!(data.custom_id === "select_feature")) return [3, 6];
                    return [4, (0, fetchWrapper_js_1.default)("https://www.dnd5eapi.co/api/features/".concat(data.values[0]))];
                case 5:
                    featureData = _b.sent();
                    formattedData = "**".concat(featureData.name, "**");
                    if (featureData.level)
                        formattedData += "\n**Level:** ".concat(featureData.level);
                    if (featureData.desc)
                        formattedData += "\n**Description:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(featureData.desc, null));
                    if (featureData.class)
                        formattedData += "\n**Class:** ".concat(featureData.class.name);
                    if (featureData.subclass)
                        formattedData += "\n**Subclass:** ".concat(featureData.subclass.name);
                    if (featureData.prerequisites && featureData.prerequisites.length)
                        formattedData += "\n**Prerequisites:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(featureData.prerequisites, "name"));
                    return [2, res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: formattedData,
                            },
                        })];
                case 6:
                    if (!(data.custom_id === "select_trait")) return [3, 8];
                    return [4, (0, fetchWrapper_js_1.default)("https://www.dnd5eapi.co/api/traits/".concat(data.values[0]))];
                case 7:
                    traitData = _b.sent();
                    formattedData = "**".concat(traitData.name, "**");
                    if (traitData.races && traitData.races.length !== 0)
                        formattedData += "\n**Races:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(traitData.races, "name"));
                    if (traitData.subraces && traitData.subraces.length !== 0)
                        formattedData += "\n**Sub-Races:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(traitData.subraces, "name"));
                    if (traitData.desc)
                        formattedData += "\n**Description:** ".concat(traitData.desc);
                    return [2, res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: formattedData,
                            },
                        })];
                case 8:
                    if (!(data.custom_id === "select_magicitem")) return [3, 10];
                    return [4, (0, fetchWrapper_js_1.default)("https://www.dnd5eapi.co/api/magic-items/".concat(data.values[0]))];
                case 9:
                    magicItemData = _b.sent();
                    formattedData = "**".concat(magicItemData.name, "**");
                    if (magicItemData.desc)
                        formattedData += "\n**Description:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(magicItemData.desc, null));
                    if (magicItemData.equipment_category)
                        formattedData += "\n**Equipment Category:** ".concat(magicItemData.equipment_category.name);
                    if (magicItemData.rarity)
                        formattedData += "\n**Rarity:** ".concat(magicItemData.rarity.name);
                    if (magicItemData.variants && magicItemData.variants.length)
                        formattedData += "\n**Variants:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(magicItemData.variants, "name"));
                    if (magicItemData.variant)
                        formattedData += "\n**Is a variant:** ".concat(magicItemData.variant);
                    return [2, res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: formattedData,
                            },
                        })];
                case 10:
                    if (!(data.custom_id === "select_equipment")) return [3, 12];
                    return [4, (0, fetchWrapper_js_1.default)("https://www.dnd5eapi.co/api/equipment/".concat(data.values[0]))];
                case 11:
                    equipmentData = _b.sent();
                    formattedData = "**".concat(equipmentData.name, "**");
                    if (equipmentData.weight)
                        formattedData += "\n**Weight:** ".concat(equipmentData.weight);
                    if (equipmentData.equipment_category)
                        formattedData += "\n**Equipment Category:** ".concat(equipmentData.equipment_category.name);
                    if (equipmentData.weapon_category)
                        formattedData += "\n**Weapon Category:** ".concat(equipmentData.weapon_category);
                    if (equipmentData.weapon_range)
                        formattedData += "\n**Weapon Range:** ".concat(equipmentData.weapon_range);
                    if (equipmentData.range)
                        formattedData += "\n**Weapon Range:** Normal:".concat(equipmentData.range.normal, ", Long: ").concat(equipmentData.range.long);
                    if (equipmentData.damage)
                        formattedData += "\n**Damage:** Dice: ".concat(equipmentData.damage.damage_dice, ", Type: ").concat(equipmentData.damage.damage_type.name);
                    if (equipmentData.two_handed_damage)
                        formattedData += "\n**Two Handed Damage:** Dice: ".concat(equipmentData.two_handed_damage.damage_dice, ", Type: ").concat(equipmentData.two_handed_damage.damage_type.name);
                    if (equipmentData.armor_category)
                        formattedData += "\n**Armor Category:** ".concat(equipmentData.armor_category);
                    if (equipmentData.armor_class)
                        formattedData += "\n**Armor Class:** ".concat((0, dataUtils_js_1.getArmorClassInfo)(equipmentData));
                    if (equipmentData.str_minimum)
                        formattedData += "\n**STR Minimum:** ".concat(equipmentData.str_minimum);
                    if (equipmentData.stealth_disadvantage)
                        formattedData += "\n**Stealth Disadvantage:** ".concat(equipmentData.stealth_disadvantage);
                    if (equipmentData.gear_category)
                        formattedData += "\n**Gear Category:** ".concat(equipmentData.gear_category.name);
                    if (equipmentData.contents && equipmentData.contents.length)
                        formattedData += "\n**Contents:** ".concat((0, dataUtils_js_1.getContentsInfo)(equipmentData));
                    if (equipmentData.properties && equipmentData.properties.length)
                        formattedData += "\n**Properties:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(equipmentData.properties, "name"));
                    if (equipmentData.desc && equipmentData.desc.length)
                        formattedData += "\n**Description:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(equipmentData.desc, null));
                    return [2, res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: formattedData,
                            },
                        })];
                case 12: return [3, 14];
                case 13:
                    err_1 = _b.sent();
                    return [2, console.log(err_1)];
                case 14: return [2];
            }
        });
    });
}
exports.default = interactionsController;
