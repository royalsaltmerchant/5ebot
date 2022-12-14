import {
  InteractionType,
  InteractionResponseType,
  MessageComponentTypes,
} from "discord-interactions";
import fetchGet from "../fetchWrapper.js";
import { getDataByQuery } from "../lib/search.js";
import spells from '../data/spells.js'
import proficiencies from '../data/proficiencies.js'
import features from '../data/features.js'
import traits from '../data/traits.js'
import equipment from '../data/equipment.js'
import magicItems from '../data/magicItems.js'

function returnArrayDataAsString(array, key) {
  if(typeof array === 'string') return array
  if(!Array.isArray(array)) return 'Unknown'
  var string = ''
  if(key) {
    array.forEach(item => {
      string += `${item[key]}\n`
    })
  } else {
    array.forEach(item => {
      string += `${item}\n`
    })
  }
  return string
}

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
        // INIT Input
        const input = data.options[0].value.trim().toLowerCase()
        console.log(input, '**** INPUT ****');
        // get amount of dice
        const amountOfDice = parseInt(input.split('d', 2)[0].trim()); console.log(amountOfDice, 'Amount of Dice');
        // get dice sides
        let diceSides = input.split('d', 2)[1];
        if(diceSides.includes('+')) {
          diceSides = diceSides.split('+', 2)[0].trim()
        }
        diceSides = parseInt(diceSides)
        console.log(diceSides, 'Dice Sides')
        // get modifiers
        let modifiers;
        if(input.includes('+')) {
          modifiers = input.split('+')
          modifiers.shift()
          for(var i=0;i<modifiers.length;i++) {
            modifiers[i] = parseInt(modifiers[i])
          }
          console.log(modifiers, 'Modifiers')
        }
        // get dice rolls
        let diceRolls = [];
        for(var i=0;i<amountOfDice;i++) {
          const newValue = Math.floor( (Math.random() * diceSides) + 1)
          diceRolls.push(newValue)
        }
        console.log(diceRolls, 'Dice Rolls Array')

        // CALCULATE TOTAL
        // Add modifiers
        let total = 0; // ******************** TOTAL ******************************
        for(var i=0;i<diceRolls.length;i++) {
          total += diceRolls[i]
        }
        if(modifiers) {
          for(var i=0;i<modifiers.length;i++) {
            total += modifiers[i]
          }
        }
        console.log(total, '***** TOTAL *****')
        // Display Information 
        let responseInfo = ''
        responseInfo += `**Input:** ${input}\n`
        diceRolls.forEach((roll, index) => {
          let diceInfoString = `\n**Roll ${index + 1}:** ${roll}`
          if(roll === diceSides) diceInfoString += ' - **CRITICAL**'
          responseInfo += diceInfoString
        })
        responseInfo += `\n\n**TOTAL = ${total}**`

        // send
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: responseInfo,
          },
        });
      } catch(err) {
        console.log(err)
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: `Failed to calculate, try again.`,
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
      let returnInfo = `**${scoreData.name}**\n\n${returnArrayDataAsString(scoreData.desc)}`;
      if(scoreData.skills && scoreData.skills.length) returnInfo += `\n**Skills:** ${returnArrayDataAsString(scoreData.skills, "name")}`
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
        languageData.desc ? returnArrayDataAsString(languageData.desc) : "Description is missing"
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
        conditionData.desc ? returnArrayDataAsString(conditionData.desc) : "Description is missing"
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
      if(spellData.classes && spellData.classes.length !== 0) formattedData += `\n**Classes:** ${returnArrayDataAsString(spellData.classes, "name")}`
      if(spellData.casting_time) formattedData += `\n**Casting Time:** ${spellData.casting_time}`
      if(spellData.range) formattedData += `\n**Range:** ${spellData.range}` 
      if(spellData.duration) formattedData += `\n**Duration:** ${spellData.duration}`
      if(spellData.concentration) formattedData += "\n**Concentration:** true"
      if(spellData.damage && spellData.damage.damage_type.name) formattedData += `\n**Damage Type:** ${spellData.damage.damage_type.name}`
      if(spellData.area_of_effect) formattedData += `\n**Area of Effect:** **Type:** ${spellData.area_of_effect.type}, **Size:** ${spellData.area_of_effect.size}`
      if(spellData.desc) formattedData += `\n**Description:** ${returnArrayDataAsString(spellData.desc)} `
      if(spellData.higher_level.length && spellData.higher_level.length !== 0) formattedData += returnArrayDataAsString(spellData.higher_level)

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
      if(proficiencyData.classes && proficiencyData.classes.length) formattedData += `\n**Classes:** ${returnArrayDataAsString(proficiencyData.classes, "name")}`
      if(proficiencyData.data && proficiencyData.races.length) formattedData += `\n**Races:** ${returnArrayDataAsString(proficiencies.races, "name")}`

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
      if(featureData.desc) formattedData += `\n**Description:** ${returnArrayDataAsString(featureData.desc)}`
      if(featureData.class) formattedData += `\n**Class:** ${featureData.class.name}`
      if(featureData.subclass) formattedData += `\n**Subclass:** ${featureData.subclass.name}`
      if(featureData.prerequisites && featureData.prerequisites.length) formattedData += `\n**Prerequisites:** ${returnArrayDataAsString(featureData.prerequisites, "name")}`

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
      if(traitData.races && traitData.races.length !== 0) formattedData += `\n**Races:** ${returnArrayDataAsString(traitData.races, "name")}`
      if(traitData.subraces && traitData.subraces.length !== 0) formattedData += `\n**Sub-Races:** ${returnArrayDataAsString(traitData.subraces, "name")}`
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
      if(magicItemData.desc) formattedData += `\n**Description:** ${returnArrayDataAsString(magicItemData.desc)}`
      if(magicItemData.equipment_category) formattedData += `\n**Equipment Category:** ${magicItemData.equipment_category.name}`
      if(magicItemData.rarity) formattedData += `\n**Rarity:** ${magicItemData.rarity.name}`
      if(magicItemData.variants && magicItemData.variants.length) formattedData += `\n**Variants:** ${returnArrayDataAsString(magicItemData.variants, "name")}`
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

      function getArmorClassInfo() {
        let string = ""
        for( const [key, value] of Object.entries(equipmentData.armor_class)) {
          string += `${key}: ${value}, `
        }
        return string
      }

      function getContentsInfo() {
        let string = ""
        for( const item of equipmentData.contents) {
          string += `${item.item.name}: ${item.quantity}\n`
        }
        return string
      }

      let formattedData = `**${equipmentData.name}**`
      if(equipmentData.weight) formattedData += `\n**Weight:** ${equipmentData.weight}`
      if(equipmentData.equipment_category) formattedData += `\n**Equipment Category:** ${equipmentData.equipment_category.name}`
      if(equipmentData.weapon_category) formattedData += `\n**Weapon Category:** ${equipmentData.weapon_category}`
      if(equipmentData.weapon_range) formattedData += `\n**Weapon Range:** ${equipmentData.weapon_range}`
      if(equipmentData.range) formattedData += `\n**Weapon Range:** Normal:${equipmentData.range.normal}, Long: ${equipmentData.range.long}`
      if(equipmentData.damage) formattedData += `\n**Damage:** Dice: ${equipmentData.damage.damage_dice}, Type: ${equipmentData.damage.damage_type.name}`
      if(equipmentData.two_handed_damage) formattedData += `\n**Two Handed Damage:** Dice: ${equipmentData.two_handed_damage.damage_dice}, Type: ${equipmentData.two_handed_damage.damage_type.name}`
      if(equipmentData.armor_category) formattedData += `\n**Armor Category:** ${equipmentData.armor_category}`
      if(equipmentData.armor_class) formattedData += `\n**Armor Class:** ${getArmorClassInfo()}`
      if(equipmentData.str_minimum) formattedData += `\n**STR Minimum:** ${equipmentData.str_minimum}`
      if(equipmentData.stealth_disadvantage) formattedData += `\n**Stealth Disadvantage:** ${equipmentData.stealth_disadvantage}`
      if(equipmentData.gear_category) formattedData += `\n**Gear Category:** ${equipmentData.gear_category.name}`
      if(equipmentData.contents && equipmentData.contents.length) formattedData += `\n**Contents:** ${getContentsInfo()}`
      if(equipmentData.properties && equipmentData.properties.length) formattedData += `\n**Properties:** ${returnArrayDataAsString(equipmentData.properties, "name")}`
      if(equipmentData.desc && equipmentData.desc.length) formattedData += `\n**Description:** ${returnArrayDataAsString(equipmentData.desc)}`

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
