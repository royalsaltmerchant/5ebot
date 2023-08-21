import { InteractionType, InteractionResponseType } from "discord-interactions";
import { rollResponse } from "../lib/dice.js";
import {
  abilityScoresResponse,
  alignmentsResponse,
  conditionsResponse,
  equipmentResponse,
  featuresResponse,
  languagesResponse,
  magicItemsResponse,
  proficienciesResponse,
  selectEquipmentResponse,
  selectFeatureResponse,
  selectMagicItemResponse,
  selectProficiencyResponse,
  selectSpellResponse,
  selectTrait,
  skillsResponse,
  spellsResponse,
  traitsResponse,
} from "../lib/character.js";
import { Request, Response, NextFunction } from "express";

export interface DataObject {
  options: [
    {
      value: string;
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
        case "roll":
          rollResponse(data, res);
          return;
        case "skills":
          skillsResponse(data, res);
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
      }
    }
    // Handle interactions
    if (type === InteractionType.MESSAGE_COMPONENT) {
      console.log(data)
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
      }
    }
  } catch (err) {
    return console.log(err);
  }
}

export default interactionsController;
