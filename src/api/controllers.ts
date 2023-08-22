import { DiscordRequest } from './discordUtils.js'
import getSlashCommandBody from './getSlashCommandBody.js'
import { Request, Response, NextFunction } from "express";

const appId = process.env.APP_ID;
const globalEndpoint = `applications/${appId}/commands`;

async function getCommands(req: Request, res: Response, _next: NextFunction) {
  try {
    const discordRes = await DiscordRequest(globalEndpoint, {
      method: 'GET',
    });
    const result = await discordRes.json()
    return res.send(result)
  } catch (err) {
    return res.send({message: "Failed to get slash commands", error: err})
  }
}

async function deleteCommand(req: Request, res: Response, _next: NextFunction) {
  try {
    const discordRes = await DiscordRequest(`${globalEndpoint}/${req.params.id}`, {
      method: 'DELETE',
    });

    const resJson = await discordRes.json()

    return res.send({message: 'deleted', details: resJson})
  } catch (err) {
    return res.send({message: "Failed to get delete command", error: err})
  }
}

interface CreateCommandsResponseObject {
  slashCommandName: string;
  resJson?: Response;
  message: string;
  error?: any;
}

async function createCommands(req: Response, res: Response, _next: NextFunction) {
  const slashCommandsList = [
    'help',
    // 'skills',
    // 'ability-scores',
    // 'alignments',
    // 'languages',
    // 'races',
    // 'classes',
    // "spells",
    // "proficiencies",
    // "features",
    // "traits",
    // "conditions",
    // "equipment"
    // "magicitems",
    // "roll"
  ]

  const responseList: CreateCommandsResponseObject[] = []

  await Promise.all(
    slashCommandsList.map( async (slashCommandName: string) => {
      const commandBody = await getSlashCommandBody(slashCommandName)

      try {
        if(!commandBody) throw {message: "missing command body"}
        // Send HTTP request with bot token
        const res = await DiscordRequest(globalEndpoint, {
          method: 'POST',
          body: commandBody,
        });

        const resJson = await res.json()
        responseList.push({slashCommandName, resJson, message: 'success'})
      } catch (err) {
        console.log(err);
        responseList.push({slashCommandName, error: err, message: "Failed"})
      }
    })
  )
  return res.send({list: responseList})
}

export {
  getCommands,
  deleteCommand,
  createCommands
}