"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataByQuery = void 0;
function getDataByQuery(data, query) {
    var lowercaseQueryTokens = query.toLowerCase().split(/\s+/).filter(Boolean);
    return data
        .filter(function (item) {
        var lowerCaseItemName = item.name.toLowerCase();
        return lowercaseQueryTokens.every(function (token) { return lowerCaseItemName.includes(token); });
    })
        .map(function (item) { return ({
        label: item.name,
        value: item.index,
        description: item.url
    }); })
        .slice(0, 25);
}
exports.getDataByQuery = getDataByQuery;
