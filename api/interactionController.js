import {
  InteractionType,
  InteractionResponseType,
  MessageComponentTypes,
} from "discord-interactions";
import fetchGet from "../fetchWrapper.js";
import convert from "json-to-plain-text";
import { getSpellsByQuery, getProficienciesByQuery } from "../lib/search.js";

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
      const returnInfo = `**${scoreData.name}**\n\n${scoreData.desc}`;
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
        languageData.desc ? languageData.desc : "Description is missing"
      }\n\n**Typical Speakers:** ${JSON.stringify(languageData.typical_speakers)}`;
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
      const filteredSpellList = getSpellsByQuery(data.options[0].value);
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
      const filteredProficienciesList = getProficienciesByQuery(data.options[0].value);
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
      if(spellData.classes.length !== 0) formattedData += `\n**Classes:** ${spellData.classes.map(item => item.name)}`
      if(spellData.casting_time) formattedData += `\n**Casting Time:** ${spellData.casting_time}`
      if(spellData.range) formattedData += `\n**Range:** ${spellData.range}` 
      if(spellData.duration) formattedData += `\n**Duration:** ${spellData.duration}`
      if(spellData.concentration) formattedData += "\n**Concentration:** true"
      if(spellData.damage && spellData.damage.damage_type.name) formattedData += `\n**Damage Type:** ${spellData.damage.damage_type.name}`
      if(spellData.area_of_effect) formattedData += `\n**Area of Effect:** **Type:** ${spellData.area_of_effect.type}, **Size:** ${spellData.area_of_effect.size}`
      if(spellData.desc) formattedData += `\n**Description:** ${spellData.desc} `
      if(spellData.higher_level.length !== 0) formattedData += spellData.higher_level.map((item) => item)

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
      if(proficiencyData.classes.length) formattedData += `\n**Classes:** ${proficiencyData.classes.map(item => item.name)}`
      if(proficiencyData.races.length) formattedData += `\n**Races:** ${proficiencyData.races.map(item => item.name)}`

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
