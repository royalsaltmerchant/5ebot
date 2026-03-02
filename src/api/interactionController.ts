import { InteractionType, InteractionResponseType } from "discord-interactions";
import { rollResponse } from "../lib/dice.js";
import {
  abilityScoresResponse,
  alignmentsResponse,
  classesResponse,
  conditionsResponse,
  equipmentResponse,
  featuresResponse,
  languagesResponse,
  magicItemsResponse,
  monstersResponse,
  proficienciesResponse,
  racesResponse,
  selectEquipmentResponse,
  selectFeatureResponse,
  selectMagicItemResponse,
  selectMonster,
  selectProficiencyResponse,
  selectSpellResponse,
  selectTrait,
  skillsResponse,
  spellsResponse,
  subClassesResponse,
  subRacesResponse,
  traitsResponse,
} from "../lib/info.js";
import { Request, Response, NextFunction } from "express";
import { initiativeResponse } from "../lib/initiative.js";
import { handleQueryResponse } from "../lib/query.js";
import { logError } from "../lib/logger.js";
import { sendSlashCommandTelemetry } from "../lib/commandTelemetry.js";

export interface DataObject {
  id: string;
  options: [
    {
      value: any;
      options: any[];
      name: string;
    }
  ];
  values: [{}];
}

async function interactionsController(
  req: Request,
  res: Response,
  _next: NextFunction
) {
  try {
    // Interaction type and data
    const { type, data } = req.body;
    // handle verification
    if (type === InteractionType.PING) {
      return res.send({ type: InteractionResponseType.PONG });
    }
    // Handle slash command requests
    if (type === InteractionType.APPLICATION_COMMAND) {
      const guildId: string | null =
        typeof req.body?.guild_id === "string" ? req.body.guild_id : null;
      const userId: string | null =
        typeof req.body?.member?.user?.id === "string"
          ? req.body.member.user.id
          : typeof req.body?.user?.id === "string"
            ? req.body.user.id
            : null;
      const requestIdRaw = (req as Request & { requestId?: string }).requestId;
      const requestId = typeof requestIdRaw === "string" ? requestIdRaw : null;
      const interactionId =
        typeof req.body?.id === "string" ? req.body.id : typeof req.body?.id === "number" ? String(req.body.id) : null;

      sendSlashCommandTelemetry({
        commandName: data.name,
        options: Array.isArray(data.options) ? data.options : [],
        guildId,
        userId,
        requestId,
        interactionId,
      }).catch((err) => {
        logError("command_telemetry_failed", err, {
          command: data.name,
          guildId,
          requestId,
          interactionId,
        });
      });

      switch (data.name) {
        case "help":
          return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              content:
                "Please visit this documentation site to better understand the usage of the commands: https://5ebot.com/",
            },
          });
        case "roll":
          rollResponse(data, res);
          return;
        case "in": // initiative tracker
          initiativeResponse(req, res);
          return;
        case "skills":
          skillsResponse(data, res);
          return;
        case "classes":
          classesResponse(data, res);
          return;
        case "subclasses":
          subClassesResponse(data, res);
          return;
        case "races":
          racesResponse(data, res);
          return;
        case "subraces":
          subRacesResponse(data, res);
          return;
        case "ability-scores":
          abilityScoresResponse(data, res);
          return;
        case "alignments":
          alignmentsResponse(data, res);
          return;
        case "languages":
          languagesResponse(data, res);
          return;
        case "conditions":
          conditionsResponse(data, res);
          return;
        case "spells":
          spellsResponse(data, res);
          return;
        case "proficiencies":
          proficienciesResponse(data, res);
          return;
        case "features":
          featuresResponse(data, res);
          return;
        case "traits":
          traitsResponse(data, res);
          return;
        case "equipment":
          equipmentResponse(data, res);
          return;
        case "magicitems":
          magicItemsResponse(data, res);
          return;
        case "monsters":
          monstersResponse(data, res);
          return;
        case "query": {
          const question: string = data.options[0].value;
          const briefOption = data.options.find((o: any) => o.name === "brief");
          const short: boolean = briefOption?.value === true;
          const appId = process.env.APP_ID as string;
          const token: string = req.body.token;

          // Fire in background; don't await so we respond within 3s
          handleQueryResponse(question, short, appId, token, {
            guildId,
            userId,
            requestId,
          }).catch((err) => {
            logError("query_background_failed", err, {
              command: "query",
              guildId: req.body?.guild_id,
              requestId: (req as any).requestId,
            });
          });

          return res.send({
            type: InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
          });
        }
        default:
          return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              content: "Unknown command.",
            },
          });
      }
    }
    // Handle interactions
    if (type === InteractionType.MESSAGE_COMPONENT) {
      switch (data.custom_id) {
        case "select_spell":
          selectSpellResponse(data, res);
          return;
        case "select_proficiency":
          selectProficiencyResponse(data, res);
          return;
        case "select_feature":
          selectFeatureResponse(data, res);
          return;
        case "select_trait":
          selectTrait(data, res);
          return;
        case "select_magicitem":
          selectMagicItemResponse(data, res);
          return;
        case "select_equipment":
          selectEquipmentResponse(data, res);
          return;
        case "select_monster":
          selectMonster(data, res);
          return;
        default:
          return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              content: "There was an error",
            },
          });
      }
    }

    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Unsupported interaction type.",
      },
    });
  } catch (err) {
    logError("interaction_controller_failed", err, {
      interactionType: req.body?.type,
      command: req.body?.data?.name,
      guildId: req.body?.guild_id,
      requestId: (req as any).requestId,
    });
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "There was an error",
      },
    });
  }
}

export default interactionsController;
