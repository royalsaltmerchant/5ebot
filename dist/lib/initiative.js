"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initiativeResponse = void 0;
var discord_interactions_1 = require("discord-interactions");
var server_1 = require("../server");
function objectFromArray(arr) {
    return arr.reduce(function (acc, obj) {
        acc[obj.name] = obj.value;
        return acc;
    }, {});
}
function sortedListData(data) {
    return Object.entries(data).sort(function (obj1, obj2) {
        var value1 = parseInt(obj1[1]);
        var value2 = parseInt(obj2[1]);
        return value2 - value1;
    });
}
function getFormattedListDataWithCurrentPosition(listData, currentPosition) {
    var formattedList = Object.entries(listData)
        .sort(function (obj1, obj2) {
        var value1 = parseInt(obj1[1]);
        var value2 = parseInt(obj2[1]);
        return value2 - value1;
    })
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        if (key == currentPosition) {
            return "".concat(key, " : ").concat(value, " - CURRENT");
        }
        else
            return "".concat(key, " : ").concat(value);
    });
    return formattedList.join("\n");
}
function getNextPosition(listData, currentPosition) {
    var sortedList = sortedListData(listData);
    var index = sortedList.findIndex(function (_a) {
        var key = _a[0], _ = _a[1];
        return key == currentPosition;
    });
    index = (index + 1) % sortedList.length;
    return sortedList[index][0];
}
function handleListResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var redisKey, currentPositionKey, listData, currentPosition, content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    redisKey = "".concat(data.id, "-initiative");
                    currentPositionKey = "".concat(redisKey, "-currentPosition");
                    server_1.redisClient.connect();
                    return [4, server_1.redisClient.hGetAll(redisKey)];
                case 1:
                    listData = _a.sent();
                    return [4, server_1.redisClient.get(currentPositionKey)];
                case 2:
                    currentPosition = _a.sent();
                    content = getFormattedListDataWithCurrentPosition(listData, currentPosition);
                    if (content == "")
                        content = "List is empty";
                    server_1.redisClient.quit();
                    return [2, res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: content,
                            },
                        })];
            }
        });
    });
}
function handleAddResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var redisKey, currentPositionKey, objectArrOptions, name, value, listData, currentPosition, content;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    redisKey = "".concat(data.id, "-initiative");
                    currentPositionKey = "".concat(redisKey, "-currentPosition");
                    objectArrOptions = objectFromArray(data.options[0].options);
                    name = objectArrOptions.name;
                    value = objectArrOptions.value;
                    server_1.redisClient.connect();
                    return [4, server_1.redisClient.hSet(redisKey, (_a = {},
                            _a[name] = value,
                            _a))];
                case 1:
                    _b.sent();
                    return [4, server_1.redisClient.hGetAll(redisKey)];
                case 2:
                    listData = _b.sent();
                    return [4, server_1.redisClient.get(currentPositionKey)];
                case 3:
                    currentPosition = _b.sent();
                    content = getFormattedListDataWithCurrentPosition(listData, currentPosition);
                    server_1.redisClient.quit();
                    return [2, res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: content,
                            },
                        })];
            }
        });
    });
}
function handleRemoveResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var redisKey, currentPositionKey, itemToRemoveKey, listData, currentPosition, content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    redisKey = "".concat(data.id, "-initiative");
                    currentPositionKey = "".concat(redisKey, "-currentPosition");
                    itemToRemoveKey = data.options[0].options[0].value;
                    server_1.redisClient.connect();
                    return [4, server_1.redisClient.hDel(redisKey, itemToRemoveKey)];
                case 1:
                    _a.sent();
                    return [4, server_1.redisClient.hGetAll(redisKey)];
                case 2:
                    listData = _a.sent();
                    return [4, server_1.redisClient.get(currentPositionKey)];
                case 3:
                    currentPosition = _a.sent();
                    content = getFormattedListDataWithCurrentPosition(listData, currentPosition);
                    server_1.redisClient.quit();
                    return [2, res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: content,
                            },
                        })];
            }
        });
    });
}
function handleNextResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var redisKey, currentPositionKey, currentPosition, listData, nextPosition, content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    redisKey = "".concat(data.id, "-initiative");
                    currentPositionKey = "".concat(redisKey, "-currentPosition");
                    server_1.redisClient.connect();
                    return [4, server_1.redisClient.get(currentPositionKey)];
                case 1:
                    currentPosition = _a.sent();
                    return [4, server_1.redisClient.hGetAll(redisKey)];
                case 2:
                    listData = _a.sent();
                    nextPosition = getNextPosition(listData, currentPosition);
                    return [4, server_1.redisClient.set(currentPositionKey, nextPosition)];
                case 3:
                    _a.sent();
                    content = getFormattedListDataWithCurrentPosition(listData, nextPosition);
                    server_1.redisClient.quit();
                    return [2, res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: content,
                            },
                        })];
            }
        });
    });
}
function handleClearResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        var redisKey, currentPositionKey;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    redisKey = "".concat(data.id, "-initiative");
                    currentPositionKey = "".concat(redisKey, "-currentPosition");
                    server_1.redisClient.connect();
                    return [4, server_1.redisClient.del(redisKey)];
                case 1:
                    _a.sent();
                    return [4, server_1.redisClient.del(currentPositionKey)];
                case 2:
                    _a.sent();
                    server_1.redisClient.quit();
                    return [2, res.send({
                            type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                            data: {
                                content: "Initiative list is now empty",
                            },
                        })];
            }
        });
    });
}
function initiativeResponse(data, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                switch (data.options[0].name) {
                    case "list":
                        handleListResponse(data, res);
                        return [2];
                    case "add":
                        handleAddResponse(data, res);
                        return [2];
                    case "remove":
                        handleRemoveResponse(data, res);
                        return [2];
                    case "next":
                        handleNextResponse(data, res);
                        return [2];
                    case "clear":
                        handleClearResponse(data, res);
                        return [2];
                    default:
                        return [2, res.send({
                                type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                                data: {
                                    content: "There was an error",
                                },
                            })];
                }
            }
            catch (err) {
                console.log(err);
                return [2, res.send({
                        type: discord_interactions_1.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                        data: {
                            content: "There was an error",
                        },
                    })];
            }
            return [2];
        });
    });
}
exports.initiativeResponse = initiativeResponse;
