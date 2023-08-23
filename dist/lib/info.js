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
exports.selectMonster = exports.monstersResponse = exports.subRacesResponse = exports.subClassesResponse = exports.racesResponse = exports.classesResponse = exports.selectEquipmentResponse = exports.selectMagicItemResponse = exports.selectTrait = exports.selectFeatureResponse = exports.selectProficiencyResponse = exports.selectSpellResponse = exports.magicItemsResponse = exports.equipmentResponse = exports.traitsResponse = exports.featuresResponse = exports.proficienciesResponse = exports.spellsResponse = exports.conditionsResponse = exports.languagesResponse = exports.alignmentsResponse = exports.abilityScoresResponse = exports.skillsResponse = void 0;
const discord_interactions_1 = require("discord-interactions");
const spellOptions_js_1 = __importDefault(require("../data/spellOptions.js"));
const proficiencyOptions_js_1 = __importDefault(require("../data/proficiencyOptions.js"));
const featOptions_js_1 = __importDefault(require("../data/featOptions.js"));
const traitOptions_js_1 = __importDefault(require("../data/traitOptions.js"));
const equipmentOptions_js_1 = __importDefault(require("../data/equipmentOptions.js"));
const magicItemOptions_js_1 = __importDefault(require("../data/magicItemOptions.js"));
const skills_js_1 = __importDefault(require("../data/skills.js"));
const search_js_1 = require("./search.js");
const dataUtils_js_1 = require("./dataUtils.js");
const abilityScores_js_1 = __importDefault(require("../data/abilityScores.js"));
const alignments_js_1 = __importDefault(require("../data/alignments.js"));
const languages_js_1 = __importDefault(require("../data/languages.js"));
const conditions_js_1 = __importDefault(require("../data/conditions.js"));
const spells_js_1 = __importDefault(require("../data/spells.js"));
const proficiencies_js_1 = __importDefault(require("../data/proficiencies.js"));
const features_js_1 = __importDefault(require("../data/features.js"));
const traits_js_1 = __importDefault(require("../data/traits.js"));
const magicItems_js_1 = __importDefault(require("../data/magicItems.js"));
const equipment_js_1 = __importDefault(require("../data/equipment.js"));
const classes_js_1 = __importDefault(require("../data/classes.js"));
const races_js_1 = __importDefault(require("../data/races.js"));
const subclasses_js_1 = __importDefault(require("../data/subclasses.js"));
const subraces_js_1 = __importDefault(require("../data/subraces.js"));
const monsterOptions_js_1 = __importDefault(require("../data/monsterOptions.js"));
const monsters_js_1 = __importDefault(require("../data/monsters.js"));
function skillsResponse(data, res) {
    const skillData = skills_js_1.default.filter((skill) => skill.index === data.options[0].value)[0];
    const returnInfo = `**${skillData.name}**\n\n${skillData.desc}\n\n**Ability Score:** ${skillData.ability_score.name}`;
    return res.send({
        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: returnInfo,
        },
    });
}
exports.skillsResponse = skillsResponse;
function abilityScoresResponse(data, res) {
    const scoreData = abilityScores_js_1.default.filter((score) => score.index === data.options[0].value)[0];
    let returnInfo = `**${scoreData.name}**\n\n${(0, dataUtils_js_1.returnArrayDataAsString)(scoreData.desc, null)}`;
    if (scoreData.skills && scoreData.skills.length)
        returnInfo += `\n**Skills:** ${(0, dataUtils_js_1.returnArrayDataAsString)(scoreData.skills, "name")}`;
    return res.send({
        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: returnInfo,
        },
    });
}
exports.abilityScoresResponse = abilityScoresResponse;
function alignmentsResponse(data, res) {
    const alignmentData = alignments_js_1.default.filter((alignment) => alignment.index === data.options[0].value)[0];
    const returnInfo = `**${alignmentData.name}**\n\n${alignmentData.desc}`;
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
    const classData = classes_js_1.default.filter((c) => c.index === data.options[0].value)[0];
    let returnInfo = `**${classData.name}**`;
    returnInfo += `\n**Hit Dice:** ${classData.hit_die}`;
    if (classData.spellcasting && classData.spellcasting.spellcasting_ability)
        returnInfo += `\n**Spell Casting Ability:** ${(_a = classData.spellcasting) === null || _a === void 0 ? void 0 : _a.spellcasting_ability.name}`;
    returnInfo += `\n**Proficiencies:** ${(0, dataUtils_js_1.returnArrayDataAsString)(classData.proficiencies, "name")}`;
    returnInfo += `\n**Saving Throws:** ${(0, dataUtils_js_1.returnArrayDataAsString)(classData.saving_throws, "name")}`;
    returnInfo += `\n**Sub-Classes:** ${(0, dataUtils_js_1.returnArrayDataAsString)(classData.subclasses, "name")}`;
    return res.send({
        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: returnInfo,
        },
    });
}
exports.classesResponse = classesResponse;
function subClassesResponse(data, res) {
    const subClassData = subclasses_js_1.default.filter((c) => c.index === data.options[0].value)[0];
    let returnInfo = `**${subClassData.name}**`;
    returnInfo += `\n**Description:** ${subClassData.desc}`;
    returnInfo += `\n**Class:** ${subClassData.class.name}`;
    if (subClassData.spells && subClassData.spells.length)
        returnInfo += `\n**Spells:** ${subClassData.spells
            .map((item) => item.spell.name)
            .join(", ")}`;
    return res.send({
        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: returnInfo,
        },
    });
}
exports.subClassesResponse = subClassesResponse;
function racesResponse(data, res) {
    const raceData = races_js_1.default.filter((race) => race.index === data.options[0].value)[0];
    let returnInfo = `**${raceData.name}**`;
    returnInfo += `\n**Speed:** ${raceData.speed}`;
    returnInfo += `\n**Age:** ${raceData.age}`;
    returnInfo += `\n**Size:** ${raceData.size} - ${raceData.size_description}`;
    returnInfo += `\n**Alignment:** ${raceData.alignment}`;
    returnInfo += `\n**Ability Bonuses:** ${(0, dataUtils_js_1.getAbilityBonuses)(raceData)}`;
    returnInfo += `\n**Starting Proficiencies:** ${(0, dataUtils_js_1.returnArrayDataAsString)(raceData.starting_proficiencies, "name")}`;
    if (raceData.starting_proficiency_options &&
        raceData.starting_proficiency_options.from &&
        raceData.starting_proficiency_options.from.options)
        returnInfo += `\n**Starting Proficiency Options:** ${(0, dataUtils_js_1.getChooseFromOptions)(raceData.starting_proficiency_options)}`;
    returnInfo += `\n**Languages:** ${(0, dataUtils_js_1.returnArrayDataAsString)(raceData.languages, "name")}`;
    returnInfo += `\n**Traits:** ${(0, dataUtils_js_1.returnArrayDataAsString)(raceData.traits, "name")}`;
    returnInfo += `\n**Sub-Races:** ${(0, dataUtils_js_1.returnArrayDataAsString)(raceData.subraces, "name")}`;
    return res.send({
        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: returnInfo,
        },
    });
}
exports.racesResponse = racesResponse;
function subRacesResponse(data, res) {
    const subRaceData = subraces_js_1.default.filter((subrace) => subrace.index === data.options[0].value)[0];
    let returnInfo = `**${subRaceData.name}**`;
    returnInfo += `\n**Description:** ${subRaceData.desc}`;
    returnInfo += `\n**Race:** ${subRaceData.race.name}`;
    returnInfo += `\n**Ability Bonuses:** ${(0, dataUtils_js_1.getAbilityBonuses)(subRaceData)}`;
    returnInfo += `\n**Starting Proficiencies:** ${(0, dataUtils_js_1.returnArrayDataAsString)(subRaceData.starting_proficiencies, "name")}`;
    returnInfo += `\n**Traits:** ${(0, dataUtils_js_1.returnArrayDataAsString)(subRaceData.racial_traits, "name")}`;
    returnInfo += `\n**Languages:** ${(0, dataUtils_js_1.returnArrayDataAsString)(subRaceData.languages, "name")}`;
    if (subRaceData.language_options &&
        subRaceData.language_options.from &&
        subRaceData.language_options.from.options)
        returnInfo += `\n**Starting Proficiency Options:** ${(0, dataUtils_js_1.getChooseFromOptions)(subRaceData.language_options)}`;
    return res.send({
        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: returnInfo,
        },
    });
}
exports.subRacesResponse = subRacesResponse;
function languagesResponse(data, res) {
    const languageData = languages_js_1.default.filter((language) => language.index === data.options[0].value)[0];
    const returnInfo = `**${languageData.name}**\n\n${languageData.desc
        ? (0, dataUtils_js_1.returnArrayDataAsString)(languageData.desc, null)
        : "Description is missing"}\n\n**Typical Speakers:** ${JSON.stringify(languageData.typical_speakers)}`;
    return res.send({
        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: returnInfo,
        },
    });
}
exports.languagesResponse = languagesResponse;
function conditionsResponse(data, res) {
    const conditionData = conditions_js_1.default.filter((condition) => condition.index === data.options[0].value)[0];
    const returnInfo = `**${conditionData.name}**\n\n${conditionData.desc
        ? (0, dataUtils_js_1.returnArrayDataAsString)(conditionData.desc, null)
        : "Description is missing"}`;
    return res.send({
        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: returnInfo,
        },
    });
}
exports.conditionsResponse = conditionsResponse;
function spellsResponse(data, res) {
    const filteredSpellList = (0, search_js_1.getDataByQuery)(spellOptions_js_1.default, data.options[0].value);
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
    const filteredProficienciesList = (0, search_js_1.getDataByQuery)(proficiencyOptions_js_1.default, data.options[0].value);
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
    const filteredFeaturesList = (0, search_js_1.getDataByQuery)(featOptions_js_1.default, data.options[0].value);
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
    const filteredEquipmentList = (0, search_js_1.getDataByQuery)(traitOptions_js_1.default, data.options[0].value);
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
    const filteredTraitsList = (0, search_js_1.getDataByQuery)(equipmentOptions_js_1.default, data.options[0].value);
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
    const filteredMagicItemsList = (0, search_js_1.getDataByQuery)(magicItemOptions_js_1.default, data.options[0].value);
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
    const filteredMonsterList = (0, search_js_1.getDataByQuery)(monsterOptions_js_1.default, data.options[0].value);
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
    return __awaiter(this, void 0, void 0, function* () {
        const spellData = spells_js_1.default.filter((spell) => spell.index === data.values[0])[0];
        let formattedData = `**${spellData.name}** - `;
        if (spellData.school && spellData.school.name)
            formattedData += spellData.school.name;
        if (spellData.level)
            formattedData += `\n**Level:** ${spellData.level}`;
        if (spellData.classes && spellData.classes.length !== 0)
            formattedData += `\n**Classes:** ${(0, dataUtils_js_1.returnArrayDataAsString)(spellData.classes, "name")}`;
        if (spellData.casting_time)
            formattedData += `\n**Casting Time:** ${spellData.casting_time}`;
        if (spellData.range)
            formattedData += `\n**Range:** ${spellData.range}`;
        if (spellData.duration)
            formattedData += `\n**Duration:** ${spellData.duration}`;
        if (spellData.concentration)
            formattedData += "\n**Concentration:** true";
        if (spellData.damage &&
            spellData.damage.damage_type &&
            spellData.damage.damage_type.name)
            formattedData += `\n**Damage Type:** ${spellData.damage.damage_type.name}`;
        if (spellData.area_of_effect)
            formattedData += `\n**Area of Effect:** **Type:** ${spellData.area_of_effect.type}, **Size:** ${spellData.area_of_effect.size}`;
        if (spellData.desc)
            formattedData += `\n**Description:** ${(0, dataUtils_js_1.returnArrayDataAsString)(spellData.desc, null)} `;
        if (spellData.higher_level &&
            spellData.higher_level.length &&
            spellData.higher_level.length !== 0)
            formattedData += (0, dataUtils_js_1.returnArrayDataAsString)(spellData.higher_level, null);
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: formattedData,
            },
        });
    });
}
exports.selectSpellResponse = selectSpellResponse;
function selectProficiencyResponse(data, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const proficiencyData = proficiencies_js_1.default.filter((proficiency) => proficiency.index === data.values[0])[0];
        let formattedData = `**${proficiencyData.name}** - `;
        if (proficiencyData.type)
            formattedData += `\n**Type:** ${proficiencyData.type}`;
        if (proficiencyData.classes && proficiencyData.classes.length)
            formattedData += `\n**Classes:** ${(0, dataUtils_js_1.returnArrayDataAsString)(proficiencyData.classes, "name")}`;
        if (proficiencyData && proficiencyData.races.length)
            formattedData += `\n**Races:** ${(0, dataUtils_js_1.returnArrayDataAsString)(proficiencyData.races, "name")}`;
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: formattedData,
            },
        });
    });
}
exports.selectProficiencyResponse = selectProficiencyResponse;
function selectFeatureResponse(data, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const featureData = features_js_1.default.filter((feature) => feature.index === data.values[0])[0];
        let formattedData = `**${featureData.name}**`;
        if (featureData.level)
            formattedData += `\n**Level:** ${featureData.level}`;
        if (featureData.desc)
            formattedData += `\n**Description:** ${(0, dataUtils_js_1.returnArrayDataAsString)(featureData.desc, null)}`;
        if (featureData.class)
            formattedData += `\n**Class:** ${featureData.class.name}`;
        if (featureData.subclass)
            formattedData += `\n**Subclass:** ${featureData.subclass.name}`;
        if (featureData.prerequisites && featureData.prerequisites.length)
            formattedData += `\n**Prerequisites:** ${(0, dataUtils_js_1.returnArrayDataAsString)(featureData.prerequisites, "name")}`;
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: formattedData,
            },
        });
    });
}
exports.selectFeatureResponse = selectFeatureResponse;
function selectTrait(data, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const traitData = traits_js_1.default.filter((trait) => trait.index === data.values[0])[0];
        let formattedData = `**${traitData.name}**`;
        if (traitData.races && traitData.races.length !== 0)
            formattedData += `\n**Races:** ${(0, dataUtils_js_1.returnArrayDataAsString)(traitData.races, "name")}`;
        if (traitData.subraces && traitData.subraces.length !== 0)
            formattedData += `\n**Sub-Races:** ${(0, dataUtils_js_1.returnArrayDataAsString)(traitData.subraces, "name")}`;
        if (traitData.desc)
            formattedData += `\n**Description:** ${traitData.desc}`;
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: formattedData,
            },
        });
    });
}
exports.selectTrait = selectTrait;
function selectMagicItemResponse(data, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const magicItemData = magicItems_js_1.default.filter((item) => item.index === data.values[0])[0];
        let formattedData = `**${magicItemData.name}**`;
        if (magicItemData.desc)
            formattedData += `\n**Description:** ${(0, dataUtils_js_1.returnArrayDataAsString)(magicItemData.desc, null)}`;
        if (magicItemData.equipment_category)
            formattedData += `\n**Equipment Category:** ${magicItemData.equipment_category.name}`;
        if (magicItemData.rarity)
            formattedData += `\n**Rarity:** ${magicItemData.rarity.name}`;
        if (magicItemData.variants && magicItemData.variants.length)
            formattedData += `\n**Variants:** ${(0, dataUtils_js_1.returnArrayDataAsString)(magicItemData.variants, "name")}`;
        if (magicItemData.variant)
            formattedData += `\n**Is a variant:** ${magicItemData.variant}`;
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: formattedData,
            },
        });
    });
}
exports.selectMagicItemResponse = selectMagicItemResponse;
function selectEquipmentResponse(data, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const equipmentData = equipment_js_1.default.filter((equipment) => equipment.index === data.values[0])[0];
        let formattedData = `**${equipmentData.name}**`;
        if (equipmentData.weight)
            formattedData += `\n**Weight:** ${equipmentData.weight}`;
        if (equipmentData.cost)
            formattedData += `\n**Cost:** ${equipmentData.cost.quantity} ${equipmentData.cost.unit}`;
        if (equipmentData.equipment_category)
            formattedData += `\n**Equipment Category:** ${equipmentData.equipment_category.name}`;
        if (equipmentData.tool_category)
            formattedData += `\n**Equipment Category:** ${equipmentData.tool_category}`;
        if (equipmentData.weapon_category)
            formattedData += `\n**Weapon Category:** ${equipmentData.weapon_category}`;
        if (equipmentData.weapon_range)
            formattedData += `\n**Weapon Range:** ${equipmentData.weapon_range}`;
        if (equipmentData.range)
            formattedData += `\n**Weapon Range:** Normal:${equipmentData.range.normal}, Long: ${equipmentData.range.long}`;
        if (equipmentData.damage)
            formattedData += `\n**Damage:** Dice: ${equipmentData.damage.damage_dice}, Type: ${equipmentData.damage.damage_type.name}`;
        if (equipmentData.two_handed_damage)
            formattedData += `\n**Two Handed Damage:** Dice: ${equipmentData.two_handed_damage.damage_dice}, Type: ${equipmentData.two_handed_damage.damage_type.name}`;
        if (equipmentData.armor_category)
            formattedData += `\n**Armor Category:** ${equipmentData.armor_category}`;
        if (equipmentData.armor_class)
            formattedData += `\n**Armor Class:** ${(0, dataUtils_js_1.getArmorClassInfo)(equipmentData)}`;
        if (equipmentData.str_minimum)
            formattedData += `\n**STR Minimum:** ${equipmentData.str_minimum}`;
        if (equipmentData.stealth_disadvantage)
            formattedData += `\n**Stealth Disadvantage:** ${equipmentData.stealth_disadvantage}`;
        if (equipmentData.gear_category)
            formattedData += `\n**Gear Category:** ${equipmentData.gear_category.name}`;
        if (equipmentData.contents && equipmentData.contents.length)
            formattedData += `\n**Contents:** ${(0, dataUtils_js_1.getContentsInfo)(equipmentData)}`;
        if (equipmentData.properties && equipmentData.properties.length)
            formattedData += `\n**Properties:** ${(0, dataUtils_js_1.returnArrayDataAsString)(equipmentData.properties, "name")}`;
        if (equipmentData.desc && equipmentData.desc.length)
            formattedData += `\n**Description:** ${(0, dataUtils_js_1.returnArrayDataAsString)(equipmentData.desc, null)}`;
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: formattedData,
            },
        });
    });
}
exports.selectEquipmentResponse = selectEquipmentResponse;
function selectMonster(data, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const monsterData = monsters_js_1.default.filter((monster) => monster.index === data.values[0])[0];
        let formattedData = `**${monsterData.name}**`;
        if (monsterData.desc)
            formattedData += `\n**Description:** ${monsterData.desc}`;
        formattedData += `\n**Type:** ${monsterData.type}`;
        if (monsterData.subtype)
            formattedData += `\n**Sub Type:** ${monsterData.subtype}`;
        formattedData += `\n**Size:** ${monsterData.size}`;
        formattedData += `\n**CR:** ${monsterData.challenge_rating}`;
        formattedData += `\n**XP:** ${monsterData.xp}`;
        formattedData += `\n**Hit Points:** ${monsterData.hit_points} or ${monsterData.hit_points_roll}`;
        formattedData += `\n**Hit Dice:** ${monsterData.hit_dice}`;
        formattedData += `\n**Alignment:** ${monsterData.alignment}`;
        formattedData += `\n**AC:** ${(0, dataUtils_js_1.getMonsterArmorClassInfo)(monsterData)}`;
        formattedData += `\n**Speed:** Walk - ${monsterData.speed.walk ? monsterData.speed.walk : "None"}, Swim - ${monsterData.speed.swim ? monsterData.speed.swim : "None"}, Climb - ${monsterData.speed.climb ? monsterData.speed.climb : "None"}, Burrow - ${monsterData.speed.burrow ? monsterData.speed.burrow : "None"}, Hover - ${monsterData.speed.hover ? monsterData.speed.hover : "None"}`;
        if (monsterData.languages)
            formattedData += `\n**Languages:** ${monsterData.languages}`;
        formattedData += `\n**CHA:** ${monsterData.charisma}`;
        formattedData += `, **CON:** ${monsterData.constitution}`;
        formattedData += `, **DEX:** ${monsterData.dexterity}`;
        formattedData += `, **INT:** ${monsterData.intelligence}`;
        formattedData += `, **STR:** ${monsterData.strength}`;
        formattedData += `, **WIS:** ${monsterData.wisdom}`;
        if (monsterData.proficiencies.length)
            formattedData += `\n**Proficiencies:** ${monsterData.proficiencies
                .map((item) => item.proficiency.name)
                .join(", ")}`;
        if (monsterData.senses)
            formattedData += `\n**Senses:** ${(0, dataUtils_js_1.getSensesInfo)(monsterData)}`;
        if (monsterData.condition_immunities.length)
            formattedData += `\n**Condition Immunities:** ${(0, dataUtils_js_1.returnArrayDataAsString)(monsterData.condition_immunities, "name")}`;
        if (monsterData.damage_immunities.length)
            formattedData += `\n**Damage Immunities:** ${(0, dataUtils_js_1.returnArrayDataAsString)(monsterData.damage_immunities, null)}`;
        if (monsterData.damage_resistances.length)
            formattedData += `\n**Damage Resistances:** ${(0, dataUtils_js_1.returnArrayDataAsString)(monsterData.damage_resistances, null)}`;
        if (monsterData.damage_vulnerabilities.length)
            formattedData += `\n**Damage Vulnerabilities:** ${(0, dataUtils_js_1.returnArrayDataAsString)(monsterData.damage_vulnerabilities, null)}`;
        if (monsterData.forms)
            formattedData += `\n**Forms:** ${(0, dataUtils_js_1.returnArrayDataAsString)(monsterData.forms, "name")}`;
        let embeds = [];
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
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: formattedData,
                embeds,
            },
        });
    });
}
exports.selectMonster = selectMonster;
