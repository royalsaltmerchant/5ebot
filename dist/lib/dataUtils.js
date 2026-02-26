"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSensesInfo = exports.getMonsterArmorClassInfo = exports.getChooseFromOptions = exports.getAbilityBonuses = exports.getContentsInfo = exports.getArmorClassInfo = exports.returnArrayDataAsString = void 0;
function returnArrayDataAsString(array, key) {
    if (typeof array === "string")
        return array;
    if (!Array.isArray(array))
        return "Unknown";
    if (key) {
        return array.map((item) => item[key]).join(", ");
    }
    else {
        return array.map((item) => String(item)).join(", ");
    }
}
exports.returnArrayDataAsString = returnArrayDataAsString;
function getArmorClassInfo(equipmentData) {
    return Object.entries(equipmentData.armor_class)
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ");
}
exports.getArmorClassInfo = getArmorClassInfo;
function getContentsInfo(equipmentData) {
    return equipmentData.contents
        .map((item) => `${item.item.name}: ${item.quantity}`)
        .join(", ");
}
exports.getContentsInfo = getContentsInfo;
function getAbilityBonuses(raceData) {
    return raceData.ability_bonuses
        .map((item) => `${item.ability_score.name}: ${item.bonus}`)
        .join(", ");
}
exports.getAbilityBonuses = getAbilityBonuses;
function getChooseFromOptions(data) {
    const fromData = data.from.options.map((option) => option.item.name);
    return `Choose ${data.choose} from: ${fromData.join(", ")}`;
}
exports.getChooseFromOptions = getChooseFromOptions;
function getMonsterArmorClassInfo(monsterData) {
    return monsterData.armor_class
        .map((item) => `${item.type}: ${item.value}`)
        .join(", ");
}
exports.getMonsterArmorClassInfo = getMonsterArmorClassInfo;
function getSensesInfo(monsterData) {
    return Object.entries(monsterData.senses)
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ");
}
exports.getSensesInfo = getSensesInfo;
