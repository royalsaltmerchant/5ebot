import { InteractionType, InteractionResponseType, MessageComponentTypes } from 'discord-interactions'
import fetchGet from '../fetchWrapper.js'
import convert from 'json-to-plain-text'


async function interactionsController(req, res, next) {
  // Interaction type and data
  const { type, data } = req.body;
  // handle verification
  if (type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }
  // Handle slash command requests
  if (type === InteractionType.APPLICATION_COMMAND) {
    console.log('***********************************************')
    console.log(data)

// ******************************** CHARACTER *****************************************
    // Skills
    if (data.name === 'skills') {
      const skillData = await fetchGet(`https://www.dnd5eapi.co/api/skills/${data.options[0].value}`)
      console.log(skillData)
      const returnInfo = `${skillData.name}\n\n${skillData.desc}\n\nAbility Score: ${skillData.ability_score.name}`
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: returnInfo,
        },
      });
    }
    // ability score select
    if(data.name === 'ability-scores') {
      const scoreData = await fetchGet(`https://www.dnd5eapi.co/api/ability-scores/${data.options[0].value}`)
      console.log(scoreData)
      const returnInfo = `${scoreData.name}\n\n${scoreData.desc}`
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: returnInfo,
        },
      });
    }
    // alignment select
    if(data.name === 'alignments') {
      const alignmentData = await fetchGet(`https://www.dnd5eapi.co/api/alignments/${data.options[0].value}`)
      console.log(alignmentData)
      const returnInfo = `${alignmentData.name}\n\n${alignmentData.desc}`
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: returnInfo,
        },
      });
    }
    // language select
    if(data.name === 'languages') {
      const languageData = await fetchGet(`https://www.dnd5eapi.co/api/languages/${data.options[0].value}`)
      console.log(languageData)
      const returnInfo = `${languageData.name}\n\n${languageData.desc ? languageData.desc : "Description is missing"}\n\nTypical Speakers: ${JSON.stringify(languageData.typical_speakers)}`
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: returnInfo,
        },
      });
    }
    // // race select
    if(data.name === 'races') {
      const raceData = await fetchGet(`https://www.dnd5eapi.co/api/races/${data.options[0].value}`)
      const raceDataReduced = {
          name: raceData.name,
          speed: raceData.speed,
          age: raceData.age,
          alignment: raceData.alignment,
          size: raceData.size,
          size_description: raceData.size_description,
          ability_bonuses: raceData.ability_bonuses ? raceData.ability_bonuses.map(item => ({ability_score: item.ability_score.name, bonus: item.bonus})) : null,
          starting_proficiencies: raceData.starting_proficiencies ? raceData.starting_proficiencies.map(item => ({starting_proficiencies: item.name})) : null,
          languages: raceData.languages ? raceData.languages.map(item => ({languages: item.name})) : null,
          language_desc: raceData.language_desc,
          traits: raceData.traits ? raceData.traits.map(item => ({traits: item.name})) : null,
          subraces: raceData.subraces ? raceData.subraces.map(item => ({subraces: item.name})) : null,
        }
      const plainTextData = convert.toPlainText(raceDataReduced)
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: plainTextData,
        },
      });
    }

  }
  // Handle interactions
  if (type === InteractionType.MESSAGE_COMPONENT) {
    console.log('***********************************************')
    console.log(data)

  }   
}

export default interactionsController