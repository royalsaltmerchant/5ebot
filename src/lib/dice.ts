import { InteractionResponseType } from "discord-interactions";
import { Response } from "express";
import { DataObject } from "../api/interactionController";

function calculateDiceRollResponse(data: DataObject) {
  // INIT Input
  const input = data.options[0].value.trim().toLowerCase();
  console.log(input, "**** INPUT ****");
  // get amount of dice
  const amountOfDice = parseInt(input.split("d", 2)[0].trim());
  console.log(amountOfDice, "Amount of Dice");
  // get dice sides
  let diceSides: string | number = input.split("d", 2)[1];
  if (diceSides.includes("+")) {
    diceSides = diceSides.split("+", 2)[0].trim();
  }
  diceSides = parseInt(diceSides);
  console.log(diceSides, "Dice Sides");
  // get modifiers
  let modifiers: any;
  if (input.includes("+")) {
    modifiers = input.split("+");
    modifiers.shift();
    for (var i = 0; i < modifiers.length; i++) {
      modifiers[i] = parseInt(modifiers[i]);
    }
    console.log(modifiers, "Modifiers");
  }
  // get dice rolls
  let diceRolls = [];
  for (var i = 0; i < amountOfDice; i++) {
    const newValue = Math.floor(Math.random() * diceSides + 1);
    diceRolls.push(newValue);
  }
  console.log(diceRolls, "Dice Rolls Array");

  // CALCULATE TOTAL
  // Add modifiers
  let total = 0; // ******************** TOTAL ******************************
  for (var i = 0; i < diceRolls.length; i++) {
    total += diceRolls[i];
  }
  if (modifiers) {
    for (var i = 0; i < modifiers.length; i++) {
      total += modifiers[i];
    }
  }
  console.log(total, "***** TOTAL *****");
  // Display Information
  let responseInfo = "";
  responseInfo += `**Input:** ${input}\n`;
  diceRolls.forEach((roll, index) => {
    let diceInfoString = `\n**Roll ${index + 1}:** ${roll}`;
    if (roll === diceSides) diceInfoString += " - **CRITICAL**";
    responseInfo += diceInfoString;
  });
  responseInfo += `\n\n**TOTAL = ${total}**`;
  return responseInfo;
}

function rollResponse(data: DataObject, res: Response) {
  try {
    const responseInfo = calculateDiceRollResponse(data)
    // send
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: responseInfo,
      },
    });
  } catch (err) {
    console.log(err);
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: `Failed to calculate, try again.`,
      },
    });
  }
}

export {
  rollResponse
}
