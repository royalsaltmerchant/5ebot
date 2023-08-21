"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollResponse = void 0;
var discord_interactions_1 = require("discord-interactions");
function calculateDiceRollResponse(data) {
    var input = data.options[0].value.trim().toLowerCase();
    console.log(input, "**** INPUT ****");
    var amountOfDice = parseInt(input.split("d", 2)[0].trim());
    console.log(amountOfDice, "Amount of Dice");
    var diceSides = input.split("d", 2)[1];
    if (diceSides.includes("+")) {
        diceSides = diceSides.split("+", 2)[0].trim();
    }
    diceSides = parseInt(diceSides);
    console.log(diceSides, "Dice Sides");
    var modifiers;
    if (input.includes("+")) {
        modifiers = input.split("+");
        modifiers.shift();
        for (var i = 0; i < modifiers.length; i++) {
            modifiers[i] = parseInt(modifiers[i]);
        }
        console.log(modifiers, "Modifiers");
    }
    var diceRolls = [];
    for (var i = 0; i < amountOfDice; i++) {
        var newValue = Math.floor(Math.random() * diceSides + 1);
        diceRolls.push(newValue);
    }
    console.log(diceRolls, "Dice Rolls Array");
    var total = 0;
    for (var i = 0; i < diceRolls.length; i++) {
        total += diceRolls[i];
    }
    if (modifiers) {
        for (var i = 0; i < modifiers.length; i++) {
            total += modifiers[i];
        }
    }
    console.log(total, "***** TOTAL *****");
    var responseInfo = "";
    responseInfo += "**Input:** ".concat(input, "\n");
    diceRolls.forEach(function (roll, index) {
        var diceInfoString = "\n**Roll ".concat(index + 1, ":** ").concat(roll);
        if (roll === diceSides)
            diceInfoString += " - **CRITICAL**";
        responseInfo += diceInfoString;
    });
    responseInfo += "\n\n**TOTAL = ".concat(total, "**");
    return responseInfo;
}
function rollResponse(data, res) {
    try {
        var responseInfo = calculateDiceRollResponse(data);
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
                content: "Failed to calculate, try again.",
            },
        });
    }
}
exports.rollResponse = rollResponse;
