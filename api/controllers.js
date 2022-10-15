import { DiscordRequest } from './discordUtils.js'
import getSlashCommandBody from './getSlashCommandBody.js'

const appId = process.env.APP_ID;
const globalEndpoint = `applications/${appId}/commands`;

async function getSlashCommands(req, res, next) {
  try {
    const discordRes = await DiscordRequest(globalEndpoint, {
      method: 'GET',
    });
    const result = await discordRes.json()
    console.log(result);
    return res.send(result)
  } catch (err) {
    return res.send({message: "Failed to get slash commands", error: err})
  }
}

async function deleteSlashCommand(req, res, next) {
  try {
    const discordRes = await DiscordRequest(`${globalEndpoint}/${req.params.id}`, {
      method: 'DELETE',
    });

    const resJson = await discordRes.json()
    console.log(resJson);

    return res.send({message: 'deleted', details: resJson})
  } catch (err) {
    return res.send({message: "Failed to get delete command", error: err})
  }
}

async function createSlashCommands(req, res, next) {
  const slashCommandsList = [
    'skills',
    'ability-scores',
    'alignments',
    'languages',
    'races'
  ]

  const responseList = []

  await Promise.all(
    slashCommandsList.map( async (slashCommandName) => {
      const commandBody = await getSlashCommandBody(slashCommandName)

      try {
        if(!commandBody) throw new Error({message: "missing command body"})
        // Send HTTP request with bot token
        const res = await DiscordRequest(globalEndpoint, {
          method: 'POST',
          body: commandBody,
        });

        const resJson = await res.json()
        console.log(resJson);
        responseList.push({slashCommandName, resJson, status: 'success'})
      } catch (err) {
        console.log(err);
        responseList.push({slashCommandName, error: err.message, status: "Failed"})
      }
    })
  )
  return res.send({list: responseList})
}

export {
  getSlashCommands,
  deleteSlashCommand,
  createSlashCommands
}