import {
  InteractionResponseType,
  MessageComponentTypes,
} from "discord-interactions";
import spells from "../data/spells.js";
import proficiencies from "../data/proficiencies.js";
import features from "../data/features.js";
import traits from "../data/traits.js";
import equipment from "../data/equipment.js";
import magicItems from "../data/magicItems.js";
import { getDataByQuery } from "../lib/search.js";
import { Response } from "express";
import { DataObject } from "../api/interactionController.js";
import fetchGet from "../lib/fetchWrapper.js";
import {
  returnArrayDataAsString,
  getArmorClassInfo,
  getContentsInfo,
} from "../lib/dataUtils.js";

async function skillsResponse(data: DataObject, res: Response) {
  const skillData = await fetchGet(
    `https://www.dnd5eapi.co/api/skills/${data.options[0].value}`
  );
  const returnInfo = `**${skillData.name}**\n\n${skillData.desc}\n\n**Ability Score:** ${skillData.ability_score.name}`;
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: returnInfo,
    },
  });
}

async function abilityScoresResponse(data: DataObject, res: Response) {
  const scoreData = await fetchGet(
    `https://www.dnd5eapi.co/api/ability-scores/${data.options[0].value}`
  );
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

async function alignmentsResponse(data: DataObject, res: Response) {
  const alignmentData = await fetchGet(
    `https://www.dnd5eapi.co/api/alignments/${data.options[0].value}`
  );
  const returnInfo = `**${alignmentData.name}**\n\n${alignmentData.desc}`;
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: returnInfo,
    },
  });
}

async function languagesResponse(data: DataObject, res: Response) {
  const languageData = await fetchGet(
    `https://www.dnd5eapi.co/api/languages/${data.options[0].value}`
  );
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

async function conditionsResponse(data: DataObject, res: Response) {
  const conditionData = await fetchGet(
    `https://www.dnd5eapi.co/api/conditions/${data.options[0].value}`
  );
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

async function spellsResponse(data: DataObject, res: Response) {
  const filteredSpellList = getDataByQuery(spells, data.options[0].value);
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

async function proficienciesResponse(data: DataObject, res: Response) {
  const filteredProficienciesList = getDataByQuery(
    proficiencies,
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

async function featuresResponse(data: DataObject, res: Response) {
  const filteredFeaturesList = getDataByQuery(features, data.options[0].value);
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

async function traitsResponse(data: DataObject, res: Response) {
  const filteredEquipmentList = getDataByQuery(traits, data.options[0].value);
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

async function equipmentResponse(data: DataObject, res: Response) {
  const filteredTraitsList = getDataByQuery(equipment, data.options[0].value);
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

async function magicItemsResponse(data: DataObject, res: Response) {
  const filteredMagicItemsList = getDataByQuery(
    magicItems,
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

// ###################################

async function selectSpellResponse(data: DataObject, res: Response) {
  const spellData = await fetchGet(
    `https://www.dnd5eapi.co/api/spells/${data.values[0]}`
  );

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
  if (spellData.damage && spellData.damage.damage_type.name)
    formattedData += `\n**Damage Type:** ${spellData.damage.damage_type.name}`;
  if (spellData.area_of_effect)
    formattedData += `\n**Area of Effect:** **Type:** ${spellData.area_of_effect.type}, **Size:** ${spellData.area_of_effect.size}`;
  if (spellData.desc)
    formattedData += `\n**Description:** ${returnArrayDataAsString(
      spellData.desc,
      null
    )} `;
  if (spellData.higher_level.length && spellData.higher_level.length !== 0)
    formattedData += returnArrayDataAsString(spellData.higher_level, null);

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: formattedData,
    },
  });
}

async function selectProficiencyResponse(data: DataObject, res: Response) {
  const proficiencyData = await fetchGet(
    `https://www.dnd5eapi.co/api/proficiencies/${data.values[0]}`
  );

  let formattedData = `**${proficiencyData.name}** - `;
  if (proficiencyData.type)
    formattedData += `\n**Type:** ${proficiencyData.type}`;
  if (proficiencyData.classes && proficiencyData.classes.length)
    formattedData += `\n**Classes:** ${returnArrayDataAsString(
      proficiencyData.classes,
      "name"
    )}`;
  if (proficiencyData.data && proficiencyData.races.length)
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
  const featureData = await fetchGet(
    `https://www.dnd5eapi.co/api/features/${data.values[0]}`
  );

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
  const traitData = await fetchGet(
    `https://www.dnd5eapi.co/api/traits/${data.values[0]}`
  );

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
  const magicItemData = await fetchGet(
    `https://www.dnd5eapi.co/api/magic-items/${data.values[0]}`
  );

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
  const equipmentData = await fetchGet(
    `https://www.dnd5eapi.co/api/equipment/${data.values[0]}`
  );

  let formattedData = `**${equipmentData.name}**`;
  if (equipmentData.weight)
    formattedData += `\n**Weight:** ${equipmentData.weight}`;
  if (equipmentData.equipment_category)
    formattedData += `\n**Equipment Category:** ${equipmentData.equipment_category.name}`;
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
};
