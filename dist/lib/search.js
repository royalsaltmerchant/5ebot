"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExactSearchMatch = exports.getDataByQuery = void 0;
function normalizeSearchText(value) {
    return value
        .toLowerCase()
        .normalize("NFKD")
        .replace(/['’]/g, "")
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
}
function compactSearchText(value) {
    return normalizeSearchText(value).replace(/\s+/g, "");
}
function searchTokens(value) {
    return normalizeSearchText(value).split(/\s+/).filter(Boolean);
}
function getSearchScore(item, query) {
    const normalizedQuery = normalizeSearchText(query);
    const compactQuery = compactSearchText(query);
    const normalizedName = normalizeSearchText(item.name);
    const compactName = compactSearchText(item.name);
    const normalizedIndex = normalizeSearchText(item.index);
    const compactIndex = compactSearchText(item.index);
    const queryTokens = searchTokens(query);
    if (!normalizedQuery || !compactQuery || queryTokens.length === 0)
        return null;
    if (compactName === compactQuery || compactIndex === compactQuery)
        return 0;
    if (normalizedName.startsWith(normalizedQuery))
        return 1;
    if (compactName.includes(compactQuery) || compactIndex.includes(compactQuery))
        return 2;
    if (queryTokens.every((token) => normalizedName.includes(token) || normalizedIndex.includes(token))) {
        return 3;
    }
    return null;
}
function isExactSearchMatch(item, query) {
    const compactQuery = compactSearchText(query);
    return Boolean(compactQuery &&
        (compactSearchText(item.name) === compactQuery ||
            compactSearchText(item.index) === compactQuery));
}
exports.isExactSearchMatch = isExactSearchMatch;
function getDataByQuery(data, query) {
    return data
        .map((item) => ({
        item,
        score: getSearchScore(item, query),
    }))
        .filter((result) => result.score !== null)
        .sort((a, b) => a.score - b.score || a.item.name.localeCompare(b.item.name))
        .map(({ item }) => ({
        label: item.name,
        value: item.index,
        description: item.url
    }))
        .slice(0, 25);
}
exports.getDataByQuery = getDataByQuery;
