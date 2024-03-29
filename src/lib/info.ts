import {
  InteractionResponseType,
  MessageComponentTypes,
} from "discord-interactions";
import spellOptions from "../data/spellOptions.js";
import proficiencyOptions from "../data/proficiencyOptions.js";
import featOptions from "../data/featOptions.js";
import traitOptions from "../data/traitOptions.js";
import equipmentOptions from "../data/equipmentOptions.js";
import magicItemOptions from "../data/magicItemOptions.js";
import skills from "../data/skills.js";
import { getDataByQuery } from "./search.js";
import { Response } from "express";
import { DataObject } from "../api/interactionController.js";
import {
  returnArrayDataAsString,
  getArmorClassInfo,
  getContentsInfo,
  getAbilityBonuses,
  getChooseFromOptions,
  getMonsterArmorClassInfo,
  getSensesInfo,
} from "./dataUtils.js";
import abilityScores from "../data/abilityScores.js";
import alignments from "../data/alignments.js";
import languages from "../data/languages.js";
import conditions from "../data/conditions.js";
import spells from "../data/spells.js";
import proficiencies from "../data/proficiencies.js";
import features from "../data/features.js";
import traits from "../data/traits.js";
import magicItems from "../data/magicItems.js";
import equipment from "../data/equipment.js";
import classes from "../data/classes.js";
import races from "../data/races.js";
import subclasses from "../data/subclasses.js";
import subraces from "../data/subraces.js";
import monsterOptions from "../data/monsterOptions.js";
import monsters from "../data/monsters.js";

function skillsResponse(data: DataObject, res: Response) {
  const skillData = skills.filter(
    (skill) => skill.index === data.options[0].value
  )[0];
  const returnInfo = `**${skillData.name}**\n\n${skillData.desc}\n\n**Ability Score:** ${skillData.ability_score.name}`;
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: returnInfo,
    },
  });
}

function abilityScoresResponse(data: DataObject, res: Response) {
  const scoreData = abilityScores.filter(
    (score) => score.index === data.options[0].value
  )[0];
  let returnInfo = `**${scoreData.name}**\n\n${returnArrayDataAsString(
    scoreData.desc,
    null
  )}`;
  if (scoreData.skills && scoreData.skills.length)
    returnInfo += `\n**Skills:** ${returnArrayDataAsString(
      scoreData.skills,
      "name"
    )}`;
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: returnInfo,
    },
  });
}

function alignmentsResponse(data: DataObject, res: Response) {
  const alignmentData = alignments.filter(
    (alignment) => alignment.index === data.options[0].value
  )[0];

  const returnInfo = `**${alignmentData.name}**\n\n${alignmentData.desc}`;
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: returnInfo,
    },
  });
}

function classesResponse(data: DataObject, res: Response) {
  const classData = classes.filter((c) => c.index === data.options[0].value)[0];

  let returnInfo = `**${classData.name}**`;
  returnInfo += `\n**Hit Dice:** ${classData.hit_die}`;
  if (classData.spellcasting && classData.spellcasting.spellcasting_ability)
    returnInfo += `\n**Spell Casting Ability:** ${classData.spellcasting?.spellcasting_ability.name}`;
  returnInfo += `\n**Proficiencies:** ${returnArrayDataAsString(
    classData.proficiencies,
    "name"
  )}`;
  returnInfo += `\n**Saving Throws:** ${returnArrayDataAsString(
    classData.saving_throws,
    "name"
  )}`;
  returnInfo += `\n**Sub-Classes:** ${returnArrayDataAsString(
    classData.subclasses,
    "name"
  )}`;

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: returnInfo,
    },
  });
}

function subClassesResponse(data: DataObject, res: Response) {
  const subClassData = subclasses.filter(
    (c) => c.index === data.options[0].value
  )[0];

  let returnInfo = `**${subClassData.name}**`;
  returnInfo += `\n**Description:** ${subClassData.desc}`;
  returnInfo += `\n**Class:** ${subClassData.class.name}`;
  if (subClassData.spells && subClassData.spells.length)
    returnInfo += `\n**Spells:** ${subClassData.spells
      .map((item) => item.spell.name)
      .join(", ")}`;

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: returnInfo,
    },
  });
}

function racesResponse(data: DataObject, res: Response) {
  const raceData = races.filter(
    (race) => race.index === data.options[0].value
  )[0];

  let returnInfo = `**${raceData.name}**`;
  returnInfo += `\n**Speed:** ${raceData.speed}`;
  returnInfo += `\n**Age:** ${raceData.age}`;
  returnInfo += `\n**Size:** ${raceData.size} - ${raceData.size_description}`;
  returnInfo += `\n**Alignment:** ${raceData.alignment}`;
  returnInfo += `\n**Ability Bonuses:** ${getAbilityBonuses(raceData)}`;
  returnInfo += `\n**Starting Proficiencies:** ${returnArrayDataAsString(
    raceData.starting_proficiencies,
    "name"
  )}`;
  if (
    raceData.starting_proficiency_options &&
    raceData.starting_proficiency_options.from &&
    raceData.starting_proficiency_options.from.options
  )
    returnInfo += `\n**Starting Proficiency Options:** ${getChooseFromOptions(
      raceData.starting_proficiency_options
    )}`;
  returnInfo += `\n**Languages:** ${returnArrayDataAsString(
    raceData.languages,
    "name"
  )}`;
  returnInfo += `\n**Traits:** ${returnArrayDataAsString(
    raceData.traits,
    "name"
  )}`;
  returnInfo += `\n**Sub-Races:** ${returnArrayDataAsString(
    raceData.subraces,
    "name"
  )}`;

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: returnInfo,
    },
  });
}

function subRacesResponse(data: DataObject, res: Response) {
  const subRaceData = subraces.filter(
    (subrace) => subrace.index === data.options[0].value
  )[0];

  let returnInfo = `**${subRaceData.name}**`;
  returnInfo += `\n**Description:** ${subRaceData.desc}`;
  returnInfo += `\n**Race:** ${subRaceData.race.name}`;
  returnInfo += `\n**Ability Bonuses:** ${getAbilityBonuses(subRaceData)}`;
  returnInfo += `\n**Starting Proficiencies:** ${returnArrayDataAsString(
    subRaceData.starting_proficiencies,
    "name"
  )}`;
  returnInfo += `\n**Traits:** ${returnArrayDataAsString(
    subRaceData.racial_traits,
    "name"
  )}`;
  returnInfo += `\n**Languages:** ${returnArrayDataAsString(
    subRaceData.languages,
    "name"
  )}`;
  if (
    subRaceData.language_options &&
    subRaceData.language_options.from &&
    subRaceData.language_options.from.options
  )
    returnInfo += `\n**Starting Proficiency Options:** ${getChooseFromOptions(
      subRaceData.language_options
    )}`;

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: returnInfo,
    },
  });
}

function languagesResponse(data: DataObject, res: Response) {
  const languageData = languages.filter(
    (language) => language.index === data.options[0].value
  )[0];
  const returnInfo = `**${languageData.name}**\n\n${
    languageData.desc
      ? returnArrayDataAsString(languageData.desc, null)
      : "Description is missing"
  }\n\n**Typical Speakers:** ${JSON.stringify(languageData.typical_speakers)}`;
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: returnInfo,
    },
  });
}

function conditionsResponse(data: DataObject, res: Response) {
  const conditionData = conditions.filter(
    (condition) => condition.index === data.options[0].value
  )[0];
  const returnInfo = `**${conditionData.name}**\n\n${
    conditionData.desc
      ? returnArrayDataAsString(conditionData.desc, null)
      : "Description is missing"
  }`;
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: returnInfo,
    },
  });
}

function spellsResponse(data: DataObject, res: Response) {
  const filteredSpellList = getDataByQuery(spellOptions, data.options[0].value);
  if (filteredSpellList.length === 0) {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Can't find anything",
      },
    });
  } else {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Select a spell from the list",
        components: [
          {
            type: MessageComponentTypes.ACTION_ROW,
            components: [
              {
                type: MessageComponentTypes.STRING_SELECT,
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

function proficienciesResponse(data: DataObject, res: Response) {
  const filteredProficienciesList = getDataByQuery(
    proficiencyOptions,
    data.options[0].value
  );
  if (filteredProficienciesList.length === 0) {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Can't find anything",
      },
    });
  } else {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Select a proficiency from the list",
        components: [
          {
            type: MessageComponentTypes.ACTION_ROW,
            components: [
              {
                type: MessageComponentTypes.STRING_SELECT,
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

function featuresResponse(data: DataObject, res: Response) {
  const filteredFeaturesList = getDataByQuery(
    featOptions,
    data.options[0].value
  );
  if (filteredFeaturesList.length === 0) {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Can't find anything",
      },
    });
  } else {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Select a feature from the list",
        components: [
          {
            type: MessageComponentTypes.ACTION_ROW,
            components: [
              {
                type: MessageComponentTypes.STRING_SELECT,
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

function traitsResponse(data: DataObject, res: Response) {
  const filteredEquipmentList = getDataByQuery(
    traitOptions,
    data.options[0].value
  );
  if (filteredEquipmentList.length === 0) {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Can't find anything",
      },
    });
  } else {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Select a trait from the list",
        components: [
          {
            type: MessageComponentTypes.ACTION_ROW,
            components: [
              {
                type: MessageComponentTypes.STRING_SELECT,
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

function equipmentResponse(data: DataObject, res: Response) {
  const filteredTraitsList = getDataByQuery(
    equipmentOptions,
    data.options[0].value
  );
  if (filteredTraitsList.length === 0) {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Can't find anything",
      },
    });
  } else {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Select an equipment from the list",
        components: [
          {
            type: MessageComponentTypes.ACTION_ROW,
            components: [
              {
                type: MessageComponentTypes.STRING_SELECT,
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

function magicItemsResponse(data: DataObject, res: Response) {
  const filteredMagicItemsList = getDataByQuery(
    magicItemOptions,
    data.options[0].value
  );
  if (filteredMagicItemsList.length === 0) {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Can't find anything",
      },
    });
  } else {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Select an item from the list",
        components: [
          {
            type: MessageComponentTypes.ACTION_ROW,
            components: [
              {
                type: MessageComponentTypes.STRING_SELECT,
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

function monstersResponse(data: DataObject, res: Response) {
  const filteredMonsterList = getDataByQuery(
    monsterOptions,
    data.options[0].value
  );
  if (filteredMonsterList.length === 0) {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Can't find anything",
      },
    });
  } else {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Select a monster from the list",
        components: [
          {
            type: MessageComponentTypes.ACTION_ROW,
            components: [
              {
                type: MessageComponentTypes.STRING_SELECT,
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

// ###################################

async function selectSpellResponse(data: DataObject, res: Response) {
  const spellData = spells.filter((spell) => spell.index === data.values[0])[0];

  let formattedData = `**${spellData.name}** - `;
  if (spellData.school && spellData.school.name)
    formattedData += spellData.school.name;
  if (spellData.level) formattedData += `\n**Level:** ${spellData.level}`;
  if (spellData.classes && spellData.classes.length !== 0)
    formattedData += `\n**Classes:** ${returnArrayDataAsString(
      spellData.classes,
      "name"
    )}`;
  if (spellData.casting_time)
    formattedData += `\n**Casting Time:** ${spellData.casting_time}`;
  if (spellData.range) formattedData += `\n**Range:** ${spellData.range}`;
  if (spellData.duration)
    formattedData += `\n**Duration:** ${spellData.duration}`;
  if (spellData.concentration) formattedData += "\n**Concentration:** true";
  if (
    spellData.damage &&
    spellData.damage.damage_type &&
    spellData.damage.damage_type.name
  )
    formattedData += `\n**Damage Type:** ${spellData.damage.damage_type.name}`;
  if (spellData.area_of_effect)
    formattedData += `\n**Area of Effect:** **Type:** ${spellData.area_of_effect.type}, **Size:** ${spellData.area_of_effect.size}`;
  if (spellData.desc)
    formattedData += `\n**Description:** ${returnArrayDataAsString(
      spellData.desc,
      null
    )} `;
  if (
    spellData.higher_level &&
    spellData.higher_level.length &&
    spellData.higher_level.length !== 0
  )
    formattedData += returnArrayDataAsString(spellData.higher_level, null);

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: formattedData,
    },
  });
}

async function selectProficiencyResponse(data: DataObject, res: Response) {
  const proficiencyData = proficiencies.filter(
    (proficiency) => proficiency.index === data.values[0]
  )[0];

  let formattedData = `**${proficiencyData.name}** - `;
  if (proficiencyData.type)
    formattedData += `\n**Type:** ${proficiencyData.type}`;
  if (proficiencyData.classes && proficiencyData.classes.length)
    formattedData += `\n**Classes:** ${returnArrayDataAsString(
      proficiencyData.classes,
      "name"
    )}`;
  if (proficiencyData && proficiencyData.races.length)
    formattedData += `\n**Races:** ${returnArrayDataAsString(
      proficiencyData.races,
      "name"
    )}`;

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: formattedData,
    },
  });
}

async function selectFeatureResponse(data: DataObject, res: Response) {
  const featureData = features.filter(
    (feature) => feature.index === data.values[0]
  )[0];

  let formattedData = `**${featureData.name}**`;
  if (featureData.level) formattedData += `\n**Level:** ${featureData.level}`;
  if (featureData.desc)
    formattedData += `\n**Description:** ${returnArrayDataAsString(
      featureData.desc,
      null
    )}`;
  if (featureData.class)
    formattedData += `\n**Class:** ${featureData.class.name}`;
  if (featureData.subclass)
    formattedData += `\n**Subclass:** ${featureData.subclass.name}`;
  if (featureData.prerequisites && featureData.prerequisites.length)
    formattedData += `\n**Prerequisites:** ${returnArrayDataAsString(
      featureData.prerequisites,
      "name"
    )}`;

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: formattedData,
    },
  });
}

async function selectTrait(data: DataObject, res: Response) {
  const traitData = traits.filter((trait) => trait.index === data.values[0])[0];

  let formattedData = `**${traitData.name}**`;
  if (traitData.races && traitData.races.length !== 0)
    formattedData += `\n**Races:** ${returnArrayDataAsString(
      traitData.races,
      "name"
    )}`;
  if (traitData.subraces && traitData.subraces.length !== 0)
    formattedData += `\n**Sub-Races:** ${returnArrayDataAsString(
      traitData.subraces,
      "name"
    )}`;
  if (traitData.desc) formattedData += `\n**Description:** ${traitData.desc}`;

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: formattedData,
    },
  });
}

async function selectMagicItemResponse(data: DataObject, res: Response) {
  const magicItemData = magicItems.filter(
    (item) => item.index === data.values[0]
  )[0];

  let formattedData = `**${magicItemData.name}**`;
  if (magicItemData.desc)
    formattedData += `\n**Description:** ${returnArrayDataAsString(
      magicItemData.desc,
      null
    )}`;
  if (magicItemData.equipment_category)
    formattedData += `\n**Equipment Category:** ${magicItemData.equipment_category.name}`;
  if (magicItemData.rarity)
    formattedData += `\n**Rarity:** ${magicItemData.rarity.name}`;
  if (magicItemData.variants && magicItemData.variants.length)
    formattedData += `\n**Variants:** ${returnArrayDataAsString(
      magicItemData.variants,
      "name"
    )}`;
  if (magicItemData.variant)
    formattedData += `\n**Is a variant:** ${magicItemData.variant}`;

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: formattedData,
    },
  });
}

async function selectEquipmentResponse(data: DataObject, res: Response) {
  const equipmentData = equipment.filter(
    (equipment) => equipment.index === data.values[0]
  )[0];

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
    formattedData += `\n**Armor Class:** ${getArmorClassInfo(equipmentData)}`;
  if (equipmentData.str_minimum)
    formattedData += `\n**STR Minimum:** ${equipmentData.str_minimum}`;
  if (equipmentData.stealth_disadvantage)
    formattedData += `\n**Stealth Disadvantage:** ${equipmentData.stealth_disadvantage}`;
  if (equipmentData.gear_category)
    formattedData += `\n**Gear Category:** ${equipmentData.gear_category.name}`;
  if (equipmentData.contents && equipmentData.contents.length)
    formattedData += `\n**Contents:** ${getContentsInfo(equipmentData)}`;
  if (equipmentData.properties && equipmentData.properties.length)
    formattedData += `\n**Properties:** ${returnArrayDataAsString(
      equipmentData.properties,
      "name"
    )}`;
  if (equipmentData.desc && equipmentData.desc.length)
    formattedData += `\n**Description:** ${returnArrayDataAsString(
      equipmentData.desc,
      null
    )}`;

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: formattedData,
    },
  });
}

async function selectMonster(data: DataObject, res: Response) {
  const monsterData = monsters.filter(
    (monster) => monster.index === data.values[0]
  )[0];

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
  formattedData += `\n**AC:** ${getMonsterArmorClassInfo(monsterData)}`;
  formattedData += `\n**Speed:** Walk - ${
    monsterData.speed.walk ? monsterData.speed.walk : "None"
  }, Swim - ${
    monsterData.speed.swim ? monsterData.speed.swim : "None"
  }, Climb - ${
    monsterData.speed.climb ? monsterData.speed.climb : "None"
  }, Burrow - ${
    monsterData.speed.burrow ? monsterData.speed.burrow : "None"
  }, Hover - ${monsterData.speed.hover ? monsterData.speed.hover : "None"}`;
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
    formattedData += `\n**Senses:** ${getSensesInfo(monsterData)}`;
  if (monsterData.condition_immunities.length)
    formattedData += `\n**Condition Immunities:** ${returnArrayDataAsString(
      monsterData.condition_immunities,
      "name"
    )}`;
  if (monsterData.damage_immunities.length)
    formattedData += `\n**Damage Immunities:** ${returnArrayDataAsString(
      monsterData.damage_immunities,
      null
    )}`;
  if (monsterData.damage_resistances.length)
    formattedData += `\n**Damage Resistances:** ${returnArrayDataAsString(
      monsterData.damage_resistances,
      null
    )}`;
  if (monsterData.damage_vulnerabilities.length)
    formattedData += `\n**Damage Vulnerabilities:** ${returnArrayDataAsString(
      monsterData.damage_vulnerabilities,
      null
    )}`;
  if (monsterData.forms)
    formattedData += `\n**Forms:** ${returnArrayDataAsString(
      monsterData.forms,
      "name"
    )}`;

  let embeds: any = [];
  if (monsterData.image) {
    embeds = [
      {
        image: {
          url: "https://dnd5eapi.co" + monsterData.image,
        },
      },
    ];
  }

  console.log(embeds)

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: formattedData,
      embeds,
    },
  });
}

export {
  skillsResponse,
  abilityScoresResponse,
  alignmentsResponse,
  languagesResponse,
  conditionsResponse,
  spellsResponse,
  proficienciesResponse,
  featuresResponse,
  traitsResponse,
  equipmentResponse,
  magicItemsResponse,
  selectSpellResponse,
  selectProficiencyResponse,
  selectFeatureResponse,
  selectTrait,
  selectMagicItemResponse,
  selectEquipmentResponse,
  classesResponse,
  racesResponse,
  subClassesResponse,
  subRacesResponse,
  monstersResponse,
  selectMonster,
};
