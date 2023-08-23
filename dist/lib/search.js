"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataByQuery = void 0;
function getDataByQuery(data, query) {
    const lowercaseQueryTokens = query.toLowerCase().split(/\s+/).filter(Boolean);
    return data
        .filter(item => {
        const lowerCaseItemName = item.name.toLowerCase();
        return lowercaseQueryTokens.every(token => lowerCaseItemName.includes(token));
    })
        .map(item => ({
        label: item.name,
        value: item.index,
        description: item.url
    }))
        .slice(0, 25);
}
exports.getDataByQuery = getDataByQuery;
