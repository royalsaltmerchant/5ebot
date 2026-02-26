"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollResponse = void 0;
const discord_interactions_1 = require("discord-interactions");
function calculateDiceRollResponse(data) {
    const raw = data.options[0].value.trim();
    let mode = 'normal';
    let stripped = raw;
    if (/\b(adv(antage)?)\b/i.test(stripped)) {
        mode = 'adv';
        stripped = stripped.replace(/\b(adv(antage)?)\b/gi, '').trim();
    }
    else if (/\b(dis(advantage)?)\b/i.test(stripped)) {
        mode = 'dis';
        stripped = stripped.replace(/\b(dis(advantage)?)\b/gi, '').trim();
    }
    const diceMatch = stripped.match(/^(\d+)\s*d\s*(\d+)((?:\s*[+-]\s*\d+)*)(.*)?$/i);
    if (!diceMatch) {
        return `Invalid input: "${raw}". Try: 2d6+3, 1d20 adv, 1d20+5 adv attack roll`;
    }
    const amount = parseInt(diceMatch[1], 10);
    const sides = parseInt(diceMatch[2], 10);
    const modString = (diceMatch[3] || '').trim();
    const label = (diceMatch[4] || '').trim().replace(/^[,\s]+/, '');
    if (amount < 1 || amount > 100)
        return 'Number of dice must be between 1 and 100.';
    if (sides < 2 || sides > 1000)
        return 'Dice sides must be between 2 and 1000.';
    let modifierTotal = 0;
    const modMatches = modString.match(/[+-]\s*\d+/g) || [];
    modMatches.forEach((m) => {
        modifierTotal += parseInt(m.replace(/\s/g, ''), 10);
    });
    function rollDie() {
        return Math.floor(Math.random() * sides) + 1;
    }
    let rolls;
    let keptRoll = null;
    let droppedRoll = null;
    if (mode !== 'normal') {
        const roll1 = rollDie();
        const roll2 = rollDie();
        if (mode === 'adv') {
            keptRoll = Math.max(roll1, roll2);
            droppedRoll = Math.min(roll1, roll2);
        }
        else {
            keptRoll = Math.min(roll1, roll2);
            droppedRoll = Math.max(roll1, roll2);
        }
        rolls = [keptRoll];
    }
    else {
        rolls = [];
        for (let i = 0; i < amount; i++) {
            rolls.push(rollDie());
        }
    }
    const rollSum = rolls.reduce((a, b) => a + b, 0);
    const total = rollSum + modifierTotal;
    const modeLabel = mode === 'adv' ? ' (Advantage)' : mode === 'dis' ? ' (Disadvantage)' : '';
    const titleLine = label ? `🎲 **${label}**${modeLabel}` : `🎲 **Roll**${modeLabel}`;
    let lines = titleLine + '\n';
    if (mode !== 'normal') {
        lines += `Roll 1: ${keptRoll} ✓\n`;
        lines += `Roll 2: ${droppedRoll} ✗ (dropped)\n`;
    }
    else {
        rolls.forEach((r, i) => {
            const crit = r === sides ? ' — **CRITICAL**' : '';
            lines += `Roll ${i + 1}: ${r}${crit}\n`;
        });
    }
    if (modifierTotal !== 0) {
        lines += `Modifier: ${modifierTotal > 0 ? '+' : ''}${modifierTotal}\n`;
    }
    lines += `**TOTAL = ${total}**`;
    return lines;
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
        return res.send({
            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: `Failed to calculate, try again.`,
            },
        });
    }
}
exports.rollResponse = rollResponse;
