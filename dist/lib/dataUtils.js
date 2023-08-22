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
        array.forEach(function (item) {
            string += "".concat(item[key], ", ");
        });
    }
    else {
        array.forEach(function (item) {
            string += "".concat(item, ", ");
        });
    }
    return string;
}
exports.returnArrayDataAsString = returnArrayDataAsString;
function getArmorClassInfo(equipmentData) {
    var string = "";
    for (var _i = 0, _a = Object.entries(equipmentData.armor_class); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        string += "".concat(key, ": ").concat(value, ", ");
    }
    return string;
}
exports.getArmorClassInfo = getArmorClassInfo;
function getContentsInfo(equipmentData) {
    var string = "";
    for (var _i = 0, _a = equipmentData.contents; _i < _a.length; _i++) {
        var item = _a[_i];
        string += "".concat(item.item.name, ": ").concat(item.quantity, ", ");
    }
    return string;
}
exports.getContentsInfo = getContentsInfo;
function getAbilityBonuses(raceData) {
    var string = "";
    for (var _i = 0, _a = raceData.ability_bonuses; _i < _a.length; _i++) {
        var item = _a[_i];
        string += "".concat(item.ability_score.name, ": ").concat(item.bonus, ", ");
    }
    return string;
}
exports.getAbilityBonuses = getAbilityBonuses;
function getChooseFromOptions(data) {
    var string = "";
    var fromData = data.from.options.map(function (option) { return option.item.name; });
    string += "Choose ".concat(data.choose, " from: ").concat(fromData.join(", "));
    return string;
}
exports.getChooseFromOptions = getChooseFromOptions;
function getMonsterArmorClassInfo(monsterData) {
    var string = "";
    for (var _i = 0, _a = monsterData.armor_class; _i < _a.length; _i++) {
        var item = _a[_i];
        string += "".concat(item.type, ": ").concat(item.value, ", ");
    }
    return string;
}
exports.getMonsterArmorClassInfo = getMonsterArmorClassInfo;
function getSensesInfo(monsterData) {
    var string = "";
    for (var _i = 0, _a = Object.entries(monsterData.senses); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        string += "".concat(key, ": ").concat(value, ", ");
    }
    return string;
}
exports.getSensesInfo = getSensesInfo;
