"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataByQuery = void 0;
function getDataByQuery(data, query) {
    var dataFiltered = data.filter(function (item) {
        var lowercaseQuery = query.toLowerCase();
        var lowerCaseItemName = item.name.toLowerCase();
        if (lowerCaseItemName.includes(lowercaseQuery))
            return item;
        else
            return;
    });
    var dataMapped = dataFiltered.map(function (item) { return ({
        label: item.name,
        value: item.index,
        description: item.url
    }); });
    if (dataMapped.length > 25)
        dataMapped.length = 25;
    return dataMapped;
}
exports.getDataByQuery = getDataByQuery;
