"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSensesInfo = exports.getMonsterArmorClassInfo = exports.getChooseFromOptions = exports.getAbilityBonuses = exports.getContentsInfo = exports.getArmorClassInfo = exports.returnArrayDataAsString = void 0;
function returnArrayDataAsString(array, key) {
    if (typeof array === "string")
        return array;
    if (!Array.isArray(array))
        return "Unknown";
    var string = "";
    if (key) {
        array.forEach((item) => {
            string += `${item[key]}, `;
        });
    }
    else {
        array.forEach((item) => {
            string += `${item}, `;
        });
    }
    return string;
}
exports.returnArrayDataAsString = returnArrayDataAsString;
function getArmorClassInfo(equipmentData) {
    let string = "";
    for (const [key, value] of Object.entries(equipmentData.armor_class)) {
        string += `${key}: ${value}, `;
    }
    return string;
}
exports.getArmorClassInfo = getArmorClassInfo;
function getContentsInfo(equipmentData) {
    let string = "";
    for (const item of equipmentData.contents) {
        string += `${item.item.name}: ${item.quantity}, `;
    }
    return string;
}
exports.getContentsInfo = getContentsInfo;
function getAbilityBonuses(raceData) {
    let string = "";
    for (const item of raceData.ability_bonuses) {
        string += `${item.ability_score.name}: ${item.bonus}, `;
    }
    return string;
}
exports.getAbilityBonuses = getAbilityBonuses;
function getChooseFromOptions(data) {
    let string = "";
    const fromData = data.from.options.map((option) => option.item.name);
    string += `Choose ${data.choose} from: ${fromData.join(", ")}`;
    return string;
}
exports.getChooseFromOptions = getChooseFromOptions;
function getMonsterArmorClassInfo(monsterData) {
    let string = "";
    for (const item of monsterData.armor_class) {
        string += `${item.type}: ${item.value}, `;
    }
    return string;
}
exports.getMonsterArmorClassInfo = getMonsterArmorClassInfo;
function getSensesInfo(monsterData) {
    let string = "";
    for (const [key, value] of Object.entries(monsterData.senses)) {
        string += `${key}: ${value}, `;
    }
    return string;
}
exports.getSensesInfo = getSensesInfo;
