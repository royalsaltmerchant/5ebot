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
exports.selectMonster = exports.monstersResponse = exports.subRacesResponse = exports.subClassesResponse = exports.racesResponse = exports.classesResponse = exports.selectEquipmentResponse = exports.selectMagicItemResponse = exports.selectTrait = exports.selectFeatureResponse = exports.selectProficiencyResponse = exports.selectSpellResponse = exports.magicItemsResponse = exports.equipmentResponse = exports.traitsResponse = exports.featuresResponse = exports.proficienciesResponse = exports.spellsResponse = exports.conditionsResponse = exports.languagesResponse = exports.alignmentsResponse = exports.abilityScoresResponse = exports.skillsResponse = void 0;
var discord_interactions_1 = require("discord-interactions");
var spellOptions_js_1 = __importDefault(require("../data/spellOptions.js"));
var proficiencyOptions_js_1 = __importDefault(require("../data/proficiencyOptions.js"));
var featOptions_js_1 = __importDefault(require("../data/featOptions.js"));
var traitOptions_js_1 = __importDefault(require("../data/traitOptions.js"));
var equipmentOptions_js_1 = __importDefault(require("../data/equipmentOptions.js"));
var magicItemOptions_js_1 = __importDefault(require("../data/magicItemOptions.js"));
var skills_js_1 = __importDefault(require("../data/skills.js"));
var search_js_1 = require("./search.js");
var dataUtils_js_1 = require("./dataUtils.js");
var abilityScores_js_1 = __importDefault(require("../data/abilityScores.js"));
var alignments_js_1 = __importDefault(require("../data/alignments.js"));
var languages_js_1 = __importDefault(require("../data/languages.js"));
var conditions_js_1 = __importDefault(require("../data/conditions.js"));
var spells_js_1 = __importDefault(require("../data/spells.js"));
var proficiencies_js_1 = __importDefault(require("../data/proficiencies.js"));
var features_js_1 = __importDefault(require("../data/features.js"));
var traits_js_1 = __importDefault(require("../data/traits.js"));
var magicItems_js_1 = __importDefault(require("../data/magicItems.js"));
var equipment_js_1 = __importDefault(require("../data/equipment.js"));
var classes_js_1 = __importDefault(require("../data/classes.js"));
var races_js_1 = __importDefault(require("../data/races.js"));
var subclasses_js_1 = __importDefault(require("../data/subclasses.js"));
var subraces_js_1 = __importDefault(require("../data/subraces.js"));
var monsterOptions_js_1 = __importDefault(require("../data/monsterOptions.js"));
var monsters_js_1 = __importDefault(require("../data/monsters.js"));
function skillsResponse(data, res) {
    var skillData = skills_js_1.default.filter(function (skill) { return skill.index === data.options[0].value; })[0];
    var returnInfo = "**".concat(skillData.name, "**\n\n").concat(skillData.desc, "\n\n**Ability Score:** ").concat(skillData.ability_score.name);
    return res.send({
        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: returnInfo,
        },
    });
}
exports.skillsResponse = skillsResponse;
function abilityScoresResponse(data, res) {
    var scoreData = abilityScores_js_1.default.filter(function (score) { return score.index === data.options[0].value; })[0];
    var returnInfo = "**".concat(scoreData.name, "**\n\n").concat((0, dataUtils_js_1.returnArrayDataAsString)(scoreData.desc, null));
    if (scoreData.skills && scoreData.skills.length)
        returnInfo += "\n**Skills:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(scoreData.skills, "name"));
    return res.send({
        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: returnInfo,
        },
    });
}
exports.abilityScoresResponse = abilityScoresResponse;
function alignmentsResponse(data, res) {
    var alignmentData = alignments_js_1.default.filter(function (alignment) { return alignment.index === data.options[0].value; })[0];
    var returnInfo = "**".concat(alignmentData.name, "**\n\n").concat(alignmentData.desc);
    return res.send({
        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: returnInfo,
        },
    });
}
exports.alignmentsResponse = alignmentsResponse;
function classesResponse(data, res) {
    var _a;
    var classData = classes_js_1.default.filter(function (c) { return c.index === data.options[0].value; })[0];
    var returnInfo = "**".concat(classData.name, "**");
    returnInfo += "\n**Hit Dice:** ".concat(classData.hit_die);
    if (classData.spellcasting && classData.spellcasting.spellcasting_ability)
        returnInfo += "\n**Spell Casting Ability:** ".concat((_a = classData.spellcasting) === null || _a === void 0 ? void 0 : _a.spellcasting_ability.name);
    returnInfo += "\n**Proficiencies:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(classData.proficiencies, "name"));
    returnInfo += "\n**Saving Throws:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(classData.saving_throws, "name"));
    returnInfo += "\n**Sub-Classes:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(classData.subclasses, "name"));
    return res.send({
        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: returnInfo,
        },
    });
}
exports.classesResponse = classesResponse;
function subClassesResponse(data, res) {
    var subClassData = subclasses_js_1.default.filter(function (c) { return c.index === data.options[0].value; })[0];
    var returnInfo = "**".concat(subClassData.name, "**");
    returnInfo += "\n**Description:** ".concat(subClassData.desc);
    returnInfo += "\n**Class:** ".concat(subClassData.class.name);
    if (subClassData.spells && subClassData.spells.length)
        returnInfo += "\n**Spells:** ".concat(subClassData.spells
            .map(function (item) { return item.spell.name; })
            .join(", "));
    return res.send({
        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: returnInfo,
        },
    });
}
exports.subClassesResponse = subClassesResponse;
function racesResponse(data, res) {
    var raceData = races_js_1.default.filter(function (race) { return race.index === data.options[0].value; })[0];
    var returnInfo = "**".concat(raceData.name, "**");
    returnInfo += "\n**Speed:** ".concat(raceData.speed);
    returnInfo += "\n**Age:** ".concat(raceData.age);
    returnInfo += "\n**Size:** ".concat(raceData.size, " - ").concat(raceData.size_description);
    returnInfo += "\n**Alignment:** ".concat(raceData.alignment);
    returnInfo += "\n**Ability Bonuses:** ".concat((0, dataUtils_js_1.getAbilityBonuses)(raceData));
    returnInfo += "\n**Starting Proficiencies:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(raceData.starting_proficiencies, "name"));
    if (raceData.starting_proficiency_options &&
        raceData.starting_proficiency_options.from &&
        raceData.starting_proficiency_options.from.options)
        returnInfo += "\n**Starting Proficiency Options:** ".concat((0, dataUtils_js_1.getChooseFromOptions)(raceData.starting_proficiency_options));
    returnInfo += "\n**Languages:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(raceData.languages, "name"));
    returnInfo += "\n**Traits:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(raceData.traits, "name"));
    returnInfo += "\n**Sub-Races:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(raceData.subraces, "name"));
    return res.send({
        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: returnInfo,
        },
    });
}
exports.racesResponse = racesResponse;
function subRacesResponse(data, res) {
    var subRaceData = subraces_js_1.default.filter(function (subrace) { return subrace.index === data.options[0].value; })[0];
    var returnInfo = "**".concat(subRaceData.name, "**");
    returnInfo += "\n**Description:** ".concat(subRaceData.desc);
    returnInfo += "\n**Race:** ".concat(subRaceData.race.name);
    returnInfo += "\n**Ability Bonuses:** ".concat((0, dataUtils_js_1.getAbilityBonuses)(subRaceData));
    returnInfo += "\n**Starting Proficiencies:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(subRaceData.starting_proficiencies, "name"));
    returnInfo += "\n**Traits:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(subRaceData.racial_traits, "name"));
    returnInfo += "\n**Languages:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(subRaceData.languages, "name"));
    if (subRaceData.language_options &&
        subRaceData.language_options.from &&
        subRaceData.language_options.from.options)
        returnInfo += "\n**Starting Proficiency Options:** ".concat((0, dataUtils_js_1.getChooseFromOptions)(subRaceData.language_options));
    return res.send({
        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: returnInfo,
        },
    });
}
exports.subRacesResponse = subRacesResponse;
function languagesResponse(data, res) {
    var languageData = languages_js_1.default.filter(function (language) { return language.index === data.options[0].value; })[0];
    var returnInfo = "**".concat(languageData.name, "**\n\n").concat(languageData.desc
        ? (0, dataUtils_js_1.returnArrayDataAsString)(languageData.desc, null)
        : "Description is missing", "\n\n**Typical Speakers:** ").concat(JSON.stringify(languageData.typical_speakers));
    return res.send({
        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: returnInfo,
        },
    });
}
exports.languagesResponse = languagesResponse;
function conditionsResponse(data, res) {
    var conditionData = conditions_js_1.default.filter(function (condition) { return condition.index === data.options[0].value; })[0];
    var returnInfo = "**".concat(conditionData.name, "**\n\n").concat(conditionData.desc
        ? (0, dataUtils_js_1.returnArrayDataAsString)(conditionData.desc, null)
        : "Description is missing");
    return res.send({
        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: returnInfo,
        },
    });
}
exports.conditionsResponse = conditionsResponse;
function spellsResponse(data, res) {
    var filteredSpellList = (0, search_js_1.getDataByQuery)(spellOptions_js_1.default, data.options[0].value);
    if (filteredSpellList.length === 0) {
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: "Can't find anything",
            },
        });
    }
    else {
        return res.send({
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
        });
    }
}
exports.spellsResponse = spellsResponse;
function proficienciesResponse(data, res) {
    var filteredProficienciesList = (0, search_js_1.getDataByQuery)(proficiencyOptions_js_1.default, data.options[0].value);
    if (filteredProficienciesList.length === 0) {
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: "Can't find anything",
            },
        });
    }
    else {
        return res.send({
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
        });
    }
}
exports.proficienciesResponse = proficienciesResponse;
function featuresResponse(data, res) {
    var filteredFeaturesList = (0, search_js_1.getDataByQuery)(featOptions_js_1.default, data.options[0].value);
    if (filteredFeaturesList.length === 0) {
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: "Can't find anything",
            },
        });
    }
    else {
        return res.send({
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
        });
    }
}
exports.featuresResponse = featuresResponse;
function traitsResponse(data, res) {
    var filteredEquipmentList = (0, search_js_1.getDataByQuery)(traitOptions_js_1.default, data.options[0].value);
    if (filteredEquipmentList.length === 0) {
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: "Can't find anything",
            },
        });
    }
    else {
        return res.send({
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
        });
    }
}
exports.traitsResponse = traitsResponse;
function equipmentResponse(data, res) {
    var filteredTraitsList = (0, search_js_1.getDataByQuery)(equipmentOptions_js_1.default, data.options[0].value);
    if (filteredTraitsList.length === 0) {
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: "Can't find anything",
            },
        });
    }
    else {
        return res.send({
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
        });
    }
}
exports.equipmentResponse = equipmentResponse;
function magicItemsResponse(data, res) {
    var filteredMagicItemsList = (0, search_js_1.getDataByQuery)(magicItemOptions_js_1.default, data.options[0].value);
    if (filteredMagicItemsList.length === 0) {
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: "Can't find anything",
            },
        });
    }
    else {
        return res.send({
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
        });
    }
}
exports.magicItemsResponse = magicItemsResponse;
function monstersResponse(data, res) {
    var filteredMonsterList = (0, search_js_1.getDataByQuery)(monsterOptions_js_1.default, data.options[0].value);
    if (filteredMonsterList.length === 0) {
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: "Can't find anything",
            },
        });
    }
    else {
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: "Select a monster from the list",
                components: [
                    {
                        type: discord_interactions_1.MessageComponentTypes.ACTION_ROW,
                        components: [
                            {
                                type: discord_interactions_1.MessageComponentTypes.STRING_SELECT,
                                custom_id: "select_monster",
                                options: filteredMonsterList,
                            },
                        ],
                    },
                ],
            },
        });
    }
}
exports.monstersResponse = monstersResponse;
function selectSpellResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var spellData, formattedData;
        return __generator(this, function (_a) {
            spellData = spells_js_1.default.filter(function (spell) { return spell.index === data.values[0]; })[0];
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
            if (spellData.damage &&
                spellData.damage.damage_type &&
                spellData.damage.damage_type.name)
                formattedData += "\n**Damage Type:** ".concat(spellData.damage.damage_type.name);
            if (spellData.area_of_effect)
                formattedData += "\n**Area of Effect:** **Type:** ".concat(spellData.area_of_effect.type, ", **Size:** ").concat(spellData.area_of_effect.size);
            if (spellData.desc)
                formattedData += "\n**Description:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(spellData.desc, null), " ");
            if (spellData.higher_level &&
                spellData.higher_level.length &&
                spellData.higher_level.length !== 0)
                formattedData += (0, dataUtils_js_1.returnArrayDataAsString)(spellData.higher_level, null);
            return [2, res.send({
                    type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                    data: {
                        content: formattedData,
                    },
                })];
        });
    });
}
exports.selectSpellResponse = selectSpellResponse;
function selectProficiencyResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var proficiencyData, formattedData;
        return __generator(this, function (_a) {
            proficiencyData = proficiencies_js_1.default.filter(function (proficiency) { return proficiency.index === data.values[0]; })[0];
            formattedData = "**".concat(proficiencyData.name, "** - ");
            if (proficiencyData.type)
                formattedData += "\n**Type:** ".concat(proficiencyData.type);
            if (proficiencyData.classes && proficiencyData.classes.length)
                formattedData += "\n**Classes:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(proficiencyData.classes, "name"));
            if (proficiencyData && proficiencyData.races.length)
                formattedData += "\n**Races:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(proficiencyData.races, "name"));
            return [2, res.send({
                    type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                    data: {
                        content: formattedData,
                    },
                })];
        });
    });
}
exports.selectProficiencyResponse = selectProficiencyResponse;
function selectFeatureResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var featureData, formattedData;
        return __generator(this, function (_a) {
            featureData = features_js_1.default.filter(function (feature) { return feature.index === data.values[0]; })[0];
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
        });
    });
}
exports.selectFeatureResponse = selectFeatureResponse;
function selectTrait(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var traitData, formattedData;
        return __generator(this, function (_a) {
            traitData = traits_js_1.default.filter(function (trait) { return trait.index === data.values[0]; })[0];
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
        });
    });
}
exports.selectTrait = selectTrait;
function selectMagicItemResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var magicItemData, formattedData;
        return __generator(this, function (_a) {
            magicItemData = magicItems_js_1.default.filter(function (item) { return item.index === data.values[0]; })[0];
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
        });
    });
}
exports.selectMagicItemResponse = selectMagicItemResponse;
function selectEquipmentResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var equipmentData, formattedData;
        return __generator(this, function (_a) {
            equipmentData = equipment_js_1.default.filter(function (equipment) { return equipment.index === data.values[0]; })[0];
            formattedData = "**".concat(equipmentData.name, "**");
            if (equipmentData.weight)
                formattedData += "\n**Weight:** ".concat(equipmentData.weight);
            if (equipmentData.cost)
                formattedData += "\n**Cost:** ".concat(equipmentData.cost.quantity, " ").concat(equipmentData.cost.unit);
            if (equipmentData.equipment_category)
                formattedData += "\n**Equipment Category:** ".concat(equipmentData.equipment_category.name);
            if (equipmentData.tool_category)
                formattedData += "\n**Equipment Category:** ".concat(equipmentData.tool_category);
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
        });
    });
}
exports.selectEquipmentResponse = selectEquipmentResponse;
function selectMonster(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var monsterData, formattedData, embeds;
        return __generator(this, function (_a) {
            monsterData = monsters_js_1.default.filter(function (monster) { return monster.index === data.values[0]; })[0];
            formattedData = "**".concat(monsterData.name, "**");
            if (monsterData.desc)
                formattedData += "\n**Description:** ".concat(monsterData.desc);
            formattedData += "\n**Type:** ".concat(monsterData.type);
            if (monsterData.subtype)
                formattedData += "\n**Sub Type:** ".concat(monsterData.subtype);
            formattedData += "\n**Size:** ".concat(monsterData.size);
            formattedData += "\n**CR:** ".concat(monsterData.challenge_rating);
            formattedData += "\n**XP:** ".concat(monsterData.xp);
            formattedData += "\n**Hit Points:** ".concat(monsterData.hit_points, " or ").concat(monsterData.hit_points_roll);
            formattedData += "\n**Hit Dice:** ".concat(monsterData.hit_dice);
            formattedData += "\n**Alignment:** ".concat(monsterData.alignment);
            formattedData += "\n**AC:** ".concat((0, dataUtils_js_1.getMonsterArmorClassInfo)(monsterData));
            formattedData += "\n**Speed:** Walk - ".concat(monsterData.speed.walk ? monsterData.speed.walk : "None", ", Swim - ").concat(monsterData.speed.swim ? monsterData.speed.swim : "None", ", Climb - ").concat(monsterData.speed.climb ? monsterData.speed.climb : "None", ", Burrow - ").concat(monsterData.speed.burrow ? monsterData.speed.burrow : "None", ", Hover - ").concat(monsterData.speed.hover ? monsterData.speed.hover : "None");
            if (monsterData.languages)
                formattedData += "\n**Languages:** ".concat(monsterData.languages);
            formattedData += "\n**CHA:** ".concat(monsterData.charisma);
            formattedData += ", **CON:** ".concat(monsterData.constitution);
            formattedData += ", **DEX:** ".concat(monsterData.dexterity);
            formattedData += ", **INT:** ".concat(monsterData.intelligence);
            formattedData += ", **STR:** ".concat(monsterData.strength);
            formattedData += ", **WIS:** ".concat(monsterData.wisdom);
            if (monsterData.proficiencies.length)
                formattedData += "\n**Proficiencies:** ".concat(monsterData.proficiencies
                    .map(function (item) { return item.proficiency.name; })
                    .join(", "));
            if (monsterData.senses)
                formattedData += "\n**Senses:** ".concat((0, dataUtils_js_1.getSensesInfo)(monsterData));
            if (monsterData.condition_immunities.length)
                formattedData += "\n**Condition Immunities:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(monsterData.condition_immunities, "name"));
            if (monsterData.damage_immunities.length)
                formattedData += "\n**Damage Immunities:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(monsterData.damage_immunities, null));
            if (monsterData.damage_resistances.length)
                formattedData += "\n**Damage Resistances:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(monsterData.damage_resistances, null));
            if (monsterData.damage_vulnerabilities.length)
                formattedData += "\n**Damage Vulnerabilities:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(monsterData.damage_vulnerabilities, null));
            if (monsterData.forms)
                formattedData += "\n**Forms:** ".concat((0, dataUtils_js_1.returnArrayDataAsString)(monsterData.forms, "name"));
            embeds = [];
            if (monsterData.image) {
                embeds = [
                    {
                        image: {
                            url: "https://dnd5eapi.co" + monsterData.image,
                        },
                    },
                ];
            }
            console.log(embeds);
            return [2, res.send({
                    type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                    data: {
                        content: formattedData,
                        embeds: embeds,
                    },
                })];
        });
    });
}
exports.selectMonster = selectMonster;
