"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollResponse = void 0;
const discord_interactions_1 = require("discord-interactions");
function calculateDiceRollResponse(data) {
    const input = data.options[0].value.trim().toLowerCase();
    console.log(input, "**** INPUT ****");
    const amountOfDice = parseInt(input.split("d", 2)[0].trim());
    console.log(amountOfDice, "Amount of Dice");
    let diceSides = input.split("d", 2)[1];
    if (diceSides.includes("+")) {
        diceSides = diceSides.split("+", 2)[0].trim();
    }
    diceSides = parseInt(diceSides);
    console.log(diceSides, "Dice Sides");
    let modifiers;
    if (input.includes("+")) {
        modifiers = input.split("+");
        modifiers.shift();
        for (var i = 0; i < modifiers.length; i++) {
            modifiers[i] = parseInt(modifiers[i]);
        }
        console.log(modifiers, "Modifiers");
    }
    let diceRolls = [];
    for (var i = 0; i < amountOfDice; i++) {
        const newValue = Math.floor(Math.random() * diceSides + 1);
        diceRolls.push(newValue);
    }
    console.log(diceRolls, "Dice Rolls Array");
    let total = 0;
    for (var i = 0; i < diceRolls.length; i++) {
        total += diceRolls[i];
    }
    if (modifiers) {
        for (var i = 0; i < modifiers.length; i++) {
            total += modifiers[i];
        }
    }
    console.log(total, "***** TOTAL *****");
    let responseInfo = "";
    responseInfo += `**Input:** ${input}\n`;
    diceRolls.forEach((roll, index) => {
        let diceInfoString = `\n**Roll ${index + 1}:** ${roll}`;
        if (roll === diceSides)
            diceInfoString += " - **CRITICAL**";
        responseInfo += diceInfoString;
    });
    responseInfo += `\n\n**TOTAL = ${total}**`;
    return responseInfo;
}
function rollResponse(data, res) {
    try {
        const responseInfo = calculateDiceRollResponse(data);
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: responseInfo,
            },
        });
    }
    catch (err) {
        console.log(err);
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: `Failed to calculate, try again.`,
            },
        });
    }
}
exports.rollResponse = rollResponse;
