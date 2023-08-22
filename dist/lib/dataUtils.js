"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRaceProficiencyOptions = exports.getAbilityBonuses = exports.getContentsInfo = exports.getArmorClassInfo = exports.returnArrayDataAsString = void 0;
function returnArrayDataAsString(array, key) {
    if (typeof array === "string")
        return array;
    if (!Array.isArray(array))
        return "Unknown";
    var string = "";
    if (key) {
        array.forEach(function (item) {
            string += "".concat(item[key], "\n");
        });
    }
    else {
        array.forEach(function (item) {
            string += "".concat(item, "\n");
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
        string += "".concat(item.item.name, ": ").concat(item.quantity, "\n");
    }
    return string;
}
exports.getContentsInfo = getContentsInfo;
function getAbilityBonuses(raceData) {
    var string = "";
    for (var _i = 0, _a = raceData.ability_bonuses; _i < _a.length; _i++) {
        var item = _a[_i];
        string += "".concat(item.ability_score.name, ": ").concat(item.bonus, "\n");
    }
    return string;
}
exports.getAbilityBonuses = getAbilityBonuses;
function getRaceProficiencyOptions(raceData) {
    var string = "";
    var fromData = raceData.starting_proficiency_options.from.options.map(function (option) { return option.item.name; });
    string += "Choose ".concat(raceData.starting_proficiency_options.choose, " from: ").concat(fromData.join(", "));
    return string;
}
exports.getRaceProficiencyOptions = getRaceProficiencyOptions;
