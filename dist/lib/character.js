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
exports.selectEquipmentResponse = exports.selectMagicItemResponse = exports.selectTrait = exports.selectFeatureResponse = exports.selectProficiencyResponse = exports.selectSpellResponse = exports.magicItemsResponse = exports.equipmentResponse = exports.traitsResponse = exports.featuresResponse = exports.proficienciesResponse = exports.spellsResponse = exports.conditionsResponse = exports.languagesResponse = exports.alignmentsResponse = exports.abilityScoresResponse = exports.skillsResponse = void 0;
var discord_interactions_1 = require("discord-interactions");
var spells_js_1 = __importDefault(require("../data/spells.js"));
var proficiencies_js_1 = __importDefault(require("../data/proficiencies.js"));
var features_js_1 = __importDefault(require("../data/features.js"));
var traits_js_1 = __importDefault(require("../data/traits.js"));
var equipment_js_1 = __importDefault(require("../data/equipment.js"));
var magicItems_js_1 = __importDefault(require("../data/magicItems.js"));
var search_js_1 = require("../lib/search.js");
var fetchWrapper_js_1 = __importDefault(require("../lib/fetchWrapper.js"));
var dataUtils_js_1 = require("../lib/dataUtils.js");
function skillsResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var skillData, returnInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, fetchWrapper_js_1.default)("https://www.dnd5eapi.co/api/skills/".concat(data.options[0].value))];
                case 1:
                    skillData = _a.sent();
                    returnInfo = "**".concat(skillData.name, "**\n\n").concat(skillData.desc, "\n\n**Ability Score:** ").concat(skillData.ability_score.name);
                    return [2, res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: returnInfo,
                            },
                        })];
            }
        });
    });
}
exports.skillsResponse = skillsResponse;
function abilityScoresResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var scoreData, returnInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, fetchWrapper_js_1.default)("https://www.dnd5eapi.co/api/ability-scores/".concat(data.options[0].value))];
                case 1:
                    scoreData = _a.sent();
                    returnInfo = "**".concat(scoreData.name, "**\n\n").concat((0, dataUtils_js_1.returnArrayDataAsString)(scoreData.desc, null));
                    if (scoreData.skills && scoreData.skills.length)
                        returnInfo += "\n**Skills:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(scoreData.skills, "name"));
                    return [2, res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: returnInfo,
                            },
                        })];
            }
        });
    });
}
exports.abilityScoresResponse = abilityScoresResponse;
function alignmentsResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var alignmentData, returnInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, fetchWrapper_js_1.default)("https://www.dnd5eapi.co/api/alignments/".concat(data.options[0].value))];
                case 1:
                    alignmentData = _a.sent();
                    returnInfo = "**".concat(alignmentData.name, "**\n\n").concat(alignmentData.desc);
                    return [2, res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: returnInfo,
                            },
                        })];
            }
        });
    });
}
exports.alignmentsResponse = alignmentsResponse;
function languagesResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var languageData, returnInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, fetchWrapper_js_1.default)("https://www.dnd5eapi.co/api/languages/".concat(data.options[0].value))];
                case 1:
                    languageData = _a.sent();
                    returnInfo = "**".concat(languageData.name, "**\n\n").concat(languageData.desc
                        ? (0, dataUtils_js_1.returnArrayDataAsString)(languageData.desc, null)
                        : "Description is missing", "\n\n**Typical Speakers:** ").concat(JSON.stringify(languageData.typical_speakers));
                    return [2, res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: returnInfo,
                            },
                        })];
            }
        });
    });
}
exports.languagesResponse = languagesResponse;
function conditionsResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var conditionData, returnInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, fetchWrapper_js_1.default)("https://www.dnd5eapi.co/api/conditions/".concat(data.options[0].value))];
                case 1:
                    conditionData = _a.sent();
                    returnInfo = "**".concat(conditionData.name, "**\n\n").concat(conditionData.desc
                        ? (0, dataUtils_js_1.returnArrayDataAsString)(conditionData.desc, null)
                        : "Description is missing");
                    return [2, res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: returnInfo,
                            },
                        })];
            }
        });
    });
}
exports.conditionsResponse = conditionsResponse;
function spellsResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var filteredSpellList;
        return __generator(this, function (_a) {
            filteredSpellList = (0, search_js_1.getDataByQuery)(spells_js_1.default, data.options[0].value);
            if (filteredSpellList.length === 0) {
                return [2, res.send({
                        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                        data: {
                            content: "Can't find anything",
                        },
                    })];
            }
            else {
                return [2, res.send({
                        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                        data: {
                            content: "Select a spell from the list",
                            components: [
                                {
                                    type: discord_interactions_1.MessageComponentTypes.ACTION_ROW,
                                    components: [
                                        {
                                            type: discord_interactions_1.MessageComponentTypes.STRING_SELECT,
                                            custom_id: "select_spell",
                                            options: filteredSpellList,
                                        },
                                    ],
                                },
                            ],
                        },
                    })];
            }
            return [2];
        });
    });
}
exports.spellsResponse = spellsResponse;
function proficienciesResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var filteredProficienciesList;
        return __generator(this, function (_a) {
            filteredProficienciesList = (0, search_js_1.getDataByQuery)(proficiencies_js_1.default, data.options[0].value);
            if (filteredProficienciesList.length === 0) {
                return [2, res.send({
                        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                        data: {
                            content: "Can't find anything",
                        },
                    })];
            }
            else {
                return [2, res.send({
                        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                        data: {
                            content: "Select a proficiency from the list",
                            components: [
                                {
                                    type: discord_interactions_1.MessageComponentTypes.ACTION_ROW,
                                    components: [
                                        {
                                            type: discord_interactions_1.MessageComponentTypes.STRING_SELECT,
                                            custom_id: "select_proficiency",
                                            options: filteredProficienciesList,
                                        },
                                    ],
                                },
                            ],
                        },
                    })];
            }
            return [2];
        });
    });
}
exports.proficienciesResponse = proficienciesResponse;
function featuresResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var filteredFeaturesList;
        return __generator(this, function (_a) {
            filteredFeaturesList = (0, search_js_1.getDataByQuery)(features_js_1.default, data.options[0].value);
            if (filteredFeaturesList.length === 0) {
                return [2, res.send({
                        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                        data: {
                            content: "Can't find anything",
                        },
                    })];
            }
            else {
                return [2, res.send({
                        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                        data: {
                            content: "Select a feature from the list",
                            components: [
                                {
                                    type: discord_interactions_1.MessageComponentTypes.ACTION_ROW,
                                    components: [
                                        {
                                            type: discord_interactions_1.MessageComponentTypes.STRING_SELECT,
                                            custom_id: "select_feature",
                                            options: filteredFeaturesList,
                                        },
                                    ],
                                },
                            ],
                        },
                    })];
            }
            return [2];
        });
    });
}
exports.featuresResponse = featuresResponse;
function traitsResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var filteredEquipmentList;
        return __generator(this, function (_a) {
            filteredEquipmentList = (0, search_js_1.getDataByQuery)(traits_js_1.default, data.options[0].value);
            if (filteredEquipmentList.length === 0) {
                return [2, res.send({
                        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                        data: {
                            content: "Can't find anything",
                        },
                    })];
            }
            else {
                return [2, res.send({
                        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                        data: {
                            content: "Select a trait from the list",
                            components: [
                                {
                                    type: discord_interactions_1.MessageComponentTypes.ACTION_ROW,
                                    components: [
                                        {
                                            type: discord_interactions_1.MessageComponentTypes.STRING_SELECT,
                                            custom_id: "select_trait",
                                            options: filteredEquipmentList,
                                        },
                                    ],
                                },
                            ],
                        },
                    })];
            }
            return [2];
        });
    });
}
exports.traitsResponse = traitsResponse;
function equipmentResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var filteredTraitsList;
        return __generator(this, function (_a) {
            filteredTraitsList = (0, search_js_1.getDataByQuery)(equipment_js_1.default, data.options[0].value);
            if (filteredTraitsList.length === 0) {
                return [2, res.send({
                        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                        data: {
                            content: "Can't find anything",
                        },
                    })];
            }
            else {
                return [2, res.send({
                        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                        data: {
                            content: "Select an equipment from the list",
                            components: [
                                {
                                    type: discord_interactions_1.MessageComponentTypes.ACTION_ROW,
                                    components: [
                                        {
                                            type: discord_interactions_1.MessageComponentTypes.STRING_SELECT,
                                            custom_id: "select_equipment",
                                            options: filteredTraitsList,
                                        },
                                    ],
                                },
                            ],
                        },
                    })];
            }
            return [2];
        });
    });
}
exports.equipmentResponse = equipmentResponse;
function magicItemsResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var filteredMagicItemsList;
        return __generator(this, function (_a) {
            filteredMagicItemsList = (0, search_js_1.getDataByQuery)(magicItems_js_1.default, data.options[0].value);
            if (filteredMagicItemsList.length === 0) {
                return [2, res.send({
                        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                        data: {
                            content: "Can't find anything",
                        },
                    })];
            }
            else {
                return [2, res.send({
                        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                        data: {
                            content: "Select an item from the list",
                            components: [
                                {
                                    type: discord_interactions_1.MessageComponentTypes.ACTION_ROW,
                                    components: [
                                        {
                                            type: discord_interactions_1.MessageComponentTypes.STRING_SELECT,
                                            custom_id: "select_magicitem",
                                            options: filteredMagicItemsList,
                                        },
                                    ],
                                },
                            ],
                        },
                    })];
            }
            return [2];
        });
    });
}
exports.magicItemsResponse = magicItemsResponse;
function selectSpellResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var spellData, formattedData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, fetchWrapper_js_1.default)("https://www.dnd5eapi.co/api/spells/".concat(data.values[0]))];
                case 1:
                    spellData = _a.sent();
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
                    if (spellData.higher_level.length && spellData.higher_level.length !== 0)
                        formattedData += (0, dataUtils_js_1.returnArrayDataAsString)(spellData.higher_level, null);
                    return [2, res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: formattedData,
                            },
                        })];
            }
        });
    });
}
exports.selectSpellResponse = selectSpellResponse;
function selectProficiencyResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var proficiencyData, formattedData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, fetchWrapper_js_1.default)("https://www.dnd5eapi.co/api/proficiencies/".concat(data.values[0]))];
                case 1:
                    proficiencyData = _a.sent();
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
            }
        });
    });
}
exports.selectProficiencyResponse = selectProficiencyResponse;
function selectFeatureResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var featureData, formattedData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, fetchWrapper_js_1.default)("https://www.dnd5eapi.co/api/features/".concat(data.values[0]))];
                case 1:
                    featureData = _a.sent();
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
            }
        });
    });
}
exports.selectFeatureResponse = selectFeatureResponse;
function selectTrait(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var traitData, formattedData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, fetchWrapper_js_1.default)("https://www.dnd5eapi.co/api/traits/".concat(data.values[0]))];
                case 1:
                    traitData = _a.sent();
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
            }
        });
    });
}
exports.selectTrait = selectTrait;
function selectMagicItemResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var magicItemData, formattedData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, fetchWrapper_js_1.default)("https://www.dnd5eapi.co/api/magic-items/".concat(data.values[0]))];
                case 1:
                    magicItemData = _a.sent();
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
            }
        });
    });
}
exports.selectMagicItemResponse = selectMagicItemResponse;
function selectEquipmentResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var equipmentData, formattedData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, (0, fetchWrapper_js_1.default)("https://www.dnd5eapi.co/api/equipment/".concat(data.values[0]))];
                case 1:
                    equipmentData = _a.sent();
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
            }
        });
    });
}
exports.selectEquipmentResponse = selectEquipmentResponse;
