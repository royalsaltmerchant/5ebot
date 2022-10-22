import {
  InteractionType,
  InteractionResponseType,
  MessageComponentTypes,
} from "discord-interactions";
import fetchGet from "../fetchWrapper.js";
import convert from "json-to-plain-text";
import { getDataByQuery } from "../lib/search.js";
import spells from '../data/spells.js'
import proficiencies from '../data/proficiencies.js'
import features from '../data/features.js'
import traits from '../data/traits.js'
import equipment from '../data/equipment.js'
import magicItems from '../data/magicItems.js'

async function interactionsController(req, res, next) {
  // Interaction type and data
  const { type, data } = req.body;
  // handle verification
  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }
  // Handle slash command requests
  if (type === InteractionType.APPLICATION_COMMAND) {
    console.log("***********************************************");
    console.log(data);

    // ******************************** ROLL **********************************************
    // Roll
    if (data.name === "roll") {
      try {

        const input = data.options[0].value.trim().split(' ')
        console.log(input);
  
        const amountOfDice = parseInt(input[0])
        const diceType = input[1]
        const diceSides = parseInt(diceType.split('d')[1])
        // const mathOperator = input[2]
        const modifier = parseInt(input[3])
        
        let resultCalculated = 0;
  
        for(var i=0;i<amountOfDice;i++) {
          let newValue = Math.floor(Math.random() * diceSides)
          if(newValue === 0) newValue++
          console.log(newValue, 'new value')
          resultCalculated += newValue
          console.log(resultCalculated, 'total')
        }
  
        if(modifier) resultCalculated += modifier
        resultCalculated = resultCalculated + ''
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: resultCalculated,
          },
        });
      } catch(err) {
        console.log(err)
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: `Failed`,
          },
        });

      }

    }

    // ******************************** CHARACTER *****************************************
    // Skills
    if (data.name === "skills") {
      const skillData = await fetchGet(
        `https://www.dnd5eapi.co/api/skills/${data.options[0].value}`
      );
      console.log(skillData);
      const returnInfo = `**${skillData.name}**\n\n${skillData.desc}\n\n**Ability Score:** ${skillData.ability_score.name}`;
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: returnInfo,
        },
      });
    }
    // ability score select
    if (data.name === "ability-scores") {
      const scoreData = await fetchGet(
        `https://www.dnd5eapi.co/api/ability-scores/${data.options[0].value}`
      );
      console.log(scoreData);
      let returnInfo = `**${scoreData.name}**\n\n${scoreData.desc.map(item => item)}`;
      if(scoreData.skills && scoreData.skills.length) returnInfo += `\n**Skills:** ${scoreData.skills.map(skill => skill.name)}`
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: returnInfo,
        },
      });
    }
    // alignment select
    if (data.name === "alignments") {
      const alignmentData = await fetchGet(
        `https://www.dnd5eapi.co/api/alignments/${data.options[0].value}`
      );
      console.log(alignmentData);
      const returnInfo = `**${alignmentData.name}**\n\n${alignmentData.desc}`;
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: returnInfo,
        },
      });
    }
    // language select
    if (data.name === "languages") {
      const languageData = await fetchGet(
        `https://www.dnd5eapi.co/api/languages/${data.options[0].value}`
      );
      console.log(languageData);
      const returnInfo = `**${languageData.name}**\n\n${
        languageData.desc ? languageData.desc.map(item => item) : "Description is missing"
      }\n\n**Typical Speakers:** ${JSON.stringify(languageData.typical_speakers)}`;
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: returnInfo,
        },
      });
    }
    // condition select
    if (data.name === "conditions") {
      const conditionData = await fetchGet(
        `https://www.dnd5eapi.co/api/conditions/${data.options[0].value}`
      );
      console.log(conditionData);
      const returnInfo = `**${conditionData.name}**\n\n${
        conditionData.desc ? conditionData.desc.map(item => item) : "Description is missing"
      }`
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: returnInfo,
        },
      });
    }
    // race select
    // if (data.name === "races") {
    //   const raceData = await fetchGet(
    //     `https://www.dnd5eapi.co/api/races/${data.options[0].value}`
    //   );
    //   const raceDataReduced = {
    //     name: raceData.name,
    //     speed: raceData.speed,
    //     age: raceData.age,
    //     alignment: raceData.alignment,
    //     size: raceData.size,
    //     size_description: raceData.size_description,
    //     ability_bonuses: raceData.ability_bonuses
    //       ? raceData.ability_bonuses.map((item) => ({
    //           ability_score: item.ability_score.name,
    //           bonus: item.bonus,
    //         }))
    //       : null,
    //     starting_proficiencies: raceData.starting_proficiencies
    //       ? raceData.starting_proficiencies.map((item) => ({
    //           starting_proficiencies: item.name,
    //         }))
    //       : null,
    //     languages: raceData.languages
    //       ? raceData.languages.map((item) => ({ languages: item.name }))
    //       : null,
    //     language_desc: raceData.language_desc,
    //     traits: raceData.traits
    //       ? raceData.traits.map((item) => ({ traits: item.name }))
    //       : null,
    //     subraces: raceData.subraces
    //       ? raceData.subraces.map((item) => ({ subraces: item.name }))
    //       : null,
    //   };
    //   const plainTextData = convert.toPlainText(raceDataReduced);
    //   console.log(plainTextData, "**************");
    //   return res.send({
    //     type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    //     data: {
    //       content: plainTextData,
    //     },
    //   });
    // }
    // spells search
    if (data.name === "spells") {
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
            content: "A message with a button",
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
    // proficiencies search
    if (data.name === "proficiencies") {
      const filteredProficienciesList = getDataByQuery(proficiencies, data.options[0].value);
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
            content: "A message with a button",
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
    // features
    if (data.name === "features") {
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
            content: "A message with a button",
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
    // traits
    if (data.name === "traits") {
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
            content: "A message with a button",
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
    // equipment
    if (data.name === "equipment") {
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
            content: "A message with a button",
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
    // magic items
    if (data.name === "magicitems") {
      const filteredMagicItemsList = getDataByQuery(magicItems, data.options[0].value);
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
            content: "A message with a button",
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
    // class options
    // if(data.name === 'classes') {
    //   const classSelection = data.options[0].value
    //   const itemSelection = data.options[1].value
    //   if(itemSelection === 'proficiencies') {
    //     console.log('proficiencies')
    //     const classProfData = await fetchGet(`https://www.dnd5eapi.co/api/classes/${classSelection}/proficiencies`)
    //     const returnInfo = `${classSelection}:\n\n${classProfData.results.map(item => (`${item.name}\n`))}`
    //     return res.send({
    //       type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    //       data: {
    //         content: returnInfo,
    //       },
    //     });
    //   }
    //   if(itemSelection === 'spells') {
    //     console.log('spells')
    //     const classSpellData = await fetchGet(`https://www.dnd5eapi.co/api/classes/${classSelection}/spells`)
    //     const returnInfo = `${classSelection}:\n\n${classSpellData.results.map(item => (` ${item.name}`))}`
    //     return res.send({
    //       type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    //       data: {
    //         content: returnInfo,
    //       },
    //     });
    //   }
    // }
  }
  // Handle interactions
  if (type === InteractionType.MESSAGE_COMPONENT) {
    console.log("***********************************************");
    console.log(data);
    // spell
    if (data.custom_id === "select_spell") {
      const spellData = await fetchGet(
        `https://www.dnd5eapi.co/api/spells/${data.values[0]}`
      );
      console.log(spellData);

      let formattedData = `**${spellData.name}** - `
      if(spellData.school && spellData.school.name) formattedData += spellData.school.name
      if(spellData.level) formattedData += `\n**Level:** ${spellData.level}`
      if(spellData.classes && spellData.classes.length !== 0) formattedData += `\n**Classes:** ${spellData.classes.map(item => item.name)}`
      if(spellData.casting_time) formattedData += `\n**Casting Time:** ${spellData.casting_time}`
      if(spellData.range) formattedData += `\n**Range:** ${spellData.range}` 
      if(spellData.duration) formattedData += `\n**Duration:** ${spellData.duration}`
      if(spellData.concentration) formattedData += "\n**Concentration:** true"
      if(spellData.damage && spellData.damage.damage_type.name) formattedData += `\n**Damage Type:** ${spellData.damage.damage_type.name}`
      if(spellData.area_of_effect) formattedData += `\n**Area of Effect:** **Type:** ${spellData.area_of_effect.type}, **Size:** ${spellData.area_of_effect.size}`
      if(spellData.desc) formattedData += `\n**Description:** ${spellData.desc.map(item => item)} `
      if(spellData.higher_level.length && spellData.higher_level.length !== 0) formattedData += spellData.higher_level.map((item) => item)

      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: formattedData,
        },
      });
    }
    // proficiency
    if (data.custom_id === "select_proficiency") {
      const proficiencyData = await fetchGet(
        `https://www.dnd5eapi.co/api/proficiencies/${data.values[0]}`
      );
      console.log(proficiencyData);

      let formattedData = `**${proficiencyData.name}** - `
      if(proficiencyData.type) formattedData += `\n**Type:** ${proficiencyData.type}`
      if(proficiencyData.classes && proficiencyData.classes.length) formattedData += `\n**Classes:** ${proficiencyData.classes.map(item => item.name)}`
      if(proficiencyData.data && proficiencyData.races.length) formattedData += `\n**Races:** ${proficiencyData.races.map(item => item.name)}`

      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: formattedData,
        },
      });
    }
    // feature
    if (data.custom_id === "select_feature") {
      const featureData = await fetchGet(
        `https://www.dnd5eapi.co/api/features/${data.values[0]}`
      );
      console.log(featureData);

      let formattedData = `**${featureData.name}**`
      if(featureData.level) formattedData += `\n**Level:** ${featureData.level}`
      if(featureData.desc) formattedData += `\n**Description:** ${featureData.desc.map(item => item)}`
      if(featureData.class) formattedData += `\n**Class:** ${featureData.class.name}`
      if(featureData.subclass) formattedData += `\n**Subclass:** ${featureData.subclass.name}`
      if(featureData.prerequisites && featureData.prerequisites.length) formattedData += `\n**Prerequisites:** ${featureData.prerequisites.map(item => item.name)}`

      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: formattedData,
        },
      });
    }
    // traits
    if (data.custom_id === "select_trait") {
      const traitData = await fetchGet(
        `https://www.dnd5eapi.co/api/traits/${data.values[0]}`
      );
      console.log(traitData);

      let formattedData = `**${traitData.name}**`
      if(traitData.desc) formattedData += `\n**Description:** ${traitData.desc}`

      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: formattedData,
        },
      });
    }
    // magic item
    if (data.custom_id === "select_magicitem") {
      const magicItemData = await fetchGet(
        `https://www.dnd5eapi.co/api/magic-items/${data.values[0]}`
      );
      console.log(magicItemData);

      let formattedData = `**${magicItemData.name}**`
      if(magicItemData.desc) formattedData += `\n**Description:** ${magicItemData.desc.map(item => item)}`
      if(magicItemData.equipment_category) formattedData += `\n**Equipment Category:** ${magicItemData.equipment_category.name}`
      if(magicItemData.rarity) formattedData += `\n**Rarity:** ${magicItemData.rarity.name}`
      if(magicItemData.variants && magicItemData.variants.length) formattedData += `\n**Variants:** ${magicItemData.variants.map(variant => variant.name)}`
      if(magicItemData.variant) formattedData += `\n**Is a variant:** ${magicItemData.variant}`

      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: formattedData,
        },
      });
    }
    // equipment
    if (data.custom_id === "select_equipment") {
      const equipmentData = await fetchGet(
        `https://www.dnd5eapi.co/api/equipment/${data.values[0]}`
      );
      console.log(equipmentData);

      let formattedData = `**${equipmentData.name}**`
      if(equipmentData.weight) formattedData += `\n**Weight:** ${equipmentData.weight}`
      if(equipmentData.equipment_category) formattedData += `\n**Equipment Category:** ${equipmentData.equipment_category.name}`
      if(equipmentData.weapon_category) formattedData += `\n**Weapon Category:** ${equipmentData.weapon_category}`
      if(equipmentData.weapon_range) formattedData += `\n**Weapon Range:** ${equipmentData.weapon_range}`
      if(equipmentData.range) formattedData += `\n**Weapon Range:** Normal:${equipmentData.range.normal}, Long: ${equipmentData.range.long}`
      if(equipmentData.damage) formattedData += `\n**Damage:** Dice: ${equipmentData.damage.damage_dice}, Type: ${equipmentData.damage.damage_type.name}`
      if(equipmentData.two_handed_damage) formattedData += `\n**Two Handed Damage:** Dice: ${equipmentData.two_handed_damage.damage_dice}, Type: ${equipmentData.two_handed_damage.damage_type.name}`
      if(equipmentData.armor_category) formattedData += `\n**Armor Category:** ${equipmentData.armor_category}`
      if(equipmentData.armor_class) formattedData += `\n**Armor Class:** ${convert(equipmentData.armor_class)}`
      if(equipmentData.str_minimum) formattedData += `\n**STR Minimum:** ${equipmentData.str_minimum}`
      if(equipmentData.stealth_disadvantage) formattedData += `\n**Stealth Disadvantage:** ${equipmentData.stealth_disadvantage}`
      if(equipmentData.gear_category) formattedData += `\n**Gear Category:** ${equipmentData.gear_category.name}`
      if(equipmentData.contents && equipmentData.contents.length) formattedData += `\n**Contents:** ${equipmentData.contents.map(item => ` ${item.item.name}: ${item.quantity}`)}`
      if(equipmentData.properties && equipmentData.properties.length) formattedData += `\n**Properties:** ${equipmentData.properties.map(property => property.name)}`
      if(equipmentData.desc && equipmentData.desc.length) formattedData += `\n**Description:** ${equipmentData.desc.map(item => item)}`

      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: formattedData,
        },
      });
    }
  }
}

export default interactionsController;
