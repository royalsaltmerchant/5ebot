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
          initiativeResponse(data, res);
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
  } catch (err) {
    console.log(err);
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "There was an error",
      },
    });
  }
}

export default interactionsController;
